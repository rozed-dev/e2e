/** Plans read lately, by the plan's name, with when each was read. */
const cached = new Map<string, { points: number; at: number }>();

/** How long a plan is kept, in milliseconds. */
const KEPT_FOR = 60_000;

/** Keeps the limit read for the plan named `name`, at `at`. */
export function keep(name: string, points: number, at: number): void {
  cached.set(name, { points, at });
}

/** The limit kept for the plan named `name`, unless it was read too long before `now`. */
export function kept(name: string, now: number): number | undefined {
  const plan = cached.get(name);
  return plan !== undefined && now - plan.at < KEPT_FOR ? plan.points : undefined;
}
