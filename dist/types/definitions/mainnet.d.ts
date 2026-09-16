export declare const mainnet: Readonly<{
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    sortIndex: 0;
    launchTime: 1688997600;
    transactionType: "eip1559";
    blockTimeSeconds: 12;
    safeReorgDistance: 90000;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/ethereum-logo.webp";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    blockAid: "ethereum";
    morpho: {
        deployBlock: number;
        morpho: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb";
        mmFactory11: "0x1897A8997241C1cD4bD0698647e4EB7213535c24";
        mmFactory10: "0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101";
        publicAllocator: "0xfd32fA2ca22c76dD6E550706Ad913FC6CE91c75D";
    };
    externalId: {
        zerion: string;
        debank: string;
        cowswap: string;
        tenderly: string;
        coingecko: string;
    };
    rpcUrls: {
        default: {
            http: string[];
            webSocket: string[];
        };
    };
    markets: {
        airswap: true;
        kyberswap: string;
        oneinch: {
            spender: string;
        };
        paraswap: {
            routerContract: string;
        };
        propellerswap: string;
        openocean: string;
        zeroex: true;
        cowswap: string;
    };
    marketRouters: {
        binance: "0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5"[];
        bitget: "0xBc1D9760bd6ca468CA9fB5Ff2CFbEAC35d86c973"[];
        enso: "0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"[];
        fabric: "0x4296339B4Ff8E67f07De40D97A49a680F2598e0F"[];
        fynd: ("0xea290cE3Eae57BdB37E57872a5a14DC0d2f6e614" | "0x1644D2477f809cc2C71bCCFd6Dc9497E3F83210d")[];
        icecreamswap: "0xa929c559E5e6537359680F39CB4E3708E1a14dd1"[];
        kyberswap: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"[];
        native: "0x8a2ddc0461Fcf96F81a05529Bed540d4f1eb2a00"[];
        odos: "0x0D05a7D3448512B78fa8A9e46c4872C88C4a0D05"[];
        okx: ("0x40aA958dd87FC8305b97f2BA922CDdCa374bcD7f" | "0x28b1Dc1a5E3699A428BC51d234DFab7C9CB2a183" | "0x8feAB81D36E7576107D5dE0758c1b839Be31B4F6" | "0xa875Fb2204cE71679BE054d97f7fAFFeb6536D67")[];
        openocean: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"[];
        paraswap: "0x6A000F20005980200259B80c5102003040001068"[];
        uniswap: ("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45" | "0x66a9893cC07D91D95644AEDD05D03f95e1dBA8Af" | "0xCb640A86855f1A828c27241bA364348de28abe66")[];
        zeroex: ("0x0000000000001fF3684f28c67538d4D072C22734" | "0x7f54F05635d15Cde17A49502fEdB9D1803A3Be8A")[];
    };
    bridges: {
        cctp: {
            domain: number;
            messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64";
        };
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        rhinofi: string;
        stargate: {
            endpointID: number;
            blockConfirmations: number;
            tokens: ({
                name: string;
                type: string;
                id: number;
                address: string;
            } | {
                name: string;
                id: number;
                address: string;
            })[];
        };
        wanbridge: {
            requiredConfirmations: number;
        };
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
        layerzero: {
            eid: number;
            tokens: {
                id: number;
                symbol: string;
                project: string;
                OFTAddress: string;
            }[];
        };
    };
    oracles: {
        cmc: {
            slug: string;
            native: string;
        };
        coingecko: {
            slug: string;
            native: string;
        };
        dexscreener: string;
    };
    uniswapv4: {
        deployBlock: number;
        poolManager: "0x000000000004444c5dc75cB358380D2e3dE08A90";
        positionManager: "0xbd216513d74c8cf14cf4747e6aaa6420ff64ee9e";
        universalRouter: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        defaultPool: "0xdce6394339af00981949f5f3baf27e3610c76326a700af57e4b3e3ae4977f78d";
        stateView: "0x7ffe42c4a5deea5b0fec41c94c136cf115597227";
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0x1F98431c8aD98523631AE4a59f267346ea31F984";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";
        proxyAdmin: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2";
        tickLens: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573";
        quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
        swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564";
        swapRouter02: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
        NFTDescriptor: "0x42B24A95702b9986e82d421cC3568932790A48Ec";
        nonfungibleTokenPositionDescriptor: "0x91ae842A5Ffd8d12023116943e72A606179294f3";
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785";
        nonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        v3Migrator: "0xA5644E29708357803b5A882D272c41cC0dF92B34";
        uniswapV3Staker: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65";
        positionsNFT: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        topNativePool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
        positionsNFTDeployBlock: number;
        universalRouter: "0xCb640A86855f1A828c27241bA364348de28abe66";
        wrappedNativeAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
        wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        wbtcAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    };
    oku: {
        router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed";
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
            nativeWrappedName: string;
            nativeQuotePools: {
                address: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
                blockCreated: number;
            }[];
            pools: ("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" | "0x11b815efb8f581194ae79006d24e0d814b7697f6" | "0x60594a405d53811d3bc4766596efd80fd545a270" | "0x3416cf6c708da44db2624d63ea0aaef7113527c6" | "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8" | "0x4e68ccd3e89f51c3074ca5072bbac773960dfa36" | "0x69d91b94f0aaf8e8a2586909fa77a5c2c89818d5" | "0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf" | "0xe0554a476a092703abdb3ef35c80e0d76d32939f" | "0x5777d92f208679db4b9778590fa3cab3ac9e2168" | "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8" | "0x99ac8ca7087fa4a2a1fb6357269965a2014abc35" | "0x6c6bc977e13df9b0de53b251522280bb72383700" | "0x9a772018fbd77fcd2d25657e5c547baff3fd7d16" | "0x6f48eca74b38d2936b02ab603ff4e36a6c0e3a77" | "0xe859041c9c6d70177f83de991b9d757e13cea26e" | "0x3328ca5b535d537f88715b305375c591cf52d541" | "0x353bb62ed786cdf7624bd4049859182f3c1e9e5d" | "0x9a834b70c07c81a9fcd6f22e842bf002fbffbe4d" | "0x9db9e0e53058c89e5b94e29621a205198648425b" | "0xb07fe2f407f971125d4eb1977f8acee8846c7324" | "0x84383fb05f610222430f69727aa638f8fdbf5cc1" | "0xb0f4a77bde7fee134265307c5cc19abff0ba409b" | "0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52" | "0x92ab871abb9d567aa276b2ce58d0203d84e0181e" | "0x735a26a57a0a0069dfabd41595a970faf5e1ee8b" | "0x7bea39867e4169dbe237d55c8242a8f2fcdcc387" | "0x5e35c4eba72470ee1177dcb14dddf4d9e6d915f4" | "0x07a6e955ba4345bae83ac2a6faa771fddd8a2011" | "0xfad57d2039c21811c8f2b5d5b65308aa99d31559" | "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78" | "0x8c54aa2a32a779e6f6fbea568ad85a19e0109c26" | "0xe05e653453f733786f2dabae0ffa1e96cfcc4b25" | "0x094a28b22e1b4218d590ea6fa916b3c5e670ba55" | "0xdd005650ac6805457f4fa6ee1816813ce815e914" | "0x015769601d8d4879c0e193eeab31f10cf03c9ea9" | "0xc5af84701f98fa483ece78af83f11b6c38aca71d" | "0x48da0965ab2d2cbf1c17c09cfb5cbe67ad5b1406" | "0x4e0924d3a751be199c426d52fb1f2337fa96f736" | "0x94b4ba66da4faa4fe09e17c0a8810d2afee70163" | "0x92995d179a5528334356cb4dc5c6cbb1c068696c" | "0x18d96b617a3e5c42a2ada4bc5d1b48e223f17d0d" | "0x9febc984504356225405e26833608b17719c82ae" | "0x2cb162433e0cabac4825e6d198a125829156cc92" | "0xc2a856c3aff2110c1171b8f942256d40e980c726" | "0x6279653c28f138c8b31b8a0f6f8cd2c58e8c1705" | "0x97e7d56a0408570ba1a7852de36350f7713906ec" | "0x216fb666dd61600e74f7b2ca25a38aa99db1a4e9" | "0x7270233ccae676e776a659affc35219e6fcfbb10" | "0xff29d3e552155180809ea3a877408a4620058086" | "0xcb0c5d9d92f4f2f80cce7aa271a1e148c226e19d" | "0x486263aa56d1b49d78dea765754164b880c99954" | "0x25c0edc51909fc20429c6ece9b8f4fbb5af13878" | "0x14036bbda496e39dc3db6025fe858431c1ddadb1" | "0x16980c16811bde2b3358c1ce4341541a4c772ec9" | "0xdf50fbde8180c8785842c8e316ebe06f542d3443" | "0x298b7c5e0770d151e4c5cf6cca4dae3a3ffc8e27" | "0x3aaf77ba7da262e34dffb9b10fc6777bfda79ab7" | "0xd6a309f49cf79542cea91df7b334eb4bd29aa0d7" | "0xdb02d6827220475ece91893255fdf57bed51aee3" | "0xa19f4ebe4cbb3c9b57c16eb4dfc7a52d46a5e891" | "0x6c4ab1907805adcb0b7ae911a5d1b0b99d608b3c" | "0x19f83460e387f1b01f94b85c2532ebc15b0b712e" | "0xaae63df9a86f9a682507c922db38fae5e777a606" | "0x7ec0b75a98997c927ace6d87958147a105147ea0" | "0x868b7bbbfe148516e5397f23982923686182c2d2" | "0xd73ea444eef6faf5423b49be3448e94ed214f1ec" | "0xbb2e5c2ff298fd96e166f90c8abacaf714df14f8" | "0x1a349a3397a8431eed8d94a05f88f9001117fcaa" | "0x85b5a7dc1630f9465d8409e2ac53313b70a71b9c" | "0x3067c3054b4a605f9e327bad82d9ba6049fe76a0" | "0x00cef0386ed94d738c8f8a74e8bfd0376926d24c" | "0x75bff91af9878f5ec3fede9b52d51159afc2430a" | "0xa5ef2a6bbe8852bd6fd2ef6ab9bb45081a6f531c" | "0xb06e7ed37cfa8f0f2888355dd1913e45412798c5" | "0xfe0df74636bc25c7f2400f22fe7dae32d39443d2" | "0x07f3d316630719f4fc69c152f397c150f0831071" | "0x38b6e47a97f4680a983eadc8e510c37d73967c29" | "0xd3ca35355106cb8bc5fd7c534275509673319d83" | "0x020c349a0541d76c16f501abc6b2e9c98adae892" | "0x9275e26bfb23b18bebb07bff45e85110f60963e9" | "0xd5ad5ec825cac700d7deafe3102dc2b6da6d195d" | "0x537a0a5654045c52ec45c4c86ed0c1ffe893809d" | "0xc4d9c69962ddb2388e1532279704fc6eb199c963" | "0x813b22032e94667cc0f854cc7241fc5a309c45bc" | "0xe081eeab0adde30588ba8d5b3f6ae5284790f54a" | "0x5c28b5f471d97f53fcf132f16f9f3c0c888c1a01" | "0x9445bd19767f73dcae6f2de90e6cd31192f62589" | "0xa80964c5bbd1a0e95777094420555fead1a26c1e" | "0xb8c05b7ca698f7cfd9b8a08f177e0ac5f2696bf9" | "0xd0af1981f52146a6939385451daea0726e13a484" | "0xa109209a2380fd4454b0364c4689f6de18ad18cc" | "0x5f3c621d810c7c929fb440e03dadf8621fe61ab5" | "0x141df9a608856d1651c9a3c27b39960ff0418a12" | "0x08f68110f1e0ca67c80a24b4bd206675610f445d" | "0x39529e96c28807655b5856b3d342c6225111770e" | "0x391e8501b626c623d39474afca6f9e46c2686649" | "0xbe3cd9b751360a8030770425acf947c8cb4cab38" | "0xbd5fdda17bc27bb90e37df7a838b1bfc0dc997f5" | "0x3470447f3cecffac709d3e783a307790b0208d60")[];
        };
    };
    defaultPool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
    defaultToken0: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    defaultToken1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    tokenList: ({
        symbol: string;
        address: "0x6b175474e89094c44da98b954eedeac495271d0f";
    } | {
        symbol: string;
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
    } | {
        symbol: string;
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7";
    } | {
        symbol: string;
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    } | {
        symbol: string;
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    })[];
    stables: ("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" | "0x6B175474E89094C44Da98b954EedeAC495271d0F" | "0xdAC17F958D2ee523a2206206994597C13D831ec7" | "0x0000000000085d4780B73119b644AE5ecd22b376" | "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51" | "0x956f47f50a910163d8bf957cf5846d573e7f87ca" | "0x4Fabb145d64652a948d72533023f6E7A623C7C53" | "0x853d955acef822db058eb8505911ed77f175b99e" | "0x8E870D67F660D95d5be530380D0eC0bd388289E1" | "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0" | "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3" | "0x1a13f4ca1d028320a707d99520abfefca3998b7f")[];
    watchlist: ("0x3416cf6c708da44db2624d63ea0aaef7113527c6" | "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8" | "0x4e68ccd3e89f51c3074ca5072bbac773960dfa36" | "0x5777d92f208679db4b9778590fa3cab3ac9e2168" | "0x99ac8ca7087fa4a2a1fb6357269965a2014abc35" | "0xcbcdf9626bc03e24f779434178a73a0b4bad62ed" | "0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8" | "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801" | "0x290a6a7460b308ee3f19023d2d00de604bcf5b42" | "0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf")[];
    v4Watchlist: ("0xdce6394339af00981949f5f3baf27e3610c76326a700af57e4b3e3ae4977f78d" | "0x2f92b371aef58f0abe9c10c06423de083405991f2839638914a1031e91d9a723" | "0x72331fcb696b0151904c03584b66dc8365bc63f8a144d89a773384e3a579ca73" | "0xb98437c7ba28c6590dd4e1cc46aa89eed181f97108e5b6221730d41347bc817f" | "0x8aa4e11cbdf30eedc92100f4c8a31ff748e201d44712cc8c90d189edaa8e4e47")[];
    internalName: "ethereum";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        weth9: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
        };
        multicall2: {
            address: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        ensUniversalResolver: {
            readonly address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee";
            readonly blockCreated: 23085558;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
            readonly apiUrl: "https://api.etherscan.io/api";
        };
    };
    blockTime: 12000;
    ensTlds?: readonly string[] | undefined;
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    sourceId?: number | undefined | undefined | undefined;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
    testnet?: boolean | undefined | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined | undefined;
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined | undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined | undefined;
} & {
    caip2Namespace: string;
}>;
