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
	DefaultPool:   common.HexToAddress("0xf3a56d08504f3e09aa94245c0ee841b91fcc5dee"),
	InternalName:  "seitestnet",
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x57eE725BEeB991c70c53f9642f36755EC6eb2139"),
	DefaultToken1: common.HexToAddress("0xA09F3386E05CEAC547b02f223bF500a728BE7d77"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xA09F3386E05CEAC547b02f223bF500a728BE7d77")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xA09F3386E05CEAC547b02f223bF500a728BE7d77"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x57eE725BEeB991c70c53f9642f36755EC6eb2139"),
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
		UsdcAddress: common.HexToAddress("0xA09F3386E05CEAC547b02f223bF500a728BE7d77"),
		WethAddress: common.HexToAddress("0x57eE725BEeB991c70c53f9642f36755EC6eb2139"),
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
			Address:      common.HexToAddress("0x57eE725BEeB991c70c53f9642f36755EC6eb2139"),
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
