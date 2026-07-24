import type {
	Address,
	Chain,
	ChainContract,
	ChainFormatters,
	Hash,
} from "viem";

export { ChainContract } from "viem";

type float64 = number;

export interface MorphoMetadata {
	deployBlock?: number;
	morpho?: Address;
	mmFactory10?: Address;
	mmFactory11?: Address;
	bundler3?: Address;
	publicAllocator?: Address;
	urdFactory?: Address;
	vaultV2Factory?: Address;
	morphoMarketV1AdapterV2Factory?: Address;
	morphoMarketV1RegistryV2?: Address;
}

export interface UniswapMetadata {
	deployBlock?: number;
	poolFactory?: Address;
	permit2?: Address;
	multicall2?: Address;
	proxyAdmin?: Address;
	tickLens?: Address;
	quoter?: Address;
	swapRouter?: Address;
	swapRouter02?: Address;
	NFTDescriptor?: Address;
	nonfungibleTokenPositionDescriptor?: Address;
	transparentUpgradeableProxy?: Address;
	nonfungiblePositionManager?: Address;
	v3Migrator?: Address;
	uniswapV3Staker?: Address;
	positionsNFT?: Address;
	topNativePool?: Address;
	positionsNFTDeployBlock?: number;
	universalRouter?: Address;
	wrappedNativeAddress?: Address;
	wrappedNativeSymbol?: string;
	wrappedNativeName?: string;
	wrappedNativeDecimals?: number;
	nativeCurrencyName?: string;
}

export interface UniswapV4Metadata {
	deployBlock: number;
	poolManager: Address;
	positionManager: Address;
	universalRouter: Address;
	permit2: Address;
	defaultPool: Hash;
	stateView: Address;
}

export interface OkuPricingMetadata {
	nativeWrappedToken?: Address;
	nativeToken?: Address;
	nativeWrappedName?: string;
	nativeTokenName?: string;
	nativeQuotePools?: ReadonlyArray<ChainContract>;
	pools?: ReadonlyArray<Address>;
}

export interface OkuCustomOrderTypesMetadata {
	feeBips?: number;
	master?: Address;
	masterDeployBlock?: number;
	limit?: Address;
	limitDeployBlock?: number;
	bracket?: Address;
	bracketDeployBlock?: number;
	stopLimit?: Address;
	stopLimitDeployBlock?: number;
	oracleLess?: Address;
	oracleLessDeployBlock?: number;
}

export interface OkuMetadata {
	router?: Address;
	permit2Proxy?: Address;
	limitOrderRegistry?: Address;
	limitOrderRegistryDeployBlock?: number;
	pricing?: OkuPricingMetadata;
	customOrderTypes?: OkuCustomOrderTypesMetadata;
}

export interface TokenMetadata {
	wethAddress?: Address;
	wbtcAddress?: Address;
	usdcAddress?: Address;
	nativeAddress?: Address;
}

export interface Markets {
	airswap?: boolean;
	enso?: any;
	kyberswap?: string; // from https://github.com/KyberNetwork/kyberswap-documentation/blob/main/kyberswap-solutions/kyberswap-aggregator/aggregator-api-specification/evm-swaps.md
	odos?: any;
	okx?: any;
	oneinch?: {
		spender: string;
	};
	openocean?: string;
	paraswap?: {
		routerContract: string;
	};
	propellerswap?: string;
	threeroute?: boolean;
	usor?: any;
	zeroex?: boolean;
	cowswap?: string;
	icecreamswap?: boolean;
}

export interface Bridges {
	deswap?: {
		chainId: number;
	};
	bungee?: any;
	lifi?: any;
	across?: any;
	orbiter?: any;
	wormhole?: {
		chain: string;
		timeToFinalize: number;
	};
	rhinofi?: string;
	chainlink?: {
		atlasNetworkName: string;
		routerAddress: string;
		chainSelector: bigint;
		tokenAdminRegistry?: string;
	};
	squidrouter?: any;
	wanbridge?: {
		requiredConfirmations: number;
	};
	stargate?: {
		endpointID: number;
		blockConfirmations?: number;
		tokens: {
			name: string;
			type?: string; // OFT or POOL, if missing, assume is POOL
			id: number; // used to determine possible routes. pool id
			address: string; // address of the stargate contract
		}[];
	};
	layerzero?: {
		eid: number;
		tokens: {
			id: number; // for internal use
			symbol?: string;
			OFTAddress: string; // addr of oft contract for that token. sometimes these 2 are the same
			address?: string; // addr of underlying token
			project?: string;
		}[];
	};
}

