export declare const ronin: Readonly<{
    blockTimeSeconds: 3;
    launchTime: 1761966026;
    transactionType: "eip1559";
    sortIndex: 41;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/ronin-logo.svg";
    deprecated: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {};
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
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
    };
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        permit2: "0x000000000022d473030f116ddee9f6b43ac78ba3";
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641";
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFTDeployBlock: number;
        universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        wrappedNativeAddress: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc";
        wethAddress: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4";
    };
    oku: {
        limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xa7906fd31d53b895897be4528f24282b98c4b114";
    defaultToken0: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc";
    defaultToken1: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4";
    tokenList: ({
        symbol: string;
        address: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc";
    } | {
        symbol: string;
        address: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4";
    })[];
    stables: "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"[];
    watchlist: never[];
    internalName: "ronin";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/ron.svg";
    contracts: {
        limitOrder: {
            address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4";
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
            readonly name: "Ronin Explorer";
            readonly url: "https://app.roninchain.com";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 2020;
    name: "Ronin";
    nativeCurrency: {
        readonly name: "RON";
        readonly symbol: "RON";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.roninchain.com/rpc"];
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
