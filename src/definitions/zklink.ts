import { zeroAddress } from "viem";
import { zkLinkNova as chain } from "viem/chains";
import { makeConfig } from "../util";

export const zkLink = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 4,
  logoUrl: "https://assets.oku.trade/zklink-logo.svg",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "",
  },
  initCodeHash:
    "0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed",
  uniswap: {
    deployBlock: 3919184,
    poolFactory: "0x9BD6230EDb501e28442B9deE9e35d01eeb946249",
    multicall2: "0xccca83bd6343fe9535E0e65AF4601424E95e3974",
    tickLens: "0x6EF712E1f851d2E637a0FE7DF5C09ad7DC141CB0",
    nonfungiblePositionManager: "0xAA904d497e42608C014BE83a026E984aFc16129b",
    positionsNFT: "0xAA904d497e42608C014BE83a026E984aFc16129b",
    positionsNFTDeployBlock: 3919226,
    universalRouter: "0x2274bDE50218DDB955e7f60e4f2344e3Bff9D193",
  },
  token: {
    usdcAddress: "0x1a1A3b2ff016332e866787B311fcB63928464509",
    wethAddress: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169",
    wbtcAddress: "0xDa4AaEd3A53962c83B35697Cd138cc6df43aF71f",
  },
  oku: {
    // TODO: limitOrderRegistry
    limitOrderRegistry: zeroAddress,
    limitOrderRegistryDeployBlock: 0,
    pricing: {
      nativeWrappedToken: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169",
      nativeWrappedName: "ETH",
    },
  },
  defaultPool: "0x8ad8cbb174539ba7ae7cb7e8c957acd8ab814700",
  defaultToken0: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169",
  defaultToken1: "0x1a1A3b2ff016332e866787B311fcB63928464509",
  tokenList: [
    { symbol: "WETH", address: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169" },
    { symbol: "USDC", address: "0x1a1A3b2ff016332e866787B311fcB63928464509" },
    { symbol: "WBTC", address: "0xDa4AaEd3A53962c83B35697Cd138cc6df43aF71f" },
    { symbol: "USDT", address: "0x2F8A25ac62179B31D62D7F80884AE57464699059" },
    { symbol: "DAI", address: "0xF573fA04A73d5AC442F3DEa8741317fEaA3cDeab" },
  ],
  stables: [
    "0x1a1A3b2ff016332e866787B311fcB63928464509",
    "0x2F8A25ac62179B31D62D7F80884AE57464699059",
    "0xF573fA04A73d5AC442F3DEa8741317fEaA3cDeab",
  ],
  watchlist: ["0x8ad8cbb174539ba7ae7cb7e8c957acd8ab814700"],
  internalName: "zklink",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    limitOrder: {
      // TODO: limitOrder
      address: zeroAddress,
    },
    nftManager: {
      address: "0xAA904d497e42608C014BE83a026E984aFc16129b",
    },
    weth9: {
      address: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169",
    },
    multicall2: {
      // TODO: this is the multicall3 address, make sure this works
      address: "0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5",
    },
    multicall3: {
      address: "0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5",
    },
  },
});
