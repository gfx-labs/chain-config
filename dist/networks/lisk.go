package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Lisk Network = Network{
	ChainId:           1135,
	LogoUrl:           "https://assets.oku.trade/chains/lisk-logo.png",
	SortIndex:         15,
	LaunchTime:        1724076000,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://blockscout.lisk.com",
			ApiUrl: "https://blockscout.lisk.com/api/v2",
		},
	},
	DefaultPool:  common.HexToAddress("0xd501d4e381491f64274cc65fdec32b47264a2422"),
	InternalName: "lisk",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	DefaultToken1: common.HexToAddress("0xac485391eb2d7d88253a7f1ef18c37f4242d1a24"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x3a670179bdece7eb4f570e30ee9d560f7ff4fac3"), common.HexToAddress("0xd501d4e381491f64274cc65fdec32b47264a2422"), common.HexToAddress("0x304d69c5e03e030d6b298C0d0467baeb310f1f68")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		LimitOrderRegistryDeployBlock: 579872,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                577168,
		PoolFactory:                common.HexToAddress("0x0d922Fb1Bc191F64970ac40376643808b4B74Df9"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA"),
		TickLens:                   common.HexToAddress("0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF"),
		NonfungiblePositionManager: common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFT:               common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		PositionsNFTDeployBlock:    578398,
		UniversalRouter:            common.HexToAddress("0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	},
	Contracts: map[string]ChainContract{
		"gasPriceOracle": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x420000000000000000000000000000000000000F"),
		},
		"l1Block": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000015"),
		},
		"l2CrossDomainMessenger": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000007"),
		},
		"l2Erc721Bridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000014"),
		},
		"l2StandardBridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000010"),
		},
		"l2ToL1MessagePasser": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000016"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x352A86168e6988A1aDF9A15Cb00017AAd3B67155"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5911cB3633e764939edc2d92b7e1ad375Bb57649"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"),
		},
	},
}
