import { Address, Chain, ChainContract, ChainFormatters, Hash } from "viem";

export { ChainContract } from "viem";

type float64 = number;

export interface MorphoMetadata {
  deployBlock?: number;
  morpho?: Address;
  mmFactory10?: Address;
  mmFactory11?: Address;
  bundler3?: Address;
}

export interface UniswapMetadata {
  deployBlock?: number;
  poolFactory?: Address;
  permit2?: Address;
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
  wrappedNativeAddress?: Address;
  wrappedNativeSymbol?: string;
  wrappedNativeName?: string;
  wrappedNativeDecimals?: number;
  nativeCurrencyName?: string;
}

export interface OkuPricingMetadata {
  nativeWrappedToken?: Address;
  nativeToken?: Address;
  nativeWrappedName?: string;
  nativeTokenName?: string;
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
  nativeAddress?: Address;
}

export interface Markets {
  airswap?: boolean;
  enso?: any;
  kyberswap?: string; // from https://github.com/KyberNetwork/kyberswap-documentation/blob/main/kyberswap-solutions/kyberswap-aggregator/aggregator-api-specification/evm-swaps.md
  odos?: any;
  okx?: any;
  oneinch?: boolean;
  openocean?: string;
  paraswap?: {
    routerContract: string;
  };
  propellerswap?: string;
  usor?: any;
  zeroex?: boolean;
  cowswap?: string;
  icecreamswap?: boolean;
}

export interface Bridges {
  deswap?: any;
  bungee?: any;
  lifi?: any;
  across?: any;
  orbiter?: any;
  wormhole?: {
    chain: string;
    timeToFinalize: number;
  };
  rhinofi?: string;
  chainlink?: {
    atlasNetworkName: string;
    routerAddress: string;
    chainSelector: bigint;
    tokenAdminRegistry?: string;
  };
  squidrouter?: any;
  wanbridge?: {
    requiredConfirmations: number;
  };
  stargate?: {
    endpointID: number;
    blockConfirmations: number;
    pools?: {
      id: number;
      address: string;
    }[];
    assets?: string[] // hydra (OFTs)
  };
}

export interface Oracles {
  cmc?: {
    slug: string;
    native: string;
  };
  coingecko?: {
    slug: string;
    native: string;
  };
  dexguru?: any;
  dexscreener?: string;
  oku?: any;
}

export interface IChainInfo<
  formatters extends ChainFormatters | undefined = ChainFormatters | undefined,
> extends Chain<formatters> {
  logoUrl: string;
  launchTime: number;
  nativeLogoUrl: string;
  sortIndex: number;
  safeReorgDistance?: number;
  defaultPool: Address;
  internalName: string;
  defaultToken0: Address;
  defaultToken1: Address;
  tokenList: ReadonlyArray<{ symbol: string; address: Address }>;
  stables: ReadonlyArray<Address>;
  watchlist: ReadonlyArray<Address>;
  externalId: {
    zerion?: string;
    debank?: string;
    cowswap?: string;
  };
  markets: Markets;
  bridges: Bridges;
  oracles: Oracles;

  initCodeHash: Hash;
  blockTimeSeconds: float64;

  uniswap: UniswapMetadata;
  morpho: MorphoMetadata;
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
    weth9?: ChainContract;
  };
}

interface blockExplorer {
  url: string;
  apiUrl: string;
}

interface chainContract {
  address: Address;
  blockCreated: number;
}
