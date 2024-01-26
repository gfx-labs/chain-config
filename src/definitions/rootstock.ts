import { rootstock as chain } from "viem/chains";
import { makeConfig } from "../util";
import {} from "viem";

export const rootstock = makeConfig({
  ...chain,
  sortIndex: 7,
  name: "Rootstock",
  blockTimeSeconds: 33,
  logoUrl: "https://assets.oku.trade/rootstock-logo.svg",
  uniswap: {
    deployBlock: 5829210,
    poolFactory: "0xaF37EC98A00FD63689CF3060BF3B6784E00caD82",
    multicall2: "0x996a9858cdFa45aD68E47C9a30A7201E29c6A386",
    tickLens: "0x55B9dF5bF68ADe972191a91980459f48ecA16afC",
    nonfungiblePositionManager: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
    positionsNFT: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
    positionsNFTDeployBlock: 5829891,
  },
  token: {
    usdcAddress: "0x3A15461d8AE0f0Fb5fA2629e9dA7D66A794a6E37",
  },
  oku: {
    limitOrderRegistry: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252",
    limitOrderRegistryDeployBlock: 5842098,
    pricing: {
      nativeWrappedToken: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
      nativeWrappedName: "WRBTC",
    },
  },

  defaultPool: "0xd2ffe51ab4e622a411abbe634832a19d919e9c55",
  defaultToken0: "0x542fda317318ebf1d3deaf76e0b632741a7e677d",
  defaultToken1: "0xef213441a85df4d7acbdae0cf78004e1e486bb96",
  tokenList: [
    { symbol: "WRBTC", address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d" },
    { symbol: "RIF", address: "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5" },
    { symbol: "RUSDT", address: "0xef213441a85df4d7acbdae0cf78004e1e486bb96" },
  ],
  stables: [
    "0xef213441a85df4d7acbdae0cf78004e1e486bb96",
    "0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37",
  ],
  watchlist: [
    "0xd2ffe51ab4e622a411abbe634832a19d919e9c55",
    "0x022650756421f2e636d4138054331cbfafb55d9e",
    "0x549a5d92412161a1a2828549a657a49dd9fa046c",
    "0xcba7abe98fd6a65259837d76a3409841c1dd4288",
    "0xbe092d38045ef7f9cdc5014278a4239e896bf5ca",
  ],
  blockExplorers: {
    default: { name: "Blockscout", url: "https://rootstock.blockscout.com" },
    rsk: chain.blockExplorers.default,
    blockscout: { name: "Blockscout", url: "https://rootstock.blockscout.com" },
  },
  internalName: "rootstock",
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252",
    },
    nftManager: {
      address: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
    },
    weth9: {
      address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
    },

    Multicall2: {
      address: "0x996a9858cdFa45aD68E47C9a30A7201E29c6A386",
    },
    Multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
    },
  },
});
