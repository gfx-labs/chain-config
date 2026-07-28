package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Telos Network = Network{
	ChainId: 40,
	NativeCurrency: NativeCurrency{
		Name:     "Telos",
		Symbol:   "TLOS",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/telos-logo.svg",
	Deprecated:        true,
	LiteChain:         false,
	SortIndex:         32,
	LaunchTime:        1743089303,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://www.teloscan.io/",
		},
	},
	DefaultPool:     common.HexToAddress("0xa89c1c7d0975f1a98442e96e18a292982b12b3cd"),
	InternalName:    "telos",
	TransactionType: "legacy",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"coingecko": "telos",
	},
	DefaultToken0: common.HexToAddress("0xf1815bd50389c46847f0bda824ec8da914045d14"),
	DefaultToken1: common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8"), common.HexToAddress("0xF1815bd50389c46847f0Bda824eC8da914045D14"), common.HexToAddress("0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8"): {}, common.HexToAddress("0xF1815bd50389c46847f0Bda824eC8da914045D14"): {}, common.HexToAddress("0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xa48c8dd45ccf9c1ebf938c63c7cbc7cc259bf207"), common.HexToAddress("0xa89c1c7d0975f1a98442e96e18a292982b12b3cd"), common.HexToAddress("0xd8606afb3f48a13229f52d6251c1aa3e05ad31a1"), common.HexToAddress("0xe8d1c7e1fcfc8cee3daac2819266ea18015829b7"), common.HexToAddress("0xc1db63d4fbb6fbc023ee74480ba53b8906263fbd"), common.HexToAddress("0x6b566fcf6c5342934e7da46d9ee3b705e74736f9"), common.HexToAddress("0x11856fa7683aa9edf44a6ab368ec0cd02b03e6a1"), common.HexToAddress("0x45b47c9207fa8298863991f1b02a5b0e77bab7b6")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0x1a84c0daAf3948392ccA68f475141cF8dC5B8045"),
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

	Morpho:        MorphoMetadata{},
	MarketRouters: MarketRouters{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E"),
		WbtcAddress: common.HexToAddress("0x0555E30da8f98308EdB960aa94C0Db47230d2B9c"),
		UsdcAddress: common.HexToAddress("0xF1815bd50389c46847f0Bda824eC8da914045D14"),
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
		"metrom": {
			BlockCreated: 390899406,
			Address:      common.HexToAddress("0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276"),
		},
	},
}
