package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Nibiru Network = Network{
	ChainId: 6900,
	NativeCurrency: NativeCurrency{
		Name:     "NIBI",
		Symbol:   "NIBI",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/nibiru-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/nibi.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         29,
	LaunchTime:        1750705200,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://nibiscan.io",
		},
	},
	DefaultPool:     common.HexToAddress("0xd8F82b8d2e82265aC25d8d4Ef3cA47917693D3d5"),
	InternalName:    "nibiru",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b"),
	DefaultToken1:   common.HexToAddress("0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x9475b76b7f77791b6147cb989187fecd9b55398a"), common.HexToAddress("0x0085a09e68468a99c6ec3c0c9c98e17af614c470"), common.HexToAddress("0x9fe58f1883732931625c281afe2a068fe19183f5"), common.HexToAddress("0xd8f82b8d2e82265ac25d8d4ef3ca47917693d3d5"), common.HexToAddress("0x5133222db1e9f1b98d16e5fb46d6f398c60998e2"), common.HexToAddress("0xe7612e14a05613caf06fad766b484b0a6d146c3a")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0x1a84c0daAf3948392ccA68f475141cF8dC5B8045"),
		LimitOrderRegistry:            common.HexToAddress("0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02"),
		LimitOrderRegistryDeployBlock: 19842992,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97"),
			NativeWrappedName:  "NIBI",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                23658063,
		PoolFactory:                common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		TickLens:                   common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		NonfungiblePositionManager: common.HexToAddress("0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050"),
		PositionsNFT:               common.HexToAddress("0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050"),
		PositionsNFTDeployBlock:    23658348,
		UniversalRouter:            common.HexToAddress("0xA7E6cB0A6B1BE8b779022A6aFcb097cF0d3Ff4A2"),
		WrappedNativeAddress:       common.HexToAddress("0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97"),
		WrappedNativeSymbol:        "WNIBI",
		WrappedNativeName:          "Wrapped NIBI",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "NIBI",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Uniswap: []common.Address{common.HexToAddress("0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B"), common.HexToAddress("0xA7E6cB0A6B1BE8b779022A6aFcb097cF0d3Ff4A2")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97"),
		UsdcAddress: common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		},
	},
}
