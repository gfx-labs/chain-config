package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Solana Network = Network{
	ChainId: 0,
	NativeCurrency: NativeCurrency{
		Name:     "Solana",
		Symbol:   "SOL",
		Decimals: 9,
	},
	Caip2Namespace:    "solana",
	Caip2Reference:    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/solana-logo.webp",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/sol.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         51,
	LaunchTime:        1584368940,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://solscan.io",
			ApiUrl: "https://public-api.solscan.io",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "solana",
	TransactionType: "solana",
	InitCodeHash:    common.HexToHash("0x0000000000000000000000000000000000000000000000000000000000000000"),
	ExternalId: map[string]string{
		"coingecko": "solana",
	},
	DefaultToken0: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	DefaultToken1: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	BlockAid:      "solana",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{},
	StablecoinMap:    map[common.Address]struct{}{},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 0.4,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{

			Pools:            []common.Address{},
			NativeQuotePools: []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{},

	Morpho:        MorphoMetadata{},
	MarketRouters: MarketRouters{},
	Token:         TokenMetadata{},
	Contracts: map[string]ChainContract{
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
	},
}
