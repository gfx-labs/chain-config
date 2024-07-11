package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Blast Network = Network{
	ChainId:           81457,
	LogoUrl:           "https://assets.oku.trade/blast-logo.svg",
	SortIndex:         14,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://blastscan.io",
			ApiUrl: "https://api.blastscan.io/api",
		},
	},
	DefaultPool:  common.HexToAddress("0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F"),
	InternalName: "blast",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion": "blast",
	},
	DefaultToken0: common.HexToAddress("0x4300000000000000000000000000000000000003"),
	DefaultToken1: common.HexToAddress("0x4300000000000000000000000000000000000004"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x4300000000000000000000000000000000000003")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x4300000000000000000000000000000000000003"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F"), common.HexToAddress("0xf52b4b69123cbcf07798ae8265642793b2e8990c"), common.HexToAddress("0xf52b4b69123cbcf07798ae8265642793b2e8990c"), common.HexToAddress("0x310a0a4bc2edd2f29321356d880e0906d7700c14"), common.HexToAddress("0xbb60bb410182d8e96c41dfc92e017dd79f5100bf"), common.HexToAddress("0xf52df2cde73228cc058abfe88f3801dcddf885eb"), common.HexToAddress("0x99f8a29a332eb9004f83abb1b4690de8b00dfccf")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x0337d36A3dF76d882369E3cBF984a2EA40f6636F"),
		LimitOrderRegistryDeployBlock: 402083,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4300000000000000000000000000000000000004"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                400903,
		PoolFactory:                common.HexToAddress("0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd"),
		Multicall2:                 common.HexToAddress("0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833"),
		TickLens:                   common.HexToAddress("0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274"),
		NonfungiblePositionManager: common.HexToAddress("0xB218e4f7cF0533d4696fDfC419A0023D33345F28"),
		PositionsNFT:               common.HexToAddress("0xB218e4f7cF0533d4696fDfC419A0023D33345F28"),
		PositionsNFTDeployBlock:    400947,
		UniversalRouter:            common.HexToAddress("0x643770E279d5D0733F21d6DC03A8efbABf3255B4"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x4300000000000000000000000000000000000003"),
		WethAddress: common.HexToAddress("0x4300000000000000000000000000000000000004"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 212929,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0337d36A3dF76d882369E3cBF984a2EA40f6636F"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xB218e4f7cF0533d4696fDfC419A0023D33345F28"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4300000000000000000000000000000000000004"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833"),
		},
	},
}
