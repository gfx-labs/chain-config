import { etherlink as chain } from "viem/chains";
import { makeConfig } from "../util";
import { zeroAddress } from "viem";

export const etherlink = makeConfig({
  ...chain,
  name: "Corn",
  blockTimeSeconds: 0.6,
  launchTime: 1749000115,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/etherlink-logo.png",
  safeReorgDistance: 90000,
  externalId: {
    tenderly: "true",
  },
  markets: {},
  bridges: {},
  oracles: {},
  morpho: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 14584055,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 14584114,
    universalRouter: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",

    wrappedNativeAddress: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
    wrappedNativeSymbol: "WXTZ",
    wrappedNativeName: "Wrapped XTZ",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "XTZ",
  },
  token: {
    wethAddress: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
    usdcAddress: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
    wbtcAddress: "0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F",
  },
  oku: {
    // TODO: update limit order registry address
    limitOrderRegistry: zeroAddress,
    limitOrderRegistryDeployBlock: 14584114,
    pricing: {
      nativeWrappedToken: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
      nativeWrappedName: "XTZ",
    },
  },
  defaultPool: zeroAddress,
  defaultToken0: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
  defaultToken1: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
  tokenList: [
    { symbol: "WXTZ", address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb" },
    { symbol: "USDC.e", address: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9" },
  ],
  stables: [
    "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
    "0x2C03058C8AFC06713be23e58D2febC8337dbfE6A",
  ],
  watchlist: [],
  internalName: "etherlink",
  nativeLogoUrl: "https://assets.oku.trade/natives/xtz.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      // TODO: update limit order address
      address: zeroAddress,
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
