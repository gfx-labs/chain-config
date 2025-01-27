package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Hemi Network = Network{
	ChainId:           43111,
	LogoUrl:           "https://assets.oku.trade/chains/hemi-logo.svg",
	SortIndex:         13,
	LaunchTime:        1738569600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.hemi.xyz",
		},
	},
	DefaultPool:   common.HexToAddress("0x3A49cCD3c2A688D0766E087B30A3d27C8997A71c"),
	InternalName:  "hemi",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA"), common.HexToAddress("0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e"), common.HexToAddress("0x6c851F501a3F24E29A8E39a29591cddf09369080")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA"): {}, common.HexToAddress("0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e"): {}, common.HexToAddress("0x6c851F501a3F24E29A8E39a29591cddf09369080"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x3A49cCD3c2A688D0766E087B30A3d27C8997A71c")},
	BlockTimeSeconds: 12,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		LimitOrderRegistryDeployBlock: 964056,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                963965,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    963981,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WbtcAddress: common.HexToAddress("0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3"),
	},
	Contracts: map[string]ChainContract{
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
