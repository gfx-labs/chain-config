export declare const pharos: Readonly<{
    blockTimeSeconds: 2;
    launchTime: 1777014000;
    transactionType: "eip1559";
    sortIndex: 46;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/pharos-logo.svg";
    deprecated: false;
    liteChain: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {};
    markets: {};
    bridges: {};
    oracles: {};
    morpho: {
        deployBlock: number;
        morpho: "0x18573fA18fd17dDfD790B4a5B5b2977aad3b4Efb";
        bundler3: "0x3c90c09F8c5d927a117F681fB924952DbbD99120";
        vaultV2Factory: "0x8E01ed1E1A41029b3137FcE9Aa880c0A54827498";
        morphoMarketV1AdapterV2Factory: "0xe510e1fcC429943cA3455A7bfBD79f0307Cd8403";
    };
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {};
    token: {
        usdcAddress: "0x7126c3fef4e6a680eee09fb039b2236f638384b0";
        wethAddress: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0";
    };
    oku: {
        limitOrderRegistry: "0x0000000000000000000000000000000000000000";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x0000000000000000000000000000000000000000";
    defaultToken0: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0";
    defaultToken1: "0x7126c3fef4e6a680eee09fb039b2236f638384b0";
    tokenList: ({
        symbol: string;
        address: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0";
    } | {
        symbol: string;
        address: "0x7126c3fef4e6a680eee09fb039b2236f638384b0";
    })[];
    stables: "0x7126c3fef4e6a680eee09fb039b2236f638384b0"[];
    watchlist: never[];
    internalName: "pharos";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/pros.png";
    contracts: {
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
            blockCreated: number;
        };
        nftManager: {
            address: "0x0000000000000000000000000000000000000000";
        };
        weth9: {
            address: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0";
        };
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        multicall3?: import("viem").ChainContract | undefined;
        erc6492Verifier?: import("viem").ChainContract | undefined;
    };
    blockExplorers?: {
        [key: string]: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
        default: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
    } | undefined | undefined;
    blockTime?: number | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: number;
    name: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    experimental_preconfirmationTime?: number | undefined | undefined;
    rpcUrls: {
        [key: string]: {
            http: readonly string[];
            webSocket?: readonly string[] | undefined;
        };
        default: {
            http: readonly string[];
            webSocket?: readonly string[] | undefined;
        };
    };
    sourceId?: number | undefined | undefined;
    testnet?: boolean | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined;
} & {
    caip2Namespace: string;
}>;
