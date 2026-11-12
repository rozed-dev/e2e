import assert from 'node:assert/strict';
import { test } from 'node:test';

import { Limiter, LimitError } from './limiter.ts';
import type { Clock } from './time.ts';

/** A clock that moves only when a test moves it, running each timer that comes due, in order. */
class FakeClock implements Clock {
  #now = 0;
  #timers: { at: number; callback: () => void }[] = [];

  now(): number {
    return this.#now;
  }

  after(ms: number, callback: () => void): () => void {
    const timer = { at: this.#now + ms, callback };
    this.#timers.push(timer);
    return () => {
      this.#timers = this.#timers.filter((each) => each !== timer);
    };
  }

  advance(ms: number): void {
    const until = this.#now + ms;
    for (;;) {
      const due = this.#timers
        .filter((timer) => timer.at <= until)
        .sort((a, b) => a.at - b.at)[0];
      if (due === undefined) break;
      this.#timers = this.#timers.filter((timer) => timer !== due);
      this.#now = due.at;
      due.callback();
    }
    this.#now = until;
  }
}

/** Lets promises that have settled run their callbacks. */
const settle = () => new Promise<void>((resolve) => setImmediate(resolve));

test('a request over the burst waits for the next token', async () => {
  const clock = new FakeClock();
  const limiter = new Limiter({ capacity: 1, refillPerSecond: 2 }, clock);
  await limiter.take('acme');
  let done = false;
  const waiting = limiter.take('acme').then(() => {
    done = true;
  });
  clock.advance(499);
  await settle();
  assert.equal(done, false);
  clock.advance(1);
  await waiting;
  assert.equal(done, true);
});

test('waiting requests go on in the order they came', async () => {
  const clock = new FakeClock();
  const limiter = new Limiter({ capacity: 1, refillPerSecond: 1, timeoutMs: 10_000 }, clock);
  await limiter.take('acme');
  const order: number[] = [];
  const waiting = [1, 2, 3].map((n) => limiter.take('acme').then(() => order.push(n)));
  clock.advance(3_000);
  await Promise.all(waiting);
  assert.deepEqual(order, [1, 2, 3]);
});

test('a request that waits past the timeout fails', async () => {
  const clock = new FakeClock();
  const limiter = new Limiter({ capacity: 1, refillPerSecond: 0.1, timeoutMs: 1_000 }, clock);
  await limiter.take('acme');
  const waiting = limiter.take('acme');
  clock.advance(1_000);
  await assert.rejects(waiting, LimitError);
});

test('a request fails at once when too many are waiting', async () => {
  const clock = new FakeClock();
  const limiter = new Limiter({ capacity: 1, refillPerSecond: 1, maxWaiting: 1 }, clock);
  await limiter.take('acme');
  const first = limiter.take('acme');
  await assert.rejects(limiter.take('acme'), LimitError);
  clock.advance(1_000);
  await first;
});

test("one tenant's waiters don't hold up another's", async () => {
  const clock = new FakeClock();
  const limiter = new Limiter({ capacity: 1, refillPerSecond: 1 }, clock);
  await limiter.take('acme');
  const waiting = limiter.take('acme');
  await limiter.take('globex');
  clock.advance(1_000);
  await waiting;
});
