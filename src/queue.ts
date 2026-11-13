/** A job the queue runs: a name, and the work itself. */
export interface Job {
  readonly name: string;
  readonly run: () => Promise<void>;
}

/** How many jobs run at once. */
const CONCURRENCY = 2;

/** Jobs waiting their turn, first in first out. */
const waiting: Job[] = [];

/** How many jobs are running now. */
let running = 0;

/** Adds a job to the end of the queue, and starts it if there's room. */
export function enqueue(job: Job): void {
  waiting.push(job);
  next();
}

/** How many jobs wait their turn. */
export function size(): number {
  return waiting.length;
}

/** Starts the next job, if one waits and there's room. */
function next(): void {
  if (running >= CONCURRENCY) return;
  const job = waiting.shift();
  if (job === undefined) return;
  running += 1;
  void job.run().finally(() => {
    running -= 1;
    next();
  });
}
