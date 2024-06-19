package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Sei Network = Network{
	ChainId:           1329,
	LogoUrl:           "https://assets.oku.trade/sei-logo.svg",
	SortIndex:         5,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://seitrace.com",
			ApiUrl: "https://seitrace.com/pacific-1/api",
		},
	},
	DefaultPool:   common.HexToAddress("0x0A6358F069268c7dc4918D5B12c69a782b957Ead"),
	InternalName:  "sei",
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1"),
	DefaultToken1: common.HexToAddress("0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x0A6358F069268c7dc4918D5B12c69a782b957Ead"), common.HexToAddress("0x8a1a9efb7f7f74ace10a31f2f5f9f7e804f957b1"), common.HexToAddress("0x41eea09c971294fcde3b6e553902b04a47be7442"), common.HexToAddress("0x5cfa8db453c9904511c4ea9eb0bfc903e36b9f5f"), common.HexToAddress("0xa3a573c8d14c93fca8fdecb7db168619563d9b00")},
	BlockTimeSeconds: 0.4,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		LimitOrderRegistryDeployBlock: 79448363,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7"),
			NativeWrappedName:  "SEI",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                79245151,
		PoolFactory:                common.HexToAddress("0x75FC67473A91335B5b8F8821277262a13B38c9b3"),
		Multicall2:                 common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		TickLens:                   common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		NonfungiblePositionManager: common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFT:               common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFTDeployBlock:    79245279,
		UniversalRouter:            common.HexToAddress("0xa683c66045ad16abb1bCE5ad46A64d95f9A25785"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1"),
		WethAddress: common.HexToAddress("0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9b7aC6735b23578E81260acD34E3668D0cc6000A"),
		},
	},
}
