/** How a tenant's requests are limited. */
export interface LimiterConfig {
  /** Most tokens a bucket holds: the largest burst a tenant can send at once. */
  capacity: number;
  /** Tokens a bucket gains each second. */
  refillPerSecond: number;
  /** How long a request waits for a token before it fails, in milliseconds. */
  timeoutMs: number;
  /** Most requests a tenant may have waiting at once. Past it, a request fails at once. */
  maxWaiting: number;
}

/** The limits a tenant gets unless its config says otherwise. */
export const defaults: LimiterConfig = {
  capacity: 20,
  refillPerSecond: 5,
  timeoutMs: 2_000,
  maxWaiting: 100,
};

/** `config`, with each field it leaves out taken from the defaults. */
export function withDefaults(config: Partial<LimiterConfig> = {}): LimiterConfig {
  return { ...defaults, ...config };
}
