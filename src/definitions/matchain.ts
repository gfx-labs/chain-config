import { matchain as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const matchain = makeConfig({
  ...chain,
  name: "Matchain",
  blockTimeSeconds: 0.5,
  launchTime: 1754106070,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/matchain-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 37612670,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 37613469,
    universalRouter: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",

    wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
    wrappedNativeSymbol: "WBNB",
    wrappedNativeName: "Wrapped BNB",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "BNB",
  },
  token: {
    wethAddress: "0x4200000000000000000000000000000000000006",
    usdcAddress: "0x97eec1c29f745dC7c267F90292AA663d997a601D",
  },
  oku: {
    limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    limitOrderRegistryDeployBlock: 37616150,
    pricing: {
      nativeWrappedToken: "0x4200000000000000000000000000000000000006",
      nativeWrappedName: "WBNB",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: "0x4200000000000000000000000000000000000006",
  defaultToken1: "0x97eec1c29f745dC7c267F90292AA663d997a601D",
  tokenList: [
    { symbol: "WBNB", address: "0x4200000000000000000000000000000000000006" },
    { symbol: "USDC.e", address: "0x97eec1c29f745dC7c267F90292AA663d997a601D" },
    { symbol: "USDT", address: "0xB6dc6C8b71e88642cEAD3be1025565A9eE74d1C6" },
  ],
  stables: [
    "0x97eec1c29f745dC7c267F90292AA663d997a601D",
    "0xB6dc6C8b71e88642cEAD3be1025565A9eE74d1C6",
  ],
  watchlist: [],
  internalName: "matchain",
  nativeLogoUrl: "https://assets.oku.trade/natives/bnb.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0x4200000000000000000000000000000000000006",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
