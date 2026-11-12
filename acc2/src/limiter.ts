import { withDefaults, type LimiterConfig } from './config.ts';
import { systemClock, type Clock } from './time.ts';
import { Waiters } from './waiters.ts';

/** A request that waited past its tenant's timeout, or found too many waiting already. */
export class LimitError extends Error {
  readonly tenant: string;

  constructor(tenant: string) {
    super(`${tenant} is over its limit`);
    this.tenant = tenant;
  }
}

/** A tenant's tokens, and the requests waiting for them. */
interface Bucket {
  tokens: number;
  /** When `tokens` was last brought up to date. */
  updatedAt: number;
  /** The requests waiting for a token, oldest first. */
  waiters: Waiters;
  /** Cancels the timer that wakes the next waiter, while one is set. */
  cancelWake: (() => void) | undefined;
}

/** Limits each tenant's requests with a token bucket of its own. */
export class Limiter {
  readonly #config: LimiterConfig;
  readonly #clock: Clock;
  readonly #buckets = new Map<string, Bucket>();

  constructor(config: Partial<LimiterConfig> = {}, clock: Clock = systemClock) {
    this.#config = withDefaults(config);
    this.#clock = clock;
  }

  /**
   * Takes a token from `tenant`'s bucket. With none free, waits for one, oldest request first,
   * for up to the config's `timeoutMs`, then throws LimitError. So does a request that finds
   * `maxWaiting` requests waiting already.
   */
  async take(tenant: string): Promise<void> {
    const bucket = this.#bucket(tenant);
    this.#refill(bucket);
    if (bucket.waiters.size === 0 && bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return;
    }
    if (bucket.waiters.size >= this.#config.maxWaiting) throw new LimitError(tenant);
    const waiting = bucket.waiters.wait(
      this.#clock,
      this.#config.timeoutMs,
      () => new LimitError(tenant),
    );
    this.#scheduleWake(bucket);
    return waiting;
  }

  /** The tenant's bucket, made full on the tenant's first request. */
  #bucket(tenant: string): Bucket {
    let bucket = this.#buckets.get(tenant);
    if (bucket === undefined) {
      bucket = {
        tokens: this.#config.capacity,
        updatedAt: this.#clock.now(),
        waiters: new Waiters(),
        cancelWake: undefined,
      };
      this.#buckets.set(tenant, bucket);
    }
    return bucket;
  }

  /** Adds the tokens earned since the bucket was last brought up to date. */
  #refill(bucket: Bucket): void {
    const now = this.#clock.now();
    const earned = ((now - bucket.updatedAt) / 1000) * this.#config.refillPerSecond;
    bucket.tokens = Math.min(this.#config.capacity, bucket.tokens + earned);
    bucket.updatedAt = now;
  }

  /**
   * Sets a timer for when the bucket next has a whole token, which hands tokens to the oldest
   * waiters, and sets itself again while any are left waiting. One timer per bucket at most.
   */
  #scheduleWake(bucket: Bucket): void {
    if (bucket.cancelWake !== undefined) return;
    const missing = Math.max(0, 1 - bucket.tokens);
    const ms = Math.ceil((missing / this.#config.refillPerSecond) * 1000);
    bucket.cancelWake = this.#clock.after(ms, () => {
      bucket.cancelWake = undefined;
      this.#refill(bucket);
      while (bucket.tokens >= 1 && bucket.waiters.wakeOldest()) bucket.tokens -= 1;
      if (bucket.waiters.size > 0) this.#scheduleWake(bucket);
    });
  }
}
