import { zeroAddress } from "viem";
import { monad as chain } from "viem/chains";
import { makeConfig } from "../util";

export const monad = makeConfig({
	...chain,
	blockTimeSeconds: 0.4,
	launchTime: 1764568406,
	transactionType: "eip1559",
	sortIndex: 5,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/monad-logo.png",
	deprecated: false,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
	},
	markets: {
		openocean: "monad",
	},
	bridges: {
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
		universalRouter: "0x0D97Dc33264bfC1c226207428A79b26757fb9dc3",

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
	internalName: "monad",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/monad.png",
	contracts: {
		...chain.contracts,
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
