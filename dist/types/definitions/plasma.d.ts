export declare const plasma: Readonly<{
    name: "Plasma";
    blockTimeSeconds: 1;
    launchTime: 1758588527;
    transactionType: "eip1559";
    sortIndex: 15;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/plasma-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {};
    markets: {
        zeroex: true;
        kyberswap: string;
        openocean: string;
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
        universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        wrappedNativeAddress: "0x6100E367285b01F48D07953803A2d8dCA5D19873";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x6100E367285b01F48D07953803A2d8dCA5D19873";
    };
    oku: {
        limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x6100E367285b01F48D07953803A2d8dCA5D19873";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x8603c67b7cc056ef6981a9c709854c53b699fa66";
    defaultToken0: "0x6100E367285b01F48D07953803A2d8dCA5D19873";
    defaultToken1: "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb";
    tokenList: ({
        symbol: string;
        address: "0x6100E367285b01F48D07953803A2d8dCA5D19873";
    } | {
        symbol: string;
        address: "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb";
    })[];
    stables: "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"[];
    watchlist: ("0x8603c67b7cc056ef6981a9c709854c53b699fa66" | "0xce4ac514ca6a9db357cccc105b7848d7fd37445d" | "0x2eabb32f34b7a25c34bc9cea142ce0e060ee0682" | "0x21d5a075073e631a85ab9c02e4b703460c572b4b" | "0x7bf6037d3b8af69468356435032eab9010adf879")[];
    internalName: "plasma";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/xpl.png";
    contracts: {
        limitOrder: {
            address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x6100E367285b01F48D07953803A2d8dCA5D19873";
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
            readonly name: "PlasmaScan";
            readonly url: "https://plasmascan.to";
        };
    };
    blockTime: 1000;
    ensTlds?: readonly string[] | undefined;
    id: 9745;
    nativeCurrency: {
        readonly name: "Plasma";
        readonly symbol: "XPL";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.plasma.to"];
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
