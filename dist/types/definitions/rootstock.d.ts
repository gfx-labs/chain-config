export declare const rootstock: Readonly<{
    sortIndex: 12;
    launchTime: 1702479600;
    transactionType: "legacy";
    name: "Rootstock";
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    blockTimeSeconds: 33;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/rootstock-logo.svg";
    deprecated: false;
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
    morpho: {};
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
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
    blockExplorers: {
        default: {
            name: string;
            url: string;
            apiUrl: string;
        };
        rsk: {
            readonly name: "RSK Explorer";
            readonly url: "https://explorer.rsk.co";
        };
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0xaF37EC98A00FD63689CF3060BF3B6784E00caD82";
        permit2: "0xFcf5986450E4A014fFE7ad4Ae24921B589D039b5";
        multicall2: "0x996a9858cdFa45aD68E47C9a30A7201E29c6A386";
        tickLens: "0x55B9dF5bF68ADe972191a91980459f48ecA16afC";
        nonfungiblePositionManager: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1";
        positionsNFT: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1";
        positionsNFTDeployBlock: number;
        universalRouter: "0x244f68e77357f86a8522323eBF80b5FC2F814d3E";
        wrappedNativeAddress: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x3A15461d8AE0f0Fb5fA2629e9dA7D66A794a6E37";
    };
    oku: {
        limitOrderRegistry: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xaef6fabf3b0c9e5f9d6d5170afc703a633479bbd";
    defaultToken0: "0x542fda317318ebf1d3deaf76e0b632741a7e677d";
    defaultToken1: "0x779ded0c9e1022225f8e0630b35a9b54be713736";
    tokenList: ({
        symbol: string;
        address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
    } | {
        symbol: string;
        address: "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5";
    } | {
        symbol: string;
        address: "0xef213441a85df4d7acbdae0cf78004e1e486bb96";
    } | {
        symbol: string;
        address: "0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67";
    } | {
        symbol: string;
        address: "0x779ded0c9e1022225f8e0630b35a9b54be713736";
    })[];
    stables: ("0x779ded0c9e1022225f8e0630b35a9b54be713736" | "0xef213441a85df4d7acbdae0cf78004e1e486bb96" | "0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67" | "0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37" | "0xaf368c91793cb22739386dfcbbb2f1a9e4bcbebf")[];
    watchlist: ("0xd2ffe51ab4e622a411abbe634832a19d919e9c55" | "0x022650756421f2e636d4138054331cbfafb55d9e" | "0x549a5d92412161a1a2828549a657a49dd9fa046c" | "0xcba7abe98fd6a65259837d76a3409841c1dd4288" | "0xbe092d38045ef7f9cdc5014278a4239e896bf5ca" | "0xb74d0aa1711eb859eead7cfe3fe5921eedd7e5bf" | "0x8f597295f1412a079088fc51c8a95e6698c31777" | "0x71d0d054974121ae37a76762e1fa02ffa150eba1")[];
    internalName: "rootstock";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/rbtc.png";
    contracts: {
        limitOrder: {
            address: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        };
        nftManager: {
            address: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1";
        };
        weth9: {
            address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
        };
        Multicall2: {
            address: "0x996a9858cdFa45aD68E47C9a30A7201E29c6A386";
        };
        Multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11";
        };
        multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 4249540;
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 30;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Rootstock Bitcoin";
        readonly symbol: "RBTC";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://public-node.rsk.co"];
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
    network: "rootstock";
} & {
    caip2Namespace: string;
}>;
