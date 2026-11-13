import type { Limit } from './limits.ts';

/** The line logged when a client reaches its plan's limit. */
export function limitReached(plan: string, limit: Limit): string {
  return `${plan} reached its limit of ${limit.points} points`;
}
