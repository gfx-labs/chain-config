import * as defs from "./definitions";
import * as nonEvmDefs from "./non-evm";

export * from "./definitions/index";
export * from "./non-evm/index";
export * from "./spec/index";
export * from "./util/caip2";
export { makeConfig } from "./util/index";
export {
	buildNetworkIndex,
	type NetworkIndex,
	NetworkNotFoundError,
} from "./util/lookup";

import type { IChainInfo } from "./spec";
import {
	chainType as _chainType,
	isEvmChain as _isEvmChain,
	isNetworkType as _isNetworkType,
	isNonEvmChain as _isNonEvmChain,
	ChainType,
} from "./spec";
import {
	networkByAny as _networkByAny,
	networkByCAIP2 as _networkByCAIP2,
	networkById as _networkById,
	networkByName as _networkByName,
	networkByString as _networkByString,
	buildNetworkIndex,
} from "./util/lookup";

export const MAINNET_CHAINS = [
	defs.arbitrum,
	defs.base,
	defs.boba,
	defs.blast,
	defs.bsc,
	defs.filecoin,
	defs.mainnet,
	defs.moonbeam,
	defs.optimism,
	defs.polygon,
	defs.rootstock,
	defs.scroll,
	defs.polygonZkEvm,
	defs.zkSync,
	defs.manta,
	defs.linea,
	defs.taiko,
	defs.mantle,
	defs.sei,
	defs.lisk,
	defs.bob,
	defs.gnosis,
	defs.metal,
	defs.corn,
	defs.sonic,
	defs.celo,
	defs.hemi,
	defs.telos,
	defs.saga,
	defs.goat,
	defs.redbelly,
	defs.lightlink,
	defs.worldchain,
	defs.xdc,
	defs.tronShasta,
	defs.lens,
	defs.nibiru,
	defs.etherlink,
	defs.unichain,
	defs.matchain,
	defs.plasma,
	defs.zerog,
	defs.avalanche,
	defs.ronin,
	defs.monad,
	defs.hyperevm,
	defs.gensyn,
	defs.pharos,
	defs.robinhood,
	defs.sepolia,
] as const;

/**
 * Non-EVM chains (e.g. Bitcoin). These share the {@link IChainInfo} shape as
 * EVM chains but use the `NON_EVM_CHAIN_ID` (`0`) placeholder id and are
 * resolvable only via CAIP-2 (or internal name). Kept as a separate array so
 * the EVM-only surface (and the Go codegen, which reads `MAINNET_CHAINS`) is
 * unaffected.
 */
export const NON_EVM_CHAINS: readonly IChainInfo[] = [
	nonEvmDefs.bitcoin,
] as const;

/**
 * All networks, EVM and non-EVM. Use this when you need to enumerate every
 * supported chain regardless of type.
 */
export const ALL_NETWORKS: readonly IChainInfo[] = [
	...MAINNET_CHAINS,
	...NON_EVM_CHAINS,
] as const;

/**
 * Pre-built lookup index over all networks (EVM + non-EVM), like Go's
 * module-level maps. Resolution functions below bind to this index.
 */
const _idx = buildNetworkIndex(ALL_NETWORKS);

/**
 * Resolve a chain from an arbitrary input. Accepts:
 * - `number`: treated as chain ID
 * - `string`: tried as CAIP-2 identifier (if it contains ":"), then as
 *   internal name, then as a numeric chain ID string
 * - `IChainInfo`: returned directly (pass-through)
 *
 * Mirrors the Go `NetworkByAny` function.
 *
 * Non-EVM chains (e.g. Bitcoin) use a placeholder numeric id and can only be
 * resolved via their CAIP-2 identifier or internal name. Use `isNonEvmChain`
 * if you need to distinguish them.
 *
 * @example
 * ```ts
 * import { networkByAny } from "@gfxlabs/oku-chains";
 *
 * networkByAny(1)           // by chain ID (EVM)
 * networkByAny("mainnet")   // by internal name
 * networkByAny("eip155:1")  // by CAIP-2 (EVM)
 * networkByAny("42161")     // by chain ID string (EVM)
 * networkByAny("bip122:000000000019d6689c085ae165831e93") // by CAIP-2 (non-EVM)
 * networkByAny("bitcoin")   // by internal name (non-EVM)
 * ```
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByAny(v: string | number | IChainInfo): IChainInfo {
	return _networkByAny(v, _idx);
}

/**
 * Look up a chain by its numeric chain ID. Non-EVM chains use a placeholder id
 * and are not resolvable here.
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkById(id: number): IChainInfo {
	return _networkById(id, _idx);
}

/**
 * Look up a chain by its internal name (e.g. "arbitrum", "mainnet",
 * "bitcoin").
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByName(name: string): IChainInfo {
	return _networkByName(name, _idx);
}

/**
 * Look up a chain from a string. Tries, in order:
 * 1. CAIP-2 identifier (if the string contains ":")
 * 2. Internal name
 * 3. Numeric chain ID (parsed from string)
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByString(s: string): IChainInfo {
	return _networkByString(s, _idx);
}

/**
 * Look up a chain by its CAIP-2 identifier string (e.g. "eip155:1" or
 * "bip122:000000000019d6689c085ae165831e93"). This is the way to resolve
 * non-EVM chains.
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByCAIP2(caip2: string): IChainInfo {
	return _networkByCAIP2(caip2, _idx);
}

/**
 * Accepted input for the chain-family helpers ({@link chainType},
 * {@link isNetworkType}, etc.).
 *
 * - `IChainInfo`: classified by its `caip2Namespace`.
 * - CAIP-2 string (contains `:`, e.g. `"eip155:1"`) or bare namespace
 *   (e.g. `"bip122"`): classified directly by the namespace, no lookup needed.
 * - internal name (e.g. `"bitcoin"`) or numeric id / id string: resolved to a
 *   chain via the network index first, then classified.
 */
