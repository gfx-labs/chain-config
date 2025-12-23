export declare const lightlink: Readonly<{
    name: "LightLink";
    blockTimeSeconds: 0.5;
    launchTime: 1741485513;
    transactionType: "legacy";
    sortIndex: 13;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/lightlink-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    morpho: {};
    externalId: {};
    markets: {
        icecreamswap: true;
    };
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
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        permit2: "0x807F4E281B7A3B324825C64ca53c69F0b418dE40";
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641";
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFTDeployBlock: number;
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2";
        wrappedNativeAddress: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73";
        usdcAddress: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd";
        wbtcAddress: "0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67";
    };
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x1125452469E9B9A36FE69249309fCe8925C3eEDa";
    defaultToken0: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73";
    defaultToken1: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd";
    tokenList: ({
        symbol: string;
        address: "0x519d3443cacc61bd844546edaea48e5502021802";
    } | {
        symbol: string;
        address: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd";
    } | {
        symbol: string;
        address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949";
    } | {
        symbol: string;
        address: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73";
    } | {
        symbol: string;
        address: "0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67";
    })[];
    stables: ("0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd" | "0x808d7c71ad2ba3FA531b068a2417C63106BC0949")[];
    watchlist: ("0x1125452469E9B9A36FE69249309fCe8925C3eEDa" | "0x2288627C696010049f6D98a84fC10F9C5F7b3Ce2" | "0xc87Fa6290e7F11543e76e1D240335190C15Dade8")[];
    internalName: "lightlink";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73";
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
            readonly name: "LightLink Phoenix Explorer";
            readonly url: "https://phoenix.lightlink.io";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 1890;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://replicator.phoenix.lightlink.io/rpc/v1"];
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
    network: "lightlink-phoenix";
}>;
