/** How much of GitHub's rate limit a client may spend in an hour. */
export interface Limit {
  readonly points: number;
}

/** The limit every client gets. */
export const DEFAULT_LIMIT: Limit = { points: 5000 };
