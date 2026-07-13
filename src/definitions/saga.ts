import { saga as chain } from "viem/chains";
import { makeConfig } from "../util";

export const saga = makeConfig({
	...chain,
	name: "Saga EVM",
	blockTimeSeconds: 5,
	launchTime: 1740384000,
	transactionType: "legacy",
	sortIndex: 11,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/saga-logo.png",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		coingecko: "saga",
	},
	markets: {},
	bridges: {},
	oracles: {},
	morpho: {},
	blockExplorers: {
		default: {
			name: "BlockScout",
			url: "https://sagaevm.sagaexplorer.io",
		},
	},
	rpcUrls: {
		default: {
			http: ["https://sagaevm.jsonrpc.sagarpc.io"],
			webSocket: ["wss://sagaevm.ws.sagarpc.io"],
		},
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 18885,
		poolFactory: "0x454050C4c9190390981Ac4b8d5AFcd7aC65eEffa",
		permit2: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
		multicall2: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		tickLens: "0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA",
		nonfungiblePositionManager: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
		positionsNFT: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
		positionsNFTDeployBlock: 18902,
		universalRouter: "0xa683c66045ad16abb1bCE5ad46A64d95f9A25785",

		wrappedNativeAddress: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
		wrappedNativeSymbol: "wGAS",
		wrappedNativeName: "Wrapped Gas",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "GAS",
	},
	token: {
		usdcAddress: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
		wethAddress: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
	},
	oku: {
		limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		limitOrderRegistryDeployBlock: 19372,
		pricing: {
			nativeWrappedToken: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
			nativeWrappedName: "GAS",
		},
	},
	defaultPool: "0x99429757ddeb5432b52982b0fcf6ed94620c358d",
	defaultToken0: "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa",
	defaultToken1: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
	tokenList: [
		{ symbol: "wGAS", address: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA" },
		{ symbol: "USDC", address: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5" },
		{ symbol: "USDT", address: "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa" },
		{ symbol: "UNI", address: "0x4e33613add93463e82a14080021f2ffaf1e062cf" },
		{ symbol: "WETH", address: "0xeb41d53f14cb9a67907f2b8b5dbc223944158ccb" },
	],
	stables: [
		"0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa",
		"0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
	],
	watchlist: [
		"0x99429757ddeb5432b52982b0fcf6ed94620c358d",
		"0xc2C5f2C94759b2829C9Fd86b8d34d33DDc4D29e4",
		"0xbbf2219c49efde9c64cd5f94a952c90e4e5b6e41",
		"0x69bf9603468922c76a75068f51874f56662d35e3",
		"0x387b99a979c79f827f0ca8a752893472dc34b7ec",
	],
	v4Watchlist: [],
	internalName: "saga",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/saga.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		},
		nftManager: {
			address: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
		},
		weth9: {
			address: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
		},
		multicall2: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		multicall3: {
			address: "0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160",
		},
	},
});
