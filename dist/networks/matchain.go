package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Matchain Network = Network{
	ChainId: 698,
	NativeCurrency: NativeCurrency{
		Name:     "BNB",
		Symbol:   "BNB",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/matchain-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/bnb.png",
	Deprecated:        true,
	LiteChain:         false,
	SortIndex:         25,
	LaunchTime:        1754106070,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://matchscan.io",
		},
	},
	DefaultPool:     common.HexToAddress("0x166D111Ce22f6cb0F315CA1d706B61adcF0ea265"),
	InternalName:    "matchain",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1:   common.HexToAddress("0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7"), common.HexToAddress("0xa0e73e30945b80010503e68e53abfd0b6b6a6ed9")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7"): {}, common.HexToAddress("0xa0e73e30945b80010503e68e53abfd0b6b6a6ed9"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x166D111Ce22f6cb0F315CA1d706B61adcF0ea265"), common.HexToAddress("0xa784d5e50407298316219cab4ff4271d15596f8e"), common.HexToAddress("0x5aedf884d4c8a469128fca1c2f8cd7fef127d732"), common.HexToAddress("0xacb767305247c1a44ee24c97dd32c052cbda1f38"), common.HexToAddress("0x6b213c3915308a453dc4da93f8c664717c6fc41e"), common.HexToAddress("0x2128e934843ad52d42b5af7288dcfa7b0598d035")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		LimitOrderRegistryDeployBlock: 37616150,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "WBNB",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                37612670,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    37613469,
		UniversalRouter:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WBNB",
		WrappedNativeName:          "Wrapped BNB",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "BNB",
	},

	Morpho:        MorphoMetadata{},
	MarketRouters: MarketRouters{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		UsdcAddress: common.HexToAddress("0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
