package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Moonbeam Network = Network{
	LogoUrl:       "https://assets.oku.trade/moonbeam-logo.svg",
	SortIndex:     12,
	DefaultPool:   common.HexToAddress("0xba66370d96a9d61afa66283900b78c1f6ed02782"),
	InternalName:  "moonbeam",
	DefaultToken0: common.HexToAddress("0xab3f0245b83feb11d15aaffefd7ad465a59817ed"),
	DefaultToken1: common.HexToAddress("0xacc15dc74880c9944775448304b263d191c6077f"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 30,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
