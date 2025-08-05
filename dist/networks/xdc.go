package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Xdc Network = Network{
	ChainId:           50,
	LogoUrl:           "https://assets.oku.trade/chains/xdc-logo.png",
	SortIndex:         15,
	LaunchTime:        1746453600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://xdcscan.com",
		},
	},
	DefaultPool:     common.HexToAddress("0x1e5aec37f6df6653c3342df75edd92beb3fb9846"),
	InternalName:    "xdc",
	TransactionType: "legacy",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x2a8e898b6242355c290e1f4fc966b8788729a4d4"),
	DefaultToken1:   common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x2a8e898b6242355c290e1f4fc966b8788729a4d4"), common.HexToAddress("0xd4b5f10d61916bd6e0860144a91ac658de8a1437")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x2a8e898b6242355c290e1f4fc966b8788729a4d4"): {}, common.HexToAddress("0xd4b5f10d61916bd6e0860144a91ac658de8a1437"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x1e5aec37f6df6653c3342df75edd92beb3fb9846"), common.HexToAddress("0x9149b4e074f101ca0514b1d30fc78f181e21d409")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc"),
		LimitOrderRegistryDeployBlock: 87231348,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
			NativeWrappedName:  "XDC",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                87230664,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    87230700,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
		WrappedNativeSymbol:        "WXDC",
		WrappedNativeName:          "Wrapped XDC",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "XDC",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
		UsdcAddress: common.HexToAddress("0x2a8e898b6242355c290e1f4fc966b8788729a4du4"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0b1795cca8e4ec4df02346a082df54d437f8d9af"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x951857744785e80e2de051c32ee7b25f9c458c42"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
