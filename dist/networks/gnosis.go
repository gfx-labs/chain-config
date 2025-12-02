package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Gnosis Network = Network{
	ChainId:           100,
	LogoUrl:           "https://assets.oku.trade/chains/gnosis-logo.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         18,
	LaunchTime:        1725890400,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://gnosisscan.io",
			ApiUrl: "https://api.gnosisscan.io/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9"),
	InternalName:    "gnosis",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":   "xdai",
		"cowswap":  "xdai",
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1"),
	DefaultToken1: common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x4ecaba5870353805a9f068101a40e0f32ed605c6"), common.HexToAddress("0x2a22f9c3b484c3629090feed35f17ff8f88f76f0"), common.HexToAddress("0xddafbb505ad214d7b80b1f830fccc89b60fb7a83"), common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x4ecaba5870353805a9f068101a40e0f32ed605c6"): {}, common.HexToAddress("0x2a22f9c3b484c3629090feed35f17ff8f88f76f0"): {}, common.HexToAddress("0xddafbb505ad214d7b80b1f830fccc89b60fb7a83"): {}, common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x909e36aB6eA5DB6Fd71876Fe319328BAe4DfeA29"), common.HexToAddress("0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9"), common.HexToAddress("0x8Fb50102bC76798C13a68de3bd5F1974feDF48CD"), common.HexToAddress("0xa180bEDd56438C596C9ACed94D03A3001C5BB83C"), common.HexToAddress("0xE9E1793954f32D880Ec0B2186E96d88e2b870e40"), common.HexToAddress("0xbb98d4e20b054ede4c4143ecee59368f88ecbbe4")},
	BlockTimeSeconds: 5,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		LimitOrderRegistryDeployBlock: 35719277,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"),
			NativeWrappedName:  "xDAI",
			Pools:              []common.Address{common.HexToAddress("0x5a2fb66e66b2af7f1c2f71c6c695492faab2e587")},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                27416614,
		PoolFactory:                common.HexToAddress("0xe32F7dD7e3f098D518ff19A22d5f028e076489B1"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x4dfa9a980efE4802E969AC33968E3d6E59B8a19e"),
		TickLens:                   common.HexToAddress("0x8fe3D346B53dCA838B228e0e53aCdBED5DEC70Dc"),
		NonfungiblePositionManager: common.HexToAddress("0xAE8fbE656a77519a7490054274910129c9244FA3"),
		PositionsNFT:               common.HexToAddress("0xAE8fbE656a77519a7490054274910129c9244FA3"),
		PositionsNFTDeployBlock:    27416645,
		UniversalRouter:            common.HexToAddress("0x75FC67473A91335B5b8F8821277262a13B38c9b3"),
		WrappedNativeAddress:       common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"),
		WrappedNativeSymbol:        "WXDAI",
		WrappedNativeName:          "Wrapped XDAI",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "XDAI",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
		WethAddress: common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xAE8fbE656a77519a7490054274910129c9244FA3"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"metrom": {
			BlockCreated: 38018174,
			Address:      common.HexToAddress("0x9430990117A7451e3d0a3d89796FC0b0c294Da9c"),
		},
	},
}
