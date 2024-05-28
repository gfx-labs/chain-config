package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Taiko Network = Network{
	ChainId:           167000,
	LogoUrl:           "https://assets.oku.trade/taiko-logo.svg",
	SortIndex:         4,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]string{
		"default": "https://taikoscan.io",
	},
	DefaultPool:  common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName: "taiko",
	ExternalId: map[string]string{
		"zerion": "taiko",
	},
	DefaultToken0: common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"),
	DefaultToken1: common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 24,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		LimitOrderRegistryDeployBlock: 2396,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                961,
		PoolFactory:                common.HexToAddress("0x75FC67473A91335B5b8F8821277262a13B38c9b3"),
		Multicall2:                 common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		TickLens:                   common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		NonfungiblePositionManager: common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFT:               common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFTDeployBlock:    980,
		UniversalRouter:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"),
		WethAddress: common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		},
	},
}
