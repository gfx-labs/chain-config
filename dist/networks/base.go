package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Base Network = Network{
	ChainId: 8453,
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/base-logo.svg",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         2,
	LaunchTime:        1707321600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://basescan.org",
			ApiUrl: "https://api.basescan.org/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xd0b53d9277642d899df5c87a3966a349a798f224"),
	InternalName:    "base",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":    "base",
		"debank":    "base",
		"cowswap":   "base",
		"tenderly":  "true",
		"coingecko": "base",
	},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"),
	BlockAid:      "base",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"), common.HexToAddress("0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca"), common.HexToAddress("0x50c5725949a6f0c72e6c4a641f24049a917db0cb"), common.HexToAddress("0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"): {}, common.HexToAddress("0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca"): {}, common.HexToAddress("0x50c5725949a6f0c72e6c4a641f24049a917db0cb"): {}, common.HexToAddress("0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x4c36388be6f416a29c8d8eee81c771ce6be14b18"), common.HexToAddress("0x06959273e9a65433de71f5a452d529544e07ddd0"), common.HexToAddress("0xc9034c3e7f58003e6ae0c8438e7c8f4598d5acaa"), common.HexToAddress("0xd0b53d9277642d899df5c87a3966a349a798f224"), common.HexToAddress("0x48413707b70355597404018e7c603b261fcadf3f"), common.HexToAddress("0x4b0aaf3ebb163dd45f663b38b6d93f6093ebc2d3"), common.HexToAddress("0x0d5959a52e7004b601f0be70618d01ac3cdce976"), common.HexToAddress("0x10648ba41b8565907cfa1496765fa4d95390aa0d"), common.HexToAddress("0x22f9623817f152148b4e080e98af66fbe9c5adf8"), common.HexToAddress("0xae2ce200bdb67c472030b31f602f0756c9aeb61c"), common.HexToAddress("0xd5638bf58e2762fa40bd753490f693cbb1986709"), common.HexToAddress("0x018046b1d182f7c0978c07610e1173c8e11913fd"), common.HexToAddress("0x24e1cbd6fed006ceed9af0dce688acc7951d57a9"), common.HexToAddress("0x97a25cc2793f0ffa90e1667cf7b3c1f130737189"), common.HexToAddress("0xfcc89a1f250d76de198767d33e1ca9138a7fb54b"), common.HexToAddress("0x3bc5180d5439b500f381f9a46f15dd6608101671"), common.HexToAddress("0xa555149210075702a734968f338d5e1cbd509354"), common.HexToAddress("0x5197195ac878741b192f84ff6d7da5a85b9e634b"), common.HexToAddress("0xe745a591970e0fa981204cf525e170a2b9e4fb93"), common.HexToAddress("0x7e904aaf3439402eb21958fe090bd852d5e882cf")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27"),
		LimitOrderRegistryDeployBlock: 7644835,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "WETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                1371680,
		PoolFactory:                common.HexToAddress("0x33128a8fC17869897dcE68Ed026d694621f6FDfD"),
		Multicall2:                 common.HexToAddress("0x41A513463248971B41C0580726CF4D425c071732"),
		TickLens:                   common.HexToAddress("0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d"),
		NonfungiblePositionManager: common.HexToAddress("0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"),
		PositionsNFT:               common.HexToAddress("0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"),
		PositionsNFTDeployBlock:    1371714,
		UniversalRouter:            common.HexToAddress("0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{
		DeployBlock:     13977148,
		Morpho:          common.HexToAddress("0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb"),
		MmFactory10:     common.HexToAddress("0xa9c3d3a366466fa809d1ae982fb2c46e5fc41101"),
		MmFactory11:     common.HexToAddress("0xFf62A7c278C62eD665133147129245053Bbf5918"),
		Bundler3:        common.HexToAddress("0x6BFd8137e702540E7A42B74178A4a49Ba43920C4"),
		PublicAllocator: common.HexToAddress("0xA090dD1a701408Df1d4d0B85b716c87565f90467"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"),
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
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x41A513463248971B41C0580726CF4D425c071732"),
		},
		"metrom": {
			BlockCreated: 20622498,
			Address:      common.HexToAddress("0xD1D3Cf05Ef211C71056f0aF1a7FD1DF989E109c3"),
		},
	},
}
