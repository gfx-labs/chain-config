package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Linea Network = Network{
	ChainId: 59144,
	NativeCurrency: NativeCurrency{
		Name:     "Linea Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/linea-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/eth.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         19,
	LaunchTime:        1713362400,
	SafeReorgDistance: 100,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://lineascan.build",
			ApiUrl: "https://api.lineascan.build/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xc48622190a6b91d64ee7459c62fade9abe61b48a"),
	InternalName:    "linea",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":    "linea",
		"tenderly":  "true",
		"coingecko": "linea",
	},
	DefaultToken0: common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"),
	DefaultToken1: common.HexToAddress("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"),
	BlockAid:      "linea",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"), common.HexToAddress("0xa219439258ca9da29e9cc4ce5596924745e12b93"), common.HexToAddress("0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"): {}, common.HexToAddress("0xa219439258ca9da29e9cc4ce5596924745e12b93"): {}, common.HexToAddress("0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xc48622190a6b91d64ee7459c62fade9abe61b48a"), common.HexToAddress("0x5856edf9212bdcec74301ec78afc573b62d6a283"), common.HexToAddress("0xf8296e87192aa71158bd9ba323fc2e1d9a047aa2"), common.HexToAddress("0x93f626d0e471279bd8d1420959cc881bdacfdab1"), common.HexToAddress("0xfe64636280a98d21701a607e6a52ed5d62bacfe4"), common.HexToAddress("0xf2d33caaedc4daab2c1f0bfc7cccb03a9acf3e4e"), common.HexToAddress("0xe848d169080a0022039fcaefc19263c410fe3520"), common.HexToAddress("0x30b44df5010f8b2a4d4e566a2ba638496e76a8fc"), common.HexToAddress("0x42a72c7fbb355b2cfe08f8716595f3f3509b3bea")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0x47A708142C348e2B4260cCEf3abC2Aff03486eBc"),
		LimitOrderRegistry:            common.HexToAddress("0x63c8527f670d4eb3401c80c5905ceca8727f1e74"),
		LimitOrderRegistryDeployBlock: 3610379,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                25248,
		PoolFactory:                common.HexToAddress("0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9"),
		Multicall2:                 common.HexToAddress("0x93e253D101519578A8DF0BCe2A43D8292BFb3A1F"),
		TickLens:                   common.HexToAddress("0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9"),
		NonfungiblePositionManager: common.HexToAddress("0x4615C383F85D0a2BbED973d83ccecf5CB7121463"),
		PositionsNFT:               common.HexToAddress("0x4615C383F85D0a2BbED973d83ccecf5CB7121463"),
		PositionsNFTDeployBlock:    25264,
		UniversalRouter:            common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"),
		WrappedNativeAddress:       common.HexToAddress("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Binance:      []common.Address{common.HexToAddress("0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5")},
		Enso:         []common.Address{common.HexToAddress("0xA146d46823f3F594B785200102Be5385CAfCE9B5")},
		Icecreamswap: []common.Address{common.HexToAddress("0x2fF506ed9729580EF8Bf04429614beB1baE5F76D")},
		Kyberswap:    []common.Address{common.HexToAddress("0x6131B5fae19EA4f9D964eAc0408E4408b66337b5")},
		Odos:         []common.Address{common.HexToAddress("0x2d8879046f1559E53eb052E949e9544bCB72f414")},
		Okx:          []common.Address{common.HexToAddress("0x2E1Dee213BA8d7af0934C49a23187BabEACa8764")},
		Openocean:    []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Uniswap:      []common.Address{common.HexToAddress("0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a"), common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"), common.HexToAddress("0xD7c7D7F18dD5388D5217c9696C7e799fCd75c6bD")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0x1816eA2150e74Eb3068A4e3809E461Cc6977A7D7")},
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"),
		WethAddress: common.HexToAddress("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"),
		WbtcAddress: common.HexToAddress("0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"ensRegistry": {
			BlockCreated: 6682888,
			Address:      common.HexToAddress("0x50130b669B28C339991d8676FA73CF122a121267"),
		},
		"ensUniversalResolver": {
			BlockCreated: 22222151,
			Address:      common.HexToAddress("0x4D41762915F83c76EcaF6776d9b08076aA32b492"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x63c8527f670d4eb3401c80c5905ceca8727f1e74"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4615C383F85D0a2BbED973d83ccecf5CB7121463"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9A27B81b034e585be9d366DEB7aBAD036BE50845"),
		},
	},
}
