import { Chain, ChainContract } from 'viem'
import * as defs from "./definitions"
export * from './definitions/'

export interface IChainInfo extends Chain {
  logoUrl: string
  sortIndex: number
  defaultPool: string
  internalName: string
  defaultToken0: string
  defaultToken1: string
  tokenList: ReadonlyArray<{ symbol: string; address: string }>
  stables: ReadonlyArray<string>
  watchlist: ReadonlyArray<string>
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


export const MAINNET_CHAINS = [
  defs.arbitrum,
  defs.base,
  defs.boba,
  defs.bsc,
  defs.filecoin,
  defs.mainnet,
  defs.moonbeam,
  defs.optimism,
  defs.polygon,
  defs.rootstock,
  defs.scroll,
  defs.polygonZkEvm,
  defs.zkSync
] as const

// type checking
var _: IChainInfo
_ = defs.arbitrum
_ = defs.base,
_ = defs.boba,
_ = defs.bsc,
_ = defs.filecoin,
_ = defs.mainnet,
_ = defs.moonbeam,
_ = defs.optimism,
_ = defs.polygon,
_ = defs.rootstock,
_ = defs.scroll,
_ = defs.polygonZkEvm,
_ = defs.zkSync

