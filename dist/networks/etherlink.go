package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Etherlink Network = Network{
	ChainId:           42793,
	LogoUrl:           "https://assets.oku.trade/chains/etherlink-logo.png",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         15,
	LaunchTime:        1750211928,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.etherlink.com",
		},
	},
	DefaultPool:     common.HexToAddress("0x659fe227A739D7961F3c7bBc090ea9BfAFCC2A74"),
	InternalName:    "etherlink",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9"),
	DefaultToken1: common.HexToAddress("0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9"), common.HexToAddress("0x2C03058C8AFC06713be23e58D2febC8337dbfE6A")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9"): {}, common.HexToAddress("0x2C03058C8AFC06713be23e58D2febC8337dbfE6A"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x659fe227a739d7961f3c7bbc090ea9bfafcc2a74"), common.HexToAddress("0x2a5120e8b04e7f2d3fbbbd82afb4cd70de0f5d0e"), common.HexToAddress("0xd03b92a27947bb08dd269107d4df00f8ab53fc28"), common.HexToAddress("0x80c789ebb377d257b5b660100757307099f0e3c0"), common.HexToAddress("0x50fe07f16943c55220fbc36c52e98559252a93b4"), common.HexToAddress("0xb5135165da8207f90598a2d58215aeb5f6e9f5ec")},
	BlockTimeSeconds: 0.6,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		LimitOrderRegistryDeployBlock: 16186329,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb"),
			NativeWrappedName:  "XTZ",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                14584055,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    14584114,
		UniversalRouter:            common.HexToAddress("0x9db70E29712Cc8Af10c2B597BaDA6784544FF407"),
		WrappedNativeAddress:       common.HexToAddress("0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb"),
		WrappedNativeSymbol:        "WXTZ",
		WrappedNativeName:          "Wrapped XTZ",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "XTZ",
	},

	Morpho: MorphoMetadata{
		DeployBlock:     21047448,
		Morpho:          common.HexToAddress("0xbCE7364E63C3B13C73E9977a83c9704E2aCa876e"),
		PublicAllocator: common.HexToAddress("0x8b8B1bd41d36c06253203CD21463994aB752c1e6"),
		MmFactory11:     common.HexToAddress("0x997a79c3C04c5B9eb27d343ae126bcCFb5D74781"),
		Bundler3:        common.HexToAddress("0x69dc8086191437b55775b79C730BB3876397e7D1"),
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb"),
		UsdcAddress: common.HexToAddress("0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9"),
		WbtcAddress: common.HexToAddress("0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
	},
}
