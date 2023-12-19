import { rootstock as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const rootstock: IChainInfo = {
  ...chain,
  name: "Rootstock",
  blockTimeSeconds: 33,
  logoUrl: 'https://assets.oku.trade/rootstock-logo.svg',
  defaultPool: '0xd2ffe51ab4e622a411abbe634832a19d919e9c55',
  defaultToken0: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
  defaultToken1: '0xef213441a85df4d7acbdae0cf78004e1e486bb96',
  tokenList: [
    { symbol: 'WRBTC', address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d' },
    { symbol: 'RIF', address: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5' },
    { symbol: 'RUSDT', address: '0xef213441a85df4d7acbdae0cf78004e1e486bb96' },
  ],
  stables: ['0xef213441a85df4d7acbdae0cf78004e1e486bb96', '0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37'],
  watchlist: ['0xd2ffe51ab4e622a411abbe634832a19d919e9c55', '0x022650756421f2e636d4138054331cbfafb55d9e', '0x549a5d92412161a1a2828549a657a49dd9fa046c', '0xcba7abe98fd6a65259837d76a3409841c1dd4288', '0xbe092d38045ef7f9cdc5014278a4239e896bf5ca'],
  blockExplorers: {
    ...chain.blockExplorers,
    default: chain.blockExplorers.blockscout,
  },
  internalName: 'rootstock',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0x83B1cF411f57F7373bBFF81dCE81437e768F4252',
    },
    nftManager: {
      address: '0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1',
    },
    weth9: {
      address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
    },
  },
}
