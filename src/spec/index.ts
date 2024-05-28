import { Address, Chain, ChainContract } from "viem";

export { ChainContract } from "viem";

type float64 = number;

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
  universalRouter?: Address;
}

export interface OkuPricingMetadata {
  nativeWrappedToken?: Address;
  nativeWrappedName?: string;
  nativeQuotePools?: ReadonlyArray<ChainContract>;
  pools?: ReadonlyArray<Address>;
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

export interface IChainInfo extends Chain<any, any> {
  logoUrl: string;
  sortIndex: number;
  safeReorgDistance?: number;
  defaultPool: Address;
  internalName: string;
  defaultToken0: Address;
  defaultToken1: Address;
  tokenList: ReadonlyArray<{ symbol: string; address: Address }>;
  stables: ReadonlyArray<Address>;
  watchlist: ReadonlyArray<Address>;
  externalId?: {
    zerion?: string;
    debank?: string;
  }

  blockTimeSeconds: float64;

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

interface chainContract {
  address: Address;
  blockCreated: number;
}
