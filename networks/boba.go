package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Boba Network = Network{
	LogoUrl:       "https://assets.oku.trade/boba-logo.svg",
	SortIndex:     11,
	DefaultPool:   common.HexToAddress("0xdF37543dae7986E48E3ce83F390A828A9F3D23BA"),
	InternalName:  "boba",
	DefaultToken0: common.HexToAddress("0x66a2a913e447d6b4bf33efbec43aaef87890fbbc"),
	DefaultToken1: common.HexToAddress("0xa18bf3994c0cc6e3b63ac420308e5383f53120d7"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 300,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
