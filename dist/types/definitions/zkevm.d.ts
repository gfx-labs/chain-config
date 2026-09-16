export declare const polygonZkEvm: Readonly<{
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    sortIndex: 40;
    launchTime: 1722520800;
    transactionType: "legacy";
    blockTimeSeconds: 7;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/zkevm-logo.svg";
    deprecated: true;
    estimatedSwapGas: 400000;
    estimatedBridgeGas: 250000;
    estimatedWrapGas: 80000;
    safeReorgDistance: 90000;
    blockAid: "";
    morpho: {};
    externalId: {
        zerion: string;
        coingecko: string;
    };
    markets: {
        kyberswap: string;
        paraswap: {
            routerContract: string;
        };
        openocean: string;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
        };
        rhinofi: string;
    };
    oracles: {
        coingecko: {
            slug: string;
            native: string;
        };
        dexscreener: string;
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0xff83c3c800Fec21de45C5Ec30B69ddd5Ee60DFC2";
        permit2: "0xCEc9e219281B78E1946b6b894f75ae89Bc10FEb6";
        multicall2: "0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674";
        tickLens: "0x64519b94A7248Bf17929fB03b9648ce277Fd7fDA";
        nonfungiblePositionManager: "0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f";
        positionsNFT: "0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f";
        positionsNFTDeployBlock: number;
        universalRouter: "0x32454e81d065FAA95Ec0d0Ab6Fe326599Af30fd7";
        wrappedNativeAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wbtcAddress: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1";
        wethAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
        usdcAddress: "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5";
    };
    oku: {
        limitOrderRegistry: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xd6efe114c9b6058a20aab759e064f50544590914";
    defaultToken0: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    defaultToken1: "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5";
    tokenList: ({
        symbol: string;
        address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    } | {
        symbol: string;
        address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    } | {
        symbol: string;
        address: "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5";
    } | {
        symbol: string;
        address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d";
    } | {
        symbol: string;
        address: "0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5";
    })[];
    stables: ("0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5" | "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035" | "0x1e4a5963abfd975d8c9021ce480b42188849d41d" | "0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5" | "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4")[];
    watchlist: ("0xd6efe114c9b6058a20aab759e064f50544590914" | "0x52b18c30f1d3f5c6f5fb4badff2d0ab3c68a3ff4" | "0x90C865Da46D948EF3792fb57B0d60D14A96ecf49" | "0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd" | "0x539d23BE81696560C12Cf8d24AE8bb4641381E7D" | "0x7908F0eD78de3c850A5d1DC261c39341b274D07c" | "0x0A44b12799eBC21E1dF271284921e1e4F6f17f81")[];
    v4Watchlist: never[];
    internalName: "polygon-zkevm";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723";
        };
        nftManager: {
            address: "0xf0d61aeda516cca1ff20be65cfb0213be688a24f";
        };
        weth9: {
            address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
        };
        multicall2: {
            address: "0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674";
        };
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://zkevm.polygonscan.com";
            readonly apiUrl: "https://api-zkevm.polygonscan.com/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 1101;
    name: "Polygon zkEVM";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zkevm-rpc.com"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
    testnet?: boolean | undefined | undefined | undefined;
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
