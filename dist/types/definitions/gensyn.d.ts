export declare const gensyn: Readonly<{
    sourceId: undefined;
    testnet: false;
    fees: undefined;
    custom: undefined;
    formatters: undefined;
    serializers: undefined;
    id: 685689;
    name: "Gensyn";
    nativeCurrency: {
        decimals: number;
        name: string;
        symbol: string;
    };
    rpcUrls: {
        default: {
            http: string[];
        };
    };
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
    blockTimeSeconds: 2;
    launchTime: 1773970570;
    transactionType: "eip1559";
    sortIndex: 25;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/gensyn-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {};
    markets: {};
    bridges: {};
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
        universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006";
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x0000000000000000000000000000000000000000";
    defaultToken0: "0x1B8972370B26f6b9b7d5B823437Ba7674C53cb2a";
    defaultToken1: "0x4200000000000000000000000000000000000006";
    tokenList: ({
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0x1B8972370B26f6b9b7d5B823437Ba7674C53cb2a";
    })[];
    stables: "0x1B8972370B26f6b9b7d5B823437Ba7674C53cb2a"[];
    watchlist: never[];
    internalName: "gensyn";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
            blockCreated: number;
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            blockCreated: number;
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
    };
} & {
    caip2Namespace: string;
}>;
