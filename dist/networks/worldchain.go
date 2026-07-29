package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Worldchain Network = Network{
	ChainId: 480,
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/worldchain-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/eth.png",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         28,
	LaunchTime:        0,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://worldscan.org",
			ApiUrl: "https://api.worldscan.org/api",
		},
		"blockscout": {
			Url:    "https://worldchain-mainnet.explorer.alchemy.com",
			ApiUrl: "https://worldchain-mainnet.explorer.alchemy.com/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x610E319b3A3Ab56A0eD5562927D37c233774ba39"),
	InternalName:    "worldchain",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "world-chain",
	},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1"): {}},
	Watchlist:        []common.Address{},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		Router: common.HexToAddress("0x47A708142C348e2B4260cCEf3abC2Aff03486eBc"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                1603366,
		PoolFactory:                common.HexToAddress("0x7a5028BDa40e7B173C278C5342087826455ea25a"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9"),
		TickLens:                   common.HexToAddress("0xE61df0CaC9d85876aCE5E3037005D80943570623"),
		NonfungiblePositionManager: common.HexToAddress("0xec12a9F9a09f50550686363766Cc153D03c27b5e"),
		PositionsNFT:               common.HexToAddress("0xec12a9F9a09f50550686363766Cc153D03c27b5e"),
		PositionsNFTDeployBlock:    1603405,
		UniversalRouter:            common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{
		DeployBlock:     9025669,
		Morpho:          common.HexToAddress("0xE741BC7c34758b4caE05062794E8Ae24978AF432"),
		PublicAllocator: common.HexToAddress("0xef9889B4e443DEd35FA0Bd060f2104Cca94e6A43"),
		MmFactory11:     common.HexToAddress("0xae5b0884bfff430493D6C844B9fd052Af7d79278"),
		Bundler3:        common.HexToAddress("0x3D07BF2FFb23248034bF704F3a4786F1ffE2a448"),
	},
	MarketRouters: MarketRouters{
		Enso:         []common.Address{common.HexToAddress("0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf")},
		Icecreamswap: []common.Address{common.HexToAddress("0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d")},
		Uniswap:      []common.Address{common.HexToAddress("0x091AD9e2e6e5eD44c1c66dB50e49A601F9f36cF6"), common.HexToAddress("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"), common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0x1072a0A713A23a2Da9BAB99E9CD68187970E89a4")},
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		UsdcAddress: common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1"),
		WbtcAddress: common.HexToAddress("0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3"),
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
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xec12a9F9a09f50550686363766Cc153D03c27b5e"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9"),
		},
	},
}
