import { systemClock, type Clock } from './clock.ts';
import { withDefaults, type LimiterConfig } from './config.ts';

/** A request over its tenant's limit. */
export class LimitError extends Error {
  readonly tenant: string;

  constructor(tenant: string) {
    super(`${tenant} is over its limit`);
    this.tenant = tenant;
  }
}

/** A tenant's tokens. */
interface Bucket {
  tokens: number;
  /** When `tokens` was last brought up to date. */
  updatedAt: number;
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

  /** Takes a token from `tenant`'s bucket, or throws LimitError when it has none. */
  take(tenant: string): void {
    const bucket = this.#bucket(tenant);
    this.#refill(bucket);
    if (bucket.tokens < 1) throw new LimitError(tenant);
    bucket.tokens -= 1;
  }

  /** The tenant's bucket, made full on the tenant's first request. */
  #bucket(tenant: string): Bucket {
    let bucket = this.#buckets.get(tenant);
    if (bucket === undefined) {
      bucket = { tokens: this.#config.capacity, updatedAt: this.#clock.now() };
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
}
