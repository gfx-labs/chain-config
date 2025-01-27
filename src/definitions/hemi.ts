import { hemi as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

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
    deployBlock: 963965,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 963981,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

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
    limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    limitOrderRegistryDeployBlock: 964056,
    pricing: {
      nativeWrappedToken: "0x4200000000000000000000000000000000000006",
      nativeWrappedName: "ETH",
    },
  },
  defaultPool: "0x3A49cCD3c2A688D0766E087B30A3d27C8997A71c",
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
  watchlist: ["0x3A49cCD3c2A688D0766E087B30A3d27C8997A71c"],
  internalName: "hemi",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
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
