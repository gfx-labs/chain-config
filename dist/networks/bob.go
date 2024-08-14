package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Bob Network = Network{
	ChainId:           60808,
	LogoUrl:           "https://assets.oku.trade/bob-logo.svg",
	SortIndex:         15,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://explorer.gobob.xyz",
		},
	},
	DefaultPool:  common.HexToAddress("0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de"),
	InternalName: "bob",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion": "bob",
	},
	DefaultToken0: common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"), common.HexToAddress("0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x05D032ac25d322df992303dCa074EE7392C117b9"): {}, common.HexToAddress("0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de")},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x0000000000000000000000000000000000000000"),
		LimitOrderRegistryDeployBlock: 1748477,
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
	},
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
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x0000000000000000000000000000000000000000"),
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
