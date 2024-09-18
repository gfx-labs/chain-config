package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Manta Network = Network{
	ChainId:           169,
	LogoUrl:           "https://assets.oku.trade/manta-logo.png",
	SortIndex:         13,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://pacific-explorer.manta.network",
			ApiUrl: "https://pacific-explorer.manta.network/api",
		},
	},
	DefaultPool:  common.HexToAddress("0xc108d8702d42bae7b3d7d8209a9b40613a7b1d37"),
	InternalName: "manta",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion": "manta-pacific",
	},
	DefaultToken0: common.HexToAddress("0x0dc808adce2099a9f62aa87d9670745aba741746"),
	DefaultToken1: common.HexToAddress("0xb73603c5d87fa094b7314c74ace2e64d165016fb"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xb73603C5d87fA094B7314C74ACE2e64D165016fb"), common.HexToAddress("0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xb73603C5d87fA094B7314C74ACE2e64D165016fb"): {}, common.HexToAddress("0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x7881dc8e59e644517a95a9687a6b58b86d98db78"), common.HexToAddress("0xc108d8702d42bae7b3d7d8209a9b40613a7b1d37"), common.HexToAddress("0x060f2babc09826687be9cbf5c7ede3b3cd00dd78"), common.HexToAddress("0xbfca3e002acbcea2f9d48a87cf545cb4344f9a3e"), common.HexToAddress("0x9a70668cf02902b53c24f7d21762d19dfb9b69a6"), common.HexToAddress("0xa6f04e80aee9e491539cdf0cec8c2099df46816f"), common.HexToAddress("0x1cfd505f8a79be3a4fd9305239991f480e5fdc7b"), common.HexToAddress("0x775eac394b56cfad02d963c9c3c9cd2e425dab4e"), common.HexToAddress("0x6e32805add5f5255c22d8f0125a0c7d351926bc3"), common.HexToAddress("0x5bedc5d1e1d0b32caca78db23af71126b6fe26b6")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C"),
		LimitOrderRegistryDeployBlock: 1198851,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                1191705,
		PoolFactory:                common.HexToAddress("0x06D830e15081f65923674268121FF57Cc54e4e23"),
		Permit2:                    common.HexToAddress("0x83986Ff655A54ee061F6B7F476B92f4Fed111B93"),
		Multicall2:                 common.HexToAddress("0x52dFC0D9960F11A9Ca9FF616e791B91188446a60"),
		TickLens:                   common.HexToAddress("0xC94Fb2D13587b0b5af78094933490B35E004eAbE"),
		NonfungiblePositionManager: common.HexToAddress("0xA4F2Db71348697C65A64a146F709C73030C2ebcD"),
		PositionsNFT:               common.HexToAddress("0xA4F2Db71348697C65A64a146F709C73030C2ebcD"),
		PositionsNFTDeployBlock:    1191836,
		UniversalRouter:            common.HexToAddress("0x42Bff1f6b647462fcD8c28a488Be9C9988830ef6"),
		WrappedNativeAddress:       common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
		WrappedNativeSymbol:        common.HexToAddress("WETH"),
		WrappedNativeName:          common.HexToAddress("Wrapped Ether"),
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         common.HexToAddress("ETH"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xb73603C5d87fA094B7314C74ACE2e64D165016fb"),
		WethAddress: common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
		WbtcAddress: common.HexToAddress("0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA4F2Db71348697C65A64a146F709C73030C2ebcD"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0Dc808adcE2099A9F62AA87D9670745AbA741746"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x52dFC0D9960F11A9Ca9FF616e791B91188446a60"),
		},
	},
}
