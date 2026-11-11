---
format: 1
pr: 80
commit: 45e4f22d09ea29631f43d3f8c1e05b7fb4001099
---

## tl;dr

The parser moves to src/parser.ts and splits on `\r\n` as well as `\n`, so a file saved on Windows
reads as the same [lines](term:line). `wrap` moves into a module of its own, and src/legacy.ts goes.

## How it works

[The parser](code:src/parser.ts) now splits on either line ending:

:::code src/parser.ts#L7-L10
:::

The formatter takes its `Line` from the new path, and passes `wrap` on from where it lives now:

:::code src/format.ts#L1-L3
:::

How a [line](term:line) is written out hasn't changed:

:::code src/format.ts#L5-L8
:::

:::figure figures/flow.svg
Input goes through parse, then format. Wrap sits in its own module, which format passes on.

- [parse](code:src/parser.ts#L8-L10)
- [format](code:src/format.ts#L6-L8)
- [wrap](code:src/text/wrap.ts#L2-L15)
- [lines](term:line)
:::

:::walkthrough From input to text
:::step src/parser.ts#L8-L10
`parse` splits the input on `\n` or `\r\n` and numbers each [line](term:line) from 1.
:::
:::step src/parser.ts#L13-L15
`filled` keeps the lines that aren't blank.
:::
:::step src/format.ts#L6-L8
`format` writes each line after its number.
:::
:::

For example:

```ts
format(parse('first\r\nsecond'));
// '1: first\n2: second'
```

## Where to look

:::tabs
:::tab Before
`wrap` sat in src/format.ts, beside `format`.
:::
:::tab After
`wrap` has src/text/wrap.ts to itself, and src/format.ts passes it on.
:::
:::

The README, which this pull request doesn't touch, says what the fixture is for:

:::code README.md#L1-L4
:::

The cache this pull request was meant to add never landed:

:::code src/cache.ts#L1-L4
:::

:::fold Why src/legacy.ts goes
Nothing imports `render` any more. Everything that did now calls `format`, as [above](#how-it-works)
shows.
:::

## How it was checked

Splitting `first\r\nsecond` gives two lines, with no `\r` left on the first.

## Glossary

- **Line**: one line of input, with its number from 1 and its text, without its line ending.
