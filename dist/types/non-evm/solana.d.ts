export declare const solana: Readonly<{
    caip2Namespace: "solana";
    caip2Reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp";
    internalName: "solana";
    transactionType: "solana";
    sortIndex: 51;
    launchTime: 1584368940;
    blockTimeSeconds: 0.4;
    deprecated: false;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/solana-logo.webp";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/sol.png";
    blockAid: "solana";
    estimatedSwapGas: 0;
    estimatedBridgeGas: 0;
    estimatedWrapGas: 0;
    initCodeHash: "0x0000000000000000000000000000000000000000000000000000000000000000";
    defaultPool: "0x0000000000000000000000000000000000000000";
    defaultToken0: "0x0000000000000000000000000000000000000000";
    defaultToken1: "0x0000000000000000000000000000000000000000";
    tokenList: never[];
    stables: never[];
    watchlist: never[];
    v4Watchlist: never[];
    externalId: {
        coingecko: string;
    };
    markets: {};
    bridges: {};
    oracles: {
        coingecko: {
            slug: string;
            native: string;
        };
    };
    uniswap: {};
    morpho: {};
    token: {};
    oku: {};
    contracts: {
        nftManager: {
            address: "0x0000000000000000000000000000000000000000";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Solscan";
            readonly url: "https://solscan.io";
            readonly apiUrl: "https://public-api.solscan.io";
        };
    };
    blockTime?: number | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 0;
    name: "Solana";
    nativeCurrency: {
        readonly name: "Solana";
        readonly symbol: "SOL";
        readonly decimals: 9;
    };
    experimental_preconfirmationTime?: number | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.mainnet-beta.solana.com"];
        };
    };
    sourceId?: number | undefined | undefined;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined;
    testnet?: boolean | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
} & {
    caip2Namespace: string;
}>;
