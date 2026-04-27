import { ronin as chain } from "viem/chains";
import { makeConfig } from "../util";

export const ronin = makeConfig({
	...chain,
	blockTimeSeconds: 3,
	launchTime: 1761966026,
	transactionType: "eip1559",
	sortIndex: 41,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/ronin-logo.svg",
	deprecated: true,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
		coingecko: "ronin",
	},
	markets: {},
	bridges: {
		chainlink: {
			atlasNetworkName: "ronin-mainnet",
			routerAddress: "0x46527571D5D1B68eE7Eb60B18A32e6C60DcEAf99",
			chainSelector: 6916147374840168594n,
			tokenAdminRegistry: "0x90e83d532A4aD13940139c8ACE0B93b0DdbD323a",
		},
	},
	oracles: {
		cmc: {
			slug: "ronin",
			native: "ronin",
		},
		coingecko: {
			slug: "ronin",
			native: "ronin",
		},
	},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 49590756,
		poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		permit2: "0x000000000022d473030f116ddee9f6b43ac78ba3",
		multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
		nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFTDeployBlock: 49590795,
		universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",

		wrappedNativeAddress: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
		wrappedNativeSymbol: "WRON",
		wrappedNativeName: "Wrapped RON",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "RON",
	},
	token: {
		usdcAddress: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc",
		wethAddress: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
	},
	oku: {
		limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
		limitOrderRegistryDeployBlock: 49623205,
		pricing: {
			nativeWrappedToken: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
			nativeWrappedName: "RON",
		},
	},
	defaultPool: "0xa7906fd31d53b895897be4528f24282b98c4b114",
	defaultToken0: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc",
	defaultToken1: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
	tokenList: [
		{ symbol: "USDC", address: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc" },
		{ symbol: "WRON", address: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4" },
	],
	stables: ["0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"],
	watchlist: [],
	v4Watchlist: [],
	internalName: "ronin",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/ron.svg",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
		},
		nftManager: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		weth9: {
			address: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
		},
		multicall2: {
			address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
