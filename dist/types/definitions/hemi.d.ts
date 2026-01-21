export declare const hemi: Readonly<{
    blockTimeSeconds: 12;
    launchTime: 1741901593;
    transactionType: "eip1559";
    sortIndex: 22;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/hemi-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        coingecko: string;
    };
    markets: {
        icecreamswap: true;
    };
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
    morpho: {};
    oracles: {};
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
        universalRouter: "0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B";
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006";
        wbtcAddress: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3";
    };
    oku: {
        limitOrderRegistry: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x95a8b611e90de2b682267e2f00c8dff71909298a";
    defaultToken0: "0x4200000000000000000000000000000000000006";
    defaultToken1: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA";
    tokenList: ({
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e";
    } | {
        symbol: string;
        address: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA";
    } | {
        symbol: string;
        address: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3";
    })[];
    stables: ("0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA" | "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e" | "0x6c851F501a3F24E29A8E39a29591cddf09369080" | "0x7a06c4aef988e7925575c50261297a946ad204a8")[];
    watchlist: ("0x95a8b611e90de2b682267e2f00c8dff71909298a" | "0x47932f4a77cde549bf328bb33caae7f413b62612" | "0x875c1efa41a868fbb4274c3e06afc14b597e8828" | "0x0bbd621fb38f6ddc16b0089ebbeade8db9a8d354" | "0xc47f921d413787abf5c98d977e52062de0a3a6d4" | "0x0ec5aa557d5b2a8702ad43d253415d11f95364c0")[];
    internalName: "hemi";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0";
        };
        nftManager: {
            address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276";
            blockCreated: number;
        };
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        erc6492Verifier?: import("viem").ChainContract | undefined;
    };
    blockExplorers: {
        readonly default: {
            readonly name: "blockscout";
            readonly url: "https://explorer.hemi.xyz";
        };
    };
    blockTime: 12000;
    ensTlds?: readonly string[] | undefined;
    id: 43111;
    name: "Hemi";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.hemi.network/rpc"];
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
    network: "Hemi";
}>;
