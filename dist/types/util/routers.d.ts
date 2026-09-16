import type { Address } from "viem";
import type { IChainInfo, MarketRouters } from "../spec";
import { type NetworkIndex } from "./lookup";
export type MarketRouterName = keyof MarketRouters;
export type MarketRouterChainInput = string | number | IChainInfo;
export interface MarketRouterEntry {
    market: MarketRouterName;
    address: Address;
}
export declare function marketRouterEntries(chain: MarketRouterChainInput, idx: NetworkIndex): MarketRouterEntry[];
export declare function routersForMarket(chain: MarketRouterChainInput, market: MarketRouterName, idx: NetworkIndex): ReadonlyArray<Address>;
export declare function routerAllowlist(chain: MarketRouterChainInput, idx: NetworkIndex): Set<string>;
export declare function isAllowedRouter(chain: MarketRouterChainInput, address: string, idx: NetworkIndex): boolean;
export declare function marketsForRouter(chain: MarketRouterChainInput, address: string, idx: NetworkIndex): MarketRouterName[];
