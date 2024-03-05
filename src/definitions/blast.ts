import { blast as chain } from "viem/chains";
import { makeConfig } from "../util";
import { } from "viem";

export const blast = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 14,
  logoUrl: "https://assets.oku.trade/blast-logo.svg",
  safeReorgDistance: 90000,
  zerionId: "blast",
  uniswap: {
    deployBlock: 400903,
    poolFactory: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd",
    multicall2: "0xdC7f370de7631cE9e2c2e1DCDA6B3B5744Cf4705",
    tickLens: "0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274",
    nonfungiblePositionManager: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
    positionsNFT: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
    positionsNFTDeployBlock: 400947,
    universalRouter: "0xe463635f6e73C1E595554C3ae216472D0fb929a9",
  },
  token: {
    usdcAddress: "0x4300000000000000000000000000000000000003",
    wethAddress: "0x4300000000000000000000000000000000000004",
  },
  oku: {
    limitOrderRegistry: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F",
    limitOrderRegistryDeployBlock: 402083,
    pricing: {
      nativeWrappedToken: "0x4300000000000000000000000000000000000004",
      nativeWrappedName: "ETH",
    },
  },

  defaultPool: "0xf52b4b69123cbcf07798ae8265642793b2e8990c",
  defaultToken0: "0x4300000000000000000000000000000000000003",
  defaultToken1: "0x4300000000000000000000000000000000000004",
  tokenList: [
    { symbol: "WETH", address: "0x4300000000000000000000000000000000000004" },
    { symbol: "USDB", address: "0x4300000000000000000000000000000000000003" },
  ],
  stables: [
    "0x4300000000000000000000000000000000000003",
  ],
  watchlist: ["0xf52b4b69123cbcf07798ae8265642793b2e8990c"],
  internalName: "blast",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F",
    },
    nftManager: {
      address: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
    },
    weth9: {
      address: "0x4300000000000000000000000000000000000004",
    },
    multicall2: {
      address: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833",
    },
  },
});
