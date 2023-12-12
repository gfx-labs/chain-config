import { scroll as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const scroll: IChainInfo = {
  ...chain,
  blockTimeSeconds: 3,
  logoUrl: 'https://assets.oku.trade/scroll-logo.png',
  defaultPool: '0x7211c32bfc1841cab1158d18fee62c9b8905ddfe',
  defaultToken0: '0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4',
  defaultToken1: '0x5300000000000000000000000000000000000004',
  tokenList: [
    { symbol: 'USDC', address: '0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4' },
    { symbol: 'WETH', address: '0x5300000000000000000000000000000000000004' },
    { symbol: 'USDT', address: '0xf55bec9cafdbe8730f096aa55dad6d22d44099df' },
    { symbol: 'WBTC', address: '0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1' },
    { symbol: 'DAI', address: '0xca77eb3fefe3725dc33bccb54edefc3d9f764f97' }
  ],
  stables: ['0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4', '0xf55bec9cafdbe8730f096aa55dad6d22d44099df', '0xca77eb3fefe3725dc33bccb54edefc3d9f764f97'],
  watchlist: [
    '0x7211c32bfc1841cab1158d18fee62c9b8905ddfe',
    '0xa2a37b632fe6a1cce7a7874a65f9e4ce62c7f05a',
    '0xba63cb90f7b46e2b163e8c8adf57cf8b2a73500e',
  ],
  internalName: 'scroll',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377',
    },
    nftManager: {
      address: '0xB39002E4033b162fAc607fc3471E205FA2aE5967',
    },
    weth9: {
      address: '0x5300000000000000000000000000000000000004',
    },
  },
}
