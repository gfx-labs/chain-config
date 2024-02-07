package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var PolygonZkevm Network = Network{
	ChainId:           1101,
	LogoUrl:           "https://assets.oku.trade/zkevm-logo.svg",
	SortIndex:         6,
	SafeReorgDistance: 90000,
	DefaultPool:       common.HexToAddress("0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd"),
	InternalName:      "polygon-zkevm",
	DefaultToken0:     common.HexToAddress("0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9"),
	DefaultToken1:     common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x1e4a5963abfd975d8c9021ce480b42188849d41d"), common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"), common.HexToAddress("0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x1e4a5963abfd975d8c9021ce480b42188849d41d"): struct{}{}, common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"): struct{}{}, common.HexToAddress("0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4"): struct{}{}},
	Watchlist:        []common.Address{common.HexToAddress("0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd")},
	BlockTimeSeconds: 7,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x5f1ef1d278013567c3c67e18d2d35bfa9954f723"),
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
		Multicall2:                 common.HexToAddress("0x9073E304a15b1522132848B461857cd8BA932ea7"),
		TickLens:                   common.HexToAddress("0x64519b94A7248Bf17929fB03b9648ce277Fd7fDA"),
		NonfungiblePositionManager: common.HexToAddress("0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f"),
		PositionsNFT:               common.HexToAddress("0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f"),
		PositionsNFTDeployBlock:    8466897,
		UniversalRouter:            common.HexToAddress("0x32454e81d065FAA95Ec0d0Ab6Fe326599Af30fd7"),
	},
	Token: TokenMetadata{
		WbtcAddress: common.HexToAddress("0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1"),
		WethAddress: common.HexToAddress("0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"),
		UsdcAddress: common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5f1ef1d278013567c3c67e18d2d35bfa9954f723"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xf0d61aeda516cca1ff20be65cfb0213be688a24f"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674"),
		},
	},
}
