package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Manta Network = Network{
	ChainId:           169,
	LogoUrl:           "https://assets.oku.trade/manta-logo.png",
	SortIndex:         13,
	SafeReorgDistance: 90000,
	DefaultPool:       common.HexToAddress("0xff577f0e828a878743ecc5e2632cbf65cecf17cf"),
	InternalName:      "manta",
	DefaultToken0:     common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
	DefaultToken1:     common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f"), common.HexToAddress("0xb73603C5d87fA094B7314C74ACE2e64D165016fb")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f"): struct{}{}, common.HexToAddress("0xb73603C5d87fA094B7314C74ACE2e64D165016fb"): struct{}{}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C"),
		LimitOrderRegistryDeployBlock: 1198851,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                1191705,
		PoolFactory:                common.HexToAddress("0x06D830e15081f65923674268121FF57Cc54e4e23"),
		Multicall2:                 common.HexToAddress("0x3C7B6fA5376Ba88364e9BeAE6E1aEc9f738e8f63"),
		TickLens:                   common.HexToAddress("0xC94Fb2D13587b0b5af78094933490B35E004eAbE"),
		NonfungiblePositionManager: common.HexToAddress("0xA4F2Db71348697C65A64a146F709C73030C2ebcD"),
		PositionsNFT:               common.HexToAddress("0xA4F2Db71348697C65A64a146F709C73030C2ebcD"),
		PositionsNFTDeployBlock:    1191836,
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xb73603C5d87fA094B7314C74ACE2e64D165016fb"),
		WethAddress: common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
		WbtcAddress: common.HexToAddress("0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA4F2Db71348697C65A64a146F709C73030C2ebcD"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x52dFC0D9960F11A9Ca9FF616e791B91188446a60"),
		},
	},
}
