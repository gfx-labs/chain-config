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
	NameMetal        InternalName = "metal"
	NameCorn         InternalName = "corn"
	NameSonic        InternalName = "sonic"
	NameCelo         InternalName = "celo"
	NameHemi         InternalName = "hemi"
	NameTelos        InternalName = "telos"
	NameSaga         InternalName = "saga"
	NameGoat         InternalName = "goat"
	NameRedbelly     InternalName = "redbelly"
	NameLightlink    InternalName = "lightlink"
	NameWorldchain   InternalName = "worldchain"
	NameXdc          InternalName = "xdc"
	NameTronshasta   InternalName = "tronshasta"
	NameLens         InternalName = "lens"
	NameNibiru       InternalName = "nibiru"
	NameEtherlink    InternalName = "etherlink"
	NameUnichain     InternalName = "unichain"
	NameMatchain     InternalName = "matchain"
	NamePlasma       InternalName = "plasma"
	NameZerog        InternalName = "zerog"
	NameAvalanche    InternalName = "avalanche"
	NameRonin        InternalName = "ronin"
	NameMonad        InternalName = "monad"
	NameHyperevm     InternalName = "hyperevm"
	NameGensyn       InternalName = "gensyn"
	NamePharos       InternalName = "pharos"
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
	Metal,
	Corn,
	Sonic,
	Celo,
	Hemi,
	Telos,
	Saga,
	Goat,
	Redbelly,
	Lightlink,
	Worldchain,
	Xdc,
	Tronshasta,
	Lens,
	Nibiru,
	Etherlink,
	Unichain,
	Matchain,
	Plasma,
	Zerog,
	Avalanche,
	Ronin,
	Monad,
	Hyperevm,
	Gensyn,
	Pharos,
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
	"metal":         Metal,
	"corn":          Corn,
	"sonic":         Sonic,
	"celo":          Celo,
	"hemi":          Hemi,
	"telos":         Telos,
	"saga":          Saga,
	"goat":          Goat,
	"redbelly":      Redbelly,
	"lightlink":     Lightlink,
	"worldchain":    Worldchain,
	"xdc":           Xdc,
	"tronshasta":    Tronshasta,
	"lens":          Lens,
	"nibiru":        Nibiru,
	"etherlink":     Etherlink,
	"unichain":      Unichain,
	"matchain":      Matchain,
	"plasma":        Plasma,
	"zerog":         Zerog,
	"avalanche":     Avalanche,
	"ronin":         Ronin,
	"monad":         Monad,
	"hyperevm":      Hyperevm,
	"gensyn":        Gensyn,
	"pharos":        Pharos,
}

