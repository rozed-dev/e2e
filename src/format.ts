import type { Line } from './parser.ts';

export { wrap } from './text/wrap.ts';

/** `lines` as text, each after its number. */
export function format(lines: readonly Line[]): string {
  return lines.map((line) => `${line.number}: ${line.text}`).join('\n');
}
