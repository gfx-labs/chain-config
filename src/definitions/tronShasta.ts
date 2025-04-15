import { tronShasta as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const tronShasta = makeConfig({
  ...chain,
  name: "Tron Shasta",
  blockTimeSeconds: 5,
  launchTime: 1746055290,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/tron.png",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 52878027,
    poolFactory: "0x413cf78a14f90203919b8b4d690e6540745ed8074a",
    permit2: zeroAddress,
    multicall2: "0x418c289c0a8ada24fc0f27fcbb1200370a52a6675e",
    tickLens: "0x41c857346cd83be79b78f1b10d5fcf158edc844796",
    nonfungiblePositionManager: "0x41358b41818d60cbf40c11fb728c8bc865726f423d",
    positionsNFT: "0x41358b41818d60cbf40c11fb728c8bc865726f423d",
    positionsNFTDeployBlock: 52878030,
    universalRouter: zeroAddress,

    wrappedNativeAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
    wrappedNativeSymbol: "WBTCN",
    wrappedNativeName: "Wrapped Bittronshasta",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "BTCN",
  },
  token: {},
  oku: {
    pricing: {
      nativeWrappedToken: zeroAddress,
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: zeroAddress,
  defaultToken1: zeroAddress,
  tokenList: [],
  stables: [],
  watchlist: [],
  internalName: "tronshasta",
  nativeLogoUrl: "https://assets.oku.trade/natives/tron.png",
  contracts: {
    ...chain.contracts,
    nftManager: {
      address: "0x41358b41818d60cbf40c11fb728c8bc865726f423d",
    },
    multicall2: {
      address: "0x418c289c0a8ada24fc0f27fcbb1200370a52a6675e",
    },
  },
});
