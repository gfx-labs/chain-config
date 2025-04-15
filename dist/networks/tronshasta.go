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
		PoolFactory:                common.HexToAddress("0x3CF78A14F90203919B8B4D690E6540745ED8074A"),
		Permit2:                    common.HexToAddress("0x0000000000000000000000000000000000000000"),
		Multicall2:                 common.HexToAddress("0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E"),
		TickLens:                   common.HexToAddress("0xC857346CD83BE79B78F1B10D5FCF158EDC844796"),
		NonfungiblePositionManager: common.HexToAddress("0x358B41818D60CBF40C11FB728C8BC865726F423D"),
		PositionsNFT:               common.HexToAddress("0x358B41818D60CBF40C11FB728C8BC865726F423D"),
		PositionsNFTDeployBlock:    52878030,
		UniversalRouter:            common.HexToAddress("0x0000000000000000000000000000000000000000"),
		WrappedNativeAddress:       common.HexToAddress("0x0000000000000000000000000000000000000000"),
		WrappedNativeSymbol:        "WTRX",
		WrappedNativeName:          "Wrapped TRX",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "TRX",
	},
	Morpho: MorphoMetadata{},
	Token:  TokenMetadata{},
	Contracts: map[string]ChainContract{
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x358B41818D60CBF40C11FB728C8BC865726F423D"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E"),
		},
	},
}
