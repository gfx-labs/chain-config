import { zeroGMainnet as chain } from "viem/chains";
import { makeConfig } from "../util";

export const zerog = makeConfig({
	...chain,
	name: "0G",
	blockTimeSeconds: 1,
	launchTime: 1733882663,
	transactionType: "eip1559",
	sortIndex: 47,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/zerog-logo.svg",
	deprecated: false,

	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90000,
	blockAid: "",
	externalId: {
		tenderly: "true",
		coingecko: "0g",
	},
	markets: {},
	marketRouters: {
		icecreamswap: ["0x9E6d21E759A7A288b80eef94E4737D313D31c13f"],
		uniswap: [
			"0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
			"0x807F4E281B7A3B324825C64ca53c69F0b418dE40",
		],
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "0g-mainnet",
			routerAddress: "0x0aA145a62153190B8f0D3cA00c441e451529f755",
			chainSelector: 4426351306075016396n,
			tokenAdminRegistry: "0x051665f2455116e929b9972c36d23070F5054Ce0",
		},
	},
	oracles: {},
	morpho: {
		deployBlock: 7526486,
		morpho: "0x9CDD13a2212D94C4f12190cA30783B743E83C89e",
		bundler3: "0xbDaFC7ceF85C5fF69164330F521089C9E15DDDae",
		mmFactory11: "0x41528AadC7314658b07Ca6e7213B9b77289B477f",
		publicAllocator: "0x28a80F3713735CAD44bD9d7E1da9Fa16b0244497",
		urdFactory: "0x40bDDbFCA5fcDF6E2Bbd019aC782b6A61388ADE6",
	},
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
		router: "0x7B060A98BA242Ae42D6027a60937787eBe33DEBe",
		limitOrderRegistry: "0x9db70e29712cc8af10c2b597bada6784544ff407",
		limitOrderRegistryDeployBlock: 6449021,
		pricing: {
			nativeWrappedToken: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
			nativeWrappedName: "0G",
		},
	},
	defaultPool: "0x5c1e4669c5208adc0163273d51928890b663237f",
	defaultToken0: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
	defaultToken1: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e",
	tokenList: [
		{ symbol: "USDC.e", address: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e" },
		{ symbol: "w0G", address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c" },
	],
	stables: ["0x1f3aa82227281ca364bfb3d253b0f1af1da6473e"],
	watchlist: [
		"0x5c1e4669c5208adc0163273d51928890b663237f",
		"0xb5cb173dc8f8e8379343d12faa0cd66cb2db7d2e",
		"0x5B7698191ac6f42F8AA1B42EC8ce535E63423F67",
		"0xce77377cdfeb967ff2bb6f223ae74e1ae8dcfc71",
		"0xf0766611cb1288186f74f401fdb5e606c4b23693",
		"0x362452a081e028d1ed4f43fa3329890d79526309",
	],
	v4Watchlist: [],
	internalName: "zerog",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/0g.svg",
	contracts: {
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
