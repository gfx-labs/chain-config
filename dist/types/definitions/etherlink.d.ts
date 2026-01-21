export declare const etherlink: Readonly<{
    blockTimeSeconds: 0.6;
    launchTime: 1750211928;
    transactionType: "eip1559";
    sortIndex: 13;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/etherlink-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {
        kyberswap: string;
        threeroute: true;
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
    morpho: {
        deployBlock: number;
        morpho: "0xbCE7364E63C3B13C73E9977a83c9704E2aCa876e";
        publicAllocator: "0x8b8B1bd41d36c06253203CD21463994aB752c1e6";
        mmFactory11: "0x997a79c3C04c5B9eb27d343ae126bcCFb5D74781";
        bundler3: "0x69dc8086191437b55775b79C730BB3876397e7D1";
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
        wrappedNativeAddress: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb";
        usdcAddress: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9";
        wbtcAddress: "0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F";
    };
    oku: {
        limitOrderRegistry: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x659fe227A739D7961F3c7bBc090ea9BfAFCC2A74";
    defaultToken0: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9";
    defaultToken1: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb";
    tokenList: ({
        symbol: string;
        address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb";
    } | {
        symbol: string;
        address: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9";
    } | {
        symbol: string;
        address: "0x2C03058C8AFC06713be23e58D2febC8337dbfE6A";
    } | {
        symbol: string;
        address: "0xfc24f770F94edBca6D6f885E12d4317320BcB401";
    } | {
        symbol: string;
        address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1";
    } | {
        symbol: string;
        address: "0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F";
    })[];
    stables: ("0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9" | "0x2C03058C8AFC06713be23e58D2febC8337dbfE6A")[];
    watchlist: ("0x659fe227a739d7961f3c7bbc090ea9bfafcc2a74" | "0x2a5120e8b04e7f2d3fbbbd82afb4cd70de0f5d0e" | "0xd03b92a27947bb08dd269107d4df00f8ab53fc28" | "0x80c789ebb377d257b5b660100757307099f0e3c0" | "0x50fe07f16943c55220fbc36c52e98559252a93b4" | "0xb5135165da8207f90598a2d58215aeb5f6e9f5ec")[];
    internalName: "etherlink";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/xtz.png";
    contracts: {
        limitOrder: {
            address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb";
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
            readonly name: "Etherlink";
            readonly url: "https://explorer.etherlink.com";
        };
    };
    blockTime: 4830;
    ensTlds?: readonly string[] | undefined;
    id: 42793;
    name: "Etherlink";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Tez";
        readonly symbol: "XTZ";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://node.mainnet.etherlink.com"];
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