var networksById = map[int]Network{
	42161:      Arbitrum,
	8453:       Base,
	288:        Boba,
	81457:      Blast,
	56:         Bsc,
	314:        Filecoin,
	1:          Ethereum,
	1284:       Moonbeam,
	10:         Optimism,
	137:        Polygon,
	30:         Rootstock,
	534352:     Scroll,
	1101:       PolygonZkevm,
	324:        Zksync,
	169:        Manta,
	59144:      Linea,
	167000:     Taiko,
	5000:       Mantle,
	1329:       Sei,
	1135:       Lisk,
	60808:      Bob,
	100:        Gnosis,
	1750:       Metal,
	21000000:   Corn,
	146:        Sonic,
	42220:      Celo,
	43111:      Hemi,
	40:         Telos,
	5464:       Saga,
	2345:       Goat,
	151:        Redbelly,
	1890:       Lightlink,
	480:        Worldchain,
	50:         Xdc,
	2494104990: Tronshasta,
	232:        Lens,
	6900:       Nibiru,
	42793:      Etherlink,
	130:        Unichain,
	698:        Matchain,
	9745:       Plasma,
	16661:      Zerog,
	43114:      Avalanche,
	2020:       Ronin,
	143:        Monad,
	999:        Hyperevm,
	685689:     Gensyn,
	1672:       Pharos,
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

var ErrInvalidCAIP2 = errors.New("invalid CAIP-2 identifier")

var networksByCAIP2 = map[string]Network{
	"eip155:42161":      Arbitrum,
	"eip155:8453":       Base,
	"eip155:288":        Boba,
	"eip155:81457":      Blast,
	"eip155:56":         Bsc,
	"eip155:314":        Filecoin,
	"eip155:1":          Ethereum,
	"eip155:1284":       Moonbeam,
	"eip155:10":         Optimism,
	"eip155:137":        Polygon,
	"eip155:30":         Rootstock,
	"eip155:534352":     Scroll,
	"eip155:1101":       PolygonZkevm,
	"eip155:324":        Zksync,
	"eip155:169":        Manta,
	"eip155:59144":      Linea,
	"eip155:167000":     Taiko,
	"eip155:5000":       Mantle,
	"eip155:1329":       Sei,
	"eip155:1135":       Lisk,
	"eip155:60808":      Bob,
	"eip155:100":        Gnosis,
	"eip155:1750":       Metal,
	"eip155:21000000":   Corn,
	"eip155:146":        Sonic,
	"eip155:42220":      Celo,
	"eip155:43111":      Hemi,
	"eip155:40":         Telos,
	"eip155:5464":       Saga,
	"eip155:2345":       Goat,
	"eip155:151":        Redbelly,
	"eip155:1890":       Lightlink,
	"eip155:480":        Worldchain,
	"eip155:50":         Xdc,
	"eip155:2494104990": Tronshasta,
	"eip155:232":        Lens,
	"eip155:6900":       Nibiru,
	"eip155:42793":      Etherlink,
	"eip155:130":        Unichain,
	"eip155:698":        Matchain,
	"eip155:9745":       Plasma,
	"eip155:16661":      Zerog,
	"eip155:43114":      Avalanche,
	"eip155:2020":       Ronin,
	"eip155:143":        Monad,
	"eip155:999":        Hyperevm,
	"eip155:685689":     Gensyn,
	"eip155:1672":       Pharos,
}

// ParseCAIP2 splits a CAIP-2 chain identifier into its namespace and reference.
func ParseCAIP2(caip2 string) (namespace string, reference string, err error) {
	i := strings.Index(caip2, ":")
	if i == -1 || i != strings.LastIndex(caip2, ":") {
		return "", "", fmt.Errorf("%w: %q", ErrInvalidCAIP2, caip2)
	}
	return caip2[:i], caip2[i+1:], nil
}

// FormatCAIP2 creates a CAIP-2 identifier string from namespace and reference.
func FormatCAIP2(namespace, reference string) string {
	return namespace + ":" + reference
}

// NetworkByCAIP2 looks up a network by its CAIP-2 identifier string
// (e.g. "eip155:1" for Ethereum mainnet).
func NetworkByCAIP2(caip2 string) (*Network, error) {
	if _, _, err := ParseCAIP2(caip2); err != nil {
		return nil, err
	}
	val, ok := networksByCAIP2[caip2]
	if !ok {
		return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, caip2)
	}
	return &val, nil
}

// NetworkByAny resolves a network from an arbitrary input. It accepts:
//   - integer types (int, int8..int64, uint, uint8..uint64): treated as chain id
//   - float32/float64: truncated to int and treated as chain id
//   - string: tried as CAIP-2 identifier (if it contains ":"), then as
//     internal name, then as a numeric chain id
//   - fmt.Stringer: its String() result is resolved as a string
//   - *Network / Network / InternalName: resolved directly
//
// It returns ErrNetworkNotFound wrapped with context if no match is found.
func NetworkByAny(v any) (*Network, error) {
	if v == nil {
		return nil, fmt.Errorf("%w: nil", ErrNetworkNotFound)
	}
	switch x := v.(type) {
	case *Network:
		if x == nil {
			return nil, fmt.Errorf("%w: nil", ErrNetworkNotFound)
		}
		return x, nil
	case Network:
		return &x, nil
	case InternalName:
		return NetworkByName(string(x))
	case string:
		return NetworkByString(x)
	case int:
		return NetworkByNumber(x)
	case int8:
		return NetworkByNumber(x)
	case int16:
		return NetworkByNumber(x)
	case int32:
		return NetworkByNumber(x)
	case int64:
		return NetworkByNumber(x)
	case uint:
		return NetworkByNumber(x)
	case uint8:
		return NetworkByNumber(x)
	case uint16:
		return NetworkByNumber(x)
	case uint32:
		return NetworkByNumber(x)
	case uint64:
		return NetworkByNumber(x)
	case uintptr:
		return NetworkByNumber(x)
	case float32:
		return NetworkByNumber(x)
	case float64:
		return NetworkByNumber(x)
	case fmt.Stringer:
		return NetworkByString(x.String())
	}
	return nil, fmt.Errorf("%w: unsupported type %T", ErrNetworkNotFound, v)
}

// Numeric is any Go numeric type that can represent a chain id.
type Numeric interface {
	~int | ~int8 | ~int16 | ~int32 | ~int64 |
		~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 | ~uintptr |
		~float32 | ~float64
}

// NetworkByNumber resolves a network from any numeric chain id.
func NetworkByNumber[T Numeric](n T) (*Network, error) {
	return NetworkById(int(n))
}

