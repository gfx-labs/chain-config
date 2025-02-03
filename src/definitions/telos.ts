import { telos as chain } from "viem/chains";
import { makeConfig } from "../util";

export const telos = makeConfig({
  ...chain,
  blockTimeSeconds: 0.5,
  launchTime: 1738632669,
  sortIndex: 13,
  logoUrl: "https://assets.oku.trade/chains/telos-logo.svg",
  safeReorgDistance: 90000,
  externalId: {},
  markets: {
    openocean: "telos",
    icecreamswap: true,
  },
  bridges: {},
  morpho: {},
  oracles: {},
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 386633562,
    poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
    nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    positionsNFTDeployBlock: 386635939,
    universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

    wrappedNativeAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
    wrappedNativeSymbol: "wTLOS",
    wrappedNativeName: "Wrapped TLOS",
    wrappedNativeDecimals: 18,
    nativeCurrencyName: "TLOS",
  },
  token: {
    wethAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
    wbtcAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
    usdcAddress: "0x8D97Cea50351Fb4329d591682b148D43a0C3611b",
  },
  oku: {
    limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    limitOrderRegistryDeployBlock: 386645006,
    pricing: {
      nativeWrappedToken: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
      nativeWrappedName: "TLOS",
    },
  },
  defaultPool: "0x2E2F83DF7061561C4a29bD155B8f65674bFa31C9",
  defaultToken0: "0x8D97Cea50351Fb4329d591682b148D43a0C3611b",
  defaultToken1: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
  tokenList: [
    { symbol: "WTLOS", address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E" },
    { symbol: "USDC", address: "0x8D97Cea50351Fb4329d591682b148D43a0C3611b" },
    { symbol: "WBTC", address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c" },
  ],
  stables: ["0x8D97Cea50351Fb4329d591682b148D43a0C3611b"],
  watchlist: ["0x2E2F83DF7061561C4a29bD155B8f65674bFa31C9"],
  internalName: "telos",
  nativeLogoUrl: "https://assets.oku.trade/natives/telos.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
    },
    multicall2: {
      address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
