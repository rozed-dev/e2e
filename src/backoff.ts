/** The first wait between tries, in milliseconds. */
const FIRST = 250;

/** How much longer each wait is than the one before. */
const FACTOR = 2;

/** How long to wait after try `tried`, counted from 0: longer each time. */
export function delayFor(tried: number): number {
  return FIRST * FACTOR ** tried;
}

/** A wait of up to `delay` milliseconds, at random, so clients that failed together retry apart. */
export function jittered(delay: number, random = Math.random): number {
  return Math.floor(delay * random());
}
