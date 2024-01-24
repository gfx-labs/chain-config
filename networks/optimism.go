package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Optimism Network = Network{
	LogoUrl:       "https://assets.oku.trade/optimism-logo.svg",
	SortIndex:     2,
	DefaultPool:   common.HexToAddress("0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36"),
	InternalName:  "optimism",
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000042"),
	DefaultToken1: common.HexToAddress("0x7f5c764cbc14f9669b88837ca1490cca17c31607"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 0.5,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
