export declare const moonbeam: {
    readonly sortIndex: 12;
    readonly blockTimeSeconds: 30;
    readonly logoUrl: "https://assets.oku.trade/moonbeam-logo.svg";
    readonly defaultPool: "0xba66370d96a9d61afa66283900b78c1f6ed02782";
    readonly defaultToken0: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
    readonly defaultToken1: "0xacc15dc74880c9944775448304b263d191c6077f";
    readonly tokenList: readonly [{
        readonly symbol: "WETH";
        readonly address: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
    }, {
        readonly symbol: "USDC";
        readonly address: "0x931715fee2d06333043d11f658c8ce934ac61d0c";
    }];
    readonly stables: readonly ["0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b", "0x931715FEE2d06333043d11F658C8CE934aC61D0c", "0x765277eebeca2e31912c9946eae1021199b39c61", "0x06e605775296e851ff43b4daa541bb0984e9d6fd", "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73", "0x8e70cd5b4ff3f62659049e74b6649c6603a0e594"];
    readonly watchlist: readonly ["0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29", "0xba66370d96a9d61afa66283900b78c1f6ed02782", "0x19156c03a6fd894beb4fa6a828e854d3a4bed372"];
    readonly internalName: "moonbeam";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        readonly nftManager: {
            readonly address: "0x9036d0dcb5a059c9371b05d508f0072df773854e";
        };
        readonly weth9: {
            readonly address: "0xacc15dc74880c9944775448304b263d191c6077f";
        };
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 609002;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Moonscan";
            readonly url: "https://moonscan.io";
        };
    };
    readonly id: 1284;
    readonly name: "Moonbeam";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "GLMR";
        readonly symbol: "GLMR";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://moonbeam.public.blastapi.io"];
            readonly webSocket: readonly ["wss://moonbeam.public.blastapi.io"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet: false;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
