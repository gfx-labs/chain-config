package networks

import (
	"errors"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"strconv"
)

var ErrNetworkNotFound = errors.New("chain not found")

var networksByName = map[string]Network{
	"arbitrum":      Arbitrum,
	"base":          Base,
	"boba":          Boba,
	"bsc":           Bsc,
	"filecoin":      Filecoin,
	"ethereum":      Ethereum,
	"moonbeam":      Moonbeam,
	"optimism":      Optimism,
	"polygon":       Polygon,
	"rootstock":     Rootstock,
	"scroll":        Scroll,
	"polygon-zkevm": PolygonZkevm,
	"zksync":        Zksync,
}

var networksById = map[int]Network{
	42161:  Arbitrum,
	8453:   Base,
	288:    Boba,
	56:     Bsc,
	314:    Filecoin,
	1:      Ethereum,
	1284:   Moonbeam,
	10:     Optimism,
	137:    Polygon,
	30:     Rootstock,
	534352: Scroll,
	1101:   PolygonZkevm,
	324:    Zksync,
}

func NetworkByName(name string) (*Network, error) {
	val, ok := networksByName[name]
	if !ok {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, name)
	}
	return &val, nil
}

func NetworkById(idString string) (*Network, error) {
	i64, err := strconv.ParseInt(idString, 0, 64)
	if err != nil {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, idString)
	}
	id := int(i64)
	val, ok := networksById[id]
	if !ok {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, id)
	}
	return &val, nil
}

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

	ChainId       int `json:"chainId"`
	StablecoinMap map[common.Address]struct{}
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
