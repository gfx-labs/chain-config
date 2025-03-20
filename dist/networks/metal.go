package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Metal Network = Network{
	ChainId:           1750,
	LogoUrl:           "https://assets.oku.trade/chains/metal-logo.png",
	SortIndex:         15,
	LaunchTime:        1733882663,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://explorer.metall2.com",
			ApiUrl: "https://explorer.metall2.com/api",
		},
	},
	DefaultPool:   common.HexToAddress("0xC06B6d6242E84c96AeE28C7FcfE48D2c9909e37B"),
	InternalName:  "metal",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0x51E85d70944256710cb141847F1a04f568C1Db0e"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x51E85d70944256710cb141847F1a04f568C1Db0e"), common.HexToAddress("0xb91CFCcA485C6E40E3bC622f9BFA02a8ACdEeBab")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x51E85d70944256710cb141847F1a04f568C1Db0e"): {}, common.HexToAddress("0xb91CFCcA485C6E40E3bC622f9BFA02a8ACdEeBab"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xC06B6d6242E84c96AeE28C7FcfE48D2c9909e37B")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		LimitOrderRegistryDeployBlock: 10815725,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                10810498,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    10810692,
		UniversalRouter:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	},
	Contracts: map[string]ChainContract{
		"gasPriceOracle": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x420000000000000000000000000000000000000F"),
		},
		"l1Block": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000015"),
		},
		"l2CrossDomainMessenger": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000007"),
		},
		"l2Erc721Bridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000014"),
		},
		"l2StandardBridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000010"),
		},
		"l2ToL1MessagePasser": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000016"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
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
	},
}
