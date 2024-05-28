- [ ] make sure chain is in viem. make a pr if it isnt

- [ ] upload logo to assets repo

- [ ] add chain to oku/chain-configs (use zero address for default pool if none are deployed yet)

- [ ] venn

  - [ ] add rpcs to venn.hcl
  - [ ] update chain-configs import
  - [ ] check to make sure its pulling head block

- [ ] backend

  - [ ] add chain to metadata package
  - [ ] create new databse for chain
  - [ ] grant usage and select on level0, level1, and level2 to ro user
  - [ ] make sure sprint is caught up
  - [ ] add new chain to omni

- [ ] trade

  - [ ] update chain-configs import
  - [ ] make sure it is visible in the drop down
  - [ ] make sure frontend can connect to backend
  - [ ] create new stable/wrapped native pool
  - [ ] add new pools to chain-config for default and watchlist

- [ ] analytics

  - [ ] update chain-configs import
  - [ ] make sure it is visible in the drop down
  - [ ] make sure frontend can connect to backend

- [ ] uni-sdk-core

  - [ ] src/entities/weth9.ts
    - [ ] add weth9 address
  - [ ] src/chains.ts
    - [ ] add to ChaiIdEnum
    - [ ] add to SUPPORTED_CHAINS
    - [ ] add to NativeCurrencyName
  - [ ] src/addresses.ts
    - [ ] create CHAIN_ADDRESSES const
    - [ ] add to CHAIN_TO_ADDRESSES_MAP
    - [ ] add override to SWAP_ROUTER_02_ADDRESSES
    - [ ] add entry to WETH9
  - [ ] publish new package

- [ ] add chain to viem

- [ ] universal-router-sdk

  - [ ] update uni-sdk-core import
  - [ ] src/utils/constants.tx
    - [ ] add chains relevant constract addresses
  - [ ] publish new package

- [ ] smart-order-router

  - [ ] update uni-sdk-core and universal-router-sdk imports
  - [ ] src/providers/token-provider.ts
    - [ ] add relevant tokens(usdc,usdt,weth)
    - [ ] add case to USDC_ON
    - [ ] add case to USDT_ON
    - [ ] add case to DAI_ON
  - [ ] src/providers/caching-token-provider.ts
    - [ ] add entry to CACHE_SEED_TOKENS
  - [ ] src/routers/alpha-router/functions/get-candidate-pools.ts
    - [ ] add entry to baseTokensByChain
  - [ ] src/routers/legacy-router/bases.ts
    - [ ] add entry to BASES_TO_CHECK_TRADES_AGAINST
  - [ ] src/routers/alpha-router/gas-models/gas-model.ts
    - [ ] add entry to usdGasTokensByChain
  - [ ] src/util/addresses.ts
    - [ ] add entry to UNISWAP_MULTICALL_ADDRESSES
    - [ ] add entry to QUOTER_V2_ADDRESSES
    - [ ] add entry to V3_CORE_FACTORY_ADDRESSES
    - [ ] add entry to WETH9
  - [ ] src/util/chains.ts
    - [ ] create isChain function
    - [ ] create ChainNativeCurrency class
    - [ ] add entry to NativeCurrencyName
    - [ ] add entry to WRAPPED_NATIVE_CURRENCY
    - [ ] add entry to ID_TO_PROVIDER
    - [ ] add entry to ID_TO_NETWORK_NAME
    - [ ] add entry to NATIVE_CURRENCY
    - [ ] add entry to NATIVE_NAMES_BY_ID
    - [ ] add entry to ChainName
    - [ ] add entry to ID_TO_CHAIN_ID
    - [ ] add entry to SUPPORTED_CHAINS
    - [ ] add entry to nativeOnChain
  - [ ] src/providers/v3/static-subgraph-provider.ts
    - [ ] add entry to BASES_TO_CHECK_TRADES_AGAINST
  - [ ] src/providers/v2/static-subgraph-provider.ts
    - [ ] add empty entry to BASES_TO_CHECK_TRADES_AGAINST

- [ ] test swap with cli

- [ ] canoe
  - [ ] update oku-chains import
  - [ ] update smart-order-router import
  - [ ] update uniswap-sdk-core import
  - [ ] update universal-router-sdk import
  - [ ] src/util/constants.tx
    - [ ] add chain to idMap
    - [ ] add chain to blockAidMap (empty string if not supported)
  - [ ] src/oracles
    - [ ] dexscreener
    - [ ] coingecko
    - [ ] cmc
  - [ ] src/markets
    - [ ] kyberswap
    - [ ] oneinch
    - [ ] openocean
    - [ ] propellerswap
    - [ ] usor
