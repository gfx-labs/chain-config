package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Bob Network = Network{
	ChainId:           60808,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/bob-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         15,
	LaunchTime:        1727359200,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.gobob.xyz",
		},
	},
	DefaultPool:     common.HexToAddress("0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de"),
	InternalName:    "bob",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"), common.HexToAddress("0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0"), common.HexToAddress("0x6c851f501a3f24e29a8e39a29591cddf09369080"), common.HexToAddress("0x1217BfE6c773EEC6cc4A38b5Dc45B92292B6E189")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"): {}, common.HexToAddress("0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0"): {}, common.HexToAddress("0x6c851f501a3f24e29a8e39a29591cddf09369080"): {}, common.HexToAddress("0x1217BfE6c773EEC6cc4A38b5Dc45B92292B6E189"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de"), common.HexToAddress("0x6407fec527abad1aafdb9a3b5a2171800c21a2fe"), common.HexToAddress("0xe112389471d577f7bc45c03c7c37f70abca1cc93"), common.HexToAddress("0x566b9414c8733c14a96b8a21ca47711972f99d1a"), common.HexToAddress("0x4a1df9716147b785f3f82019f36f248ac15dc308"), common.HexToAddress("0xb091ed2491a179a9f14a34f88587cd08195e592c"), common.HexToAddress("0x508a838922a93096c1eb23fe21d8938bbd653db6"), common.HexToAddress("0x41a98efc1742a60aba6afbcb2073e64477b5333a"), common.HexToAddress("0x45bfa70e8f387da47ffe3dec447bc16f0b9a6261")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x447b8e40b0cda8e55f405c86bc635d02d0540ab8"),
		LimitOrderRegistryDeployBlock: 5624845,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                5188280,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xCbe9Be2C87b24b063A21369b6AB0Aa9f149c598F"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    5189019,
		UniversalRouter:            common.HexToAddress("0x346239972d1fa486FC4a521031BC81bFB7D6e8a4"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WbtcAddress: common.HexToAddress("0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3"),
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
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
