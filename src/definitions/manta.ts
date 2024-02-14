import { manta as chain } from "viem/chains";
import { makeConfig } from "../util";
import { } from "viem";

export const manta = makeConfig({
  ...chain,
  name: "Manta Pacific",
  blockTimeSeconds: 2,
  sortIndex: 13,
  logoUrl: "https://assets.oku.trade/manta-logo.png",
  safeReorgDistance: 90000,
  uniswap: {
    deployBlock: 1191705,
    poolFactory: "0x06D830e15081f65923674268121FF57Cc54e4e23",
    multicall2: "0x3C7B6fA5376Ba88364e9BeAE6E1aEc9f738e8f63",
    tickLens: "0xC94Fb2D13587b0b5af78094933490B35E004eAbE",
    nonfungiblePositionManager: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD",
    positionsNFT: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD",
    positionsNFTDeployBlock: 1191836,
    universalRouter: "0x42Bff1f6b647462fcD8c28a488Be9C9988830ef6",
  },
  token: {
    usdcAddress: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb",
    wethAddress: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
    wbtcAddress: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6",
  },
  oku: {
    limitOrderRegistry: "0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C",
    limitOrderRegistryDeployBlock: 1198851,
    pricing: {
      nativeWrappedToken: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
      nativeWrappedName: "ETH",
    },
  },

  defaultPool: "0xbfca3e002acbcea2f9d48a87cf545cb4344f9a3e",
  defaultToken0: "0x0dc808adce2099a9f62aa87d9670745aba741746",
  defaultToken1: "0xb73603c5d87fa094b7314c74ace2e64d165016fb",
  tokenList: [
    { symbol: "WETH", address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746" },
    { symbol: "USDC", address: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb" },
    { symbol: "MANTA", address: "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5" },
    { symbol: "USDT", address: "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f" },
    { symbol: "WBTC", address: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6" },
  ],
  stables: [
    "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f",
    "0xb73603C5d87fA094B7314C74ACE2e64D165016fb",
  ],
  watchlist: [
    "0xbfca3e002acbcea2f9d48a87cf545cb4344f9a3e",
    "0xbfca3e002acbcea2f9d48a87cf545cb4344f9a3e",
    "0x9a70668cf02902b53c24f7d21762d19dfb9b69a6",
    "0xa6f04e80aee9e491539cdf0cec8c2099df46816f",
    "0x1cfd505f8a79be3a4fd9305239991f480e5fdc7b",
    "0x775eac394b56cfad02d963c9c3c9cd2e425dab4e",
    "0x060f2babc09826687be9cbf5c7ede3b3cd00dd78",
    "0x6e32805add5f5255c22d8f0125a0c7d351926bc3",
    "0x5bedc5d1e1d0b32caca78db23af71126b6fe26b6",
  ],
  internalName: "manta",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C",
    },
    nftManager: {
      address: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD",
    },
    weth9: {
      address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
    },
    multicall2: {
      address: "0x52dFC0D9960F11A9Ca9FF616e791B91188446a60",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
