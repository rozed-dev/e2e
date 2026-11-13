/** Runs `attempt` until it succeeds, at most `times` times, and throws its last error. */
export async function retry<T>(attempt: () => Promise<T>, times: number): Promise<T> {
  let last: unknown;
  for (let tried = 0; tried < times; tried++) {
    try {
      return await attempt();
    } catch (error) {
      last = error;
    }
  }
  throw last;
}
