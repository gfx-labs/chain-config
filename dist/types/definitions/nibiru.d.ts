export declare const nibiru: Readonly<{
    name: "Nibiru";
    blockTimeSeconds: 2;
    launchTime: 1750705200;
    transactionType: "eip1559";
    sortIndex: 29;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/nibiru-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    externalId: {};
    blockAid: "";
    markets: {};
    marketRouters: {
        uniswap: ("0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B" | "0xA7E6cB0A6B1BE8b779022A6aFcb097cF0d3Ff4A2")[];
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
        poolFactory: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578";
        multicall2: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155";
        tickLens: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0";
        nonfungiblePositionManager: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050";
        positionsNFT: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050";
        positionsNFTDeployBlock: number;
        universalRouter: "0xA7E6cB0A6B1BE8b779022A6aFcb097cF0d3Ff4A2";
        wrappedNativeAddress: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97";
        usdcAddress: "0x0829F361A05D993d5CEb035cA6DF3446b060970b";
    };
    oku: {
        router: "0x7B060A98BA242Ae42D6027a60937787eBe33DEBe";
        limitOrderRegistry: "0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xd8F82b8d2e82265aC25d8d4Ef3cA47917693D3d5";
    defaultToken0: "0x0829F361A05D993d5CEb035cA6DF3446b060970b";
    defaultToken1: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97";
    tokenList: ({
        symbol: string;
        address: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97";
    } | {
        symbol: string;
        address: "0x0829F361A05D993d5CEb035cA6DF3446b060970b";
    })[];
    stables: "0x0829F361A05D993d5CEb035cA6DF3446b060970b"[];
    watchlist: ("0x9475b76b7f77791b6147cb989187fecd9b55398a" | "0x0085a09e68468a99c6ec3c0c9c98e17af614c470" | "0x9fe58f1883732931625c281afe2a068fe19183f5" | "0xd8f82b8d2e82265ac25d8d4ef3ca47917693d3d5" | "0x5133222db1e9f1b98d16e5fb46d6f398c60998e2" | "0xe7612e14a05613caf06fad766b484b0a6d146c3a")[];
    v4Watchlist: never[];
    internalName: "nibiru";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/nibi.svg";
    contracts: {
        limitOrder: {
            address: "0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02";
        };
        nftManager: {
            address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050";
        };
        weth9: {
            address: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97";
        };
        multicall2: {
            address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "NibiScan";
            readonly url: "https://nibiscan.io";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 6900;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "NIBI";
        readonly symbol: "NIBI";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evm-rpc.nibiru.fi"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
    testnet?: boolean | undefined | undefined | undefined;
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
