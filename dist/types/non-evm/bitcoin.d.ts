export declare const bitcoin: Readonly<{
    caip2Namespace: "bip122";
    caip2Reference: "000000000019d6689c085ae165831e93";
    internalName: "bitcoin";
    transactionType: "bitcoin";
    sortIndex: 8;
    launchTime: 1231006505;
    blockTimeSeconds: 600;
    deprecated: false;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/bitcoin-logo.webp";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/btc.png";
    blockAid: "bitcoin";
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
            readonly name: "mempool.space";
            readonly url: "https://mempool.space";
            readonly apiUrl: "https://mempool.space/api";
        };
    };
    blockTime?: number | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 0;
    name: "Bitcoin";
    nativeCurrency: {
        readonly name: "Bitcoin";
        readonly symbol: "BTC";
        readonly decimals: 8;
    };
    experimental_preconfirmationTime?: number | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://bitcoin-rpc.publicnode.com"];
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
