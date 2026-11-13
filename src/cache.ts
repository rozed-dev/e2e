/** Plans read lately, by the plan's name. */
const cached = new Map<string, number>();

/** Keeps the limit read for the plan named `name`. */
export function keep(name: string, points: number): void {
  cached.set(name, points);
}
