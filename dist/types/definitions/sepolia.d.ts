export declare const sepolia: Readonly<{
    blockTimeSeconds: 12;
    launchTime: 1655683200;
    transactionType: "eip1559";
    sortIndex: 50;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/ethereum-logo.webp";
    deprecated: true;
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
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0x0227628f3F023bb0B980b67D528571c95c6DaC1c";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07";
        tickLens: "0xd7f33bcdb21b359c8ee6f0251d30e94832baad07";
        quoter: "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3";
        swapRouter02: "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E";
        NFTDescriptor: "0x3B5E3c5E595D85fbFBC2a42ECC091e183E76697C";
        nonfungibleTokenPositionDescriptor: "0x5bE4DAa6982C69aD20A57F1e68cBcA3D37de6207";
        nonfungiblePositionManager: "0x1238536071E1c677A632429e3655c799b22cDA52";
        v3Migrator: "0x729004182cF005CEC8Bd85df140094b6aCbe8b15";
        positionsNFT: "0x1238536071E1c677A632429e3655c799b22cDA52";
        positionsNFTDeployBlock: number;
        universalRouter: "0xB0C89059d7190EDb17eFF19829cc009cEe923916";
        wrappedNativeAddress: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    uniswapv4: {
        deployBlock: number;
        poolManager: "0xE03A1074c86CFeDd5C142C4F04F1a1536e203543";
        positionManager: "0x429ba70129df741B2Ca2a85BC3A2a3328e5c09b4";
        universalRouter: "0xB0C89059d7190EDb17eFF19829cc009cEe923916";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        defaultPool: "0x0000000000000000000000000000000000000000000000000000000000000000";
        stateView: "0xE1Dd9c3fA50EDB962E442f60DfBc432e24537E4C";
    };
    token: {
        usdcAddress: "0x699CFe8997D647d03325Ef4BFd039d5bb0984A17";
        wethAddress: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x0000000000000000000000000000000000000000";
    defaultToken0: "0x699CFe8997D647d03325Ef4BFd039d5bb0984A17";
    defaultToken1: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
    tokenList: ({
        symbol: string;
        address: "0x699CFe8997D647d03325Ef4BFd039d5bb0984A17";
    } | {
        symbol: string;
        address: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
    })[];
    stables: "0x699CFe8997D647d03325Ef4BFd039d5bb0984A17"[];
    watchlist: never[];
    v4Watchlist: never[];
    internalName: "sepolia";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        nftManager: {
            address: "0x1238536071E1c677A632429e3655c799b22cDA52";
        };
        weth9: {
            address: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
        };
        multicall2: {
            address: "0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07";
        };
        multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 751532;
        };
        ensUniversalResolver: {
            readonly address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee";
            readonly blockCreated: 8928790;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://sepolia.etherscan.io";
            readonly apiUrl: "https://api-sepolia.etherscan.io/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 11155111;
    name: "Sepolia";
    nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://11155111.rpc.thirdweb.com"];
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
