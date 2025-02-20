import { redbellyMainnet as chain } from "viem/chains";
import { makeConfig } from "../util";

export const redbelly = makeConfig({
  ...chain,
  name: "Redbelly",
  blockTimeSeconds: 5,
  launchTime: 1740621916,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/redbelly-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 2286057,
    poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
    permit2: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
    multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    positionsNFTDeployBlock: 2286074,
    universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",

    wrappedNativeAddress: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
    wrappedNativeSymbol: "WRBNT",
    wrappedNativeName: "Wrapped RBNT",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "RBNT",
  },
  token: {
    wethAddress: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
    usdcAddress: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06",
  },
  oku: {
    limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    limitOrderRegistryDeployBlock: 2286099,
    pricing: {
      nativeWrappedToken: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
      nativeWrappedName: "RBNT",
    },
  },
  defaultPool: "0xcDe3554d179b5B7ABB3ddFeE1CBC7B98b3f2E380",
  defaultToken0: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
  defaultToken1: "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B",
  tokenList: [
    { symbol: "WRBNT", address: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076" },
    { symbol: "USDC.e", address: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06" },
    { symbol: "USDT", address: "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B" },
  ],
  stables: [
    "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06",
    "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B",
  ],
  watchlist: ["0xcDe3554d179b5B7ABB3ddFeE1CBC7B98b3f2E380"],
  internalName: "redbelly",
  nativeLogoUrl: "https://assets.oku.trade/natives/rbnt.svg",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    },
    nftManager: {
      address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    },
    weth9: {
      address: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
    },
    multicall2: {
      address: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    },
    multicall3: {
      address: "0xEe43BBcC6340038130681F98d855E416F7F728e9",
    },
  },
});
