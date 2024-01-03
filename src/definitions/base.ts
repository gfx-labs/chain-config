import { base as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const base: IChainInfo = {
  ...chain,
  sortIndex: 8,
  blockTimeSeconds: 2,
  logoUrl: 'https://assets.oku.trade/base-logo.svg',
  defaultPool: '0x9e37cb775a047ae99fc5a24dded834127c4180cd',
  defaultToken0: '0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8',
  defaultToken1: '0x4200000000000000000000000000000000000006',
  tokenList: [
    { symbol: 'USDbC', address: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca' },
    { symbol: 'cbETH', address: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22' },
    { symbol: 'WETH', address: '0x4200000000000000000000000000000000000006' },
    { symbol: 'USDC', address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913' },
  ],
  stables: [
    '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
    '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
  ],
  watchlist: [
    '0x9e37cb775a047ae99fc5a24dded834127c4180cd',
    '0x4c36388be6f416a29c8d8eee81c771ce6be14b18',
    '0xd0b53d9277642d899df5c87a3966a349a798f224',
    '0x3bc5180d5439b500f381f9a46f15dd6608101671',
    '0x24e1cbd6fed006ceed9af0dce688acc7951d57a9',
    '0x10648ba41b8565907cfa1496765fa4d95390aa0d',
  ],
  internalName: 'base',
  contracts: {
    ...chain.contracts,
    nftManager: {
      address: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
    },
    weth9: {
      address: '0x4200000000000000000000000000000000000006',
    },
    limitOrder: {
      address: '0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27',
    }
  },
}
