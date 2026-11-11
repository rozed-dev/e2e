/** A line of input: its number, from 1, and its text. */
export interface Line {
  readonly number: number;
  readonly text: string;
}

/** Splits `input` into lines, on `\n`. */
export function parse(input: string): Line[] {
  return input.split('\n').map((text, index) => ({ number: index + 1, text }));
}

/** The lines of `input` that aren't blank. */
export function filled(input: string): Line[] {
  return parse(input).filter((line) => line.text.trim() !== '');
}
