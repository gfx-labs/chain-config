import { zeroAddress } from "viem";
import { tronShasta as chain } from "viem/chains";
import { makeConfig } from "../util";

export const tronShasta = makeConfig({
	...chain,
	name: "Tron Shasta",
	blockTimeSeconds: 5,
	launchTime: 1746055290,
	transactionType: "eip1559",
	sortIndex: 45,
	blockAid: "",
	logoUrl: "https://cms.oku.trade/cdn/public/chains/tron.png",
	deprecated: true,
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
		poolFactory: "0x3CF78A14F90203919B8B4D690E6540745ED8074A",
		permit2: zeroAddress,
		multicall2: "0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E",
		tickLens: "0xC857346CD83BE79B78F1B10D5FCF158EDC844796",
		nonfungiblePositionManager: "0x358B41818D60CBF40C11FB728C8BC865726F423D",
		positionsNFT: "0x358B41818D60CBF40C11FB728C8BC865726F423D",
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
	internalName: "tronshasta",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/tron.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0x358B41818D60CBF40C11FB728C8BC865726F423D",
		},
		multicall2: {
			address: "0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E",
		},
		multicall3: {
			address: zeroAddress,
		},
	},
});
