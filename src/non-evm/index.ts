/**
 * Non-EVM chain definitions.
 *
 * This folder holds chains that are not EVM-based and therefore do not extend
 * viem's `Chain` (they have no numeric chain id). Each file exports an
 * {@link INonEvmChainInfo} built via {@link makeNonEvmConfig}. These chains are
 * resolvable only via CAIP-2 (and internal name), never via a numeric id.
 *
 * This barrel is maintained by hand (barrelsby only regenerates
 * `src/definitions/`). Re-export new chains here when you add them.
 */

// Re-export concrete chains below. Keep alphabetical.
export * from "./bitcoin";
