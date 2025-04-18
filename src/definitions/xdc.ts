import { xdc as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const xdc = makeConfig({
  ...chain,
  name: "XDC",
  rpcUrls: {
    default: {
      http: ["https://erpc.xinfin.network"],
    },
  },
  blockTimeSeconds: 2,
  launchTime: 1745040321,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/xdc-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 87230664,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 87230700,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

    wrappedNativeAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42",
    wrappedNativeSymbol: "WXDC",
    wrappedNativeName: "Wrapped XDC",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "XDC",
  },
  token: {
    wethAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42",
    usdcAddress: "0x2a8e898b6242355c290e1f4fc966b8788729a4du4",
  },
  oku: {
    limitOrderRegistry: "0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc",
    limitOrderRegistryDeployBlock: 87231348,
    pricing: {
      nativeWrappedToken: "0x951857744785e80e2de051c32ee7b25f9c458c42",
      nativeWrappedName: "XDC",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: "0x2a8e898b6242355c290e1f4fc966b8788729a4d4",
  defaultToken1: "0x951857744785e80e2de051c32ee7b25f9c458c42",
  tokenList: [
    { symbol: "WXDC", address: "0x951857744785e80e2de051c32ee7b25f9c458c42" },
    { symbol: "USDC.e", address: "0x2a8e898b6242355c290e1f4fc966b8788729a4d4" },
  ],
  stables: ["0x2a8e898b6242355c290e1f4fc966b8788729a4d4"],
  watchlist: [],
  internalName: "xdc",
  nativeLogoUrl: "https://assets.oku.trade/natives/xdc.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0x951857744785e80e2de051c32ee7b25f9c458c42",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
