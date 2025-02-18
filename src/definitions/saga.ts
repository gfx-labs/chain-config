import { saga as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const saga = makeConfig({
  ...chain,
  name: "Saga",
  blockTimeSeconds: 5,
  launchTime: 1740384000,
  sortIndex: 13,
  logoUrl: "https://assets.oku.trade/chains/saga-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 18885,
    poolFactory: "0x454050C4c9190390981Ac4b8d5AFcd7aC65eEffa",
    permit2: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
    multicall2: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    tickLens: "0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA",
    nonfungiblePositionManager: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
    positionsNFT: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
    positionsNFTDeployBlock: 18902,
    universalRouter: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",

    wrappedNativeAddress: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    wrappedNativeSymbol: "wGAS",
    wrappedNativeName: "Wrapped Gas",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "GAS",
  },
  token: {
    usdcAddress: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
    wethAddress: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
  },
  oku: {
    limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    limitOrderRegistryDeployBlock: 19372,
    pricing: {
      nativeWrappedToken: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
      nativeWrappedName: "GAS",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
  defaultToken1: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
  tokenList: [
    { symbol: "wGAS", address: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA" },
    { symbol: "USDC", address: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5" },
    { symbol: "USDT", address: "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa" },
  ],
  stables: [
    "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa",
    "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
  ],
  watchlist: [],
  internalName: "saga",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    },
    nftManager: {
      address: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
    },
    weth9: {
      address: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    },
    multicall2: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    multicall3: {
      address: "0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160",
    },
  },
});
