package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Boba Network = Network{
	ChainId:           288,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/boba-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         14,
	LaunchTime:        1690297200,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://bobascan.com",
			ApiUrl: "https://api.routescan.io/v2/network/mainnet/evm/288/etherscan/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xdF37543dae7986E48E3ce83F390A828A9F3D23BA"),
	InternalName:    "boba",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"debank":   "boba",
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x66a2a913e447d6b4bf33efbec43aaef87890fbbc"),
	DefaultToken1: common.HexToAddress("0xa18bf3994c0cc6e3b63ac420308e5383f53120d7"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x66a2a913e447d6b4bf33efbec43aaef87890fbbc"), common.HexToAddress("0x5de1677344d3cb0d7d465c10b72a8f60699c062d"), common.HexToAddress("0xf74195bb8a5cf652411867c5c2c5b8c2a402be35")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x66a2a913e447d6b4bf33efbec43aaef87890fbbc"): {}, common.HexToAddress("0x5de1677344d3cb0d7d465c10b72a8f60699c062d"): {}, common.HexToAddress("0xf74195bb8a5cf652411867c5c2c5b8c2a402be35"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xdF37543dae7986E48E3ce83F390A828A9F3D23BA"), common.HexToAddress("0x162b1fda171463974e5262bac5824da233f11e00"), common.HexToAddress("0xfe1a0c58e38fa71618545df15e5479559ce51108"), common.HexToAddress("0xb1ed67e29b2497404a2ac7f2a2989c3328ec2999"), common.HexToAddress("0x66faef55892dae3932a043d3238ecaa271d36e0d"), common.HexToAddress("0x67fac3b54b6391e3183d2d74b7d2c430ad44fca1")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xfefb60591cffc694c0137983a9091d64af8ecbac"),
		LimitOrderRegistryDeployBlock: 1052192,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000"),
			NativeWrappedName:  "WETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        969351,
		PoolFactory:                        common.HexToAddress("0xFFCd7Aed9C627E82A765c3247d562239507f6f1B"),
		Permit2:                            common.HexToAddress("0xF80c91442D3EF66632958C0d395667075FC82fB0"),
		Multicall2:                         common.HexToAddress("0x07956092c0F4818D6792a42035d2d2fa0C75E76B"),
		ProxyAdmin:                         common.HexToAddress("0xE8B5DaE430189ea6ccffF4eEeC58a98556525fB4"),
		TickLens:                           common.HexToAddress("0x36EBd44350E4406E67C5579026950793b8528402"),
		Quoter:                             common.HexToAddress("0x483fc90DDC7aC847D4a752055DCF73483B6d97FD"),
		SwapRouter02:                       common.HexToAddress("0x759E8B0cb9d65291e258aE3e043258ae1dD0df16"),
		NFTDescriptor:                      common.HexToAddress("0x531c3B226288854e992150FEfF4d95F7B8DEbD8c"),
		NonfungibleTokenPositionDescriptor: common.HexToAddress("0xb6751A274EDAe02A911E3bB23682FAaF380433b7"),
		TransparentUpgradeableProxy:        common.HexToAddress("0xEe6A57eC80ea46401049E92587E52f5Ec1c24785"),
		NonfungiblePositionManager:         common.HexToAddress("0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71"),
		V3Migrator:                         common.HexToAddress("0x9ab1E646877732DD76bd662DC242723D7e4B42ba"),
		UniswapV3Staker:                    common.HexToAddress("0x6a6c1198f85B084822138DFd3fA9686e4029c091"),
		PositionsNFT:                       common.HexToAddress("0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71"),
		PositionsNFTDeployBlock:            969359,
		UniversalRouter:                    common.HexToAddress("0x4BA622997559F9b5Ac68751D7Fc3dEecc23a0e88"),
		WrappedNativeAddress:               common.HexToAddress("0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000"),
		WrappedNativeSymbol:                "WETH",
		WrappedNativeName:                  "Wrapped Ether",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "ETH",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000"),
		UsdcAddress: common.HexToAddress("0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xfefb60591cffc694c0137983a9091d64af8ecbac"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x07956092c0F4818D6792a42035d2d2fa0C75E76B"),
		},
	},
}
