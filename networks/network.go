package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

type Network struct {
	LogoUrl          string
	SortIndex        int64
	DefaultPool      common.Address
	InternalName     string
	DefaultToken0    common.Address
	DefaultToken1    common.Address
	TokenList        []any
	Stables          []common.Address
	Watchlist        []common.Address
	BlockTimeSeconds float64
	Uniswap          UniswapMetadata
	Token            TokenMetadata
	Oku              OkuMetadata
	Contracts        map[string]ChainContract
}

type UniswapMetadata struct {
	DeployBlock                        int64
	PoolFactory                        common.Address
	Multicall2                         common.Address
	ProxyAdmin                         common.Address
	TickLens                           common.Address
	Quoter                             common.Address
	SwapRouter                         common.Address
	SwapRouter02                       common.Address
	NFTDescriptor                      common.Address
	NonfungibleTokenPositionDescriptor common.Address
	TransparentUpgradeableProxy        common.Address
	NonfungiblePositionManager         common.Address
	V3Migrator                         common.Address
	UniswapV3Staker                    common.Address
	PositionsNFT                       common.Address
	TopNativePool                      common.Address
	PositionsNFTDeployBlock            int64
}

type TokenMetadata struct {
	WethAddress common.Address
	WbtcAddress common.Address
	UsdcAddress common.Address
}

type OkuMetadata struct {
	LimitOrderRegistry            common.Address
	LimitOrderRegistryDeployBlock int64
	Pricing                       OkuPricingMetadata
}

type OkuPricingMetadata struct {
	NativeWrappedToken common.Address
	NativeQuotePools   []ChainContract
	Pools              []common.Address
	StablecoinList     []common.Address
}

type ChainContract struct {
	Address      common.Address
	BlockCreated int64
}
