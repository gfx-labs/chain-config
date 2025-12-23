import { hyperEvm as chain } from "viem/chains";
import { makeConfig } from "../util";

export const hyperevm = makeConfig({
	...chain,
	name: "HyperEvm",
	blockTimeSeconds: 1,
	launchTime: 1739731200,
	transactionType: "eip1559",
	sortIndex: 15,
	logoUrl: "",
	deprecated: false,
	safeReorgDistance: 90000,
	blockAid: "HyperEVM",
	externalId: {},
	liteChain: true,
	markets: {
		openocean: "hyperevm",
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "hyperliquid-mainnet",
			routerAddress: "0x13b3332b66389B1467CA6eBd6fa79775CCeF65ec",
			chainSelector: 2442541497099098535n,
			tokenAdminRegistry: "0xcE44363496ABc3a9e53B3F404a740F992D977bDF",
		},
		wormhole: {
			chain: "HyperEVM",
			timeToFinalize: 2,
		},
	},
	oracles: {
		cmc: {
			slug: "hyperliquid",
			native: "hyperliquid",
		},
		coingecko: {
			slug: "hyperevm",
			native: "hyperliquid",
		},
		dexscreener: "hyperliquid",
	},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {},
	token: {
		wethAddress: "0x5555555555555555555555555555555555555555",
	},
	oku: {
		pricing: {
			nativeWrappedToken: "0x5555555555555555555555555555555555555555",
			nativeWrappedName: "WHYPE",
		},
	},
	defaultPool: "0x6c9a33e3b592c0d65b3ba59355d5be0d38259285",
	defaultToken0: "0x5555555555555555555555555555555555555555",
	defaultToken1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
	tokenList: [
		{ symbol: "WHYPE", address: "0x5555555555555555555555555555555555555555" },
		{ symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
	],
	stables: [
		"0xDF0B24095e15044538866576754F3C964e902Ee6",
		"0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
	],
	watchlist: [],
	internalName: "hyperevm",
	nativeLogoUrl: "",
	contracts: {
		...chain.contracts,
		nftManager: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		weth9: {
			address: "0x5555555555555555555555555555555555555555",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
