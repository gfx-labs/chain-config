package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Rootstock Network = Network{
	ChainId:           30,
	LogoUrl:           "https://assets.oku.trade/chains/rootstock-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         7,
	LaunchTime:        1702479600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://rootstock.blockscout.com",
			ApiUrl: "https://rootstock.blockscout.com/api",
		},
		"rsk": {
			Url: "https://explorer.rsk.co",
		},
	},
	DefaultPool:     common.HexToAddress("0xaef6fabf3b0c9e5f9d6d5170afc703a633479bbd"),
	InternalName:    "rootstock",
	TransactionType: "legacy",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:      map[string]string{},
	DefaultToken0:   common.HexToAddress("0x542fda317318ebf1d3deaf76e0b632741a7e677d"),
	DefaultToken1:   common.HexToAddress("0x779ded0c9e1022225f8e0630b35a9b54be713736"),
	BlockAid:        "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xef213441a85df4d7acbdae0cf78004e1e486bb96"), common.HexToAddress("0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37"), common.HexToAddress("0xaf368c91793cb22739386dfcbbb2f1a9e4bcbebf"), common.HexToAddress("0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67"), common.HexToAddress("0x779ded0c9e1022225f8e0630b35a9b54be713736")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xef213441a85df4d7acbdae0cf78004e1e486bb96"): {}, common.HexToAddress("0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37"): {}, common.HexToAddress("0xaf368c91793cb22739386dfcbbb2f1a9e4bcbebf"): {}, common.HexToAddress("0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67"): {}, common.HexToAddress("0x779ded0c9e1022225f8e0630b35a9b54be713736"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xd2ffe51ab4e622a411abbe634832a19d919e9c55"), common.HexToAddress("0x022650756421f2e636d4138054331cbfafb55d9e"), common.HexToAddress("0x549a5d92412161a1a2828549a657a49dd9fa046c"), common.HexToAddress("0xcba7abe98fd6a65259837d76a3409841c1dd4288"), common.HexToAddress("0xbe092d38045ef7f9cdc5014278a4239e896bf5ca"), common.HexToAddress("0xb74d0aa1711eb859eead7cfe3fe5921eedd7e5bf"), common.HexToAddress("0x8f597295f1412a079088fc51c8a95e6698c31777"), common.HexToAddress("0x71d0d054974121ae37a76762e1fa02ffa150eba1")},
	BlockTimeSeconds: 33,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x83B1cF411f57F7373bBFF81dCE81437e768F4252"),
		LimitOrderRegistryDeployBlock: 5842098,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x542fDA317318eBF1d3DEAf76E0b632741A7e677d"),
			NativeWrappedName:  "WRBTC",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                5829210,
		PoolFactory:                common.HexToAddress("0xaF37EC98A00FD63689CF3060BF3B6784E00caD82"),
		Permit2:                    common.HexToAddress("0xFcf5986450E4A014fFE7ad4Ae24921B589D039b5"),
		Multicall2:                 common.HexToAddress("0x996a9858cdFa45aD68E47C9a30A7201E29c6A386"),
		TickLens:                   common.HexToAddress("0x55B9dF5bF68ADe972191a91980459f48ecA16afC"),
		NonfungiblePositionManager: common.HexToAddress("0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1"),
		PositionsNFT:               common.HexToAddress("0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1"),
		PositionsNFTDeployBlock:    5829891,
		UniversalRouter:            common.HexToAddress("0x244f68e77357f86a8522323eBF80b5FC2F814d3E"),
		WrappedNativeAddress:       common.HexToAddress("0x542fDA317318eBF1d3DEAf76E0b632741A7e677d"),
		WrappedNativeSymbol:        "WRBTC",
		WrappedNativeName:          "Wrapped BTC",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "RBTC",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x3A15461d8AE0f0Fb5fA2629e9dA7D66A794a6E37"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 4249540,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x83B1cF411f57F7373bBFF81dCE81437e768F4252"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x542fDA317318eBF1d3DEAf76E0b632741A7e677d"),
		},
		"Multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x996a9858cdFa45aD68E47C9a30A7201E29c6A386"),
		},
		"Multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
		},
	},
}
