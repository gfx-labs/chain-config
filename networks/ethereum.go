package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Ethereum Network = Network{
	LogoUrl:       "https://assets.oku.trade/ethereum-logo.webp",
	SortIndex:     0,
	DefaultPool:   common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
	InternalName:  "ethereum",
	DefaultToken0: common.HexToAddress("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
	DefaultToken1: common.HexToAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 15,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
