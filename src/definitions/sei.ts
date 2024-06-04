import { zeroAddress } from "viem";
import { sei as chain } from "viem/chains";
import { makeConfig } from "../util";

export const sei = makeConfig({
  ...chain,
  blockTimeSeconds: 0.4,
  sortIndex: 5,
  logoUrl: "https://assets.oku.trade/sei-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  uniswap: {
    deployBlock: 79245151,
    poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
    multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    positionsNFTDeployBlock: 79245279,
    universalRouter: "0xa683c66045ad16abb1bCE5ad46A64d95f9A25785",
  },
  token: {
    usdcAddress: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
    wethAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
  },
  oku: {
    limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    limitOrderRegistryDeployBlock: 79448363,
    pricing: {
      nativeWrappedToken: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
      nativeWrappedName: "SEI",
    },
  },

  defaultPool: zeroAddress,
  defaultToken0: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
  defaultToken1: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
  tokenList: [
    { symbol: "WSEI", address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7" },
    { symbol: "USDC", address: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1" },
  ],
  stables: ["0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1"],
  watchlist: [],
  internalName: "sei",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    },
    nftManager: {
      address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    },
    weth9: {
      address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
    },
    multicall2: {
      address: "0x9b7aC6735b23578E81260acD34E3668D0cc6000A",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
