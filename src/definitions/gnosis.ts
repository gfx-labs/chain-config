import { gnosis as chain } from "viem/chains";
import { makeConfig } from "../util";

export const gnosis = makeConfig({
  ...chain,
  blockTimeSeconds: 5,
  launchTime: 1725890400,
  sortIndex: 18,
  blockAid: "",
  logoUrl: "https://assets.oku.trade/chains/gnosis-logo.png",
  safeReorgDistance: 90000,
  morpho: {},
  externalId: {
    zerion: "xdai",
    cowswap: "xdai",
    tenderly: "true",
  },
  markets: {
    openocean: "xdai",
    cowswap: "xdai",
    paraswap: {
      routerContract: "0x6A000F20005980200259B80c5102003040001068",
    },
    oneinch: {
      spender: "0x111111125421ca6dc452d289314280a0f8842a65",
    },
  },
  bridges: {
    chainlink: {
      atlasNetworkName: "xdai-mainnet",
      routerAddress: "0x4aAD6071085df840abD9Baf1697d5D5992bDadce",
      chainSelector: 465200170687744372n,
      tokenAdminRegistry: "0x73BC11423CBF14914998C23B0aFC9BE0cb5B2229",
    },
    deswap: {
      chainId: 100000002,
    },
    stargate: {
      endpointID: 30145,
      blockConfirmations: 20,
      tokens: [
        {
          name: "USDC",
          id: 1,
          address: "0xB1EeAD6959cb5bB9B20417d6689922523B2B86C3",
        },
        {
          name: "ETH",
          id: 13,
          address: "0xe9aBA835f813ca05E50A6C0ce65D0D74390F7dE7",
        },
      ],
    },
    layerzero: {
      eid: 30145,
      tokens: [
        {
          id: 4,
          symbol: "WETH",
          project: "stargate",
          OFTAddress: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
        },
      ],
    },
  },
  oracles: {
    cmc: {
      slug: "gnosis",
      native: "xdai",
    },
    coingecko: {
      slug: "xdai",
      native: "xdai",
    },
    dexscreener: "gnosischain",
  },
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 27416614,
    poolFactory: "0xe32F7dD7e3f098D518ff19A22d5f028e076489B1",
    permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
    multicall2: "0x4dfa9a980efE4802E969AC33968E3d6E59B8a19e",
    tickLens: "0x8fe3D346B53dCA838B228e0e53aCdBED5DEC70Dc",
    nonfungiblePositionManager: "0xAE8fbE656a77519a7490054274910129c9244FA3",
    positionsNFT: "0xAE8fbE656a77519a7490054274910129c9244FA3",
    positionsNFTDeployBlock: 27416645,
    universalRouter: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",

    wrappedNativeAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    wrappedNativeSymbol: "WXDAI",
    wrappedNativeName: "Wrapped XDAI",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "XDAI",
  },
  token: {
    usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    wethAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  },
  oku: {
    limitOrderRegistry: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    limitOrderRegistryDeployBlock: 35719277,
    pricing: {
      pools: ["0x5a2fb66e66b2af7f1c2f71c6c695492faab2e587"],
      nativeWrappedToken: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
      nativeWrappedName: "xDAI",
    },
  },
  defaultPool: "0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9",
  defaultToken0: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1",
  defaultToken1: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  tokenList: [
    { symbol: "WXDAI", address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" },
    { symbol: "WETH", address: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1" },
    { symbol: "USDC.e", address: "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0" },
    { symbol: "USDC", address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" },
    { symbol: "USDT", address: "0x4ecaba5870353805a9f068101a40e0f32ed605c6" },
  ],
  stables: [
    "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
    "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0",
    "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
    "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  ],
  watchlist: [
    "0x909e36aB6eA5DB6Fd71876Fe319328BAe4DfeA29",
    "0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9",
    "0x8Fb50102bC76798C13a68de3bd5F1974feDF48CD",
    "0xa180bEDd56438C596C9ACed94D03A3001C5BB83C",
    "0xE9E1793954f32D880Ec0B2186E96d88e2b870e40",
    "0xbb98d4e20b054ede4c4143ecee59368f88ecbbe4",
  ],
  internalName: "gnosis",
  nativeLogoUrl: "https://assets.oku.trade/natives/xdai.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    nftManager: {
      address: "0xAE8fbE656a77519a7490054274910129c9244FA3",
    },
    weth9: {
      address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    },
    multicall2: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
