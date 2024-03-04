package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Rootstock Network = Network{
	ChainId:           30,
	LogoUrl:           "https://assets.oku.trade/rootstock-logo.svg",
	SortIndex:         7,
	SafeReorgDistance: 90000,
	DefaultPool:       common.HexToAddress("0xd2ffe51ab4e622a411abbe634832a19d919e9c55"),
	InternalName:      "rootstock",
	ZerionId:          "",
	DefaultToken0:     common.HexToAddress("0x542fda317318ebf1d3deaf76e0b632741a7e677d"),
	DefaultToken1:     common.HexToAddress("0xef213441a85df4d7acbdae0cf78004e1e486bb96"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xef213441a85df4d7acbdae0cf78004e1e486bb96"), common.HexToAddress("0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xef213441a85df4d7acbdae0cf78004e1e486bb96"): struct{}{}, common.HexToAddress("0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37"): struct{}{}},
	Watchlist:        []common.Address{common.HexToAddress("0xd2ffe51ab4e622a411abbe634832a19d919e9c55"), common.HexToAddress("0x022650756421f2e636d4138054331cbfafb55d9e"), common.HexToAddress("0x549a5d92412161a1a2828549a657a49dd9fa046c"), common.HexToAddress("0xcba7abe98fd6a65259837d76a3409841c1dd4288"), common.HexToAddress("0xbe092d38045ef7f9cdc5014278a4239e896bf5ca")},
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
		Multicall2:                 common.HexToAddress("0x996a9858cdFa45aD68E47C9a30A7201E29c6A386"),
		TickLens:                   common.HexToAddress("0x55B9dF5bF68ADe972191a91980459f48ecA16afC"),
		NonfungiblePositionManager: common.HexToAddress("0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1"),
		PositionsNFT:               common.HexToAddress("0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1"),
		PositionsNFTDeployBlock:    5829891,
		UniversalRouter:            common.HexToAddress("0x244f68e77357f86a8522323eBF80b5FC2F814d3E"),
	},
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
