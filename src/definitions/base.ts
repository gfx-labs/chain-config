import { base as chain } from "viem/chains";
import { makeConfig } from "../util";

export const base = makeConfig({
	...chain,
	sortIndex: 2,
	liteChain: true,
	launchTime: 1707321600,
	transactionType: "eip1559",
	blockTimeSeconds: 2,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/base-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	blockAid: "base",
	defaultPool: "0xd0b53d9277642d899df5c87a3966a349a798f224",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
	morpho: {
		deployBlock: 13977148,
		morpho: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
		mmFactory10: "0xa9c3d3a366466fa809d1ae982fb2c46e5fc41101",
		mmFactory11: "0xFf62A7c278C62eD665133147129245053Bbf5918",
		bundler3: "0x6BFd8137e702540E7A42B74178A4a49Ba43920C4",
		publicAllocator: "0xA090dD1a701408Df1d4d0B85b716c87565f90467",
	},
	externalId: {
		zerion: "base",
		debank: "base",
		cowswap: "base",
		tenderly: "true",
		coingecko: "base",
	},
	markets: {
		kyberswap: "base",
		oneinch: {
			spender: "0x111111125421ca6dc452d289314280a0f8842a65",
		},
		paraswap: {
			routerContract: "0x6A000F20005980200259B80c5102003040001068",
		},
		openocean: "base",
		zeroex: true,
		icecreamswap: true,
		cowswap: "base",
	},
	marketRouters: {
		binance: ["0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5"],
		enso: ["0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"],
		fabric: ["0x7C137a37742437d2212B7bd873ed135b5C4c61da"],
		fynd: [
			"0x9bA632d83e9eF57571256Cf4cc951b8aF1158e9C",
			"0xAbA5B53b03eAfaD1C5fc8BD5Fc765fC85Bb3de67",
		],
		icecreamswap: ["0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d"],
		kyberswap: ["0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"],
		native: ["0xaEC634d949df14Be76dC317504C7b9a6a8A5f576"],
		odos: [
			"0x19cEeAd7105607Cd444F5ad10dd51356436095a1",
			"0x0d05a7d3448512b78fa8a9e46c4872c88c4a0d05",
		],
		okx: [
			"0xC8F6b8Ba0DC0f175B568B99440B0867F69A29265",
			"0x57df6092665eb6058DE53939612413ff4B09114E",
			"0x67d03631FE51B741C0C00c4E16eb662AC84381df",
			"0x77449Ff075C0A385796Da0762BCB46fd5cc884c6",
		],
		oneinch: ["0x111111125421ca6dc452d289314280a0f8842a65"],
		openocean: ["0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"],
		paraswap: ["0x6A000F20005980200259B80c5102003040001068"],
		propellerswap: ["0xea3207778e39EB02D72C9D3c4Eac7E224ac5d369"],
		uniswap: [
			"0x2626664c2603336E57B271c5C0b26F421741e481",
			"0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
			"0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7",
		],
		unizen: ["0xef58b643240178c2bc37681f8d4e50d7ec37ee22"],
		zeroex: [
			"0x0000000000001fF3684f28c67538d4D072C22734",
			"0x7747F8D2a76BD6345Cc29622a946A929647F2359",
		],
	},
	bridges: {
		cctp: {
			domain: 6,
			messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64",
		},
		chainlink: {
			atlasNetworkName: "ethereum-mainnet-base-1",
			routerAddress: "0x881e3A65B4d4a04dD529061dd0071cf975F58bCD",
			chainSelector: 15971525489660198786n,
			tokenAdminRegistry: "0x6f6C373d09C07425BaAE72317863d7F6bb731e37",
		},
		rhinofi: "BASE",
		stargate: {
			endpointID: 30184,
			blockConfirmations: 20,
			tokens: [
				{
					name: "ETH",
					id: 13,
					address: "0xdc181Bd607330aeeBEF6ea62e03e5e1Fb4B6F7C7",
				},
				{
					name: "USDC",
					id: 1,
					address: "0x27a16dc786820B16E5c9028b75B99F6f604b5d26",
				},
				{
					name: "WXTZ",
					type: "OFT",
					id: 20,
					address: "0x91F9cc2649ac70a071602cadE9b0C1A5868af51D",
				},
			],
		},
		wanbridge: {
			requiredConfirmations: 200,
		},
		wormhole: {
			chain: "Base",
			timeToFinalize: 1800,
		},
		layerzero: {
			eid: 30184,
			tokens: [
				{
					id: 3,
					symbol: "WBTC",
					project: "WBTC",
					OFTAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
				},
				{
					id: 4,
					symbol: "WETH",
					project: "stargate",
					OFTAddress: "0x4200000000000000000000000000000000000006",
				},
			],
		},
	},
	oracles: {
		cmc: {
			slug: "base",
			native: "ethereum",
		},
		coingecko: {
			slug: "base",
			native: "ethereum",
		},
		dexscreener: "base",
	},
	safeReorgDistance: 90000,
	uniswap: {
		deployBlock: 1371680,
		poolFactory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
		multicall2: "0x41A513463248971B41C0580726CF4D425c071732",
		tickLens: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
		nonfungiblePositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
		positionsNFT: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
		positionsNFTDeployBlock: 1371714,
		universalRouter: "0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7",
		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		usdcAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
	},
	oku: {
		router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed",
		limitOrderRegistry: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27",
		limitOrderRegistryDeployBlock: 7644835,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "WETH",
		},
	},
	tokenList: [
		{ symbol: "USDbC", address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca" },
		{ symbol: "cbETH", address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22" },
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDC", address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" },
		{ symbol: "USDT", address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2" },
	],
	stables: [
		"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
		"0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
		"0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
		"0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
	],
	watchlist: [
		"0x4c36388be6f416a29c8d8eee81c771ce6be14b18",
		"0x06959273e9a65433de71f5a452d529544e07ddd0",
		"0xc9034c3e7f58003e6ae0c8438e7c8f4598d5acaa",
		"0xd0b53d9277642d899df5c87a3966a349a798f224",
		"0x48413707b70355597404018e7c603b261fcadf3f",
		"0x4b0aaf3ebb163dd45f663b38b6d93f6093ebc2d3",
		"0x0d5959a52e7004b601f0be70618d01ac3cdce976",
		"0x10648ba41b8565907cfa1496765fa4d95390aa0d",
		"0x22f9623817f152148b4e080e98af66fbe9c5adf8",
		"0xae2ce200bdb67c472030b31f602f0756c9aeb61c",
		"0xd5638bf58e2762fa40bd753490f693cbb1986709",
		"0x018046b1d182f7c0978c07610e1173c8e11913fd",
		"0x24e1cbd6fed006ceed9af0dce688acc7951d57a9",
		"0x97a25cc2793f0ffa90e1667cf7b3c1f130737189",
		"0xfcc89a1f250d76de198767d33e1ca9138a7fb54b",
		"0x3bc5180d5439b500f381f9a46f15dd6608101671",
		"0xa555149210075702a734968f338d5e1cbd509354",
		"0x5197195ac878741b192f84ff6d7da5a85b9e634b",
		"0xe745a591970e0fa981204cf525e170a2b9e4fb93",
		"0x7e904aaf3439402eb21958fe090bd852d5e882cf",
	],
	v4Watchlist: [],
	internalName: "base",
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		nftManager: {
			address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		limitOrder: {
			address: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27",
		},
		multicall2: {
			address: "0x41A513463248971B41C0580726CF4D425c071732",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
		metrom: {
			address: "0xD1D3Cf05Ef211C71056f0aF1a7FD1DF989E109c3",
			blockCreated: 20622498,
		},
	},
});
