---
format: 1
pr: 79
commit: dcecae612d55b6676fe7d86a7de877cadbde0a01
---

## tl;dr

This adds `retry`, which calls a function again when it fails with a
[retryable error](<term:retryable error>), waiting twice as long before each retry. It's for calls
that fail for a moment, such as a request a busy server refused. Any other error is thrown at once,
and after the last retry, the last error is.

## How it works

A [backoff](term:backoff) says how long the first wait is, the longest a wait may be, and how many
retries to make. The default waits 100 ms, then 200, 400 and 800, for four retries:

:::code overview/retry.ts#L3-L13
:::

:::figure figures/retry.svg
A call that fails with a retryable error waits, then is tried again, each wait twice the last, until
it succeeds or the retries run out.

- [call](code:overview/retry.ts#L32)
- [wait](code:overview/retry.ts#L16-L18)
- [give-up](code:overview/retry.ts#L34)
:::

:::walkthrough One call, retried
:::step overview/retry.ts#L30-L32
Each pass of the loop is one try, counted by `attempt` from 0. A call that succeeds returns its
result straight away.
:::
:::step overview/retry.ts#L33-L34
A failure is thrown on when the [backoff](term:backoff)'s retries are used up, or when `retryable`
says it isn't a [retryable error](<term:retryable error>).
:::
:::step overview/retry.ts#L16-L18
Otherwise the loop waits before the next try: the first wait doubled once per earlier retry, and
never longer than the longest wait.
:::
:::

## Where to look

- **Counting retries.** `retries` counts tries after the first, so `retries: 4` makes five calls in
  all. The check is [`attempt >= backoff.retries`](code:overview/retry.ts#L34); an off-by-one there
  would make one call too many or too few.
- **Waits can't grow without end.** `2 ** attempt` grows fast, and
  [`Math.min`](code:overview/retry.ts#L17) caps it at the longest wait, however large `retries`
  is.
- **The caller decides what's worth retrying.** [`retryable`](code:overview/retry.ts#L26) has no
  default, so every caller has to say which errors are passing ones.
- **Sleeping is passed in** ([`sleep`](code:overview/retry.ts#L28)), which is how the tests run
  without waiting.

## How it was checked

- The pull request has no checks: `gh pr checks` reported none on its branch.
- I ran its tests, `node --test overview/retry.test.ts`, at this commit with Node 24.22.2. All
  three passed: [the waits](code:overview/retry.test.ts#L8-L13), a call that
  [succeeds on its third try](code:overview/retry.test.ts#L15-L30), and
  [both ways it gives up](code:overview/retry.test.ts#L32-L43).

## Glossary

- **Backoff**: how long to wait before each retry, and how many retries to make. Each wait is twice
  the last, up to a longest wait.
- **Retryable error**: an error the caller's `retryable` function accepts, because it means the call
  may work if tried again, such as a busy server's refusal.
