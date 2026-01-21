package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Zksync Network = Network{
	ChainId:           324,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/zksync-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         35,
	LaunchTime:        1696514400,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://era.zksync.network",
			ApiUrl: "https://api-era.zksync.network/api",
		},
		"explorer": {
			Url:    "https://explorer.zksync.io",
			ApiUrl: "https://block-explorer-api.mainnet.zksync.io/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x3e3dd517fec2e70eddba2a626422a4ba286e8c38"),
	InternalName:    "zksync",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed"),
	ExternalId: map[string]string{
		"zerion":    "zksync-era",
		"tenderly":  "true",
		"coingecko": "zksync",
	},
	DefaultToken0: common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
	DefaultToken1: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
	BlockAid:      "zksync",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"), common.HexToAddress("0x503234F203fC7Eb888EEC8513210612a43Cf6115"), common.HexToAddress("0x493257fD37EDB34451f62EDf8D2a0C418852bA4C"), common.HexToAddress("0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"): {}, common.HexToAddress("0x503234F203fC7Eb888EEC8513210612a43Cf6115"): {}, common.HexToAddress("0x493257fD37EDB34451f62EDf8D2a0C418852bA4C"): {}, common.HexToAddress("0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xff577f0e828a878743ecc5e2632cbf65cecf17cf"), common.HexToAddress("0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135"), common.HexToAddress("0x3f618967492945c02d5222d333e903345fde741a"), common.HexToAddress("0xc99bcff6564bafc70ba1b53c53a03541f780a546"), common.HexToAddress("0x1fa900dbb20ed45d18883849c00632bca16f6610"), common.HexToAddress("0xbEEA3B382696669e0E67C08Ea9f4aaE8d528Af0F"), common.HexToAddress("0xf8C42655373A280e8800BEeE44fcC12ffC99E797"), common.HexToAddress("0xa07028B453a1f6Ac277e93f3A0eA73B4bE5c7d63"), common.HexToAddress("0x23C77A553AAc0ad009441C856c05D117c1131e3d")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa"),
		LimitOrderRegistryDeployBlock: 13618344,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                12637075,
		PoolFactory:                common.HexToAddress("0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422"),
		Permit2:                    common.HexToAddress("0x0000000000225e31d15943971f47ad3022f714fa"),
		Multicall2:                 common.HexToAddress("0x8bB86A31795d3e8ef12c630C288770e13eEcF038"),
		TickLens:                   common.HexToAddress("0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89"),
		NonfungiblePositionManager: common.HexToAddress("0x0616e5762c1E7Dc3723c50663dF10a162D690a86"),
		PositionsNFT:               common.HexToAddress("0x0616e5762c1E7Dc3723c50663dF10a162D690a86"),
		PositionsNFTDeployBlock:    12637120,
		UniversalRouter:            common.HexToAddress("0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06"),
		WrappedNativeAddress:       common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
		WethAddress: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
		WbtcAddress: common.HexToAddress("0xBBeB516fb02a01611cBBE0453Fe3c580D7281011"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xF9cda624FBC7e059355ce98a31693d299FACd963"),
		},
		"erc6492Verifier": {
			BlockCreated: 45659388,
			Address:      common.HexToAddress("0xfB688330379976DA81eB64Fe4BF50d7401763B9C"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0616e5762c1E7Dc3723c50663dF10a162D690a86"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5aea5775959fbc2557cc8789bc1bf90a239d9a91"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x8bB86A31795d3e8ef12c630C288770e13eEcF038"),
		},
	},
}
