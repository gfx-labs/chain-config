package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var PolygonZkevm Network = Network{
	ChainId:           1101,
	LogoUrl:           "https://assets.oku.trade/zkevm-logo.svg",
	SortIndex:         6,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://zkevm.polygonscan.com",
			ApiUrl: "https://api-zkevm.polygonscan.com/api",
		},
	},
	DefaultPool:  common.HexToAddress("0xD6Efe114C9b6058a20AAB759E064F50544590914"),
	InternalName: "polygon-zkevm",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion": "polygon-zkevm",
	},
	DefaultToken0: common.HexToAddress("0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"),
	DefaultToken1: common.HexToAddress("0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5"), common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"), common.HexToAddress("0x1e4a5963abfd975d8c9021ce480b42188849d41d"), common.HexToAddress("0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4"), common.HexToAddress("0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5"): {}, common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"): {}, common.HexToAddress("0x1e4a5963abfd975d8c9021ce480b42188849d41d"): {}, common.HexToAddress("0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4"): {}, common.HexToAddress("0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xd6efe114c9b6058a20aab759e064f50544590914"), common.HexToAddress("0x52b18c30f1d3f5c6f5fb4badff2d0ab3c68a3ff4"), common.HexToAddress("0x90C865Da46D948EF3792fb57B0d60D14A96ecf49"), common.HexToAddress("0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd"), common.HexToAddress("0x539d23BE81696560C12Cf8d24AE8bb4641381E7D"), common.HexToAddress("0x7908F0eD78de3c850A5d1DC261c39341b274D07c"), common.HexToAddress("0x0A44b12799eBC21E1dF271284921e1e4F6f17f81")},
	BlockTimeSeconds: 7,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x5f1eF1d278013567C3c67e18d2D35bfa9954F723"),
		LimitOrderRegistryDeployBlock: 8467090,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                8466867,
		PoolFactory:                common.HexToAddress("0xff83c3c800Fec21de45C5Ec30B69ddd5Ee60DFC2"),
		Permit2:                    common.HexToAddress("0xCEc9e219281B78E1946b6b894f75ae89Bc10FEb6"),
		Multicall2:                 common.HexToAddress("0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674"),
		TickLens:                   common.HexToAddress("0x64519b94A7248Bf17929fB03b9648ce277Fd7fDA"),
		NonfungiblePositionManager: common.HexToAddress("0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f"),
		PositionsNFT:               common.HexToAddress("0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f"),
		PositionsNFTDeployBlock:    8466897,
		UniversalRouter:            common.HexToAddress("0x32454e81d065FAA95Ec0d0Ab6Fe326599Af30fd7"),
	},
	Token: TokenMetadata{
		WbtcAddress: common.HexToAddress("0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1"),
		WethAddress: common.HexToAddress("0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"),
		UsdcAddress: common.HexToAddress("0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5f1eF1d278013567C3c67e18d2D35bfa9954F723"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674"),
		},
	},
}
