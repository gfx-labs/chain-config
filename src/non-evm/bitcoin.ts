import { defineChain } from "viem";
import { NON_EVM_CHAIN_ID } from "../spec";
import { makeConfig } from "../util";

/**
 * Bitcoin mainnet.
 *
 * A non-EVM chain expressed within the EVM-shaped {@link IChainInfo} so it
 * flows through the existing resolvers and consumers unchanged. Because viem's
 * `Chain` requires a numeric `id`, Bitcoin uses the {@link NON_EVM_CHAIN_ID}
 * (`0`) placeholder and is identified/resolved via CAIP-2 instead:
 * `bip122:000000000019d6689c085ae165831e93`, where the reference is the first
 * 32 hex chars of the genesis block hash per the CAIP-2 `bip122` namespace.
 *
 * EVM-only fields (uniswap, morpho, contracts, etc.) are present but empty.
 *
 * Refs:
 *   - https://github.com/ChainAgnostic/namespaces/blob/main/bip122/caip2.md
 */
const chain = defineChain({
	id: NON_EVM_CHAIN_ID,
	name: "Bitcoin",
	nativeCurrency: {
		name: "Bitcoin",
		symbol: "BTC",
		decimals: 8,
	},
	rpcUrls: {
		default: {
			http: ["https://bitcoin-rpc.publicnode.com"],
		},
	},
	blockExplorers: {
		default: {
			name: "mempool.space",
			url: "https://mempool.space",
			apiUrl: "https://mempool.space/api",
		},
	},
});

export const bitcoin = makeConfig({
	...chain,
	caip2Namespace: "bip122",
	caip2Reference: "000000000019d6689c085ae165831e93",
	internalName: "bitcoin",
	transactionType: "bitcoin",
	sortIndex: 9,
	launchTime: 1231006505,
	blockTimeSeconds: 600,
	deprecated: false,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/bitcoin-logo.webp",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/btc.png",
	blockAid: "bitcoin",

	estimatedSwapGas: 0,
	estimatedBridgeGas: 0,
	estimatedWrapGas: 0,

	initCodeHash:
		"0x0000000000000000000000000000000000000000000000000000000000000000",
	defaultPool: "0x0000000000000000000000000000000000000000",
	defaultToken0: "0x0000000000000000000000000000000000000000",
	defaultToken1: "0x0000000000000000000000000000000000000000",

	tokenList: [],
	stables: [],
	watchlist: [],
	v4Watchlist: [],

	externalId: {
		coingecko: "bitcoin",
	},
	markets: {},
	bridges: {},
	oracles: {
		coingecko: {
			slug: "bitcoin",
			native: "bitcoin",
		},
	},

	uniswap: {},
	morpho: {},
	token: {},
	oku: {},

	contracts: {
		nftManager: {
			address: "0x0000000000000000000000000000000000000000",
		},
	},
});
