import { metalL2 as chain } from "viem/chains";
import { makeConfig } from "../util";

export const metal = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	launchTime: 1733882663,
	transactionType: "eip1559",
	sortIndex: 15,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/metal-logo.png",
	deprecated: true,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {},
	morpho: {},
	markets: {},
	bridges: {
		chainlink: {
			atlasNetworkName: "metal-mainnet",
			routerAddress: "0x020c61ECEEE0E5DC32F2503AbB6E070fa0EbBfaA",
			chainSelector: 13447077090413146373n,
			tokenAdminRegistry: "0xc41640B959Ca2A62b9293509202D8615dC293634",
		},
	},
	oracles: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 10810498,
		poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
		multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
		nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFTDeployBlock: 10810692,
		universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",

		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		wethAddress: "0x4200000000000000000000000000000000000006",
	},
	oku: {
		limitOrderRegistry: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
		limitOrderRegistryDeployBlock: 10815725,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0xC06B6d6242E84c96AeE28C7FcfE48D2c9909e37B",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0x51E85d70944256710cb141847F1a04f568C1Db0e",
	tokenList: [
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "MTL", address: "0xBCFc435d8F276585f6431Fc1b9EE9A850B5C00A9" },
		{ symbol: "USDC", address: "0x51E85d70944256710cb141847F1a04f568C1Db0e" },
	],
	stables: [
		"0x51E85d70944256710cb141847F1a04f568C1Db0e",
		"0xb91CFCcA485C6E40E3bC622f9BFA02a8ACdEeBab",
	],
	watchlist: ["0xC06B6d6242E84c96AeE28C7FcfE48D2c9909e37B"],
	internalName: "metal",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
		},
		nftManager: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		multicall2: {
			address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
