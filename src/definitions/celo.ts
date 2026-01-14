import { celo as chain } from "viem/chains";
import { makeConfig } from "../util";

export const celo = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 1737754469,
	transactionType: "eip1559",
	sortIndex: 10,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/celo-logo.svg",
	deprecated: false,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {},
	markets: {
		icecreamswap: true,
		openocean: "celo",
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "celo-mainnet",
			routerAddress: "0xfB48f15480926A4ADf9116Dca468bDd2EE6C5F62",
			chainSelector: 1346049177634351622n,
			tokenAdminRegistry: "0xf19e0555fAA9051e277eeD5A0DcdB13CDaca39a9",
		},
		wormhole: {
			chain: "Celo",
			timeToFinalize: 10,
		},
		layerzero: {
			eid: 30125,
			tokens: [
				{
					id: 4,
					symbol: "WETH",
					project: "stargate",
					OFTAddress: "0x122013fd7dF1C6F636a5bb8f03108E876548b455",
				},
			],
		},
	},
	morpho: {},
	oracles: {
		coingecko: {
			slug: "celo",
			native: "ethereum",
		},
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 5188280,
		poolFactory: "0xAfE208a311B21f13EF87E33A90049fC17A7acDEc",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0x633987602DE5C4F337e3DbF265303A1080324204",
		tickLens: "0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D",
		nonfungiblePositionManager: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
		positionsNFT: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
		positionsNFTDeployBlock: 13916373,
		universalRouter: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4",

		nativeCurrencyName: "CELO",
	},
	token: {
		wbtcAddress: "0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b",
		nativeAddress: "0x471EcE3750Da237f93B8E339c536989b8978a438",
	},
	oku: {
		limitOrderRegistry: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		limitOrderRegistryDeployBlock: 29842546,
		pricing: {
			nativeToken: "0x471EcE3750Da237f93B8E339c536989b8978a438",
		},
	},
	defaultPool: "0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE",
	defaultToken0: "0x471EcE3750Da237f93B8E339c536989b8978a438",
	defaultToken1: "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207",
	tokenList: [
		{ symbol: "CELO", address: "0x471EcE3750Da237f93B8E339c536989b8978a438" },
		{ symbol: "WETH", address: "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207" },
		{ symbol: "USDC", address: "0xceba9300f2b948710d2653dd7b07f33a8b32118c" },
		{ symbol: "USDT", address: "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e" },
		{ symbol: "CUSD", address: "0x765de816845861e75a25fca122bb6898b8b1282a" },
	],
	stables: [
		"0xceba9300f2b948710d2653dd7b07f33a8b32118c",
		"0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
		"0x765de816845861e75a25fca122bb6898b8b1282a",
		"0x37f750b7cc259a2f741af45294f6a16572cf5cad",
		"0xeb466342c4d449bc9f53a865d5cb90586f405215",
		"0x617f3112bf5397d0467d315cc709ef968d9ba546",
	],
	watchlist: [
		"0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE",
		"0xE426E1305f5e6093864762Bf9d2D8B44BC211c59",
		"0x5dC631aD6C26BEA1a59fBF2C2680CF3df43d249f",
		"0x34757893070B0FC5de37AaF2844255fF90F7F1E0",
		"0x1a810e0B6c2dd5629AFa2f0c898b9512C6F78846",
		"0x7766BDC5ff15d3aCeB4D37914963aeBAcCF3de15",
		"0x628Cb3a5a206956423D158009612813B64B19dab",
		"0x1c8DafD358d308b880F71eDB5170B010b106Ca60",
		"0xA1777e082fA1746eB78DD9C1fbB515419CF6e538",
		"0xd80D28850bEBE6208433c298334392bC940B4fc7",
		"0xf130F72F8190f662522774C3367E6e8814f5e219",
		"0x7B9A5BC920610F54881f2F6359007957DE504862",
	],
	internalName: "celo",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/celo.png",
	contracts: {
		...chain.contracts,
		nftManager: {
			address: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
		},
		limitOrder: {
			address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		},
		multicall2: {
			address: "0x633987602DE5C4F337e3DbF265303A1080324204",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
