import { bsc as chain } from 'viem/chains'

export const bsc = {
  ...chain,
  sortIndex: 9,
  blockTimeSeconds: 3,
  logoUrl: 'https://assets.oku.trade/bsc-logo.svg',
  defaultPool: '0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869',
  defaultToken0: '0x55d398326f99059ff775485246999027b3197955',
  defaultToken1: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  tokenList: [],
  stables: [],
  watchlist: ['0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869'],
  internalName: 'bsc',
  contracts: {
    ...chain.contracts,
    nftManager: {
      address: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
    },
    weth9: {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
  },
} as const
