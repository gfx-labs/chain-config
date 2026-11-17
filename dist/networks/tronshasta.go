package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Tronshasta Network = Network{
	ChainId: 2494104990,
	NativeCurrency: NativeCurrency{
		Name:     "TRON",
		Symbol:   "TRX",
		Decimals: 6,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/tron-shasta-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/tron.png",
	Deprecated:        true,
	LiteChain:         false,
	SortIndex:         49,
	LaunchTime:        1746055290,
	RpcUrls:           []string{"https://api.shasta.trongrid.io/jsonrpc"},
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://shasta.tronscan.org",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "tronshasta",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	DefaultToken1:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{},
	StablecoinMap:    map[common.Address]struct{}{},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 5,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x0000000000000000000000000000000000000000"),

			Pools:            []common.Address{},
			NativeQuotePools: []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                52878027,
		PoolFactory:                common.HexToAddress("0x3cF78A14f90203919B8b4D690e6540745ed8074A"),
		Permit2:                    common.HexToAddress("0x0000000000000000000000000000000000000000"),
		Multicall2:                 common.HexToAddress("0x8c289c0a8aDa24fc0f27fCBB1200370A52a6675e"),
		TickLens:                   common.HexToAddress("0xc857346cD83Be79B78F1b10d5fcf158edc844796"),
		NonfungiblePositionManager: common.HexToAddress("0x358B41818d60Cbf40c11fb728c8Bc865726F423D"),
		PositionsNFT:               common.HexToAddress("0x358B41818d60Cbf40c11fb728c8Bc865726F423D"),
		PositionsNFTDeployBlock:    52878030,
		UniversalRouter:            common.HexToAddress("0x0000000000000000000000000000000000000000"),
		WrappedNativeAddress:       common.HexToAddress("0x0000000000000000000000000000000000000000"),
		WrappedNativeSymbol:        "WTRX",
		WrappedNativeName:          "Wrapped TRX",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "TRX",
	},

	Morpho:        MorphoMetadata{},
	MarketRouters: MarketRouters{},
	Token:         TokenMetadata{},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x358B41818d60Cbf40c11fb728c8Bc865726F423D"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8c289c0a8aDa24fc0f27fCBB1200370A52a6675e"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
	},
}
