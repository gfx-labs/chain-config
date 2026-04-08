package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Zerog Network = Network{
	ChainId:           16661,
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/zerog-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         44,
	LaunchTime:        1733882663,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://chainscan.0g.ai",
		},
	},
	DefaultPool:     common.HexToAddress("0x5c1e4669c5208adc0163273d51928890b663237f"),
	InternalName:    "zerog",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "0g",
	},
	DefaultToken0: common.HexToAddress("0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"),
	DefaultToken1: common.HexToAddress("0x1f3aa82227281ca364bfb3d253b0f1af1da6473e"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x1f3aa82227281ca364bfb3d253b0f1af1da6473e")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x1f3aa82227281ca364bfb3d253b0f1af1da6473e"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x5c1e4669c5208adc0163273d51928890b663237f"), common.HexToAddress("0xb5cb173dc8f8e8379343d12faa0cd66cb2db7d2e"), common.HexToAddress("0x5B7698191ac6f42F8AA1B42EC8ce535E63423F67")},
	BlockTimeSeconds: 35,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x9db70e29712cc8af10c2b597bada6784544ff407"),
		LimitOrderRegistryDeployBlock: 6449021,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"),
			NativeWrappedName:  "0G",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                6444619,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    6444746,
		UniversalRouter:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		WrappedNativeAddress:       common.HexToAddress("0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"),
		WrappedNativeSymbol:        "w0G",
		WrappedNativeName:          "Wrapped 0G",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "0G",
	},

	Morpho: MorphoMetadata{
		DeployBlock:     7526486,
		Morpho:          common.HexToAddress("0x9CDD13a2212D94C4f12190cA30783B743E83C89e"),
		Bundler3:        common.HexToAddress("0xbDaFC7ceF85C5fF69164330F521089C9E15DDDae"),
		MmFactory11:     common.HexToAddress("0x41528AadC7314658b07Ca6e7213B9b77289B477f"),
		PublicAllocator: common.HexToAddress("0x28a80F3713735CAD44bD9d7E1da9Fa16b0244497"),
		UrdFactory:      common.HexToAddress("0x40bDDbFCA5fcDF6E2Bbd019aC782b6A61388ADE6"),
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9db70e29712cc8af10c2b597bada6784544ff407"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
