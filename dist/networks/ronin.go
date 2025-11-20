package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Ronin Network = Network{
	ChainId:           2020,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/ronin-logo.svg",
	Deprecated:        true,
	LiteChain:         false,
	SortIndex:         15,
	LaunchTime:        1761966026,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://app.roninchain.com",
		},
	},
	DefaultPool:     common.HexToAddress("0xa7906fd31d53b895897be4528f24282b98c4b114"),
	InternalName:    "ronin",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"),
	DefaultToken1: common.HexToAddress("0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x0b7007c13325c48911f73a2dad5fa5dcbf808adc")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		LimitOrderRegistryDeployBlock: 49623205,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"),
			NativeWrappedName:  "RON",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                49590756,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0x000000000022d473030f116ddee9f6b43ac78ba3"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    49590795,
		UniversalRouter:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		WrappedNativeAddress:       common.HexToAddress("0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"),
		WrappedNativeSymbol:        "WRON",
		WrappedNativeName:          "Wrapped RON",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "RON",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"),
		WethAddress: common.HexToAddress("0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