export interface Oracles {
	cmc?: {
		slug: string;
		native: string;
	};
	coingecko?: {
		slug: string;
		native: string;
	};
	dexguru?: any;
	dexscreener?: string;
	oku?: any;
}

export interface IChainInfo<
	formatters extends ChainFormatters | undefined = ChainFormatters | undefined,
> extends Chain<formatters> {
	caip2Namespace: string;
	/**
	 * Explicit CAIP-2 reference component.
	 *
	 * When set, it is used verbatim as the reference half of the chain's CAIP-2
	 * identifier (e.g. Bitcoin's genesis hash prefix
	 * "000000000019d6689c085ae165831e93"). When omitted, the reference is
	 * derived from the numeric `id` (the historical behavior, e.g. "1" for
	 * Ethereum mainnet).
	 *
	 * Non-EVM chains (which use `id: 0` as a placeholder since viem requires a
	 * numeric id) MUST set this so their CAIP-2 identifier resolves correctly.
	 */
	caip2Reference?: string;
	logoUrl: string;
	launchTime: number;
	nativeLogoUrl: string;
	sortIndex: number;
	safeReorgDistance?: number;
	defaultPool: Address;
	internalName: string;
	transactionType: string;
	defaultToken0: Address;
	defaultToken1: Address;
	blockAid: string;
	tokenList: ReadonlyArray<{ symbol: string; address: Address }>;
	stables: ReadonlyArray<Address>;
	watchlist: ReadonlyArray<Address>;
	v4Watchlist: ReadonlyArray<Hash>;
	externalId: {
		zerion?: string;
		debank?: string;
		cowswap?: string;
		tenderly?: string;
		coingecko?: string;
	};
	markets: Markets;
	bridges: Bridges;
	oracles: Oracles;

	initCodeHash: Hash;
	blockTimeSeconds: float64;

	uniswap: UniswapMetadata;
	uniswapv4?: UniswapV4Metadata;
	morpho: MorphoMetadata;
	token: TokenMetadata;
	oku: OkuMetadata;
	deprecated: boolean;
	liteChain?: boolean;
	estimatedSwapGas: number;
	estimatedBridgeGas: number;
	estimatedWrapGas: number;

	contracts: {
		[key: string]: ChainContract | { [chainId: number]: ChainContract };
	} & {
		ensRegistry?: ChainContract;
		ensUniversalResolver?: ChainContract;
		multicall2?: ChainContract;
		multicall3?: ChainContract;
		nftManager: ChainContract;
		limitOrder?: ChainContract;
		weth9?: ChainContract;
		metrom?: ChainContract;
	};
}

/**
 * Placeholder numeric `id` used by non-EVM chains.
 *
 * viem's `Chain` (which {@link IChainInfo} extends) requires a numeric `id`,
 * but non-EVM chains (e.g. Bitcoin) have no EVM chain id. They use `0` as a
 * sentinel and rely on `caip2Namespace` + `caip2Reference` for identity and
 * resolution instead. `0` is never a valid EVM chain id, so it cannot collide.
 */
export const NON_EVM_CHAIN_ID = 0;

/**
 * High-level chain family, derived from the chain's CAIP-2 namespace.
 *
 * The underlying string value of each member is the CAIP-2 namespace it maps
 * to (e.g. `eip155` for EVM, `bip122` for Bitcoin), so {@link chainType} can
 * resolve a chain's type directly from its `caip2Namespace` without relying on
 * sentinel values like {@link NON_EVM_CHAIN_ID}.
 *
 * @see https://chainagnostic.org/CAIPs/caip-2
 */
