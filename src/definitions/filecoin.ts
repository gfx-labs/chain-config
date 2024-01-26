import { filecoin as chain } from "viem/chains";
import { makeConfig } from "../util";
import { } from "viem";

export const filecoin = makeConfig({
  ...chain,
  sortIndex: 10,
  name: "Filecoin",
  blockTimeSeconds: 30,
  safeReorgDistance: 90000,
  blockExplorers: {
    ...chain.blockExplorers,
    default: {
      name: "FVM Explorer",
      url: "https://fvm.starboard.ventures/explorer",
    },
  },
  logoUrl: "https://assets.oku.trade/filecoin-logo.svg",

  uniswap: {
    deployBlock: 3195837,
    poolFactory: "0xB4C47eD546Fc31E26470a186eC2C5F19eF09BA41",
    multicall2: "0x732f5baac411e427d130fed03c2e82a3e0d64d35",
    tickLens: "0x76c001ad9E527FEfA8Fa822a987Ad44ce720BAeD",
    nonfungiblePositionManager: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
    positionsNFT: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
    positionsNFTDeployBlock: 3195861,
  },
  token: {
    usdcAddress: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    wbtcAddress: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad",
    wethAddress: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D",
  },
  oku: {
    pricing: {
      pools: [],
      nativeWrappedToken: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
      nativeWrappedName: "WFIL",
      nativeQuotePools: undefined,
    },
    limitOrderRegistry: "0xded8791056aa39581460a005a3c400a281e24bd7",
    limitOrderRegistryDeployBlock: 3413267,
  },
  defaultPool: "0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05",
  defaultToken0: "0xb829b68f57cc546da7e5806a929e53be32a4625d",
  defaultToken1: "0xeb466342c4d449bc9f53a865d5cb90586f405215",
  tokenList: [
    { symbol: "WFIL", address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A" },
    {
      symbol: "axlWETH",
      address: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D",
    },
    {
      symbol: "axlWBTC",
      address: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad",
    },
    {
      symbol: "axlUSDC",
      address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    },
    {
      symbol: "axlUSDT",
      address: "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6",
    },
  ],
  stables: [
    "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6",
    "0x2421db204968A367CC2C866CD057fA754Cb84EdF",
    "0x422849b355039bc58f2780cc4854919fc9cfaf94",
  ],
  watchlist: [
    "0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05",
    "0x9d8ea62e1264ab667d234b5610774a08e608e3b8",
    "0x443a6243a36ef0ae1c46523d563c15abd787f4e9",
  ],
  internalName: "filecoin",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0xded8791056aa39581460a005a3c400a281e24bd7",
    },
    nftManager: {
      address: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
    },
    weth9: {
      address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
    },
    multicall2: {
      address: "0x732f5baac411e427d130fed03c2e82a3e0d64d35",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
