import { zeroAddress } from "viem";
import { robinhood as chain } from "viem/chains";
import { makeConfig } from "../util";

export const robinhood = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 0,
	transactionType: "eip1559",
	sortIndex: 47,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/robinhood-logo.svg",
	deprecated: false,
	liteChain: true,
	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90_000,
	blockAid: "",
	externalId: {},
	markets: {},
	bridges: {},
	oracles: {},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		poolFactory: "0x1f7d7550B1b028f7571E69A784071F0205FD2EfA",
		nonfungiblePositionManager: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3",
		positionsNFT: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3",
		wrappedNativeAddress: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
	},
	oku: {
		pricing: {
			nativeWrappedToken: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0x69BfaF19C9f377BB306a89aEd9F6B07e2c1a8d9a",
	defaultToken0: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
	defaultToken1: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
	tokenList: [
		{ symbol: "WETH", address: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73" },
		{ symbol: "USDG", address: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168" },
		{ symbol: "USDe", address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34" },
	],
	stables: [
		"0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
		"0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
	],
	watchlist: [],
	v4Watchlist: [],
	internalName: "robinhood",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
		},
		nftManager: {
			address: "0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3",
		},
		weth9: {
			address: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
		},
	},
});
