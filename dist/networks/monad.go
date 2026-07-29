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
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/monad.png",
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
		UniversalRouter:            common.HexToAddress("0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7"),
		WrappedNativeAddress:       common.HexToAddress("0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A"),
		WrappedNativeSymbol:        "WMON",
		WrappedNativeName:          "Wrapped MON",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "MON",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Binance:      []common.Address{common.HexToAddress("0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5")},
		Enso:         []common.Address{common.HexToAddress("0xCfBAa9Cfce952Ca4F4069874fF1Df8c05e37a3c7")},
		Icecreamswap: []common.Address{common.HexToAddress("0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d")},
		Kyberswap:    []common.Address{common.HexToAddress("0x6131B5fae19EA4f9D964eAc0408E4408b66337b5")},
		Native:       []common.Address{common.HexToAddress("0x332e56e0b91eC3F08553eC7964E19CC041A38672")},
		Okx:          []common.Address{common.HexToAddress("0x7A7AD9aa93cd0A2D0255326E5Fb145CEc14997FF")},
		Openocean:    []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Uniswap:      []common.Address{common.HexToAddress("0x75FC67473A91335B5b8F8821277262a13B38c9b3"), common.HexToAddress("0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7"), common.HexToAddress("0xfE31F71C1b106EAc32F1A19239c9a9A72ddfb900")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0xfb78Fcae443eB423b59B8C186518c5dF94416344")},
	},
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
