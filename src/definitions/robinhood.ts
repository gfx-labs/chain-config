import { zeroAddress } from "viem";
import { robinhood as chain } from "viem/chains";
import { makeConfig } from "../util";

export const robinhood = makeConfig({
	...chain,
	name: "Robinhood",
	blockTimeSeconds: 0.1,
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
		enso: ["0xCfBAa9Cfce952Ca4F4069874fF1Df8c05e37a3c7"],
		fabric: ["0x3A7f029E3ad003AB5Aa78ccf101b1B543eaed6F9"],
		fynd: [
			"0x345e48768a65Ae596ac6A2Aee71202753C4866F5",
			"0x09215a470bD585E59EB3F4B612fBD2678131fF9e",
		],
		icecreamswap: ["0x603206D6105217DD972E4Ab30676A220CA393346"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		native: ["0xa5ec1f0aC784C3620fFDcdf2A7DbcEF9DA658ea4"],
		okx: [
			"0xE58b3089dF6667fBf99b75595a1671BaF6797D6d",
			"0x6e2A35A7AD683cF634D91492d73bb7FF774c6919",
			"0x42170295F1173c9e5874ea9d00c6d137E1a4f53d",
		],
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
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
	launchpad: {
		name: "pons",
		decoder: "pons-v2",
		factory: "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e",
		router: "0xe33e9e479df8802cb0866d5d05258bec4cf62948",
		deployBlock: 26841846,
	},
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
