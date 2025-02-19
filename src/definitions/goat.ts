import { goat as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const goat = makeConfig({
  ...chain,
  name: "Goat",
  blockTimeSeconds: 3,
  launchTime: 1740621916,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/goat-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 848385,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 848408,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

    wrappedNativeAddress: "0xbC10000000000000000000000000000000000000",
    wrappedNativeSymbol: "WGBTC",
    wrappedNativeName: "Wrapped Goat Bitcoin",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "BTC",
  },
  token: {
    wethAddress: "0xbC10000000000000000000000000000000000000",
    usdcAddress: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8",
  },
  oku: {
    limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    limitOrderRegistryDeployBlock: 848591,
    pricing: {
      nativeWrappedToken: "0xbC10000000000000000000000000000000000000",
      nativeWrappedName: "WGBTC",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8",
  defaultToken1: "0xbC10000000000000000000000000000000000000",
  tokenList: [
    { symbol: "WBTC", address: "0xbC10000000000000000000000000000000000000" },
    { symbol: "USDC.e", address: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8" },
  ],
  stables: ["0x3022b87ac063DE95b1570F46f5e470F8B53112D8"],
  watchlist: [],
  internalName: "goat",
  nativeLogoUrl: "https://assets.oku.trade/natives/gbtc.svg",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0xbC10000000000000000000000000000000000000",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
