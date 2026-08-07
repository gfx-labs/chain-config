import { zeroAddress } from "viem";
import { hyperEvm as chain } from "viem/chains";
import { makeConfig } from "../util";

export const hyperevm = makeConfig({
	...chain,
	blockTimeSeconds: 1,
	launchTime: 1767333673,
	transactionType: "eip1559",
	sortIndex: 11,
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
	marketRouters: {
		enso: ["0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"],
		icecreamswap: ["0x2fF506ed9729580EF8Bf04429614beB1baE5F76D"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		okx: ["0x9Ac7b1FFEE0f58c0a3c89AA54Afb62efD25DC9fd"],
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
		zeroex: [
			"0x0000000000001fF3684f28c67538d4D072C22734",
			"0xb32b027C59F540C22B4c76bF849BcF853B99F158",
		],
	},
	bridges: {
		cctp: {
			domain: 19,
			messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64",
		},
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
