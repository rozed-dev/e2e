// Retries a call that fails for a moment, such as a request a server refused while busy.

/** How long to wait before each retry, and how many retries to make. */
export interface Backoff {
  /** The first wait, in milliseconds. Each wait after is twice the last. */
  first: number;
  /** The longest wait, in milliseconds. */
  most: number;
  /** How many times to retry after the first try. */
  retries: number;
}

export const DEFAULT_BACKOFF: Backoff = { first: 100, most: 2_000, retries: 4 };

/** The wait before retry `attempt`, counting from 0: doubled each time, and never past `most`. */
export function waitBefore(attempt: number, backoff: Backoff): number {
  return Math.min(backoff.first * 2 ** attempt, backoff.most);
}

/**
 * Calls `call` until it succeeds, or until it has failed `retries` more times than once, waiting
 * longer before each retry. Only errors `retryable` accepts are retried; any other is thrown at once.
 */
export async function retry<T>(
  call: () => Promise<T>,
  retryable: (error: unknown) => boolean,
  backoff: Backoff = DEFAULT_BACKOFF,
  sleep: (ms: number) => Promise<void> = (ms) => new Promise((done) => setTimeout(done, ms)),
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await call();
    } catch (error) {
      if (attempt >= backoff.retries || !retryable(error)) throw error;
      await sleep(waitBefore(attempt, backoff));
    }
  }
}
