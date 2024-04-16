package networks

import (
	"errors"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"strconv"
)

var ErrNetworkNotFound = errors.New("chain not found")

type InternalName string

const (
	NameArbitrum     InternalName = "arbitrum"
	NameBase         InternalName = "base"
	NameBoba         InternalName = "boba"
	NameBlast        InternalName = "blast"
	NameBsc          InternalName = "bsc"
	NameFilecoin     InternalName = "filecoin"
	NameEthereum     InternalName = "ethereum"
	NameMoonbeam     InternalName = "moonbeam"
	NameOptimism     InternalName = "optimism"
	NamePolygon      InternalName = "polygon"
	NameRootstock    InternalName = "rootstock"
	NameScroll       InternalName = "scroll"
	NamePolygonZkevm InternalName = "polygon-zkevm"
	NameZksync       InternalName = "zksync"
	NameManta        InternalName = "manta"
	NameLinea        InternalName = "linea"
)

var networksByName = map[string]Network{
	"arbitrum":      Arbitrum,
	"base":          Base,
	"boba":          Boba,
	"blast":         Blast,
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
	"manta":         Manta,
	"linea":         Linea,
}

var networksById = map[int]Network{
	42161:  Arbitrum,
	8453:   Base,
	288:    Boba,
	81457:  Blast,
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
	169:    Manta,
	59144:  Linea,
}

func NetworkByName(name string) (*Network, error) {
	val, ok := networksByName[name]
	if !ok {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, name)
	}
	return &val, nil
}
func NetworkById(id int) (*Network, error) {
	val, ok := networksById[id]
	if !ok {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, id)
	}
	return &val, nil
}
func NetworkByIdString(idString string) (*Network, error) {
	i64, err := strconv.ParseInt(idString, 0, 64)
	if err != nil {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, idString)
	}
	return NetworkById(int(i64))
}

type Network struct {
	LogoUrl           string
	SortIndex         int64
	SafeReorgDistance int64
	DefaultPool       common.Address
	InternalName      string
	DefaultToken0     common.Address
	DefaultToken1     common.Address
	TokenList         []any
	Stables           []common.Address
	Watchlist         []common.Address
	ExternalId        map[string]string
	BlockTimeSeconds  float64
	Uniswap           UniswapMetadata
	Token             TokenMetadata
	Oku               OkuMetadata
	Contracts         map[string]ChainContract

	ChainId        int `json:"chainId"`
	BlockExplorers map[string]string
	StablecoinMap  map[common.Address]struct{}
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
	UniversalRouter                    common.Address
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
