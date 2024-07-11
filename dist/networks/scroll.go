package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Scroll Network = Network{
	ChainId:           534352,
	LogoUrl:           "https://assets.oku.trade/scroll-logo.png",
	SortIndex:         5,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://scrollscan.com",
			ApiUrl: "https://api.scrollscan.com/api",
		},
	},
	DefaultPool:  common.HexToAddress("0x813df550a32d4a9d42010d057386429ad2328ed9"),
	InternalName: "scroll",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion": "scroll",
	},
	DefaultToken0: common.HexToAddress("0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4"),
	DefaultToken1: common.HexToAddress("0x5300000000000000000000000000000000000004"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4"), common.HexToAddress("0xf55bec9cafdbe8730f096aa55dad6d22d44099df"), common.HexToAddress("0xca77eb3fefe3725dc33bccb54edefc3d9f764f97")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4"): {}, common.HexToAddress("0xf55bec9cafdbe8730f096aa55dad6d22d44099df"): {}, common.HexToAddress("0xca77eb3fefe3725dc33bccb54edefc3d9f764f97"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xf1783f3377b3a70465c193ef33942c0803121ba0"), common.HexToAddress("0x813df550a32d4a9d42010d057386429ad2328ed9")},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377"),
		LimitOrderRegistryDeployBlock: 1409068,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x5300000000000000000000000000000000000004"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:     1367,
		Multicall2:      common.HexToAddress("0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2"),
		PoolFactory:     common.HexToAddress("0x70C62C8b8e801124A4Aa81ce07b637A3e83cb919"),
		PositionsNFT:    common.HexToAddress("0xB39002E4033b162fAc607fc3471E205FA2aE5967"),
		UniversalRouter: common.HexToAddress("0x595E7160858b1AdA94Bda790D8699C85e595117E"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4"),
		WethAddress: common.HexToAddress("0x5300000000000000000000000000000000000004"),
		WbtcAddress: common.HexToAddress("0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 14,
			Address:      common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xB39002E4033b162fAc607fc3471E205FA2aE5967"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5300000000000000000000000000000000000004"),
		},
		"Multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2"),
		},
		"Multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
