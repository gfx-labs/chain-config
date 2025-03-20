package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Telos Network = Network{
	ChainId:           40,
	LogoUrl:           "https://assets.oku.trade/chains/telos-logo.svg",
	SortIndex:         13,
	LaunchTime:        1738632669,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://www.teloscan.io/",
		},
	},
	DefaultPool:   common.HexToAddress("0x2E2F83DF7061561C4a29bD155B8f65674bFa31C9"),
	InternalName:  "telos",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x8D97Cea50351Fb4329d591682b148D43a0C3611b"),
	DefaultToken1: common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x8D97Cea50351Fb4329d591682b148D43a0C3611b")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x8D97Cea50351Fb4329d591682b148D43a0C3611b"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x2E2F83DF7061561C4a29bD155B8f65674bFa31C9")},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		LimitOrderRegistryDeployBlock: 386645006,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
			NativeWrappedName:  "TLOS",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                386633562,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    386635939,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
		WrappedNativeSymbol:        "wTLOS",
		WrappedNativeName:          "Wrapped TLOS",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "TLOS",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
		WbtcAddress: common.HexToAddress("0x0555E30da8f98308EdB960aa94C0Db47230d2B9c"),
		UsdcAddress: common.HexToAddress("0x8D97Cea50351Fb4329d591682b148D43a0C3611b"),
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
			Address:      common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
