// Fixture E9: clamp's arguments are reordered, in its signature and at its call.

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function percent(done: number, total: number): number {
  return clamp((done / total) * 100, 0, 100);
}
