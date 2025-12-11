import { lens as chain } from "viem/chains";
import { makeConfig } from "../util";

export const lens = makeConfig({
	...chain,
	name: "Lens",
	blockTimeSeconds: 2,
	launchTime: 1746050531,
	transactionType: "eip1559",
	sortIndex: 15,
	blockAid: "",
	logoUrl: "https://cms.oku.trade/cdn/public/chains/lens-logo.png",
	deprecated: false,
	safeReorgDistance: 90000,
	externalId: {
		tenderly: "true",
		cowswap: "lens",
	},
	markets: {
		cowswap: "lens",
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "lens-mainnet",
			routerAddress: "0x498F3feBAd3ff75e05b7847B37a301fc2DA6fDC0",
			chainSelector: 5608378062013572713n,
			tokenAdminRegistry: "0xdD98482Ec0cfEFfe14EAb750A9c484F9D5d07380",
		},
	},
	oracles: {},
	morpho: {},
	initCodeHash:
		"0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed",
	uniswap: {
		deployBlock: 184120,
		poolFactory: "0xe0704DB90bcAA1eAFc00E958FF815Ab7aa11Ef47",
		permit2: "0x0000000000225e31d15943971f47ad3022f714fa",
		multicall2: "0x5900c97b683e69CD752aF7DC7003d69315E2a288",
		tickLens: "0x5499510c2e95F59b1Df0eC7C1bd2Fa76347df5Be",
		nonfungiblePositionManager: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031",
		positionsNFT: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031",
		positionsNFTDeployBlock: 184128,
		universalRouter: "0xAA904d497e42608C014BE83a026E984aFc16129b",

		wrappedNativeAddress: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
		wrappedNativeSymbol: "WGHO",
		wrappedNativeName: "Wrapped GHO",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "GHO",
	},
	token: {
		wethAddress: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
		usdcAddress: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884",
	},
	oku: {
		limitOrderRegistry: "0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF",
		limitOrderRegistryDeployBlock: 852140,
		pricing: {
			nativeWrappedToken: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
			nativeWrappedName: "GHO",
		},
	},
	defaultPool: "0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de",
	defaultToken0: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
	defaultToken1: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884",
	tokenList: [
		{ symbol: "WGHO", address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F" },
		{ symbol: "USDC", address: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884" },
		{ symbol: "WETH", address: "0xE5ecd226b3032910CEaa43ba92EE8232f8237553" },
	],
	stables: ["0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884"],
	watchlist: [
		"0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de",
		"0xdf4b8153bf91f54802a9ba16366b2111724384e4",
		"0x6b6eb6f437bf54d22b997c3b38b79a23bc63f39f",
	],
	internalName: "lens",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/gho.png",
	contracts: {
		limitOrder: {
			address: "0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF",
		},
		nftManager: {
			address: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031",
		},
		weth9: {
			address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
		},
		multicall2: {
			address: "0x5900c97b683e69CD752aF7DC7003d69315E2a288",
		},
		multicall3: {
			address: "0x6b6dEa4D80e3077D076733A04c48F63c3BA49320",
		},
		metrom: {
			address: "0x5319C3Fc78ac3e10Ca733A5839D65F8493A8D60A",
			blockCreated: 2507884,
		},
	},
});
