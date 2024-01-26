package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Filecoin Network = Network{
	ChainId:           314,
	LogoUrl:           "https://assets.oku.trade/filecoin-logo.svg",
	SortIndex:         10,
	SafeReorgDistance: 90000,
	DefaultPool:       common.HexToAddress("0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05"),
	InternalName:      "filecoin",
	DefaultToken0:     common.HexToAddress("0xb829b68f57cc546da7e5806a929e53be32a4625d"),
	DefaultToken1:     common.HexToAddress("0xeb466342c4d449bc9f53a865d5cb90586f405215"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xEB466342C4d449BC9f53A865D5Cb90586f405215"), common.HexToAddress("0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6"), common.HexToAddress("0x2421db204968A367CC2C866CD057fA754Cb84EdF"), common.HexToAddress("0x422849b355039bc58f2780cc4854919fc9cfaf94")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xEB466342C4d449BC9f53A865D5Cb90586f405215"): struct{}{}, common.HexToAddress("0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6"): struct{}{}, common.HexToAddress("0x2421db204968A367CC2C866CD057fA754Cb84EdF"): struct{}{}, common.HexToAddress("0x422849b355039bc58f2780cc4854919fc9cfaf94"): struct{}{}},
	Watchlist:        []common.Address{common.HexToAddress("0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05"), common.HexToAddress("0x9d8ea62e1264ab667d234b5610774a08e608e3b8")},
	BlockTimeSeconds: 30,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0xded8791056aa39581460a005a3c400a281e24bd7"),
		LimitOrderRegistryDeployBlock: 3413267,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x60E1773636CF5E4A227d9AC24F20fEca034ee25A"),
			NativeWrappedName:  "WFIL",
			Pools:              []common.Address{},
			NativeQuotePools:   []ChainContract{},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                3195837,
		PoolFactory:                common.HexToAddress("0xB4C47eD546Fc31E26470a186eC2C5F19eF09BA41"),
		Multicall2:                 common.HexToAddress("0x732f5baac411e427d130fed03c2e82a3e0d64d35"),
		TickLens:                   common.HexToAddress("0x76c001ad9E527FEfA8Fa822a987Ad44ce720BAeD"),
		NonfungiblePositionManager: common.HexToAddress("0x4cd986dD509fbB6A695aE971d5C56c8795f640ee"),
		PositionsNFT:               common.HexToAddress("0x4cd986dD509fbB6A695aE971d5C56c8795f640ee"),
		PositionsNFTDeployBlock:    3195861,
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xEB466342C4d449BC9f53A865D5Cb90586f405215"),
		WbtcAddress: common.HexToAddress("0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad"),
		WethAddress: common.HexToAddress("0xb829b68f57CC546dA7E5806A929e53bE32a4625D"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xded8791056aa39581460a005a3c400a281e24bd7"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4cd986dD509fbB6A695aE971d5C56c8795f640ee"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x60E1773636CF5E4A227d9AC24F20fEca034ee25A"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x732f5baac411e427d130fed03c2e82a3e0d64d35"),
		},
	},
}
