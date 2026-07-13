import { zeroAddress } from "viem";
import { avalanche as chain } from "viem/chains";
import { makeConfig } from "../util";

export const avalanche = makeConfig({
	...chain,
	name: "Avalanche",
	blockTimeSeconds: 2,
	launchTime: 1761794290,
	transactionType: "eip1559",
	sortIndex: 17,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/avalanche-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	liteChain: true,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		zerion: "avalanche",
		debank: "avax",
		tenderly: "true",
		coingecko: "avalanche",
	},
	markets: {
		openocean: "avax",
		cowswap: "avalanche",
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "avalanche-mainnet",
			routerAddress: "0xF4c7E640EdA248ef95972845a62bdC74237805dB",
			chainSelector: 6433500567565415381n,
			tokenAdminRegistry: "0xc8df5D618c6a59Cc6A311E96a39450381001464F",
		},
		stargate: {
			endpointID: 30106,
			tokens: [],
		},
		wanbridge: {
			requiredConfirmations: 1,
		},
		wormhole: {
			chain: "Avalanche",
			timeToFinalize: 2,
		},
	},
	oracles: {
		cmc: {
			slug: "avalanche",
			native: "avalanche",
		},
		coingecko: {
			slug: "avalanche",
			native: "avalanche-2",
		},
		dexscreener: "avalanche",
	},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 27832972,
		poolFactory: "0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2",
		tickLens: "0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950",
		nonfungiblePositionManager: "0x655C406EBFa14EE2006250925e54ec43AD184f8B",
		positionsNFT: "0x655C406EBFa14EE2006250925e54ec43AD184f8B",
		positionsNFTDeployBlock: 27833025,
		universalRouter: "0x8B844f885672f333Bc0042cB669255f93a4C1E6b",

		wrappedNativeAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
		wrappedNativeSymbol: "WAVAX",
		wrappedNativeName: "Wrapped AVAX",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "AVAX",
	},
	token: {
		wethAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
	},
	oku: {
		limitOrderRegistry: zeroAddress,
		limitOrderRegistryDeployBlock: 0,
		pricing: {
			nativeWrappedToken: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
			nativeWrappedName: "AVAX",
		},
	},
	defaultPool: "0xfAe3f424a0a47706811521E3ee268f00cFb5c45E",
	defaultToken0: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
	defaultToken1: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
	tokenList: [
		{ symbol: "WAVAX", address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" },
		{ symbol: "USDC", address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e" },
	],
	stables: [
		"0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
		"0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
	],
	watchlist: [],
	v4Watchlist: [],
	internalName: "avalanche",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/avax.svg",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0x655C406EBFa14EE2006250925e54ec43AD184f8B",
		},
		weth9: {
			address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
		},
		multicall2: {
			address: "0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
