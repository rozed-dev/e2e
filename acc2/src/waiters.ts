import type { Clock } from './time.ts';

/** A request waiting for a token. */
interface Waiter {
  resolve(): void;
  /** Cancels the waiter's timeout. */
  cancel(): void;
}

/** The requests waiting for one tenant's tokens, oldest first. */
export class Waiters {
  readonly #queue: Waiter[] = [];

  /** How many requests are waiting. */
  get size(): number {
    return this.#queue.length;
  }

  /**
   * Waits until `wakeOldest` lets this request go on, or fails with `onTimeout()`'s error once
   * `timeoutMs` has passed on `clock`.
   */
  wait(clock: Clock, timeoutMs: number, onTimeout: () => Error): Promise<void> {
    return new Promise((resolve, reject) => {
      const waiter: Waiter = {
        resolve,
        cancel: clock.after(timeoutMs, () => {
          this.#remove(waiter);
          reject(onTimeout());
        }),
      };
      this.#queue.push(waiter);
    });
  }

  /** Lets the request that has waited longest go on. Returns false when none is waiting. */
  wakeOldest(): boolean {
    const waiter = this.#queue.shift();
    if (!waiter) return false;
    waiter.cancel();
    waiter.resolve();
    return true;
  }

  /** Takes `waiter` out of the queue, once its time is up. */
  #remove(waiter: Waiter): void {
    const at = this.#queue.indexOf(waiter);
    if (at !== -1) this.#queue.splice(at, 1);
  }
}
