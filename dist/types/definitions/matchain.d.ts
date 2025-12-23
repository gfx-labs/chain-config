export declare const matchain: Readonly<{
    name: "Matchain";
    blockTimeSeconds: 0.5;
    launchTime: 1754106070;
    transactionType: "eip1559";
    sortIndex: 15;
    blockAid: "";
    logoUrl: "https://cms.oku.trade/cdn/public/chains/matchain-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    externalId: {};
    markets: {};
    bridges: {};
    oracles: {};
    morpho: {};
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
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006";
        usdcAddress: "0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7";
    };
    oku: {
        limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x166D111Ce22f6cb0F315CA1d706B61adcF0ea265";
    defaultToken0: "0x4200000000000000000000000000000000000006";
    defaultToken1: "0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7";
    tokenList: ({
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7";
    })[];
    stables: ("0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7" | "0xa0e73e30945b80010503e68e53abfd0b6b6a6ed9")[];
    watchlist: ("0x166D111Ce22f6cb0F315CA1d706B61adcF0ea265" | "0xa784d5e50407298316219cab4ff4271d15596f8e" | "0x5aedf884d4c8a469128fca1c2f8cd7fef127d732" | "0xacb767305247c1a44ee24c97dd32c052cbda1f38" | "0x6b213c3915308a453dc4da93f8c664717c6fc41e" | "0x2128e934843ad52d42b5af7288dcfa7b0598d035")[];
    internalName: "matchain";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/bnb.png";
    contracts: {
        limitOrder: {
            address: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        erc6492Verifier?: import("viem").ChainContract | undefined;
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Matchain Scan";
            readonly url: "https://matchscan.io";
        };
    };
    blockTime?: number | undefined | undefined | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 698;
    nativeCurrency: {
        readonly name: "BNB";
        readonly symbol: "BNB";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.matchain.io"];
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
