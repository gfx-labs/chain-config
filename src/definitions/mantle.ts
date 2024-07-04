import { mantle as chain } from "viem/chains";
import { makeConfig } from "../util";

export const mantle = makeConfig({
  ...chain,
  blockTimeSeconds: 2,
  sortIndex: 15,
  logoUrl: "https://assets.oku.trade/mantle-logo.png",
  safeReorgDistance: 90000,
  externalId: {},
  uniswap: {
    deployBlock: 63795918,
    poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF",
    nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    positionsNFTDeployBlock: 63796102,
    universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
  },
  token: {
    usdcAddress: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
    wethAddress: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  },
  oku: {
    limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
    limitOrderRegistryDeployBlock: 63839894,
    pricing: {
      nativeWrappedToken: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
      nativeWrappedName: "MNT",
    },
  },
  defaultPool: "0x076eb72e74c16b208c692eeab3750978d76b8f28",
  defaultToken0: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
  defaultToken1: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  tokenList: [
    { symbol: "WMNT", address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8" },
    { symbol: "USDC", address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9" },
  ],
  stables: [
    "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
    "0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111",
  ],
  watchlist: [
    "0x086F766b336DFB0f705Dc030dB01993b22D81266",
    "0x076eb72E74C16b208c692EEAB3750978D76B8F28",
    "0xFc60a4d05ac8C93F62276e046Ad5a098f5C7820a",
    "0x4cdFc22bF05209de87Ee564746Dc7E5174631d2b",
    "0x48EF5640E71001CaC842f5627A0bfec1EF09DeB7",
    "0x8CFee38ab8b8f4BC2ff662E8cc8bDfb0439C9D2C",
  ],
  internalName: "mantle",
  nativeLogoUrl: "https://assets.oku.trade/natives/mnt.png",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
    },
    nftManager: {
      address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
    },
    weth9: {
      address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
    },
    multicall2: {
      address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
});
