package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Monad Network = Network{
	ChainId: 143,
	NativeCurrency: NativeCurrency{
		Name:     "Monad",
		Symbol:   "MON",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/monad-logo.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         4,
	LaunchTime:        1764568406,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://monadscan.com",
			ApiUrl: "https://api.etherscan.io/v2/api?chainid=143",
		},
		"monadvision": {
			Url: "https://monadvision.com",
		},
	},
	DefaultPool:     common.HexToAddress("0x659bD0BC4167BA25c62E05656F78043E7eD4a9da"),
	InternalName:    "monad",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "monad",
	},
	DefaultToken0: common.HexToAddress("0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A"),
	DefaultToken1: common.HexToAddress("0x754704Bc059F8C67012fEd69BC8A327a5aafb603"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x754704Bc059F8C67012fEd69BC8A327a5aafb603"), common.HexToAddress("0xe7cd86e13AC4309349F30B3435a9d337750fC82D"), common.HexToAddress("0x00000000efe302beaa2b3e6e1b18d08d69a9012a")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x754704Bc059F8C67012fEd69BC8A327a5aafb603"): {}, common.HexToAddress("0xe7cd86e13AC4309349F30B3435a9d337750fC82D"): {}, common.HexToAddress("0x00000000efe302beaa2b3e6e1b18d08d69a9012a"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x659bD0BC4167BA25c62E05656F78043E7eD4a9da"), common.HexToAddress("0xa00D8Ec3c0cC20E93Cad749695392a0B61fe8Ca3")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 0.4,
	Oku: OkuMetadata{
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A"),
			NativeWrappedName:  "MON",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                29255827,
		PoolFactory:                common.HexToAddress("0x204FAca1764B154221e35c0d20aBb3c525710498"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0xd1b797d92d87b688193a2b976efc8d577d204343"),
		TickLens:                   common.HexToAddress("0xF025e0Fe9E331A0eF05c2ad3C4E9C64b625cda6f"),
		NonfungiblePositionManager: common.HexToAddress("0x7197E214c0b767cFB76Fb734ab638E2c192F4E53"),
		PositionsNFT:               common.HexToAddress("0x7197E214c0b767cFB76Fb734ab638E2c192F4E53"),
		PositionsNFTDeployBlock:    29255879,
		UniversalRouter:            common.HexToAddress("0x0D97Dc33264bfC1c226207428A79b26757fb9dc3"),
		WrappedNativeAddress:       common.HexToAddress("0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A"),
		WrappedNativeSymbol:        "WMON",
		WrappedNativeName:          "Wrapped MON",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "MON",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x754704Bc059F8C67012fEd69BC8A327a5aafb603"),
		WbtcAddress: common.HexToAddress("0x0555E30da8f98308EdB960aa94C0Db47230d2B9c"),
		WethAddress: common.HexToAddress("0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x7197E214c0b767cFB76Fb734ab638E2c192F4E53"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xd1b797d92d87b688193a2b976efc8d577d204343"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
