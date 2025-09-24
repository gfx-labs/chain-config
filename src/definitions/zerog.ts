import { zeroAddress } from "viem";
import { zeroGMainnet as chain } from "viem/chains";
import { makeConfig } from "../util";

export const zerog = makeConfig({
	...chain,
	name: "0G",
	blockTimeSeconds: 35,
	launchTime: 1733882663,
	transactionType: "eip1559",
	sortIndex: 15,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/zerog-logo.svg",
	deprecated: false,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
	},
	markets: {},
	bridges: {},
	oracles: {},
	morpho: {},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 6444619,
		poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
		multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
		nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFTDeployBlock: 6444746,
		universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",

		wrappedNativeAddress: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
		wrappedNativeSymbol: "w0G",
		wrappedNativeName: "Wrapped 0G",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "0G",
	},
	token: {
		wethAddress: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
	},
	oku: {
		limitOrderRegistry: "0x9db70e29712cc8af10c2b597bada6784544ff407",
		limitOrderRegistryDeployBlock: 6449021,
		pricing: {
			nativeWrappedToken: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
			nativeWrappedName: "0G",
		},
	},
	defaultPool: zeroAddress,
	defaultToken0: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
	defaultToken1: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e",
	tokenList: [
		{ symbol: "USDC.e", address: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e" },
		{ symbol: "w0G", address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c" },
	],
	stables: ["0x1f3aa82227281ca364bfb3d253b0f1af1da6473e"],
	watchlist: [],
	internalName: "zerog",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/0g.svg",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: "0x9db70e29712cc8af10c2b597bada6784544ff407",
		},
		nftManager: {
			address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		},
		weth9: {
			address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
		},
		multicall2: {
			address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
