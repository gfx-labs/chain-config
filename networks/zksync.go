package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Zksync Network = Network{
	LogoUrl:       "https://assets.oku.trade/zksync-logo.svg",
	SortIndex:     4,
	DefaultPool:   common.HexToAddress("0xff577f0e828a878743ecc5e2632cbf65cecf17cf"),
	InternalName:  "zksync",
	DefaultToken0: common.HexToAddress("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"),
	DefaultToken1: common.HexToAddress("0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
	//TokenList:        "",
	//Stables:          "",
	//Watchlist:        "",
	BlockTimeSeconds: 2,
	//Uniswap:          "",
	//Token:            "",
	//Oku:              "",
	//Contracts:        "",
}
