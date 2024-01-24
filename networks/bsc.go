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
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 3,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
