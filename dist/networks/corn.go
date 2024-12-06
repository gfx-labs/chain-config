package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Corn Network = Network{
	ChainId:           21000000,
	LogoUrl:           "https://assets.oku.trade/corn-logo.png",
	SortIndex:         15,
	LaunchTime:        1733882663,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://cornscan.io",
			ApiUrl: "https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api",
		},
	},
	DefaultPool:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:  "corn",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
	DefaultToken1: common.HexToAddress("0xDF0B24095e15044538866576754F3C964e902Ee6"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xDF0B24095e15044538866576754F3C964e902Ee6")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xDF0B24095e15044538866576754F3C964e902Ee6"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 35,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		LimitOrderRegistryDeployBlock: 10948,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
			NativeWrappedName:  "BTCN",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                10878,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    10901,
		UniversalRouter:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		WrappedNativeAddress:       common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
		WrappedNativeSymbol:        "WBTCN",
		WrappedNativeName:          "Wrapped Bitcorn",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "BTCN",
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
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
			Address:      common.HexToAddress("0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
