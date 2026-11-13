import { DEFAULT_LIMIT, type Limit } from './limits.ts';

/** Each plan's limit, by the plan's name. */
const PLANS: Readonly<Record<string, Limit>> = {
  free: DEFAULT_LIMIT,
  team: { points: 15000 },
};

/** The limit of the plan named `name`, or the default for a plan Lo doesn't know. */
export function limitOf(name: string): Limit {
  return Object.hasOwn(PLANS, name) ? (PLANS[name] ?? DEFAULT_LIMIT) : DEFAULT_LIMIT;
}
