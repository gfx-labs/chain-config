export declare const corn: Readonly<{
    name: "Corn";
    blockTimeSeconds: 35;
    launchTime: 1733882663;
    transactionType: "eip1559";
    sortIndex: 25;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/corn-logo.svg";
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
        layerzero: {
            eid: number;
            tokens: {
                id: number;
                symbol: string;
                project: string;
                OFTAddress: string;
                address: string;
            }[];
        };
    };
    oracles: {};
    morpho: {
        deployBlock: number;
        morpho: "0xc2B1E031540e3F3271C5F3819F0cC7479a8DdD90";
        publicAllocator: "0xDFde06e2B2A2D718eE5560b73dA4F830E56A2f10";
        mmFactory11: "0xe430821595602eA5DD0cD350f86987437c7362fA";
        bundler3: "0x086889F9bdE8349512dD77088A7114E6C1c42Af7";
        urdFactory: "0xaBC2CBa3C8E265d63C04BF5fA41EE105d3D85ae3";
    };
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
        universalRouter: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407";
        wrappedNativeAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2";
    };
    oku: {
        limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xe435E14815d28a86c643E4606Ed0e8E5624782c6";
    defaultToken0: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2";
    defaultToken1: "0xDF0B24095e15044538866576754F3C964e902Ee6";
    tokenList: ({
        symbol: string;
        address: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2";
    } | {
        symbol: string;
        address: "0xDF0B24095e15044538866576754F3C964e902Ee6";
    })[];
    stables: ("0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb" | "0xDF0B24095e15044538866576754F3C964e902Ee6")[];
    watchlist: ("0xe435E14815d28a86c643E4606Ed0e8E5624782c6" | "0x660c6c6c2ad9be9fca2d40da22e1e6142ce5e7ca" | "0x43aA32cf4f6389aB89d8C79092A0fc65899C20ba" | "0x0F12dac5217868b3d6772632543ef16df8df17E5" | "0xbD108c1Dd7802DFF6c24138A72949184FFbe006F" | "0xb6a7be3ca6698859b374640b3db439fda7b7a5e3" | "0x255f0b304f701a0530f5dc1739a3d1469e21dd5f")[];
    v4Watchlist: never[];
    internalName: "corn";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/corn.png";
    contracts: {
        limitOrder: {
            address: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2";
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
            readonly name: "Corn Explorer";
            readonly url: "https://cornscan.io";
            readonly apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 21000000;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Bitcorn";
        readonly symbol: "BTCN";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://21000000.rpc.thirdweb.com"];
        };
    };
    sourceId: 1;
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
