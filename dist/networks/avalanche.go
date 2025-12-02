package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Avalanche Network = Network{
	ChainId:           43114,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/avalanche-logo.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         15,
	LaunchTime:        1761794290,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://snowtrace.io",
			ApiUrl: "https://api.snowtrace.io",
		},
	},
	DefaultPool:     common.HexToAddress("0xfAe3f424a0a47706811521E3ee268f00cFb5c45E"),
	InternalName:    "avalanche",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":   "avalanche",
		"debank":   "avax",
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
	DefaultToken1: common.HexToAddress("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"), common.HexToAddress("0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"): {}, common.HexToAddress("0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
			NativeWrappedName:  "AVAX",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                27832972,
		PoolFactory:                common.HexToAddress("0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2"),
		TickLens:                   common.HexToAddress("0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950"),
		NonfungiblePositionManager: common.HexToAddress("0x655C406EBFa14EE2006250925e54ec43AD184f8B"),
		PositionsNFT:               common.HexToAddress("0x655C406EBFa14EE2006250925e54ec43AD184f8B"),
		PositionsNFTDeployBlock:    27833025,
		UniversalRouter:            common.HexToAddress("0x94b75331ae8d42c1b61065089b7d48fe14aa73b7"),
		WrappedNativeAddress:       common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
		WrappedNativeSymbol:        "WAVAX",
		WrappedNativeName:          "Wrapped AVAX",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "AVAX",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x655C406EBFa14EE2006250925e54ec43AD184f8B"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2"),
		},
	},
}
