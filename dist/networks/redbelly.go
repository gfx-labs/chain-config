package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Redbelly Network = Network{
	ChainId:        151,
	Caip2Namespace: "eip155",

	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/redbelly-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         27,
	LaunchTime:        1741362479,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://redbelly.routescan.io",
			ApiUrl: "https://api.routescan.io/v2/network/mainnet/evm/151/etherscan/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x1f1bda1fe18aedf468abe36ed66eaf44aa6c490b"),
	InternalName:    "redbelly",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"coingecko": "redbelly-network",
	},
	DefaultToken0: common.HexToAddress("0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076"),
	DefaultToken1: common.HexToAddress("0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06"), common.HexToAddress("0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B"), common.HexToAddress("0x420e07cec544b8A52B7d0c62b1C9BF990cc58083"), common.HexToAddress("0xE08DED898D7782B085cD240d7B234063696765aD")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06"): {}, common.HexToAddress("0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B"): {}, common.HexToAddress("0x420e07cec544b8A52B7d0c62b1C9BF990cc58083"): {}, common.HexToAddress("0xE08DED898D7782B085cD240d7B234063696765aD"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xcDe3554d179b5B7ABB3ddFeE1CBC7B98b3f2E380"), common.HexToAddress("0x2ea9dacb203d36b51b164a3d25d69d1c8198eec1"), common.HexToAddress("0x1f1bda1fe18aedf468abe36ed66eaf44aa6c490b")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 5,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		LimitOrderRegistryDeployBlock: 2286099,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076"),
			NativeWrappedName:  "RBNT",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                2286057,
		PoolFactory:                common.HexToAddress("0x75FC67473A91335B5b8F8821277262a13B38c9b3"),
		Permit2:                    common.HexToAddress("0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf"),
		Multicall2:                 common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		TickLens:                   common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		NonfungiblePositionManager: common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFT:               common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFTDeployBlock:    2286074,
		UniversalRouter:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		WrappedNativeAddress:       common.HexToAddress("0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076"),
		WrappedNativeSymbol:        "WRBNT",
		WrappedNativeName:          "Wrapped RBNT",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "RBNT",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076"),
		UsdcAddress: common.HexToAddress("0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xEe43BBcC6340038130681F98d855E416F7F728e9"),
		},
	},
}
