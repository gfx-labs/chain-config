import { taiko as chain } from "viem/chains";
import { makeConfig } from "../util";

export const taiko = makeConfig({
  ...chain,
  blockTimeSeconds: 24,
  sortIndex: 4,
  logoUrl: "https://assets.oku.trade/taiko-logo.svg",
  safeReorgDistance: 90000,
  externalId: {
    zerion: "taiko",
  },
  uniswap: {
    deployBlock: 961,
    poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
    multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    positionsNFTDeployBlock: 980,
    universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
  },
  token: {
    usdcAddress: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
    wethAddress: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
  },
  oku: {
    limitOrderRegistry: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
    limitOrderRegistryDeployBlock: 2396,
    pricing: {
      nativeWrappedToken: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
      nativeWrappedName: "ETH",
    },
  },
  defaultPool: "0xDaC937d4263E6A667A027FE59B2FFe2F91D54f46",
  defaultToken0: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
  defaultToken1: "0xa9d23408b9ba935c230493c40c73824df71a0975",
  tokenList: [
    { symbol: "TAIKO", address: "0xa9d23408b9ba935c230493c40c73824df71a0975" },
    { symbol: "WETH", address: "0xA51894664A773981C6C112C43ce576f315d5b1B6" },
    { symbol: "USDC", address: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b" },
  ],
  stables: ["0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"],
  watchlist: [
    "0xDaC937d4263E6A667A027FE59B2FFe2F91D54f46",
    "0x5B731355AAd31C132dd4754E70E92c590Ae42386",
    "0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b",
    "0xcbf2e8520B88C4eC30B2B6ddfAa2900087B42D55",
    "0x4e35666b3ebf367842b9b6d5b297a2a069f862f5",
  ],
  internalName: "taiko",
  blockExplorers: {
    ...chain.blockExplorers,
    default: {
      name: "Taikoscan",
      url: "https://taikoscan.io",
    },
  },
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
    },
    nftManager: {
      address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
    },
    weth9: {
      address: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
    },
    multicall2: {
      address: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
    },
    multicall3: {
      address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    },
  },
});
