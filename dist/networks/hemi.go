package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Hemi Network = Network{
	ChainId: 43111,
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/hemi-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/eth.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         24,
	LaunchTime:        1741901593,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.hemi.xyz",
		},
	},
	DefaultPool:     common.HexToAddress("0x95a8b611e90de2b682267e2f00c8dff71909298a"),
	InternalName:    "hemi",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"coingecko": "hemi",
	},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA"), common.HexToAddress("0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e"), common.HexToAddress("0x6c851F501a3F24E29A8E39a29591cddf09369080"), common.HexToAddress("0x7a06c4aef988e7925575c50261297a946ad204a8")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA"): {}, common.HexToAddress("0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e"): {}, common.HexToAddress("0x6c851F501a3F24E29A8E39a29591cddf09369080"): {}, common.HexToAddress("0x7a06c4aef988e7925575c50261297a946ad204a8"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x95a8b611e90de2b682267e2f00c8dff71909298a"), common.HexToAddress("0x47932f4a77cde549bf328bb33caae7f413b62612"), common.HexToAddress("0x875c1efa41a868fbb4274c3e06afc14b597e8828"), common.HexToAddress("0x0bbd621fb38f6ddc16b0089ebbeade8db9a8d354"), common.HexToAddress("0xc47f921d413787abf5c98d977e52062de0a3a6d4"), common.HexToAddress("0x0ec5aa557d5b2a8702ad43d253415d11f95364c0")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 12,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0x7B060A98BA242Ae42D6027a60937787eBe33DEBe"),
		LimitOrderRegistry:            common.HexToAddress("0xcd7f266E3C0D0771897aAF74BEB38072D66402A0"),
		LimitOrderRegistryDeployBlock: 1293765,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                1293598,
		PoolFactory:                common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		TickLens:                   common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		NonfungiblePositionManager: common.HexToAddress("0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050"),
		PositionsNFT:               common.HexToAddress("0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050"),
		PositionsNFTDeployBlock:    1293633,
		UniversalRouter:            common.HexToAddress("0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Icecreamswap: []common.Address{common.HexToAddress("0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d")},
		Uniswap:      []common.Address{common.HexToAddress("0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B"), common.HexToAddress("0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WbtcAddress: common.HexToAddress("0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcd7f266E3C0D0771897aAF74BEB38072D66402A0"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"metrom": {
			BlockCreated: 1838171,
			Address:      common.HexToAddress("0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276"),
		},
	},
}
