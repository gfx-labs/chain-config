import { bob as chain } from "viem/chains";
import { makeConfig } from "../util";

export const bob = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 1727359200,
	transactionType: "eip1559",
	sortIndex: 20,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/bob-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
		coingecko: "bob-network",
	},
	markets: {
		icecreamswap: true,
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "bitcoin-mainnet-bob",
			routerAddress: "0x827716e74F769AB7b6bb374A29235d9c2156932C",
			chainSelector: 3849287863852499584n,
			tokenAdminRegistry: "0xa57d04119AFf4884F8602213E58d8AaAD18229cb",
		},
		deswap: {
			chainId: 100000021,
		},
	},
	morpho: {},
	oracles: {
		coingecko: {
			slug: "bob-network",
			native: "ethereum",
		},
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 5188280,
		poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		permit2: "0xCbe9Be2C87b24b063A21369b6AB0Aa9f149c598F",
		multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
		nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFTDeployBlock: 5189019,
		universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",

		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
		wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3",
	},
	oku: {
		limitOrderRegistry: "0x447b8e40b0cda8e55f405c86bc635d02d0540ab8",
		limitOrderRegistryDeployBlock: 5624845,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de",
	defaultToken0: "0x05D032ac25d322df992303dCa074EE7392C117b9",
	defaultToken1: "0x4200000000000000000000000000000000000006",
	tokenList: [
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDT", address: "0x05D032ac25d322df992303dCa074EE7392C117b9" },
		{ symbol: "USDC.e", address: "0xe75d0fb2c24a55ca1e3f96781a2bcc7bdba058f0" },
		{ symbol: "WBTC", address: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3" },
		{
			symbol: "SolvBTC.BBN",
			address: "0xcc0966d8418d412c599a6421b760a847eb169a8c",
		},
		{
			symbol: "SolvBTC",
			address: "0x541fd749419ca806a8bc7da8ac23d346f2df8b77",
		},
		{ symbol: "uniBTC", address: "0x236f8c0a61da474db21b693fb2ea7aab0c803894" },
	],
	stables: [
		"0x05D032ac25d322df992303dCa074EE7392C117b9",
		"0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0",
		"0x6c851f501a3f24e29a8e39a29591cddf09369080",
		"0x1217BfE6c773EEC6cc4A38b5Dc45B92292B6E189",
	],
	watchlist: [
		"0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de",
		"0x6407fec527abad1aafdb9a3b5a2171800c21a2fe",
		"0xe112389471d577f7bc45c03c7c37f70abca1cc93",
		"0x566b9414c8733c14a96b8a21ca47711972f99d1a",
		"0x4a1df9716147b785f3f82019f36f248ac15dc308",
		"0xb091ed2491a179a9f14a34f88587cd08195e592c",
		"0x508a838922a93096c1eb23fe21d8938bbd653db6",
		"0x41a98efc1742a60aba6afbcb2073e64477b5333a",
		"0x45bfa70e8f387da47ffe3dec447bc16f0b9a6261",
	],
	internalName: "bob",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
		},
		nftManager: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		multicall2: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
