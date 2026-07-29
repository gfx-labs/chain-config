package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Xdc Network = Network{
	ChainId: 50,
	NativeCurrency: NativeCurrency{
		Name:     "XDC",
		Symbol:   "XDC",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/xdc-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/xdc.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         15,
	LaunchTime:        1746453600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://xdcscan.com",
		},
	},
	DefaultPool:     common.HexToAddress("0x29f804974da123e8e48acb107be76b9f2ce1b408"),
	InternalName:    "xdc",
	TransactionType: "legacy",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"coingecko": "xdc-network",
	},
	DefaultToken0: common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
	DefaultToken1: common.HexToAddress("0xfa2958cb79b0491cc627c1557f441ef849ca8eb1"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x2a8e898b6242355c290e1f4fc966b8788729a4d4"), common.HexToAddress("0xd4b5f10d61916bd6e0860144a91ac658de8a1437"), common.HexToAddress("0xfa2958cb79b0491cc627c1557f441ef849ca8eb1")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x2a8e898b6242355c290e1f4fc966b8788729a4d4"): {}, common.HexToAddress("0xd4b5f10d61916bd6e0860144a91ac658de8a1437"): {}, common.HexToAddress("0xfa2958cb79b0491cc627c1557f441ef849ca8eb1"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x1e5aec37f6df6653c3342df75edd92beb3fb9846"), common.HexToAddress("0x9149b4e074f101ca0514b1d30fc78f181e21d409"), common.HexToAddress("0xd68fdf3cbe9f48422a15899318dd5cb921f92037"), common.HexToAddress("0x97bb50ace84058254df2e2f6482f5549e80b7267"), common.HexToAddress("0x9fb200504e3e9eb9b8e332fa21e47a657adfa099"), common.HexToAddress("0x898488dc884ee5ece8079499f4c7ddc5c281e85f"), common.HexToAddress("0xd68fdf3cbe9f48422a15899318dd5cb921f92037")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc"),
		LimitOrderRegistryDeployBlock: 87231348,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
			NativeWrappedName:  "XDC",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                87230664,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    87230700,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
		WrappedNativeSymbol:        "WXDC",
		WrappedNativeName:          "Wrapped XDC",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "XDC",
	},

	Morpho: MorphoMetadata{
		DeployBlock:                    101757515,
		Morpho:                         common.HexToAddress("0xEa49B0fE898aF913A3826F9f462eE2cDcb854fD9"),
		Bundler3:                       common.HexToAddress("0xed9bdc3E6081db528b6D5CDDf47EcB05337c62A7"),
		VaultV2Factory:                 common.HexToAddress("0x227544d6989cD15c05AAB6dde4F29523dcfdbe2B"),
		MorphoMarketV1AdapterV2Factory: common.HexToAddress("0x5C00c99F2235439725417E9f037B7D38FfF35d31"),
		MorphoMarketV1RegistryV2:       common.HexToAddress("0x773Eee84bc3c4c9CD7CB79C198c5434E765ac67e"),
	},
	MarketRouters: MarketRouters{
		Icecreamswap: []common.Address{common.HexToAddress("0x0EE6f0900990b23A2a96a6F41EB56693c9076031")},
		Uniswap:      []common.Address{common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"), common.HexToAddress("0xaa52bB8110fE38D0d2d2AF0B85C3A3eE622CA455")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
		UsdcAddress: common.HexToAddress("0xfa2958cb79b0491cc627c1557f441ef849ca8eb1"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0b1795cca8e4ec4df02346a082df54d437f8d9af"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
