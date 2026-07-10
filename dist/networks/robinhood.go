package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Robinhood Network = Network{
	ChainId: 4663,
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/robinhood-logo.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         47,
	LaunchTime:        0,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://robinhoodchain.blockscout.com",
			ApiUrl: "https://robinhoodchain.blockscout.com/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x69BfaF19C9f377BB306a89aEd9F6B07e2c1a8d9a"),
	InternalName:    "robinhood",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"),
	DefaultToken1:   common.HexToAddress("0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168"), common.HexToAddress("0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168"): {}, common.HexToAddress("0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"): {}},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		PoolFactory:                common.HexToAddress("0x1f7d7550B1b028f7571E69A784071F0205FD2EfA"),
		NonfungiblePositionManager: common.HexToAddress("0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3"),
		PositionsNFT:               common.HexToAddress("0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3"),
		WrappedNativeAddress:       common.HexToAddress("0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"),
		},
	},
}
