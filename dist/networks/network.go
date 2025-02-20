package networks

import (
	"errors"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"strconv"
	"strings"
	"time"
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
	NameTaiko        InternalName = "taiko"
	NameMantle       InternalName = "mantle"
	NameSei          InternalName = "sei"
	NameLisk         InternalName = "lisk"
	NameBob          InternalName = "bob"
	NameGnosis       InternalName = "gnosis"
	NameXlayer       InternalName = "xlayer"
	NameMetal        InternalName = "metal"
	NameCorn         InternalName = "corn"
	NameSonic        InternalName = "sonic"
	NameCelo         InternalName = "celo"
	NameHemi         InternalName = "hemi"
	NameTelos        InternalName = "telos"
	NameSaga         InternalName = "saga"
	NameGoat         InternalName = "goat"
	NameRedbelly     InternalName = "redbelly"
)

var AllNetworks = []Network{
	Arbitrum,
	Base,
	Boba,
	Blast,
	Bsc,
	Filecoin,
	Ethereum,
	Moonbeam,
	Optimism,
	Polygon,
	Rootstock,
	Scroll,
	PolygonZkevm,
	Zksync,
	Manta,
	Linea,
	Taiko,
	Mantle,
	Sei,
	Lisk,
	Bob,
	Gnosis,
	Xlayer,
	Metal,
	Corn,
	Sonic,
	Celo,
	Hemi,
	Telos,
	Saga,
	Goat,
	Redbelly,
}

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
	"taiko":         Taiko,
	"mantle":        Mantle,
	"sei":           Sei,
	"lisk":          Lisk,
	"bob":           Bob,
	"gnosis":        Gnosis,
	"xlayer":        Xlayer,
	"metal":         Metal,
	"corn":          Corn,
	"sonic":         Sonic,
	"celo":          Celo,
	"hemi":          Hemi,
	"telos":         Telos,
	"saga":          Saga,
	"goat":          Goat,
	"redbelly":      Redbelly,
}

var networksById = map[int]Network{
	42161:    Arbitrum,
	8453:     Base,
	288:      Boba,
	81457:    Blast,
	56:       Bsc,
	314:      Filecoin,
	1:        Ethereum,
	1284:     Moonbeam,
	10:       Optimism,
	137:      Polygon,
	30:       Rootstock,
	534352:   Scroll,
	1101:     PolygonZkevm,
	324:      Zksync,
	169:      Manta,
	59144:    Linea,
	167000:   Taiko,
	5000:     Mantle,
	1329:     Sei,
	1135:     Lisk,
	60808:    Bob,
	100:      Gnosis,
	196:      Xlayer,
	1750:     Metal,
	21000000: Corn,
	146:      Sonic,
	42220:    Celo,
	43111:    Hemi,
	40:       Telos,
	5464:     Saga,
	2345:     Goat,
	151:      Redbelly,
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
	LaunchTime        int64
	NativeLogoUrl     string
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
	Markets           Markets
	Bridges           Bridges
	Oracles           Oracles
	InitCodeHash      common.Hash
	BlockTimeSeconds  float64
	Uniswap           UniswapMetadata
	Morpho            MorphoMetadata
	Token             TokenMetadata
	Oku               OkuMetadata
	Contracts         map[string]ChainContract

	ChainId        int `json:"chainId"`
	BlockExplorers map[string]BlockExplorer
	StablecoinMap  map[common.Address]struct{}
}

func (n *Network) IsStable(a common.Address) bool {
	_, ok := n.StablecoinMap[a]
	return ok
}

func (n *Network) BlockTime() time.Duration {
	return time.Duration(n.BlockTimeSeconds * float64(time.Second))
}

func (n *Network) GetContract(name string) common.Address {
	res, ok := n.Contracts[strings.ToLower(name)]
	if !ok {
		return common.Address{}
	}
	return res.Address
}

// determines if we should swap the two tokens. we swap if token0 is a stable, or a priority token
func (n *Network) ShouldFlip(token0, token1 common.Address) bool {
	priority := func(t common.Address) int {
		if t == n.Token.WethAddress {
			return 3
		}
		if t == n.Token.WbtcAddress {
			return 2
		}
		return 0
	}
	token0Stable, token1Stable := n.IsStable(token0), n.IsStable(token1)

	// if token0 is a stablecoin, we should flip
	if token0Stable {
		return true
	}
	// otherwise, if token1 is a stable, we shouldn't flip
	if token1Stable {
		return false
	}
	token0Priority, token1Priority := priority(token0), priority(token1)
	// token0 is a prioirty token, so we should swap
	if token0Priority > token1Priority {
		return true
	}
	return false
}

func (n *Network) GetNativePoolToQuoteWith(block int64) (common.Address, error) {
	for _, q := range n.Oku.Pricing.NativeQuotePools {
		if q.BlockCreated > block {
			continue
		}
		return q.Address, nil
	}
	return common.Address{}, fmt.Errorf("no pool available")
}

type UniswapMetadata struct {
	DeployBlock                        int64
	PoolFactory                        common.Address
	Permit2                            common.Address
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
	WrappedNativeAddress               common.Address
	WrappedNativeSymbol                string
	WrappedNativeName                  string
	WrappedNativeDecimals              int64
	NativeCurrencyName                 string
}

type TokenMetadata struct {
	WethAddress   common.Address
	WbtcAddress   common.Address
	UsdcAddress   common.Address
	NativeAddress common.Address
}

type OkuMetadata struct {
	LimitOrderRegistry            common.Address
	LimitOrderRegistryDeployBlock int64
	Pricing                       OkuPricingMetadata
}

type OkuPricingMetadata struct {
	NativeWrappedToken common.Address
	NativeToken        common.Address
	NativeWrappedName  string
	NativeTokenName    string
	NativeQuotePools   []ChainContract
	Pools              []common.Address
}

type ChainContract struct {
	Address      common.Address
	BlockCreated int64
}

type BlockExplorer struct {
	Url    string
	ApiUrl string
}

type Markets struct {
	Airswap       bool
	Enso          interface{}
	Kyberswap     string
	Odos          interface{}
	Okx           interface{}
	Oneinch       bool
	Openocean     string
	Paraswap      map[string]interface{}
	Propellerswap string
	Usor          interface{}
	Zeroex        bool
	Cowswap       string
	Icecreamswap  bool
}

type Bridges struct {
	Deswap      interface{}
	Bungee      interface{}
	Lifi        interface{}
	Across      interface{}
	Orbiter     interface{}
	Wormhole    map[string]interface{}
	Rhinofi     string
	Chainlink   map[string]interface{}
	Squidrouter interface{}
	Wanbridge   map[string]interface{}
	Stargate    map[string]interface{}
}

type Oracles struct {
	Cmc         map[string]interface{}
	Coingecko   map[string]interface{}
	Dexguru     interface{}
	Dexscreener string
	Oku         interface{}
}

type MorphoMetadata struct {
	DeployBlock int64
	Morpho      common.Address
	MmFactory10 common.Address
	MmFactory11 common.Address
	Bundler3    common.Address
}
