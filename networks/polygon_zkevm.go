package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var PolygonZkevm Network = Network{
	LogoUrl:       "https://assets.oku.trade/zkevm-logo.svg",
	SortIndex:     6,
	DefaultPool:   common.HexToAddress("0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd"),
	InternalName:  "polygon-zkevm",
	DefaultToken0: common.HexToAddress("0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9"),
	DefaultToken1: common.HexToAddress("0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 7,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
