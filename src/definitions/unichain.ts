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
		universalRouter: "0x4D73A4411CA1c660035e4AECC8270E5DdDEC8C17",

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
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
	},
	oku: {
		limitOrderRegistry: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		limitOrderRegistryDeployBlock: 19179485,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x65081CB48d74A32e9CCfED75164b8c09972DBcF1",
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
		"0x65081CB48d74A32e9CCfED75164b8c09972DBcF1",
		"0x5C75bFB6194D7D763d33eA292cBc50cDa806451B",
		"0xd49174DbA635489C67fA628864C2D0d04824eBd8",
		"0xbDA709a0665b340898856B8B29FF87079bb130D3",
		"0x18b268965E4E702bDf13469205937894b8Ab0Ee8",
		"0xFF9722Cb0712261A7F02A451dd178De10234Ad0c",
		"0x6b918c9F87B46a758C2B51bce427C8028DaCb720",
		"0x1D6ae37DB0e36305019fB3d4bad2750B8784aDF9",
		"0x12095933f1eeB066176dD2E41e5a2F8bE6974616",
		"0x8EB4b07AFFbd1083F42032EeD35Cd32e382Ee8b7",
		"0xfBC45aB96D02E150b2DDEb7dd4EAcd3D8c674F4a",
		"0x18CE92e7a37D994657f97c3DeFAf880A805F08d5",
		"0xc673d5164103357A7537C36438A6326776A14bbd",
		"0xa9c6669dE2C04C2ADb22Ac7A65D75B47FEe30E35",
		"0x8927058918e3CFf6F55EfE45A58db1be1F069E49",
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
