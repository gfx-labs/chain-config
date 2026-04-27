import { zeroAddress } from "viem";
import { hyperEvm as chain } from "viem/chains";
import { makeConfig } from "../util";

export const hyperevm = makeConfig({
	...chain,
	blockTimeSeconds: 1,
	launchTime: 1767333673,
	transactionType: "eip1559",
	sortIndex: 9,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/hyperevm-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		coingecko: "hyperevm",
	},
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
	defaultToken1: "0xb88339cb7199b77e23db6e890353e22632ba630f",
	tokenList: [
		{ symbol: "WHYPE", address: "0x5555555555555555555555555555555555555555" },
		{ symbol: "USDC", address: "0xb88339cb7199b77e23db6e890353e22632ba630f" },
	],
	stables: [
		"0xb88339cb7199b77e23db6e890353e22632ba630f",
		"0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb",
	],
	watchlist: [],
	v4Watchlist: [],
	internalName: "hyperevm",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/hype.svg",
	contracts: {
		nftManager: {
			address: zeroAddress,
		},
		weth9: {
			address: "0x5555555555555555555555555555555555555555",
		},
		limitOrder: {
			address: zeroAddress,
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
