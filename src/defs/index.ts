import { Address, Chain, ChainContract } from "viem";

export interface UniswapMetadata {
  deployBlock?: number;
  poolFactory?: Address;
  multicall2?: Address;
  proxyAdmin?: Address;
  tickLens?: Address;
  quoter?: Address;
  swapRouter?: Address;
  swapRouter02?: Address;
  NFTDescriptor?: Address;
  nonfungibleTokenPositionDescriptor?: Address;
  transparentUpgradeableProxy?: Address;
  nonfungiblePositionManager?: Address;
  v3Migrator?: Address;
  uniswapV3Staker?: Address;
  positionsNFT?: Address;
  topNativePool?: Address;
  positionsNFTDeployBlock?: number;
}

export interface OkuPricingMetadata {
  nativeWrappedToken?: Address;
  nativeQuotePools?: ReadonlyArray<{ deployBlock: number; pool: Address }>;
  pools?: ReadonlyArray<Address>;
  stablecoinList?: ReadonlyArray<string>;
}

export interface OkuMetadata {
  limitOrderRegistry?: Address;
  limitOrderRegistryDeployBlock?: number;
  pricing?: OkuPricingMetadata;
}

export interface TokenMetadata {
  wethAddress?: Address;
  wbtcAddress?: Address;
  usdcAddress?: Address;
}

export interface IChainInfo extends Chain {
  logoUrl: string;
  sortIndex: number;
  defaultPool: string;
  internalName: string;
  defaultToken0: string;
  defaultToken1: string;
  tokenList: ReadonlyArray<{ symbol: string; address: string }>;
  stables: ReadonlyArray<string>;
  watchlist: ReadonlyArray<string>;
  blockTimeSeconds: number;

  uniswap: UniswapMetadata;
  token: TokenMetadata;
  oku: OkuMetadata;

  contracts: {
    [key: string]: ChainContract | { [chainId: number]: ChainContract };
  } & {
    ensRegistry?: ChainContract;
    ensUniversalResolver?: ChainContract;
    multicall2?: ChainContract;
    multicall3?: ChainContract;
    nftManager: ChainContract;
    limitOrder?: ChainContract;
    weth9: ChainContract;
  };
}
