import { zeroAddress } from "viem";
import { monad as chain } from "viem/chains";
import { makeConfig } from "../util";

export const monad = makeConfig({
	...chain,
	blockTimeSeconds: 0.4,
	launchTime: 1764568406,
	transactionType: "eip1559",
	sortIndex: 4,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/monad-logo.png",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
		coingecko: "monad",
	},
	markets: {
		openocean: "monad",
	},
	marketRouters: {
		binance: ["0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5"],
		enso: ["0xCfBAa9Cfce952Ca4F4069874fF1Df8c05e37a3c7"],
		icecreamswap: ["0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		native: ["0x332e56e0b91eC3F08553eC7964E19CC041A38672"],
		okx: [
			"0x7A7AD9aa93cd0A2D0255326E5Fb145CEc14997FF",
			"0xc1C76E784Db8D68585fb608ce68FC5DcFF14000E",
			"0xf534A8a1CAD0543Cd6438f7534CA3486c01998d4",
		],
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
		uniswap: [
			"0x75FC67473A91335B5b8F8821277262a13B38c9b3",
			"0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7",
			"0xfE31F71C1b106EAc32F1A19239c9a9A72ddfb900",
		],
		zeroex: [
			"0x0000000000001fF3684f28c67538d4D072C22734",
			"0xfb78Fcae443eB423b59B8C186518c5dF94416344",
		],
	},
	bridges: {
		cctp: {
			domain: 15,
			messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64",
		},
		chainlink: {
			atlasNetworkName: "monad-mainnet",
			routerAddress: "0x33566fE5976AAa420F3d5C64996641Fc3858CaDB",
			chainSelector: 8481857512324358265n,
			tokenAdminRegistry: "0x11ACd984DD680363117B310f6ebdf78fD6c0195f",
		},
		wormhole: {
			chain: "Monad",
			timeToFinalize: 2,
		},
	},
	oracles: {
		cmc: {
			slug: "monad",
			native: "monad",
		},
		coingecko: {
			slug: "monad",
			native: "monad",
		},
		dexscreener: "monad",
	},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 29255827,
		poolFactory: "0x204FAca1764B154221e35c0d20aBb3c525710498",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0xd1b797d92d87b688193a2b976efc8d577d204343",
		tickLens: "0xF025e0Fe9E331A0eF05c2ad3C4E9C64b625cda6f",
		nonfungiblePositionManager: "0x7197E214c0b767cFB76Fb734ab638E2c192F4E53",
		positionsNFT: "0x7197E214c0b767cFB76Fb734ab638E2c192F4E53",
		positionsNFTDeployBlock: 29255879,
		universalRouter: "0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7",

		wrappedNativeAddress: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A",
		wrappedNativeSymbol: "WMON",
		wrappedNativeName: "Wrapped MON",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "MON",
	},
	token: {
		usdcAddress: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603",
		wbtcAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
		wethAddress: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A",
	},
	oku: {
		router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed",
		limitOrderRegistry: zeroAddress,
		limitOrderRegistryDeployBlock: 0,
		pricing: {
			nativeWrappedToken: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A",
			nativeWrappedName: "MON",
		},
	},
	defaultPool: "0x659bD0BC4167BA25c62E05656F78043E7eD4a9da",
	defaultToken0: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A",
	defaultToken1: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603",
	tokenList: [
		{ symbol: "WMON", address: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A" },
		{ symbol: "USDC", address: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603" },
		{ symbol: "USDT0", address: "0xe7cd86e13AC4309349F30B3435a9d337750fC82D" },
	],
	stables: [
		"0x754704Bc059F8C67012fEd69BC8A327a5aafb603",
		"0xe7cd86e13AC4309349F30B3435a9d337750fC82D",
		"0x00000000efe302beaa2b3e6e1b18d08d69a9012a",
	],
	watchlist: [
		"0x659bD0BC4167BA25c62E05656F78043E7eD4a9da",
		"0xa00D8Ec3c0cC20E93Cad749695392a0B61fe8Ca3",
	],
	v4Watchlist: [],
	internalName: "monad",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/monad.png",
	contracts: {
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0x7197E214c0b767cFB76Fb734ab638E2c192F4E53",
		},
		weth9: {
			address: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A",
		},
		multicall2: {
			address: "0xd1b797d92d87b688193a2b976efc8d577d204343",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
