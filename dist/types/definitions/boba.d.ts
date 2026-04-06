export declare const boba: Readonly<{
    name: "Boba";
    launchTime: 1690297200;
    transactionType: "eip1559";
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    sortIndex: 14;
    blockTimeSeconds: 2;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/boba-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        debank: string;
        tenderly: string;
        coingecko: string;
    };
    morpho: {};
    markets: {
        icecreamswap: true;
    };
    bridges: {};
    oracles: {
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
    nativeCurrency: {
        decimals: number;
        name: string;
        symbol: string;
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0xFFCd7Aed9C627E82A765c3247d562239507f6f1B";
        permit2: "0xF80c91442D3EF66632958C0d395667075FC82fB0";
        multicall2: "0x07956092c0F4818D6792a42035d2d2fa0C75E76B";
        proxyAdmin: "0xE8B5DaE430189ea6ccffF4eEeC58a98556525fB4";
        tickLens: "0x36EBd44350E4406E67C5579026950793b8528402";
        quoter: "0x483fc90DDC7aC847D4a752055DCF73483B6d97FD";
        swapRouter02: "0x759E8B0cb9d65291e258aE3e043258ae1dD0df16";
        NFTDescriptor: "0x531c3B226288854e992150FEfF4d95F7B8DEbD8c";
        nonfungibleTokenPositionDescriptor: "0xb6751A274EDAe02A911E3bB23682FAaF380433b7";
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785";
        nonfungiblePositionManager: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71";
        v3Migrator: "0x9ab1E646877732DD76bd662DC242723D7e4B42ba";
        uniswapV3Staker: "0x6a6c1198f85B084822138DFd3fA9686e4029c091";
        positionsNFT: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71";
        positionsNFTDeployBlock: number;
        universalRouter: "0x4BA622997559F9b5Ac68751D7Fc3dEecc23a0e88";
        wrappedNativeAddress: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        usdcAddress: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc";
    };
    oku: {
        limitOrderRegistry: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xdF37543dae7986E48E3ce83F390A828A9F3D23BA";
    defaultToken0: "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc";
    defaultToken1: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7";
    tokenList: ({
        symbol: string;
        address: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc";
    } | {
        symbol: string;
        address: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7";
    } | {
        symbol: string;
        address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
    } | {
        symbol: string;
        address: "0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b";
    } | {
        symbol: string;
        address: "0x5de1677344d3cb0d7d465c10b72a8f60699c062d";
    })[];
    stables: ("0x66a2a913e447d6b4bf33efbec43aaef87890fbbc" | "0x5de1677344d3cb0d7d465c10b72a8f60699c062d" | "0xf74195bb8a5cf652411867c5c2c5b8c2a402be35")[];
    watchlist: ("0xdF37543dae7986E48E3ce83F390A828A9F3D23BA" | "0x162b1fda171463974e5262bac5824da233f11e00" | "0xfe1a0c58e38fa71618545df15e5479559ce51108" | "0xb1ed67e29b2497404a2ac7f2a2989c3328ec2999" | "0x66faef55892dae3932a043d3238ecaa271d36e0d" | "0x67fac3b54b6391e3183d2d74b7d2c430ad44fca1")[];
    internalName: "boba";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        };
        nftManager: {
            address: "0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71";
        };
        weth9: {
            address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        };
        multicall2: {
            address: "0x07956092c0F4818D6792a42035d2d2fa0C75E76B";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 288;
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.boba.network"];
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
} & {
    caip2Namespace: string;
}>;
