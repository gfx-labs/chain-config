export declare const avalanche: Readonly<{
    name: "Avalanche";
    blockTimeSeconds: 2;
    launchTime: 1761794290;
    transactionType: "eip1559";
    sortIndex: 19;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/avalanche-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    liteChain: true;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        zerion: string;
        debank: string;
        tenderly: string;
        coingecko: string;
    };
    markets: {
        openocean: string;
        cowswap: string;
    };
    marketRouters: {
        bitget: "0xBc1D9760bd6ca468CA9fB5Ff2CFbEAC35d86c973"[];
        enso: "0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"[];
        icecreamswap: "0xa575f37e869e6887564F87c07e2885e08D542C4a"[];
        kyberswap: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"[];
        odos: "0x88de50B233052e4Fb783d4F6db78Cc34fEa3e9FC"[];
        okx: ("0xa94Fcf9fc56a864f8DE51e6315aee5863AD63C91" | "0xAB96dcFA7A7D669d9BF5918faB8641479973dD0A" | "0x40aA958dd87FC8305b97f2BA922CDdCa374bcD7f")[];
        openocean: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"[];
        uniswap: ("0x8B844f885672f333Bc0042cB669255f93a4C1E6b" | "0x4Dae2f939ACf50408e13d58534Ff8c2776d45265" | "0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE")[];
        zeroex: ("0x0000000000001fF3684f28c67538d4D072C22734" | "0x6De411A14aEaafB3f23697A4472a4D4ed275Ac0f")[];
    };
    bridges: {
        cctp: {
            domain: number;
            messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64";
        };
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        stargate: {
            endpointID: number;
            tokens: never[];
        };
        wanbridge: {
            requiredConfirmations: number;
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
        poolFactory: "0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2";
        tickLens: "0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950";
        nonfungiblePositionManager: "0x655C406EBFa14EE2006250925e54ec43AD184f8B";
        positionsNFT: "0x655C406EBFa14EE2006250925e54ec43AD184f8B";
        positionsNFTDeployBlock: number;
        universalRouter: "0x8B844f885672f333Bc0042cB669255f93a4C1E6b";
        wrappedNativeAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
    };
    oku: {
        router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed";
        limitOrderRegistry: "0x0000000000000000000000000000000000000000";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xfAe3f424a0a47706811521E3ee268f00cFb5c45E";
    defaultToken0: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
    defaultToken1: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e";
    tokenList: ({
        symbol: string;
        address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
    } | {
        symbol: string;
        address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e";
    })[];
    stables: ("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e" | "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7")[];
    watchlist: never[];
    v4Watchlist: never[];
    internalName: "avalanche";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/avax.svg";
    contracts: {
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
        };
        nftManager: {
            address: "0x655C406EBFa14EE2006250925e54ec43AD184f8B";
        };
        weth9: {
            address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
        };
        multicall2: {
            address: "0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "SnowTrace";
            readonly url: "https://snowtrace.io";
            readonly apiUrl: "https://api.snowtrace.io";
        };
    };
    blockTime: 1700;
    ensTlds?: readonly string[] | undefined;
    id: 43114;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
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
