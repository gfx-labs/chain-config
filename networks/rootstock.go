package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Rootstock Network = Network{
	LogoUrl:       "https://assets.oku.trade/rootstock-logo.svg",
	SortIndex:     7,
	DefaultPool:   common.HexToAddress("0xd2ffe51ab4e622a411abbe634832a19d919e9c55"),
	InternalName:  "rootstock",
	DefaultToken0: common.HexToAddress("0x542fda317318ebf1d3deaf76e0b632741a7e677d"),
	DefaultToken1: common.HexToAddress("0xef213441a85df4d7acbdae0cf78004e1e486bb96"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 33,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
