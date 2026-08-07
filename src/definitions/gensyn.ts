import { zeroAddress } from "viem";
import { gensyn as chain } from "viem/chains";
import { makeConfig } from "../util";

export const gensyn = makeConfig({
	...chain,
	blockTimeSeconds: 2,
	name: "Gensyn",
	launchTime: 1773970570,
	transactionType: "eip1559",
	sortIndex: 28,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/gensyn-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {},
	markets: {},
	marketRouters: {
		icecreamswap: ["0x9E6d21E759A7A288b80eef94E4737D313D31c13f"],
		uniswap: [
			"0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
			"0x807F4E281B7A3B324825C64ca53c69F0b418dE40",
		],
	},
	bridges: {},
	oracles: {},
	morpho: {
		deployBlock: 7520470,
		morpho: "0x8c45B34999883FF4B47cD3be095D585682cd9227",
		bundler3: "0xE09314FE5Fc41FEc8f3e6042085dD3CeE24c877c",
		vaultV2Factory: "0xe2558155AEcEF57cAADB98e39b0538ab0ae95693",
		morphoMarketV1AdapterV2Factory:
			"0x155134544AE2Ec3AB23034BF620538482C5E3c40",
		morphoMarketV1RegistryV2: "0x53A687347c822D222058d3E99a566a3D3c0638e1",
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {
		deployBlock: 6184635,
		poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
		permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
		multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
		tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
		nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
		positionsNFTDeployBlock: 6184665,
		universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",

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
		router: "0x47A708142C348e2B4260cCEf3abC2Aff03486eBc",
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "ETH",
		},
	},
	defaultPool: "0xF3F77fb85A74f49a3DCb082347D7FEFa8aBA596f",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0x5b32c997211621d55a89Cc5abAF1cC21F3A6ddF5",
	tokenList: [
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDC.e", address: "0x5b32c997211621d55a89Cc5abAF1cC21F3A6ddF5" },
	],
	stables: ["0x5b32c997211621d55a89Cc5abAF1cC21F3A6ddF5"],
	watchlist: [
		"0xF3F77fb85A74f49a3DCb082347D7FEFa8aBA596f",
		"0x3e228359c8ce20fae623e54b438c74420ce30e5b",
		"0xf17e769b556f7cc4f02e64cdeb2a43d5ddb54bc2",
	],
	v4Watchlist: [],
	internalName: "gensyn",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
			blockCreated: 0,
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
	},
});
