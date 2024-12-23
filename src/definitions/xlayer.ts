import { xLayer as chain } from "viem/chains";
import { makeConfig } from "../util";

export const xLayer = makeConfig({
  ...chain,
  blockTimeSeconds: 3,
  launchTime: 0,
  sortIndex: 18,
  logoUrl: "https://assets.oku.trade/chains/xlayer-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
	morpho: {},
  oracles: {
    cmc: {
      slug: "x-layer",
      native: "okb",
    },
    coingecko: {
      slug: "x-layer",
      native: "okb",
    },
    dexscreener: "x-layer",
  },
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 4345920,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 4346185,
    universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",

    wrappedNativeAddress: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
    wrappedNativeSymbol: "WOKB",
    wrappedNativeName: "Wrapped OKB",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "OKB",
  },
  token: {
    usdcAddress: "0x74b7f16337b8972027f6196a17a631ac6de26d22",
    wethAddress: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
  },
  oku: {
    limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    limitOrderRegistryDeployBlock: 4348466,
    pricing: {
      nativeWrappedToken: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
      nativeWrappedName: "OKB",
    },
  },
  defaultPool: "0x87d7a0a51e27bf7232f97015ab3e53edc8104989",
  defaultToken0: "0x74b7f16337b8972027f6196a17a631ac6de26d22",
  defaultToken1: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
  tokenList: [
    { symbol: "WOKB", address: "0xe538905cf8410324e03a5a23c1c177a474d59b2b" },
    { symbol: "USDC", address: "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0" },
    { symbol: "USDT", address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d" },
    { symbol: "DAI", address: "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4" },
    { symbol: "WBTC", address: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1" },
  ],
  stables: [
    "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0",
    "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
    "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4",
  ],
  watchlist: ["0x87d7a0a51e27bf7232f97015ab3e53edc8104989"],
  internalName: "xlayer",
  nativeLogoUrl: "https://assets.oku.trade/natives/okb.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
    },
    multicall2: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
