export declare const mantle: Readonly<{
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    blockTimeSeconds: 2;
    launchTime: 1720101600;
    transactionType: "eip1559";
    sortIndex: 15;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/mantle-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
    };
    morpho: {};
    markets: {
        openocean: string;
        zeroex: true;
        icecreamswap: true;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        deswap: {
            chainId: number;
        };
        stargate: {
            endpointID: number;
            blockConfirmations: number;
            tokens: {
                name: string;
                id: number;
                address: string;
            }[];
        };
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
    };
    oracles: {
        cmc: {
            slug: string;
            native: string;
        };
        coingecko: {
            slug: string;
            native: string;
        };
        dexscreener: string;
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9";
        permit2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA";
        tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF";
        nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649";
        positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649";
        positionsNFTDeployBlock: number;
        universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        wrappedNativeAddress: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9";
        wethAddress: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8";
    };
    oku: {
        limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x076eb72e74c16b208c692eeab3750978d76b8f28";
    defaultToken0: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9";
    defaultToken1: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8";
    tokenList: ({
        symbol: string;
        address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8";
    } | {
        symbol: string;
        address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9";
    })[];
    stables: ("0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9" | "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE")[];
    watchlist: ("0x086F766b336DFB0f705Dc030dB01993b22D81266" | "0x076eb72E74C16b208c692EEAB3750978D76B8F28" | "0xFc60a4d05ac8C93F62276e046Ad5a098f5C7820a" | "0x4cdFc22bF05209de87Ee564746Dc7E5174631d2b" | "0x48EF5640E71001CaC842f5627A0bfec1EF09DeB7" | "0x8CFee38ab8b8f4BC2ff662E8cc8bDfb0439C9D2C")[];
    internalName: "mantle";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/mnt.png";
    contracts: {
        limitOrder: {
            address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        };
        nftManager: {
            address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649";
        };
        weth9: {
            address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8";
        };
        multicall2: {
            address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0x4300d4C410f87c7c1824Cbc2eF67431030106604";
            blockCreated: number;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Mantle Explorer";
            readonly url: "https://mantlescan.xyz/";
            readonly apiUrl: "https://api.mantlescan.xyz/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 5000;
    name: "Mantle";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "MNT";
        readonly symbol: "MNT";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.mantle.xyz"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    testnet?: boolean | undefined | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined | undefined;
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined | undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined | undefined;
}>;
