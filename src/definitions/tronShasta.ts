import { tronShasta as chain } from "viem/chains";

import { makeConfig } from "../util";
import { zeroAddress } from "../util/constants";

export const tronShasta = makeConfig({
	...chain,
	name: "Tron Shasta",
	blockTimeSeconds: 5,
	launchTime: 1746055290,
	transactionType: "eip1559",
	sortIndex: 49,
	blockAid: "",
	logoUrl: "https://cms.oku.trade/cdn/public/chains/tron-shasta-logo.svg",
	deprecated: true,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	externalId: {},
	markets: {},
	bridges: {},
	oracles: {},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 52878027,
		poolFactory: "0x3cF78A14f90203919B8b4D690e6540745ed8074A",
		permit2: zeroAddress,
		multicall2: "0x8c289c0a8aDa24fc0f27fCBB1200370A52a6675e",
		tickLens: "0xc857346cD83Be79B78F1b10d5fcf158edc844796",
		nonfungiblePositionManager: "0x358B41818d60Cbf40c11fb728c8Bc865726F423D",
		positionsNFT: "0x358B41818d60Cbf40c11fb728c8Bc865726F423D",
		positionsNFTDeployBlock: 52878030,
		universalRouter: zeroAddress,

		wrappedNativeAddress: zeroAddress,
		wrappedNativeSymbol: "WTRX",
		wrappedNativeName: "Wrapped TRX",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "TRX",
	},
	token: {},
	oku: {
		pricing: {
			nativeWrappedToken: zeroAddress,
		},
	},
	defaultPool: zeroAddress,
	defaultToken0: zeroAddress,
	defaultToken1: zeroAddress,
	tokenList: [],
	stables: [],
	watchlist: [],
	v4Watchlist: [],
	internalName: "tronshasta",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/tron.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0x358B41818d60Cbf40c11fb728c8Bc865726F423D",
		},
		multicall2: {
			address: "0x8c289c0a8aDa24fc0f27fCBB1200370A52a6675e",
		},
		multicall3: {
			address: zeroAddress,
		},
	},
});
