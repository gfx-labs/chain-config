package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Mantle Network = Network{
	ChainId:           5000,
	LogoUrl:           "https://assets.oku.trade/mantle-logo.png",
	SortIndex:         15,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://mantlescan.xyz/",
			ApiUrl: "https://api.mantlescan.xyz/api",
		},
	},
	DefaultPool:   common.HexToAddress("0x076eb72e74c16b208c692eeab3750978d76b8f28"),
	InternalName:  "mantle",
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"),
	DefaultToken1: common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE"), common.HexToAddress("0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE"): {}, common.HexToAddress("0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x086F766b336DFB0f705Dc030dB01993b22D81266"), common.HexToAddress("0x076eb72E74C16b208c692EEAB3750978D76B8F28"), common.HexToAddress("0xFc60a4d05ac8C93F62276e046Ad5a098f5C7820a"), common.HexToAddress("0x4cdFc22bF05209de87Ee564746Dc7E5174631d2b"), common.HexToAddress("0x48EF5640E71001CaC842f5627A0bfec1EF09DeB7"), common.HexToAddress("0x8CFee38ab8b8f4BC2ff662E8cc8bDfb0439C9D2C")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		LimitOrderRegistryDeployBlock: 63839894,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
			NativeWrappedName:  "MNT",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                63795918,
		PoolFactory:                common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		Multicall2:                 common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		TickLens:                   common.HexToAddress("0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF"),
		NonfungiblePositionManager: common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFT:               common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFTDeployBlock:    63796102,
		UniversalRouter:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9"),
		WethAddress: common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
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
			Address:      common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
	},
}
