package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Matchain Network = Network{
	ChainId:           698,
	LogoUrl:           "https://assets.oku.trade/chains/matchain-logo.png",
	SortIndex:         15,
	LaunchTime:        1754106070,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://matchscan.io",
		},
	},
	DefaultPool:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:  "matchain",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0x97eec1c29f745dC7c267F90292AA663d997a601D"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x97eec1c29f745dC7c267F90292AA663d997a601D"), common.HexToAddress("0xB6dc6C8b71e88642cEAD3be1025565A9eE74d1C6")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x97eec1c29f745dC7c267F90292AA663d997a601D"): {}, common.HexToAddress("0xB6dc6C8b71e88642cEAD3be1025565A9eE74d1C6"): {}},
	Watchlist:        []common.Address{},
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
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		UsdcAddress: common.HexToAddress("0x97eec1c29f745dC7c267F90292AA663d997a601D"),
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
