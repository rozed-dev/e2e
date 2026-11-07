// Fixture E9: clamp's arguments are reordered, in its signature and at its call.

export function clamp(min: number, max: number, value: number): number {
  return Math.min(Math.max(value, min), max);
}

export function percent(done: number, total: number): number {
  return clamp(0, 100, (done / total) * 100);
}
