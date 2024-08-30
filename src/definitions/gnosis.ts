import { zeroAddress } from "viem";
import { gnosis as chain } from "viem/chains";
import { makeConfig } from "../util";

export const gnosis = makeConfig({
  ...chain,
  blockTimeSeconds: 5,
  sortIndex: 18,
  logoUrl: "https://assets.oku.trade/gnosis-logo.svg",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "gnosis",
  },
  markets: {},
  bridges: {},
  oracles: {
    cmc: {
      slug: "gnosis",
      native: "xdai",
    },
    coingecko: {
      slug: "xdai",
      native: "xdai",
    },
    dexscreener: "gnosischain",
  },
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 27416614,
    poolFactory: "0xe32F7dD7e3f098D518ff19A22d5f028e076489B1",
    permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
    multicall2: "0x4dfa9a980efE4802E969AC33968E3d6E59B8a19e",
    tickLens: "0x8fe3D346B53dCA838B228e0e53aCdBED5DEC70Dc",
    nonfungiblePositionManager: "0xAE8fbE656a77519a7490054274910129c9244FA3",
    positionsNFT: "0xAE8fbE656a77519a7490054274910129c9244FA3",
    positionsNFTDeployBlock: 27416645,
    universalRouter: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
  },
  token: {
    usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    wethAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  },
  oku: {
    limitOrderRegistry: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    limitOrderRegistryDeployBlock: 35719277,
    pricing: {
      nativeWrappedToken: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
      nativeWrappedName: "xDAI",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
  defaultToken1: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  tokenList: [
    { symbol: "WXDAI", address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" },
    { symbol: "USDC.e", address: "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0" },
    { symbol: "USDC", address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" },
    { symbol: "USDT", address: "0x4ecaba5870353805a9f068101a40e0f32ed605c6" },
  ],
  stables: [
    "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
    "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0",
    "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
  ],
  watchlist: [],
  internalName: "gnosis",
  nativeLogoUrl: "https://assets.oku.trade/natives/xdai.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    nftManager: {
      address: "0xAE8fbE656a77519a7490054274910129c9244FA3",
    },
    weth9: {
      address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    },
    multicall2: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
