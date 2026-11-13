/** How many nodes a connection of `first` items, each with `inner` items of its own, may read. */
export function nodesOf(first: number, inner = 0): number {
  return first + first * inner;
}
