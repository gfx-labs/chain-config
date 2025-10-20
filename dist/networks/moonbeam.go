package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Moonbeam Network = Network{
	ChainId:           1284,
	LogoUrl:           "https://assets.oku.trade/chains/moonbeam-logo.svg",
	Deprecated:        true,
	LiteChain:         false,
	SortIndex:         12,
	LaunchTime:        1696341600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://moonscan.io",
			ApiUrl: "https://api-moonbeam.moonscan.io/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xba66370d96a9d61afa66283900b78c1f6ed02782"),
	InternalName:    "moonbeam",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"debank":   "mobm",
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0xab3f0245b83feb11d15aaffefd7ad465a59817ed"),
	DefaultToken1: common.HexToAddress("0xacc15dc74880c9944775448304b263d191c6077f"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xffffffff7d2b0b761af01ca8e25242976ac0ad7d"), common.HexToAddress("0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b"), common.HexToAddress("0x931715FEE2d06333043d11F658C8CE934aC61D0c"), common.HexToAddress("0x765277eebeca2e31912c9946eae1021199b39c61"), common.HexToAddress("0x06e605775296e851ff43b4daa541bb0984e9d6fd"), common.HexToAddress("0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73"), common.HexToAddress("0x8e70cd5b4ff3f62659049e74b6649c6603a0e594")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xffffffff7d2b0b761af01ca8e25242976ac0ad7d"): {}, common.HexToAddress("0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b"): {}, common.HexToAddress("0x931715FEE2d06333043d11F658C8CE934aC61D0c"): {}, common.HexToAddress("0x765277eebeca2e31912c9946eae1021199b39c61"): {}, common.HexToAddress("0x06e605775296e851ff43b4daa541bb0984e9d6fd"): {}, common.HexToAddress("0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73"): {}, common.HexToAddress("0x8e70cd5b4ff3f62659049e74b6649c6603a0e594"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29"), common.HexToAddress("0xba66370d96a9d61afa66283900b78c1f6ed02782"), common.HexToAddress("0x19156c03a6fd894beb4fa6a828e854d3a4bed372"), common.HexToAddress("0xCb1f81BEf053d3C8adfFd37D2da84Fcc3BcC9954"), common.HexToAddress("0x53c1341cd81562c1b1a7562fff712CD7be95D51e"), common.HexToAddress("0x45bD0680bDFd180341A6dE806Aa4637f9AfBFc39")},
	BlockTimeSeconds: 30,
	Oku: OkuMetadata{

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xacc15dc74880c9944775448304b263d191c6077f"),
			NativeWrappedName:  "WGLMR",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        3340452,
		PoolFactory:                        common.HexToAddress("0x28f1158795A3585CaAA3cD6469CD65382b89BB70"),
		Permit2:                            common.HexToAddress("0xe96e30e92e01dc8a880f701b2d2160f93da18df7"),
		Multicall2:                         common.HexToAddress("0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2"),
		TickLens:                           common.HexToAddress("0x1f4F7b041895D9eB1A79be0896AF3E68e4160010"),
		Quoter:                             common.HexToAddress("0x48af91cdcad8ffdd7a8d4cdf73c16cb0632d3d17"),
		SwapRouter02:                       common.HexToAddress("0xc507e22ba3140dc0a79fdf27e03c98aa20f3ee66"),
		NFTDescriptor:                      common.HexToAddress("0x041b81cb4d223d8e70ac96c0d103f8a956ed4514"),
		NonfungibleTokenPositionDescriptor: common.HexToAddress("0x921c55AE486e63D16dbfbE216573A21aeB684c02"),
		TransparentUpgradeableProxy:        common.HexToAddress("0xEe6A57eC80ea46401049E92587E52f5Ec1c24785"),
		NonfungiblePositionManager:         common.HexToAddress("0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71"),
		V3Migrator:                         common.HexToAddress("0x76776b10d782a1d194fbfc92d4b01db1ce1eeb4b"),
		PositionsNFT:                       common.HexToAddress("0x9036D0DcB5a059C9371B05D508f0072Df773854e"),
		PositionsNFTDeployBlock:            3340476,
		UniversalRouter:                    common.HexToAddress("0x1F56F4e1648e96633c7FE79002036E967403CDfF"),
		WrappedNativeAddress:               common.HexToAddress("0xab3f0245b83feb11d15aaffefd7ad465a59817ed"),
		WrappedNativeSymbol:                "WGLMR",
		WrappedNativeName:                  "Wrapped GLMR",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "GLMR",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xab3f0245b83feb11d15aaffefd7ad465a59817ed"),
		UsdcAddress: common.HexToAddress("0x931715FEE2d06333043d11F658C8CE934aC61D0c"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x9036d0dcb5a059c9371b05d508f0072df773854e"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xacc15dc74880c9944775448304b263d191c6077f"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2"),
		},
	},
}
