import { filecoin as chain } from 'viem/chains'
import { IChainInfo } from '../../chainInfo'

export const filecoin: IChainInfo = {
  ...chain,
  blockTimeSeconds: 30,
  blockExplorers: {
    ...chain.blockExplorers,
    default: {
      name: 'FVM Explorer',
      url: 'https://fvm.starboard.ventures/explorer',
    },
  },
  logoUrl: 'https://assets.oku.trade/filecoin-logo.svg',
  defaultPool: '0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05',
  defaultToken0: '0xb829b68f57cc546da7e5806a929e53be32a4625d',
  defaultToken1: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  tokenList: [
    { symbol: 'WFIL', address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A' },
    { symbol: 'axlWETH', address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D' },
    { symbol: 'axlWBTC', address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad' },
    { symbol: 'axlUSDC', address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215' },
    { symbol: 'axlUSDT', address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6' },
  ],
  stables: [
    '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    '0x2421db204968A367CC2C866CD057fA754Cb84EdF',
    '0x422849b355039bc58f2780cc4854919fc9cfaf94',
  ],
  watchlist: ['0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05', '0x9d8ea62e1264ab667d234b5610774a08e608e3b8'],
  internalName: 'filecoin',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0xded8791056aa39581460a005a3c400a281e24bd7',
    },
    nftManager: {
      address: '0x4cd986dD509fbB6A695aE971d5C56c8795f640ee',
    },
    weth9: {
      address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
    },
  },
}
