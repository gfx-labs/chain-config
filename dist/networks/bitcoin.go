package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Bitcoin Network = Network{
	ChainId: 0,
	NativeCurrency: NativeCurrency{
		Name:     "Bitcoin",
		Symbol:   "BTC",
		Decimals: 8,
	},
	Caip2Namespace:    "bip122",
	Caip2Reference:    "000000000019d6689c085ae165831e93",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/bitcoin-logo.webp",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         1000,
	LaunchTime:        1231006505,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://mempool.space",
			ApiUrl: "https://mempool.space/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "bitcoin",
	TransactionType: "bitcoin",
	InitCodeHash:    common.HexToHash("0x0000000000000000000000000000000000000000000000000000000000000000"),
	ExternalId: map[string]string{
		"coingecko": "bitcoin",
	},
	DefaultToken0: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	DefaultToken1: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	BlockAid:      "bitcoin",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{},
	StablecoinMap:    map[common.Address]struct{}{},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 600,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{

			Pools:            []common.Address{},
			NativeQuotePools: []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{},

	Morpho: MorphoMetadata{},
	Token:  TokenMetadata{},
	Contracts: map[string]ChainContract{
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
	},
}
