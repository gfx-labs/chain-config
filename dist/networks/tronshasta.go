package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Tronshasta Network = Network{
	ChainId:           2494104990,
	LogoUrl:           "https://assets.oku.trade/chains/tron.png",
	SortIndex:         15,
	LaunchTime:        1746055290,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://shasta.tronscan.org",
		},
	},
	DefaultPool:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:  "tronshasta",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	DefaultToken1: common.HexToAddress("0x0000000000000000000000000000000000000000"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{},
	StablecoinMap:    map[common.Address]struct{}{},
	Watchlist:        []common.Address{},
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
		PoolFactory:                "0x413cf78a14f90203919b8b4d690e6540745ed8074a",
		Permit2:                    common.HexToAddress("0x0000000000000000000000000000000000000000"),
		Multicall2:                 "0x418c289c0a8ada24fc0f27fcbb1200370a52a6675e",
		TickLens:                   "0x41c857346cd83be79b78f1b10d5fcf158edc844796",
		NonfungiblePositionManager: "0x41358b41818d60cbf40c11fb728c8bc865726f423d",
		PositionsNFT:               "0x41358b41818d60cbf40c11fb728c8bc865726f423d",
		PositionsNFTDeployBlock:    52878030,
		UniversalRouter:            common.HexToAddress("0x0000000000000000000000000000000000000000"),
		WrappedNativeAddress:       common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
		WrappedNativeSymbol:        "WBTCN",
		WrappedNativeName:          "Wrapped Bittronshasta",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "BTCN",
	},
	Morpho: MorphoMetadata{},
	Token:  TokenMetadata{},
	Contracts: map[string]ChainContract{
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x41358b41818d60cbf40c11fb728c8bc865726f423d"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x418c289c0a8ada24fc0f27fcbb1200370a52a6675e"),
		},
	},
}
