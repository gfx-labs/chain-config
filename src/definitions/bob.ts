import { zeroAddress } from "viem";
import { bob as chain } from "viem/chains";
import { makeConfig } from "../util";

export const bob = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/bob-logo.svg",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "bob",
  },
  markets: {},
  bridges: {},
  oracles: {
    coingecko: {
      slug: "bob",
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
  },
  token: {
    wethAddress: "0x4200000000000000000000000000000000000006",
  },
  oku: {
    // TODO: limit order
    limitOrderRegistry: zeroAddress,
    limitOrderRegistryDeployBlock: 1748477,
    pricing: {
      nativeWrappedToken: "0x4200000000000000000000000000000000000006",
      nativeWrappedName: "ETH",
    },
  },
  // TODO: default pool
  defaultPool: zeroAddress,
  defaultToken0: "0x05D032ac25d322df992303dCa074EE7392C117b9",
  defaultToken1: "0x4200000000000000000000000000000000000006",
  tokenList: [
    { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
    { symbol: "USDT", address: "0x05D032ac25d322df992303dCa074EE7392C117b9" },
    { symbol: "USDC.e", address: "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0" },
  ],
  stables: [
    "0x05D032ac25d322df992303dCa074EE7392C117b9",
    "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0",
  ],
  watchlist: [],
  internalName: "bob",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      // TODO: limit order
      address: zeroAddress,
    },
    nftManager: {
      address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
    },
    weth9: {
      address: "0x4200000000000000000000000000000000000006",
    },
    multicall2: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
