import { lightlinkPhoenix as chain } from "viem/chains";
import { makeConfig } from "../util";

export const lightlink = makeConfig({
  ...chain,
  name: "LightLink",
  blockTimeSeconds: 0.5,
  launchTime: 1741485513,
  sortIndex: 13,
  logoUrl: "https://assets.oku.trade/chains/lightlink-logo.svg",
  safeReorgDistance: 90000,
  blockAid: "",
  morpho: {},
  externalId: {},
  markets: {
    icecreamswap: true
  },
  bridges: {
    stargate: {
      endpointID: 30309,
      blockConfirmations: 20,
      tokens: [
        {
          name: "ETH",
          type: "POOL",
          id: 13,
          address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
        }, {
          name: "USDC",
          type: "OFT",
          id: 1,
          address: "0x8EE21165Ecb7562BA716c9549C1dE751282b9B33",
        }, {
          name: "USDT",
          type: "OFT",
          id: 2,
          address: "0x06D538690AF257Da524f25D0CD52fD85b1c2173E",
        }
      ],
    },
  },
  oracles: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 131405097,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0x807F4E281B7A3B324825C64ca53c69F0b418dE40",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 131405537,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

    wrappedNativeAddress: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
    wrappedNativeSymbol: "WETH",
    wrappedNativeName: "Wrapped Ether",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "ETH",
  },
  token: {
    wethAddress: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
    usdcAddress: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd",
    wbtcAddress: "0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67",
  },
  oku: {
    limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    limitOrderRegistryDeployBlock: 131407726,
    pricing: {
      nativeWrappedToken: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
      nativeWrappedName: "WETH",
    },
  },
  defaultPool: "0x1125452469E9B9A36FE69249309fCe8925C3eEDa",
  defaultToken0: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
  defaultToken1: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd",
  tokenList: [
    { symbol: "LL", address: "0xd9d7123552fA2bEdB2348bB562576D67f6E8e96E" },
    { symbol: "USDC.e", address: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd" },
    { symbol: "USDT", address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949" },
    { symbol: "WETH", address: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73" },
    { symbol: "WBTC", address: "0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67" },
  ],
  stables: [
    "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd",
    "0x808d7c71ad2ba3FA531b068a2417C63106BC0949",
  ],
  watchlist: [
    "0x1125452469E9B9A36FE69249309fCe8925C3eEDa",
    "0x2288627C696010049f6D98a84fC10F9C5F7b3Ce2",
    "0xc87Fa6290e7F11543e76e1D240335190C15Dade8",
  ],
  internalName: "lightlink",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    limitOrder: {
      address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
