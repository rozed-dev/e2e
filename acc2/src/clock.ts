/** A source of the current time, so tests can stand in for the system's clock. */
export interface Clock {
  /** Milliseconds since the epoch. */
  now(): number;
  /** Calls `callback` after `ms` milliseconds, and returns a function that cancels it. */
  after(ms: number, callback: () => void): () => void;
}

/** The system's clock. */
export const systemClock: Clock = {
  now: () => Date.now(),
  after(ms, callback) {
    const timer = setTimeout(callback, ms);
    return () => clearTimeout(timer);
  },
};
