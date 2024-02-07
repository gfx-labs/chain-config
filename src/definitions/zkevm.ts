import { polygonZkEvm as chain } from "viem/chains";
import { makeConfig } from "../util";
import {} from "viem";

export const polygonZkEvm = makeConfig({
  ...chain,
  sortIndex: 6,
  blockTimeSeconds: 7,
  logoUrl: "https://assets.oku.trade/zkevm-logo.svg",
  safeReorgDistance: 90000,
  uniswap: {
    deployBlock: 8466867,
    poolFactory: "0xff83c3c800Fec21de45C5Ec30B69ddd5Ee60DFC2",
    multicall2: "0x9073E304a15b1522132848B461857cd8BA932ea7",
    tickLens: "0x64519b94A7248Bf17929fB03b9648ce277Fd7fDA",
    nonfungiblePositionManager: "0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f",
    positionsNFT: "0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f",
    positionsNFTDeployBlock: 8466897,
    universalRouter: "0x32454e81d065FAA95Ec0d0Ab6Fe326599Af30fd7",
  },
  token: {
    wbtcAddress: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1",
    wethAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
    usdcAddress: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
  },
  oku: {
    limitOrderRegistry: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723",
    limitOrderRegistryDeployBlock: 8467090,
    pricing: {
      nativeWrappedToken: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
      nativeWrappedName: "ETH",
    },
  },

  defaultPool: "0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd",
  defaultToken0: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",
  defaultToken1: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
  tokenList: [
    { symbol: "WETH", address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9" },
    { symbol: "USDC", address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035" },
    { symbol: "USDT", address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d" },
    { symbol: "DAI", address: "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4" },
  ],
  stables: [
    "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
    "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
    "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4",
  ],
  watchlist: ["0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd"],
  internalName: "polygon-zkevm",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723",
    },
    nftManager: {
      address: "0xf0d61aeda516cca1ff20be65cfb0213be688a24f",
    },
    weth9: {
      address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",
    },

    multicall2: {
      address: "0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674",
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
    },
  },
});
