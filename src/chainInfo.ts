import { Chain, ChainContract } from "viem";
import * as chains from "./chains/";

export interface IChainInfo extends Chain {
  logoUrl: string;
  defaultPool: string;
  internalName: string;
  defaultToken0: string;
  defaultToken1: string;
  tokenList: { symbol: string; address: string }[];
  stables: string[];
  watchlist: string[];
  blockTimeSeconds: number;
  contracts: {
    [key: string]: ChainContract | { [chainId: number]: ChainContract };
  } & {
    ensRegistry?: ChainContract;
    ensUniversalResolver?: ChainContract;
    multicall3?: ChainContract;
    nftManager: ChainContract;
    limitOrder?: ChainContract;
    weth9: ChainContract;
  };
}

export const CHAINS_LIST = Object.values(chains);

export const WETH9_ADDRESS = Object.fromEntries(
  CHAINS_LIST.map((obj) => [obj.id, obj.contracts.weth9.address]),
);

export const CHAIN_INFO = Object.fromEntries(
  CHAINS_LIST.map((obj) => [obj.id, obj]),
);

const idMap = Object.fromEntries(
  CHAINS_LIST.map((obj) => [obj.internalName, obj.id]),
);

export const getChainIdFromName = (name = "ethereum") => {
  return idMap[name.toLowerCase()] ? idMap[name.toLowerCase()] : 0;
};

export const GFX_CHAT = {
  WS_PATH: (url: string) => {
    const base = new URL(url);
    base.protocol = base.protocol.replace("http", "ws");
    base.pathname = (base.pathname + "/ws").replaceAll("//ws", "/ws");
    return base.toString();
  },
};

export const isValidChain = (chain: number) => {
  return !!CHAIN_MAP_ID[chain.toString()];
};

export const isValidChainName = (chain?: string) => {
  if (!chain) {
    return false;
  }
  return !!CHAIN_MAP_INTERNALNAME[chain];
};

export const CHAIN_MAP_INTERNALNAME = Object.fromEntries(
  Object.values(CHAIN_INFO).map((x) => {
    return [x.internalName, x];
  }),
);

export const CHAIN_MAP_ID = Object.fromEntries(
  Object.values(CHAIN_INFO).map((x) => {
    return [x.id.toString(), x];
  }),
);

export const isStableCoin = (networkId: number, address: string) => {
  return CHAIN_INFO[networkId].stables.some(
    (x) => x.toLowerCase() === address.toLowerCase(),
  );
};

export const isWrappedNativeToken = (networkId: number, address: string) => {
  return WETH9_ADDRESS[networkId].toLowerCase() === address.toLowerCase();
};
