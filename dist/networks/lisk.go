package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Lisk Network = Network{
	ChainId:           1135,
	LogoUrl:           "https://assets.oku.trade/lisk-logo.png",
	SortIndex:         15,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://blockscout.lisk.com",
			ApiUrl: "https://blockscout.lisk.com/api",
		},
	},
	DefaultPool:  common.HexToAddress("0x0000000000000000000000000000000000000000"),
	InternalName: "lisk",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion": "lisk",
	},
	DefaultToken0: common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"): {}},
	Watchlist:        []common.Address{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x81dE30A9a2816F95f2EE8DF62bafC45a095d57b2"),
		LimitOrderRegistryDeployBlock: 1748477,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                577168,
		PoolFactory:                common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		TickLens:                   common.HexToAddress("0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF"),
		NonfungiblePositionManager: common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFT:               common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFTDeployBlock:    578398,
		UniversalRouter:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x81dE30A9a2816F95f2EE8DF62bafC45a095d57b2"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		},
	},
}
