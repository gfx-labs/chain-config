package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Saga Network = Network{
	ChainId:           5464,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/saga-logo.png",
	SortIndex:         13,
	LaunchTime:        1740384000,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://sagaevm.sagaexplorer.io",
		},
	},
	DefaultPool:     common.HexToAddress("0x99429757ddeb5432b52982b0fcf6ed94620c358d"),
	InternalName:    "saga",
	TransactionType: "legacy",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa"),
	DefaultToken1:   common.HexToAddress("0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa"), common.HexToAddress("0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa"): {}, common.HexToAddress("0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x99429757ddeb5432b52982b0fcf6ed94620c358d"), common.HexToAddress("0xc2C5f2C94759b2829C9Fd86b8d34d33DDc4D29e4"), common.HexToAddress("0xbbf2219c49efde9c64cd5f94a952c90e4e5b6e41"), common.HexToAddress("0x69bf9603468922c76a75068f51874f56662d35e3"), common.HexToAddress("0x387b99a979c79f827f0ca8a752893472dc34b7ec")},
	BlockTimeSeconds: 5,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		LimitOrderRegistryDeployBlock: 19372,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
			NativeWrappedName:  "GAS",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                18885,
		PoolFactory:                common.HexToAddress("0x454050C4c9190390981Ac4b8d5AFcd7aC65eEffa"),
		Permit2:                    common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		Multicall2:                 common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		TickLens:                   common.HexToAddress("0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA"),
		NonfungiblePositionManager: common.HexToAddress("0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf"),
		PositionsNFT:               common.HexToAddress("0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf"),
		PositionsNFTDeployBlock:    18902,
		UniversalRouter:            common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		WrappedNativeAddress:       common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		WrappedNativeSymbol:        "wGAS",
		WrappedNativeName:          "Wrapped Gas",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "GAS",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5"),
		WethAddress: common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
	},
}
