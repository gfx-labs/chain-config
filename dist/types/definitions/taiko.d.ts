export declare const taiko: Readonly<{
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    blockTimeSeconds: 24;
    launchTime: 1717509600;
    transactionType: "eip1559";
    sortIndex: 4;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/taiko-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
    };
    markets: {
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
        rhinofi: string;
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
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3";
        permit2: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc";
        multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9";
        tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA";
        nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        positionsNFTDeployBlock: number;
        universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        wrappedNativeAddress: "0xA51894664A773981C6C112C43ce576f315d5b1B6";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b";
        wethAddress: "0xA51894664A773981C6C112C43ce576f315d5b1B6";
    };
    oku: {
        limitOrderRegistry: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xA51894664A773981C6C112C43ce576f315d5b1B6";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b";
    defaultToken0: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b";
    defaultToken1: "0xa51894664a773981c6c112c43ce576f315d5b1b6";
    tokenList: ({
        symbol: string;
        address: "0xa9d23408b9ba935c230493c40c73824df71a0975";
    } | {
        symbol: string;
        address: "0xA51894664A773981C6C112C43ce576f315d5b1B6";
    } | {
        symbol: string;
        address: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b";
    })[];
    stables: ("0x07d83526730c7438048D55A4fc0b850e2aaB6f0b" | "0x19e26b0638bf63aa9fa4d14c6baf8d52ebe86c5c" | "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD")[];
    watchlist: ("0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b" | "0xDaC937d4263E6A667A027FE59B2FFe2F91D54f46" | "0x5B731355AAd31C132dd4754E70E92c590Ae42386" | "0xcbf2e8520B88C4eC30B2B6ddfAa2900087B42D55" | "0x4e35666b3ebf367842b9b6d5b297a2a069f862f5" | "0x6dA6B21DB1Dfd19D67BfF1877f62953a2D365fc9")[];
    internalName: "taiko";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        };
        nftManager: {
            address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF";
        };
        weth9: {
            address: "0xA51894664A773981C6C112C43ce576f315d5b1B6";
        };
        multicall2: {
            address: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9";
        };
        multicall3: {
            address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        };
        metrom: {
            address: "0xD4AC4AaFb81eC774E49AA755A66EfCe4574D6276";
            blockCreated: number;
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 167000;
    name: "Taiko Mainnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.mainnet.taiko.xyz"];
            readonly webSocket: readonly ["wss://ws.mainnet.taiko.xyz"];
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
