import type { IChainInfo } from "../spec";
/** CAIP-2 chain identifier components */
export interface CAIP2Identifier {
    namespace: string;
    reference: string;
}
/**
 * Parse a CAIP-2 chain ID string into its namespace and reference components.
 *
 * @example
 * ```ts
 * parseCAIP2("eip155:1")
 * // => { namespace: "eip155", reference: "1" }
 * ```
 *
 * @throws {Error} If the string does not contain exactly one ':'
 */
export declare function parseCAIP2(caip2: string): CAIP2Identifier;
/**
 * Format a CAIP-2 chain ID string from namespace and reference components.
 *
 * @example
 * ```ts
 * formatCAIP2({ namespace: "eip155", reference: "1" })
 * // => "eip155:1"
 * ```
 */
export declare function formatCAIP2(id: CAIP2Identifier): string;
/**
 * Convert a chain config to its CAIP-2 identifier string.
 *
 * @example
 * ```ts
 * import { mainnet } from "@gfxlabs/oku-chains";
 * toCAIP2(mainnet)
 * // => "eip155:1"
 * ```
 */
export declare function toCAIP2(chain: IChainInfo): string;
/**
 * Look up a chain config by its CAIP-2 identifier string from a list of chains.
 *
 * @example
 * ```ts
 * import { MAINNET_CHAINS } from "@gfxlabs/oku-chains";
 * fromCAIP2("eip155:1", MAINNET_CHAINS)
 * // => mainnet chain config
 * ```
 *
 * @throws {Error} If the CAIP-2 string is invalid or no matching chain is found
 */
export declare function fromCAIP2(caip2: string, chains: readonly IChainInfo[]): IChainInfo;
