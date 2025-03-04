package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Lightlink Network = Network{
	ChainId:           1890,
	LogoUrl:           "https://assets.oku.trade/chains/lightlink-logo.svg",
	SortIndex:         13,
	LaunchTime:        1741485513,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://phoenix.lightlink.io",
		},
	},
	DefaultPool:   common.HexToAddress("0x1125452469E9B9A36FE69249309fCe8925C3eEDa"),
	InternalName:  "lightlink",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73"),
	DefaultToken1: common.HexToAddress("0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd"), common.HexToAddress("0x808d7c71ad2ba3FA531b068a2417C63106BC0949")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd"): {}, common.HexToAddress("0x808d7c71ad2ba3FA531b068a2417C63106BC0949"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		LimitOrderRegistryDeployBlock: 131407726,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73"),
			NativeWrappedName:  "WETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                131405097,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0x807F4E281B7A3B324825C64ca53c69F0b418dE40"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    131405537,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73"),
		UsdcAddress: common.HexToAddress("0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd"),
		WbtcAddress: common.HexToAddress("0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67"),
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
			Address:      common.HexToAddress("0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73"),
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
