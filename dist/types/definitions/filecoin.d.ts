export declare const filecoin: {
    readonly sortIndex: 10;
    readonly name: "Filecoin";
    readonly blockTimeSeconds: 30;
    readonly blockExplorers: {
        readonly default: {
            readonly name: "FVM Explorer";
            readonly url: "https://fvm.starboard.ventures/explorer";
        };
    };
    readonly logoUrl: "https://assets.oku.trade/filecoin-logo.svg";
    readonly defaultPool: "0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05";
    readonly defaultToken0: "0xb829b68f57cc546da7e5806a929e53be32a4625d";
    readonly defaultToken1: "0xeb466342c4d449bc9f53a865d5cb90586f405215";
    readonly tokenList: readonly [{
        readonly symbol: "WFIL";
        readonly address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
    }, {
        readonly symbol: "axlWETH";
        readonly address: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D";
    }, {
        readonly symbol: "axlWBTC";
        readonly address: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad";
    }, {
        readonly symbol: "axlUSDC";
        readonly address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215";
    }, {
        readonly symbol: "axlUSDT";
        readonly address: "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6";
    }];
    readonly stables: readonly ["0xEB466342C4d449BC9f53A865D5Cb90586f405215", "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6", "0x2421db204968A367CC2C866CD057fA754Cb84EdF", "0x422849b355039bc58f2780cc4854919fc9cfaf94"];
    readonly watchlist: readonly ["0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05", "0x9d8ea62e1264ab667d234b5610774a08e608e3b8"];
    readonly internalName: "filecoin";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0xded8791056aa39581460a005a3c400a281e24bd7";
        };
        readonly nftManager: {
            readonly address: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee";
        };
        readonly weth9: {
            readonly address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
        };
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 3328594;
        };
    };
    readonly id: 314;
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "filecoin";
        readonly symbol: "FIL";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.node.glif.io/rpc/v1"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
