export declare const arbitrum: {
    readonly sortIndex: 1;
    readonly blockTimeSeconds: 0.25;
    readonly logoUrl: "https://assets.oku.trade/arbitrum-logo.svg";
    readonly defaultPool: "0xcda53b1f66614552f834ceef361a8d12a0b8dad8";
    readonly defaultToken0: "0x912ce59144191c1204e64559fe8253a0e49e6548";
    readonly defaultToken1: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
    readonly tokenList: readonly [{
        readonly symbol: "USDT";
        readonly address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";
    }, {
        readonly symbol: "USDC.e";
        readonly address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
    }, {
        readonly symbol: "USDC";
        readonly address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831";
    }, {
        readonly symbol: "DAI";
        readonly address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1";
    }, {
        readonly symbol: "WETH";
        readonly address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
    }, {
        readonly symbol: "ARB";
        readonly address: "0x912ce59144191c1204e64559fe8253a0e49e6548";
    }];
    readonly stables: readonly ["0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"];
    readonly watchlist: readonly ["0x17c14d2c404d167802b16c450d3c99f88f2c4f4d", "0xc82819f72a9e77e2c0c3a69b3196478f44303cf4", "0x81c48d31365e6b526f6bbadc5c9aafd822134863", "0xa62ad78825e3a55a77823f00fe0050f567c1e4ee", "0x135e49cc315fed87f989e072ee11132686cf84f3", "0xa961f0473da4864c5ed28e00fcc53a3aab056c1b", "0x149e36e72726e0bcea5c59d40df2c43f60f5a22d", "0x8e295789c9465487074a65b1ae9ce0351172393f", "0x97bca422ec0ee4851f2110ea743c1cd0a14835a1", "0x92c63d0e701caae670c9415d91c474f686298f00", "0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71", "0xf0428617433652c9dc6d1093a42adfbf30d29f74", "0x1aeedd3727a6431b8f070c0afaa81cc74f273882", "0x446bf9748b4ea044dd759d9b9311c70491df8f29", "0x42d7c8302a746f98ec74f0dbc95fc39b46c1abb6", "0xc91b7b39bbb2c733f0e7459348fd0c80259c8471", "0xC31E54C7A869B9FCBECC14363CF510D1C41FA443", "0x641C00A822e8b671738d32a431a4Fb6074E5c79d", "0xCDA53B1F66614552F834CEEF361A8D12A0B8DAD8", "0xC6F780497A95E246EB9449F5E4770916DCD6396A", "0x2f5e87C9312fa29aed5c179E456625D79015299c", "0x13398E27A21BE1218B6900CBEDF677571DF42A48", "0x31FA55E03BAD93C7F8AFFDD2EC616EBFDE246001", "0x468B88941E7CC0B88C1869D68AB6B570BCEF62FF", "0xd37Af656Abf91c7f548FfFC0133175b5e4d3d5e6", "0xc6962004f452be9203591991d15f6b388e09e8d0", "0xdbaeb7f0dfe3a0aafd798ccecb5b22e708f7852c", "0xbe3ad6a5669dc0b8b12febc03608860c31e2eef6", "0x80a9ae39310abf666a87c743d6ebbd0e8c42158e", "0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61", "0x1862200e8e7ce1c0827b792d0f9546156f44f892", "0x1edd8c76f74d816f7472be69b174fe7b3084221e", "0x4d834a9b910e6392460ebcfb59f8eef27d5c19ff", "0x0632742c132413cd47438691d8064ff9214ac216", "0xa8328bf492ba1b77ad6381b3f7567d942b000baf", "0x50450351517117cb58189edba6bbad6284d45902"];
    readonly internalName: "arbitrum";
    readonly contracts: {
        readonly nftManager: {
            readonly address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        readonly limitOrder: {
            readonly address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        readonly weth9: {
            readonly address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7654707;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
        };
    };
    readonly id: 42161;
    readonly name: "Arbitrum One";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
