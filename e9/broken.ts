// Fixture E9: the new version has a parse error, so the syntax-aware view falls back.

export function total(items: number[]): number {
  let sum = 0;
  for (const item of items) {
    sum += item;
  }
  return sum;
}
