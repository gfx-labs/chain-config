import { Chain, ChainContract } from 'viem'

export * from './definitions/'

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
