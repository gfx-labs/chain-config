package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Unichain Network = Network{
	ChainId:           130,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/unichain-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         18,
	LaunchTime:        1750384728,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://uniscan.xyz",
			ApiUrl: "https://api.uniscan.xyz/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x65081CB48d74A32e9CCfED75164b8c09972DBcF1"),
	InternalName:    "unichain",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly":  "true",
		"coingecko": "unichain",
	},
	DefaultToken0: common.HexToAddress("0x078d782b760474a361dda0af3839290b0ef57ad6"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	BlockAid:      "unichain",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x078d782b760474a361dda0af3839290b0ef57ad6"), common.HexToAddress("0x9151434b16b9763660705744891fa906f660ecc5"), common.HexToAddress("0x20cab320a855b39f724131c69424240519573f81")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x078d782b760474a361dda0af3839290b0ef57ad6"): {}, common.HexToAddress("0x9151434b16b9763660705744891fa906f660ecc5"): {}, common.HexToAddress("0x20cab320a855b39f724131c69424240519573f81"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x65081CB48d74A32e9CCfED75164b8c09972DBcF1"), common.HexToAddress("0x5C75bFB6194D7D763d33eA292cBc50cDa806451B"), common.HexToAddress("0xd49174DbA635489C67fA628864C2D0d04824eBd8"), common.HexToAddress("0xbDA709a0665b340898856B8B29FF87079bb130D3"), common.HexToAddress("0x18b268965E4E702bDf13469205937894b8Ab0Ee8"), common.HexToAddress("0xFF9722Cb0712261A7F02A451dd178De10234Ad0c"), common.HexToAddress("0x6b918c9F87B46a758C2B51bce427C8028DaCb720"), common.HexToAddress("0x1D6ae37DB0e36305019fB3d4bad2750B8784aDF9"), common.HexToAddress("0x12095933f1eeB066176dD2E41e5a2F8bE6974616"), common.HexToAddress("0x8EB4b07AFFbd1083F42032EeD35Cd32e382Ee8b7"), common.HexToAddress("0xfBC45aB96D02E150b2DDEb7dd4EAcd3D8c674F4a"), common.HexToAddress("0x18CE92e7a37D994657f97c3DeFAf880A805F08d5"), common.HexToAddress("0xc673d5164103357A7537C36438A6326776A14bbd"), common.HexToAddress("0xa9c6669dE2C04C2ADb22Ac7A65D75B47FEe30E35"), common.HexToAddress("0x8927058918e3CFf6F55EfE45A58db1be1F069E49")},
	BlockTimeSeconds: 1,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		LimitOrderRegistryDeployBlock: 19179485,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "ETH",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                0,
		PoolFactory:                common.HexToAddress("0x1f98400000000000000000000000000000000003"),
		Permit2:                    common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                 common.HexToAddress("0xb7610f9b733e7d45184be3a1bc966960ccc54f0b"),
		TickLens:                   common.HexToAddress("0xd5d76fa166ab8d8ad4c9f61aaa81457b66cbe443"),
		NonfungiblePositionManager: common.HexToAddress("0x943e6e07a7e8e791dafc44083e54041d743c46e9"),
		PositionsNFT:               common.HexToAddress("0x943e6e07a7e8e791dafc44083e54041d743c46e9"),
		PositionsNFTDeployBlock:    294152,
		UniversalRouter:            common.HexToAddress("0x4D73A4411CA1c660035e4AECC8270E5DdDEC8C17"),
		WrappedNativeAddress:       common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:        "WETH",
		WrappedNativeName:          "Wrapped Ether",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "ETH",
	},
	Uniswapv4: UniswapV4Metadata{
		DeployBlock:     0,
		PoolManager:     common.HexToAddress("0x1f98400000000000000000000000000000000004"),
		PositionManager: common.HexToAddress("0x4529a01c7a0410167c5740c487a8de60232617bf"),
		UniversalRouter: common.HexToAddress("0xef740bf23acae26f6492b10de645d6b98dc8eaf3"),
		Permit2:         common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		DefaultPool:     common.HexToHash("0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9"),
		StateView:       common.HexToAddress("0x86e8631a016f9068c3f085faf484ee3f5fdee8f2"),
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
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x943e6e07a7e8e791dafc44083e54041d743c46e9"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xb7610f9b733e7d45184be3a1bc966960ccc54f0b"),
		},
	},
}
