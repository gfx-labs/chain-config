package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Worldchain Network = Network{
	ChainId:           480,
	LogoUrl:           "https://assets.oku.trade/chains/world-logo.png",
	Deprecated:        false,
	SortIndex:         15,
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
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x79a02482a880bce3f13e09da970dc34db4cd24d1"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{

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
		UniversalRouter:            common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
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
