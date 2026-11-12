---
format: 1
pr: 81
commit: 5f1a24a717a12bab67e8e539ce55dc87d4e20777
---

## tl;dr

A request over its tenant's burst now waits for a [token](term:token) instead of failing at once.
It joins its tenant's [waiters](term:waiter) and goes on, oldest first, when the
[bucket](term:bucket) refills. It still fails with `LimitError` after `timeoutMs`, or at once when
too many requests are waiting. `clock.ts` is renamed `time.ts`, unchanged.

## How it works

`Limiter.take` is now `async`. It takes a [token](term:token) at once only when one is free and no
other request is waiting, so a new request never jumps the queue. Otherwise it joins the
[bucket's](term:bucket) [waiters](term:waiter) and sets the [wake timer](<term:wake timer>):

:::code acc2/src/limiter.ts#L42-L57
:::

Two new settings bound the wait, with defaults of 2 s and 100 requests:

:::code acc2/src/config.ts#L7-L18
:::

:::figure figures/flow.svg
A request goes on at once when its tenant's bucket has a token and nobody is waiting. Otherwise it
waits in line until the wake timer hands it a token, or fails once `timeoutMs` passes or the line is
full.

- [take](code:acc2/src/limiter.ts#L42-L57)
- [waiters](term:waiter)
- [wake](<term:wake timer>)
- [timeout](code:acc2/src/waiters.ts#L23-L34)
- [full](code:acc2/src/limiter.ts#L49)
- [fails](code:acc2/src/limiter.ts#L5-L13)
:::

:::walkthrough One request over the burst, start to finish
:::step acc2/src/limiter.ts#L42-L48
`take` brings the bucket up to date. With a token free and nobody waiting, it takes the token and
returns, as before.
:::
:::step acc2/src/limiter.ts#L49-L56
Otherwise, unless `maxWaiting` requests already wait, it joins the waiters and makes sure a wake
timer is set.
:::
:::step acc2/src/waiters.ts#L23-L34
`wait` queues the request with its own timeout. If the timeout fires first, the request leaves the
queue and fails with `LimitError`.
:::
:::step acc2/src/limiter.ts#L86-L96
The wake timer fires when the bucket next holds a whole token. It refills the bucket, hands a token
to each waiter it can, oldest first, and sets itself again while any are left.
:::
:::step acc2/src/waiters.ts#L37-L43
`wakeOldest` cancels the waiter's timeout and lets its `take` resolve.
:::
:::

`Waiters` is new, in [waiters.ts](code:acc2/src/waiters.ts). The clock moved from `clock.ts` to
[time.ts](code:acc2/src/time.ts) with no change, and both files that use it import it from there.

## Where to look

:::tabs
:::tab Before
`take` returned nothing, and threw `LimitError` the moment a bucket was empty. A burst one request
over the limit lost that request.
:::
:::tab After
`take` returns a promise. A burst over the limit waits, and loses a request only after `timeoutMs`,
or when `maxWaiting` requests already wait.
:::
:::

- **Every caller has to `await` `take` now.** One that doesn't goes on before it has a token, and
  never sees the `LimitError`, which now arrives as a rejected promise. The pull request changes no
  caller, since none is in the repository.
- **A refill rate of 0 sets a timer for `Infinity` ms.** [The wake timer](code:acc2/src/limiter.ts#L88-L90)
  divides by `refillPerSecond`. Node runs a timer that long after 1 ms, so with waiters and no
  refill, it would fire every millisecond until they time out.
- **A waiter that times out leaves the wake timer set.** It fires anyway, finds nobody, and stops.
  That's harmless, but it's one timer per bucket that outlives the wait.
- **The [tests](code:acc2/src/limiter.test.ts#L8-L37) drive a fake clock.** Each check of order and
  timing depends on its timers running in the order they come due.

:::fold Why one timer per bucket, not one per waiter
A timer per waiter would wake every waiter when a single token arrives, and all but one would go
back to waiting. One timer per bucket wakes exactly as many as there are tokens.
:::

## How it was checked

- GitHub reports no checks on this commit: `gh pr checks` says none ran on the branch.
- The description says the tests are in `acc2/src/limiter.test.ts`, run with
  `node --test 'acc2/src/*.test.ts'`.
- I ran them in a throwaway copy of this commit with Node 24.22.2: all 5
  [tests](code:acc2/src/limiter.test.ts#L42-L96) passed, covering the wait for the next token, the
  order, the timeout, the cap on waiters, and tenants kept apart.

## Glossary

- **Token**: one request's worth of a tenant's limit. Each request spends one, and they come back
  at `refillPerSecond`.
- **Bucket**: a tenant's tokens, up to `capacity`, with the requests waiting for them.
- **Waiter**: a request waiting in its bucket's queue for a token, oldest first.
- **Wake timer**: the one timer a bucket sets for when it next holds a whole token, which hands
  tokens to the oldest waiters.
