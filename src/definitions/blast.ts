import { blast as chain } from "viem/chains";
import { makeConfig } from "../util";

export const blast = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 1719410400,
	sortIndex: 14,
	logoUrl: "https://assets.oku.trade/chains/blast-logo.svg",
	safeReorgDistance: 90000,
	blockAid: "blast",
	externalId: {
		zerion: "blast",
		tenderly: "true",
	},
	morpho: {},
	markets: {
		kyberswap: "blast",
		openocean: "blast",
		zeroex: true,
		icecreamswap: true,
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "ethereum-mainnet-blast",
			routerAddress: "0x12e0B8E349C6fb7E6E40713E8125C3cF1127ea8C",
			chainSelector: 4411394078118774322n,
			tokenAdminRegistry: "0x846Fccd01D4115FD1E81267495773aeB33bF1dC7",
		},
		rhinofi: "BLAST",
		wormhole: {
			chain: "Blast",
			timeToFinalize: 1800,
		},
	},
	oracles: {
		cmc: {
			slug: "blast",
			native: "ethereum",
		},
		coingecko: {
			slug: "blast",
			native: "ethereum",
		},
		dexscreener: "blast",
	},
	uniswap: {
		deployBlock: 400903,
		poolFactory: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd",
		multicall2: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833",
		tickLens: "0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274",
		nonfungiblePositionManager: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
		positionsNFT: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
		positionsNFTDeployBlock: 400947,
		universalRouter: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4",

		wrappedNativeAddress: "0x4300000000000000000000000000000000000004",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		usdcAddress: "0x4300000000000000000000000000000000000003",
		wethAddress: "0x4300000000000000000000000000000000000004",
	},
	oku: {
		limitOrderRegistry: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F",
		limitOrderRegistryDeployBlock: 402083,
		pricing: {
			nativeWrappedToken: "0x4300000000000000000000000000000000000004",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F",
	defaultToken0: "0x4300000000000000000000000000000000000003",
	defaultToken1: "0x4300000000000000000000000000000000000004",
	tokenList: [
		{ symbol: "WETH", address: "0x4300000000000000000000000000000000000004" },
		{ symbol: "USDB", address: "0x4300000000000000000000000000000000000003" },
	],
	stables: ["0x4300000000000000000000000000000000000003"],
	watchlist: [
		"0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F",
		"0xf52b4b69123cbcf07798ae8265642793b2e8990c",
		"0xf52b4b69123cbcf07798ae8265642793b2e8990c",
		"0x310a0a4bc2edd2f29321356d880e0906d7700c14",
		"0xbb60bb410182d8e96c41dfc92e017dd79f5100bf",
		"0xf52df2cde73228cc058abfe88f3801dcddf885eb",
		"0x99f8a29a332eb9004f83abb1b4690de8b00dfccf",
	],
	internalName: "blast",
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F",
		},
		nftManager: {
			address: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
		},
		weth9: {
			address: "0x4300000000000000000000000000000000000004",
		},
		multicall2: {
			address: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833",
		},
	},
});
