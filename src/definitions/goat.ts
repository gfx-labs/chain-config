import { goat as chain } from "viem/chains";
import { makeConfig } from "../util";

export const goat = makeConfig({
  ...chain,
  name: "GOAT",
  blockTimeSeconds: 3,
  launchTime: 1742159744,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/goat-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {
    stargate: {
      endpointID: 30361,
      blockConfirmations: 20,
      assets: [
        "0x88853D410299BCBfE5fCC9Eef93c03115E908279",
        "0xbbA60da06c2c5424f03f7434542280FCAd453d10",
        "0x549943e04f40284185054145c6E4e9568C1D3241",
      ],
    },
  },
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
  defaultPool: "0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef",
  defaultToken0: "0x941508f0b823f1bc40a9beefce5e544e525a94c3",
  defaultToken1: "0xfe41e7e5cb3460c483ab2a38eb605cda9e2d248e",
  tokenList: [
    { symbol: "WBTC", address: "0xbC10000000000000000000000000000000000000" },
    { symbol: "USDC.e", address: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8" },
    { symbol: "USDT", address: "0xe1ad845d93853fff44990ae0dcecd8575293681e" },
  ],
  stables: [
    "0x3022b87ac063DE95b1570F46f5e470F8B53112D8",
    "0xe1ad845d93853fff44990ae0dcecd8575293681e",
  ],
  watchlist: [
    "0xe84dc31691587402e59ba9f9180f8ab02a593d3c",
    "0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef",
  ],
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
