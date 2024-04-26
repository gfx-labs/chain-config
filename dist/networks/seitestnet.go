package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Seitestnet Network = Network{
	ChainId:           713715,
	LogoUrl:           "https://assets.oku.trade/sei-logo.webp",
	SortIndex:         17,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]string{
		"default": "https://seitrace.com",
	},
	DefaultPool:   common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName:  "seitestnet",
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x26841a0A5D958B128209F4ea9a1DD7E61558c330"),
	DefaultToken1: common.HexToAddress("0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x26841a0A5D958B128209F4ea9a1DD7E61558c330"),
			NativeWrappedName:  "SEI",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                16206422,
		PoolFactory:                common.HexToAddress("0x32CB2e76E80B2A8abc968985B23408E2D5885341"),
		Multicall2:                 common.HexToAddress("0x474bD11F7777d0a1EE0B7c0bb48Acd9244A2afCE"),
		TickLens:                   common.HexToAddress("0x09E6a35D9c4d6fA4257aeE015793Cd5Cbf8fa6D8"),
		NonfungiblePositionManager: common.HexToAddress("0x2d1886A4C71df03685ba1e6B0075e285a34e2c30"),
		PositionsNFT:               common.HexToAddress("0x2d1886A4C71df03685ba1e6B0075e285a34e2c30"),
		PositionsNFTDeployBlock:    16206612,
		UniversalRouter:            common.HexToAddress("0x61a27a55f72bbCba64554246BCE2da43C164543B"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xace5f7Ea93439Af39b46d2748fA1aC19951c8d7C"),
		WethAddress: common.HexToAddress("0x26841a0A5D958B128209F4ea9a1DD7E61558c330"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x2d1886A4C71df03685ba1e6B0075e285a34e2c30"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x26841a0A5D958B128209F4ea9a1DD7E61558c330"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x58A80812EDC79CE80eeF0c9940528f57CafFe2a2"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
