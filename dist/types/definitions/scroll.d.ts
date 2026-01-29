export declare const scroll: Readonly<{
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    sortIndex: 34;
    launchTime: 1703257200;
    transactionType: "eip1559";
    blockTimeSeconds: 3;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/scroll-logo.svg";
    deprecated: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "scroll";
    externalId: {
        zerion: string;
        tenderly: string;
        coingecko: string;
    };
    morpho: {};
    markets: {
        kyberswap: string;
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
        rhinofi: string;
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
        multicall2: "0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2";
        permit2: "0x83986Ff655A54ee061F6B7F476B92f4Fed111B93";
        poolFactory: "0x70C62C8b8e801124A4Aa81ce07b637A3e83cb919";
        positionsNFT: "0xB39002E4033b162fAc607fc3471E205FA2aE5967";
        universalRouter: "0x595E7160858b1AdA94Bda790D8699C85e595117E";
        wrappedNativeAddress: "0x5300000000000000000000000000000000000004";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
        wethAddress: "0x5300000000000000000000000000000000000004";
        wbtcAddress: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1";
    };
    oku: {
        limitOrderRegistry: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x5300000000000000000000000000000000000004";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x813df550a32d4a9d42010d057386429ad2328ed9";
    defaultToken0: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    defaultToken1: "0x5300000000000000000000000000000000000004";
    tokenList: ({
        symbol: string;
        address: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    } | {
        symbol: string;
        address: "0x5300000000000000000000000000000000000004";
    } | {
        symbol: string;
        address: "0xf55bec9cafdbe8730f096aa55dad6d22d44099df";
    } | {
        symbol: string;
        address: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1";
    } | {
        symbol: string;
        address: "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97";
    })[];
    stables: ("0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4" | "0xf55bec9cafdbe8730f096aa55dad6d22d44099df" | "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97")[];
    watchlist: ("0x813df550a32d4a9d42010d057386429ad2328ed9" | "0xf1783f3377b3a70465c193ef33942c0803121ba0")[];
    internalName: "scroll";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        };
        nftManager: {
            address: "0xB39002E4033b162fAc607fc3471E205FA2aE5967";
        };
        weth9: {
            address: "0x5300000000000000000000000000000000000004";
        };
        Multicall2: {
            address: "0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2";
        };
        Multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276";
            blockCreated: number;
        };
        multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Scrollscan";
            readonly url: "https://scrollscan.com";
            readonly apiUrl: "https://api.scrollscan.com/api";
        };
    };
    blockTime: 3000;
    ensTlds?: readonly string[] | undefined;
    id: 534352;
    name: "Scroll";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.scroll.io"];
            readonly webSocket: readonly ["wss://wss-rpc.scroll.io/ws"];
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