export enum ChainType {
	/** EVM chains (CAIP-2 namespace `eip155`). */
	EVM = "eip155",
	/**
	 * Bitcoin and Bitcoin-derived chains, e.g. Zcash (CAIP-2 namespace
	 * `bip122`).
	 */
	Bitcoin = "bip122",
	/** Solana (CAIP-2 namespace `solana`). */
	Solana = "solana",
	/** Unknown / unrecognized CAIP-2 namespace. */
	Unknown = "",
}

/** All recognized CAIP-2 namespaces, keyed by {@link ChainType}. */
const CHAIN_TYPE_BY_NAMESPACE: Record<string, ChainType> = {
	[ChainType.EVM]: ChainType.EVM,
	[ChainType.Bitcoin]: ChainType.Bitcoin,
	[ChainType.Solana]: ChainType.Solana,
};

/**
 * Resolve a CAIP-2 namespace from a chain-like value:
 * - an {@link IChainInfo} object: its `caip2Namespace`
 * - a CAIP-2 identifier string (e.g. `"eip155:1"`): the part before the `:`
 * - a bare namespace string (e.g. `"eip155"`): used verbatim
 *
 * Note: a bare internal name (e.g. `"bitcoin"`) or numeric id is NOT a CAIP-2
 * namespace and resolves to {@link ChainType.Unknown} here. Use the
 * index-bound `chainType`/`isNetworkType` in the package entrypoint to resolve
 * those (they look the chain up first).
 */
function namespaceOf(c: IChainInfo | string): string {
	if (typeof c === "string") {
		const sep = c.indexOf(":");
		return sep === -1 ? c : c.slice(0, sep);
	}
	return c.caip2Namespace;
}

/**
 * The {@link ChainType} of a chain, derived from its CAIP-2 namespace.
 *
 * Accepts an {@link IChainInfo} object or a CAIP-2 string (a full identifier
 * like `"eip155:1"` or a bare namespace like `"bip122"`). This is the
 * canonical way to determine a chain's family. Prefer it over inspecting the
 * numeric `id` (which is a placeholder for non-EVM chains).
 *
 * @example
 * ```ts
 * import { mainnet, bitcoin } from "@gfxlabs/oku-chains";
 * chainType(mainnet)        // => ChainType.EVM
 * chainType(bitcoin)        // => ChainType.Bitcoin
 * chainType("eip155:1")     // => ChainType.EVM
 * chainType("bip122")       // => ChainType.Bitcoin
 * ```
 */
export function chainType(c: IChainInfo | string): ChainType {
	return CHAIN_TYPE_BY_NAMESPACE[namespaceOf(c)] ?? ChainType.Unknown;
}

/**
 * True if the chain belongs to the given {@link ChainType} family.
 *
 * Reusable, namespace-driven replacement for one-off `isBitcoinChain` style
 * checks. The chain may be an {@link IChainInfo} object or a CAIP-2 string.
 *
 * @example
 * ```ts
 * import { ChainType, isNetworkType, bitcoin } from "@gfxlabs/oku-chains";
 * isNetworkType(ChainType.Bitcoin, bitcoin)        // => true
 * isNetworkType(ChainType.EVM, bitcoin)            // => false
 * isNetworkType(ChainType.EVM, "eip155:1")         // => true
 * ```
 */
export function isNetworkType(
	type: ChainType,
	c: IChainInfo | string,
): boolean {
	return chainType(c) === type;
}

/**
 * True if the chain is an EVM chain (CAIP-2 namespace `eip155`). Accepts an
 * {@link IChainInfo} object or a CAIP-2 string.
 */
export function isEvmChain(c: IChainInfo | string): boolean {
	return isNetworkType(ChainType.EVM, c);
}

/**
 * True if the chain is non-EVM (i.e. its CAIP-2 namespace is not `eip155`).
 * Non-EVM chains live in the same {@link IChainInfo} shape as EVM chains, so
 * EVM-only fields (contracts, uniswap metadata, etc.) will be present but
 * empty. Accepts an {@link IChainInfo} object or a CAIP-2 string.
 */
export function isNonEvmChain(c: IChainInfo | string): boolean {
	return !isEvmChain(c);
}

// biome-ignore lint: false positive
interface blockExplorer {
	url: string;
	apiUrl: string;
}

// biome-ignore lint: false positive
interface chainContract {
	address: Address;
	blockCreated: number;
}
