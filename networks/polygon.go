package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Polygon Network = Network{
	LogoUrl:       "https://assets.oku.trade/polygon-logo.webp",
	SortIndex:     3,
	DefaultPool:   common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"),
	InternalName:  "polygon",
	DefaultToken0: common.HexToAddress("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"),
	DefaultToken1: common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 2,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
