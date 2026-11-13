/** The first wait between tries, in milliseconds. */
const FIRST = 250;

/** How much longer each wait is than the one before. */
const FACTOR = 2;

/** The longest wait, in milliseconds. */
const MOST = 30_000;

/** How long to wait after try `tried`, counted from 0: longer each time, up to `MOST`. */
export function delayFor(tried: number): number {
  return Math.min(MOST, FIRST * FACTOR ** tried);
}

/** A wait of up to `delay` milliseconds, at random, so clients that failed together retry apart. */
export function jittered(delay: number, random = Math.random): number {
  return Math.floor(delay * random());
}
