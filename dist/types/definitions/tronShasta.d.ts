export declare const tronShasta: Readonly<{
    name: "Tron Shasta";
    blockTimeSeconds: 5;
    launchTime: 1746055290;
    transactionType: "eip1559";
    sortIndex: 48;
    blockAid: "";
    logoUrl: "https://cms.oku.trade/cdn/public/chains/tron-shasta-logo.svg";
    deprecated: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    externalId: {};
    markets: {};
    bridges: {};
    oracles: {};
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0x3CF78A14F90203919B8B4D690E6540745ED8074A";
        permit2: "0x0000000000000000000000000000000000000000";
        multicall2: "0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E";
        tickLens: "0xC857346CD83BE79B78F1B10D5FCF158EDC844796";
        nonfungiblePositionManager: "0x358B41818D60CBF40C11FB728C8BC865726F423D";
        positionsNFT: "0x358B41818D60CBF40C11FB728C8BC865726F423D";
        positionsNFTDeployBlock: number;
        universalRouter: "0x0000000000000000000000000000000000000000";
        wrappedNativeAddress: "0x0000000000000000000000000000000000000000";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {};
    oku: {
        pricing: {
            nativeWrappedToken: "0x0000000000000000000000000000000000000000";
        };
    };
    defaultPool: "0x0000000000000000000000000000000000000000";
    defaultToken0: "0x0000000000000000000000000000000000000000";
    defaultToken1: "0x0000000000000000000000000000000000000000";
    tokenList: never[];
    stables: never[];
    watchlist: never[];
    v4Watchlist: never[];
    internalName: "tronshasta";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/tron.png";
    contracts: {
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
        };
        nftManager: {
            address: "0x358B41818D60CBF40C11FB728C8BC865726F423D";
        };
        multicall2: {
            address: "0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E";
        };
        multicall3: {
            address: "0x0000000000000000000000000000000000000000";
        };
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        erc6492Verifier?: import("viem").ChainContract | undefined;
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Tronscan";
            readonly url: "https://shasta.tronscan.org";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 2494104990;
    nativeCurrency: {
        readonly name: "TRON";
        readonly symbol: "TRX";
        readonly decimals: 6;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.shasta.trongrid.io/jsonrpc"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined | undefined;
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined | undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined | undefined;
} & {
    caip2Namespace: string;
}>;
