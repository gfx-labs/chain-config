import { linea as chain } from "viem/chains";
import { makeConfig } from "../util";

export const linea = makeConfig({
	...chain,
	name: "Linea",
	launchTime: 1713362400,
	transactionType: "eip1559",
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	blockTimeSeconds: 2,
	sortIndex: 21,
	morpho: {},
	logoUrl: "https://cms.oku.trade/cdn/public/chains/linea-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 100,
	blockAid: "linea",
	externalId: {
		zerion: "linea",
		tenderly: "true",
		coingecko: "linea",
	},
	markets: {
		kyberswap: "linea",
		openocean: "linea",
		zeroex: true,
		icecreamswap: true,
		oneinch: {
			spender: "0x111111125421ca6dc452d289314280a0f8842a65",
		},
	},
	marketRouters: {
		binance: ["0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5"],
		enso: ["0xA146d46823f3F594B785200102Be5385CAfCE9B5"],
		icecreamswap: ["0x2fF506ed9729580EF8Bf04429614beB1baE5F76D"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		odos: ["0x2d8879046f1559E53eb052E949e9544bCB72f414"],
		okx: [
			"0x2E1Dee213BA8d7af0934C49a23187BabEACa8764",
			"0x57df6092665eb6058DE53939612413ff4B09114E",
		],
		oneinch: ["0x111111125421ca6dc452d289314280a0f8842a65"],
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
		uniswap: [
			"0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
			"0x8B844f885672f333Bc0042cB669255f93a4C1E6b",
			"0xD7c7D7F18dD5388D5217c9696C7e799fCd75c6bD",
		],
		zeroex: [
			"0x0000000000001fF3684f28c67538d4D072C22734",
			"0x1816eA2150e74Eb3068A4e3809E461Cc6977A7D7",
		],
	},
	bridges: {
		cctp: {
			domain: 11,
			messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64",
		},
		chainlink: {
			atlasNetworkName: "ethereum-mainnet-linea-1",
			routerAddress: "0x549FEB73F2348F6cD99b9fc8c69252034897f06C",
			chainSelector: 4627098889531055414n,
			tokenAdminRegistry: "0xBc933cEE67d2b1c08490ee8C51E2dF653a713534",
		},
		rhinofi: "LINEA",
		stargate: {
			endpointID: 30183,
			blockConfirmations: 20,
			tokens: [
				{
					name: "ETH",
					type: "POOL",
					id: 13,
					address: "0x81F6138153d473E8c5EcebD3DC8Cd4903506B075",
				},
			],
		},
		wormhole: {
			chain: "Linea",
			timeToFinalize: 1800,
		},
		layerzero: {
			eid: 30183,
			tokens: [
				{
					id: 4,
					symbol: "WETH",
					project: "stargate",
					OFTAddress: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
				},
			],
		},
	},
	oracles: {
		cmc: {
			slug: "linea",
			native: "ethereum",
		},
		coingecko: {
			slug: "linea",
			native: "ethereum",
		},
		dexscreener: "linea",
	},
	uniswap: {
		deployBlock: 25248,
		poolFactory: "0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9",
		multicall2: "0x93e253D101519578A8DF0BCe2A43D8292BFb3A1F",
		tickLens: "0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9",
		nonfungiblePositionManager: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
		positionsNFT: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
		positionsNFTDeployBlock: 25264,
		universalRouter: "0x8B844f885672f333Bc0042cB669255f93a4C1E6b",

		wrappedNativeAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		usdcAddress: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
		wethAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
		wbtcAddress: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
	},
	oku: {
		router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed",
		limitOrderRegistry: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74",
		limitOrderRegistryDeployBlock: 3610379,
		pricing: {
			nativeWrappedToken: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0xc48622190a6b91d64ee7459c62fade9abe61b48a",
	defaultToken0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
	defaultToken1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
	tokenList: [
		{ symbol: "WETH", address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f" },
		{ symbol: "USDC", address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff" },
	],
	stables: [
		"0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
		"0xa219439258ca9da29e9cc4ce5596924745e12b93",
		"0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5",
	],
	watchlist: [
		"0xc48622190a6b91d64ee7459c62fade9abe61b48a",
		"0x5856edf9212bdcec74301ec78afc573b62d6a283",
		"0xf8296e87192aa71158bd9ba323fc2e1d9a047aa2",
		"0x93f626d0e471279bd8d1420959cc881bdacfdab1",
		"0xfe64636280a98d21701a607e6a52ed5d62bacfe4",
		"0xf2d33caaedc4daab2c1f0bfc7cccb03a9acf3e4e",
		"0xe848d169080a0022039fcaefc19263c410fe3520",
		"0x30b44df5010f8b2a4d4e566a2ba638496e76a8fc",
		"0x42a72c7fbb355b2cfe08f8716595f3f3509b3bea",
	],
	v4Watchlist: [],
	internalName: "linea",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74",
		},
		nftManager: {
			address: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
		},
		weth9: {
			address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
		},
		multicall2: {
			address: "0x9A27B81b034e585be9d366DEB7aBAD036BE50845",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
