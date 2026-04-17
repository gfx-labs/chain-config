import type { Chain, ChainContract, ChainFormatters } from "viem";
import { defineChain } from "viem";

/**
 * Parameters accepted by {@link makeInternalChain}.
 *
 * Mirrors the shape of `viem`'s {@link Chain}, but is exposed separately so
 * we can add internal conventions without coupling to viem's generics.
 *
 * Use this to define a chain that `viem/chains` does not yet export. The
 * returned value is a fully-typed viem `Chain` and can be spread into a
 * `makeConfig` call in `src/definitions/<chain>.ts` exactly like the
 * `viem/chains` imports used elsewhere in this repo.
 */
export interface InternalChainParams<
	formatters extends ChainFormatters | undefined = undefined,
> {
	/** EVM chain id. */
	id: number;
	/** Human-readable display name, e.g. "My Chain". */
	name: string;
	/** Native currency descriptor (name, symbol, decimals). */
	nativeCurrency: Chain["nativeCurrency"];
	/** RPC endpoints. `default` is required; additional named endpoints are allowed. */
	rpcUrls: Chain["rpcUrls"];
	/** Optional block explorers. */
	blockExplorers?: Chain["blockExplorers"];
	/**
	 * Optional contract registry. Values here are inherited by definitions
	 * that spread `{ ...chain }` (see how `viem/chains` configs behave).
	 */
	contracts?: {
		[key: string]:
			| ChainContract
			| { [sourceId: number]: ChainContract | undefined }
			| undefined;
		ensRegistry?: ChainContract;
		ensUniversalResolver?: ChainContract;
		multicall3?: ChainContract;
		erc6492Verifier?: ChainContract;
	};
	/** Flag for test networks. */
	testnet?: boolean;
	/** Source chain id (L1) for rollups / L2s. */
	sourceId?: number;
	/** Typical block time in milliseconds (viem convention). */
	blockTime?: number;
	/** Optional custom formatters for blocks / transactions. */
	formatters?: formatters;
}

/**
 * Define a chain internally when `viem/chains` does not yet export it
 * (or ships it too slowly).
 *
 * Wraps viem's own {@link defineChain} so the result is a valid `Chain` and
 * can be consumed anywhere a `viem/chains` import would be. The intent is
 * that once viem merges the chain upstream, a definition in
 * `src/definitions/<chain>.ts` can swap
 *
 *   import { foo as chain } from "../internal-chains";
 *
 * for
 *
 *   import { foo as chain } from "viem/chains";
 *
 * with no other code changes.
 *
 * @example
 * ```ts
 * // src/internal-chains/mychain.ts
 * import { makeInternalChain } from "./util";
 *
 * export const mychain = makeInternalChain({
 *   id: 123456,
 *   name: "My Chain",
 *   nativeCurrency: { name: "MyToken", symbol: "MYT", decimals: 18 },
 *   rpcUrls: { default: { http: ["https://rpc.mychain.example"] } },
 *   blockExplorers: {
 *     default: { name: "MyScan", url: "https://explorer.mychain.example" },
 *   },
 *   contracts: {
 *     multicall3: {
 *       address: "0xca11bde05977b3631167028862be2a173976ca11",
 *       blockCreated: 1,
 *     },
 *   },
 * });
 * ```
 */
export const makeInternalChain = <
	formatters extends ChainFormatters | undefined = undefined,
>(
	params: InternalChainParams<formatters>,
): Chain<formatters> => {
	return defineChain(params) as Chain<formatters>;
};
