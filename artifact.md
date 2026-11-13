---
format: 1
pr: 83
commit: 57dbd43bc2ea7a521b1f9218a22cdd96b4c4f5d1
---

## tl;dr

Each GraphQL query is charged what GitHub charges for it, so a client stays within its plan's limit
by the points its queries cost rather than by how many it sends.

## How it works

[`costOf`](code:src/cost.ts#L4-L6) charges a point for each 100 nodes a query may read:

:::code src/cost.ts#L3-L6
:::

[`fits`](code:src/cost.ts#L9-L11) says whether a query fits in what's left of the limit.

## How it was checked

A query of 250 nodes costs 3 points, and one of no nodes costs 1.
