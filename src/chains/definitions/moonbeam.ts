import { moonbeam as chain } from 'viem/chains'
import { IChainInfo } from '..'

export const moonbeam: IChainInfo = {
  ...chain,
  blockTimeSeconds: 30,
  logoUrl: 'https://assets.oku.trade/moonbeam-logo.svg',
  defaultPool: '0xba66370d96a9d61afa66283900b78c1f6ed02782',
  defaultToken0: '0xab3f0245b83feb11d15aaffefd7ad465a59817ed',
  defaultToken1: '0xacc15dc74880c9944775448304b263d191c6077f',
  tokenList: [
    { symbol: 'WETH', address: '0xab3f0245b83feb11d15aaffefd7ad465a59817ed' },
    { symbol: 'USDC', address: '0x931715fee2d06333043d11f658c8ce934ac61d0c' },
  ],
  stables: [
    '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
    '0x931715FEE2d06333043d11F658C8CE934aC61D0c',
    '0x765277eebeca2e31912c9946eae1021199b39c61',
    '0x06e605775296e851ff43b4daa541bb0984e9d6fd',
    '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
    '0x8e70cd5b4ff3f62659049e74b6649c6603a0e594',
  ],
  watchlist: [
    '0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29',
    '0xba66370d96a9d61afa66283900b78c1f6ed02782',
    '0x19156c03a6fd894beb4fa6a828e854d3a4bed372',
  ],
  internalName: 'moonbeam',
  contracts: {
    ...chain.contracts,
    limitOrder: {
      address: '0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf',
    },
    nftManager: {
      address: '0x9036d0dcb5a059c9371b05d508f0072df773854e',
    },
    weth9: {
      address: '0xacc15dc74880c9944775448304b263d191c6077f',
    },
  },
}
