export declare const linea: Readonly<{
    name: "Linea";
    launchTime: 1713362400;
    transactionType: "eip1559";
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    blockTimeSeconds: 2;
    sortIndex: 21;
    morpho: {};
    logoUrl: "https://cms.oku.trade/cdn/public/chains/linea-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 100;
    blockAid: "linea";
    externalId: {
        zerion: string;
        tenderly: string;
        coingecko: string;
    };
    markets: {
        kyberswap: string;
        openocean: string;
        zeroex: true;
        icecreamswap: true;
        oneinch: {
            spender: string;
        };
    };
    marketRouters: {
        binance: "0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5"[];
        enso: "0xA146d46823f3F594B785200102Be5385CAfCE9B5"[];
        icecreamswap: "0x2fF506ed9729580EF8Bf04429614beB1baE5F76D"[];
        kyberswap: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"[];
        odos: "0x2d8879046f1559E53eb052E949e9544bCB72f414"[];
        okx: ("0x57df6092665eb6058DE53939612413ff4B09114E" | "0x2E1Dee213BA8d7af0934C49a23187BabEACa8764" | "0xdfcb0cEcC10e78F3F3749F3f3d3EE4047b2c9829")[];
        oneinch: "0x111111125421ca6dc452d289314280a0f8842a65"[];
        openocean: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"[];
        uniswap: ("0x8B844f885672f333Bc0042cB669255f93a4C1E6b" | "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a" | "0xD7c7D7F18dD5388D5217c9696C7e799fCd75c6bD")[];
        zeroex: ("0x0000000000001fF3684f28c67538d4D072C22734" | "0x1816eA2150e74Eb3068A4e3809E461Cc6977A7D7")[];
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
        rhinofi: string;
        stargate: {
            endpointID: number;
            blockConfirmations: number;
            tokens: {
                name: string;
                type: string;
                id: number;
                address: string;
            }[];
        };
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
        layerzero: {
            eid: number;
            tokens: {
                id: number;
                symbol: string;
                project: string;
                OFTAddress: string;
            }[];
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
        poolFactory: "0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9";
        multicall2: "0x93e253D101519578A8DF0BCe2A43D8292BFb3A1F";
        tickLens: "0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9";
        nonfungiblePositionManager: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463";
        positionsNFT: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463";
        positionsNFTDeployBlock: number;
        universalRouter: "0x8B844f885672f333Bc0042cB669255f93a4C1E6b";
        wrappedNativeAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff";
        wethAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
        wbtcAddress: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4";
    };
    oku: {
        router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed";
        limitOrderRegistry: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xc48622190a6b91d64ee7459c62fade9abe61b48a";
    defaultToken0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff";
    defaultToken1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
    tokenList: ({
        symbol: string;
        address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
    } | {
        symbol: string;
        address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff";
    })[];
    stables: ("0x176211869ca2b568f2a7d4ee941e073a821ee1ff" | "0xa219439258ca9da29e9cc4ce5596924745e12b93" | "0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5")[];
    watchlist: ("0xc48622190a6b91d64ee7459c62fade9abe61b48a" | "0x5856edf9212bdcec74301ec78afc573b62d6a283" | "0xf8296e87192aa71158bd9ba323fc2e1d9a047aa2" | "0x93f626d0e471279bd8d1420959cc881bdacfdab1" | "0xfe64636280a98d21701a607e6a52ed5d62bacfe4" | "0xf2d33caaedc4daab2c1f0bfc7cccb03a9acf3e4e" | "0xe848d169080a0022039fcaefc19263c410fe3520" | "0x30b44df5010f8b2a4d4e566a2ba638496e76a8fc" | "0x42a72c7fbb355b2cfe08f8716595f3f3509b3bea")[];
    v4Watchlist: never[];
    internalName: "linea";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74";
        };
        nftManager: {
            address: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463";
        };
        weth9: {
            address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
        };
        multicall2: {
            address: "0x9A27B81b034e585be9d366DEB7aBAD036BE50845";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        ensRegistry: {
            readonly address: "0x50130b669B28C339991d8676FA73CF122a121267";
            readonly blockCreated: 6682888;
        };
        ensUniversalResolver: {
            readonly address: "0x4D41762915F83c76EcaF6776d9b08076aA32b492";
            readonly blockCreated: 22222151;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://lineascan.build";
            readonly apiUrl: "https://api.lineascan.build/api";
        };
    };
    blockTime: 2000;
    ensTlds: readonly [".linea.eth"];
    id: 59144;
    nativeCurrency: {
        readonly name: "Linea Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.linea.build"];
            readonly webSocket: readonly ["wss://rpc.linea.build"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees: {
        readonly estimateFeesPerGas: ({ client, multiply, request, type, }: Parameters<import("viem").ChainEstimateFeesPerGasFn>[0]) => ReturnType<import("viem").ChainEstimateFeesPerGasFn>;
        readonly maxPriorityFeePerGas: ({ block, client, request }: import("viem").ChainFeesFnParameters<import("viem").ChainFormatters | undefined>) => Promise<bigint | null>;
    };
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
