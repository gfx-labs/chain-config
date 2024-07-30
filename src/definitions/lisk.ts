import { zeroAddress } from "viem";
import { lisk as chain } from "viem/chains";
import { makeConfig } from "../util";

export const lisk = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/lisk-logo.svg",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "lisk",
  },
  initCodeHash:
    "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
  uniswap: {
    deployBlock: 577168,
    poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
    multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF",
    nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    positionsNFTDeployBlock: 578398,
    universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
  },
  token: {
    wethAddress: "0x4200000000000000000000000000000000000006",
  },
  oku: {
    limitOrderRegistry: "0x81dE30A9a2816F95f2EE8DF62bafC45a095d57b2",
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
  ],
  stables: ["0x05D032ac25d322df992303dCa074EE7392C117b9"],
  // TODO: watchlist
  watchlist: [],
  internalName: "lisk",
  nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x81dE30A9a2816F95f2EE8DF62bafC45a095d57b2",
    },
    nftManager: {
      address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    },
    weth9: {
      address: "0x4200000000000000000000000000000000000006",
    },
    multicall2: {
      address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    },
    multicall3: {
      address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
    },
  },
});
