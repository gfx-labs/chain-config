import type { Address } from "viem";
import type { IChainInfo, MarketRouters } from "../spec";
import { type NetworkIndex, networkByAny } from "./lookup";

export type MarketRouterName = keyof MarketRouters;

export type MarketRouterChainInput = string | number | IChainInfo;

export interface MarketRouterEntry {
	market: MarketRouterName;
	address: Address;
}

export function marketRouterEntries(
	chain: MarketRouterChainInput,
	idx: NetworkIndex,
): MarketRouterEntry[] {
	const routers = networkByAny(chain, idx).marketRouters;
	if (!routers) return [];
	const out: MarketRouterEntry[] = [];
	for (const [market, addresses] of Object.entries(routers)) {
		if (!addresses) continue;
		for (const address of addresses) {
			out.push({ market: market as MarketRouterName, address });
		}
	}
	return out;
}

export function routersForMarket(
	chain: MarketRouterChainInput,
	market: MarketRouterName,
	idx: NetworkIndex,
): ReadonlyArray<Address> {
	return networkByAny(chain, idx).marketRouters?.[market] ?? [];
}

export function routerAllowlist(
	chain: MarketRouterChainInput,
	idx: NetworkIndex,
): Set<string> {
	return new Set(
		marketRouterEntries(chain, idx).map((e) => e.address.toLowerCase()),
	);
}

export function isAllowedRouter(
	chain: MarketRouterChainInput,
	address: string,
	idx: NetworkIndex,
): boolean {
	return routerAllowlist(chain, idx).has(address.toLowerCase());
}

export function marketsForRouter(
	chain: MarketRouterChainInput,
	address: string,
	idx: NetworkIndex,
): MarketRouterName[] {
	const target = address.toLowerCase();
	return marketRouterEntries(chain, idx)
		.filter((e) => e.address.toLowerCase() === target)
		.map((e) => e.market);
}
