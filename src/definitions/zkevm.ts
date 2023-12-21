import { polygonZkEvm as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const polygonZkEvm: IChainInfo = {
  ...chain,
  blockTimeSeconds: 7,
  logoUrl: 'https://assets.oku.trade/zkevm-logo.svg',
  defaultPool: '0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd',
  defaultToken0: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
  defaultToken1: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
  tokenList: [
    { symbol: 'WETH', address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9' },
    { symbol: 'USDC', address: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035' },
    { symbol: 'USDT', address: '0x1e4a5963abfd975d8c9021ce480b42188849d41d' },
    { symbol: 'DAI', address: '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4' }
  ],
  stables: ['0x1e4a5963abfd975d8c9021ce480b42188849d41d', '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035', '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4'],
  watchlist: ['0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd'],
  internalName: 'polygon-zkevm',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0x5f1ef1d278013567c3c67e18d2d35bfa9954f723',
    },
    nftManager: {
      address: '0xf0d61aeda516cca1ff20be65cfb0213be688a24f',
    },
    weth9: {
      address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
    },
  },
}
