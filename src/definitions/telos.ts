import { telos as chain } from "viem/chains";
import { makeConfig } from "../util";

export const telos = makeConfig({
	...chain,
	blockTimeSeconds: 0.5,
	launchTime: 1743089303,
	transactionType: "legacy",
	sortIndex: 32,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/telos-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		coingecko: "telos",
	},
	markets: {
		openocean: "telos",
		icecreamswap: true,
	},
	bridges: {
		stargate: {
			endpointID: 30199,
			tokens: [
				{
					name: "ETH",
					type: "OFT",
					id: 13,
					address: "0xA272fFe20cFfe769CdFc4b63088DCD2C82a2D8F9",
				},
				{
					name: "USDC",
					type: "OFT",
					id: 1,
					address: "0x2086f755A6d9254045C257ea3d382ef854849B0f",
				},
				{
					name: "USDT",
					type: "OFT",
					id: 2,
					address: "0x3a1293Bdb83bBbDd5Ebf4fAc96605aD2021BbC0f",
				},
			],
		},
	},
	morpho: {},
	oracles: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 386633562,
		poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
		multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
		nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFTDeployBlock: 386635939,
		universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",

		wrappedNativeAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
		wrappedNativeSymbol: "wTLOS",
		wrappedNativeName: "Wrapped TLOS",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "TLOS",
	},
	token: {
		wethAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
		wbtcAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
		usdcAddress: "0xF1815bd50389c46847f0Bda824eC8da914045D14",
	},
	oku: {
		limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
		limitOrderRegistryDeployBlock: 386645006,
		pricing: {
			nativeWrappedToken: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
			nativeWrappedName: "TLOS",
		},
	},
	defaultPool: "0xa89c1c7d0975f1a98442e96e18a292982b12b3cd",
	defaultToken0: "0xf1815bd50389c46847f0bda824ec8da914045d14",
	defaultToken1: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
	tokenList: [
		{ symbol: "WTLOS", address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E" },
		{ symbol: "USDC.e", address: "0xF1815bd50389c46847f0Bda824eC8da914045D14" },
		{ symbol: "USDT", address: "0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8" },
		{ symbol: "WBTC", address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c" },
		{ symbol: "WETH", address: "0xBAb93B7ad7fE8692A878B95a8e689423437cc500" },
		{ symbol: "USDM", address: "0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9" },
	],
	stables: [
		"0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8",
		"0xF1815bd50389c46847f0Bda824eC8da914045D14",
		"0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9",
	],
	watchlist: [
		"0xa48c8dd45ccf9c1ebf938c63c7cbc7cc259bf207",
		"0xa89c1c7d0975f1a98442e96e18a292982b12b3cd",
		"0xd8606afb3f48a13229f52d6251c1aa3e05ad31a1",
		"0xe8d1c7e1fcfc8cee3daac2819266ea18015829b7",
		"0xc1db63d4fbb6fbc023ee74480ba53b8906263fbd",
		"0x6b566fcf6c5342934e7da46d9ee3b705e74736f9",
		"0x11856fa7683aa9edf44a6ab368ec0cd02b03e6a1",
		"0x45b47c9207fa8298863991f1b02a5b0e77bab7b6",
	],
	v4Watchlist: [],
	internalName: "telos",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/telos.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
		},
		nftManager: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		weth9: {
			address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
		},
		multicall2: {
			address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
		metrom: {
			address: "0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276",
			blockCreated: 390899406,
		},
	},
});
