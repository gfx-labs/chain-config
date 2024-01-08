export declare const rootstock: {
    readonly sortIndex: 7;
    readonly name: "Rootstock";
    readonly blockTimeSeconds: 33;
    readonly logoUrl: "https://assets.oku.trade/rootstock-logo.svg";
    readonly defaultPool: "0xd2ffe51ab4e622a411abbe634832a19d919e9c55";
    readonly defaultToken0: "0x542fda317318ebf1d3deaf76e0b632741a7e677d";
    readonly defaultToken1: "0xef213441a85df4d7acbdae0cf78004e1e486bb96";
    readonly tokenList: readonly [{
        readonly symbol: "WRBTC";
        readonly address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
    }, {
        readonly symbol: "RIF";
        readonly address: "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5";
    }, {
        readonly symbol: "RUSDT";
        readonly address: "0xef213441a85df4d7acbdae0cf78004e1e486bb96";
    }];
    readonly stables: readonly ["0xef213441a85df4d7acbdae0cf78004e1e486bb96", "0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37"];
    readonly watchlist: readonly ["0xd2ffe51ab4e622a411abbe634832a19d919e9c55", "0x022650756421f2e636d4138054331cbfafb55d9e", "0x549a5d92412161a1a2828549a657a49dd9fa046c", "0xcba7abe98fd6a65259837d76a3409841c1dd4288", "0xbe092d38045ef7f9cdc5014278a4239e896bf5ca"];
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Blockscout";
            readonly url: "https://rootstock.blockscout.com";
        };
        readonly blockscout: {
            readonly name: "Blockscout";
            readonly url: "https://rootstock.blockscout.com";
        };
    };
    readonly internalName: "rootstock";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        };
        readonly nftManager: {
            readonly address: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1";
        };
        readonly weth9: {
            readonly address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
        };
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 4249540;
        };
    };
    readonly id: 30;
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Rootstock Bitcoin";
        readonly symbol: "RBTC";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://public-node.rsk.co"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
    readonly network: "rootstock";
};
