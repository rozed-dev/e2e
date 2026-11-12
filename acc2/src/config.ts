/** How a tenant's requests are limited. */
export interface LimiterConfig {
  /** Most tokens a bucket holds: the largest burst a tenant can send at once. */
  capacity: number;
  /** Tokens a bucket gains each second. */
  refillPerSecond: number;
}

/** The limits a tenant gets unless its config says otherwise. */
export const defaults: LimiterConfig = {
  capacity: 20,
  refillPerSecond: 5,
};

/** `config`, with each field it leaves out taken from the defaults. */
export function withDefaults(config: Partial<LimiterConfig> = {}): LimiterConfig {
  return { ...defaults, ...config };
}
