package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

type Network struct {
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	LogoUrl       string
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	SortIndex     int64
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	DefaultPool   common.Address
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	InternalName  string
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	DefaultToken0 common.Address
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	DefaultToken1 common.Address
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	TokenList     []any
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	Stables       []common.Address
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	Watchlist     []common.Address
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	BlockTimeSeconds float64
	ChainId          int `json:"chainId"`
	StablecoinMap    map[string]common.Address

	Uniswap       UniswapMetadata
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	Token         TokenMetadata
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	Oku           OkuMetadata
	ChainId       int `json:"chainId"`
	StablecoinMap map[string]common.Address

	Contracts map[string]ChainContract
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
	NativeWrappedName  string
	NativeQuotePools   []ChainContract
	Pools              []common.Address
}

type ChainContract struct {
	Address      common.Address
	BlockCreated int64
}
