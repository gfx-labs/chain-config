export declare const manta: Readonly<{
    name: "Manta Pacific";
    launchTime: 1709910000;
    transactionType: "eip1559";
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    blockTimeSeconds: 2;
    sortIndex: 39;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/manta-pacific-logo.svg";
    deprecated: true;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        coingecko: string;
    };
    morpho: {};
    markets: {
        openocean: string;
    };
    bridges: {
        rhinofi: string;
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
    uniswap: {
        deployBlock: number;
        poolFactory: "0x06D830e15081f65923674268121FF57Cc54e4e23";
        permit2: "0x83986Ff655A54ee061F6B7F476B92f4Fed111B93";
        multicall2: "0x52dFC0D9960F11A9Ca9FF616e791B91188446a60";
        tickLens: "0xC94Fb2D13587b0b5af78094933490B35E004eAbE";
        nonfungiblePositionManager: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD";
        positionsNFT: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD";
        positionsNFTDeployBlock: number;
        universalRouter: "0x42Bff1f6b647462fcD8c28a488Be9C9988830ef6";
        wrappedNativeAddress: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb";
        wethAddress: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746";
        wbtcAddress: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6";
    };
    oku: {
        limitOrderRegistry: "0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xc108d8702d42bae7b3d7d8209a9b40613a7b1d37";
    defaultToken0: "0x0dc808adce2099a9f62aa87d9670745aba741746";
    defaultToken1: "0xb73603c5d87fa094b7314c74ace2e64d165016fb";
    tokenList: ({
        symbol: string;
        address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746";
    } | {
        symbol: string;
        address: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb";
    } | {
        symbol: string;
        address: "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5";
    } | {
        symbol: string;
        address: "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f";
    } | {
        symbol: string;
        address: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6";
    })[];
    stables: ("0xb73603C5d87fA094B7314C74ACE2e64D165016fb" | "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f")[];
    watchlist: ("0xc108d8702d42bae7b3d7d8209a9b40613a7b1d37" | "0x7881dc8e59e644517a95a9687a6b58b86d98db78" | "0x060f2babc09826687be9cbf5c7ede3b3cd00dd78" | "0xbfca3e002acbcea2f9d48a87cf545cb4344f9a3e" | "0x9a70668cf02902b53c24f7d21762d19dfb9b69a6" | "0xa6f04e80aee9e491539cdf0cec8c2099df46816f" | "0x1cfd505f8a79be3a4fd9305239991f480e5fdc7b" | "0x775eac394b56cfad02d963c9c3c9cd2e425dab4e" | "0x6e32805add5f5255c22d8f0125a0c7d351926bc3" | "0x5bedc5d1e1d0b32caca78db23af71126b6fe26b6")[];
    internalName: "manta";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C";
        };
        nftManager: {
            address: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD";
        };
        weth9: {
            address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746";
        };
        multicall2: {
            address: "0x52dFC0D9960F11A9Ca9FF616e791B91188446a60";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Manta Explorer";
            readonly url: "https://pacific-explorer.manta.network";
            readonly apiUrl: "https://pacific-explorer.manta.network/api";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 169;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "ETH";
        readonly symbol: "ETH";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://pacific-rpc.manta.network/http"];
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
    network: "manta";
}>;
