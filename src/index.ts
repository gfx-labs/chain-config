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
