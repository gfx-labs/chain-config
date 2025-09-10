import { sei as chain } from "viem/chains";
import { makeConfig } from "../util";

export const sei = makeConfig({
	...chain,
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	blockTimeSeconds: 0.4,
	launchTime: 1687788000,
	transactionType: "eip1559",
	sortIndex: 5,
	logoUrl: "https://assets.oku.trade/chains/sei-logo.svg",
	deprecated: false,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
	},
	markets: {
		openocean: "sei",
		oneinch: {
			spender: "0x111111125421ca6dc452d289314280a0f8842a65",
		},
	},
	morpho: {},
	bridges: {
		chainlink: {
			atlasNetworkName: "sei-mainnet",
			routerAddress: "0xAba60dA7E88F7E8f5868C2B6dE06CB759d693af0",
			chainSelector: 9027416829622342829n,
			tokenAdminRegistry: "0x910a46cA93E8086BF1d7D65190eE6AEe5256Bd61",
		},
		stargate: {
			endpointID: 30280,
			blockConfirmations: 20,
			tokens: [
				{
					name: "ETH",
					type: "OFT",
					id: 13,
					address: "0x5c386D85b1B82FD9Db681b9176C8a4248bb6345B",
				},
				{
					name: "USDC",
					id: 1,
					address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E",
				},
				{
					name: "USDT",
					id: 2,
					address: "0x0dB9afb4C33be43a0a0e396Fd1383B4ea97aB10a",
				},
			],
		},
		layerzero: {
			eid: 30280,
			tokens: [
				{
					id: 1,
					symbol: "USDT0",
					project: "USDT0",
					OFTAddress: "0x56fe74a2e3b484b921c447357203431a3485cc60",
				},
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
					OFTAddress: "0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8",
				},
			],
		},
		wormhole: {
			chain: "Sei",
			timeToFinalize: 1,
		},
	},
	oracles: {
		cmc: {
			slug: "sei",
			native: "sei",
		},
		coingecko: {
			slug: "sei-v2",
			native: "sei-network",
		},
		dexscreener: "seiv2",
	},
	blockExplorers: {
		default: {
			name: "Seitrace",
			url: "https://seitrace.com",
			apiUrl: "https://seitrace.com/pacific-1/api",
		},
	},
	uniswap: {
		deployBlock: 79245151,
		poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
		permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
		multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
		tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
		nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
		positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
		positionsNFTDeployBlock: 79245279,
		universalRouter: "0xa683c66045ad16abb1bCE5ad46A64d95f9A25785",

		wrappedNativeAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
		wrappedNativeSymbol: "WSEI",
		wrappedNativeName: "Wrapped SEI",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "SEI",
	},
	token: {
		usdcAddress: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
		wethAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
	},
	oku: {
		limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		limitOrderRegistryDeployBlock: 79448363,
		pricing: {
			nativeWrappedToken: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
			nativeWrappedName: "SEI",
		},
	},
	defaultPool: "0x0A6358F069268c7dc4918D5B12c69a782b957Ead",
	defaultToken0: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
	defaultToken1: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
	tokenList: [
		{ symbol: "WSEI", address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7" },
		{ symbol: "USDC", address: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1" },
		{ symbol: "USDT", address: "0xb75d0b03c06a926e488e2659df1a861f860bd3d1" },
	],
	stables: [
		"0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
		"0xb75d0b03c06a926e488e2659df1a861f860bd3d1",
	],
	watchlist: [
		"0x0A6358F069268c7dc4918D5B12c69a782b957Ead",
		"0x8a1a9efb7f7f74ace10a31f2f5f9f7e804f957b1",
		"0x41eea09c971294fcde3b6e553902b04a47be7442",
		"0x5cfa8db453c9904511c4ea9eb0bfc903e36b9f5f",
		"0xa3a573c8d14c93fca8fdecb7db168619563d9b00",
		"0x48ddb6384ec5d835bdb0faf7e3abc01d7a1493cd",
		"0xc53b65811e3d33ada5a90d476dcf2063b53bcfb3",
	],
	internalName: "sei",
	nativeLogoUrl: "https://assets.oku.trade/natives/sei.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		},
		nftManager: {
			address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
		},
		weth9: {
			address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
		},
		multicall2: {
			address: "0x9b7aC6735b23578E81260acD34E3668D0cc6000A",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
		metrom: {
			address: "0xD6e88c910329fE3597498772eB94991a0630306d",
			blockCreated: 141494257,
		},
	},
});
