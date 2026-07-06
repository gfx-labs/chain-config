export declare const redbelly: Readonly<{
    name: "Redbelly";
    blockTimeSeconds: 5;
    launchTime: 1741362479;
    transactionType: "eip1559";
    sortIndex: 27;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/redbelly-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        coingecko: string;
    };
    markets: {};
    bridges: {};
    oracles: {};
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3";
        permit2: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf";
        multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9";
        tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA";
        nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        positionsNFTDeployBlock: number;
        universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        wrappedNativeAddress: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076";
        usdcAddress: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06";
    };
    oku: {
        router11: "0x25132a6F4f0A993d62e57D0510df1395729125ad";
        limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x1f1bda1fe18aedf468abe36ed66eaf44aa6c490b";
    defaultToken0: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076";
    defaultToken1: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06";
    tokenList: ({
        symbol: string;
        address: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076";
    } | {
        symbol: string;
        address: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06";
    } | {
        symbol: string;
        address: "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B";
    })[];
    stables: ("0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06" | "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B" | "0x420e07cec544b8A52B7d0c62b1C9BF990cc58083" | "0xE08DED898D7782B085cD240d7B234063696765aD")[];
    watchlist: ("0x1f1bda1fe18aedf468abe36ed66eaf44aa6c490b" | "0xcDe3554d179b5B7ABB3ddFeE1CBC7B98b3f2E380" | "0x2ea9dacb203d36b51b164a3d25d69d1c8198eec1")[];
    v4Watchlist: never[];
    internalName: "redbelly";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/rbnt.svg";
    contracts: {
        limitOrder: {
            address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        };
        nftManager: {
            address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        };
        weth9: {
            address: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076";
        };
        multicall2: {
            address: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9";
        };
        multicall3: {
            address: "0xEe43BBcC6340038130681F98d855E416F7F728e9";
        };
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        erc6492Verifier?: import("viem").ChainContract | undefined;
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Routescan";
            readonly url: "https://redbelly.routescan.io";
            readonly apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/151/etherscan/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 151;
    nativeCurrency: {
        readonly name: "Redbelly Native Coin";
        readonly symbol: "RBNT";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://governors.mainnet.redbelly.network"];
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
