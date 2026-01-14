package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Lens Network = Network{
	ChainId:           232,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/lens-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         31,
	LaunchTime:        1746050531,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://explorer.lens.xyz",
			ApiUrl: "https://explorer.lens.xyz/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de"),
	InternalName:    "lens",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed"),
	ExternalId: map[string]string{
		"tenderly": "true",
		"cowswap":  "lens",
	},
	DefaultToken0: common.HexToAddress("0x6bDc36E20D267Ff0dd6097799f82e78907105e2F"),
	DefaultToken1: common.HexToAddress("0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de"), common.HexToAddress("0xdf4b8153bf91f54802a9ba16366b2111724384e4"), common.HexToAddress("0x6b6eb6f437bf54d22b997c3b38b79a23bc63f39f")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF"),
		LimitOrderRegistryDeployBlock: 852140,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x6bDc36E20D267Ff0dd6097799f82e78907105e2F"),
			NativeWrappedName:  "GHO",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                184120,
		PoolFactory:                common.HexToAddress("0xe0704DB90bcAA1eAFc00E958FF815Ab7aa11Ef47"),
		Permit2:                    common.HexToAddress("0x0000000000225e31d15943971f47ad3022f714fa"),
		Multicall2:                 common.HexToAddress("0x5900c97b683e69CD752aF7DC7003d69315E2a288"),
		TickLens:                   common.HexToAddress("0x5499510c2e95F59b1Df0eC7C1bd2Fa76347df5Be"),
		NonfungiblePositionManager: common.HexToAddress("0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031"),
		PositionsNFT:               common.HexToAddress("0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031"),
		PositionsNFTDeployBlock:    184128,
		UniversalRouter:            common.HexToAddress("0xAA904d497e42608C014BE83a026E984aFc16129b"),
		WrappedNativeAddress:       common.HexToAddress("0x6bDc36E20D267Ff0dd6097799f82e78907105e2F"),
		WrappedNativeSymbol:        "WGHO",
		WrappedNativeName:          "Wrapped GHO",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "GHO",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x6bDc36E20D267Ff0dd6097799f82e78907105e2F"),
		UsdcAddress: common.HexToAddress("0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x6bDc36E20D267Ff0dd6097799f82e78907105e2F"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5900c97b683e69CD752aF7DC7003d69315E2a288"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x6b6dEa4D80e3077D076733A04c48F63c3BA49320"),
		},
		"metrom": {
			BlockCreated: 2507884,
			Address:      common.HexToAddress("0x5319C3Fc78ac3e10Ca733A5839D65F8493A8D60A"),
		},
	},
}
