package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Elysium Network = Network{
	ChainId: 99901,
	NativeCurrency: NativeCurrency{
		Name:     "HYPE",
		Symbol:   "HYPE",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/elysium-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/hype.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         5,
	LaunchTime:        1794182400,
	RpcUrls:           []string{"https://rpc-live.elysp.com", "https://rpc-live.boxa.club"},
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://elysium.kinetiq.xyz/explorer",
		},
	},
	DefaultPool:     common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:    "elysium",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0xbA876237B0F021A6c6D852d6c26E107997cC5E81"),
	DefaultToken1:   common.HexToAddress("0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65"): {}},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 0.1,
	Oku: OkuMetadata{
		Router:             common.HexToAddress("0xA89A26c4d81A2cca4d0670F77f0FC88362b72248"),
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xbA876237B0F021A6c6D852d6c26E107997cC5E81"),
			NativeWrappedName:  "HYPE",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		Permit2: common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
	},

	Morpho:        MorphoMetadata{},
	MarketRouters: MarketRouters{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65"),
		WethAddress: common.HexToAddress("0xbA876237B0F021A6c6D852d6c26E107997cC5E81"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
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
			Address:      common.HexToAddress("0xbA876237B0F021A6c6D852d6c26E107997cC5E81"),
		},
	},
}
