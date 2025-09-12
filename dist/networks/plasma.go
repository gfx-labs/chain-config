package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Plasma Network = Network{
	ChainId:           9745,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/plasma-logo.svg",
	Deprecated:        false,
	SortIndex:         15,
	LaunchTime:        1758588527,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://plasmascan.to",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "plasma",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
	DefaultToken1:   common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 1,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		LimitOrderRegistryDeployBlock: 431349,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
			NativeWrappedName:  "XPL",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                430127,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    430178,
		UniversalRouter:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		WrappedNativeAddress:       common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
		WrappedNativeSymbol:        "WXPL",
		WrappedNativeName:          "Wrapped XPL",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "XPL",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
