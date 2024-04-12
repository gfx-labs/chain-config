package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Linea Network = Network{
	ChainId:           59144,
	LogoUrl:           "https://assets.oku.trade/linea-logo.svg",
	SortIndex:         15,
	SafeReorgDistance: 100,
	DefaultPool:       common.HexToAddress("0xff577f0e828a878743ecc5e2632cbf65cecf17cf"),
	InternalName:      "linea",
	ExternalId: map[string]string{
		"zerion": "linea",
	},
	DefaultToken0: common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"),
	DefaultToken1: common.HexToAddress("0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"), common.HexToAddress("0xa219439258ca9da29e9cc4ce5596924745e12b93"), common.HexToAddress("0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x176211869ca2b568f2a7d4ee941e073a821ee1ff"): {}, common.HexToAddress("0xa219439258ca9da29e9cc4ce5596924745e12b93"): {}, common.HexToAddress("0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
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
		UniversalRouter:            common.HexToAddress("0xd7c7d7f18dd5388d5217c9696c7e799fcd75c6bd"),
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
