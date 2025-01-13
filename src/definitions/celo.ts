import { celo as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const celo = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  launchTime: 1727359200,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/celo-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {},
  bridges: {},
  morpho: {},
  oracles: {
    coingecko: {
      slug: "celo",
      native: "ethereum",
    },
  },
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 5188280,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xCbe9Be2C87b24b063A21369b6AB0Aa9f149c598F",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 5189019,
    universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",

    wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
    wrappedNativeSymbol: "WETH",
    wrappedNativeName: "Wrapped Ether",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "ETH",
  },
  token: {
    wethAddress: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3",
  },
  oku: {
    pricing: {
      nativeWrappedToken: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      nativeWrappedName: "CELO",
    },
  },
  defaultPool: "0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE",
  defaultToken0: "0x471EcE3750Da237f93B8E339c536989b8978a438",
  defaultToken1: "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207",
  tokenList: [
    { symbol: "CELO", address: "0x4200000000000000000000000000000000000006" },
    { symbol: "WETH", address: "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207" },
    { symbol: "USDC", address: "0xceba9300f2b948710d2653dd7b07f33a8b32118c" },
    { symbol: "USDT", address: "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e" },
    { symbol: "CUSD", address: "0x765de816845861e75a25fca122bb6898b8b1282a" },
  ],
  stables: [
    "0xceba9300f2b948710d2653dd7b07f33a8b32118c",
    "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
    "0x765de816845861e75a25fca122bb6898b8b1282a",
  ],
  watchlist: [
    "0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE",
    "0xE426E1305f5e6093864762Bf9d2D8B44BC211c59",
    "0x5dC631aD6C26BEA1a59fBF2C2680CF3df43d249f",
    "0x34757893070B0FC5de37AaF2844255fF90F7F1E0",
    "0x1a810e0B6c2dd5629AFa2f0c898b9512C6F78846",
    "0x7766BDC5ff15d3aCeB4D37914963aeBAcCF3de15",
    "0x628Cb3a5a206956423D158009612813B64B19dab",
    "0x1c8DafD358d308b880F71eDB5170B010b106Ca60",
    "0xA1777e082fA1746eB78DD9C1fbB515419CF6e538",
    "0xd80D28850bEBE6208433c298334392bC940B4fc7",
    "0xf130F72F8190f662522774C3367E6e8814f5e219",
    "0x7B9A5BC920610F54881f2F6359007957DE504862",
  ],
  internalName: "celo",
  nativeLogoUrl: "https://assets.oku.trade/natives/celo.png",
  contracts: {
    ...chain.contracts,
    nftManager: {
      address: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
    },
    weth9: {
      address: zeroAddress,
    },
    multicall2: {
      address: "0x633987602DE5C4F337e3DbF265303A1080324204",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
