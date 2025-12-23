export declare const xdc: Readonly<{
    name: "XDC";
    rpcUrls: {
        default: {
            http: string[];
        };
    };
    blockTimeSeconds: 2;
    launchTime: 1746453600;
    transactionType: "legacy";
    sortIndex: 15;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/xdc-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {};
    markets: {
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
        wrappedNativeAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42";
        usdcAddress: "0xfa2958cb79b0491cc627c1557f441ef849ca8eb1";
    };
    oku: {
        limitOrderRegistry: "0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x951857744785e80e2de051c32ee7b25f9c458c42";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x29f804974da123e8e48acb107be76b9f2ce1b408";
    defaultToken0: "0x951857744785e80e2de051c32ee7b25f9c458c42";
    defaultToken1: "0xfa2958cb79b0491cc627c1557f441ef849ca8eb1";
    tokenList: ({
        symbol: string;
        address: "0x951857744785e80e2de051c32ee7b25f9c458c42";
    } | {
        symbol: string;
        address: "0xfa2958cb79b0491cc627c1557f441ef849ca8eb1";
    } | {
        symbol: string;
        address: "0x2a8e898b6242355c290e1f4fc966b8788729a4d4";
    })[];
    stables: ("0xfa2958cb79b0491cc627c1557f441ef849ca8eb1" | "0x2a8e898b6242355c290e1f4fc966b8788729a4d4" | "0xd4b5f10d61916bd6e0860144a91ac658de8a1437")[];
    watchlist: ("0x1e5aec37f6df6653c3342df75edd92beb3fb9846" | "0x9149b4e074f101ca0514b1d30fc78f181e21d409" | "0xd68fdf3cbe9f48422a15899318dd5cb921f92037" | "0x97bb50ace84058254df2e2f6482f5549e80b7267" | "0x9fb200504e3e9eb9b8e332fa21e47a657adfa099" | "0x898488dc884ee5ece8079499f4c7ddc5c281e85f")[];
    internalName: "xdc";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/xdc.png";
    contracts: {
        limitOrder: {
            address: "0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x951857744785e80e2de051c32ee7b25f9c458c42";
        };
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
        multicall3: {
            address: "0x0b1795cca8e4ec4df02346a082df54d437f8d9af";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "XDCScan";
            readonly url: "https://xdcscan.com";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 50;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "XDC";
        readonly symbol: "XDC";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
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
