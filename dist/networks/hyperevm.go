package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Hyperevm Network = Network{
	ChainId:           999,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/hyperevm-logo.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         15,
	LaunchTime:        1739731200,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://hyperevmscan.io",
		},
	},
	DefaultPool:     common.HexToAddress("0x6c9a33e3b592c0d65b3ba59355d5be0d38259285"),
	InternalName:    "hyperevm",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x5555555555555555555555555555555555555555"),
	DefaultToken1:   common.HexToAddress("0xb88339cb7199b77e23db6e890353e22632ba630f"),
	BlockAid:        "HyperEVM",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xb88339cb7199b77e23db6e890353e22632ba630f"), common.HexToAddress("0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xb88339cb7199b77e23db6e890353e22632ba630f"): {}, common.HexToAddress("0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 1,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x5555555555555555555555555555555555555555"),
			NativeWrappedName:  "WHYPE",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x5555555555555555555555555555555555555555"),
	},
	Contracts: map[string]ChainContract{
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5555555555555555555555555555555555555555"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
