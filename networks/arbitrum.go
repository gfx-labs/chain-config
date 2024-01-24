package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Arbitrum Network = Network{
	LogoUrl:       "https://assets.oku.trade/arbitrum-logo.svg",
	SortIndex:     1,
	DefaultPool:   common.HexToAddress("0xcda53b1f66614552f834ceef361a8d12a0b8dad8"),
	InternalName:  "arbitrum",
	DefaultToken0: common.HexToAddress("0x912ce59144191c1204e64559fe8253a0e49e6548"),
	DefaultToken1: common.HexToAddress("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 0.25,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
