import { zkSync as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const zkSync: IChainInfo = {
  ...chain,
  blockTimeSeconds: 2,
  logoUrl: 'https://assets.oku.trade/zksync-logo.svg',
  defaultPool: '0xff577f0e828a878743ecc5e2632cbf65cecf17cf',
  defaultToken0: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',
  defaultToken1: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
  tokenList: [
    { symbol: 'WETH', address: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91' },
    { symbol: 'USDC', address: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4' },
  ],
  stables: ['0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', '0x503234F203fC7Eb888EEC8513210612a43Cf6115'],
  watchlist: [
    '0xff577f0e828a878743ecc5e2632cbf65cecf17cf',
    '0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135',
    '0x3f618967492945c02d5222d333e903345fde741a',
    '0xc99bcff6564bafc70ba1b53c53a03541f780a546',
    '0x1fa900dbb20ed45d18883849c00632bca16f6610',
  ],
  internalName: 'zksync',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa',
    },
    nftManager: {
      address: '0x0616e5762c1E7Dc3723c50663dF10a162D690a86',
    },
    weth9: {
      address: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
    },
  },
}
