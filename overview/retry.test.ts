import assert from 'node:assert/strict';
import { test } from 'node:test';

import { retry, waitBefore } from './retry.ts';

const backoff = { first: 100, most: 1_000, retries: 3 };

test('waits twice as long before each retry, up to the longest wait', () => {
  assert.deepEqual(
    [0, 1, 2, 3, 4].map((attempt) => waitBefore(attempt, backoff)),
    [100, 200, 400, 800, 1_000],
  );
});

test('retries a retryable failure, and returns what the call gives once it succeeds', async () => {
  const waits: number[] = [];
  let calls = 0;
  const result = await retry(
    async () => {
      calls++;
      if (calls < 3) throw new Error('busy');
      return 'done';
    },
    () => true,
    backoff,
    async (ms) => void waits.push(ms),
  );
  assert.equal(result, 'done');
  assert.deepEqual(waits, [100, 200]);
});

test('throws at once an error that isn’t retryable, and the last one once retries run out', async () => {
  let calls = 0;
  const fail = async () => {
    calls++;
    throw new Error('refused');
  };
  await assert.rejects(retry(fail, () => false, backoff, async () => {}), /refused/);
  assert.equal(calls, 1);
  calls = 0;
  await assert.rejects(retry(fail, () => true, backoff, async () => {}), /refused/);
  assert.equal(calls, 4);
});
