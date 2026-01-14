import { moonbeam as chain } from "viem/chains";
import { makeConfig } from "../util";

export const moonbeam = makeConfig({
	...chain,
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	sortIndex: 38,
	launchTime: 1696341600,
	transactionType: "eip1559",
	blockTimeSeconds: 30,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/moonbeam-logo.svg",
	deprecated: true,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		debank: "mobm",
		tenderly: "true",
	},
	morpho: {},
	markets: {
		icecreamswap: true,
	},
	bridges: {
		wanbridge: {
			requiredConfirmations: 30,
		},
		wormhole: {
			chain: "Moonbeam",
			timeToFinalize: 24,
		},
		layerzero: {
			eid: 30126,
			tokens: [
				{
					id: 4,
					symbol: "WETH",
					project: "stargate",
					OFTAddress: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
				},
			],
		},
	},
	oracles: {
		cmc: {
			slug: "moonbeam",
			native: "moonbeam",
		},
		coingecko: {
			slug: "moonbeam",
			native: "moonbeam",
		},
		dexscreener: "moonbeam",
	},
	uniswap: {
		deployBlock: 3340452,
		poolFactory: "0x28f1158795A3585CaAA3cD6469CD65382b89BB70",
		permit2: "0xe96e30e92e01dc8a880f701b2d2160f93da18df7",
		multicall2: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2",
		tickLens: "0x1f4F7b041895D9eB1A79be0896AF3E68e4160010",
		quoter: "0x48af91cdcad8ffdd7a8d4cdf73c16cb0632d3d17",
		swapRouter02: "0xc507e22ba3140dc0a79fdf27e03c98aa20f3ee66",
		NFTDescriptor: "0x041b81cb4d223d8e70ac96c0d103f8a956ed4514",
		nonfungibleTokenPositionDescriptor:
			"0x921c55AE486e63D16dbfbE216573A21aeB684c02",
		transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
		nonfungiblePositionManager: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71",
		v3Migrator: "0x76776b10d782a1d194fbfc92d4b01db1ce1eeb4b",
		positionsNFT: "0x9036D0DcB5a059C9371B05D508f0072Df773854e",
		positionsNFTDeployBlock: 3340476,
		universalRouter: "0x1F56F4e1648e96633c7FE79002036E967403CDfF",

		wrappedNativeAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
		wrappedNativeSymbol: "WGLMR",
		wrappedNativeName: "Wrapped GLMR",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "GLMR",
	},
	token: {
		wethAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
		usdcAddress: "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
	},
	oku: {
		pricing: {
			nativeWrappedToken: "0xacc15dc74880c9944775448304b263d191c6077f",
			nativeWrappedName: "WGLMR",
		},
	},
	defaultPool: "0xba66370d96a9d61afa66283900b78c1f6ed02782",
	defaultToken0: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
	defaultToken1: "0xacc15dc74880c9944775448304b263d191c6077f",
	tokenList: [
		{ symbol: "WETH", address: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed" },
		{ symbol: "USDC", address: "0x931715fee2d06333043d11f658c8ce934ac61d0c" },
	],
	stables: [
		"0xffffffff7d2b0b761af01ca8e25242976ac0ad7d",
		"0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b",
		"0x931715FEE2d06333043d11F658C8CE934aC61D0c",
		"0x765277eebeca2e31912c9946eae1021199b39c61",
		"0x06e605775296e851ff43b4daa541bb0984e9d6fd",
		"0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
		"0x8e70cd5b4ff3f62659049e74b6649c6603a0e594",
	],
	watchlist: [
		"0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29",
		"0xba66370d96a9d61afa66283900b78c1f6ed02782",
		"0x19156c03a6fd894beb4fa6a828e854d3a4bed372",
		"0xCb1f81BEf053d3C8adfFd37D2da84Fcc3BcC9954",
		"0x53c1341cd81562c1b1a7562fff712CD7be95D51e",
		"0x45bD0680bDFd180341A6dE806Aa4637f9AfBFc39",
	],
	internalName: "moonbeam",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/glmr.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
		},
		nftManager: {
			address: "0x9036d0dcb5a059c9371b05d508f0072df773854e",
		},
		weth9: {
			address: "0xacc15dc74880c9944775448304b263d191c6077f",
		},
		multicall2: {
			address: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
