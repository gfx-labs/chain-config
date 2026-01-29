import { lisk as chain } from "viem/chains";
import { makeConfig } from "../util";

export const lisk = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 1724076000,
	transactionType: "eip1559",
	sortIndex: 43,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/lisk-logo.png",
	deprecated: true,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
		coingecko: "lisk",
	},
	morpho: {},
	markets: {},
	bridges: {},
	oracles: {
		coingecko: {
			slug: "lisk",
			native: "ethereum",
		},
	},
	blockExplorers: {
		default: {
			name: "Blockscout",
			url: "https://blockscout.lisk.com",
			apiUrl: "https://blockscout.lisk.com/api/v2",
		},
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 577168,
		poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
		permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
		multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
		tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF",
		nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
		positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
		positionsNFTDeployBlock: 578398,
		universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",

		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
	},
	oku: {
		limitOrderRegistry: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
		limitOrderRegistryDeployBlock: 579872,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0xd501d4e381491f64274cc65fdec32b47264a2422",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0xac485391eb2d7d88253a7f1ef18c37f4242d1a24",
	tokenList: [
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDT", address: "0x05D032ac25d322df992303dCa074EE7392C117b9" },
		{ symbol: "LSK", address: "0xac485391eb2d7d88253a7f1ef18c37f4242d1a24" },
	],
	stables: ["0x05D032ac25d322df992303dCa074EE7392C117b9"],
	watchlist: [
		"0x3a670179bdece7eb4f570e30ee9d560f7ff4fac3",
		"0xd501d4e381491f64274cc65fdec32b47264a2422",
		"0x304d69c5e03e030d6b298C0d0467baeb310f1f68",
	],
	internalName: "lisk",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
		},
		nftManager: {
			address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		multicall2: {
			address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		},
		multicall3: {
			address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		},
	},
});
