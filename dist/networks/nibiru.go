package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Nibiru Network = Network{
	ChainId:           6900,
	LogoUrl:           "https://assets.oku.trade/chains/nibiru-logo.svg",
	SortIndex:         15,
	LaunchTime:        1746663816,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://nibiscan.io",
		},
	},
	DefaultPool:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:  "nibiru",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b"),
	DefaultToken1: common.HexToAddress("0x1429B38e58b97de646ACd65fdb8a4502c2131484"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		LimitOrderRegistryDeployBlock: 19842992,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x1429B38e58b97de646ACd65fdb8a4502c2131484"),
			NativeWrappedName:  "NIBI",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                19842247,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0x807F4E281B7A3B324825C64ca53c69F0b418dE40"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    19842447,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0x1429B38e58b97de646ACd65fdb8a4502c2131484"),
		WrappedNativeSymbol:        "WNIBI",
		WrappedNativeName:          "Wrapped NIBI",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "NIBI",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x1429B38e58b97de646ACd65fdb8a4502c2131484"),
		UsdcAddress: common.HexToAddress("0x0829F361A05D993d5CEb035cA6DF3446b060970b"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1429B38e58b97de646ACd65fdb8a4502c2131484"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
