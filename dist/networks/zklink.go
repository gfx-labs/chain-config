package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Zklink Network = Network{
	ChainId:           810180,
	LogoUrl:           "https://assets.oku.trade/zklink-logo.svg",
	SortIndex:         4,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.zklink.io",
		},
	},
	DefaultPool:  common.HexToAddress("0x8ad8cbb174539ba7ae7cb7e8c957acd8ab814700"),
	InternalName: "zklink",
	InitCodeHash: common.HexToHash("0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed"),
	ExternalId: map[string]string{
		"zerion": "",
	},
	DefaultToken0: common.HexToAddress("0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169"),
	DefaultToken1: common.HexToAddress("0x1a1A3b2ff016332e866787B311fcB63928464509"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x1a1A3b2ff016332e866787B311fcB63928464509"), common.HexToAddress("0x2F8A25ac62179B31D62D7F80884AE57464699059"), common.HexToAddress("0xF573fA04A73d5AC442F3DEa8741317fEaA3cDeab")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x1a1A3b2ff016332e866787B311fcB63928464509"): {}, common.HexToAddress("0x2F8A25ac62179B31D62D7F80884AE57464699059"): {}, common.HexToAddress("0xF573fA04A73d5AC442F3DEa8741317fEaA3cDeab"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x8ad8cbb174539ba7ae7cb7e8c957acd8ab814700")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry: common.HexToAddress("0x0000000000000000000000000000000000000000"),

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                3919184,
		PoolFactory:                common.HexToAddress("0x9BD6230EDb501e28442B9deE9e35d01eeb946249"),
		Multicall2:                 common.HexToAddress("0xccca83bd6343fe9535E0e65AF4601424E95e3974"),
		TickLens:                   common.HexToAddress("0x6EF712E1f851d2E637a0FE7DF5C09ad7DC141CB0"),
		NonfungiblePositionManager: common.HexToAddress("0xAA904d497e42608C014BE83a026E984aFc16129b"),
		PositionsNFT:               common.HexToAddress("0xAA904d497e42608C014BE83a026E984aFc16129b"),
		PositionsNFTDeployBlock:    3919226,
		UniversalRouter:            common.HexToAddress("0x2274bDE50218DDB955e7f60e4f2344e3Bff9D193"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x1a1A3b2ff016332e866787B311fcB63928464509"),
		WethAddress: common.HexToAddress("0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169"),
		WbtcAddress: common.HexToAddress("0xDa4AaEd3A53962c83B35697Cd138cc6df43aF71f"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xAA904d497e42608C014BE83a026E984aFc16129b"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5"),
		},
	},
}
