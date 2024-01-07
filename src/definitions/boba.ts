import { boba as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const boba: IChainInfo = {
  ...chain,
  sortIndex: 11,
  blockTimeSeconds: 300,
  logoUrl: 'https://assets.oku.trade/boba-logo.svg',
  defaultPool: '0xdF37543dae7986E48E3ce83F390A828A9F3D23BA',
  defaultToken0: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
  defaultToken1: '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7',
  tokenList: [
    { symbol: 'USDC', address: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc' },
    { symbol: 'BOBA', address: '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7' },
    { symbol: 'WETH', address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000' },
    { symbol: 'WBTC', address: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b' },
    { symbol: 'USDT', address: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d' },
  ],
  stables: [
    '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
    '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
    '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
  ],
  watchlist: [
    '0xdF37543dae7986E48E3ce83F390A828A9F3D23BA',
    '0x162b1fda171463974e5262bac5824da233f11e00',
    '0xfe1a0c58e38fa71618545df15e5479559ce51108',
    '0xb1ed67e29b2497404a2ac7f2a2989c3328ec2999',
    '0x66faef55892dae3932a043d3238ecaa271d36e0d',
  ],
  internalName: 'boba',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0xfefb60591cffc694c0137983a9091d64af8ecbac',
    },
    nftManager: {
      address: '0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71',
    },
    weth9: {
      address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
    },
  },
} as const
