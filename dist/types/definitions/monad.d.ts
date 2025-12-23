export declare const monad: Readonly<{
    blockTimeSeconds: 0.4;
    launchTime: 1764568406;
    transactionType: "eip1559";
    sortIndex: 5;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/monad-logo.png";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
    };
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
    uniswap: {
        deployBlock: number;
        poolFactory: "0x204FAca1764B154221e35c0d20aBb3c525710498";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0xd1b797d92d87b688193a2b976efc8d577d204343";
        tickLens: "0xF025e0Fe9E331A0eF05c2ad3C4E9C64b625cda6f";
        nonfungiblePositionManager: "0x7197E214c0b767cFB76Fb734ab638E2c192F4E53";
        positionsNFT: "0x7197E214c0b767cFB76Fb734ab638E2c192F4E53";
        positionsNFTDeployBlock: number;
        universalRouter: "0x0D97Dc33264bfC1c226207428A79b26757fb9dc3";
        wrappedNativeAddress: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603";
        wbtcAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c";
        wethAddress: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A";
    };
    oku: {
        limitOrderRegistry: "0x0000000000000000000000000000000000000000";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x659bD0BC4167BA25c62E05656F78043E7eD4a9da";
    defaultToken0: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A";
    defaultToken1: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603";
    tokenList: ({
        symbol: string;
        address: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A";
    } | {
        symbol: string;
        address: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603";
    } | {
        symbol: string;
        address: "0xe7cd86e13AC4309349F30B3435a9d337750fC82D";
    })[];
    stables: ("0x754704Bc059F8C67012fEd69BC8A327a5aafb603" | "0xe7cd86e13AC4309349F30B3435a9d337750fC82D" | "0x00000000efe302beaa2b3e6e1b18d08d69a9012a")[];
    watchlist: ("0x659bD0BC4167BA25c62E05656F78043E7eD4a9da" | "0xa00D8Ec3c0cC20E93Cad749695392a0B61fe8Ca3")[];
    internalName: "monad";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/monad.png";
    contracts: {
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
        };
        nftManager: {
            address: "0x7197E214c0b767cFB76Fb734ab638E2c192F4E53";
        };
        weth9: {
            address: "0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A";
        };
        multicall2: {
            address: "0xd1b797d92d87b688193a2b976efc8d577d204343";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "MonadVision";
            readonly url: "https://monadvision.com";
        };
        readonly monadscan: {
            readonly name: "Monadscan";
            readonly url: "https://monadscan.com";
            readonly apiUrl: "https://api.monadscan.com/api";
        };
    };
    blockTime: 400;
    ensTlds?: readonly string[] | undefined;
    id: 143;
    name: "Monad";
    nativeCurrency: {
        readonly name: "Monad";
        readonly symbol: "MON";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.monad.xyz", "https://rpc1.monad.xyz"];
            readonly webSocket: readonly ["wss://rpc.monad.xyz", "wss://rpc1.monad.xyz"];
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
