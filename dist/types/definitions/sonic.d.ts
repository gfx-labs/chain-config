export declare const sonic: Readonly<{
    blockTimeSeconds: 3;
    launchTime: 1737165834;
    transactionType: "eip1559";
    sortIndex: 33;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/sonic-logo.svg";
    deprecated: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    morpho: {};
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {
        icecreamswap: true;
        kyberswap: string;
        openocean: string;
        paraswap: {
            routerContract: string;
        };
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        deswap: {
            chainId: number;
        };
        stargate: {
            endpointID: number;
            blockConfirmations: number;
            tokens: {
                name: string;
                id: number;
                address: string;
            }[];
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
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
    };
    oracles: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641";
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFTDeployBlock: number;
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2";
        wrappedNativeAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38";
    };
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xEcb04e075503Bd678241f00155AbCB532c0a15Eb";
    defaultToken0: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38";
    defaultToken1: "0x29219dd400f2bf60e5a23d13be72b486d4038894";
    tokenList: ({
        symbol: string;
        address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38";
    } | {
        symbol: string;
        address: "0x29219dd400f2bf60e5a23d13be72b486d4038894";
    } | {
        symbol: string;
        address: "0x50c42deacd8fc9773493ed674b675be577f2634b";
    })[];
    stables: ("0x29219dd400f2bf60e5a23d13be72b486d4038894" | "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE")[];
    watchlist: ("0xecb04e075503bd678241f00155abcb532c0a15eb" | "0xcfd41df89d060b72ebdd50d65f9021e4457c477e" | "0xb01b201ce73415071b7b99a8737240b511d203b7" | "0xb345489a0350f188fe70dadaa6210a9c710fed4b" | "0xdfcdad314b0b96ab8890391e3f0540278e3b80f7" | "0x21043D7Ad92d9e7bC45C055AF29771E37307B111")[];
    v4Watchlist: never[];
    internalName: "sonic";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/sonic.svg";
    contracts: {
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38";
        };
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276";
            blockCreated: number;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Sonic Explorer";
            readonly url: "https://sonicscan.org";
        };
    };
    blockTime: 630;
    ensTlds?: readonly string[] | undefined;
    id: 146;
    name: "Sonic";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Sonic";
        readonly symbol: "S";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.soniclabs.com"];
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
