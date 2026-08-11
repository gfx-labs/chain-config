import { zeroAddress } from "viem";
import { robinhood as chain } from "viem/chains";
import { makeConfig } from "../util";

export const robinhood = makeConfig({
	...chain,
	name: "Robinhood",
	blockTimeSeconds: 2,
	launchTime: 1784047160,
	transactionType: "eip1559",
	sortIndex: 6,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/robinhood-logo.svg",
	deprecated: false,
	liteChain: true,
	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90_000,
	blockAid: "",
	externalId: {},
	markets: {
		openocean: "robinhood",
	},
	marketRouters: {
		icecreamswap: ["0x603206D6105217DD972E4Ab30676A220CA393346"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		native: ["0xa5ec1f0aC784C3620fFDcdf2A7DbcEF9DA658ea4"],
		okx: ["0xE58b3089dF6667fBf99b75595a1671BaF6797D6d"],
		uniswap: [
			"0x8876789976dEcBfCbBbe364623C63652db8C0904",
			"0xCaf681a66D020601342297493863E78C959E5cb2",
		],
		zeroex: [
			"0x0000000000001fF3684f28c67538d4D072C22734",
			"0xe72688F7d25D7318B9A81F21EdDa640CA948c83B",
		],
	},
	bridges: {},
	oracles: {},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 8930,
		poolFactory: "0x1f7d7550B1b028f7571E69A784071F0205FD2EfA",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0x282A3C4D320Cc7f0d5eaf56B8029e4B88338f0a3",
		tickLens: "0x7DfD4F31be6814D2906BDE155c3e1B146EAc1468",
		quoter: "0x33e885eD0Ec9bF04EcfB19341582aADCb4c8A9E7",
		swapRouter02: "0xCaf681a66D020601342297493863E78C959E5cb2",
		nonfungiblePositionManager: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3",
		positionsNFT: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3",
		positionsNFTDeployBlock: 9069,
		universalRouter: "0x8876789976dEcBfCbBbe364623C63652db8C0904",
		wrappedNativeAddress: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
	},
	oku: {
		router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed",
		pricing: {
			nativeWrappedToken: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x69BfaF19C9f377BB306a89aEd9F6B07e2c1a8d9a",
	defaultToken0: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
	defaultToken1: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
	tokenList: [
		{ symbol: "WETH", address: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73" },
		{ symbol: "USDG", address: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168" },
		{ symbol: "USDe", address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34" },
	],
	stables: [
		"0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
		"0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
	],
	watchlist: [],
	v4Watchlist: [],
	internalName: "robinhood",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3",
		},
		weth9: {
			address: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
		},
	},
});
