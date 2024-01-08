export declare const polygonZkEvm: {
    readonly sortIndex: 6;
    readonly blockTimeSeconds: 7;
    readonly logoUrl: "https://assets.oku.trade/zkevm-logo.svg";
    readonly defaultPool: "0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd";
    readonly defaultToken0: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    readonly defaultToken1: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    readonly tokenList: readonly [{
        readonly symbol: "WETH";
        readonly address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    }, {
        readonly symbol: "USDC";
        readonly address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    }, {
        readonly symbol: "USDT";
        readonly address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d";
    }, {
        readonly symbol: "DAI";
        readonly address: "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4";
    }];
    readonly stables: readonly ["0x1e4a5963abfd975d8c9021ce480b42188849d41d", "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035", "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4"];
    readonly watchlist: readonly ["0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd"];
    readonly internalName: "polygon-zkevm";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723";
        };
        readonly nftManager: {
            readonly address: "0xf0d61aeda516cca1ff20be65cfb0213be688a24f";
        };
        readonly weth9: {
            readonly address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 57746;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://zkevm.polygonscan.com";
        };
    };
    readonly id: 1101;
    readonly name: "Polygon zkEVM";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zkevm-rpc.com"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