// NetworkByString resolves a network from a string. It tries, in order:
// CAIP-2 identifier (if it contains ":"), internal name, and numeric chain id.
func NetworkByString(s string) (*Network, error) {
	if s == "" {
		return nil, fmt.Errorf("%w: empty string", ErrNetworkNotFound)
	}
	if strings.Contains(s, ":") {
		return NetworkByCAIP2(s)
	}
	if n, ok := networksByName[s]; ok {
		return &n, nil
	}
	if i64, err := strconv.ParseInt(s, 0, 64); err == nil {
		return NetworkById(int(i64))
	}
	return nil, fmt.Errorf("%w: %v", ErrNetworkNotFound, s)
}

type Network struct {
	Caip2Namespace     string
	LogoUrl            string
	LaunchTime         int64
	NativeLogoUrl      string
	SortIndex          int64
	SafeReorgDistance  int64
	DefaultPool        common.Address
	InternalName       string
	TransactionType    string
	DefaultToken0      common.Address
	DefaultToken1      common.Address
	BlockAid           string
	TokenList          []any
	Stables            []common.Address
	Watchlist          []common.Address
	V4Watchlist        []common.Hash
	ExternalId         map[string]string
	Markets            Markets
	Bridges            Bridges
	Oracles            Oracles
	InitCodeHash       common.Hash
	BlockTimeSeconds   float64
	Uniswap            UniswapMetadata
	Uniswapv4          UniswapV4Metadata
	Morpho             MorphoMetadata
	Token              TokenMetadata
	Oku                OkuMetadata
	Deprecated         bool
	LiteChain          bool
	EstimatedSwapGas   int64
	EstimatedBridgeGas int64
	EstimatedWrapGas   int64
	Contracts          map[string]ChainContract

	ChainId        int `json:"chainId"`
	BlockExplorers map[string]BlockExplorer
	StablecoinMap  map[common.Address]struct{}
}

func (n *Network) IsStable(a common.Address) bool {
	_, ok := n.StablecoinMap[a]
	return ok
}

// CAIP2 returns the CAIP-2 chain identifier for this network
// (e.g. "eip155:1" for Ethereum mainnet).
func (n *Network) CAIP2() string {
	return fmt.Sprintf("%s:%d", n.Caip2Namespace, n.ChainId)
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
	Router10                      common.Address
	Router11                      common.Address
	Permit2Proxy10                common.Address
	Permit2Proxy11                common.Address
	LimitOrderRegistry            common.Address
	LimitOrderRegistryDeployBlock int64
	Pricing                       OkuPricingMetadata
	CustomOrderTypes              OkuCustomOrderTypesMetadata
}

type OkuPricingMetadata struct {
	NativeWrappedToken common.Address
	NativeToken        common.Address
	NativeWrappedName  string
	NativeTokenName    string
	NativeQuotePools   []ChainContract
	Pools              []common.Address
}

type OkuCustomOrderTypesMetadata struct {
	FeeBips               int64
	Master                common.Address
	MasterDeployBlock     int64
	Limit                 common.Address
	LimitDeployBlock      int64
	Bracket               common.Address
	BracketDeployBlock    int64
	StopLimit             common.Address
	StopLimitDeployBlock  int64
	OracleLess            common.Address
	OracleLessDeployBlock int64
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
	Oneinch       map[string]interface{}
	Openocean     string
	Paraswap      map[string]interface{}
	Propellerswap string
	Threeroute    bool
	Usor          interface{}
	Zeroex        bool
	Cowswap       string
	Icecreamswap  bool
}

type Bridges struct {
	Deswap      map[string]interface{}
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
	Layerzero   map[string]interface{}
}

type Oracles struct {
	Cmc         map[string]interface{}
	Coingecko   map[string]interface{}
	Dexguru     interface{}
	Dexscreener string
	Oku         interface{}
}

type MorphoMetadata struct {
	DeployBlock                    int64
	Morpho                         common.Address
	MmFactory10                    common.Address
	MmFactory11                    common.Address
	Bundler3                       common.Address
	PublicAllocator                common.Address
	UrdFactory                     common.Address
	VaultV2Factory                 common.Address
	MorphoMarketV1AdapterV2Factory common.Address
	MorphoMarketV1RegistryV2       common.Address
}

type UniswapV4Metadata struct {
	DeployBlock     int64
	PoolManager     common.Address
	PositionManager common.Address
	UniversalRouter common.Address
	Permit2         common.Address
	DefaultPool     common.Hash
	StateView       common.Address
}
