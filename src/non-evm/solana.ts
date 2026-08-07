import { defineChain } from "viem";
import { NON_EVM_CHAIN_ID } from "../spec";
import { makeConfig } from "../util";

/**
 * Solana mainnet-beta.
 *
 * A non-EVM chain expressed within the EVM-shaped {@link IChainInfo} so it
 * flows through the existing resolvers and consumers unchanged. Because viem's
 * `Chain` requires a numeric `id`, Solana uses the {@link NON_EVM_CHAIN_ID}
 * (`0`) placeholder and is identified/resolved via CAIP-2 instead:
 * `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`, where the reference is the first
 * 32 base58 chars of the genesis hash per the CAIP-2 `solana` namespace.
 *
 * EVM-only fields (uniswap, morpho, contracts, etc.) are present but empty.
 *
 * Refs:
 *   - https://github.com/ChainAgnostic/namespaces/blob/main/solana/caip2.md
 */
const chain = defineChain({
	id: NON_EVM_CHAIN_ID,
	name: "Solana",
	nativeCurrency: {
		name: "Solana",
		symbol: "SOL",
		decimals: 9,
	},
	rpcUrls: {
		default: {
			http: ["https://api.mainnet-beta.solana.com"],
		},
	},
	blockExplorers: {
		default: {
			name: "Solscan",
			url: "https://solscan.io",
			apiUrl: "https://public-api.solscan.io",
		},
	},
});

export const solana = makeConfig({
	...chain,
	caip2Namespace: "solana",
	caip2Reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
	internalName: "solana",
	transactionType: "solana",
	sortIndex: 51,
	launchTime: 1584368940,
	blockTimeSeconds: 0.4,
	deprecated: false,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/solana-logo.webp",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/sol.png",
	blockAid: "solana",

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
		coingecko: "solana",
	},
	markets: {},
	bridges: {},
	oracles: {
		coingecko: {
			slug: "solana",
			native: "solana",
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
