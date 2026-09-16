import type { IChainInfo } from "../spec";
/**
 * Error thrown when a network cannot be found by any lookup method.
 */
export declare class NetworkNotFoundError extends Error {
    constructor(input: unknown);
}
/**
 * Pre-computed lookup index for fast chain resolution.
 */
export interface NetworkIndex {
    byId: Map<number, IChainInfo>;
    byName: Map<string, IChainInfo>;
    byCAIP2: Map<string, IChainInfo>;
}
/**
 * Build a lookup index from a list of chains for fast repeated lookups.
 * Pre-computes maps keyed by chain ID, internal name, and CAIP-2 identifier.
 *
 * Non-EVM chains use the {@link NON_EVM_CHAIN_ID} (`0`) placeholder id and are
 * intentionally NOT registered in `byId` (they are not resolvable by numeric
 * id, and would otherwise all collide on `0`). They remain resolvable by
 * internal name and by their explicit CAIP-2 identifier.
 */
export declare function buildNetworkIndex(chains: readonly IChainInfo[]): NetworkIndex;
/**
 * Look up a chain by its numeric chain ID. Non-EVM chains use the
 * {@link NON_EVM_CHAIN_ID} placeholder and are not resolvable here.
 */
export declare function networkById(id: number, idx: NetworkIndex): IChainInfo;
/**
 * Look up a chain by its internal name (e.g. "arbitrum", "mainnet",
 * "bitcoin").
 */
export declare function networkByName(name: string, idx: NetworkIndex): IChainInfo;
/**
 * Look up a chain by its CAIP-2 identifier string (e.g. "eip155:1" or
 * "bip122:000000000019d6689c085ae165831e93"). This is the way to resolve
 * non-EVM chains.
 */
export declare function networkByCAIP2(caip2: string, idx: NetworkIndex): IChainInfo;
/**
 * Look up a chain from a string. Tries, in order:
 * 1. CAIP-2 identifier (if the string contains ":")
 * 2. Internal name
 * 3. Numeric chain ID (parsed from string)
 *
 * Non-EVM chains are only reachable via the CAIP-2 or internal-name paths,
 * never via the numeric-id fallback.
 *
 * Mirrors the Go `NetworkByString` function.
 */
export declare function networkByString(s: string, idx: NetworkIndex): IChainInfo;
/**
 * Resolve a chain from an arbitrary input. Accepts:
 * - `number`: treated as a numeric chain ID (EVM-only)
 * - `string`: tried as CAIP-2 identifier (if it contains ":"), then as
 *   internal name, then as a numeric chain ID string
 * - `IChainInfo`: returned directly (pass-through)
 *
 * Non-EVM chains have a placeholder numeric id, so they can only be resolved
 * via their CAIP-2 identifier or internal name (or passed through directly).
 *
 * Mirrors the Go `NetworkByAny` function.
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export declare function networkByAny(v: string | number | IChainInfo, idx: NetworkIndex): IChainInfo;
