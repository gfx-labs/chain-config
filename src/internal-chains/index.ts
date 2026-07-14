/**
 * Internal chain definitions.
 *
 * This folder holds chains that are not (yet) exported by `viem/chains`.
 * Each file exports a viem-compatible `Chain` object built via
 * {@link makeInternalChain}. Consumers in `src/definitions/` import from
 * here exactly as they would from `viem/chains`:
 *
 *   import { mychain as chain } from "../internal-chains";
 *
 * When viem upstream adds the chain, the import path is the only thing
 * that needs to change.
 *
 * This barrel is maintained by hand (barrelsby only regenerates
 * `src/definitions/`). Re-export new chains here when you add them.
 */

// Re-export concrete chains below. Keep alphabetical.
export * from "./pharos";
export * from "./robinhood";
export * from "./util";
