import { Chain, ChainContract } from 'viem'

export { optimism } from './definitions/optimism.js'
export { arbitrum } from './definitions/arbitrum.js'
export { bsc } from './definitions/bsc.js'
export { boba } from './definitions/boba.js'
export { moonbeam } from './definitions/moonbeam.js'
export { filecoin } from './definitions/filecoin.js'
export { zkSync } from './definitions/zksync.js'
export { polygon } from './definitions/polygon.js'
export { mainnet } from './definitions/mainnet.js'
export { rootstock } from './definitions/rootstock.js'

export interface IChainInfo extends Chain {
  logoUrl: string
  defaultPool: string
  internalName: string
  defaultToken0: string
  defaultToken1: string
  tokenList: { symbol: string; address: string }[]
  stables: string[]
  watchlist: string[]
  blockTimeSeconds: number
  contracts: {
    [key: string]: ChainContract | { [chainId: number]: ChainContract }
  } & {
    ensRegistry?: ChainContract
    ensUniversalResolver?: ChainContract
    multicall3?: ChainContract
    nftManager: ChainContract
    limitOrder?: ChainContract
    weth9: ChainContract
  }
}
