export declare const scroll: {
    readonly sortIndex: 5;
    readonly blockTimeSeconds: 3;
    readonly logoUrl: "https://assets.oku.trade/scroll-logo.png";
    readonly defaultPool: "0x813df550a32d4a9d42010d057386429ad2328ed9";
    readonly defaultToken0: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    readonly defaultToken1: "0x5300000000000000000000000000000000000004";
    readonly tokenList: readonly [{
        readonly symbol: "USDC";
        readonly address: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    }, {
        readonly symbol: "WETH";
        readonly address: "0x5300000000000000000000000000000000000004";
    }, {
        readonly symbol: "USDT";
        readonly address: "0xf55bec9cafdbe8730f096aa55dad6d22d44099df";
    }, {
        readonly symbol: "WBTC";
        readonly address: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1";
    }, {
        readonly symbol: "DAI";
        readonly address: "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97";
    }];
    readonly stables: readonly ["0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4", "0xf55bec9cafdbe8730f096aa55dad6d22d44099df", "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97"];
    readonly watchlist: readonly ["0xf1783f3377b3a70465c193ef33942c0803121ba0", "0x813df550a32d4a9d42010d057386429ad2328ed9"];
    readonly internalName: "scroll";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        };
        readonly nftManager: {
            readonly address: "0xB39002E4033b162fAc607fc3471E205FA2aE5967";
        };
        readonly weth9: {
            readonly address: "0x5300000000000000000000000000000000000004";
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Scrollscan";
            readonly url: "https://scrollscan.com";
        };
    };
    readonly id: 534352;
    readonly name: "Scroll";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.scroll.io"];
            readonly webSocket: readonly ["wss://wss-rpc.scroll.io/ws"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet: false;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
