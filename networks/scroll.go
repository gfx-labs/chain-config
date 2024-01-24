package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Scroll Network = Network{
	LogoUrl:       "https://assets.oku.trade/scroll-logo.png",
	SortIndex:     5,
	DefaultPool:   common.HexToAddress("0x813df550a32d4a9d42010d057386429ad2328ed9"),
	InternalName:  "scroll",
	DefaultToken0: common.HexToAddress("0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4"),
	DefaultToken1: common.HexToAddress("0x5300000000000000000000000000000000000004"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 3,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
