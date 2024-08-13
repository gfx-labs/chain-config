package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Taiko Network = Network{
	ChainId:           167000,
	LogoUrl:           "https://assets.oku.trade/taiko-logo.svg",
	SortIndex:         4,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://taikoscan.io",
			ApiUrl: "https://api.taikoscan.io/api",
		},
		"routescan": {
			Url:    "https://taikoscan.network",
			ApiUrl: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api",
		},
	},
	DefaultPool:   common.HexToAddress("0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b"),
	InternalName:  "taiko",
	InitCodeHash:  common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId:    map[string]string{},
	DefaultToken0: common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"),
	DefaultToken1: common.HexToAddress("0xa51894664a773981c6c112c43ce576f315d5b1b6"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xDaC937d4263E6A667A027FE59B2FFe2F91D54f46"), common.HexToAddress("0x5B731355AAd31C132dd4754E70E92c590Ae42386"), common.HexToAddress("0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b"), common.HexToAddress("0xcbf2e8520B88C4eC30B2B6ddfAa2900087B42D55"), common.HexToAddress("0x4e35666b3ebf367842b9b6d5b297a2a069f862f5"), common.HexToAddress("0x6dA6B21DB1Dfd19D67BfF1877f62953a2D365fc9")},
	BlockTimeSeconds: 24,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		LimitOrderRegistryDeployBlock: 2396,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                961,
		PoolFactory:                common.HexToAddress("0x75FC67473A91335B5b8F8821277262a13B38c9b3"),
		Permit2:                    common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		Multicall2:                 common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		TickLens:                   common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		NonfungiblePositionManager: common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFT:               common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		PositionsNFTDeployBlock:    980,
		UniversalRouter:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b"),
		WethAddress: common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8B3c541c30f9b29560f56B9E44b59718916B69EF"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA51894664A773981C6C112C43ce576f315d5b1B6"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		},
	},
}
