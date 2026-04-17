package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Pharos Network = Network{
	ChainId:           1672,
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/pharos-logo.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         46,
	LaunchTime:        1777014000,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://pharos.socialscan.io",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "pharos",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x52c48d4213107b20bc583832b0d951fb9ca8f0b0"),
	DefaultToken1:   common.HexToAddress("0x7126c3fef4e6a680eee09fb039b2236f638384b0"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x7126c3fef4e6a680eee09fb039b2236f638384b0")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x7126c3fef4e6a680eee09fb039b2236f638384b0"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x52c48d4213107b20bc583832b0d951fb9ca8f0b0"),
			NativeWrappedName:  "PROS",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{},

	Morpho: MorphoMetadata{
		DeployBlock:                    4202147,
		Morpho:                         common.HexToAddress("0x18573fA18fd17dDfD790B4a5B5b2977aad3b4Efb"),
		Bundler3:                       common.HexToAddress("0x3c90c09F8c5d927a117F681fB924952DbbD99120"),
		VaultV2Factory:                 common.HexToAddress("0x8E01ed1E1A41029b3137FcE9Aa880c0A54827498"),
		MorphoMarketV1AdapterV2Factory: common.HexToAddress("0xe510e1fcC429943cA3455A7bfBD79f0307Cd8403"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x7126c3fef4e6a680eee09fb039b2236f638384b0"),
		WethAddress: common.HexToAddress("0x52c48d4213107b20bc583832b0d951fb9ca8f0b0"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x52c48d4213107b20bc583832b0d951fb9ca8f0b0"),
		},
	},
}
