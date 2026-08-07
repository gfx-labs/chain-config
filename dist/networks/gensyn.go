package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Gensyn Network = Network{
	ChainId: 685689,
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/gensyn-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/eth.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         28,
	LaunchTime:        1773970570,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://gensyn-mainnet.explorer.alchemy.com",
		},
	},
	DefaultPool:     common.HexToAddress("0xF3F77fb85A74f49a3DCb082347D7FEFa8aBA596f"),
	InternalName:    "gensyn",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1:   common.HexToAddress("0x5b32c997211621d55a89Cc5abAF1cC21F3A6ddF5"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x5b32c997211621d55a89Cc5abAF1cC21F3A6ddF5")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x5b32c997211621d55a89Cc5abAF1cC21F3A6ddF5"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xF3F77fb85A74f49a3DCb082347D7FEFa8aBA596f"), common.HexToAddress("0x3e228359c8ce20fae623e54b438c74420ce30e5b"), common.HexToAddress("0xf17e769b556f7cc4f02e64cdeb2a43d5ddb54bc2")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		Router: common.HexToAddress("0x47A708142C348e2B4260cCEf3abC2Aff03486eBc"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                6184635,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    6184665,
		UniversalRouter:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{
		DeployBlock:                    7520470,
		Morpho:                         common.HexToAddress("0x8c45B34999883FF4B47cD3be095D585682cd9227"),
		Bundler3:                       common.HexToAddress("0xE09314FE5Fc41FEc8f3e6042085dD3CeE24c877c"),
		VaultV2Factory:                 common.HexToAddress("0xe2558155AEcEF57cAADB98e39b0538ab0ae95693"),
		MorphoMarketV1AdapterV2Factory: common.HexToAddress("0x155134544AE2Ec3AB23034BF620538482C5E3c40"),
		MorphoMarketV1RegistryV2:       common.HexToAddress("0x53A687347c822D222058d3E99a566a3D3c0638e1"),
	},
	MarketRouters: MarketRouters{
		Icecreamswap: []common.Address{common.HexToAddress("0x9E6d21E759A7A288b80eef94E4737D313D31c13f")},
		Uniswap:      []common.Address{common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"), common.HexToAddress("0x807F4E281B7A3B324825C64ca53c69F0b418dE40")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
