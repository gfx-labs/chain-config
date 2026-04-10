export declare const zerog: Readonly<{
    name: "0G";
    blockTimeSeconds: 1;
    launchTime: 1733882663;
    transactionType: "eip1559";
    sortIndex: 44;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/zerog-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {};
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
    };
    oracles: {};
    morpho: {
        deployBlock: number;
        morpho: "0x9CDD13a2212D94C4f12190cA30783B743E83C89e";
        bundler3: "0xbDaFC7ceF85C5fF69164330F521089C9E15DDDae";
        mmFactory11: "0x41528AadC7314658b07Ca6e7213B9b77289B477f";
        publicAllocator: "0x28a80F3713735CAD44bD9d7E1da9Fa16b0244497";
        urdFactory: "0x40bDDbFCA5fcDF6E2Bbd019aC782b6A61388ADE6";
    };
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578";
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641";
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFTDeployBlock: number;
        universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        wrappedNativeAddress: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c";
    };
    oku: {
        limitOrderRegistry: "0x9db70e29712cc8af10c2b597bada6784544ff407";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x5c1e4669c5208adc0163273d51928890b663237f";
    defaultToken0: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c";
    defaultToken1: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e";
    tokenList: ({
        symbol: string;
        address: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e";
    } | {
        symbol: string;
        address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c";
    })[];
    stables: "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e"[];
    watchlist: ("0x5c1e4669c5208adc0163273d51928890b663237f" | "0xb5cb173dc8f8e8379343d12faa0cd66cb2db7d2e" | "0x5B7698191ac6f42F8AA1B42EC8ce535E63423F67")[];
    internalName: "zerog";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/0g.svg";
    contracts: {
        limitOrder: {
            address: "0x9db70e29712cc8af10c2b597bada6784544ff407";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c";
        };
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "0G BlockChain Explorer";
            readonly url: "https://chainscan.0g.ai";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 16661;
    nativeCurrency: {
        readonly name: "0G";
        readonly symbol: "0G";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evmrpc.0g.ai"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    testnet: false;
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
} & {
    caip2Namespace: string;
}>;
