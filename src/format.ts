import type { Line } from './parse.ts';

/** `lines` as text, each after its number. */
export function format(lines: readonly Line[]): string {
  return lines.map((line) => `${line.number}: ${line.text}`).join('\n');
}

/** `text` broken into lines of at most `width` characters, at spaces. */
export function wrap(text: string, width: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if (line !== '' && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line === '' ? word : `${line} ${word}`;
    }
  }
  if (line !== '') lines.push(line);
  return lines;
}
