package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Corn Network = Network{
	ChainId:           21000000,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/corn-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         25,
	LaunchTime:        1733882663,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://cornscan.io",
			ApiUrl: "https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xe435E14815d28a86c643E4606Ed0e8E5624782c6"),
	InternalName:    "corn",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "corn",
	},
	DefaultToken0: common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
	DefaultToken1: common.HexToAddress("0xDF0B24095e15044538866576754F3C964e902Ee6"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xDF0B24095e15044538866576754F3C964e902Ee6"), common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xDF0B24095e15044538866576754F3C964e902Ee6"): {}, common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x660c6c6c2ad9be9fca2d40da22e1e6142ce5e7ca"), common.HexToAddress("0xe435E14815d28a86c643E4606Ed0e8E5624782c6"), common.HexToAddress("0x43aA32cf4f6389aB89d8C79092A0fc65899C20ba"), common.HexToAddress("0x0F12dac5217868b3d6772632543ef16df8df17E5"), common.HexToAddress("0xbD108c1Dd7802DFF6c24138A72949184FFbe006F"), common.HexToAddress("0xb6a7be3ca6698859b374640b3db439fda7b7a5e3"), common.HexToAddress("0x255f0b304f701a0530f5dc1739a3d1469e21dd5f")},
	BlockTimeSeconds: 35,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		LimitOrderRegistryDeployBlock: 10948,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
			NativeWrappedName:  "BTCN",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                10878,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    10901,
		UniversalRouter:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		WrappedNativeAddress:       common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
		WrappedNativeSymbol:        "WBTCN",
		WrappedNativeName:          "Wrapped Bitcorn",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "BTCN",
	},

	Morpho: MorphoMetadata{
		DeployBlock:     251401,
		Morpho:          common.HexToAddress("0xc2B1E031540e3F3271C5F3819F0cC7479a8DdD90"),
		PublicAllocator: common.HexToAddress("0xDFde06e2B2A2D718eE5560b73dA4F830E56A2f10"),
		MmFactory11:     common.HexToAddress("0xe430821595602eA5DD0cD350f86987437c7362fA"),
		Bundler3:        common.HexToAddress("0x086889F9bdE8349512dD77088A7114E6C1c42Af7"),
		UrdFactory:      common.HexToAddress("0xaBC2CBa3C8E265d63C04BF5fA41EE105d3D85ae3"),
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
