package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Sonic Network = Network{
	ChainId:           146,
	LogoUrl:           "https://assets.oku.trade/chains/sonic-logo.svg",
	SortIndex:         15,
	LaunchTime:        1737165834,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url: "https://sonicscan.org",
		},
	},
	DefaultPool:  common.HexToAddress("0xEcb04e075503Bd678241f00155AbCB532c0a15Eb"),
	InternalName: "sonic",
	InitCodeHash: common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38"),
	DefaultToken1: common.HexToAddress("0x29219dd400f2bf60e5a23d13be72b486d4038894"),
	BlockAid:      "",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x29219dd400f2bf60e5a23d13be72b486d4038894"), common.HexToAddress("0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x29219dd400f2bf60e5a23d13be72b486d4038894"): {}, common.HexToAddress("0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xecb04e075503bd678241f00155abcb532c0a15eb"), common.HexToAddress("0xcfd41df89d060b72ebdd50d65f9021e4457c477e"), common.HexToAddress("0xb01b201ce73415071b7b99a8737240b511d203b7"), common.HexToAddress("0xb345489a0350f188fe70dadaa6210a9c710fed4b"), common.HexToAddress("0xdfcdad314b0b96ab8890391e3f0540278e3b80f7"), common.HexToAddress("0x21043D7Ad92d9e7bC45C055AF29771E37307B111")},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		LimitOrderRegistryDeployBlock: 10948,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38"),
			NativeWrappedName:  "wS",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                322744,
		PoolFactory:                common.HexToAddress("0xcb2436774C3e191c85056d248EF4260ce5f27A9D"),
		Permit2:                    common.HexToAddress("0xB952578f3520EE8Ea45b7914994dcf4702cEe578"),
		Multicall2:                 common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		TickLens:                   common.HexToAddress("0xB3309C48F8407651D918ca3Da4C45DE40109E641"),
		NonfungiblePositionManager: common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFT:               common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		PositionsNFTDeployBlock:    322763,
		UniversalRouter:            common.HexToAddress("0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2"),
		WrappedNativeAddress:       common.HexToAddress("0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38"),
		WrappedNativeSymbol:        "wS",
		WrappedNativeName:          "Wrapped Sonic",
		WrappedNativeDecimals:      18,
		NativeCurrencyName:         "S",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38"),
	},
	Contracts: map[string]ChainContract{
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x743E03cceB4af2efA3CC76838f6E8B50B63F184c"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
	},
}
