import { nibiru as chain } from "viem/chains";
import { makeConfig } from "../util";

export const nibiru = makeConfig({
  ...chain,
  name: "Nibiru",
  blockTimeSeconds: 2,
  launchTime: 1749841128,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/nibiru-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 23658063,
    poolFactory: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
    tickLens: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    nonfungiblePositionManager: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
    positionsNFT: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
    positionsNFTDeployBlock: 23658348,
    universalRouter: "0xA7E6cB0A6B1BE8b779022A6aFcb097cF0d3Ff4A2",

    wrappedNativeAddress: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
    wrappedNativeSymbol: "WNIBI",
    wrappedNativeName: "Wrapped NIBI",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "NIBI",
  },
  token: {
    wethAddress: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
    usdcAddress: "0x0829F361A05D993d5CEb035cA6DF3446b060970b",
  },
  oku: {
    limitOrderRegistry: "0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02",
    limitOrderRegistryDeployBlock: 19842992,
    pricing: {
      nativeWrappedToken: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
      nativeWrappedName: "NIBI",
    },
  },
  defaultPool: "0xd8F82b8d2e82265aC25d8d4Ef3cA47917693D3d5",
  defaultToken0: "0x0829F361A05D993d5CEb035cA6DF3446b060970b",
  defaultToken1: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
  tokenList: [
    { symbol: "WNIBI", address: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97" },
    { symbol: "USDC.e", address: "0x0829F361A05D993d5CEb035cA6DF3446b060970b" },
  ],
  stables: ["0x0829F361A05D993d5CEb035cA6DF3446b060970b"],
  watchlist: [],
  internalName: "nibiru",
  nativeLogoUrl: "https://assets.oku.trade/natives/nibi.svg",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02",
    },
    nftManager: {
      address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
    },
    weth9: {
      address: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
    },
    multicall2: {
      address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
