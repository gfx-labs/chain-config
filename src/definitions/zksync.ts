import {} from "viem";
import { zkSync as chain } from "viem/chains";
import { makeConfig } from "../util";

export const zkSync = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 4,
  logoUrl: "https://assets.oku.trade/zksync-logo.svg",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "zksync-era",
  },
  uniswap: {
    deployBlock: 12637075,
    poolFactory: "0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422",
    multicall2: "0x8bB86A31795d3e8ef12c630C288770e13eEcF038",
    tickLens: "0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89",
    nonfungiblePositionManager: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
    positionsNFT: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
    positionsNFTDeployBlock: 12637120,
    universalRouter: "0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06",
  },
  token: {
    usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    wethAddress: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    wbtcAddress: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
  },
  oku: {
    limitOrderRegistry: "0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa",
    limitOrderRegistryDeployBlock: 13618344,
    pricing: {
      nativeWrappedToken: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
      nativeWrappedName: "ETH",
    },
  },

  defaultPool: "0xff577f0e828a878743ecc5e2632cbf65cecf17cf",
  defaultToken0: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
  defaultToken1: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
  tokenList: [
    { symbol: "WETH", address: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91" },
    { symbol: "USDC", address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" },
  ],
  stables: [
    "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    "0x503234F203fC7Eb888EEC8513210612a43Cf6115",
  ],
  watchlist: [
    "0xff577f0e828a878743ecc5e2632cbf65cecf17cf",
    "0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135",
    "0x3f618967492945c02d5222d333e903345fde741a",
    "0xc99bcff6564bafc70ba1b53c53a03541f780a546",
    "0x1fa900dbb20ed45d18883849c00632bca16f6610",
    "0xbEEA3B382696669e0E67C08Ea9f4aaE8d528Af0F",
    "0xf8C42655373A280e8800BEeE44fcC12ffC99E797",
    "0xa07028B453a1f6Ac277e93f3A0eA73B4bE5c7d63",
    "0x23C77A553AAc0ad009441C856c05D117c1131e3d",
  ],
  internalName: "zksync",
  nativeLogoUrl: "https://assets.oku.trade/naitves/eth.png",
  blockExplorers: {
    ...chain.blockExplorers,
    default: {
      name: "Zksync Era Explorer",
      url: "https://era.zksync.network",
    },
  },
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa",
    },
    nftManager: {
      address: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
    },
    weth9: {
      address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    },
    multicall2: {
      address: "0x8bB86A31795d3e8ef12c630C288770e13eEcF038",
    },
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
    },
  },
});
