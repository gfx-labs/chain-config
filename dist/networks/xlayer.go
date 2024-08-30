package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Xlayer Network = Network{
	ChainId:           196,
	LogoUrl:           "https://assets.oku.trade/xlayer-logo.svg",
	SortIndex:         18,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://www.oklink.com/xlayer",
		},
	},
	DefaultPool:   common.HexToAddress("0x87d7a0a51e27bf7232f97015ab3e53edc8104989"),
	InternalName:  "xlayer",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x74b7f16337b8972027f6196a17a631ac6de26d22"),
	DefaultToken1: common.HexToAddress("0xe538905cf8410324e03a5a23c1c177a474d59b2b"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x2a22f9c3b484c3629090feed35f17ff8f88f76f0"), common.HexToAddress("0x1e4a5963abfd975d8c9021ce480b42188849d41d"), common.HexToAddress("0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x2a22f9c3b484c3629090feed35f17ff8f88f76f0"): {}, common.HexToAddress("0x1e4a5963abfd975d8c9021ce480b42188849d41d"): {}, common.HexToAddress("0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x87d7a0a51e27bf7232f97015ab3e53edc8104989")},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		LimitOrderRegistryDeployBlock: 4348466,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xe538905cf8410324e03a5a23c1c177a474d59b2b"),
			NativeWrappedName:  "OKB",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                4345920,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    4346185,
		UniversalRouter:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x74b7f16337b8972027f6196a17a631ac6de26d22"),
		WethAddress: common.HexToAddress("0xe538905cf8410324e03a5a23c1c177a474d59b2b"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xe538905cf8410324e03a5a23c1c177a474d59b2b"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
