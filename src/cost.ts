import type { Limit } from './limits.ts';

/** What GitHub charges for a query: one point for each 100 nodes it may read, at least one. */
export function costOf(nodes: number): number {
  return Math.max(1, Math.ceil(nodes / 100));
}

/** Whether a query of `nodes` fits in what's left of `limit` after `spent` points. */
export function fits(limit: Limit, spent: number, nodes: number): boolean {
  return spent + costOf(nodes) <= limit.points;
}
