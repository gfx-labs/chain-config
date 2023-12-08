import { rootstock as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const rootstock: IChainInfo = {
  ...chain,
  blockTimeSeconds: 33,
  logoUrl: 'https://assets.oku.trade/rootstock-logo.svg',
  defaultPool: '0xdc72fed793f1e660ba6096948ea27b0490218ca3',
  defaultToken0: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
  defaultToken1: '0xef213441a85df4d7acbdae0cf78004e1e486bb96',
  tokenList: [
    { symbol: 'WRBTC', address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d' },
    { symbol: 'RIF', address: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5' },
    { symbol: 'RUSDT', address: '0xef213441a85df4d7acbdae0cf78004e1e486bb96' },
  ],
  stables: ['0xef213441a85df4d7acbdae0cf78004e1e486bb96'],
  watchlist: ['0xdc72fed793f1e660ba6096948ea27b0490218ca3'],
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
