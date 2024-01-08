export declare const bsc: {
    readonly sortIndex: 9;
    readonly blockTimeSeconds: 3;
    readonly logoUrl: "https://assets.oku.trade/bsc-logo.svg";
    readonly defaultPool: "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869";
    readonly defaultToken0: "0x55d398326f99059ff775485246999027b3197955";
    readonly defaultToken1: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
    readonly tokenList: readonly [];
    readonly stables: readonly [];
    readonly watchlist: readonly ["0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869"];
    readonly internalName: "bsc";
    readonly contracts: {
        readonly nftManager: {
            readonly address: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613";
        };
        readonly weth9: {
            readonly address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15921452;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
    };
    readonly id: 56;
    readonly name: "BNB Smart Chain";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/bsc"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
