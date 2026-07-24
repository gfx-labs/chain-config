package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Zcash Network = Network{
	ChainId: 0,
	NativeCurrency: NativeCurrency{
		Name:     "Zcash",
		Symbol:   "ZEC",
		Decimals: 8,
	},
	Caip2Namespace:    "bip122",
	Caip2Reference:    "00040fe8ec8471911baa1db1266ea15d",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/zcash-logo.webp",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         1002,
	LaunchTime:        1477641360,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://blockchair.com/zcash",
			ApiUrl: "https://api.blockchair.com/zcash",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "zcash",
	TransactionType: "zcash",
	InitCodeHash:    common.HexToHash("0x0000000000000000000000000000000000000000000000000000000000000000"),
	ExternalId: map[string]string{
		"coingecko": "zcash",
	},
	DefaultToken0: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	DefaultToken1: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{},
	StablecoinMap:    map[common.Address]struct{}{},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 75,
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
