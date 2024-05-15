import { zeroAddress } from "viem";
import { mantle as chain } from "viem/chains";
import { makeConfig } from "../util";

export const mantle = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/mantle-logo.png",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "mantle",
  },
  uniswap: {
    deployBlock: 63795918,
    poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF",
    nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    positionsNFTDeployBlock: 63796102,
    universalRouter: "0xd9a85F8bf4dA2749Bae7fbBa6Be6FEea1129C31a",
  },
  token: {
    usdcAddress: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
    wethAddress: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  },
  oku: {
    limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    limitOrderRegistryDeployBlock: 63839392,
    pricing: {
      nativeWrappedToken: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
      nativeWrappedName: "MNT",
    },
  },

  // TODO: default pool
  defaultPool: zeroAddress,
  defaultToken0: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
  defaultToken1: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  tokenList: [
    { symbol: "WMNT", address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8" },
    { symbol: "USDC", address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9" },
  ],
  stables: [
    "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
    "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
  ],
  watchlist: [],
  internalName: "mantle",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    },
    nftManager: {
      address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    },
    weth9: {
      address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
    },
    multicall2: {
      address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
