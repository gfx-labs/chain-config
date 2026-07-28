package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Avalanche Network = Network{
	ChainId: 43114,
	NativeCurrency: NativeCurrency{
		Name:     "Avalanche",
		Symbol:   "AVAX",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/avalanche-logo.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         17,
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
		"zerion":    "avalanche",
		"debank":    "avax",
		"tenderly":  "true",
		"coingecko": "avalanche",
	},
	DefaultToken0: common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
	DefaultToken1: common.HexToAddress("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"), common.HexToAddress("0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"): {}, common.HexToAddress("0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"): {}},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
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
		UniversalRouter:            common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"),
		WrappedNativeAddress:       common.HexToAddress("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"),
		WrappedNativeSymbol:        "WAVAX",
		WrappedNativeName:          "Wrapped AVAX",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "AVAX",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Enso:         []common.Address{common.HexToAddress("0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf")},
		Icecreamswap: []common.Address{common.HexToAddress("0xa575f37e869e6887564F87c07e2885e08D542C4a")},
		Kyberswap:    []common.Address{common.HexToAddress("0x6131B5fae19EA4f9D964eAc0408E4408b66337b5")},
		Odos:         []common.Address{common.HexToAddress("0x88de50B233052e4Fb783d4F6db78Cc34fEa3e9FC")},
		Okx:          []common.Address{common.HexToAddress("0xa94Fcf9fc56a864f8DE51e6315aee5863AD63C91")},
		Openocean:    []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Uniswap:      []common.Address{common.HexToAddress("0x4Dae2f939ACf50408e13d58534Ff8c2776d45265"), common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"), common.HexToAddress("0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0x6De411A14aEaafB3f23697A4472a4D4ed275Ac0f")},
	},
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
