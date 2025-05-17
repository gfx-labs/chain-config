import { sonic as chain } from "viem/chains";
import { makeConfig } from "../util";

export const sonic = makeConfig({
  ...chain,
  blockTimeSeconds: 3,
  launchTime: 1737165834,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/chains/sonic-logo.svg",
  safeReorgDistance: 90000,
  morpho: {},
  externalId: {
    tenderly: "true"
  },
  markets: {
    icecreamswap: true,
    kyberswap: "sonic",
    openocean: "sonic"
  },
  bridges: {
    chainlink: {
      atlasNetworkName: "sonic-mainnet",
      routerAddress: "0xB4e1Ff7882474BB93042be9AD5E1fA387949B860",
      chainSelector: 1673871237479749969n,
      tokenAdminRegistry: "0x2961Cb47b5111F38d75f415c21ceB4120ddd1b69"
    },
    stargate: {
      endpointID: 30332,
      blockConfirmations: 20,
      tokens: [
        {
          name: "USDC",
          id: 1,
          address: "0xA272fFe20cFfe769CdFc4b63088DCD2C82a2D8F9"
        }
      ]
    }
  },
  oracles: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 322744,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 322763,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

    wrappedNativeAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
    wrappedNativeSymbol: "wS",
    wrappedNativeName: "Wrapped Sonic",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "S",
  },
  token: {
    wethAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
  },
  oku: {
    limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    limitOrderRegistryDeployBlock: 10948,
    pricing: {
      nativeWrappedToken: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
      nativeWrappedName: "wS",
    },
  },
  defaultPool: "0xEcb04e075503Bd678241f00155AbCB532c0a15Eb",
  defaultToken0: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
  defaultToken1: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
  tokenList: [
    { symbol: "wS", address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38" },
    { symbol: "USDC.e", address: "0x29219dd400f2bf60e5a23d13be72b486d4038894" },
    { symbol: "WETH", address: "0x50c42deacd8fc9773493ed674b675be577f2634b" },
  ],
  stables: [
    "0x29219dd400f2bf60e5a23d13be72b486d4038894",
    "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
  ],
  watchlist: [
    "0xecb04e075503bd678241f00155abcb532c0a15eb",
    "0xcfd41df89d060b72ebdd50d65f9021e4457c477e",
    "0xb01b201ce73415071b7b99a8737240b511d203b7",
    "0xb345489a0350f188fe70dadaa6210a9c710fed4b",
    "0xdfcdad314b0b96ab8890391e3f0540278e3b80f7",
    "0x21043D7Ad92d9e7bC45C055AF29771E37307B111",
  ],
  internalName: "sonic",
  nativeLogoUrl: "https://assets.oku.trade/natives/sonic.svg",
  contracts: {
    limitOrder: {
      address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
