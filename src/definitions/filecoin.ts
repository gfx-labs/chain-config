import { filecoin as chain } from "viem/chains";
import { makeConfig } from "../util";

export const filecoin = makeConfig({
	...chain,
	sortIndex: 23,
	launchTime: 1677600000,
	transactionType: "legacy",
	name: "Filecoin",
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	blockTimeSeconds: 30,
	safeReorgDistance: 90000,
	blockAid: "",
	morpho: {},
	blockExplorers: {
		default: {
			name: "Blockscout",
			url: "https://filecoin.blockscout.com",
			apiUrl: "https://filecoin.blockscout.com/api",
		},
		filfox: {
			name: "Filfox",
			url: "https://filfox.info/en",
			apiUrl: "https://filfox.info/api",
		},
		filutils: {
			name: "Filutils",
			url: "https://www.filutils.com/en",
			apiUrl: "https://api.filutils.com/api",
		},
	},
	logoUrl: "https://cms.oku.trade/cdn/public/chains/filecoin-logo.svg",
	deprecated: false,

	estimatedSwapGas: 500_000,
	estimatedBridgeGas: 300_000,
	estimatedWrapGas: 100_000,
	externalId: {
		coingecko: "filecoin",
	},
	markets: {},
	marketRouters: {
		uniswap: [
			"0x83702C6356A1028A900F83d446D189a31646a16b",
			"0xcAb04058e60020d65D18D4B3DFF2cA1445D7099f",
		],
	},
	bridges: {},
	oracles: {
		coingecko: {
			slug: "filecoin",
			native: "filecoin",
		},
		dexscreener: "filecoin",
	},
	uniswap: {
		deployBlock: 3195837,
		poolFactory: "0xB4C47eD546Fc31E26470a186eC2C5F19eF09BA41",
		permit2: "0xb81363578d377F8DA3902e9e705FD60198a9cEc2",
		multicall2: "0x732f5baac411e427d130fed03c2e82a3e0d64d35",
		tickLens: "0x76c001ad9E527FEfA8Fa822a987Ad44ce720BAeD",
		nonfungiblePositionManager: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
		positionsNFT: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
		positionsNFTDeployBlock: 3195861,
		universalRouter: "0x83702C6356A1028A900F83d446D189a31646a16b",

		wrappedNativeAddress: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
		wrappedNativeSymbol: "WFIL",
		wrappedNativeName: "Wrapped FIL",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "FIL",
	},
	token: {
		usdcAddress: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
		wbtcAddress: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad",
		wethAddress: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D",
	},
	oku: {
		router: "0x4Ae4041BFa135413A845b803226943198a2F1BeE",
		pricing: {
			pools: [],
			nativeWrappedToken: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
			nativeWrappedName: "WFIL",
			nativeQuotePools: undefined,
		},
		limitOrderRegistry: "0xded8791056aa39581460a005a3c400a281e24bd7",
		limitOrderRegistryDeployBlock: 3413267,
	},
	defaultPool: "0x74eb355808481587a1fa7101c210592e8d591e34",
	defaultToken0: "0x2421db204968a367cc2c866cd057fa754cb84edf",
	defaultToken1: "0x60e1773636cf5e4a227d9ac24f20feca034ee25a",
	tokenList: [
		{
			symbol: "WFIL",
			address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
		},
		{
			symbol: "celerUSDC",
			address: "0x2421db204968a367cc2c866cd057fa754cb84edf",
		},
		{
			symbol: "axlWETH",
			address: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D",
		},
		{
			symbol: "axlWBTC",
			address: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad",
		},
		{
			symbol: "axlUSDC",
			address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
		},
		{
			symbol: "axlUSDT",
			address: "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6",
		},
	],
	stables: [
		"0x2421db204968A367CC2C866CD057fA754Cb84EdF",
		"0xEB466342C4d449BC9f53A865D5Cb90586f405215",
		"0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6",
		"0x422849b355039bc58f2780cc4854919fc9cfaf94",
	],
	watchlist: [
		"0x74eb355808481587a1fa7101c210592e8d591e34",
		"0x9d8ea62e1264ab667d234b5610774a08e608e3b8",
		"0x443a6243a36ef0ae1c46523d563c15abd787f4e9",
		"0xca166403c6f41e1fecc0eb40ac1947fd6399d5c5",
	],
	v4Watchlist: [],
	internalName: "filecoin",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/fil.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0xded8791056aa39581460a005a3c400a281e24bd7",
		},
		nftManager: {
			address: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
		},
		weth9: {
			address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
		},
		multicall2: {
			address: "0x732f5baac411e427d130fed03c2e82a3e0d64d35",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
