export declare const telos: Readonly<{
    blockTimeSeconds: 0.5;
    launchTime: 1743089303;
    transactionType: "legacy";
    sortIndex: 32;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/telos-logo.svg";
    deprecated: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        coingecko: string;
    };
    markets: {
        openocean: string;
        icecreamswap: true;
    };
    bridges: {
        stargate: {
            endpointID: number;
            tokens: {
                name: string;
                type: string;
                id: number;
                address: string;
            }[];
        };
    };
    morpho: {};
    oracles: {};
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
        wrappedNativeAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
        wbtcAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c";
        usdcAddress: "0xF1815bd50389c46847f0Bda824eC8da914045D14";
    };
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xa89c1c7d0975f1a98442e96e18a292982b12b3cd";
    defaultToken0: "0xf1815bd50389c46847f0bda824ec8da914045d14";
    defaultToken1: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
    tokenList: ({
        symbol: string;
        address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
    } | {
        symbol: string;
        address: "0xF1815bd50389c46847f0Bda824eC8da914045D14";
    } | {
        symbol: string;
        address: "0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8";
    } | {
        symbol: string;
        address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c";
    } | {
        symbol: string;
        address: "0xBAb93B7ad7fE8692A878B95a8e689423437cc500";
    } | {
        symbol: string;
        address: "0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9";
    })[];
    stables: ("0xF1815bd50389c46847f0Bda824eC8da914045D14" | "0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8" | "0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9")[];
    watchlist: ("0xa89c1c7d0975f1a98442e96e18a292982b12b3cd" | "0xa48c8dd45ccf9c1ebf938c63c7cbc7cc259bf207" | "0xd8606afb3f48a13229f52d6251c1aa3e05ad31a1" | "0xe8d1c7e1fcfc8cee3daac2819266ea18015829b7" | "0xc1db63d4fbb6fbc023ee74480ba53b8906263fbd" | "0x6b566fcf6c5342934e7da46d9ee3b705e74736f9" | "0x11856fa7683aa9edf44a6ab368ec0cd02b03e6a1" | "0x45b47c9207fa8298863991f1b02a5b0e77bab7b6")[];
    v4Watchlist: never[];
    internalName: "telos";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/telos.png";
    contracts: {
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
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
            readonly name: "Teloscan";
            readonly url: "https://www.teloscan.io/";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 40;
    name: "Telos";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Telos";
        readonly symbol: "TLOS";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.telos.net"];
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
} & {
    caip2Namespace: string;
}>;
