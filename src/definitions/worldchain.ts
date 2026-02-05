import { zeroAddress } from "viem";
import { worldchain as chain } from "viem/chains";
import { makeConfig } from "../util";

export const worldchain = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 0,
	transactionType: "eip1559",
	sortIndex: 28,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/worldchain-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	liteChain: true,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
		coingecko: "world-chain",
	},
	markets: {
		zeroex: true,
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "ethereum-mainnet-worldchain-1",
			routerAddress: "0x5fd9E4986187c56826A3064954Cfa2Cf250cfA0f",
			chainSelector: 2049429975587534727n,
			tokenAdminRegistry: "0x02Fe6ab4fb0943F58D9D925d1d2cbA9474997Ed0",
		},
		wormhole: {
			chain: "World Chain",
			timeToFinalize: 1080,
		},
	},
	oracles: {},
	morpho: {
		deployBlock: 9025669,
		morpho: "0xE741BC7c34758b4caE05062794E8Ae24978AF432",
		publicAllocator: "0xef9889B4e443DEd35FA0Bd060f2104Cca94e6A43",
		mmFactory11: "0xae5b0884bfff430493D6C844B9fd052Af7d79278",
		bundler3: "0x3D07BF2FFb23248034bF704F3a4786F1ffE2a448",
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 1603366,
		poolFactory: "0x7a5028BDa40e7B173C278C5342087826455ea25a",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9",
		tickLens: "0xE61df0CaC9d85876aCE5E3037005D80943570623",
		nonfungiblePositionManager: "0xec12a9F9a09f50550686363766Cc153D03c27b5e",
		positionsNFT: "0xec12a9F9a09f50550686363766Cc153D03c27b5e",
		positionsNFTDeployBlock: 1603405,
		universalRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",

		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
		usdcAddress: "0x79a02482a880bce3f13e09da970dc34db4cd24d1",
		wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3",
	},
	oku: {
		router: "0x822CFA9749d16Fb4B4F2B0515924cec69512893b",
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x610E319b3A3Ab56A0eD5562927D37c233774ba39",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0x79a02482a880bce3f13e09da970dc34db4cd24d1",
	tokenList: [
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDC", address: "0x79a02482a880bce3f13e09da970dc34db4cd24d1" },
		{ symbol: "WBTC", address: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3" },
	],
	stables: ["0x79a02482a880bce3f13e09da970dc34db4cd24d1"],
	watchlist: [],
	internalName: "worldchain",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0xec12a9F9a09f50550686363766Cc153D03c27b5e",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		multicall2: {
			address: "0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
