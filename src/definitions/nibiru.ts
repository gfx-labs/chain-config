import { nibiru as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const nibiru = makeConfig({
  ...chain,
  name: "Nibiru",
  blockTimeSeconds: 2,
  launchTime: 1746663816,
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
    deployBlock: 19842247,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0x807F4E281B7A3B324825C64ca53c69F0b418dE40",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 19842447,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

    wrappedNativeAddress: "0x1429B38e58b97de646ACd65fdb8a4502c2131484",
    wrappedNativeSymbol: "WNIBI",
    wrappedNativeName: "Wrapped NIBI",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "NIBI",
  },
  token: {
    wethAddress: "0x1429B38e58b97de646ACd65fdb8a4502c2131484",
    usdcAddress: "0x0829F361A05D993d5CEb035cA6DF3446b060970b",
  },
  oku: {
    limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    limitOrderRegistryDeployBlock: 19842992,
    pricing: {
      nativeWrappedToken: "0x1429B38e58b97de646ACd65fdb8a4502c2131484",
      nativeWrappedName: "NIBI",
    },
  },
  defaultPool: "0x4BE9Abccf5C41c7A0ddF073e7A72f4eef8B66f61",
  defaultToken0: "0x0829F361A05D993d5CEb035cA6DF3446b060970b",
  defaultToken1: "0x1429B38e58b97de646ACd65fdb8a4502c2131484",
  tokenList: [
    { symbol: "WNIBI", address: "0x1429B38e58b97de646ACd65fdb8a4502c2131484" },
    { symbol: "USDC.e", address: "0x0829F361A05D993d5CEb035cA6DF3446b060970b" },
  ],
  stables: ["0x0829F361A05D993d5CEb035cA6DF3446b060970b"],
  watchlist: ["0x4BE9Abccf5C41c7A0ddF073e7A72f4eef8B66f61"],
  internalName: "nibiru",
  nativeLogoUrl: "https://assets.oku.trade/natives/nibi.svg",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0x1429B38e58b97de646ACd65fdb8a4502c2131484",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
