package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Sepolia Network = Network{
	ChainId: 11155111,
	NativeCurrency: NativeCurrency{
		Name:     "Sepolia Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/ethereum-logo.webp",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/eth.png",
	Deprecated:        true,
	LiteChain:         true,
	SortIndex:         50,
	LaunchTime:        1655683200,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://sepolia.etherscan.io",
			ApiUrl: "https://api-sepolia.etherscan.io/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "sepolia",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x699CFe8997D647d03325Ef4BFd039d5bb0984A17"),
	DefaultToken1:   common.HexToAddress("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x699CFe8997D647d03325Ef4BFd039d5bb0984A17")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x699CFe8997D647d03325Ef4BFd039d5bb0984A17"): {}},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 12,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        0,
		PoolFactory:                        common.HexToAddress("0x0227628f3F023bb0B980b67D528571c95c6DaC1c"),
		Permit2:                            common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                         common.HexToAddress("0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07"),
		TickLens:                           common.HexToAddress("0xd7f33bcdb21b359c8ee6f0251d30e94832baad07"),
		Quoter:                             common.HexToAddress("0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3"),
		SwapRouter02:                       common.HexToAddress("0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"),
		NFTDescriptor:                      common.HexToAddress("0x3B5E3c5E595D85fbFBC2a42ECC091e183E76697C"),
		NonfungibleTokenPositionDescriptor: common.HexToAddress("0x5bE4DAa6982C69aD20A57F1e68cBcA3D37de6207"),
		NonfungiblePositionManager:         common.HexToAddress("0x1238536071E1c677A632429e3655c799b22cDA52"),
		V3Migrator:                         common.HexToAddress("0x729004182cF005CEC8Bd85df140094b6aCbe8b15"),
		PositionsNFT:                       common.HexToAddress("0x1238536071E1c677A632429e3655c799b22cDA52"),
		PositionsNFTDeployBlock:            0,
		UniversalRouter:                    common.HexToAddress("0xB0C89059d7190EDb17eFF19829cc009cEe923916"),
		WrappedNativeAddress:               common.HexToAddress("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"),
		WrappedNativeSymbol:                "WETH",
		WrappedNativeName:                  "Wrapped Ether",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "ETH",
	},
	Uniswapv4: UniswapV4Metadata{
		DeployBlock:     0,
		PoolManager:     common.HexToAddress("0xE03A1074c86CFeDd5C142C4F04F1a1536e203543"),
		PositionManager: common.HexToAddress("0x429ba70129df741B2Ca2a85BC3A2a3328e5c09b4"),
		UniversalRouter: common.HexToAddress("0xB0C89059d7190EDb17eFF19829cc009cEe923916"),
		Permit2:         common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		DefaultPool:     common.HexToHash("0x0000000000000000000000000000000000000000000000000000000000000000"),
		StateView:       common.HexToAddress("0xE1Dd9c3fA50EDB962E442f60DfBc432e24537E4C"),
	},
	Morpho:        MorphoMetadata{},
	MarketRouters: MarketRouters{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x699CFe8997D647d03325Ef4BFd039d5bb0984A17"),
		WethAddress: common.HexToAddress("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 751532,
			Address:      common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
		},
		"ensUniversalResolver": {
			BlockCreated: 8928790,
			Address:      common.HexToAddress("0xeeeeeeee14d718c2b47d9923deab1335e144eeee"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1238536071E1c677A632429e3655c799b22cDA52"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07"),
		},
	},
}
