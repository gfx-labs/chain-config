import { hemi as chain } from "viem/chains";
import { makeConfig } from "../util";

export const hemi = makeConfig({
	...chain,
	blockTimeSeconds: 12,
	launchTime: 1741901593,
	transactionType: "eip1559",
	sortIndex: 13,
	logoUrl: "https://assets.oku.trade/chains/hemi-logo.svg",
	deprecated: false,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {},
	markets: {
		icecreamswap: true,
	},
	bridges: {
		stargate: {
			endpointID: 30329,
			blockConfirmations: 20,
			tokens: [
				{
					name: "ETH",
					type: "POOL",
					id: 13,
					address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
				},
				{
					name: "USDC",
					type: "OFT",
					id: 1,
					address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B",
				},
				{
					name: "USDT",
					type: "OFT",
					id: 2,
					address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398",
				},
			],
		},
	},
	morpho: {},
	oracles: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 1293598,
		poolFactory: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
		permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
		multicall2: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
		tickLens: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
		nonfungiblePositionManager: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
		positionsNFT: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
		positionsNFTDeployBlock: 1293633,
		universalRouter: "0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B",

		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
		wbtcAddress: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3",
	},
	oku: {
		limitOrderRegistry: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0",
		limitOrderRegistryDeployBlock: 1293765,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x95a8b611e90de2b682267e2f00c8dff71909298a",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA",
	tokenList: [
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDT", address: "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e" },
		{ symbol: "USDC.e", address: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA" },
		{ symbol: "WBTC", address: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3" },
	],
	stables: [
		"0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA",
		"0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e",
		"0x6c851F501a3F24E29A8E39a29591cddf09369080",
		"0x7a06c4aef988e7925575c50261297a946ad204a8",
	],
	watchlist: [
		"0x95a8b611e90de2b682267e2f00c8dff71909298a",
		"0x47932f4a77cde549bf328bb33caae7f413b62612",
		"0x875c1efa41a868fbb4274c3e06afc14b597e8828",
		"0x0bbd621fb38f6ddc16b0089ebbeade8db9a8d354",
		"0xc47f921d413787abf5c98d977e52062de0a3a6d4",
		"0x0ec5aa557d5b2a8702ad43d253415d11f95364c0",
	],
	internalName: "hemi",
	nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0",
		},
		nftManager: {
			address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		multicall2: {
			address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
		metrom: {
			address: "0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276",
			blockCreated: 1838171,
		},
	},
});
