import { hemi as chain } from "viem/chains";
import { makeConfig } from "../util";

export const hemi = makeConfig({
  ...chain,
  blockTimeSeconds: 12,
  launchTime: 1738569600,
  sortIndex: 13,
  logoUrl: "https://assets.oku.trade/chains/hemi-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  morpho: {},
  oracles: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 1293598,
    poolFactory: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
    tickLens: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    nonfungiblePositionManager: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
    positionsNFT: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
    positionsNFTDeployBlock: 1293633,
    universalRouter: "0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B",

    wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
    wrappedNativeSymbol: "WETH",
    wrappedNativeName: "Wrapped Ether",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "ETH",
  },
  token: {
    wethAddress: "0x4200000000000000000000000000000000000006",
    wbtcAddress: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3",
  },
  oku: {
    limitOrderRegistry: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0",
    limitOrderRegistryDeployBlock: 1293765,
    pricing: {
      nativeWrappedToken: "0x4200000000000000000000000000000000000006",
      nativeWrappedName: "ETH",
    },
  },
  defaultPool: "0x95a8b611e90de2b682267e2f00c8dff71909298a",
  defaultToken0: "0x4200000000000000000000000000000000000006",
  defaultToken1: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA",
  tokenList: [
    { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
    { symbol: "USDT", address: "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e" },
    { symbol: "USDC.e", address: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA" },
    { symbol: "WBTC", address: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3" },
  ],
  stables: [
    "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA",
    "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e",
    "0x6c851F501a3F24E29A8E39a29591cddf09369080",
  ],
  watchlist: ["0x95a8b611e90de2b682267e2f00c8dff71909298a"],
  internalName: "hemi",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0",
    },
    nftManager: {
      address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
    },
    weth9: {
      address: "0x4200000000000000000000000000000000000006",
    },
    multicall2: {
      address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
