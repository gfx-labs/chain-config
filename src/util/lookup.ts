import type { IChainInfo } from "../spec";
import { parseCAIP2 } from "./caip2";

/**
 * Error thrown when a network cannot be found by any lookup method.
 */
export class NetworkNotFoundError extends Error {
	constructor(input: unknown) {
		super(`chain not found: ${String(input)}`);
		this.name = "NetworkNotFoundError";
	}
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
 */
export function buildNetworkIndex(chains: readonly IChainInfo[]): NetworkIndex {
	const byId = new Map<number, IChainInfo>();
	const byName = new Map<string, IChainInfo>();
	const byCAIP2 = new Map<string, IChainInfo>();

	for (const chain of chains) {
		byId.set(chain.id, chain);
		byName.set(chain.internalName, chain);
		byCAIP2.set(`${chain.caip2Namespace}:${chain.id}`, chain);
	}

	return { byId, byName, byCAIP2 };
}

/**
 * Look up a chain by its numeric chain ID.
 */
export function networkById(id: number, idx: NetworkIndex): IChainInfo {
	const chain = idx.byId.get(id);
	if (!chain) {
		throw new NetworkNotFoundError(id);
	}
	return chain;
}

/**
 * Look up a chain by its internal name (e.g. "arbitrum", "mainnet").
 */
export function networkByName(name: string, idx: NetworkIndex): IChainInfo {
	const chain = idx.byName.get(name);
	if (!chain) {
		throw new NetworkNotFoundError(name);
	}
	return chain;
}

/**
 * Look up a chain by its CAIP-2 identifier string (e.g. "eip155:1").
 */
export function networkByCAIP2(caip2: string, idx: NetworkIndex): IChainInfo {
	// Validate the format
	parseCAIP2(caip2);
	const chain = idx.byCAIP2.get(caip2);
	if (!chain) {
		throw new NetworkNotFoundError(caip2);
	}
	return chain;
}

/**
 * Look up a chain from a string. Tries, in order:
 * 1. CAIP-2 identifier (if the string contains ":")
 * 2. Internal name
 * 3. Numeric chain ID (parsed from string)
 *
 * Mirrors the Go `NetworkByString` function.
 */
export function networkByString(s: string, idx: NetworkIndex): IChainInfo {
	if (s === "") {
		throw new NetworkNotFoundError("empty string");
	}

	// Try CAIP-2
	if (s.includes(":")) {
		return networkByCAIP2(s, idx);
	}

	// Try internal name
	const byName = idx.byName.get(s);
	if (byName) {
		return byName;
	}

	// Try numeric chain ID
	const parsed = Number(s);
	if (!Number.isNaN(parsed) && Number.isFinite(parsed)) {
		const byId = idx.byId.get(Math.trunc(parsed));
		if (byId) {
			return byId;
		}
	}

	throw new NetworkNotFoundError(s);
}

/**
 * Resolve a chain from an arbitrary input. Accepts:
 * - `number`: treated as chain ID
 * - `string`: tried as CAIP-2 identifier (if it contains ":"), then as
 *   internal name, then as a numeric chain ID string
 * - `IChainInfo`: returned directly (pass-through)
 *
 * Mirrors the Go `NetworkByAny` function.
 *
 * @throws {NetworkNotFoundError} if no matching chain is found
 */
export function networkByAny(
	v: string | number | IChainInfo,
	idx: NetworkIndex,
): IChainInfo {
	if (v == null) {
		throw new NetworkNotFoundError("null");
	}

	// Pass-through if already a chain config object
	if (typeof v === "object" && "id" in v && "internalName" in v) {
		return v;
	}

	// Numeric chain ID
	if (typeof v === "number") {
		return networkById(Math.trunc(v), idx);
	}

	// String: CAIP-2, name, or numeric string
	if (typeof v === "string") {
		return networkByString(v, idx);
	}

	throw new NetworkNotFoundError(v);
}
