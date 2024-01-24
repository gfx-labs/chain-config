package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Filecoin Network = Network{
	LogoUrl:       "https://assets.oku.trade/filecoin-logo.svg",
	SortIndex:     10,
	DefaultPool:   common.HexToAddress("0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05"),
	InternalName:  "filecoin",
	DefaultToken0: common.HexToAddress("0xb829b68f57cc546da7e5806a929e53be32a4625d"),
	DefaultToken1: common.HexToAddress("0xeb466342c4d449bc9f53a865d5cb90586f405215"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 30,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
