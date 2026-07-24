import { defineChain } from "viem";
import { NON_EVM_CHAIN_ID } from "../spec";
import { makeConfig } from "../util";

/**
 * Zcash mainnet.
 *
 * A non-EVM chain expressed within the EVM-shaped {@link IChainInfo} so it
 * flows through the existing resolvers and consumers unchanged. Because viem's
 * `Chain` requires a numeric `id`, Zcash uses the {@link NON_EVM_CHAIN_ID}
 * (`0`) placeholder and is identified/resolved via CAIP-2 instead:
 * `bip122:00040fe8ec8471911baa1db1266ea15d`, where the reference is the first
 * 32 hex chars of the genesis block hash per the CAIP-2 `bip122` namespace.
 * Zcash is a Bitcoin-derived chain and therefore shares the `bip122`
 * namespace, so `chainType(zcash)` is `ChainType.Bitcoin`; use `internalName`
 * (or the CAIP-2 identifier) to distinguish it from Bitcoin itself.
 *
 * EVM-only fields (uniswap, morpho, contracts, etc.) are present but empty.
 *
 * Refs:
 *   - https://github.com/ChainAgnostic/namespaces/blob/main/bip122/caip2.md
 */
const chain = defineChain({
	id: NON_EVM_CHAIN_ID,
	name: "Zcash",
	nativeCurrency: {
		name: "Zcash",
		symbol: "ZEC",
		decimals: 8,
	},
	rpcUrls: {
		default: {
			http: ["https://zec.rocks:443"],
		},
	},
	blockExplorers: {
		default: {
			name: "Blockchair",
			url: "https://blockchair.com/zcash",
			apiUrl: "https://api.blockchair.com/zcash",
		},
	},
});

export const zcash = makeConfig({
	...chain,
	caip2Namespace: "bip122",
	caip2Reference: "00040fe8ec8471911baa1db1266ea15d",
	internalName: "zcash",
	transactionType: "zcash",
	sortIndex: 1002,
	launchTime: 1477641360,
	blockTimeSeconds: 75,
	deprecated: false,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/zcash-logo.webp",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/zec.png",
	blockAid: "",

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
		coingecko: "zcash",
	},
	markets: {},
	bridges: {},
	oracles: {
		coingecko: {
			slug: "zcash",
			native: "zcash",
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
