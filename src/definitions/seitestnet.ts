import { seiDevnet as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const seitestnet = makeConfig({
  ...chain,
  blockTimeSeconds: .5,
  sortIndex: 17,
  logoUrl: "https://assets.oku.trade/sei-logo.webp",
  safeReorgDistance: 90000,
  externalId: {
  },
  uniswap: {
    deployBlock: 16206422,
    poolFactory: "0x32CB2e76E80B2A8abc968985B23408E2D5885341",
    multicall2: "0x474bD11F7777d0a1EE0B7c0bb48Acd9244A2afCE",
    tickLens: "0x09E6a35D9c4d6fA4257aeE015793Cd5Cbf8fa6D8",
    nonfungiblePositionManager: "0x2d1886A4C71df03685ba1e6B0075e285a34e2c30",
    positionsNFT: "0x2d1886A4C71df03685ba1e6B0075e285a34e2c30",
    positionsNFTDeployBlock: 16206612,
    universalRouter: "0x61a27a55f72bbCba64554246BCE2da43C164543B",
  },
  token: {
    usdcAddress: "0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C",
    wethAddress: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330",
  },
  oku: {
    limitOrderRegistry: zeroAddress,
    limitOrderRegistryDeployBlock: 0,
    pricing: {
      nativeWrappedToken: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330",
      nativeWrappedName: "SEI",
    },
  },

  defaultPool: zeroAddress,
  defaultToken0: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330",
  defaultToken1: "0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C",
  tokenList: [
    { symbol: "WSEI", address: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330" },
    { symbol: "USDC", address: "0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C" },
  ],
  stables: [
    "0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C",
  ],
  watchlist: [
  ],
  internalName: "seitestnet",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: zeroAddress,
    },
    nftManager: {
      address: "0x2d1886A4C71df03685ba1e6B0075e285a34e2c30",
    },
    weth9: {
      address: "0x26841a0A5D958B128209F4ea9a1DD7E61558c330",
    },
    multicall2: {
      address: "0x58A80812EDC79CE80eeF0c9940528f57CafFe2a2",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
