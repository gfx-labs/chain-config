package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Mantle Network = Network{
	ChainId: 5000,
	NativeCurrency: NativeCurrency{
		Name:     "MNT",
		Symbol:   "MNT",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/mantle-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         30,
	LaunchTime:        1720101600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://mantlescan.xyz/",
			ApiUrl: "https://api.mantlescan.xyz/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x076eb72e74c16b208c692eeab3750978d76b8f28"),
	InternalName:    "mantle",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "mantle",
	},
	DefaultToken0: common.HexToAddress("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"),
	DefaultToken1: common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"), common.HexToAddress("0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"): {}, common.HexToAddress("0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x086F766b336DFB0f705Dc030dB01993b22D81266"), common.HexToAddress("0x076eb72E74C16b208c692EEAB3750978D76B8F28"), common.HexToAddress("0xFc60a4d05ac8C93F62276e046Ad5a098f5C7820a"), common.HexToAddress("0x4cdFc22bF05209de87Ee564746Dc7E5174631d2b"), common.HexToAddress("0x48EF5640E71001CaC842f5627A0bfec1EF09DeB7"), common.HexToAddress("0x8CFee38ab8b8f4BC2ff662E8cc8bDfb0439C9D2C")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0xCF883b5926F1c782308381121BA80234000000cE"),
		LimitOrderRegistry:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		LimitOrderRegistryDeployBlock: 63839894,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
			NativeWrappedName:  "MNT",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                63795918,
		PoolFactory:                common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		Permit2:                    common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		Multicall2:                 common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		TickLens:                   common.HexToAddress("0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF"),
		NonfungiblePositionManager: common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFT:               common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFTDeployBlock:    63796102,
		UniversalRouter:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		WrappedNativeAddress:       common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
		WrappedNativeSymbol:        "WMNT",
		WrappedNativeName:          "Wrapped MNT",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "MNT",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Icecreamswap: []common.Address{common.HexToAddress("0x3FFc2315A992b01dc4B3f79C8EEa1921091Ee24f")},
		Odos:         []common.Address{common.HexToAddress("0xD9F4e85489aDCD0bAF0Cd63b4231c6af58c26745")},
		Okx:          []common.Address{common.HexToAddress("0xcF76984119C7f6ae56fAfE680d39C08278b7eCF4")},
		Openocean:    []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Uniswap:      []common.Address{common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"), common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000005E88410CcDFaDe4a5EfaE4b49562"), common.HexToAddress("0xe3fBE7889A51d62AcD4E056d756F6eA04a3d8D2d")},
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"),
		WethAddress: common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
		"metrom": {
			BlockCreated: 68933021,
			Address:      common.HexToAddress("0x4300d4C410f87c7c1824Cbc2eF67431030106604"),
		},
	},
}
