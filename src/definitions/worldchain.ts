import { worldchain as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const worldchain = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  launchTime: 0,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/world-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {
    deployBlock: 9025669,
    morpho: "0xE741BC7c34758b4caE05062794E8Ae24978AF432",
    mmFactory11: "0xae5b0884bfff430493D6C844B9fd052Af7d79278",
    bundler3: "0x3D07BF2FFb23248034bF704F3a4786F1ffE2a448",
  },
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 0,
    poolFactory: zeroAddress,
    permit2: zeroAddress,
    multicall2: zeroAddress,
    tickLens: zeroAddress,
    nonfungiblePositionManager: zeroAddress,
    positionsNFT: zeroAddress,
    positionsNFTDeployBlock: 0,
    universalRouter: zeroAddress,

    wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
    wrappedNativeSymbol: "WETH",
    wrappedNativeName: "Wrapped Ether",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "ETH",
  },
  token: {
    wethAddress: "0x4200000000000000000000000000000000000006",
  },
  oku: {
    limitOrderRegistry: zeroAddress,
    limitOrderRegistryDeployBlock: 0,
    pricing: {
      nativeWrappedToken: "0x4200000000000000000000000000000000000006",
      nativeWrappedName: "ETH",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: zeroAddress,
  defaultToken1: zeroAddress,
  tokenList: [
    { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
  ],
  stables: ["0x79a02482a880bce3f13e09da970dc34db4cd24d1"],
  watchlist: [],
  internalName: "worldchain",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: zeroAddress,
    },
    nftManager: {
      address: zeroAddress,
    },
    weth9: {
      address: "0x4200000000000000000000000000000000000006",
    },
    multicall2: {
      address: zeroAddress,
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