export type ChainLike = IChainInfo | string | number;

/**
 * Resolve a {@link ChainLike} input to the chain's `caip2Namespace`. Returns
 * `""` (→ {@link ChainType.Unknown}) when the input cannot be classified.
 */
function namespaceOfChainLike(c: ChainLike): string {
	if (typeof c === "object") {
		return c.caip2Namespace;
	}
	if (typeof c === "string") {
		// Full CAIP-2 identifier (namespace:reference) — classify by namespace.
		const sep = c.indexOf(":");
		if (sep !== -1) {
			return c.slice(0, sep);
		}
		// Bare CAIP-2 namespace (e.g. "eip155", "bip122").
		if (Object.values(ChainType).includes(c as ChainType) && c !== "") {
			return c;
		}
		// Otherwise treat as an internal name or numeric id string: resolve it.
		try {
			return _networkByString(c, _idx).caip2Namespace;
		} catch {
			return "";
		}
	}
	// Numeric chain id.
	try {
		return _networkById(Math.trunc(c), _idx).caip2Namespace;
	} catch {
		return "";
	}
}

/**
 * The {@link ChainType} of a chain. Accepts an {@link IChainInfo} object, a
 * CAIP-2 identifier or namespace string, an internal name, or a numeric chain
 * id. Internal names and numeric ids are resolved via the network index.
 *
 * @example
 * ```ts
 * import { chainType, ChainType } from "@gfxlabs/oku-chains";
 * chainType(1)            // => ChainType.EVM
 * chainType("mainnet")    // => ChainType.EVM
 * chainType("eip155:1")   // => ChainType.EVM
 * chainType("bitcoin")    // => ChainType.Bitcoin
 * chainType("bip122")     // => ChainType.Bitcoin
 * ```
 */
export function chainType(c: ChainLike): ChainType {
	return _chainType(namespaceOfChainLike(c));
}

/**
 * True if the chain belongs to the given {@link ChainType} family. Accepts an
 * {@link IChainInfo} object, a CAIP-2 identifier or namespace string, an
 * internal name, or a numeric chain id.
 *
 * Reusable, namespace-driven replacement for one-off `isBitcoinChain` style
 * checks, e.g. `isNetworkType(ChainType.Bitcoin, "bitcoin")`.
 *
 * @example
 * ```ts
 * import { isNetworkType, ChainType } from "@gfxlabs/oku-chains";
 * isNetworkType(ChainType.Bitcoin, "bitcoin")   // => true
 * isNetworkType(ChainType.EVM, 1)               // => true
 * isNetworkType(ChainType.EVM, "eip155:1")      // => true
 * ```
 */
export function isNetworkType(type: ChainType, c: ChainLike): boolean {
	return _isNetworkType(type, namespaceOfChainLike(c));
}

/**
 * True if the chain is an EVM chain (CAIP-2 namespace `eip155`). Accepts an
 * {@link IChainInfo} object, a CAIP-2 string, an internal name, or a numeric
 * chain id.
 */
export function isEvmChain(c: ChainLike): boolean {
	return _isEvmChain(namespaceOfChainLike(c));
}

/**
 * True if the chain is non-EVM (its CAIP-2 namespace is not `eip155`). Accepts
 * an {@link IChainInfo} object, a CAIP-2 string, an internal name, or a
 * numeric chain id.
 */
export function isNonEvmChain(c: ChainLike): boolean {
	return _isNonEvmChain(namespaceOfChainLike(c));
}
