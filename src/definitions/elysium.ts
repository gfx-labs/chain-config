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
	sortIndex: 51,
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
	// Provenance checked 2026-11-06 by comparing runtime bytecode with the
	// same address on other chains (see PR notes). Uniswap is intentionally
	// omitted: 0xFE31...b900 holds unrelated code here, and the Elysium
	// Universal Router is only in an unmerged, non-Uniswap-Labs PR.
	marketRouters: {
		// Identical bytecode to Monad's EnsoRouter (docs.enso.build lists
		// Elysium only on testnet so far).
		enso: ["0xCfBAa9Cfce952Ca4F4069874fF1Df8c05e37a3c7"],
		// Matches HyperEVM build except the WHYPE immutable; KyberNetwork
		// repos add Elysium support.
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		// Same size as HyperEVM/Base, small immutable diffs; no docs found.
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
		// Byte-identical to Base/HyperEVM; Elysium is in 0x-settler config.
		zeroex: ["0x0000000000001fF3684f28c67538d4D072C22734"],
	},
	oracles: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
	},
	token: {
		usdcAddress: zeroAddress,
		wethAddress: WHYPE,
	},
	oku: {
		router: zeroAddress,
		limitOrderRegistry: zeroAddress,
		limitOrderRegistryDeployBlock: 0,
		pricing: {
			nativeWrappedToken: WHYPE,
			nativeWrappedName: "HYPE",
		},
	},
	defaultPool: zeroAddress,
	defaultToken0: WHYPE,
	defaultToken1: zeroAddress,
	tokenList: [{ symbol: "WHYPE", address: WHYPE }],
	stables: [],
	watchlist: [],
	v4Watchlist: [],
	internalName: "elysium",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/hype.png",
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
