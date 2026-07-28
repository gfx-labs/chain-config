import { unichain as chain } from "viem/chains";
import { makeConfig } from "../util";

export const unichain = makeConfig({
	...chain,
	name: "Unichain",
	blockTimeSeconds: 1,
	launchTime: 1750384728,
	transactionType: "eip1559",
	sortIndex: 18,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/unichain-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "unichain",
	externalId: {
		tenderly: "true",
		coingecko: "unichain",
	},
	markets: {
		icecreamswap: true,
		zeroex: true,
		kyberswap: "unichain",
		openocean: "uni",
		paraswap: {
			routerContract: "0x6A000F20005980200259B80c5102003040001068",
		},
		oneinch: {
			spender: "0x111111125421ca6dc452d289314280a0f8842a65",
		},
	},
	marketRouters: {
		enso: ["0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"],
		icecreamswap: ["0x3FFc2315A992b01dc4B3f79C8EEa1921091Ee24f"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		odos: ["0x6409722F3a1C4486A3b1FE566cBDd5e9D946A1f3"],
		okx: ["0x6733Eb2E75B1625F1Fe5f18aD2cB2BaBDA510d19"],
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
		paraswap: ["0x6A000F20005980200259B80c5102003040001068"],
		uniswap: [
			"0x73855d06DE49d0fe4A9c42636Ba96c62da12FF9C",
			"0xEf740bf23aCaE26f6492B10de645D6B98dC8Eaf3",
			"0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7",
		],
		zeroex: [
			"0x0000000000001fF3684f28c67538d4D072C22734",
			"0x972655fACb8Df3CdF40395E4262f874f81674D46",
		],
	},
	bridges: {
		layerzero: {
			eid: 30320,
			tokens: [
				{
					id: 1,
					symbol: "USDT0",
					project: "USDT0",
					OFTAddress: "0xc07bE8994D035631c36fb4a89C918CeFB2f03EC3",
				},
				{
					id: 3,
					symbol: "WBTC",
					project: "WBTC",
					OFTAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
				},
			],
		},
		chainlink: {
			atlasNetworkName: "ethereum-mainnet-unichain-1",
			routerAddress: "0x68891f5F96695ECd7dEdBE2289D1b73426ae7864",
			chainSelector: 1923510103922296319n,
			tokenAdminRegistry: "0xAB3Ee2e897cf23c10e76d26aB4674fEFA376bc0d",
		},
		wormhole: {
			chain: "Unichain",
			timeToFinalize: 1080,
		},
	},
	oracles: {},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 0,
		poolFactory: "0x1f98400000000000000000000000000000000003",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0xb7610f9b733e7d45184be3a1bc966960ccc54f0b",
		tickLens: "0xd5d76fa166ab8d8ad4c9f61aaa81457b66cbe443",
		nonfungiblePositionManager: "0x943e6e07a7e8e791dafc44083e54041d743c46e9",
		positionsNFT: "0x943e6e07a7e8e791dafc44083e54041d743c46e9",
		positionsNFTDeployBlock: 294152,
		universalRouter: "0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7",

		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	uniswapv4: {
		deployBlock: 0,
		poolManager: "0x1f98400000000000000000000000000000000004",
		positionManager: "0x4529a01c7a0410167c5740c487a8de60232617bf",
		universalRouter: "0xef740bf23acae26f6492b10de645d6b98dc8eaf3",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		defaultPool:
			"0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9",
		stateView: "0x86e8631a016f9068c3f085faf484ee3f5fdee8f2",
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
	},
	oku: {
		router: "0x47A708142C348e2B4260cCEf3abC2Aff03486eBc",
		limitOrderRegistry: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		limitOrderRegistryDeployBlock: 19179485,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x8927058918e3CFf6F55EfE45A58db1be1F069E49",
	defaultToken0: "0x078d782b760474a361dda0af3839290b0ef57ad6",
	defaultToken1: "0x4200000000000000000000000000000000000006",
	tokenList: [
		{ symbol: "USDC", address: "0x078d782b760474a361dda0af3839290b0ef57ad6" },
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "UNI", address: "0x8f187aa05619a017077f5308904739877ce9ea21" },
	],
	stables: [
		"0x078d782b760474a361dda0af3839290b0ef57ad6",
		"0x9151434b16b9763660705744891fa906f660ecc5",
		"0x20cab320a855b39f724131c69424240519573f81",
	],
	watchlist: [
		"0x8927058918e3CFf6F55EfE45A58db1be1F069E49",
		"0x501174E799c8E8FC889Aeb79426d556b1916462d",
		"0x1D6ae37DB0e36305019fB3d4bad2750B8784aDF9",
		"0xe92c7cc875245A86fAf088fEbE4614E1E318BeF5",
		"0x65081CB48d74A32e9CCfED75164b8c09972DBcF1",
	],
	v4Watchlist: [
		"0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9",
		"0x04b7dd024db64cfbe325191c818266e4776918cd9eaf021c26949a859e654b16",
		"0xbd0f3a7cf4cf5f48ebe850474c8c0012fa5fe893ab811a8b8743a52b83aa8939",
		"0x51f9d63dda41107d6513047f7ed18133346ce4f3f4c4faf899151d8939b3496e",
		"0x05dbb214bd7b9461f9c2f6690b612629b65b9f81d7312fdd3e552d2dda85f771",
		"0xb2f3bbaf23e0197ec2e6f9ab730d00aaf26a9119ecd583bbb9ef3146b4afa248",
	],
	internalName: "unichain",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		},
		nftManager: {
			address: "0x943e6e07a7e8e791dafc44083e54041d743c46e9",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		multicall2: {
			address: "0xb7610f9b733e7d45184be3a1bc966960ccc54f0b",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
