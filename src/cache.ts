/** Plans read lately, by the plan's name. */
const cached = new Map<string, number>();

/** Keeps the limit read for the plan named `name`. */
export function keep(name: string, points: number): void {
  cached.set(name, points);
}

/** The limit kept for the plan named `name`, if any. */
export function kept(name: string): number | undefined {
  return cached.get(name);
}
