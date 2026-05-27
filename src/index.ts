import * as defs from "./definitions";

export * from "./definitions/index";
export * from "./spec/index";
export * from "./util/caip2";
export {
	NetworkNotFoundError,
	type NetworkIndex,
	buildNetworkIndex,
} from "./util/lookup";

import {
	buildNetworkIndex,
	networkByAny as _networkByAny,
	networkById as _networkById,
	networkByName as _networkByName,
	networkByString as _networkByString,
	networkByCAIP2 as _networkByCAIP2,
} from "./util/lookup";
import type { IChainInfo } from "./spec";

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
] as const;

/** Pre-built lookup index over MAINNET_CHAINS (like Go's module-level maps). */
const _idx = buildNetworkIndex(MAINNET_CHAINS);

/**
 * Resolve a chain from an arbitrary input. Accepts:
 * - `number`: treated as chain ID
 * - `string`: tried as CAIP-2 identifier (if it contains ":"), then as
 *   internal name, then as a numeric chain ID string
 * - `IChainInfo`: returned directly (pass-through)
 *
 * Mirrors the Go `NetworkByAny` function.
 *
 * @example
 * ```ts
 * import { networkByAny } from "@gfxlabs/oku-chains";
 *
 * networkByAny(1)           // by chain ID
 * networkByAny("mainnet")   // by internal name
 * networkByAny("eip155:1")  // by CAIP-2
 * networkByAny("42161")     // by chain ID string
 * ```
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByAny(v: string | number | IChainInfo): IChainInfo {
	return _networkByAny(v, _idx);
}

/**
 * Look up a chain by its numeric chain ID.
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkById(id: number): IChainInfo {
	return _networkById(id, _idx);
}

/**
 * Look up a chain by its internal name (e.g. "arbitrum", "mainnet").
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
 * Look up a chain by its CAIP-2 identifier string (e.g. "eip155:1").
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByCAIP2(caip2: string): IChainInfo {
	return _networkByCAIP2(caip2, _idx);
}
