package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Zksync Network = Network{
	ChainId:           324,
	LogoUrl:           "https://assets.oku.trade/zksync-logo.svg",
	SortIndex:         4,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]string{
		"default": "https://era.zksync.network",
	},
	DefaultPool:  common.HexToAddress("0xff577f0e828a878743ecc5e2632cbf65cecf17cf"),
	InternalName: "zksync",
	ExternalId: map[string]string{
		"zerion": "zksync-era",
	},
	DefaultToken0: common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
	DefaultToken1: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"), common.HexToAddress("0x503234F203fC7Eb888EEC8513210612a43Cf6115")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"): {}, common.HexToAddress("0x503234F203fC7Eb888EEC8513210612a43Cf6115"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xff577f0e828a878743ecc5e2632cbf65cecf17cf"), common.HexToAddress("0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135"), common.HexToAddress("0x3f618967492945c02d5222d333e903345fde741a"), common.HexToAddress("0xc99bcff6564bafc70ba1b53c53a03541f780a546"), common.HexToAddress("0x1fa900dbb20ed45d18883849c00632bca16f6610")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa"),
		LimitOrderRegistryDeployBlock: 13618344,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                12637075,
		PoolFactory:                common.HexToAddress("0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422"),
		Multicall2:                 common.HexToAddress("0x8bB86A31795d3e8ef12c630C288770e13eEcF038"),
		TickLens:                   common.HexToAddress("0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89"),
		NonfungiblePositionManager: common.HexToAddress("0x0616e5762c1E7Dc3723c50663dF10a162D690a86"),
		PositionsNFT:               common.HexToAddress("0x0616e5762c1E7Dc3723c50663dF10a162D690a86"),
		PositionsNFTDeployBlock:    12637120,
		UniversalRouter:            common.HexToAddress("0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
		WethAddress: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
		WbtcAddress: common.HexToAddress("0xBBeB516fb02a01611cBBE0453Fe3c580D7281011"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xF9cda624FBC7e059355ce98a31693d299FACd963"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0616e5762c1E7Dc3723c50663dF10a162D690a86"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5aea5775959fbc2557cc8789bc1bf90a239d9a91"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8bB86A31795d3e8ef12c630C288770e13eEcF038"),
		},
	},
}
