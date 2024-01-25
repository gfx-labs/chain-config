package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Base Network = Network{
	LogoUrl:       "https://assets.oku.trade/base-logo.svg",
	SortIndex:     8,
	DefaultPool:   common.HexToAddress("0x9e37cb775a047ae99fc5a24dded834127c4180cd"),
	InternalName:  "base",
	DefaultToken0: common.HexToAddress("0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca"), common.HexToAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"), common.HexToAddress("0x50c5725949a6f0c72e6c4a641f24049a917db0cb")},
	Watchlist:        []common.Address{common.HexToAddress("0x9e37cb775a047ae99fc5a24dded834127c4180cd"), common.HexToAddress("0x4c36388be6f416a29c8d8eee81c771ce6be14b18"), common.HexToAddress("0xd0b53d9277642d899df5c87a3966a349a798f224"), common.HexToAddress("0x3bc5180d5439b500f381f9a46f15dd6608101671"), common.HexToAddress("0x24e1cbd6fed006ceed9af0dce688acc7951d57a9"), common.HexToAddress("0x10648ba41b8565907cfa1496765fa4d95390aa0d")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("undefined"),
		LimitOrderRegistryDeployBlock: undefined,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			Pools:              []common.Address{},
			StablecoinList:     []common.Address{common.HexToAddress("0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca"), common.HexToAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"), common.HexToAddress("0x50c5725949a6f0c72e6c4a641f24049a917db0cb")},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                1371680,
		PoolFactory:                common.HexToAddress("0x33128a8fC17869897dcE68Ed026d694621f6FDfD"),
		Multicall2:                 common.HexToAddress("0x091e99cb1C49331a94dD62755D168E941AbD0693"),
		TickLens:                   common.HexToAddress("0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d"),
		NonfungiblePositionManager: common.HexToAddress("0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"),
		PositionsNFT:               common.HexToAddress("0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"),
		PositionsNFTDeployBlock:    1371714,
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
	},
}
