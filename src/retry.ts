/** How long to wait between tries, in milliseconds. */
const DELAY = 1000;

/** Waits `ms` milliseconds. */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Runs `attempt` until it succeeds, at most `times` times, and throws its last error. */
export async function retry(attempt: () => Promise<void>, times = 3): Promise<void> {
  let last: unknown;
  for (let tried = 0; tried < times; tried++) {
    try {
      return await attempt();
    } catch (error) {
      last = error;
      await sleep(DELAY);
    }
  }
  throw last;
}
