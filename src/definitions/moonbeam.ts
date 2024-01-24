import { moonbeam as chain } from "viem/chains";
import { makeConfig } from "../util";
import {} from "viem";

export const moonbeam = makeConfig({
  ...chain,
  sortIndex: 12,
  blockTimeSeconds: 30,
  logoUrl: "https://assets.oku.trade/moonbeam-logo.svg",
  uniswap: {
    deployBlock: 3340452,
    poolFactory: "0x28f1158795A3585CaAA3cD6469CD65382b89BB70",
    multicall2: "0xd213Ff319F8d28Fe31EbDB75b23aA61a2b905320",
    tickLens: "0x1f4F7b041895D9eB1A79be0896AF3E68e4160010",
    quoter: "0x48af91cdcad8ffdd7a8d4cdf73c16cb0632d3d17",
    swapRouter02: "0xc507e22ba3140dc0a79fdf27e03c98aa20f3ee66",
    NFTDescriptor: "0x041b81cb4d223d8e70ac96c0d103f8a956ed4514",
    nonfungibleTokenPositionDescriptor:
      "0x921c55AE486e63D16dbfbE216573A21aeB684c02",
    transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
    nonfungiblePositionManager: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71",
    v3Migrator: "0x76776b10d782a1d194fbfc92d4b01db1ce1eeb4b",
    positionsNFT: "0x9036D0DcB5a059C9371B05D508f0072Df773854e",
    positionsNFTDeployBlock: 3340476,
  },
  token: {
    wethAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
    usdcAddress: "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
  },
  oku: {
    pricing: {
      nativeWrappedToken: "0xacc15dc74880c9944775448304b263d191c6077f",
      stablecoinList: [
        "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
        "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
      ],
    },
  },
  defaultPool: "0xba66370d96a9d61afa66283900b78c1f6ed02782",
  defaultToken0: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
  defaultToken1: "0xacc15dc74880c9944775448304b263d191c6077f",
  tokenList: [
    { symbol: "WETH", address: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed" },
    { symbol: "USDC", address: "0x931715fee2d06333043d11f658c8ce934ac61d0c" },
  ],
  stables: [
    "0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b",
    "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
    "0x765277eebeca2e31912c9946eae1021199b39c61",
    "0x06e605775296e851ff43b4daa541bb0984e9d6fd",
    "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
    "0x8e70cd5b4ff3f62659049e74b6649c6603a0e594",
  ],
  watchlist: [
    "0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29",
    "0xba66370d96a9d61afa66283900b78c1f6ed02782",
    "0x19156c03a6fd894beb4fa6a828e854d3a4bed372",
  ],
  internalName: "moonbeam",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
    },
    nftManager: {
      address: "0x9036d0dcb5a059c9371b05d508f0072df773854e",
    },
    weth9: {
      address: "0xacc15dc74880c9944775448304b263d191c6077f",
    },
    multicall2: {
      address: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
