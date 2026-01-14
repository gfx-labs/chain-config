export declare const goat: Readonly<{
    name: "GOAT";
    blockTimeSeconds: 3;
    launchTime: 1742159744;
    transactionType: "eip1559";
    sortIndex: 29;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/goat-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {};
    markets: {};
    bridges: {
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
    };
    oracles: {};
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578";
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641";
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFTDeployBlock: number;
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2";
        wrappedNativeAddress: "0xbC10000000000000000000000000000000000000";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0xbC10000000000000000000000000000000000000";
        usdcAddress: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8";
    };
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xbC10000000000000000000000000000000000000";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef";
    defaultToken0: "0x941508f0b823f1bc40a9beefce5e544e525a94c3";
    defaultToken1: "0xfe41e7e5cb3460c483ab2a38eb605cda9e2d248e";
    tokenList: ({
        symbol: string;
        address: "0xbC10000000000000000000000000000000000000";
    } | {
        symbol: string;
        address: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8";
    } | {
        symbol: string;
        address: "0xe1ad845d93853fff44990ae0dcecd8575293681e";
    })[];
    stables: ("0x3022b87ac063DE95b1570F46f5e470F8B53112D8" | "0xe1ad845d93853fff44990ae0dcecd8575293681e")[];
    watchlist: ("0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef" | "0xe84dc31691587402e59ba9f9180f8ab02a593d3c")[];
    internalName: "goat";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/gbtc.svg";
    contracts: {
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0xbC10000000000000000000000000000000000000";
        };
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Goat Explorer";
            readonly url: "https://explorer.goat.network";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 2345;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Bitcoin";
        readonly symbol: "BTC";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.goat.network"];
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
