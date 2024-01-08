export declare const boba: {
    readonly sortIndex: 11;
    readonly blockTimeSeconds: 300;
    readonly logoUrl: "https://assets.oku.trade/boba-logo.svg";
    readonly defaultPool: "0xdF37543dae7986E48E3ce83F390A828A9F3D23BA";
    readonly defaultToken0: "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc";
    readonly defaultToken1: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7";
    readonly tokenList: readonly [{
        readonly symbol: "USDC";
        readonly address: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc";
    }, {
        readonly symbol: "BOBA";
        readonly address: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7";
    }, {
        readonly symbol: "WETH";
        readonly address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
    }, {
        readonly symbol: "WBTC";
        readonly address: "0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b";
    }, {
        readonly symbol: "USDT";
        readonly address: "0x5de1677344d3cb0d7d465c10b72a8f60699c062d";
    }];
    readonly stables: readonly ["0x66a2a913e447d6b4bf33efbec43aaef87890fbbc", "0x5de1677344d3cb0d7d465c10b72a8f60699c062d", "0xf74195bb8a5cf652411867c5c2c5b8c2a402be35"];
    readonly watchlist: readonly ["0xdF37543dae7986E48E3ce83F390A828A9F3D23BA", "0x162b1fda171463974e5262bac5824da233f11e00", "0xfe1a0c58e38fa71618545df15e5479559ce51108", "0xb1ed67e29b2497404a2ac7f2a2989c3328ec2999", "0x66faef55892dae3932a043d3238ecaa271d36e0d"];
    readonly internalName: "boba";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        };
        readonly nftManager: {
            readonly address: "0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71";
        };
        readonly weth9: {
            readonly address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 446859;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "BOBAScan";
            readonly url: "https://bobascan.com";
        };
    };
    readonly id: 288;
    readonly name: "Boba Network";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Boba";
        readonly symbol: "BOBA";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.boba.network"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
