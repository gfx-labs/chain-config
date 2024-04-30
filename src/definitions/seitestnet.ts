import { seiDevnet as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const seitestnet = makeConfig({
  ...chain,
  blockTimeSeconds: 0.5,
  sortIndex: 17,
  logoUrl: "https://assets.oku.trade/sei-logo.webp",
  safeReorgDistance: 90000,
  externalId: {},
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
    usdcAddress: "0xA09F3386E05CEAC547b02f223bF500a728BE7d77",
    wethAddress: "0x57eE725BEeB991c70c53f9642f36755EC6eb2139",
  },
  oku: {
    limitOrderRegistry: zeroAddress,
    limitOrderRegistryDeployBlock: 0,
    pricing: {
      nativeWrappedToken: "0x57eE725BEeB991c70c53f9642f36755EC6eb2139",
      nativeWrappedName: "SEI",
    },
  },

  defaultPool: "0xf3a56d08504f3e09aa94245c0ee841b91fcc5dee",
  defaultToken0: "0x57eE725BEeB991c70c53f9642f36755EC6eb2139",
  defaultToken1: "0xA09F3386E05CEAC547b02f223bF500a728BE7d77",
  tokenList: [
    { symbol: "WSEI", address: "0x57eE725BEeB991c70c53f9642f36755EC6eb2139" },
    { symbol: "USDC", address: "0xA09F3386E05CEAC547b02f223bF500a728BE7d77" },
  ],
  stables: ["0xA09F3386E05CEAC547b02f223bF500a728BE7d77"],
  watchlist: [],
  internalName: "seitestnet",
  contracts: {
    limitOrder: {
      address: zeroAddress,
    },
    nftManager: {
      address: "0x2d1886A4C71df03685ba1e6B0075e285a34e2c30",
    },
    weth9: {
      address: "0x57eE725BEeB991c70c53f9642f36755EC6eb2139",
    },
    multicall2: {
      address: "0x58A80812EDC79CE80eeF0c9940528f57CafFe2a2",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
