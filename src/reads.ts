import { retry } from './retry.ts';

/** Reads `path`, trying three times when a read times out. */
export function read(path: string, fetch: (path: string) => Promise<string>): Promise<string> {
  return retry(() => fetch(path), 3);
}
