export declare const hyperevm: Readonly<{
    blockTimeSeconds: 1;
    launchTime: 1767333673;
    transactionType: "eip1559";
    sortIndex: 11;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/hyperevm-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        coingecko: string;
    };
    liteChain: true;
    markets: {
        openocean: string;
    };
    marketRouters: {
        bitget: "0x9515d72BcE20cD9e695EE61D2a76A099EA511311"[];
        enso: "0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"[];
        icecreamswap: "0x2fF506ed9729580EF8Bf04429614beB1baE5F76D"[];
        kyberswap: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"[];
        okx: ("0x9Ac7b1FFEE0f58c0a3c89AA54Afb62efD25DC9fd" | "0xb193874f0C77948d2bCFeC2EfAF8Bc65B4C2ca89" | "0x56e6983D59bF472Ced0E63966A14d94A3A291589")[];
        openocean: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"[];
        zeroex: ("0x0000000000001fF3684f28c67538d4D072C22734" | "0xb32b027C59F540C22B4c76bF849BcF853B99F158")[];
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
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
    };
    token: {
        wethAddress: "0x5555555555555555555555555555555555555555";
    };
    oku: {
        router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed";
        pricing: {
            nativeWrappedToken: "0x5555555555555555555555555555555555555555";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x6c9a33e3b592c0d65b3ba59355d5be0d38259285";
    defaultToken0: "0x5555555555555555555555555555555555555555";
    defaultToken1: "0xb88339cb7199b77e23db6e890353e22632ba630f";
    tokenList: ({
        symbol: string;
        address: "0x5555555555555555555555555555555555555555";
    } | {
        symbol: string;
        address: "0xb88339cb7199b77e23db6e890353e22632ba630f";
    })[];
    stables: ("0xb88339cb7199b77e23db6e890353e22632ba630f" | "0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb")[];
    watchlist: never[];
    v4Watchlist: never[];
    internalName: "hyperevm";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/hype.svg";
    contracts: {
        nftManager: {
            address: "0x0000000000000000000000000000000000000000";
        };
        weth9: {
            address: "0x5555555555555555555555555555555555555555";
        };
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
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
    name: "HyperEVM";
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
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
    testnet: false;
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
