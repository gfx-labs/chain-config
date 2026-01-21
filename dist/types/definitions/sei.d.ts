export declare const sei: Readonly<{
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    blockTimeSeconds: 0.4;
    launchTime: 1687788000;
    transactionType: "eip1559";
    sortIndex: 7;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/sei-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {
        openocean: string;
        oneinch: {
            spender: string;
        };
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
            tokens: ({
                name: string;
                type: string;
                id: number;
                address: string;
            } | {
                name: string;
                id: number;
                address: string;
            })[];
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
        wormhole: {
            chain: string;
            timeToFinalize: number;
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
    blockExplorers: {
        default: {
            name: string;
            url: string;
            apiUrl: string;
        };
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3";
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578";
        multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9";
        tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA";
        nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        positionsNFTDeployBlock: number;
        universalRouter: "0xa683c66045ad16abb1bCE5ad46A64d95f9A25785";
        wrappedNativeAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1";
        wethAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7";
    };
    oku: {
        limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x0A6358F069268c7dc4918D5B12c69a782b957Ead";
    defaultToken0: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1";
    defaultToken1: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7";
    tokenList: ({
        symbol: string;
        address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7";
    } | {
        symbol: string;
        address: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1";
    } | {
        symbol: string;
        address: "0xb75d0b03c06a926e488e2659df1a861f860bd3d1";
    })[];
    stables: ("0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1" | "0xb75d0b03c06a926e488e2659df1a861f860bd3d1" | "0x9151434b16b9763660705744891fa906f660ecc5")[];
    watchlist: ("0x0A6358F069268c7dc4918D5B12c69a782b957Ead" | "0x8a1a9efb7f7f74ace10a31f2f5f9f7e804f957b1" | "0x41eea09c971294fcde3b6e553902b04a47be7442" | "0x5cfa8db453c9904511c4ea9eb0bfc903e36b9f5f" | "0xa3a573c8d14c93fca8fdecb7db168619563d9b00" | "0x48ddb6384ec5d835bdb0faf7e3abc01d7a1493cd" | "0xc53b65811e3d33ada5a90d476dcf2063b53bcfb3")[];
    internalName: "sei";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/sei.png";
    contracts: {
        limitOrder: {
            address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0";
        };
        nftManager: {
            address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        };
        weth9: {
            address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7";
        };
        multicall2: {
            address: "0x9b7aC6735b23578E81260acD34E3668D0cc6000A";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0xD6e88c910329fE3597498772eB94991a0630306d";
            blockCreated: number;
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 1329;
    name: "Sei Network";
    nativeCurrency: {
        readonly name: "Sei";
        readonly symbol: "SEI";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evm-rpc.sei-apis.com/"];
            readonly webSocket: readonly ["wss://evm-ws.sei-apis.com/"];
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
