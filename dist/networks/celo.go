package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Celo Network = Network{
	ChainId:           42220,
	LogoUrl:           "https://assets.oku.trade/chains/celo-logo.svg",
	SortIndex:         15,
	LaunchTime:        1727359200,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://celoscan.io",
			ApiUrl: "https://api.celoscan.io/api",
		},
	},
	DefaultPool:   common.HexToAddress("0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE"),
	InternalName:  "celo",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x471EcE3750Da237f93B8E339c536989b8978a438"),
	DefaultToken1: common.HexToAddress("0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xceba9300f2b948710d2653dd7b07f33a8b32118c"), common.HexToAddress("0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e"), common.HexToAddress("0x765de816845861e75a25fca122bb6898b8b1282a")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xceba9300f2b948710d2653dd7b07f33a8b32118c"): {}, common.HexToAddress("0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e"): {}, common.HexToAddress("0x765de816845861e75a25fca122bb6898b8b1282a"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE"), common.HexToAddress("0xE426E1305f5e6093864762Bf9d2D8B44BC211c59"), common.HexToAddress("0x5dC631aD6C26BEA1a59fBF2C2680CF3df43d249f"), common.HexToAddress("0x34757893070B0FC5de37AaF2844255fF90F7F1E0"), common.HexToAddress("0x1a810e0B6c2dd5629AFa2f0c898b9512C6F78846"), common.HexToAddress("0x7766BDC5ff15d3aCeB4D37914963aeBAcCF3de15"), common.HexToAddress("0x628Cb3a5a206956423D158009612813B64B19dab"), common.HexToAddress("0x1c8DafD358d308b880F71eDB5170B010b106Ca60"), common.HexToAddress("0xA1777e082fA1746eB78DD9C1fbB515419CF6e538"), common.HexToAddress("0xd80D28850bEBE6208433c298334392bC940B4fc7"), common.HexToAddress("0xf130F72F8190f662522774C3367E6e8814f5e219"), common.HexToAddress("0x7B9A5BC920610F54881f2F6359007957DE504862")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		LimitOrderRegistryDeployBlock: 29842546,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x471EcE3750Da237f93B8E339c536989b8978a438"),
			NativeWrappedName:  "CELO",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                5188280,
		PoolFactory:                common.HexToAddress("0xAfE208a311B21f13EF87E33A90049fC17A7acDEc"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x633987602DE5C4F337e3DbF265303A1080324204"),
		TickLens:                   common.HexToAddress("0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D"),
		NonfungiblePositionManager: common.HexToAddress("0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A"),
		PositionsNFT:               common.HexToAddress("0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A"),
		PositionsNFTDeployBlock:    13916373,
		UniversalRouter:            common.HexToAddress("0x643770E279d5D0733F21d6DC03A8efbABf3255B4"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "CELO",
		WrappedNativeName:          "CELO",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "CELO",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x471EcE3750Da237f93B8E339c536989b8978a438"),
		WbtcAddress: common.HexToAddress("0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x633987602DE5C4F337e3DbF265303A1080324204"),
		},
	},
}
