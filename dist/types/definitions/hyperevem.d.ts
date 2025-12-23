export declare const hyperevm: Readonly<{
    name: "HyperEvm";
    blockTimeSeconds: 1;
    launchTime: 1739731200;
    transactionType: "eip1559";
    sortIndex: 15;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/hyperevm-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "HyperEVM";
    externalId: {};
    liteChain: true;
    markets: {
        openocean: string;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
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
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {};
    token: {
        wethAddress: "0x5555555555555555555555555555555555555555";
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0x5555555555555555555555555555555555555555";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x6c9a33e3b592c0d65b3ba59355d5be0d38259285";
    defaultToken0: "0x5555555555555555555555555555555555555555";
    defaultToken1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    tokenList: ({
        symbol: string;
        address: "0x5555555555555555555555555555555555555555";
    } | {
        symbol: string;
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    })[];
    stables: ("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb" | "0xDF0B24095e15044538866576754F3C964e902Ee6")[];
    watchlist: never[];
    internalName: "hyperevm";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/hype.png";
    contracts: {
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x5555555555555555555555555555555555555555";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        erc6492Verifier?: import("viem").ChainContract | undefined;
    };
    blockExplorers: {
        readonly default: {
            readonly name: "HyperEVMScan";
            readonly url: "https://hyperevmscan.io";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 999;
    nativeCurrency: {
        readonly name: "HYPE";
        readonly symbol: "HYPE";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.hyperliquid.xyz/evm"];
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
}>;
