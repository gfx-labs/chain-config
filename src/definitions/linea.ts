import { linea as chain } from "viem/chains";
import { makeConfig } from "../util";
import {} from "viem";

export const linea = makeConfig({
  ...chain,
  name: "Linea",
  blockTimeSeconds: 3,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/linea-logo.svg",
  safeReorgDistance: 100,
  externalId: {
    zerion: "linea",
  },
  uniswap: {
    deployBlock: 25248,
    poolFactory: "0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9",
    multicall2: "0x93e253D101519578A8DF0BCe2A43D8292BFb3A1F",
    tickLens: "0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9",
    nonfungiblePositionManager: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
    positionsNFT: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
    positionsNFTDeployBlock: 25264,
    universalRouter: "0xd7c7d7f18dd5388d5217c9696c7e799fcd75c6bd",
  },
  token: {
    usdcAddress: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    wethAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
    wbtcAddress: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
  },
  oku: {
    limitOrderRegistry: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74",
    limitOrderRegistryDeployBlock: 3610379,
    pricing: {
      nativeWrappedToken: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
      nativeWrappedName: "ETH",
    },
  },
  defaultPool: "0xc48622190a6b91d64ee7459c62fade9abe61b48a",
  defaultToken0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
  defaultToken1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
  tokenList: [
    { symbol: "WETH", address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f" },
    { symbol: "USDC", address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff" },
  ],
  stables: [
    "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    "0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5",
  ],
  watchlist: [
    "0xc48622190a6b91d64ee7459c62fade9abe61b48a",
    "0x5856edf9212bdcec74301ec78afc573b62d6a283",
    "0xf8296e87192aa71158bd9ba323fc2e1d9a047aa2",
    "0x93f626d0e471279bd8d1420959cc881bdacfdab1",
    "0xfe64636280a98d21701a607e6a52ed5d62bacfe4",
    "0xf2d33caaedc4daab2c1f0bfc7cccb03a9acf3e4e",
    "0xe848d169080a0022039fcaefc19263c410fe3520",
    "0x30b44df5010f8b2a4d4e566a2ba638496e76a8fc",
    "0x42a72c7fbb355b2cfe08f8716595f3f3509b3bea",
  ],
  internalName: "linea",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74",
    },
    nftManager: {
      address: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
    },
    weth9: {
      address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
    },
    multicall2: {
      address: "0x9A27B81b034e585be9d366DEB7aBAD036BE50845",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
