package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Bsc Network = Network{
	LogoUrl:       "https://assets.oku.trade/bsc-logo.svg",
	SortIndex:     9,
	DefaultPool:   common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869"),
	InternalName:  "bsc",
	DefaultToken0: common.HexToAddress("0x55d398326f99059ff775485246999027b3197955"),
	DefaultToken1: common.HexToAddress("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"),
	//TokenList:        "",
	Stables:          []common.Address{},
	Watchlist:        []common.Address{common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869")},
	BlockTimeSeconds: 3,
	Uniswap: UniswapMetadata{
		DeployBlock:                        969351,
		PoolFactory:                        common.HexToAddress("0xFFCd7Aed9C627E82A765c3247d562239507f6f1B"),
		Multicall2:                         common.HexToAddress("0xd213Ff319F8d28Fe31EbDB75b23aA61a2b905320"),
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
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"),
		WbtcAddress: common.HexToAddress("0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"),
		WethAddress: common.HexToAddress("0x2170ed0880ac9a755fd29b2688956bd959f933f8"),
	},
	Oku: OkuMetadata{
		//"",
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B"),
		},
	},
}
