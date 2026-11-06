import { elysium as chain } from "../internal-chains";
import { makeConfig } from "../util";
import { zeroAddress } from "../util/constants";

// WHYPE on Elysium.
const WHYPE = "0xbA876237B0F021A6c6D852d6c26E107997cC5E81";

export const elysium = makeConfig({
	...chain,
	name: "Elysium",
	blockTimeSeconds: 0.1,
	// Mainnet launch 2026-11-09 00:00 UTC; update with genesis timestamp.
	launchTime: 1794182400,
	transactionType: "eip1559",
	sortIndex: 5,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/elysium-logo.svg",
	deprecated: false,
	liteChain: true,
	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90_000,
	blockAid: "",
	externalId: {},
	markets: {},
	bridges: {},
	morpho: {},
	// Left empty until aggregator deployments are officially confirmed.
	marketRouters: {},
	oracles: {},
	initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
	},
	token: {
		usdcAddress: "0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65",
		wethAddress: WHYPE,
	},
	oku: {
		router: "0xA89A26c4d81A2cca4d0670F77f0FC88362b72248",
		limitOrderRegistry: zeroAddress,
		limitOrderRegistryDeployBlock: 0,
		pricing: {
			nativeWrappedToken: WHYPE,
			nativeWrappedName: "HYPE",
		},
	},
	defaultPool: zeroAddress,
	defaultToken0: WHYPE,
	defaultToken1: "0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65",
	tokenList: [{ symbol: "WHYPE", address: WHYPE }],
	stables: ["0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65"],
	watchlist: [],
	v4Watchlist: [],
	internalName: "elysium",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/hype.svg",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
			blockCreated: 0,
		},
		nftManager: {
			address: zeroAddress,
		},
		weth9: {
			address: WHYPE,
		},
	},
});
