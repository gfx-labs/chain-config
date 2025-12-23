export declare const gnosis: Readonly<{
    blockTimeSeconds: 5;
    launchTime: 1725890400;
    transactionType: "eip1559";
    sortIndex: 18;
    blockAid: "";
    logoUrl: "https://cms.oku.trade/cdn/public/chains/gnosis-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    morpho: {};
    externalId: {
        zerion: string;
        cowswap: string;
        tenderly: string;
    };
    markets: {
        openocean: string;
        cowswap: string;
        paraswap: {
            routerContract: string;
        };
        oneinch: {
            spender: string;
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
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xe32F7dD7e3f098D518ff19A22d5f028e076489B1";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0x4dfa9a980efE4802E969AC33968E3d6E59B8a19e";
        tickLens: "0x8fe3D346B53dCA838B228e0e53aCdBED5DEC70Dc";
        nonfungiblePositionManager: "0xAE8fbE656a77519a7490054274910129c9244FA3";
        positionsNFT: "0xAE8fbE656a77519a7490054274910129c9244FA3";
        positionsNFTDeployBlock: number;
        universalRouter: "0x75FC67473A91335B5b8F8821277262a13B38c9b3";
        wrappedNativeAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
        wethAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
    };
    oku: {
        limitOrderRegistry: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            pools: "0x5a2fb66e66b2af7f1c2f71c6c695492faab2e587"[];
            nativeWrappedToken: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9";
    defaultToken0: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1";
    defaultToken1: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
    tokenList: ({
        symbol: string;
        address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
    } | {
        symbol: string;
        address: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1";
    } | {
        symbol: string;
        address: "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0";
    } | {
        symbol: string;
        address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
    } | {
        symbol: string;
        address: "0x4ecaba5870353805a9f068101a40e0f32ed605c6";
    })[];
    stables: ("0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" | "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0" | "0x4ecaba5870353805a9f068101a40e0f32ed605c6" | "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83")[];
    watchlist: ("0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9" | "0x909e36aB6eA5DB6Fd71876Fe319328BAe4DfeA29" | "0x8Fb50102bC76798C13a68de3bd5F1974feDF48CD" | "0xa180bEDd56438C596C9ACed94D03A3001C5BB83C" | "0xE9E1793954f32D880Ec0B2186E96d88e2b870e40" | "0xbb98d4e20b054ede4c4143ecee59368f88ecbbe4")[];
    internalName: "gnosis";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/xdai.png";
    contracts: {
        limitOrder: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
        nftManager: {
            address: "0xAE8fbE656a77519a7490054274910129c9244FA3";
        };
        weth9: {
            address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
        };
        multicall2: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0x9430990117A7451e3d0a3d89796FC0b0c294Da9c";
            blockCreated: number;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Gnosisscan";
            readonly url: "https://gnosisscan.io";
            readonly apiUrl: "https://api.gnosisscan.io/api";
        };
    };
    blockTime: 5000;
    ensTlds?: readonly string[] | undefined;
    id: 100;
    name: "Gnosis";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "xDAI";
        readonly symbol: "XDAI";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.gnosischain.com"];
            readonly webSocket: readonly ["wss://rpc.gnosischain.com/wss"];
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
