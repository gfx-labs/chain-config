package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Unichain Network = Network{
	ChainId: 130,
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/unichain-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/eth.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         18,
	LaunchTime:        1750384728,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://uniscan.xyz",
			ApiUrl: "https://api.uniscan.xyz/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x8927058918e3CFf6F55EfE45A58db1be1F069E49"),
	InternalName:    "unichain",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "unichain",
	},
	DefaultToken0: common.HexToAddress("0x078d782b760474a361dda0af3839290b0ef57ad6"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	BlockAid:      "unichain",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x078d782b760474a361dda0af3839290b0ef57ad6"), common.HexToAddress("0x9151434b16b9763660705744891fa906f660ecc5"), common.HexToAddress("0x20cab320a855b39f724131c69424240519573f81")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x078d782b760474a361dda0af3839290b0ef57ad6"): {}, common.HexToAddress("0x9151434b16b9763660705744891fa906f660ecc5"): {}, common.HexToAddress("0x20cab320a855b39f724131c69424240519573f81"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x8927058918e3CFf6F55EfE45A58db1be1F069E49"), common.HexToAddress("0x501174E799c8E8FC889Aeb79426d556b1916462d"), common.HexToAddress("0x1D6ae37DB0e36305019fB3d4bad2750B8784aDF9"), common.HexToAddress("0xe92c7cc875245A86fAf088fEbE4614E1E318BeF5"), common.HexToAddress("0x65081CB48d74A32e9CCfED75164b8c09972DBcF1")},
	V4Watchlist:      []common.Hash{common.HexToHash("0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9"), common.HexToHash("0x04b7dd024db64cfbe325191c818266e4776918cd9eaf021c26949a859e654b16"), common.HexToHash("0xbd0f3a7cf4cf5f48ebe850474c8c0012fa5fe893ab811a8b8743a52b83aa8939"), common.HexToHash("0x51f9d63dda41107d6513047f7ed18133346ce4f3f4c4faf899151d8939b3496e"), common.HexToHash("0x05dbb214bd7b9461f9c2f6690b612629b65b9f81d7312fdd3e552d2dda85f771"), common.HexToHash("0xb2f3bbaf23e0197ec2e6f9ab730d00aaf26a9119ecd583bbb9ef3146b4afa248")},
	BlockTimeSeconds: 1,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0x47A708142C348e2B4260cCEf3abC2Aff03486eBc"),
		LimitOrderRegistry:            common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		LimitOrderRegistryDeployBlock: 19179485,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                0,
		PoolFactory:                common.HexToAddress("0x1f98400000000000000000000000000000000003"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0xb7610f9b733e7d45184be3a1bc966960ccc54f0b"),
		TickLens:                   common.HexToAddress("0xd5d76fa166ab8d8ad4c9f61aaa81457b66cbe443"),
		NonfungiblePositionManager: common.HexToAddress("0x943e6e07a7e8e791dafc44083e54041d743c46e9"),
		PositionsNFT:               common.HexToAddress("0x943e6e07a7e8e791dafc44083e54041d743c46e9"),
		PositionsNFTDeployBlock:    294152,
		UniversalRouter:            common.HexToAddress("0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},
	Uniswapv4: UniswapV4Metadata{
		DeployBlock:     0,
		PoolManager:     common.HexToAddress("0x1f98400000000000000000000000000000000004"),
		PositionManager: common.HexToAddress("0x4529a01c7a0410167c5740c487a8de60232617bf"),
		UniversalRouter: common.HexToAddress("0xef740bf23acae26f6492b10de645d6b98dc8eaf3"),
		Permit2:         common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		DefaultPool:     common.HexToHash("0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9"),
		StateView:       common.HexToAddress("0x86e8631a016f9068c3f085faf484ee3f5fdee8f2"),
	},
	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Enso:          []common.Address{common.HexToAddress("0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf")},
		Icecreamswap:  []common.Address{common.HexToAddress("0x3FFc2315A992b01dc4B3f79C8EEa1921091Ee24f")},
		Kyberswap:     []common.Address{common.HexToAddress("0x6131B5fae19EA4f9D964eAc0408E4408b66337b5")},
		Odos:          []common.Address{common.HexToAddress("0x6409722F3a1C4486A3b1FE566cBDd5e9D946A1f3")},
		Okx:           []common.Address{common.HexToAddress("0x6733Eb2E75B1625F1Fe5f18aD2cB2BaBDA510d19"), common.HexToAddress("0x2e28281Cf3D58f475cebE27bec4B8a23dFC7782c")},
		Openocean:     []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Paraswap:      []common.Address{common.HexToAddress("0x6A000F20005980200259B80c5102003040001068")},
		Propellerswap: []common.Address{common.HexToAddress("0xFfA5ec2e444e4285108e4a17b82dA495c178427B")},
		Uniswap:       []common.Address{common.HexToAddress("0x73855d06DE49d0fe4A9c42636Ba96c62da12FF9C"), common.HexToAddress("0xEf740bf23aCaE26f6492B10de645D6B98dC8Eaf3"), common.HexToAddress("0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7")},
		Zeroex:        []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0x972655fACb8Df3CdF40395E4262f874f81674D46")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	},
	Contracts: map[string]ChainContract{
		"gasPriceOracle": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x420000000000000000000000000000000000000F"),
		},
		"l1Block": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000015"),
		},
		"l2CrossDomainMessenger": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000007"),
		},
		"l2Erc721Bridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000014"),
		},
		"l2StandardBridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000010"),
		},
		"l2ToL1MessagePasser": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000016"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x943e6e07a7e8e791dafc44083e54041d743c46e9"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xb7610f9b733e7d45184be3a1bc966960ccc54f0b"),
		},
	},
}
