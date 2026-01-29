export declare const lens: Readonly<{
    name: "Lens";
    blockTimeSeconds: 2;
    launchTime: 1746050531;
    transactionType: "eip1559";
    sortIndex: 31;
    blockAid: "";
    logoUrl: "https://cms.oku.trade/cdn/public/chains/lens-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    externalId: {
        tenderly: string;
        cowswap: string;
    };
    markets: {
        cowswap: string;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
    };
    oracles: {};
    morpho: {};
    initCodeHash: "0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xe0704DB90bcAA1eAFc00E958FF815Ab7aa11Ef47";
        permit2: "0x0000000000225e31d15943971f47ad3022f714fa";
        multicall2: "0x5900c97b683e69CD752aF7DC7003d69315E2a288";
        tickLens: "0x5499510c2e95F59b1Df0eC7C1bd2Fa76347df5Be";
        nonfungiblePositionManager: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031";
        positionsNFT: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031";
        positionsNFTDeployBlock: number;
        universalRouter: "0xAA904d497e42608C014BE83a026E984aFc16129b";
        wrappedNativeAddress: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F";
        usdcAddress: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884";
    };
    oku: {
        limitOrderRegistry: "0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de";
    defaultToken0: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F";
    defaultToken1: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884";
    tokenList: ({
        symbol: string;
        address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F";
    } | {
        symbol: string;
        address: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884";
    } | {
        symbol: string;
        address: "0xE5ecd226b3032910CEaa43ba92EE8232f8237553";
    })[];
    stables: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884"[];
    watchlist: ("0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de" | "0xdf4b8153bf91f54802a9ba16366b2111724384e4" | "0x6b6eb6f437bf54d22b997c3b38b79a23bc63f39f")[];
    internalName: "lens";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/gho.png";
    contracts: {
        limitOrder: {
            address: "0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF";
        };
        nftManager: {
            address: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031";
        };
        weth9: {
            address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F";
        };
        multicall2: {
            address: "0x5900c97b683e69CD752aF7DC7003d69315E2a288";
        };
        multicall3: {
            address: "0x6b6dEa4D80e3077D076733A04c48F63c3BA49320";
        };
        metrom: {
            address: "0x5319C3Fc78ac3e10Ca733A5839D65F8493A8D60A";
            blockCreated: number;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Lens Block Explorer";
            readonly url: "https://explorer.lens.xyz";
            readonly apiUrl: "https://explorer.lens.xyz/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 232;
    nativeCurrency: {
        readonly name: "GHO";
        readonly symbol: "GHO";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.lens.xyz"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    testnet?: boolean | undefined | undefined | undefined;
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
