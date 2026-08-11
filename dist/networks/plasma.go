package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Plasma Network = Network{
	ChainId: 9745,
	NativeCurrency: NativeCurrency{
		Name:     "Plasma",
		Symbol:   "XPL",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/plasma-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/xpl.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         3,
	LaunchTime:        1758588527,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://plasmascan.to",
		},
	},
	DefaultPool:     common.HexToAddress("0x8603c67b7cc056ef6981a9c709854c53b699fa66"),
	InternalName:    "plasma",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"coingecko": "plasma",
	},
	DefaultToken0: common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
	DefaultToken1: common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x8603c67b7cc056ef6981a9c709854c53b699fa66"), common.HexToAddress("0xce4ac514ca6a9db357cccc105b7848d7fd37445d"), common.HexToAddress("0x2eabb32f34b7a25c34bc9cea142ce0e060ee0682"), common.HexToAddress("0x21d5a075073e631a85ab9c02e4b703460c572b4b"), common.HexToAddress("0x7bf6037d3b8af69468356435032eab9010adf879")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 1,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0xb1f3a7B816B0681188F54dFa400991B93ADf00ed"),
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
	MarketRouters: MarketRouters{
		Binance:      []common.Address{common.HexToAddress("0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5")},
		Enso:         []common.Address{common.HexToAddress("0xCfBAa9Cfce952Ca4F4069874fF1Df8c05e37a3c7")},
		Icecreamswap: []common.Address{common.HexToAddress("0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d")},
		Kyberswap:    []common.Address{common.HexToAddress("0x6131B5fae19EA4f9D964eAc0408E4408b66337b5")},
		Okx:          []common.Address{common.HexToAddress("0x19D345f95A80cc136d898f41b490E023cFF78658")},
		Openocean:    []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Uniswap:      []common.Address{common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"), common.HexToAddress("0x807F4E281B7A3B324825C64ca53c69F0b418dE40")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0x7F2194E8d4D5B5F889b17aeCe891F89Da74F5384")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x6100E367285b01F48D07953803A2d8dCA5D19873"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
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
	},
}
