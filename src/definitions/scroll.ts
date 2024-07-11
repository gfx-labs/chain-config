import { scroll as chain } from "viem/chains";
import { makeConfig } from "../util";
import { } from "viem";

export const scroll = makeConfig({
  ...chain,
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  sortIndex: 5,
  blockTimeSeconds: 3,
  logoUrl: "https://assets.oku.trade/scroll-logo.png",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "scroll",
  },
  uniswap: {
    deployBlock: 1367,
    multicall2: "0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2",
    poolFactory: "0x70C62C8b8e801124A4Aa81ce07b637A3e83cb919",
    positionsNFT: "0xB39002E4033b162fAc607fc3471E205FA2aE5967",
    universalRouter: "0x595E7160858b1AdA94Bda790D8699C85e595117E",
  },
  token: {
    usdcAddress: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
    wethAddress: "0x5300000000000000000000000000000000000004",
    wbtcAddress: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1",
  },
  oku: {
    limitOrderRegistry: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377",
    limitOrderRegistryDeployBlock: 1409068,
    pricing: {
      nativeWrappedToken: "0x5300000000000000000000000000000000000004",
      nativeWrappedName: "ETH",
    },
  },

  defaultPool: "0x813df550a32d4a9d42010d057386429ad2328ed9",
  defaultToken0: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
  defaultToken1: "0x5300000000000000000000000000000000000004",
  tokenList: [
    { symbol: "USDC", address: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4" },
    { symbol: "WETH", address: "0x5300000000000000000000000000000000000004" },
    { symbol: "USDT", address: "0xf55bec9cafdbe8730f096aa55dad6d22d44099df" },
    { symbol: "WBTC", address: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1" },
    { symbol: "DAI", address: "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97" },
  ],
  stables: [
    "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
    "0xf55bec9cafdbe8730f096aa55dad6d22d44099df",
    "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97",
  ],
  watchlist: [
    "0xf1783f3377b3a70465c193ef33942c0803121ba0",
    "0x813df550a32d4a9d42010d057386429ad2328ed9",
  ],
  internalName: "scroll",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377",
    },
    nftManager: {
      address: "0xB39002E4033b162fAc607fc3471E205FA2aE5967",
    },
    weth9: {
      address: "0x5300000000000000000000000000000000000004",
    },
    Multicall2: {
      address: "0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2",
    },
    Multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
