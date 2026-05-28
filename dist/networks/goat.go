package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Goat Network = Network{
	ChainId:        2345,
	Caip2Namespace: "eip155",

	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/goat-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         29,
	LaunchTime:        1742159744,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.goat.network",
		},
	},
	DefaultPool:     common.HexToAddress("0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef"),
	InternalName:    "goat",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"coingecko": "goat",
	},
	DefaultToken0: common.HexToAddress("0x941508f0b823f1bc40a9beefce5e544e525a94c3"),
	DefaultToken1: common.HexToAddress("0xfe41e7e5cb3460c483ab2a38eb605cda9e2d248e"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x3022b87ac063DE95b1570F46f5e470F8B53112D8"), common.HexToAddress("0xe1ad845d93853fff44990ae0dcecd8575293681e")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x3022b87ac063DE95b1570F46f5e470F8B53112D8"): {}, common.HexToAddress("0xe1ad845d93853fff44990ae0dcecd8575293681e"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xe84dc31691587402e59ba9f9180f8ab02a593d3c"), common.HexToAddress("0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		LimitOrderRegistryDeployBlock: 848591,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xbC10000000000000000000000000000000000000"),
			NativeWrappedName:  "WGBTC",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                848385,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    848408,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0xbC10000000000000000000000000000000000000"),
		WrappedNativeSymbol:        "WGBTC",
		WrappedNativeName:          "Wrapped Goat Bitcoin",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "BTC",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xbC10000000000000000000000000000000000000"),
		UsdcAddress: common.HexToAddress("0x3022b87ac063DE95b1570F46f5e470F8B53112D8"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xbC10000000000000000000000000000000000000"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
