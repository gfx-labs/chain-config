package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Base Network = Network{
	LogoUrl:       "https://assets.oku.trade/base-logo.svg",
	SortIndex:     8,
	DefaultPool:   common.HexToAddress("0x9e37cb775a047ae99fc5a24dded834127c4180cd"),
	InternalName:  "base",
	DefaultToken0: common.HexToAddress("0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8"),
	DefaultToken1: common.HexToAddress("0x4200000000000000000000000000000000000006"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 2,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
