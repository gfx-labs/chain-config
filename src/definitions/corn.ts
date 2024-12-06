import { corn as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const corn = makeConfig({
  ...chain,
  blockTimeSeconds: 35,
  launchTime: 1733882663,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/corn-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 10878,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 10901,
    universalRouter: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",

    wrappedNativeAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
    wrappedNativeSymbol: "WBTCN",
    wrappedNativeName: "Wrapped Bitcorn",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "BTCN",
  },
  token: {
    wethAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
  },
  oku: {
    limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    limitOrderRegistryDeployBlock: 10948,
    pricing: {
      nativeWrappedToken: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
      nativeWrappedName: "BTCN",
    },
  },
  defaultPool: "0xe435E14815d28a86c643E4606Ed0e8E5624782c6",
  defaultToken0: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
  defaultToken1: "0xDF0B24095e15044538866576754F3C964e902Ee6",
  tokenList: [
    { symbol: "WBTCN", address: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2" },
    { symbol: "USDC.e", address: "0xDF0B24095e15044538866576754F3C964e902Ee6" },
  ],
  stables: ["0xDF0B24095e15044538866576754F3C964e902Ee6"],
  watchlist: ["0xe435E14815d28a86c643E4606Ed0e8E5624782c6"],
  internalName: "corn",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
