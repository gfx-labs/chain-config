'use strict';

var chains = require('viem/chains');
var viem = require('viem');

const makeConfig = (x) => {
    return x;
};

const arbitrum = makeConfig({
    ...chains.arbitrum,
    name: "Arbitrum",
    launchTime: 1688997600,
    sortIndex: 1,
    blockTimeSeconds: 0.25,
    logoUrl: "https://assets.oku.trade/chains/arbitrum-logo.svg",
    safeReorgDistance: 90000 * 2,
    morpho: {},
    externalId: {
        zerion: "arbitrum",
        debank: "arb",
        cowswap: "arbitrum_one",
        tenderly: "true"
    },
    markets: {
        kyberswap: "arbitrum",
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        propellerswap: "arbitrum",
        openocean: "arbitrum",
        zeroex: true,
        cowswap: "arbitrum_one",
        icecreamswap: true
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-arbitrum-1",
            routerAddress: "0x141fa059441E0ca23ce184B6A78bafD2A517DdE8",
            chainSelector: 4949039107694359620n,
            tokenAdminRegistry: "0x39AE1032cF4B334a1Ed41cdD0833bdD7c7E7751E"
        },
        rhinofi: "ARBITRUM",
        stargate: {
            endpointID: 30110,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    id: 13,
                    address: "0xA45B5130f36CDcA45667738e2a258AB09f4A5f7F",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0xe8CDF27AcD73a434D661C84887215F7598e7d0d3",
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0",
                },
            ],
        },
        wanbridge: {
            requiredConfirmations: 1,
        },
        wormhole: {
            chain: "Arbitrum",
            timeToFinalize: 1066,
        },
    },
    oracles: {
        cmc: {
            slug: "arbitrum",
            native: "ethereum",
        },
        coingecko: {
            slug: "arbitrum-one",
            native: "ethereum",
        },
        dexscreener: "arbitrum",
    },
    uniswap: {
        deployBlock: 165,
        poolFactory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        multicall2: "0x842eC2c7D803033Edf55E478F461FC547Bc54EB2",
        proxyAdmin: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
        tickLens: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
        swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        swapRouter02: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        NFTDescriptor: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
        nonfungibleTokenPositionDescriptor: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        v3Migrator: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
        uniswapV3Staker: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
        positionsNFT: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        topNativePool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
        positionsNFTDeployBlock: 173,
        universalRouter: "0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5",
        wrappedNativeAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        wbtcAddress: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
        usdcAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        limitOrderRegistryDeployBlock: 98754575,
        pricing: {
            nativeWrappedToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            nativeWrappedName: "WETH",
            nativeQuotePools: [
                {
                    blockCreated: 100909,
                    address: "0xc31e54c7a869b9fcbecc14363cf510d1c41fa443",
                },
            ],
            pools: [
                "0xc31e54c7a869b9fcbecc14363cf510d1c41fa443",
                "0x641c00a822e8b671738d32a431a4fb6074e5c79d",
                "0xcda53b1f66614552f834ceef361a8d12a0b8dad8",
                "0x13398e27a21be1218b6900cbedf677571df42a48",
                "0x17c14d2c404d167802b16c450d3c99f88f2c4f4d",
                "0x31fa55e03bad93c7f8affdd2ec616ebfde246001",
                "0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71",
                "0x81c48d31365e6b526f6bbadc5c9aafd822134863",
                "0xd37af656abf91c7f548fffc0133175b5e4d3d5e6",
                "0x50450351517117cb58189edba6bbad6284d45902",
                "0xbed2589fefae17d62a8a4fdac92fa5895cae90d2",
                "0xe754841b77c874135caca3386676e886459c2d61",
                "0xa961f0473da4864c5ed28e00fcc53a3aab056c1b",
                "0xc82819f72a9e77e2c0c3a69b3196478f44303cf4",
                "0x97bca422ec0ee4851f2110ea743c1cd0a14835a1",
                "0x6387b0d5853184645cc9a77d6db133355d2eb4e4",
                "0xf0428617433652c9dc6d1093a42adfbf30d29f74",
                "0x7bb5e71fab18feba077b28355f20f5643ceece28",
                "0xac70bd92f89e6739b3a08db9b6081a923912f73d",
                "0xa62ad78825e3a55a77823f00fe0050f567c1e4ee",
                "0xeaab66d034e9a5033888402b742c9ddfbf901676",
                "0x2039f8c9cd32ba9cd2ea7e575d5b1abea93f7527",
                "0x42161084d0672e1d3f26a9b53e653be2084ff19c",
                "0xa74eceae9c7670b019e0890881598b4c398d1c01",
                "0xa8328bf492ba1b77ad6381b3f7567d942b000baf",
                "0xea3d27d0b8d525f28365957f50b8ba8da9a618b5",
                "0xdd092f5dce127961af6ebe975978c084c935bcc8",
                "0x88b553f99bf8cc6c18435c0c19d4d9b433d83645",
                "0x7f580f8a02b759c350e6b8340e7c2d4b8162b6a9",
                "0x02c79a7e3d8a9cb773cd5f69be00a64f48308508",
                "0x458bcc519fa8c223e0c1aeb458bb85710f594329",
                "0xb791ad21ba45c76629003b4a2f04c0d544406e37",
                "0x267fcf6cb04eda3c997b7e49d8b7b95382b0ee7b",
                "0x37516211fe11d49b84cb959631526e1f4e3fb86f",
                "0x39007024e17fd49f11382b597867fda2f4a3ef15",
                "0x53c6ca2597711ca7a73b6921faf4031eedf71339",
                "0x7f9a20548d9482041dc33435a7fb25be7c4b98b9",
                "0xcc33cad0bd4c957fa6c28fdcd72040d626854a4f",
                "0x7e5e4a3f855f19cc1a45b9eff1c8b2419036ce85",
                "0x2dfbbc8c9405c70ca0f81944332841663d2333b1",
                "0x2ce827d2b5d248f6b29cfade1542421176eb1171",
                "0xf8e5a77a4f187cfb455663b37619257565439f6a",
                "0x626b9d80ebc0ded0e92ba4061fe70d3154ba6d2e",
                "0xcc9397675bd4d373996175fcc03bff775c1440e7",
                "0xe4d9faddd9bca5d8393bee915dc56e916ab94d27",
                "0xc26064c6768215cd1c54b17a5525387a36176173",
                "0xfea0e46a50156675432f9bc35d0d173ed30674ae",
                "0xc021d8012985c2781ca25c84103a8681d4e16acb",
                "0x3ab43147e282667ede827579bb7d5e8d1e814742",
                "0xf96146159d191410f1ca3890af71005c468aaff6",
                "0xd3eb92fb329c043b24aa24253b98ce14816fa05f",
                "0xea263b98314369f2245c7b7e6a9f72e25cb8cded",
                "0x903c3d8adf51e169599bb5adb0d20bb4c48cb44c",
                "0x76d56579aa6356d860dcf7f8028d9ffd2e3c90f3",
                "0x8278591bbbbe7d86e783507e7f6320ffc9c021e5",
                "0x4d2fe06fd1c4368042b926d082484d2e3cc8f3f5",
                "0x3cc98f9e2a1f92bd290bea5637a29d9647bd8698",
                "0x58039203442c9f2a45d5536bd021a383c7f3035c",
                "0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61",
                "0x32b89d2442b4140c052bdba2ac6b03bad7243286",
                "0x99c2ce89030d53556c8ee4b57a8c51fb93760237",
                "0xc09254d1be9c3b7335021873546ba480383981d9",
                "0xb6cca513eb79833c09c0a4c50ed2c897c5574cb3",
                "0x2e630136c42bc72f1285743347ba77a75077aff4",
                "0x90605ac59f1f19a7fe71f777ddbda83a3f25778e",
                "0x54b7fe035ac57892d68cba53dbb5156ce79058d6",
                "0x5b309eee32fada35e8fe5948a5d95dd86da0f855",
                "0xf95de9ce6a3499c23b09265a9abcd862451453ba",
                "0x1442097733acf0a2b5c4ab422f1c0186e95d52ba",
                "0x9a4898365d9d07d5a20724361ecd6bf26d200873",
                "0xfdad2678d73d71c9804930b338daaf192d6daa9e",
                "0x46c47c8daabca3e15bf238cda365894046bafa23",
                "0xc051405edef0e64ebfc501cfe1158eb0d74f3208",
                "0x20990c6edd90339c1f1c25bc9c8ed7837ff4ec46",
                "0x1557fdfda61f135baf1a1682eebaa086a0fcab6e",
                "0x80151aae63b24a7e1837fe578fb6be026ae8abba",
                "0x4e0a15e2cdc8fde28ee4250c3deec0996190703f",
                "0x74c1f85e5429ea828bedb2bb90ddbe2cb1c0fb31",
                "0xdbbc93072295362d38b63accd447d9c0b36a1678",
                "0xb8271188967be1d66baa122b6b1d6205d5d0096f",
                "0x260d6d6c3ea3daf5d53442fc375054a3b023d38b",
                "0x9a4d078024ca4d757209e4f4459fe501558960fc",
                "0x32a5746ba6826828716cc1a394bc33301ebc7656",
                "0x90d2fb08af9e9323d7cbd364181bda1e7d3c2c2f",
                "0x76cb8fee30422d9ccc72ba98acf5ea078ef65ecd",
                "0x04a8cddbb62e3499c8e84ccf77192ed6292bf29d",
                "0x8d76e9c2bd1adde00a3dcdc315fcb2774cb3d1d6",
                "0x4a15e653799b02927cad5893fa03c257ca3be43c",
                "0xa3c015bfc999779d55bb849f85cdff53b4b82b7d",
                "0x852bec42f6078d4b1af4703d2863e839ea5452c3",
                "0x29e02c9fc7f3b23c2bd1b00357e267728e30705e",
                "0x87adc4a56252206008134ca6e807f474290c867d",
                "0xfb24cc51c53909d093feac9f460513a1751961c2",
                "0x43c24bd16bce6f7b49316067cf48d2c55898c6bf",
                "0x3574f407410d472564a135edae1bed00e77cdd13",
                "0x4b3d3333125593816dbfc9cc2ff047bddd0e859f",
                "0xd4ea7475ced55eae6f581f112b0603f066c72c49",
                "0x3f4b104801f8b979b5448c05eaa39e0b1910da4c",
                "0xcb7a3a9e1a057744a60d8103ee66dd28a71c4d75",
                "0xff961c81c4aab577c313309ac790dc6f5a936e5a",
            ],
        },
    },
    defaultPool: "0xcda53b1f66614552f834ceef361a8d12a0b8dad8",
    defaultToken0: "0x912ce59144191c1204e64559fe8253a0e49e6548",
    defaultToken1: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    tokenList: [
        { symbol: "USDT", address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9" },
        { symbol: "USDC.e", address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8" },
        { symbol: "USDC", address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831" },
        { symbol: "DAI", address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1" },
        { symbol: "WETH", address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1" },
        { symbol: "ARB", address: "0x912ce59144191c1204e64559fe8253a0e49e6548" },
    ],
    stables: [
        "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
        "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    ],
    watchlist: [
        "0x17c14d2c404d167802b16c450d3c99f88f2c4f4d",
        "0xc82819f72a9e77e2c0c3a69b3196478f44303cf4",
        "0x81c48d31365e6b526f6bbadc5c9aafd822134863",
        "0xa62ad78825e3a55a77823f00fe0050f567c1e4ee",
        "0x135e49cc315fed87f989e072ee11132686cf84f3",
        "0xa961f0473da4864c5ed28e00fcc53a3aab056c1b",
        "0x149e36e72726e0bcea5c59d40df2c43f60f5a22d",
        "0x8e295789c9465487074a65b1ae9ce0351172393f",
        "0x97bca422ec0ee4851f2110ea743c1cd0a14835a1",
        "0x92c63d0e701caae670c9415d91c474f686298f00",
        "0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71",
        "0xf0428617433652c9dc6d1093a42adfbf30d29f74",
        "0x1aeedd3727a6431b8f070c0afaa81cc74f273882",
        "0x446bf9748b4ea044dd759d9b9311c70491df8f29",
        "0x42d7c8302a746f98ec74f0dbc95fc39b46c1abb6",
        "0xc91b7b39bbb2c733f0e7459348fd0c80259c8471",
        "0xC31E54C7A869B9FCBECC14363CF510D1C41FA443",
        "0x641C00A822e8b671738d32a431a4Fb6074E5c79d",
        "0xCDA53B1F66614552F834CEEF361A8D12A0B8DAD8",
        "0xC6F780497A95E246EB9449F5E4770916DCD6396A",
        "0x2f5e87C9312fa29aed5c179E456625D79015299c",
        "0x13398E27A21BE1218B6900CBEDF677571DF42A48",
        "0x31FA55E03BAD93C7F8AFFDD2EC616EBFDE246001",
        "0x468B88941E7CC0B88C1869D68AB6B570BCEF62FF",
        "0xd37Af656Abf91c7f548FfFC0133175b5e4d3d5e6",
        "0xc6962004f452be9203591991d15f6b388e09e8d0",
        "0xdbaeb7f0dfe3a0aafd798ccecb5b22e708f7852c",
        "0xbe3ad6a5669dc0b8b12febc03608860c31e2eef6",
        "0x80a9ae39310abf666a87c743d6ebbd0e8c42158e",
        "0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61",
        "0x1862200e8e7ce1c0827b792d0f9546156f44f892",
        "0x1edd8c76f74d816f7472be69b174fe7b3084221e",
        "0x4d834a9b910e6392460ebcfb59f8eef27d5c19ff",
        "0x0632742c132413cd47438691d8064ff9214ac216",
        "0xa8328bf492ba1b77ad6381b3f7567d942b000baf",
        "0x50450351517117cb58189edba6bbad6284d45902",
    ],
    internalName: "arbitrum",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    contracts: {
        ...chains.arbitrum.contracts,
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        },
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        },
        weth9: {
            address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
        },
        multicall2: { address: "0x842eC2c7D803033Edf55E478F461FC547Bc54EB2" },
        multicall3: { address: "0xcA11bde05977b3631167028862bE2a173976CA11" },
    },
});

const base = makeConfig({
    ...chains.base,
    sortIndex: 8,
    launchTime: 1707321600,
    blockTimeSeconds: 2,
    logoUrl: "https://assets.oku.trade/chains/base-logo.svg",
    defaultPool: "0xd0b53d9277642d899df5c87a3966a349a798f224",
    defaultToken0: "0x4200000000000000000000000000000000000006",
    defaultToken1: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    morpho: {
        deployBlock: 13977148,
        morpho: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
        mmFactory10: "0xa9c3d3a366466fa809d1ae982fb2c46e5fc41101",
        mmFactory11: "0xFf62A7c278C62eD665133147129245053Bbf5918",
        bundler3: "0x6BFd8137e702540E7A42B74178A4a49Ba43920C4",
    },
    externalId: {
        zerion: "base",
        debank: "base",
        tenderly: "true"
    },
    markets: {
        kyberswap: "base",
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        openocean: "base",
        zeroex: true,
        icecreamswap: true,
        cowswap: "base"
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-base-1",
            routerAddress: "0x881e3A65B4d4a04dD529061dd0071cf975F58bCD",
            chainSelector: 15971525489660198786n,
            tokenAdminRegistry: "0x6f6C373d09C07425BaAE72317863d7F6bb731e37"
        },
        rhinofi: "BASE",
        stargate: {
            endpointID: 30184,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    id: 13,
                    address: "0xdc181Bd607330aeeBEF6ea62e03e5e1Fb4B6F7C7",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0x27a16dc786820B16E5c9028b75B99F6f604b5d26",
                },
            ],
        },
        wanbridge: {
            requiredConfirmations: 200,
        },
        wormhole: {
            chain: "Base",
            timeToFinalize: 1800,
        },
    },
    oracles: {
        cmc: {
            slug: "base",
            native: "ethereum",
        },
        coingecko: {
            slug: "base",
            native: "ethereum",
        },
        dexscreener: "base",
    },
    safeReorgDistance: 90000,
    uniswap: {
        deployBlock: 1371680,
        poolFactory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
        multicall2: "0x41A513463248971B41C0580726CF4D425c071732",
        tickLens: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
        nonfungiblePositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
        positionsNFT: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
        positionsNFTDeployBlock: 1371714,
        universalRouter: "0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    },
    oku: {
        limitOrderRegistry: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27",
        limitOrderRegistryDeployBlock: 7644835,
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "WETH",
        },
    },
    tokenList: [
        { symbol: "USDbC", address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca" },
        { symbol: "cbETH", address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22" },
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "USDC", address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" },
        { symbol: "USDT", address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2" },
    ],
    stables: [
        "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
        "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
        "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
        "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
    ],
    watchlist: [
        "0x4c36388be6f416a29c8d8eee81c771ce6be14b18",
        "0x06959273e9a65433de71f5a452d529544e07ddd0",
        "0xc9034c3e7f58003e6ae0c8438e7c8f4598d5acaa",
        "0xd0b53d9277642d899df5c87a3966a349a798f224",
        "0x48413707b70355597404018e7c603b261fcadf3f",
        "0x4b0aaf3ebb163dd45f663b38b6d93f6093ebc2d3",
        "0x0d5959a52e7004b601f0be70618d01ac3cdce976",
        "0x10648ba41b8565907cfa1496765fa4d95390aa0d",
        "0x22f9623817f152148b4e080e98af66fbe9c5adf8",
        "0xae2ce200bdb67c472030b31f602f0756c9aeb61c",
        "0xd5638bf58e2762fa40bd753490f693cbb1986709",
        "0x018046b1d182f7c0978c07610e1173c8e11913fd",
        "0x24e1cbd6fed006ceed9af0dce688acc7951d57a9",
        "0x97a25cc2793f0ffa90e1667cf7b3c1f130737189",
        "0xfcc89a1f250d76de198767d33e1ca9138a7fb54b",
        "0x3bc5180d5439b500f381f9a46f15dd6608101671",
        "0xa555149210075702a734968f338d5e1cbd509354",
        "0x5197195ac878741b192f84ff6d7da5a85b9e634b",
        "0xe745a591970e0fa981204cf525e170a2b9e4fb93",
        "0x7e904aaf3439402eb21958fe090bd852d5e882cf",
    ],
    internalName: "base",
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.base.contracts,
        nftManager: {
            address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        limitOrder: {
            address: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27",
        },
        multicall2: {
            address: "0x41A513463248971B41C0580726CF4D425c071732",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const blast = makeConfig({
    ...chains.blast,
    blockTimeSeconds: 2,
    launchTime: 1719410400,
    sortIndex: 14,
    logoUrl: "https://assets.oku.trade/chains/blast-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        zerion: "blast",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        kyberswap: "blast",
        openocean: "blast",
        zeroex: true,
        icecreamswap: true,
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-blast",
            routerAddress: "0x12e0B8E349C6fb7E6E40713E8125C3cF1127ea8C",
            chainSelector: 4411394078118774322n,
            tokenAdminRegistry: "0x846Fccd01D4115FD1E81267495773aeB33bF1dC7"
        },
        rhinofi: "BLAST",
        wormhole: {
            chain: "Blast",
            timeToFinalize: 1800,
        },
    },
    oracles: {
        cmc: {
            slug: "blast",
            native: "ethereum",
        },
        coingecko: {
            slug: "blast",
            native: "ethereum",
        },
        dexscreener: "blast",
    },
    uniswap: {
        deployBlock: 400903,
        poolFactory: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd",
        multicall2: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833",
        tickLens: "0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274",
        nonfungiblePositionManager: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
        positionsNFT: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
        positionsNFTDeployBlock: 400947,
        universalRouter: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4",
        wrappedNativeAddress: "0x4300000000000000000000000000000000000004",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x4300000000000000000000000000000000000003",
        wethAddress: "0x4300000000000000000000000000000000000004",
    },
    oku: {
        limitOrderRegistry: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F",
        limitOrderRegistryDeployBlock: 402083,
        pricing: {
            nativeWrappedToken: "0x4300000000000000000000000000000000000004",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F",
    defaultToken0: "0x4300000000000000000000000000000000000003",
    defaultToken1: "0x4300000000000000000000000000000000000004",
    tokenList: [
        { symbol: "WETH", address: "0x4300000000000000000000000000000000000004" },
        { symbol: "USDB", address: "0x4300000000000000000000000000000000000003" },
    ],
    stables: ["0x4300000000000000000000000000000000000003"],
    watchlist: [
        "0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F",
        "0xf52b4b69123cbcf07798ae8265642793b2e8990c",
        "0xf52b4b69123cbcf07798ae8265642793b2e8990c",
        "0x310a0a4bc2edd2f29321356d880e0906d7700c14",
        "0xbb60bb410182d8e96c41dfc92e017dd79f5100bf",
        "0xf52df2cde73228cc058abfe88f3801dcddf885eb",
        "0x99f8a29a332eb9004f83abb1b4690de8b00dfccf",
    ],
    internalName: "blast",
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.blast.contracts,
        limitOrder: {
            address: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F",
        },
        nftManager: {
            address: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
        },
        weth9: {
            address: "0x4300000000000000000000000000000000000004",
        },
        multicall2: {
            address: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833",
        },
    },
});

const bob = makeConfig({
    ...chains.bob,
    blockTimeSeconds: 2,
    launchTime: 1727359200,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/bob-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    markets: {
        icecreamswap: true,
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "bitcoin-mainnet-bob",
            routerAddress: "0x827716e74F769AB7b6bb374A29235d9c2156932C",
            chainSelector: 3849287863852499584n,
            tokenAdminRegistry: "0xa57d04119AFf4884F8602213E58d8AaAD18229cb",
        },
    },
    morpho: {},
    oracles: {
        coingecko: {
            slug: "bob",
            native: "ethereum",
        },
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 5188280,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xCbe9Be2C87b24b063A21369b6AB0Aa9f149c598F",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 5189019,
        universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006",
        wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3",
    },
    oku: {
        limitOrderRegistry: "0x447b8e40b0cda8e55f405c86bc635d02d0540ab8",
        limitOrderRegistryDeployBlock: 5624845,
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de",
    defaultToken0: "0x05D032ac25d322df992303dCa074EE7392C117b9",
    defaultToken1: "0x4200000000000000000000000000000000000006",
    tokenList: [
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "USDT", address: "0x05D032ac25d322df992303dCa074EE7392C117b9" },
        { symbol: "USDC.e", address: "0xe75d0fb2c24a55ca1e3f96781a2bcc7bdba058f0" },
        { symbol: "WBTC", address: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3" },
        {
            symbol: "SolvBTC.BBN",
            address: "0xcc0966d8418d412c599a6421b760a847eb169a8c",
        },
        {
            symbol: "SolvBTC",
            address: "0x541fd749419ca806a8bc7da8ac23d346f2df8b77",
        },
        { symbol: "uniBTC", address: "0x236f8c0a61da474db21b693fb2ea7aab0c803894" },
    ],
    stables: [
        "0x05D032ac25d322df992303dCa074EE7392C117b9",
        "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0",
        "0x6c851f501a3f24e29a8e39a29591cddf09369080",
    ],
    watchlist: [
        "0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de",
        "0x6407fec527abad1aafdb9a3b5a2171800c21a2fe",
        "0xe112389471d577f7bc45c03c7c37f70abca1cc93",
        "0x566b9414c8733c14a96b8a21ca47711972f99d1a",
        "0x4a1df9716147b785f3f82019f36f248ac15dc308",
        "0xb091ed2491a179a9f14a34f88587cd08195e592c",
        "0x508a838922a93096c1eb23fe21d8938bbd653db6",
        "0x41a98efc1742a60aba6afbcb2073e64477b5333a",
        "0x45bfa70e8f387da47ffe3dec447bc16f0b9a6261",
    ],
    internalName: "bob",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.bob.contracts,
        limitOrder: {
            address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        multicall2: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const boba = makeConfig({
    ...chains.boba,
    name: "Boba",
    launchTime: 1690297200,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    sortIndex: 11,
    blockTimeSeconds: 2,
    logoUrl: "https://assets.oku.trade/chains/boba-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        debank: "boba",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        icecreamswap: true,
    },
    bridges: {},
    oracles: {
        coingecko: {
            slug: "boba",
            native: "ethereum",
        },
        dexscreener: "boba",
    },
    blockExplorers: {
        default: {
            name: "Bobascan",
            url: "https://bobascan.com",
            apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/288/etherscan/api",
        },
    },
    nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH",
    },
    uniswap: {
        deployBlock: 969351,
        poolFactory: "0xFFCd7Aed9C627E82A765c3247d562239507f6f1B",
        permit2: "0xF80c91442D3EF66632958C0d395667075FC82fB0",
        multicall2: "0x07956092c0F4818D6792a42035d2d2fa0C75E76B",
        proxyAdmin: "0xE8B5DaE430189ea6ccffF4eEeC58a98556525fB4",
        tickLens: "0x36EBd44350E4406E67C5579026950793b8528402",
        quoter: "0x483fc90DDC7aC847D4a752055DCF73483B6d97FD",
        swapRouter02: "0x759E8B0cb9d65291e258aE3e043258ae1dD0df16",
        NFTDescriptor: "0x531c3B226288854e992150FEfF4d95F7B8DEbD8c",
        nonfungibleTokenPositionDescriptor: "0xb6751A274EDAe02A911E3bB23682FAaF380433b7",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71",
        v3Migrator: "0x9ab1E646877732DD76bd662DC242723D7e4B42ba",
        uniswapV3Staker: "0x6a6c1198f85B084822138DFd3fA9686e4029c091",
        positionsNFT: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71",
        positionsNFTDeployBlock: 969359,
        universalRouter: "0x4BA622997559F9b5Ac68751D7Fc3dEecc23a0e88",
        wrappedNativeAddress: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000",
        usdcAddress: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
    },
    oku: {
        limitOrderRegistry: "0xfefb60591cffc694c0137983a9091d64af8ecbac",
        limitOrderRegistryDeployBlock: 1052192,
        pricing: {
            nativeWrappedToken: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000",
            nativeWrappedName: "WETH",
        },
    },
    defaultPool: "0xdF37543dae7986E48E3ce83F390A828A9F3D23BA",
    defaultToken0: "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc",
    defaultToken1: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7",
    tokenList: [
        { symbol: "USDC", address: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc" },
        { symbol: "BOBA", address: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7" },
        { symbol: "WETH", address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000" },
        { symbol: "WBTC", address: "0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b" },
        { symbol: "USDT", address: "0x5de1677344d3cb0d7d465c10b72a8f60699c062d" },
    ],
    stables: [
        "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc",
        "0x5de1677344d3cb0d7d465c10b72a8f60699c062d",
        "0xf74195bb8a5cf652411867c5c2c5b8c2a402be35",
    ],
    watchlist: [
        "0xdF37543dae7986E48E3ce83F390A828A9F3D23BA",
        "0x162b1fda171463974e5262bac5824da233f11e00",
        "0xfe1a0c58e38fa71618545df15e5479559ce51108",
        "0xb1ed67e29b2497404a2ac7f2a2989c3328ec2999",
        "0x66faef55892dae3932a043d3238ecaa271d36e0d",
        "0x67fac3b54b6391e3183d2d74b7d2c430ad44fca1",
    ],
    internalName: "boba",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.boba.contracts,
        limitOrder: {
            address: "0xfefb60591cffc694c0137983a9091d64af8ecbac",
        },
        nftManager: {
            address: "0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71",
        },
        weth9: {
            address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000",
        },
        multicall2: {
            address: "0x07956092c0F4818D6792a42035d2d2fa0C75E76B",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const bsc = makeConfig({
    ...chains.bsc,
    name: "BSC",
    launchTime: 1689346800,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    sortIndex: 9,
    blockTimeSeconds: 3,
    logoUrl: "https://assets.oku.trade/chains/bsc-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        zerion: "binance-smart-chain",
        debank: "bsc",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        airswap: true,
        kyberswap: "bsc",
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        propellerswap: "bsc",
        openocean: "bsc",
        zeroex: true,
        icecreamswap: true
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "bsc-mainnet",
            routerAddress: "0x34B03Cb9086d7D758AC55af71584F81A598759FE",
            chainSelector: 11344663589394136015n,
            tokenAdminRegistry: "0x736Fd8660c443547a85e4Eaf70A49C1b7Bb008fc"
        },
        rhinofi: "BINANCE",
        stargate: {
            endpointID: 30102,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "USDC",
                    id: 1,
                    address: "0x962Bd449E630b0d928f308Ce63f1A21F02576057"
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0x138EB30f73BC423c6455C53df6D89CB01d9eBc63",
                }
            ],
        },
        wanbridge: {
            requiredConfirmations: 12,
        },
        wormhole: {
            chain: "Bsc",
            timeToFinalize: 48,
        },
    },
    oracles: {
        cmc: {
            slug: "bnb",
            native: "bnb",
        },
        coingecko: {
            slug: "binance-smart-chain",
            native: "binancecoin",
        },
        dexscreener: "bsc",
    },
    uniswap: {
        deployBlock: 26324014,
        poolFactory: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
        multicall2: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
        proxyAdmin: "0xC9A7f5b73E853664044ab31936D0E6583d8b1c79",
        tickLens: "0xD9270014D396281579760619CCf4c3af0501A47C",
        quoter: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
        swapRouter02: "0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2",
        NFTDescriptor: "0x831d93E55AF23A2977E4DA892d5005f4F2995071",
        nonfungibleTokenPositionDescriptor: "0x0281E98322e4e8E53491D576Ee6A2BFCE644C55C",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613",
        v3Migrator: "0x32681814957e0C13117ddc0c2aba232b5c9e760f",
        uniswapV3Staker: "0x49B53C35AF9072fC71767577BF6380a88EE32C71",
        positionsNFT: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613",
        positionsNFTDeployBlock: 26324045,
        universalRouter: "0xeC8B0F7Ffe3ae75d7FfAb09429e3675bb63503e4",
        wrappedNativeAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        wrappedNativeSymbol: "WBNB",
        wrappedNativeName: "Wrapped BNB",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "BNB",
    },
    token: {
        usdcAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        wbtcAddress: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        wethAddress: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    },
    oku: {
        limitOrderRegistry: "0x19b9bd76028cab6f414ed1fc57400b75b5ca0627",
        limitOrderRegistryDeployBlock: 34187988,
        pricing: {
            nativeQuotePools: [
                {
                    blockCreated: 26495967,
                    address: "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869",
                },
            ],
            nativeWrappedToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            nativeWrappedName: "WBNB",
            pools: [
                "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869",
                "0x5289a8dbf7029ee0b0498a84777ed3941d9acfec",
                "0xc98f01bf2141e1140ef8f8cad99d4b021d10718f",
                "0x7862d9b4be2156b15d54f41ee4ede2d5b0b455e4",
                "0xd0a5e2818a23e2054449982fb9ff9575867cf92b",
                "0xac18e282c0b89a9981520e148ddd2bf9592e440c",
                "0x6bcb0ba386e9de0c29006e46b2f01f047ca1806e",
                "0x38df85c7d266deb3bf679501d8a8dcaf71c3672f",
                "0x9b501a7ad3087d603ceb34424b7b2a6c348ad0b7",
                "0x84e47c7f2fe86f6b5efbe14fee46b8bb871b2e05",
                "0xf9878a5dd55edc120fde01893ea713a4f032229c",
                "0x329eeb1a58bdb3b804d1f94623c7a29a67a9b6b7",
                "0x7b9f1b263a25c68cfe942953796e414eaddde1a1",
                "0x17507bef4c3abc1bc715be723ee1baf571256e05",
                "0x4d170f8714367c44787ae98259ce8adb72240067",
                "0xc8b4b9d7fc77000fde9a17cd1fb1e9394412ab6e",
                "0x87c029bbb64c39a2a6762ac0e031757d2974e275",
                "0xa47f717929b7de4d131af93c39627531fe623c9a",
                "0x023b6298e2f9ae728b324757599f2a36e002a55a",
                "0x06396509195eb9e07c38a016694dc9ff535b128a",
                "0x4ef938b633d704f29e593a8b51148d43429d0bc4",
                "0xd2f21358c1549be193537b2a4c5dc7f0228ae011",
                "0xe15c03d4ce70d2102d8d7a4e42af677a5ac7ee16",
                "0xf624649736a106f2aa16e8027ce9aeed1bcd22f9",
                "0xb873e889f28e3d2c86f2495820dd5eca329bddf4",
                "0x107c1dcb81234146400c96bc3e1252b42cde7d3e",
                "0x23b6888106ea1b69d0b1b48cffa58606ce63fb17",
                "0x0bfebcaa1873ff6bac70b36a54860d301d434e43",
                "0xbe7cc96a863bdb43e25896664cf0e3c65f7973eb",
                "0xe7df69cc69f5a9425865e30625ce516269c43ad1",
            ],
        },
    },
    defaultPool: "0x47a90a2d92a8367a91efa1906bfc8c1e05bf10c4",
    defaultToken0: "0x55d398326f99059ff775485246999027b3197955",
    defaultToken1: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    tokenList: [],
    stables: [
        "0x55d398326f99059ff775485246999027b3197955",
        "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9",
    ],
    watchlist: [
        "0x47a90a2d92a8367a91efa1906bfc8c1e05bf10c4",
        "0x28df0835942396b7a1b7ae1cd068728e6ddbbafd",
        "0xb125aa15ad943d96e813e4a06d0c34716f897e26",
        "0x0f338ec12d3f7c3d77a4b9fcc1f95f3fb6ad0ea6",
        "0xf9878a5dd55edc120fde01893ea713a4f032229c",
        "0x2c3c320d49019d4f9a92352e947c7e5acfe47d68",
        "0xc98f01bf2141e1140ef8f8cad99d4b021d10718f",
        "0x3fb2623567e21f8c50f0ae86f54ef4849b4eb47b",
        "0x5289a8dbf7029ee0b0498a84777ed3941d9acfec",
        "0xf2c9339945bff71dd0bffd3c142164112cd05dc6",
        "0xf5c616e7b58226b8081dcc7e4a7123a63734eef6",
        "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869",
        "0x0525190f3532b99b32fb42b2697807bd80268565",
        "0xcb99fe720124129520f7a09ca3cbef78d58ed934",
        "0x06396509195eb9e07c38a016694dc9ff535b128a",
    ],
    internalName: "bsc",
    nativeLogoUrl: "https://assets.oku.trade/natives/bnb.png",
    contracts: {
        ...chains.bsc.contracts,
        limitOrder: {
            address: "0x19b9bd76028cab6f414ed1fc57400b75b5ca0627",
        },
        nftManager: {
            address: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613",
        },
        weth9: {
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        },
        multicall2: {
            address: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const celo = makeConfig({
    ...chains.celo,
    blockTimeSeconds: 2,
    launchTime: 1737754469,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/celo-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {
        icecreamswap: true,
        openocean: "celo"
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "celo-mainnet",
            routerAddress: "0xfB48f15480926A4ADf9116Dca468bDd2EE6C5F62",
            chainSelector: 1346049177634351622n,
            tokenAdminRegistry: "0xf19e0555fAA9051e277eeD5A0DcdB13CDaca39a9"
        },
        wormhole: {
            chain: "Celo",
            timeToFinalize: 10
        }
    },
    morpho: {},
    oracles: {
        coingecko: {
            slug: "celo",
            native: "ethereum",
        },
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 5188280,
        poolFactory: "0xAfE208a311B21f13EF87E33A90049fC17A7acDEc",
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
        multicall2: "0x633987602DE5C4F337e3DbF265303A1080324204",
        tickLens: "0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D",
        nonfungiblePositionManager: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
        positionsNFT: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
        positionsNFTDeployBlock: 13916373,
        universalRouter: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4",
        nativeCurrencyName: "CELO",
    },
    token: {
        wbtcAddress: "0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b",
        nativeAddress: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    },
    oku: {
        limitOrderRegistry: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        limitOrderRegistryDeployBlock: 29842546,
        pricing: {
            nativeToken: "0x471EcE3750Da237f93B8E339c536989b8978a438",
        },
    },
    defaultPool: "0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE",
    defaultToken0: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    defaultToken1: "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207",
    tokenList: [
        { symbol: "CELO", address: "0x471EcE3750Da237f93B8E339c536989b8978a438" },
        { symbol: "WETH", address: "0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207" },
        { symbol: "USDC", address: "0xceba9300f2b948710d2653dd7b07f33a8b32118c" },
        { symbol: "USDT", address: "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e" },
        { symbol: "CUSD", address: "0x765de816845861e75a25fca122bb6898b8b1282a" },
    ],
    stables: [
        "0xceba9300f2b948710d2653dd7b07f33a8b32118c",
        "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
        "0x765de816845861e75a25fca122bb6898b8b1282a",
        "0x37f750b7cc259a2f741af45294f6a16572cf5cad",
        "0xeb466342c4d449bc9f53a865d5cb90586f405215",
        "0x617f3112bf5397d0467d315cc709ef968d9ba546",
    ],
    watchlist: [
        "0xd88D5F9E6c10E6FebC9296A454f6C2589b1E8fAE",
        "0xE426E1305f5e6093864762Bf9d2D8B44BC211c59",
        "0x5dC631aD6C26BEA1a59fBF2C2680CF3df43d249f",
        "0x34757893070B0FC5de37AaF2844255fF90F7F1E0",
        "0x1a810e0B6c2dd5629AFa2f0c898b9512C6F78846",
        "0x7766BDC5ff15d3aCeB4D37914963aeBAcCF3de15",
        "0x628Cb3a5a206956423D158009612813B64B19dab",
        "0x1c8DafD358d308b880F71eDB5170B010b106Ca60",
        "0xA1777e082fA1746eB78DD9C1fbB515419CF6e538",
        "0xd80D28850bEBE6208433c298334392bC940B4fc7",
        "0xf130F72F8190f662522774C3367E6e8814f5e219",
        "0x7B9A5BC920610F54881f2F6359007957DE504862",
    ],
    internalName: "celo",
    nativeLogoUrl: "https://assets.oku.trade/natives/celo.png",
    contracts: {
        ...chains.celo.contracts,
        nftManager: {
            address: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
        },
        limitOrder: {
            address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        },
        multicall2: {
            address: "0x633987602DE5C4F337e3DbF265303A1080324204",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const corn = makeConfig({
    ...chains.corn,
    name: "Corn",
    blockTimeSeconds: 35,
    launchTime: 1733882663,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/corn-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    markets: {},
    bridges: {
        chainlink: {
            atlasNetworkName: "corn-mainnet",
            routerAddress: "0x183f6069A0D5c2DEC1Dd1eCF3B1581e12dEb4Efe",
            chainSelector: 9043146809313071210n,
            tokenAdminRegistry: "0xCd51e57cD26b9B5eecbfe3d96DAabF3d12A663DA",
        },
    },
    oracles: {},
    morpho: {
        deployBlock: 251401,
        morpho: "0xc2B1E031540e3F3271C5F3819F0cC7479a8DdD90",
        publicAllocator: "0xDFde06e2B2A2D718eE5560b73dA4F830E56A2f10",
        mmFactory11: "0xe430821595602eA5DD0cD350f86987437c7362fA",
        bundler3: "0x086889F9bdE8349512dD77088A7114E6C1c42Af7",
        urdFactory: "0xaBC2CBa3C8E265d63C04BF5fA41EE105d3D85ae3",
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 10878,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 10901,
        universalRouter: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
        wrappedNativeAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
        wrappedNativeSymbol: "WBTCN",
        wrappedNativeName: "Wrapped Bitcorn",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "BTCN",
    },
    token: {
        wethAddress: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
    },
    oku: {
        limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        limitOrderRegistryDeployBlock: 10948,
        pricing: {
            nativeWrappedToken: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
            nativeWrappedName: "BTCN",
        },
    },
    defaultPool: "0xe435E14815d28a86c643E4606Ed0e8E5624782c6",
    defaultToken0: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
    defaultToken1: "0xDF0B24095e15044538866576754F3C964e902Ee6",
    tokenList: [
        { symbol: "WBTCN", address: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2" },
        { symbol: "USDC.e", address: "0xDF0B24095e15044538866576754F3C964e902Ee6" },
    ],
    stables: [
        "0xDF0B24095e15044538866576754F3C964e902Ee6",
        "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
    ],
    watchlist: [
        "0x660c6c6c2ad9be9fca2d40da22e1e6142ce5e7ca",
        "0xe435E14815d28a86c643E4606Ed0e8E5624782c6",
        "0x43aA32cf4f6389aB89d8C79092A0fc65899C20ba",
        "0x0F12dac5217868b3d6772632543ef16df8df17E5",
        "0xbD108c1Dd7802DFF6c24138A72949184FFbe006F",
        "0xb6a7be3ca6698859b374640b3db439fda7b7a5e3",
        "0x255f0b304f701a0530f5dc1739a3d1469e21dd5f",
    ],
    internalName: "corn",
    nativeLogoUrl: "https://assets.oku.trade/natives/corn.png",
    contracts: {
        ...chains.corn.contracts,
        limitOrder: {
            address: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const etherlink = makeConfig({
    ...chains.etherlink,
    blockTimeSeconds: 0.6,
    launchTime: 1749000115,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/etherlink-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true",
    },
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 14584055,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 14584114,
        universalRouter: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
        wrappedNativeAddress: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
        wrappedNativeSymbol: "WXTZ",
        wrappedNativeName: "Wrapped XTZ",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "XTZ",
    },
    token: {
        wethAddress: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
        usdcAddress: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
        wbtcAddress: "0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F",
    },
    oku: {
        limitOrderRegistry: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        limitOrderRegistryDeployBlock: 16186329,
        pricing: {
            nativeWrappedToken: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
            nativeWrappedName: "XTZ",
        },
    },
    defaultPool: viem.zeroAddress,
    defaultToken0: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
    defaultToken1: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
    tokenList: [
        { symbol: "WXTZ", address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb" },
        { symbol: "USDC.e", address: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9" },
    ],
    stables: [
        "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
        "0x2C03058C8AFC06713be23e58D2febC8337dbfE6A",
    ],
    watchlist: [],
    internalName: "etherlink",
    nativeLogoUrl: "https://assets.oku.trade/natives/xtz.png",
    contracts: {
        ...chains.etherlink.contracts,
        limitOrder: {
            address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const filecoin = makeConfig({
    ...chains.filecoin,
    sortIndex: 10,
    launchTime: 1677600000,
    name: "Filecoin",
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 30,
    safeReorgDistance: 90000,
    morpho: {},
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://filecoin.blockscout.com",
            apiUrl: "https://filecoin.blockscout.com/api",
        },
        filfox: {
            name: "Filfox",
            url: "https://filfox.info/en",
            apiUrl: "https://filfox.info/api",
        },
        filutils: {
            name: "Filutils",
            url: "https://www.filutils.com/en",
            apiUrl: "https://api.filutils.com/api",
        },
    },
    logoUrl: "https://assets.oku.trade/chains/filecoin-logo.svg",
    externalId: {},
    markets: {},
    bridges: {},
    oracles: {
        coingecko: {
            slug: "filecoin",
            native: "filecoin",
        },
        dexscreener: "filecoin",
    },
    uniswap: {
        deployBlock: 3195837,
        poolFactory: "0xB4C47eD546Fc31E26470a186eC2C5F19eF09BA41",
        permit2: "0xb81363578d377F8DA3902e9e705FD60198a9cEc2",
        multicall2: "0x732f5baac411e427d130fed03c2e82a3e0d64d35",
        tickLens: "0x76c001ad9E527FEfA8Fa822a987Ad44ce720BAeD",
        nonfungiblePositionManager: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
        positionsNFT: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
        positionsNFTDeployBlock: 3195861,
        universalRouter: "0x83702C6356A1028A900F83d446D189a31646a16b",
        wrappedNativeAddress: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
        wrappedNativeSymbol: "WFIL",
        wrappedNativeName: "Wrapped FIL",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "FIL",
    },
    token: {
        usdcAddress: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
        wbtcAddress: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad",
        wethAddress: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D",
    },
    oku: {
        pricing: {
            pools: [],
            nativeWrappedToken: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
            nativeWrappedName: "WFIL",
            nativeQuotePools: undefined,
        },
        limitOrderRegistry: "0xded8791056aa39581460a005a3c400a281e24bd7",
        limitOrderRegistryDeployBlock: 3413267,
    },
    defaultPool: "0x74eb355808481587a1fa7101c210592e8d591e34",
    defaultToken0: "0x2421db204968a367cc2c866cd057fa754cb84edf",
    defaultToken1: "0x60e1773636cf5e4a227d9ac24f20feca034ee25a",
    tokenList: [
        {
            symbol: "WFIL",
            address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
        },
        {
            symbol: "celerUSDC",
            address: "0x2421db204968a367cc2c866cd057fa754cb84edf",
        },
        {
            symbol: "axlWETH",
            address: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D",
        },
        {
            symbol: "axlWBTC",
            address: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad",
        },
        {
            symbol: "axlUSDC",
            address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
        },
        {
            symbol: "axlUSDT",
            address: "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6",
        },
    ],
    stables: [
        "0x2421db204968A367CC2C866CD057fA754Cb84EdF",
        "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
        "0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6",
        "0x422849b355039bc58f2780cc4854919fc9cfaf94",
    ],
    watchlist: [
        "0x74eb355808481587a1fa7101c210592e8d591e34",
        "0x9d8ea62e1264ab667d234b5610774a08e608e3b8",
        "0x443a6243a36ef0ae1c46523d563c15abd787f4e9",
        "0xca166403c6f41e1fecc0eb40ac1947fd6399d5c5",
    ],
    internalName: "filecoin",
    nativeLogoUrl: "https://assets.oku.trade/natives/fil.png",
    contracts: {
        ...chains.filecoin.contracts,
        limitOrder: {
            address: "0xded8791056aa39581460a005a3c400a281e24bd7",
        },
        nftManager: {
            address: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee",
        },
        weth9: {
            address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
        },
        multicall2: {
            address: "0x732f5baac411e427d130fed03c2e82a3e0d64d35",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const gnosis = makeConfig({
    ...chains.gnosis,
    blockTimeSeconds: 5,
    launchTime: 1725890400,
    sortIndex: 18,
    logoUrl: "https://assets.oku.trade/chains/gnosis-logo.png",
    safeReorgDistance: 90000,
    morpho: {},
    externalId: {
        zerion: "xdai",
        cowswap: "xdai",
        tenderly: "true"
    },
    markets: {
        openocean: "xdai",
        cowswap: "xdai",
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "xdai-mainnet",
            routerAddress: "0x4aAD6071085df840abD9Baf1697d5D5992bDadce",
            chainSelector: 465200170687744372n,
            tokenAdminRegistry: "0x73BC11423CBF14914998C23B0aFC9BE0cb5B2229",
        },
        stargate: {
            endpointID: 30145,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "USDC",
                    id: 1,
                    address: "0xB1EeAD6959cb5bB9B20417d6689922523B2B86C3",
                },
                {
                    name: "ETH",
                    id: 13,
                    address: "0xe9aBA835f813ca05E50A6C0ce65D0D74390F7dE7",
                },
            ],
        },
    },
    oracles: {
        cmc: {
            slug: "gnosis",
            native: "xdai",
        },
        coingecko: {
            slug: "xdai",
            native: "xdai",
        },
        dexscreener: "gnosischain",
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 27416614,
        poolFactory: "0xe32F7dD7e3f098D518ff19A22d5f028e076489B1",
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
        multicall2: "0x4dfa9a980efE4802E969AC33968E3d6E59B8a19e",
        tickLens: "0x8fe3D346B53dCA838B228e0e53aCdBED5DEC70Dc",
        nonfungiblePositionManager: "0xAE8fbE656a77519a7490054274910129c9244FA3",
        positionsNFT: "0xAE8fbE656a77519a7490054274910129c9244FA3",
        positionsNFTDeployBlock: 27416645,
        universalRouter: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
        wrappedNativeAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
        wrappedNativeSymbol: "WXDAI",
        wrappedNativeName: "Wrapped XDAI",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "XDAI",
    },
    token: {
        usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
        wethAddress: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    },
    oku: {
        limitOrderRegistry: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        limitOrderRegistryDeployBlock: 35719277,
        pricing: {
            pools: ["0x5a2fb66e66b2af7f1c2f71c6c695492faab2e587"],
            nativeWrappedToken: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
            nativeWrappedName: "xDAI",
        },
    },
    defaultPool: "0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9",
    defaultToken0: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1",
    defaultToken1: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    tokenList: [
        { symbol: "WXDAI", address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" },
        { symbol: "WETH", address: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1" },
        { symbol: "USDC.e", address: "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0" },
        { symbol: "USDC", address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" },
        { symbol: "USDT", address: "0x4ecaba5870353805a9f068101a40e0f32ed605c6" },
    ],
    stables: [
        "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
        "0x2a22f9c3b484c3629090feed35f17ff8f88f76f0",
        "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
        "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    ],
    watchlist: [
        "0x909e36aB6eA5DB6Fd71876Fe319328BAe4DfeA29",
        "0x4A562E482e9e6b140b322CA50Cc4D8535Cdf85c9",
        "0x8Fb50102bC76798C13a68de3bd5F1974feDF48CD",
        "0xa180bEDd56438C596C9ACed94D03A3001C5BB83C",
        "0xE9E1793954f32D880Ec0B2186E96d88e2b870e40",
        "0xbb98d4e20b054ede4c4143ecee59368f88ecbbe4",
    ],
    internalName: "gnosis",
    nativeLogoUrl: "https://assets.oku.trade/natives/xdai.png",
    contracts: {
        ...chains.gnosis.contracts,
        limitOrder: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        nftManager: {
            address: "0xAE8fbE656a77519a7490054274910129c9244FA3",
        },
        weth9: {
            address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
        },
        multicall2: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const goat = makeConfig({
    ...chains.goat,
    name: "GOAT",
    blockTimeSeconds: 3,
    launchTime: 1742159744,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/goat-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {
        stargate: {
            endpointID: 30361,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    type: "OFT",
                    id: 13,
                    address: "0x88853D410299BCBfE5fCC9Eef93c03115E908279"
                }, {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0xbbA60da06c2c5424f03f7434542280FCAd453d10"
                }, {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0x549943e04f40284185054145c6E4e9568C1D3241"
                }
            ],
        },
    },
    oracles: {},
    morpho: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 848385,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 848408,
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",
        wrappedNativeAddress: "0xbC10000000000000000000000000000000000000",
        wrappedNativeSymbol: "WGBTC",
        wrappedNativeName: "Wrapped Goat Bitcoin",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "BTC",
    },
    token: {
        wethAddress: "0xbC10000000000000000000000000000000000000",
        usdcAddress: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8",
    },
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        limitOrderRegistryDeployBlock: 848591,
        pricing: {
            nativeWrappedToken: "0xbC10000000000000000000000000000000000000",
            nativeWrappedName: "WGBTC",
        },
    },
    defaultPool: "0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef",
    defaultToken0: "0x941508f0b823f1bc40a9beefce5e544e525a94c3",
    defaultToken1: "0xfe41e7e5cb3460c483ab2a38eb605cda9e2d248e",
    tokenList: [
        { symbol: "WBTC", address: "0xbC10000000000000000000000000000000000000" },
        { symbol: "USDC.e", address: "0x3022b87ac063DE95b1570F46f5e470F8B53112D8" },
        { symbol: "USDT", address: "0xe1ad845d93853fff44990ae0dcecd8575293681e" },
    ],
    stables: [
        "0x3022b87ac063DE95b1570F46f5e470F8B53112D8",
        "0xe1ad845d93853fff44990ae0dcecd8575293681e",
    ],
    watchlist: [
        "0xe84dc31691587402e59ba9f9180f8ab02a593d3c",
        "0xde2b2fb74a9b7053a6bac08fb741e19467f7a0ef",
    ],
    internalName: "goat",
    nativeLogoUrl: "https://assets.oku.trade/natives/gbtc.svg",
    contracts: {
        ...chains.goat.contracts,
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0xbC10000000000000000000000000000000000000",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const hemi = makeConfig({
    ...chains.hemi,
    blockTimeSeconds: 12,
    launchTime: 1741901593,
    sortIndex: 13,
    logoUrl: "https://assets.oku.trade/chains/hemi-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {
        stargate: {
            endpointID: 30329,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    type: "POOL",
                    id: 13,
                    address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
                },
                {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B",
                },
                {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398",
                },
            ],
        },
    },
    morpho: {},
    oracles: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 1293598,
        poolFactory: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        tickLens: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        nonfungiblePositionManager: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
        positionsNFT: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
        positionsNFTDeployBlock: 1293633,
        universalRouter: "0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006",
        wbtcAddress: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3",
    },
    oku: {
        limitOrderRegistry: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0",
        limitOrderRegistryDeployBlock: 1293765,
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0x95a8b611e90de2b682267e2f00c8dff71909298a",
    defaultToken0: "0x4200000000000000000000000000000000000006",
    defaultToken1: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA",
    tokenList: [
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "USDT", address: "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e" },
        { symbol: "USDC.e", address: "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA" },
        { symbol: "WBTC", address: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3" },
    ],
    stables: [
        "0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA",
        "0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e",
        "0x6c851F501a3F24E29A8E39a29591cddf09369080",
        "0x7a06c4aef988e7925575c50261297a946ad204a8",
    ],
    watchlist: [
        "0x95a8b611e90de2b682267e2f00c8dff71909298a",
        "0x47932f4a77cde549bf328bb33caae7f413b62612",
        "0x875c1efa41a868fbb4274c3e06afc14b597e8828",
        "0x0bbd621fb38f6ddc16b0089ebbeade8db9a8d354",
        "0xc47f921d413787abf5c98d977e52062de0a3a6d4",
        "0x0ec5aa557d5b2a8702ad43d253415d11f95364c0",
    ],
    internalName: "hemi",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.hemi.contracts,
        limitOrder: {
            address: "0xcd7f266E3C0D0771897aAF74BEB38072D66402A0",
        },
        nftManager: {
            address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        multicall2: {
            address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const lens = makeConfig({
    ...chains.lens,
    name: "Lens",
    blockTimeSeconds: 2,
    launchTime: 1746050531,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/lens-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {},
    initCodeHash: "0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed",
    uniswap: {
        deployBlock: 184120,
        poolFactory: "0xe0704DB90bcAA1eAFc00E958FF815Ab7aa11Ef47",
        permit2: "0x0000000000225e31d15943971f47ad3022f714fa",
        multicall2: "0x5900c97b683e69CD752aF7DC7003d69315E2a288",
        tickLens: "0x5499510c2e95F59b1Df0eC7C1bd2Fa76347df5Be",
        nonfungiblePositionManager: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031",
        positionsNFT: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031",
        positionsNFTDeployBlock: 184128,
        universalRouter: "0xAA904d497e42608C014BE83a026E984aFc16129b",
        wrappedNativeAddress: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
        wrappedNativeSymbol: "WGHO",
        wrappedNativeName: "Wrapped GHO",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "GHO",
    },
    token: {
        wethAddress: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
        usdcAddress: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884",
    },
    oku: {
        limitOrderRegistry: "0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF",
        limitOrderRegistryDeployBlock: 852140,
        pricing: {
            nativeWrappedToken: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
            nativeWrappedName: "GHO",
        },
    },
    defaultPool: "0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de",
    defaultToken0: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
    defaultToken1: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884",
    tokenList: [
        { symbol: "WGHO", address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F" },
        { symbol: "USDC", address: "0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884" },
        { symbol: "WETH", address: "0xE5ecd226b3032910CEaa43ba92EE8232f8237553" },
    ],
    stables: ["0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884"],
    watchlist: [
        "0x5eb6b146d7a5322b763c8f8b0eb2fdd5d15e49de",
        "0xdf4b8153bf91f54802a9ba16366b2111724384e4",
        "0x6b6eb6f437bf54d22b997c3b38b79a23bc63f39f",
    ],
    internalName: "lens",
    nativeLogoUrl: "https://assets.oku.trade/natives/gho.png",
    contracts: {
        ...chains.lens.contracts,
        limitOrder: {
            address: "0xD3239f8D4c6245359f4F050F5133A9F61F4e2ACF",
        },
        nftManager: {
            address: "0xC5d0CAaE8aa00032F6DA993A69Ffa6ff80b5F031",
        },
        weth9: {
            address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
        },
        multicall2: {
            address: "0x5900c97b683e69CD752aF7DC7003d69315E2a288",
        },
        multicall3: {
            address: "0x6b6dEa4D80e3077D076733A04c48F63c3BA49320",
        },
    },
});

const lightlink = makeConfig({
    ...chains.lightlinkPhoenix,
    name: "LightLink",
    blockTimeSeconds: 0.5,
    launchTime: 1741485513,
    sortIndex: 13,
    logoUrl: "https://assets.oku.trade/chains/lightlink-logo.svg",
    safeReorgDistance: 90000,
    morpho: {},
    externalId: {},
    markets: {
        icecreamswap: true
    },
    bridges: {
        stargate: {
            endpointID: 30309,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    type: "POOL",
                    id: 13,
                    address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
                }, {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0x8EE21165Ecb7562BA716c9549C1dE751282b9B33",
                }, {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0x06D538690AF257Da524f25D0CD52fD85b1c2173E",
                }
            ],
        },
    },
    oracles: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 131405097,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0x807F4E281B7A3B324825C64ca53c69F0b418dE40",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 131405537,
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",
        wrappedNativeAddress: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
        usdcAddress: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd",
        wbtcAddress: "0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67",
    },
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        limitOrderRegistryDeployBlock: 131407726,
        pricing: {
            nativeWrappedToken: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
            nativeWrappedName: "WETH",
        },
    },
    defaultPool: "0x1125452469E9B9A36FE69249309fCe8925C3eEDa",
    defaultToken0: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
    defaultToken1: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd",
    tokenList: [
        { symbol: "LL", address: "0xd9d7123552fA2bEdB2348bB562576D67f6E8e96E" },
        { symbol: "USDC.e", address: "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd" },
        { symbol: "USDT", address: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949" },
        { symbol: "WETH", address: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73" },
        { symbol: "WBTC", address: "0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67" },
    ],
    stables: [
        "0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd",
        "0x808d7c71ad2ba3FA531b068a2417C63106BC0949",
    ],
    watchlist: [
        "0x1125452469E9B9A36FE69249309fCe8925C3eEDa",
        "0x2288627C696010049f6D98a84fC10F9C5F7b3Ce2",
        "0xc87Fa6290e7F11543e76e1D240335190C15Dade8",
    ],
    internalName: "lightlink",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const linea = makeConfig({
    ...chains.linea,
    name: "Linea",
    launchTime: 1713362400,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 2,
    sortIndex: 15,
    morpho: {},
    logoUrl: "https://assets.oku.trade/chains/linea-logo.svg",
    safeReorgDistance: 100,
    externalId: {
        zerion: "linea",
        tenderly: "true"
    },
    markets: {
        kyberswap: "linea",
        openocean: "linea",
        zeroex: true,
        icecreamswap: true,
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-linea-1",
            routerAddress: "0x549FEB73F2348F6cD99b9fc8c69252034897f06C",
            chainSelector: 4627098889531055414n,
            tokenAdminRegistry: "0xBc933cEE67d2b1c08490ee8C51E2dF653a713534"
        },
        rhinofi: "LINEA",
        stargate: {
            endpointID: 30183,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    type: "POOL",
                    id: 13,
                    address: "0x81F6138153d473E8c5EcebD3DC8Cd4903506B075",
                },
            ],
        },
        wormhole: {
            chain: "Linea",
            timeToFinalize: 1800,
        },
    },
    oracles: {
        cmc: {
            slug: "linea",
            native: "ethereum",
        },
        coingecko: {
            slug: "linea",
            native: "ethereum",
        },
        dexscreener: "linea",
    },
    uniswap: {
        deployBlock: 25248,
        poolFactory: "0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9",
        multicall2: "0x93e253D101519578A8DF0BCe2A43D8292BFb3A1F",
        tickLens: "0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9",
        nonfungiblePositionManager: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
        positionsNFT: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
        positionsNFTDeployBlock: 25264,
        universalRouter: "0xd7c7d7f18dd5388d5217c9696c7e799fcd75c6bd",
        wrappedNativeAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
        wethAddress: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
        wbtcAddress: "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4",
    },
    oku: {
        limitOrderRegistry: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74",
        limitOrderRegistryDeployBlock: 3610379,
        pricing: {
            nativeWrappedToken: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xc48622190a6b91d64ee7459c62fade9abe61b48a",
    defaultToken0: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
    defaultToken1: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
    tokenList: [
        { symbol: "WETH", address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f" },
        { symbol: "USDC", address: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff" },
    ],
    stables: [
        "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
        "0xa219439258ca9da29e9cc4ce5596924745e12b93",
        "0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5",
    ],
    watchlist: [
        "0xc48622190a6b91d64ee7459c62fade9abe61b48a",
        "0x5856edf9212bdcec74301ec78afc573b62d6a283",
        "0xf8296e87192aa71158bd9ba323fc2e1d9a047aa2",
        "0x93f626d0e471279bd8d1420959cc881bdacfdab1",
        "0xfe64636280a98d21701a607e6a52ed5d62bacfe4",
        "0xf2d33caaedc4daab2c1f0bfc7cccb03a9acf3e4e",
        "0xe848d169080a0022039fcaefc19263c410fe3520",
        "0x30b44df5010f8b2a4d4e566a2ba638496e76a8fc",
        "0x42a72c7fbb355b2cfe08f8716595f3f3509b3bea",
    ],
    internalName: "linea",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.linea.contracts,
        limitOrder: {
            address: "0x63c8527f670d4eb3401c80c5905ceca8727f1e74",
        },
        nftManager: {
            address: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
        },
        weth9: {
            address: "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
        },
        multicall2: {
            address: "0x9A27B81b034e585be9d366DEB7aBAD036BE50845",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const lisk = makeConfig({
    ...chains.lisk,
    blockTimeSeconds: 2,
    launchTime: 1724076000,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/lisk-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    morpho: {},
    markets: {},
    bridges: {},
    oracles: {
        coingecko: {
            slug: "lisk",
            native: "ethereum",
        },
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://blockscout.lisk.com",
            apiUrl: "https://blockscout.lisk.com/api/v2",
        },
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 577168,
        poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF",
        nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
        positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
        positionsNFTDeployBlock: 578398,
        universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006",
    },
    oku: {
        limitOrderRegistry: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        limitOrderRegistryDeployBlock: 579872,
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xd501d4e381491f64274cc65fdec32b47264a2422",
    defaultToken0: "0x4200000000000000000000000000000000000006",
    defaultToken1: "0xac485391eb2d7d88253a7f1ef18c37f4242d1a24",
    tokenList: [
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "USDT", address: "0x05D032ac25d322df992303dCa074EE7392C117b9" },
        { symbol: "LSK", address: "0xac485391eb2d7d88253a7f1ef18c37f4242d1a24" },
    ],
    stables: ["0x05D032ac25d322df992303dCa074EE7392C117b9"],
    watchlist: [
        "0x3a670179bdece7eb4f570e30ee9d560f7ff4fac3",
        "0xd501d4e381491f64274cc65fdec32b47264a2422",
        "0x304d69c5e03e030d6b298C0d0467baeb310f1f68",
    ],
    internalName: "lisk",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.lisk.contracts,
        limitOrder: {
            address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        },
        nftManager: {
            address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        multicall2: {
            address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        },
        multicall3: {
            address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        },
    },
});

const mainnet = makeConfig({
    ...chains.mainnet,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    sortIndex: 0,
    launchTime: 1688997600,
    blockTimeSeconds: 15,
    safeReorgDistance: 90000,
    logoUrl: "https://assets.oku.trade/chains/ethereum-logo.webp",
    morpho: {
        deployBlock: 13977148,
        morpho: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
        mmFactory11: "0x1897A8997241C1cD4bD0698647e4EB7213535c24",
        mmFactory10: "0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101",
    },
    externalId: {
        zerion: "ethereum",
        debank: "eth",
        cowswap: "mainnet",
        tenderly: "true"
    },
    rpcUrls: {
        default: {
            http: ["https://eth.drpc.org"],
            webSocket: ["wss://eth.drpc.org"],
        },
    },
    markets: {
        airswap: true,
        kyberswap: "ethereum",
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        propellerswap: "ethereum",
        openocean: "eth",
        zeroex: true,
        cowswap: "mainnet",
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet",
            routerAddress: "0x80226fc0Ee2b096224EeAc085Bb9a8cba1146f7D",
            chainSelector: 5009297550715157269n,
            tokenAdminRegistry: "0xb22764f98dD05c789929716D677382Df22C05Cb6",
        },
        rhinofi: "ETHEREUM",
        stargate: {
            endpointID: 30101,
            blockConfirmations: 15,
            tokens: [
                {
                    name: "ETH",
                    type: "POOL",
                    id: 13,
                    address: "0x77b2043768d28E9C9aB44E1aBfC95944bcE57931",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0xc026395860Db2d07ee33e05fE50ed7bD583189C7",
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0x933597a323Eb81cAe705C5bC29985172fd5A3973",
                },
                {
                    name: "METIS",
                    id: 17,
                    address: "0xcDafB1b2dB43f366E48e6F614b8DCCBFeeFEEcD3",
                },
                {
                    name: "mETH",
                    id: 22,
                    address: "0x268Ca24DAefF1FaC2ed883c598200CcbB79E931D",
                },
            ],
        },
        wanbridge: {
            requiredConfirmations: 6,
        },
        wormhole: {
            chain: "Ethereum",
            timeToFinalize: 975,
        },
    },
    oracles: {
        cmc: {
            slug: "ethereum",
            native: "ethereum",
        },
        coingecko: {
            slug: "ethereum",
            native: "ethereum",
        },
        dexscreener: "ethereum",
    },
    uniswap: {
        deployBlock: 12369621,
        poolFactory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        multicall2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
        proxyAdmin: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
        tickLens: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
        swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        swapRouter02: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        NFTDescriptor: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
        nonfungibleTokenPositionDescriptor: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        v3Migrator: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
        uniswapV3Staker: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
        positionsNFT: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        topNativePool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
        positionsNFTDeployBlock: 12369651,
        universalRouter: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B",
        wrappedNativeAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        wbtcAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    },
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        limitOrderRegistryDeployBlock: 17429412,
        pricing: {
            nativeWrappedToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            nativeWrappedName: "WETH",
            nativeQuotePools: [
                {
                    address: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                    blockCreated: 12369621,
                },
            ],
            pools: [
                "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                "0x11b815efb8f581194ae79006d24e0d814b7697f6",
                "0x60594a405d53811d3bc4766596efd80fd545a270",
                "0x3416cf6c708da44db2624d63ea0aaef7113527c6",
                "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
                "0x4e68ccd3e89f51c3074ca5072bbac773960dfa36",
                "0x69d91b94f0aaf8e8a2586909fa77a5c2c89818d5",
                "0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf",
                "0xe0554a476a092703abdb3ef35c80e0d76d32939f",
                "0x5777d92f208679db4b9778590fa3cab3ac9e2168",
                "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8",
                "0x99ac8ca7087fa4a2a1fb6357269965a2014abc35",
                "0x6c6bc977e13df9b0de53b251522280bb72383700",
                "0x9a772018fbd77fcd2d25657e5c547baff3fd7d16",
                "0x6f48eca74b38d2936b02ab603ff4e36a6c0e3a77",
                "0xe859041c9c6d70177f83de991b9d757e13cea26e",
                "0x3328ca5b535d537f88715b305375c591cf52d541",
                "0x353bb62ed786cdf7624bd4049859182f3c1e9e5d",
                "0x9a834b70c07c81a9fcd6f22e842bf002fbffbe4d",
                "0x9db9e0e53058c89e5b94e29621a205198648425b",
                "0xb07fe2f407f971125d4eb1977f8acee8846c7324",
                "0x84383fb05f610222430f69727aa638f8fdbf5cc1",
                "0xb0f4a77bde7fee134265307c5cc19abff0ba409b",
                "0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52",
                "0x92ab871abb9d567aa276b2ce58d0203d84e0181e",
                "0x735a26a57a0a0069dfabd41595a970faf5e1ee8b",
                "0x7bea39867e4169dbe237d55c8242a8f2fcdcc387",
                "0x5e35c4eba72470ee1177dcb14dddf4d9e6d915f4",
                "0x07a6e955ba4345bae83ac2a6faa771fddd8a2011",
                "0xfad57d2039c21811c8f2b5d5b65308aa99d31559",
                "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
                "0x8c54aa2a32a779e6f6fbea568ad85a19e0109c26",
                "0xe05e653453f733786f2dabae0ffa1e96cfcc4b25",
                "0x094a28b22e1b4218d590ea6fa916b3c5e670ba55",
                "0xdd005650ac6805457f4fa6ee1816813ce815e914",
                "0x015769601d8d4879c0e193eeab31f10cf03c9ea9",
                "0xc5af84701f98fa483ece78af83f11b6c38aca71d",
                "0x48da0965ab2d2cbf1c17c09cfb5cbe67ad5b1406",
                "0x4e0924d3a751be199c426d52fb1f2337fa96f736",
                "0x94b4ba66da4faa4fe09e17c0a8810d2afee70163",
                "0x92995d179a5528334356cb4dc5c6cbb1c068696c",
                "0x18d96b617a3e5c42a2ada4bc5d1b48e223f17d0d",
                "0x9febc984504356225405e26833608b17719c82ae",
                "0x2cb162433e0cabac4825e6d198a125829156cc92",
                "0xc2a856c3aff2110c1171b8f942256d40e980c726",
                "0x6279653c28f138c8b31b8a0f6f8cd2c58e8c1705",
                "0x97e7d56a0408570ba1a7852de36350f7713906ec",
                "0x216fb666dd61600e74f7b2ca25a38aa99db1a4e9",
                "0x7270233ccae676e776a659affc35219e6fcfbb10",
                "0xff29d3e552155180809ea3a877408a4620058086",
                "0xcb0c5d9d92f4f2f80cce7aa271a1e148c226e19d",
                "0x486263aa56d1b49d78dea765754164b880c99954",
                "0x25c0edc51909fc20429c6ece9b8f4fbb5af13878",
                "0x14036bbda496e39dc3db6025fe858431c1ddadb1",
                "0x16980c16811bde2b3358c1ce4341541a4c772ec9",
                "0xdf50fbde8180c8785842c8e316ebe06f542d3443",
                "0x298b7c5e0770d151e4c5cf6cca4dae3a3ffc8e27",
                "0x3aaf77ba7da262e34dffb9b10fc6777bfda79ab7",
                "0xd6a309f49cf79542cea91df7b334eb4bd29aa0d7",
                "0xdb02d6827220475ece91893255fdf57bed51aee3",
                "0xa19f4ebe4cbb3c9b57c16eb4dfc7a52d46a5e891",
                "0x6c4ab1907805adcb0b7ae911a5d1b0b99d608b3c",
                "0x19f83460e387f1b01f94b85c2532ebc15b0b712e",
                "0xaae63df9a86f9a682507c922db38fae5e777a606",
                "0x7ec0b75a98997c927ace6d87958147a105147ea0",
                "0x868b7bbbfe148516e5397f23982923686182c2d2",
                "0xd73ea444eef6faf5423b49be3448e94ed214f1ec",
                "0xbb2e5c2ff298fd96e166f90c8abacaf714df14f8",
                "0x1a349a3397a8431eed8d94a05f88f9001117fcaa",
                "0x85b5a7dc1630f9465d8409e2ac53313b70a71b9c",
                "0x3067c3054b4a605f9e327bad82d9ba6049fe76a0",
                "0x00cef0386ed94d738c8f8a74e8bfd0376926d24c",
                "0x75bff91af9878f5ec3fede9b52d51159afc2430a",
                "0xa5ef2a6bbe8852bd6fd2ef6ab9bb45081a6f531c",
                "0xb06e7ed37cfa8f0f2888355dd1913e45412798c5",
                "0xfe0df74636bc25c7f2400f22fe7dae32d39443d2",
                "0x07f3d316630719f4fc69c152f397c150f0831071",
                "0x38b6e47a97f4680a983eadc8e510c37d73967c29",
                "0xd3ca35355106cb8bc5fd7c534275509673319d83",
                "0x020c349a0541d76c16f501abc6b2e9c98adae892",
                "0x9275e26bfb23b18bebb07bff45e85110f60963e9",
                "0xd5ad5ec825cac700d7deafe3102dc2b6da6d195d",
                "0x537a0a5654045c52ec45c4c86ed0c1ffe893809d",
                "0xc4d9c69962ddb2388e1532279704fc6eb199c963",
                "0x813b22032e94667cc0f854cc7241fc5a309c45bc",
                "0xe081eeab0adde30588ba8d5b3f6ae5284790f54a",
                "0x5c28b5f471d97f53fcf132f16f9f3c0c888c1a01",
                "0x9445bd19767f73dcae6f2de90e6cd31192f62589",
                "0xa80964c5bbd1a0e95777094420555fead1a26c1e",
                "0xb8c05b7ca698f7cfd9b8a08f177e0ac5f2696bf9",
                "0xd0af1981f52146a6939385451daea0726e13a484",
                "0xa109209a2380fd4454b0364c4689f6de18ad18cc",
                "0x5f3c621d810c7c929fb440e03dadf8621fe61ab5",
                "0x141df9a608856d1651c9a3c27b39960ff0418a12",
                "0x08f68110f1e0ca67c80a24b4bd206675610f445d",
                "0x39529e96c28807655b5856b3d342c6225111770e",
                "0x391e8501b626c623d39474afca6f9e46c2686649",
                "0xbe3cd9b751360a8030770425acf947c8cb4cab38",
                "0xbd5fdda17bc27bb90e37df7a838b1bfc0dc997f5",
                "0x3470447f3cecffac709d3e783a307790b0208d60",
            ],
        },
    },
    defaultPool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
    defaultToken0: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    defaultToken1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    tokenList: [
        { symbol: "DAI", address: "0x6b175474e89094c44da98b954eedeac495271d0f" },
        { symbol: "WBTC", address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
        { symbol: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
        { symbol: "WETH", address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" },
        { symbol: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
    ],
    stables: [
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "0x0000000000085d4780B73119b644AE5ecd22b376",
        "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
        "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "0x853d955acef822db058eb8505911ed77f175b99e",
        "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
        "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3",
        "0x1a13f4ca1d028320a707d99520abfefca3998b7f",
    ],
    watchlist: [
        "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
        "0x4e68ccd3e89f51c3074ca5072bbac773960dfa36",
        "0x99ac8ca7087fa4a2a1fb6357269965a2014abc35",
        "0xcbcdf9626bc03e24f779434178a73a0b4bad62ed",
        "0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8",
        "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
        "0x3416cf6c708da44db2624d63ea0aaef7113527c6",
        "0x5777d92f208679db4b9778590fa3cab3ac9e2168",
        "0x290a6a7460b308ee3f19023d2d00de604bcf5b42",
        "0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf",
        "0xa3f558aebaecaf0e11ca4b2199cc5ed341edfd74",
        "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
        "0x11b815efb8f581194ae79006d24e0d814b7697f6",
        "0x4585fe77225b41b697c938b018e2ac67ac5a20c0",
        "0x4e0924d3a751be199c426d52fb1f2337fa96f736",
        "0x9a772018fbd77fcd2d25657e5c547baff3fd7d16",
        "0x11950d141ecb863f01007add7d1a342041227b58",
        "0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa",
        "0x60594a405d53811d3bc4766596efd80fd545a270",
        "0x840deeef2f115cf50da625f7368c24af6fe74410",
        "0xe8c6c9227491c0a8156a0106a0204d881bb7e531",
        "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8",
        "0xc5af84701f98fa483ece78af83f11b6c38aca71d",
        "0x7bea39867e4169dbe237d55c8242a8f2fcdcc387",
    ],
    internalName: "ethereum",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.mainnet.contracts,
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        },
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        },
        weth9: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        },
        multicall2: {
            address: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const manta = makeConfig({
    ...chains.manta,
    name: "Manta Pacific",
    launchTime: 1709910000,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 2,
    sortIndex: 13,
    logoUrl: "https://assets.oku.trade/chains/manta-logo.png",
    safeReorgDistance: 90000,
    externalId: {},
    morpho: {},
    markets: {
        openocean: "manta",
    },
    bridges: {
        rhinofi: "MANTA",
    },
    oracles: {
        cmc: {
            slug: "manta-network",
            native: "ethereum",
        },
        coingecko: {
            slug: "manta-pacific",
            native: "ethereum",
        },
        dexscreener: "manta",
    },
    uniswap: {
        deployBlock: 1191705,
        poolFactory: "0x06D830e15081f65923674268121FF57Cc54e4e23",
        permit2: "0x83986Ff655A54ee061F6B7F476B92f4Fed111B93",
        multicall2: "0x52dFC0D9960F11A9Ca9FF616e791B91188446a60",
        tickLens: "0xC94Fb2D13587b0b5af78094933490B35E004eAbE",
        nonfungiblePositionManager: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD",
        positionsNFT: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD",
        positionsNFTDeployBlock: 1191836,
        universalRouter: "0x42Bff1f6b647462fcD8c28a488Be9C9988830ef6",
        wrappedNativeAddress: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb",
        wethAddress: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
        wbtcAddress: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6",
    },
    oku: {
        limitOrderRegistry: "0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C",
        limitOrderRegistryDeployBlock: 1198851,
        pricing: {
            nativeWrappedToken: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xc108d8702d42bae7b3d7d8209a9b40613a7b1d37",
    defaultToken0: "0x0dc808adce2099a9f62aa87d9670745aba741746",
    defaultToken1: "0xb73603c5d87fa094b7314c74ace2e64d165016fb",
    tokenList: [
        { symbol: "WETH", address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746" },
        { symbol: "USDC", address: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb" },
        { symbol: "MANTA", address: "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5" },
        { symbol: "USDT", address: "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f" },
        { symbol: "WBTC", address: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6" },
    ],
    stables: [
        "0xb73603C5d87fA094B7314C74ACE2e64D165016fb",
        "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f",
    ],
    watchlist: [
        "0x7881dc8e59e644517a95a9687a6b58b86d98db78",
        "0xc108d8702d42bae7b3d7d8209a9b40613a7b1d37",
        "0x060f2babc09826687be9cbf5c7ede3b3cd00dd78",
        "0xbfca3e002acbcea2f9d48a87cf545cb4344f9a3e",
        "0x9a70668cf02902b53c24f7d21762d19dfb9b69a6",
        "0xa6f04e80aee9e491539cdf0cec8c2099df46816f",
        "0x1cfd505f8a79be3a4fd9305239991f480e5fdc7b",
        "0x775eac394b56cfad02d963c9c3c9cd2e425dab4e",
        "0x6e32805add5f5255c22d8f0125a0c7d351926bc3",
        "0x5bedc5d1e1d0b32caca78db23af71126b6fe26b6",
    ],
    internalName: "manta",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.manta.contracts,
        limitOrder: {
            address: "0xFE83E1DDa189D71093f2a716A4D01d591d6Ca66C",
        },
        nftManager: {
            address: "0xA4F2Db71348697C65A64a146F709C73030C2ebcD",
        },
        weth9: {
            address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
        },
        multicall2: {
            address: "0x52dFC0D9960F11A9Ca9FF616e791B91188446a60",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const mantle = makeConfig({
    ...chains.mantle,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 2,
    launchTime: 1720101600,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/mantle-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    morpho: {},
    markets: {
        openocean: "mantle",
        zeroex: true,
        icecreamswap: true
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-mantle-1",
            routerAddress: "0x670052635a9850bb45882Cb2eCcF66bCff0F41B7",
            chainSelector: 1556008542357238666n,
            tokenAdminRegistry: "0x000A744940eB5D857c0d61d97015DFc83107404F"
        },
        stargate: {
            endpointID: 30181,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    id: 13,
                    address: "0x4c1d3Fc3fC3c177c3b633427c2F769276c547463",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0xAc290Ad4e0c891FDc295ca4F0a6214cf6dC6acDC",
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0xB715B85682B731dB9D5063187C450095c91C57FC",
                },
                {
                    name: "mETH",
                    id: 22,
                    address: "0xF7628d84a2BbD9bb9c8E686AC95BB5d55169F3F1",
                },
            ],
        },
        wormhole: {
            chain: "Mantle",
            timeToFinalize: 1080,
        }
    },
    oracles: {
        cmc: {
            slug: "mantle",
            native: "mantle",
        },
        coingecko: {
            slug: "mantle",
            native: "mantle",
        },
        dexscreener: "mantle",
    },
    uniswap: {
        deployBlock: 63795918,
        poolFactory: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        permit2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        multicall2: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        tickLens: "0x38EB9e62ABe4d3F70C0e161971F29593b8aE29FF",
        nonfungiblePositionManager: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
        positionsNFT: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
        positionsNFTDeployBlock: 63796102,
        universalRouter: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        wrappedNativeAddress: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
        wrappedNativeSymbol: "WMNT",
        wrappedNativeName: "Wrapped MNT",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "MNT",
    },
    token: {
        usdcAddress: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
        wethAddress: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
    },
    oku: {
        limitOrderRegistry: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        limitOrderRegistryDeployBlock: 63839894,
        pricing: {
            nativeWrappedToken: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
            nativeWrappedName: "MNT",
        },
    },
    defaultPool: "0x076eb72e74c16b208c692eeab3750978d76b8f28",
    defaultToken0: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
    defaultToken1: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
    tokenList: [
        { symbol: "WMNT", address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8" },
        { symbol: "USDC", address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9" },
    ],
    stables: [
        "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
        "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
    ],
    watchlist: [
        "0x086F766b336DFB0f705Dc030dB01993b22D81266",
        "0x076eb72E74C16b208c692EEAB3750978D76B8F28",
        "0xFc60a4d05ac8C93F62276e046Ad5a098f5C7820a",
        "0x4cdFc22bF05209de87Ee564746Dc7E5174631d2b",
        "0x48EF5640E71001CaC842f5627A0bfec1EF09DeB7",
        "0x8CFee38ab8b8f4BC2ff662E8cc8bDfb0439C9D2C",
    ],
    internalName: "mantle",
    nativeLogoUrl: "https://assets.oku.trade/natives/mnt.png",
    contracts: {
        ...chains.mantle.contracts,
        limitOrder: {
            address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
        },
        nftManager: {
            address: "0x5911cB3633e764939edc2d92b7e1ad375Bb57649",
        },
        weth9: {
            address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
        },
        multicall2: {
            address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const metal = makeConfig({
    ...chains.metalL2,
    blockTimeSeconds: 2,
    launchTime: 1733882663,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/metal-logo.png",
    safeReorgDistance: 90000,
    externalId: {},
    morpho: {},
    markets: {},
    bridges: {},
    oracles: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 10810498,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 10810692,
        universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006",
    },
    oku: {
        limitOrderRegistry: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        limitOrderRegistryDeployBlock: 10815725,
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xC06B6d6242E84c96AeE28C7FcfE48D2c9909e37B",
    defaultToken0: "0x4200000000000000000000000000000000000006",
    defaultToken1: "0x51E85d70944256710cb141847F1a04f568C1Db0e",
    tokenList: [
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "MTL", address: "0xBCFc435d8F276585f6431Fc1b9EE9A850B5C00A9" },
        { symbol: "USDC", address: "0x51E85d70944256710cb141847F1a04f568C1Db0e" },
    ],
    stables: [
        "0x51E85d70944256710cb141847F1a04f568C1Db0e",
        "0xb91CFCcA485C6E40E3bC622f9BFA02a8ACdEeBab",
    ],
    watchlist: ["0xC06B6d6242E84c96AeE28C7FcfE48D2c9909e37B"],
    internalName: "metal",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.metalL2.contracts,
        limitOrder: {
            address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const moonbeam = makeConfig({
    ...chains.moonbeam,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    sortIndex: 12,
    launchTime: 1696341600,
    blockTimeSeconds: 30,
    logoUrl: "https://assets.oku.trade/chains/moonbeam-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        debank: "mobm",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        icecreamswap: true
    },
    bridges: {
        wanbridge: {
            requiredConfirmations: 30,
        },
        wormhole: {
            chain: "Moonbeam",
            timeToFinalize: 24,
        },
    },
    oracles: {
        cmc: {
            slug: "moonbeam",
            native: "moonbeam",
        },
        coingecko: {
            slug: "moonbeam",
            native: "moonbeam",
        },
        dexscreener: "moonbeam",
    },
    uniswap: {
        deployBlock: 3340452,
        poolFactory: "0x28f1158795A3585CaAA3cD6469CD65382b89BB70",
        permit2: "0xe96e30e92e01dc8a880f701b2d2160f93da18df7",
        multicall2: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2",
        tickLens: "0x1f4F7b041895D9eB1A79be0896AF3E68e4160010",
        quoter: "0x48af91cdcad8ffdd7a8d4cdf73c16cb0632d3d17",
        swapRouter02: "0xc507e22ba3140dc0a79fdf27e03c98aa20f3ee66",
        NFTDescriptor: "0x041b81cb4d223d8e70ac96c0d103f8a956ed4514",
        nonfungibleTokenPositionDescriptor: "0x921c55AE486e63D16dbfbE216573A21aeB684c02",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71",
        v3Migrator: "0x76776b10d782a1d194fbfc92d4b01db1ce1eeb4b",
        positionsNFT: "0x9036D0DcB5a059C9371B05D508f0072Df773854e",
        positionsNFTDeployBlock: 3340476,
        universalRouter: "0x1F56F4e1648e96633c7FE79002036E967403CDfF",
        wrappedNativeAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
        wrappedNativeSymbol: "WGLMR",
        wrappedNativeName: "Wrapped GLMR",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "GLMR",
    },
    token: {
        wethAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
        usdcAddress: "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
    },
    oku: {
        pricing: {
            nativeWrappedToken: "0xacc15dc74880c9944775448304b263d191c6077f",
            nativeWrappedName: "WGLMR",
        },
    },
    defaultPool: "0xba66370d96a9d61afa66283900b78c1f6ed02782",
    defaultToken0: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
    defaultToken1: "0xacc15dc74880c9944775448304b263d191c6077f",
    tokenList: [
        { symbol: "WETH", address: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed" },
        { symbol: "USDC", address: "0x931715fee2d06333043d11f658c8ce934ac61d0c" },
    ],
    stables: [
        "0xffffffff7d2b0b761af01ca8e25242976ac0ad7d",
        "0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b",
        "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
        "0x765277eebeca2e31912c9946eae1021199b39c61",
        "0x06e605775296e851ff43b4daa541bb0984e9d6fd",
        "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
        "0x8e70cd5b4ff3f62659049e74b6649c6603a0e594",
    ],
    watchlist: [
        "0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29",
        "0xba66370d96a9d61afa66283900b78c1f6ed02782",
        "0x19156c03a6fd894beb4fa6a828e854d3a4bed372",
        "0xCb1f81BEf053d3C8adfFd37D2da84Fcc3BcC9954",
        "0x53c1341cd81562c1b1a7562fff712CD7be95D51e",
        "0x45bD0680bDFd180341A6dE806Aa4637f9AfBFc39",
    ],
    internalName: "moonbeam",
    nativeLogoUrl: "https://assets.oku.trade/natives/glmr.png",
    contracts: {
        ...chains.moonbeam.contracts,
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        },
        nftManager: {
            address: "0x9036d0dcb5a059c9371b05d508f0072df773854e",
        },
        weth9: {
            address: "0xacc15dc74880c9944775448304b263d191c6077f",
        },
        multicall2: {
            address: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const nibiru = makeConfig({
    ...chains.nibiru,
    name: "Nibiru",
    blockTimeSeconds: 2,
    launchTime: 1746663816,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/nibiru-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 23658063,
        poolFactory: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        tickLens: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        nonfungiblePositionManager: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
        positionsNFT: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
        positionsNFTDeployBlock: 23658348,
        universalRouter: "0xA7E6cB0A6B1BE8b779022A6aFcb097cF0d3Ff4A2",
        wrappedNativeAddress: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
        wrappedNativeSymbol: "WNIBI",
        wrappedNativeName: "Wrapped NIBI",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "NIBI",
    },
    token: {
        wethAddress: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
        usdcAddress: "0x0829F361A05D993d5CEb035cA6DF3446b060970b",
    },
    oku: {
        limitOrderRegistry: "0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02",
        limitOrderRegistryDeployBlock: 19842992,
        pricing: {
            nativeWrappedToken: "0x1429B38e58b97de646ACd65fdb8a4502c2131484",
            nativeWrappedName: "NIBI",
        },
    },
    defaultPool: "0xd8F82b8d2e82265aC25d8d4Ef3cA47917693D3d5",
    defaultToken0: "0x0829F361A05D993d5CEb035cA6DF3446b060970b",
    defaultToken1: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
    tokenList: [
        { symbol: "WNIBI", address: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97" },
        { symbol: "USDC.e", address: "0x0829F361A05D993d5CEb035cA6DF3446b060970b" },
    ],
    stables: ["0x0829F361A05D993d5CEb035cA6DF3446b060970b"],
    watchlist: [],
    internalName: "nibiru",
    nativeLogoUrl: "https://assets.oku.trade/natives/nibi.svg",
    contracts: {
        ...chains.nibiru.contracts,
        limitOrder: {
            address: "0x6E1293993C71Cb2E6b2Da8559f6d7Dc1fdb3AE02",
        },
        nftManager: {
            address: "0xEFdE184f4b5d79f7c3b7Efc0388d829ff9af0050",
        },
        weth9: {
            address: "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
        },
        multicall2: {
            address: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const optimism = makeConfig({
    ...chains.optimism,
    name: "Optimism",
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 0.5,
    launchTime: 1688997600,
    sortIndex: 2,
    logoUrl: "https://assets.oku.trade/chains/optimism-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        zerion: "optimism",
        debank: "op",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        kyberswap: "optimism",
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        openocean: "optimism",
        zeroex: true,
        icecreamswap: true,
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-optimism-1",
            routerAddress: "0x3206695CaE29952f4b0c22a169725a865bc8Ce0f",
            chainSelector: 3734403246176062136n,
            tokenAdminRegistry: "0x657c42abE4CD8aa731Aec322f871B5b90cf6274F",
        },
        rhinofi: "OPTIMISM",
        stargate: {
            endpointID: 30111,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    id: 13,
                    address: "0xe8CDF27AcD73a434D661C84887215F7598e7d0d3",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0",
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0x19cFCE47eD54a88614648DC3f19A5980097007dD",
                },
            ],
        },
        wanbridge: {
            requiredConfirmations: 1,
        },
        wormhole: {
            chain: "Optimism",
            timeToFinalize: 1026,
        },
    },
    oracles: {
        cmc: {
            slug: "optimism-ethereum",
            native: "ethereum",
        },
        coingecko: {
            slug: "optimistic-ethereum",
            native: "ethereum",
        },
        dexscreener: "optimism",
    },
    oku: {
        limitOrderRegistryDeployBlock: 105276132,
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        bracket: "0x1D718B430aCF5E385024162Da9Cd27bed7c02EC1",
        bracketDeployBlock: 133454514,
        stopLimit: "0x03d58de2EE76515340F8Ac0dFCccf9BaEd4d39d5",
        stopLimitDeployBlock: 133454517,
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "WETH",
            nativeQuotePools: [
                {
                    blockCreated: 0,
                    address: "0x85149247691df622eaf1a8bd0cafd40bc45154a9",
                },
            ],
            pools: [
                "0x85149247691df622eaf1a8bd0cafd40bc45154a9",
                "0xc858a329bf053be78d6239c4a4343b8fbd21472b",
                "0x1d751bc1a723accf1942122ca9aa82d49d08d2ae",
                "0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0",
                "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36",
                "0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6",
                "0xb589969d38ce76d3d7aa319de7133bc9755fd840",
                "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31",
                "0x252cbdff917169775be2b552ec9f6781af95e7f6",
                "0xf1f199342687a7d78bcc16fce79fa2665ef870e1",
                "0xadb35413ec50e0afe41039eac8b930d313e94fa4",
                "0x100bdc1431a9b09c61c0efc5776814285f8fb248",
                "0x6432037739ccd0201987472604826097b55813e9",
                "0x9595edbefc82535a02312a4c42cc91e6e9df8f67",
                "0x9438a9d1bdeece02ed4431ac59613a128201e0b9",
                "0x8323d063b1d12acce4742f1e3ed9bc46d71f4222",
                "0xf3f3433c3a97f70349c138ada81da4d3554982db",
                "0xb2ac2e5a3684411254d58b1c5a542212b782114d",
                "0x2e80d5a7b3c613d854ee43243ff09808108561eb",
                "0x8eda97883a1bc02cf68c6b9fb996e06ed8fdb3e5",
                "0x98d9ae198f2018503791d1caf23c6807c135bb6b",
                "0x827f0a2a4376bc26729f398b865f424dc8456841",
                "0x6168ec836d0b1f0c37381ec7ed1891a412872121",
                "0xdd0c6bae8ad5998c358b823df15a2a4181da1b80",
                "0x6f32061f59a21086c334d0d45f804089ce374aaf",
                "0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2",
                "0xf74fca1611a695a81fc1f7052aa5ff2549558ab3",
                "0x702b283b06fa4e49ef155597945f2ba4b717e19c",
                "0x7b17fc02d85cb5589ec1d1c3db507dc557590c79",
                "0x766854992bd5363ebeeff0113f5a5795796befab",
                "0xae2d9288be0587c2097ec46db7686ac2481f896e",
                "0x793aca81b02f9e8e073047d2347da0c16e5ecd92",
                "0xa1658249bcc69b0ab491cdc0449c0b0ea796de8d",
                "0xa7bb0d95c6ba0ed0aca70c503b34bc7108589a47",
                "0xf44acaa38be5e965c5ddf374e7a2ba270e580684",
                "0x1a172713bdf4b9c846028e43081e73ca90a399dd",
                "0xc50958e82c36b8d6d0baf555f90b76b0a28ceeeb",
                "0xf046d8b7365d8abe5a8f8301c669b4b5284fc21d",
                "0x84eb2c5c23999b3ddc87be10f15ccec5d22c7d97",
                "0x95d7d146ae40d4822c2750276b54b6eed530d374",
                "0x815ae7bf44dda74ed9274377ed711efc8b567911",
                "0x0843e0f56b9e7fdc4fb95fabba22a01ef4088f41",
                "0x25e412992634b93a025e2a538c53222a8c62e2d6",
                "0xbd93951d2e9ec615f9940887559b4317032d98d0",
                "0xc62d5ff62276eeda3c2d24f6b7e384355ec52a5e",
                "0xba335a3b1f2fb04e66916c664459b7f74378ec32",
                "0xd9b160620447d9a9a6ca90c0450f5490e5219257",
                "0x2df05e4cdbd758cb1a99a34bb0d767e040d6b078",
                "0x94ad9a19126ebb02dda874237e5820fd4943f5de",
                "0x64750f4098a7f98352f7cd5797f421ceb8d94f64",
                "0xb11d715bd9e3fd4fd07401dc551d516780c12449",
                "0xaee0a6d42d10491d36e6a1b922741933609ac1be",
                "0xcf2aebb91fec906f51fc11cd57035a09d8b16965",
                "0xc0f184c6c4832b3ed861bd5b05722792ffa64abd",
                "0x3154dc51bd6bb55213bd0e676df44cc3327ce75c",
                "0xd9660a959e00fec8b256ef6bf71c0f545585eba0",
                "0xc22662b904d98e45f89e030201355c3e372cc819",
                "0x652a810c603faef61ff5d873e52ad7f1d70d6014",
                "0x85841dab003d284d7aac51fc77cfa0d37d912825",
                "0x2024c394741a5301e89a375b7bf52f865bc166fd",
                "0x4983691a26d55eb9e18d2e12e3b770cdd3f76a5f",
                "0xe1a0c25464a9d3b1426b552416bf2a02865ed461",
                "0xba9bbd07331f0185701b61be6379ac49d50ae327",
                "0xd6101cda1a51924e249132cbcae82bfcd0a91fbc",
                "0xba213008fe93b3591e439f3b2aa51b3e4a2bd7c7",
                "0x6408b4846dbe71e5b4b095b4fdee5ca58447f1c8",
                "0x22bbdcfc90cabc569c22bf908877b7cc3e2c4684",
                "0xeb1817b708415f4f78c5f0c99cbbd6a3a899fa6d",
                "0x2582886f65ea71ecd3cffd12089c55fb9c75e9db",
                "0x6ecb7d18abda6ae794035490a4decc329d0f23bb",
                "0x4ad43a229a55d9453ad1ddd9aea986d58faab8d4",
                "0x90b9504cff7af9d787799dc93ded9aed0a1996d7",
                "0x7628784d2c5d47fcd5479ba812343b1aabad6484",
                "0x44b17031465c53706af85c05423d26e9cfa13a1b",
                "0xc366ec578789d5a802ecb966f69bbf8441b7e112",
                "0xb018e5955c561a8af0f49faf60d587b7f8f1687b",
                "0x2459023a29d3b07711b8b916d86aa7e8a14747af",
                "0xe7ee03b72a89f87d161425e42548bd5492d06679",
                "0xe588add6432dc1a9c717d37dbce858a6ded48656",
                "0xbd8ac2a59551684b801885e4ea1c746c3fa92a34",
                "0x1682dcd12f6e291de6874dcb0a89ee50465f43bd",
                "0xac721d2e27ca148f505b5106fc95e594c78ace5b",
                "0x3d44cc727fe2f603e4929be164c70edb3b498b5f",
                "0xe229ce1cdbea9983362ca29f0f0b2c70bb2dacdf",
                "0xea6018f42f816201c933bbb7a6027725937a0895",
                "0x26e7fed14a97e0c482a302237971cf1b04f6d3e9",
                "0xd1788a1109bd36ab296ac104a67bf8dc48673948",
                "0x61775175905a0f3f7705a6f010d918b6acda6e00",
                "0xcc8a87a17208fe2e96168ca3fa9412a968c5b092",
                "0xfe4860375d8186770224534b70241e9a197aa4c7",
                "0x514810e7db31cf118e6bacb3992bbe37b8d2b9b3",
                "0xca93e9077c48cc7ab817390edd32f85ec6892797",
                "0xc6f5e7e95e9bd69e57bbcdc3791332de9c89c8f4",
                "0x610c0e8963449d62bae223ed6af042c21241d54d",
                "0x461cd8b232e24ee5acc51dc43c186ec58f86be47",
                "0xd4fed0bab141441d56521271d0a5747fd42062be",
                "0x0bb50d3e479e4682558fdb86f41a205e2c035ae5",
                "0x83de573f16e7cf978d3f4bc61f080ac392825fb3",
                "0x2b5861fd7fd65b57de0009ec0d9045ba49aa5416",
                "0x40a6d70506ba0e5e361e3913ca79a3282b3031b0",
            ],
        },
    },
    uniswap: {
        deployBlock: 0,
        poolFactory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        multicall2: "0x266557a864680a1401a3506c0eb72934bd13bf59",
        proxyAdmin: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
        tickLens: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
        swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        swapRouter02: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        NFTDescriptor: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
        nonfungibleTokenPositionDescriptor: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        v3Migrator: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
        uniswapV3Staker: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
        positionsNFT: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        topNativePool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
        positionsNFTDeployBlock: 0,
        universalRouter: "0xb555edF5dcF85f42cEeF1f3630a52A108E55A654",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
        wethAddress: "0x4200000000000000000000000000000000000006",
        wbtcAddress: "0x68f180fcce6836688e9084f035309e29bf0a2095",
    },
    defaultPool: "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36",
    defaultToken0: "0x4200000000000000000000000000000000000042",
    defaultToken1: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
    tokenList: [
        { symbol: "USDT", address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58" },
        { symbol: "DAI", address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1" },
        { symbol: "USDC", address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607" },
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "OP", address: "0x4200000000000000000000000000000000000042" },
    ],
    stables: [
        "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
        "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
        "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
        "0x8aE125E8653821E851F12A49F7765db9a9ce7384",
        "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    ],
    watchlist: [
        "0xb589969d38ce76d3d7aa319de7133bc9755fd840",
        "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36",
        "0xdd0c6bae8ad5998c358b823df15a2a4181da1b80",
        "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31",
        "0x0bb50d3e479e4682558fdb86f41a205e2c035ae5",
        "0x6168ec836d0b1f0c37381ec7ed1891a412872121",
        "0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2",
        "0xb2ac2e5a3684411254d58b1c5a542212b782114d",
        "0x68f5c0a2de713a54991e01858fd27a3832401849",
        "0x73b14a78a0d396c521f954532d43fd5ffe385216",
        "0x85149247691df622eaf1a8bd0cafd40bc45154a9",
        "0xc858a329bf053be78d6239c4a4343b8fbd21472b",
        "0xf1f199342687a7d78bcc16fce79fa2665ef870e1",
        "0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6",
        "0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c",
        "0x85c31ffa3706d1cce9d525a00f1c7d4a2911754c",
        "0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05",
        "0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0",
        "0xaefc1edaede6adadcdf3bb344577d45a80b19582",
        "0x0392B358CE4547601BEFA962680BEDE836606AE2",
        "0x36E42931A765022790B797963E42C5522D6B585A",
        "0x03A9DC118B231480058E7A3B051042EC83663794",
        "0x95D7D146AE40D4822C2750276B54B6EED530D374",
        "0x7f1c919a92bce8790a85d6360b85cf21b997a6b5",
        "0x1a54ae9f662b463f8d432482975c17e51518b50d",
        "0xff7fbdf7832ae524deda39ca402e03d92adff7a5",
        "0x55bc964fe3b0c8cc2d4c63d65f1be7aef9bb1a3c",
        "0x535541f1aa08416e69dc4d610131099fa2ae7222",
        "0xadb35413ec50e0afe41039eac8b930d313e94fa4",
        "0x730691cdac3cbd4d41fc5eb9d8abbb0cea795b94",
    ],
    internalName: "optimism",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.optimism.contracts,
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        },
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        multicall2: {
            address: "0x266557a864680a1401a3506c0eb72934bd13bf59",
        },
        multicall3: { address: "0xcA11bde05977b3631167028862bE2a173976CA11" },
    },
});

const polygon = makeConfig({
    ...chains.polygon,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 2,
    launchTime: 1688997600,
    sortIndex: 3,
    logoUrl: "https://assets.oku.trade/chains/polygon-logo.webp",
    safeReorgDistance: 90000,
    externalId: {
        zerion: "polygon",
        debank: "matic",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        airswap: true,
        kyberswap: "polygon",
        oneinch: {
            spender: "0x111111125421ca6dc452d289314280a0f8842a65"
        },
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        propellerswap: "polygon",
        openocean: "polygon",
        zeroex: true,
        icecreamswap: true
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "polygon-mainnet",
            routerAddress: "0x849c5ED5a80F5B408Dd4969b78c2C8fdf0565Bfe",
            chainSelector: 4051577828743386545n,
            tokenAdminRegistry: "0x00F027eA6D0fb03256A15E9182B2B9227A4931d8"
        },
        rhinofi: "MATIC_POS",
        stargate: {
            endpointID: 30109,
            blockConfirmations: 512,
            tokens: [
                {
                    name: "USDC",
                    id: 1,
                    address: "0x9Aa02D4Fae7F58b8E8f34c66E756cC734DAc7fe4",
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0xd47b03ee6d86Cf251ee7860FB2ACf9f91B9fD4d7",
                },
            ],
        },
        wanbridge: {
            requiredConfirmations: 500,
        },
        wormhole: {
            chain: "Polygon",
            timeToFinalize: 66,
        },
    },
    oracles: {
        cmc: {
            slug: "polygon",
            native: "polygon",
        },
        coingecko: {
            slug: "polygon-pos",
            native: "matic-network",
        },
        dexscreener: "polygon",
    },
    uniswap: {
        deployBlock: 22757547,
        poolFactory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        multicall2: "0x275617327c958bD06b5D6b871E7f491D76113dd8",
        proxyAdmin: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
        tickLens: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
        swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        swapRouter02: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        NFTDescriptor: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
        nonfungibleTokenPositionDescriptor: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
        transparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
        nonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        v3Migrator: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
        uniswapV3Staker: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
        positionsNFT: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        positionsNFTDeployBlock: 22760586,
        topNativePool: "0xa374094527e1673a86de625aa59517c5de346d32",
        universalRouter: "0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5",
        wrappedNativeAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        wrappedNativeSymbol: "WMATIC",
        wrappedNativeName: "Wrapped MATIC",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "MATIC",
    },
    token: {
        wbtcAddress: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
        usdcAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        wethAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    },
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        limitOrderRegistryDeployBlock: 43640541,
        pricing: {
            nativeWrappedToken: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
            nativeWrappedName: "WMATIC",
            nativeQuotePools: [
                {
                    blockCreated: 22802494,
                    address: "0xa374094527e1673a86de625aa59517c5de346d32",
                },
            ],
            pools: [
                "0xa374094527e1673a86de625aa59517c5de346d32",
                "0x45dda9cb7c25131df268515131f647d726f50608",
                "0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7",
                "0xeef1a9507b3d505f0062f2be9453981255b503c8",
                "0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d",
                "0x5645dcb64c059aa11212707fbf4e7f984440a8cf",
                "0x0a6c4588b7d8bd22cf120283b1fff953420c45f3",
                "0x88f3c15523544835ff6c738ddb30995339ad57d6",
                "0xbb98b3d2b18aef63a3178023a920971cf5f29be4",
                "0x5f69c2ec01c22843f8273838d570243fd1963014",
                "0x0e44ceb592acfc5d3f09d996302eb4c499ff8c10",
                "0x67a9fe12fa6082d9d0203c84c6c56d3c4b269f28",
                "0x04537f43f6add7b1b60cab199c7a910024ee0594",
                "0x3f5228d0e7d75467366be7de2c31d0d098ba2c23",
                "0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6",
                "0x254aa3a898071d6a2da0db11da73b02b4646078f",
                "0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5",
                "0x0f663c16dd7c65cf87edb9229464ca77aeea536b",
                "0x781067ef296e5c4a4203f81c593274824b7c185d",
                "0x0a63d3910ffc1529190e80e10855c4216407cc45",
                "0x4ccd010148379ea531d6c587cfdd60180196f9b1",
                "0x94ab9e4553ffb839431e37cc79ba8905f45bfbea",
                "0xfe530931da161232ec76a7c3bea7d36cf3811a0d",
                "0x6488adfdbb85ce0302faa6ac72c8693eba81df83",
                "0xdb11b39d8acdc877c58392e996a4a88424483705",
                "0x16e7ca3eaaf7703b9724301e6fd3d4e2918fec59",
                "0x3d0acd52ee4a9271a0ffe75f9b91049152bac64b",
                "0x3165241b09823256465699625637d535d634cc8c",
                "0x3bfcb475e528f54246f1847ec0e7b53dd88bda4e",
                "0x4c0bc5d34369d5f89e7f3aa551150dc7d281b4c7",
                "0x1cf0a4717f15ac0265d26986af8ac4ce25fd9a3f",
                "0x3fa147d6309abeb5c1316f7d8a7d8bd023e0cd80",
                "0x6bad0f9a89ca403bb91d253d385cec1a2b6eca97",
                "0xb493e5aee0e0325632f4ed63cc889a23b8c77969",
                "0x613e24ec04fa61a5967cccc90cdc1d9513f73d5a",
                "0xb2f8ba544e4874d4e0f817359d0f4bcff209b87e",
                "0x1edbf151b7a4bfb611030efcb460ae0d3516aee7",
                "0x74d3c85df4dbd03c7c12f7649faa6457610e7604",
                "0xbeaf7156ba07c3df8fac42e90188c5a752470db7",
                "0xab4b63bd6c214ce8409fa1b31afa50d4e17597f9",
                "0x26770cc2c612e5c97eb70a6531fa9d5098ef74ab",
                "0x22177148e681a6ca5242c9888ace170ee7ec47bd",
                "0xa1cfb393607d1a6888d273b762832ed14c8b56b1",
                "0xa236278bec0e0677a48527340cfb567b4e6e9adc",
                "0x156917664027312906a3e977e7f316a29934a37d",
                "0x6cd22380745d4e4a5b674f692a1e84281e5e0896",
                "0x286af3968aec55ec3acd463bf59edc7cbc04102e",
                "0x42f0530351471dab7ec968476d19bd36af9ec52d",
                "0x67e708986a809acefde16f2417fa5701241e3935",
                "0x3e4bebfd2e3f6672640c83fc4888620741169825",
                "0x33016df701b323c33cc027146c6a9e0997b2a923",
                "0x30f5c777ab316e6878d2b71a32274e4c2842327a",
                "0x78a750ca5f8dd1ef1c87e29e8a267ff4c8d12b38",
                "0xfa22d298e3b0bc1752e5ef2849cec1149d596674",
                "0x5884ddb0bb109c02150242edf00d0737d78ed61d",
                "0x67b6ee9feab5fe2affed6a386950576d43f238dd",
                "0x9159a880b930aced1080ed4742818362663c8d46",
                "0xa90c1c009dc8292bd04ced30f9b53a5ff7a806a0",
                "0x1f6082db7c8f4b199e17090cd5c8831a1dad1997",
                "0xbd934a7778771a7e2d9bf80596002a214d8c9304",
                "0xfc704de88db4858419d5d0af080486a95343ba15",
                "0x32a222f69d00e717845a3d857d0392d6a25a2acd",
                "0x7f567ce133b0b69458fc318af06eee27642865be",
                "0x98349e1689538fd878646b77b3dcd89040a35eb6",
                "0x6feae21e16097faa70afbb12872bdba3c85f4d9f",
                "0xd0beb9570bc3d2af7fa461dfd3c75cc3a34f95e2",
                "0x56fcb902bee19a645f9607cd1e1c0737b6358feb",
                "0xe6617e2fb578e1df127f59fafeaa1122e543278f",
                "0x08b446353ddb5a1695774bd547703879ff253aea",
                "0xd67d3f77ad7acab1a75863b094176015df30cd8c",
                "0xaa40be3a775451ddccf3aabf36bdea550391341f",
                "0x0d1375f18e23099ae6a151e818cfe491b4feff31",
                "0xf9e9526e55a0e1fac1813b2fe88bc9b30eea04f9",
                "0xb69d18170a7d949777ead872cc6ba7cabb78fcfc",
                "0xa708d430656aa379b6b0b1d570be8ae1095530e5",
                "0xe93fde3c231c48db0a78e3d802afc55d845102c9",
                "0x046bbdd927fc635dd6de7cf4efdad3e767274074",
                "0xd06a93253d719ed8f28489ae9838d3d0f9eaba42",
                "0xae732bd3d6becb4f0f458f54a6daad1fb1e9222c",
                "0x039de30e4901793293a155dc3bcddc1b66fb5707",
                "0x635fd65c546e66f73b7a760307ad884916f4c204",
                "0x362d0401ed74db25219b6d02ac1791cfe3542d68",
                "0x0581ef32b9393c5c282517282853267eed69621e",
                "0x802c9f216f812b1a4b24636bec4f261b316797cb",
                "0xc1dc5605b242a658adfc7d6e693a50aefb49bbae",
                "0xba0216254163b57af68b7161cf824dbadcad61df",
                "0x90e883972ebcbebc871f3f0658bab1821b8e8705",
                "0xba91ae7312ace1137c15786177cbe687fd2d73d0",
                "0x140ae14be4b5e86aa149f76e84953746e0bc04f1",
                "0x2b5c2a5558bcc428ca97c6a6cd0eac8c1d180d65",
                "0x6c8408f735c2f73b8f9271f663b1540bb8c2acce",
                "0xa846934be7302304f2a8e5b92b576a3cfe655002",
                "0xc21b964af2b0254580d44981d624335f2b7c6fb6",
                "0x0dab5aedaf25201cce638b9d617d4b8c23d29b8d",
                "0x30fe5e402139925634430eb88e9c209e4a2d6dec",
                "0x9a72fc3fb9e99087d2eae500355e7902c763f9b3",
                "0x02d07784818ada64827fce9f5c1309af688a5681",
                "0x5e575a7050ca806248e8f4341601847fde52d9ba",
                "0x80c5c7d7e94158fd2daac56734889a7cdf8dadfe",
                "0xd48cb7ad6a0e2137ea81803c63d2863206ce4700",
            ],
        },
    },
    defaultPool: "0xa374094527e1673a86de625aa59517c5de346d32",
    defaultToken0: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    defaultToken1: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    tokenList: [
        { symbol: "DAI", address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063" },
        { symbol: "USDT", address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f" },
        { symbol: "WETH", address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619" },
        { symbol: "USDC", address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174" },
        { symbol: "WMATIC", address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270" },
    ],
    stables: [
        "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
        "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    ],
    watchlist: [
        "0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5",
        "0x0e44ceb592acfc5d3f09d996302eb4c499ff8c10",
        "0x167384319b41f7094e62f7506409eb38079abff8",
        "0x94ab9e4553ffb839431e37cc79ba8905f45bfbea",
        "0x88f3c15523544835ff6c738ddb30995339ad57d6",
        "0x45dda9cb7c25131df268515131f647d726f50608",
        "0xa374094527e1673a86de625aa59517c5de346d32",
        "0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7",
        "0x50eaedb835021e4a108b7290636d62e9765cc6d7",
        "0x86f1d8390222a3691c28938ec7404a1661e618e0",
        "0xeef1a9507b3d505f0062f2be9453981255b503c8",
        "0x1f6082db7c8f4b199e17090cd5c8831a1dad1997",
        "0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d",
        "0x3a5329ee48a06671ad1bf295b8a233ee9b9b975e",
        "0x0a63d3910ffc1529190e80e10855c4216407cc45",
        "0x5645dcb64c059aa11212707fbf4e7f984440a8cf",
        "0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6",
        "0x2aceda63b5e958c45bd27d916ba701bc1dc08f7a",
        "0x4d05f2a005e6f36633778416764e82d1d12e7fbb",
        "0x3d0acd52ee4a9271a0ffe75f9b91049152bac64b",
        "0x3e31ab7f37c048fc6574189135d108df80f0ea26",
        "0xd866fac7db79994d08c0ca2221fee08935595b4b",
        "0x98b9162161164de1ed182a0dfa08f5fbf0f733ca",
        "0x4ccd010148379ea531d6c587cfdd60180196f9b1",
        "0xfe343675878100b344802a6763fd373fdeed07a4",
        "0x357faf5843c7fd7fb4e34fbeabdac16eabe8a5bc",
    ],
    internalName: "polygon",
    nativeLogoUrl: "https://assets.oku.trade/natives/matic.png",
    contracts: {
        ...chains.polygon.contracts,
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        },
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf",
        },
        weth9: {
            address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
        },
        multicall2: {
            address: "0x275617327c958bD06b5D6b871E7f491D76113dd8",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const redbelly = makeConfig({
    ...chains.redbellyMainnet,
    name: "Redbelly",
    blockTimeSeconds: 5,
    launchTime: 1741362479,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/redbelly-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 2286057,
        poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
        permit2: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
        multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        positionsNFTDeployBlock: 2286074,
        universalRouter: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        wrappedNativeAddress: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
        wrappedNativeSymbol: "WRBNT",
        wrappedNativeName: "Wrapped RBNT",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "RBNT",
    },
    token: {
        wethAddress: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
        usdcAddress: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06",
    },
    oku: {
        limitOrderRegistry: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
        limitOrderRegistryDeployBlock: 2286099,
        pricing: {
            nativeWrappedToken: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
            nativeWrappedName: "RBNT",
        },
    },
    defaultPool: "0x1f1bda1fe18aedf468abe36ed66eaf44aa6c490b",
    defaultToken0: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
    defaultToken1: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06",
    tokenList: [
        { symbol: "WRBNT", address: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076" },
        { symbol: "USDC.e", address: "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06" },
        { symbol: "USDT", address: "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B" },
    ],
    stables: [
        "0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06",
        "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B",
    ],
    watchlist: [
        "0xcDe3554d179b5B7ABB3ddFeE1CBC7B98b3f2E380",
        "0x2ea9dacb203d36b51b164a3d25d69d1c8198eec1",
        "0x1f1bda1fe18aedf468abe36ed66eaf44aa6c490b",
    ],
    internalName: "redbelly",
    nativeLogoUrl: "https://assets.oku.trade/natives/rbnt.svg",
    contracts: {
        ...chains.redbellyMainnet.contracts,
        limitOrder: {
            address: "0x9db70E29712Cc8Af10c2B597BaDA6784544FF407",
        },
        nftManager: {
            address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        },
        weth9: {
            address: "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
        },
        multicall2: {
            address: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        },
        multicall3: {
            address: "0xEe43BBcC6340038130681F98d855E416F7F728e9",
        },
    },
});

const rootstock = makeConfig({
    ...chains.rootstock,
    sortIndex: 7,
    launchTime: 1702479600,
    name: "Rootstock",
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 33,
    logoUrl: "https://assets.oku.trade/chains/rootstock-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {
        openocean: "rootstock",
        icecreamswap: true,
    },
    morpho: {},
    bridges: {
        stargate: {
            endpointID: 30333,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    type: "OFT",
                    id: 13,
                    address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B",
                },
                {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398",
                },
                {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
                },
            ],
        },
    },
    oracles: {
        cmc: {
            slug: "rsk-smart-bitcoin",
            native: "rsk-smart-bitcoin",
        },
        coingecko: {
            slug: "rootstock",
            native: "rootstock",
        },
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://rootstock.blockscout.com",
            apiUrl: "https://rootstock.blockscout.com/api",
        },
        rsk: chains.rootstock.blockExplorers.default,
    },
    uniswap: {
        deployBlock: 5829210,
        poolFactory: "0xaF37EC98A00FD63689CF3060BF3B6784E00caD82",
        permit2: "0xFcf5986450E4A014fFE7ad4Ae24921B589D039b5",
        multicall2: "0x996a9858cdFa45aD68E47C9a30A7201E29c6A386",
        tickLens: "0x55B9dF5bF68ADe972191a91980459f48ecA16afC",
        nonfungiblePositionManager: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
        positionsNFT: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
        positionsNFTDeployBlock: 5829891,
        universalRouter: "0x244f68e77357f86a8522323eBF80b5FC2F814d3E",
        wrappedNativeAddress: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
        wrappedNativeSymbol: "WRBTC",
        wrappedNativeName: "Wrapped BTC",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "RBTC",
    },
    token: {
        usdcAddress: "0x3A15461d8AE0f0Fb5fA2629e9dA7D66A794a6E37",
    },
    oku: {
        limitOrderRegistry: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252",
        limitOrderRegistryDeployBlock: 5842098,
        pricing: {
            nativeWrappedToken: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
            nativeWrappedName: "WRBTC",
        },
    },
    defaultPool: "0xd2ffe51ab4e622a411abbe634832a19d919e9c55",
    defaultToken0: "0x542fda317318ebf1d3deaf76e0b632741a7e677d",
    defaultToken1: "0xef213441a85df4d7acbdae0cf78004e1e486bb96",
    tokenList: [
        { symbol: "WRBTC", address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d" },
        { symbol: "RIF", address: "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5" },
        { symbol: "RUSDT", address: "0xef213441a85df4d7acbdae0cf78004e1e486bb96" },
        { symbol: "USDC.e", address: "0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67" },
    ],
    stables: [
        "0xef213441a85df4d7acbdae0cf78004e1e486bb96",
        "0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37",
        "0xaf368c91793cb22739386dfcbbb2f1a9e4bcbebf",
        "0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67",
    ],
    watchlist: [
        "0xd2ffe51ab4e622a411abbe634832a19d919e9c55",
        "0x022650756421f2e636d4138054331cbfafb55d9e",
        "0x549a5d92412161a1a2828549a657a49dd9fa046c",
        "0xcba7abe98fd6a65259837d76a3409841c1dd4288",
        "0xbe092d38045ef7f9cdc5014278a4239e896bf5ca",
        "0xb74d0aa1711eb859eead7cfe3fe5921eedd7e5bf",
        "0x8f597295f1412a079088fc51c8a95e6698c31777",
        "0x71d0d054974121ae37a76762e1fa02ffa150eba1",
    ],
    internalName: "rootstock",
    nativeLogoUrl: "https://assets.oku.trade/natives/rbtc.png",
    contracts: {
        ...chains.rootstock.contracts,
        limitOrder: {
            address: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252",
        },
        nftManager: {
            address: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
        },
        weth9: {
            address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
        },
        Multicall2: {
            address: "0x996a9858cdFa45aD68E47C9a30A7201E29c6A386",
        },
        Multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
        },
    },
});

const saga = makeConfig({
    ...chains.saga,
    name: "Saga",
    blockTimeSeconds: 5,
    launchTime: 1740384000,
    sortIndex: 13,
    logoUrl: "https://assets.oku.trade/chains/saga-logo.png",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {},
    blockExplorers: {
        default: {
            name: "BlockScout",
            url: "https://sagaevm.sagaexplorer.io",
        },
    },
    rpcUrls: {
        default: {
            http: ["https://sagaevm.jsonrpc.sagarpc.io"],
            webSocket: ["wss://sagaevm.ws.sagarpc.io"],
        },
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 18885,
        poolFactory: "0x454050C4c9190390981Ac4b8d5AFcd7aC65eEffa",
        permit2: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        multicall2: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        tickLens: "0x6Aa54a43d7eEF5b239a18eed3Af4877f46522BCA",
        nonfungiblePositionManager: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
        positionsNFT: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
        positionsNFTDeployBlock: 18902,
        universalRouter: "0x352A86168e6988A1aDF9A15Cb00017AAd3B67155",
        wrappedNativeAddress: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        wrappedNativeSymbol: "wGAS",
        wrappedNativeName: "Wrapped Gas",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "GAS",
    },
    token: {
        usdcAddress: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
        wethAddress: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    },
    oku: {
        limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        limitOrderRegistryDeployBlock: 19372,
        pricing: {
            nativeWrappedToken: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
            nativeWrappedName: "GAS",
        },
    },
    defaultPool: "0x99429757ddeb5432b52982b0fcf6ed94620c358d",
    defaultToken0: "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa",
    defaultToken1: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
    tokenList: [
        { symbol: "wGAS", address: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA" },
        { symbol: "USDC", address: "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5" },
        { symbol: "USDT", address: "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa" },
        { symbol: "UNI", address: "0x4e33613add93463e82a14080021f2ffaf1e062cf" },
        { symbol: "WETH", address: "0xeb41d53f14cb9a67907f2b8b5dbc223944158ccb" },
    ],
    stables: [
        "0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa",
        "0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5",
    ],
    watchlist: [
        "0x99429757ddeb5432b52982b0fcf6ed94620c358d",
        "0xc2C5f2C94759b2829C9Fd86b8d34d33DDc4D29e4",
        "0xbbf2219c49efde9c64cd5f94a952c90e4e5b6e41",
        "0x69bf9603468922c76a75068f51874f56662d35e3",
        "0x387b99a979c79f827f0ca8a752893472dc34b7ec",
    ],
    internalName: "saga",
    nativeLogoUrl: "https://assets.oku.trade/natives/saga.png",
    contracts: {
        ...chains.saga.contracts,
        limitOrder: {
            address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        },
        nftManager: {
            address: "0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf",
        },
        weth9: {
            address: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        },
        multicall2: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        multicall3: {
            address: "0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160",
        },
    },
});

const scroll = makeConfig({
    ...chains.scroll,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    sortIndex: 5,
    launchTime: 1703257200,
    blockTimeSeconds: 3,
    logoUrl: "https://assets.oku.trade/chains/scroll-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        zerion: "scroll",
        tenderly: "true"
    },
    morpho: {},
    markets: {
        kyberswap: "scroll",
        openocean: "scroll",
        zeroex: true,
        icecreamswap: true,
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-scroll-1",
            routerAddress: "0x9a55E8Cab6564eb7bbd7124238932963B8Af71DC",
            chainSelector: 13204309965629103672n,
            tokenAdminRegistry: "0x846dEA1c1706FC35b4aa78B32d31F1599DAA47b4"
        },
        rhinofi: "SCROLL",
        stargate: {
            endpointID: 30214,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    id: 13,
                    address: "0xC2b638Cb5042c1B3c5d5C969361fB50569840583",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0x3Fc69CC4A842838bCDC9499178740226062b14E4",
                },
            ],
        },
        wormhole: {
            chain: "Scroll",
            timeToFinalize: 1800,
        },
    },
    oracles: {
        cmc: {
            slug: "scroll",
            native: "ethereum",
        },
        coingecko: {
            slug: "scroll",
            native: "ethereum",
        },
        dexscreener: "scroll",
    },
    uniswap: {
        deployBlock: 1367,
        multicall2: "0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2",
        permit2: "0x83986Ff655A54ee061F6B7F476B92f4Fed111B93",
        poolFactory: "0x70C62C8b8e801124A4Aa81ce07b637A3e83cb919",
        positionsNFT: "0xB39002E4033b162fAc607fc3471E205FA2aE5967",
        universalRouter: "0x595E7160858b1AdA94Bda790D8699C85e595117E",
        wrappedNativeAddress: "0x5300000000000000000000000000000000000004",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
        wethAddress: "0x5300000000000000000000000000000000000004",
        wbtcAddress: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1",
    },
    oku: {
        limitOrderRegistry: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377",
        limitOrderRegistryDeployBlock: 1409068,
        pricing: {
            nativeWrappedToken: "0x5300000000000000000000000000000000000004",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0x813df550a32d4a9d42010d057386429ad2328ed9",
    defaultToken0: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
    defaultToken1: "0x5300000000000000000000000000000000000004",
    tokenList: [
        { symbol: "USDC", address: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4" },
        { symbol: "WETH", address: "0x5300000000000000000000000000000000000004" },
        { symbol: "USDT", address: "0xf55bec9cafdbe8730f096aa55dad6d22d44099df" },
        { symbol: "WBTC", address: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1" },
        { symbol: "DAI", address: "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97" },
    ],
    stables: [
        "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",
        "0xf55bec9cafdbe8730f096aa55dad6d22d44099df",
        "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97",
    ],
    watchlist: [
        "0xf1783f3377b3a70465c193ef33942c0803121ba0",
        "0x813df550a32d4a9d42010d057386429ad2328ed9",
    ],
    internalName: "scroll",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.scroll.contracts,
        limitOrder: {
            address: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377",
        },
        nftManager: {
            address: "0xB39002E4033b162fAc607fc3471E205FA2aE5967",
        },
        weth9: {
            address: "0x5300000000000000000000000000000000000004",
        },
        Multicall2: {
            address: "0x3b615B1AC55bc34e51a81D3dea67467F32bcb8C2",
        },
        Multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const sei = makeConfig({
    ...chains.sei,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 0.4,
    launchTime: 1687788000,
    sortIndex: 5,
    logoUrl: "https://assets.oku.trade/chains/sei-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    markets: {
        openocean: "sei",
    },
    morpho: {},
    bridges: {
        chainlink: {
            atlasNetworkName: "sei-mainnet",
            routerAddress: "0xAba60dA7E88F7E8f5868C2B6dE06CB759d693af0",
            chainSelector: 9027416829622342829n,
            tokenAdminRegistry: "0x910a46cA93E8086BF1d7D65190eE6AEe5256Bd61"
        },
        stargate: {
            endpointID: 30280,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "ETH",
                    type: "OFT",
                    id: 13,
                    address: "0x5c386D85b1B82FD9Db681b9176C8a4248bb6345B",
                },
                {
                    name: "USDC",
                    id: 1,
                    address: "0x45d417612e177672958dC0537C45a8f8d754Ac2E",
                },
                {
                    name: "USDT",
                    id: 2,
                    address: "0x0dB9afb4C33be43a0a0e396Fd1383B4ea97aB10a",
                },
            ],
        },
    },
    oracles: {
        cmc: {
            slug: "sei",
            native: "sei",
        },
        coingecko: {
            slug: "sei-v2",
            native: "sei-network",
        },
        dexscreener: "seiv2",
    },
    blockExplorers: {
        default: {
            name: "Seitrace",
            url: "https://seitrace.com",
            apiUrl: "https://seitrace.com/pacific-1/api",
        },
    },
    uniswap: {
        deployBlock: 79245151,
        poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        positionsNFTDeployBlock: 79245279,
        universalRouter: "0xa683c66045ad16abb1bCE5ad46A64d95f9A25785",
        wrappedNativeAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
        wrappedNativeSymbol: "WSEI",
        wrappedNativeName: "Wrapped SEI",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "SEI",
    },
    token: {
        usdcAddress: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
        wethAddress: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
    },
    oku: {
        limitOrderRegistry: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        limitOrderRegistryDeployBlock: 79448363,
        pricing: {
            nativeWrappedToken: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
            nativeWrappedName: "SEI",
        },
    },
    defaultPool: "0x0A6358F069268c7dc4918D5B12c69a782b957Ead",
    defaultToken0: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
    defaultToken1: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
    tokenList: [
        { symbol: "WSEI", address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7" },
        { symbol: "USDC", address: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1" },
        { symbol: "USDT", address: "0xb75d0b03c06a926e488e2659df1a861f860bd3d1" },
    ],
    stables: [
        "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
        "0xb75d0b03c06a926e488e2659df1a861f860bd3d1",
    ],
    watchlist: [
        "0x0A6358F069268c7dc4918D5B12c69a782b957Ead",
        "0x8a1a9efb7f7f74ace10a31f2f5f9f7e804f957b1",
        "0x41eea09c971294fcde3b6e553902b04a47be7442",
        "0x5cfa8db453c9904511c4ea9eb0bfc903e36b9f5f",
        "0xa3a573c8d14c93fca8fdecb7db168619563d9b00",
    ],
    internalName: "sei",
    nativeLogoUrl: "https://assets.oku.trade/natives/sei.png",
    contracts: {
        ...chains.sei.contracts,
        limitOrder: {
            address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
        },
        nftManager: {
            address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        },
        weth9: {
            address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
        },
        multicall2: {
            address: "0x9b7aC6735b23578E81260acD34E3668D0cc6000A",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const sonic = makeConfig({
    ...chains.sonic,
    blockTimeSeconds: 3,
    launchTime: 1737165834,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/sonic-logo.svg",
    safeReorgDistance: 90000,
    morpho: {},
    externalId: {
        tenderly: "true"
    },
    markets: {
        icecreamswap: true,
        kyberswap: "sonic",
        openocean: "sonic"
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "sonic-mainnet",
            routerAddress: "0xB4e1Ff7882474BB93042be9AD5E1fA387949B860",
            chainSelector: 1673871237479749969n,
            tokenAdminRegistry: "0x2961Cb47b5111F38d75f415c21ceB4120ddd1b69"
        },
        stargate: {
            endpointID: 30332,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "USDC",
                    id: 1,
                    address: "0xA272fFe20cFfe769CdFc4b63088DCD2C82a2D8F9"
                }
            ]
        }
    },
    oracles: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 322744,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 322763,
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",
        wrappedNativeAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
        wrappedNativeSymbol: "wS",
        wrappedNativeName: "Wrapped Sonic",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "S",
    },
    token: {
        wethAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
    },
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        limitOrderRegistryDeployBlock: 10948,
        pricing: {
            nativeWrappedToken: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
            nativeWrappedName: "wS",
        },
    },
    defaultPool: "0xEcb04e075503Bd678241f00155AbCB532c0a15Eb",
    defaultToken0: "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
    defaultToken1: "0x29219dd400f2bf60e5a23d13be72b486d4038894",
    tokenList: [
        { symbol: "wS", address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38" },
        { symbol: "USDC.e", address: "0x29219dd400f2bf60e5a23d13be72b486d4038894" },
        { symbol: "WETH", address: "0x50c42deacd8fc9773493ed674b675be577f2634b" },
    ],
    stables: [
        "0x29219dd400f2bf60e5a23d13be72b486d4038894",
        "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
    ],
    watchlist: [
        "0xecb04e075503bd678241f00155abcb532c0a15eb",
        "0xcfd41df89d060b72ebdd50d65f9021e4457c477e",
        "0xb01b201ce73415071b7b99a8737240b511d203b7",
        "0xb345489a0350f188fe70dadaa6210a9c710fed4b",
        "0xdfcdad314b0b96ab8890391e3f0540278e3b80f7",
        "0x21043D7Ad92d9e7bC45C055AF29771E37307B111",
    ],
    internalName: "sonic",
    nativeLogoUrl: "https://assets.oku.trade/natives/sonic.svg",
    contracts: {
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const taiko = makeConfig({
    ...chains.taiko,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    blockTimeSeconds: 24,
    launchTime: 1717509600,
    sortIndex: 4,
    logoUrl: "https://assets.oku.trade/chains/taiko-logo.svg",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true"
    },
    markets: {
        icecreamswap: true
    },
    morpho: {},
    bridges: {
        rhinofi: "TAIKO",
        stargate: {
            endpointID: 30290,
            blockConfirmations: 20,
            tokens: [
                {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0x77C71633C34C3784ede189d74223122422492a0f",
                },
                {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135",
                },
            ],
        },
    },
    oracles: {
        coingecko: {
            slug: "taiko",
            native: "ethereum",
        },
    },
    blockExplorers: {
        default: {
            name: "Taikoscan",
            url: "https://taikoscan.io",
            apiUrl: "https://api.taikoscan.io/api",
        },
        routescan: {
            name: "Routescan",
            url: "https://taikoscan.network",
            apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api",
        },
    },
    uniswap: {
        deployBlock: 961,
        poolFactory: "0x75FC67473A91335B5b8F8821277262a13B38c9b3",
        permit2: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        multicall2: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        tickLens: "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
        nonfungiblePositionManager: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        positionsNFT: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        positionsNFTDeployBlock: 980,
        universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4",
        wrappedNativeAddress: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
        wethAddress: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
    },
    oku: {
        limitOrderRegistry: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        limitOrderRegistryDeployBlock: 2396,
        pricing: {
            nativeWrappedToken: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b",
    defaultToken0: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
    defaultToken1: "0xa51894664a773981c6c112c43ce576f315d5b1b6",
    tokenList: [
        { symbol: "TAIKO", address: "0xa9d23408b9ba935c230493c40c73824df71a0975" },
        { symbol: "WETH", address: "0xA51894664A773981C6C112C43ce576f315d5b1B6" },
        { symbol: "USDC", address: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b" },
    ],
    stables: [
        "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
        "0x19e26b0638bf63aa9fa4d14c6baf8d52ebe86c5c",
        "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD",
    ],
    watchlist: [
        "0xDaC937d4263E6A667A027FE59B2FFe2F91D54f46",
        "0x5B731355AAd31C132dd4754E70E92c590Ae42386",
        "0xe47a76e15a6f3976c8dc070b3a54c7f7083d668b",
        "0xcbf2e8520B88C4eC30B2B6ddfAa2900087B42D55",
        "0x4e35666b3ebf367842b9b6d5b297a2a069f862f5",
        "0x6dA6B21DB1Dfd19D67BfF1877f62953a2D365fc9",
    ],
    internalName: "taiko",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.taiko.contracts,
        limitOrder: {
            address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8",
        },
        nftManager: {
            address: "0x8B3c541c30f9b29560f56B9E44b59718916B69EF",
        },
        weth9: {
            address: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
        },
        multicall2: {
            address: "0x0d922Fb1Bc191F64970ac40376643808b4B74Df9",
        },
        multicall3: {
            address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        },
    },
});

const telos = makeConfig({
    ...chains.telos,
    blockTimeSeconds: 0.5,
    launchTime: 1743089303,
    sortIndex: 13,
    logoUrl: "https://assets.oku.trade/chains/telos-logo.svg",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {
        openocean: "telos",
        icecreamswap: true,
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://telostx.com",
        },
    },
    bridges: {
        stargate: {
            endpointID: 30199,
            tokens: [
                {
                    name: "ETH",
                    type: "OFT",
                    id: 13,
                    address: "0xA272fFe20cFfe769CdFc4b63088DCD2C82a2D8F9",
                },
                {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0x2086f755A6d9254045C257ea3d382ef854849B0f",
                },
                {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0x3a1293Bdb83bBbDd5Ebf4fAc96605aD2021BbC0f",
                },
            ],
        },
    },
    morpho: {},
    oracles: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 386633562,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 386635939,
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",
        wrappedNativeAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
        wrappedNativeSymbol: "wTLOS",
        wrappedNativeName: "Wrapped TLOS",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "TLOS",
    },
    token: {
        wethAddress: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
        wbtcAddress: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
        usdcAddress: "0xF1815bd50389c46847f0Bda824eC8da914045D14",
    },
    oku: {
        limitOrderRegistry: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        limitOrderRegistryDeployBlock: 386645006,
        pricing: {
            nativeWrappedToken: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
            nativeWrappedName: "TLOS",
        },
    },
    defaultPool: "0xa89c1c7d0975f1a98442e96e18a292982b12b3cd",
    defaultToken0: "0xf1815bd50389c46847f0bda824ec8da914045d14",
    defaultToken1: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
    tokenList: [
        { symbol: "WTLOS", address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E" },
        { symbol: "USDC.e", address: "0xF1815bd50389c46847f0Bda824eC8da914045D14" },
        { symbol: "USDT", address: "0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8" },
        { symbol: "WBTC", address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c" },
        { symbol: "WETH", address: "0xBAb93B7ad7fE8692A878B95a8e689423437cc500" },
        { symbol: "USDM", address: "0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9" },
    ],
    stables: [
        "0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8",
        "0xF1815bd50389c46847f0Bda824eC8da914045D14",
        "0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9",
    ],
    watchlist: [
        "0xa48c8dd45ccf9c1ebf938c63c7cbc7cc259bf207",
        "0xa89c1c7d0975f1a98442e96e18a292982b12b3cd",
        "0xd8606afb3f48a13229f52d6251c1aa3e05ad31a1",
        "0xe8d1c7e1fcfc8cee3daac2819266ea18015829b7",
        "0xc1db63d4fbb6fbc023ee74480ba53b8906263fbd",
        "0x6b566fcf6c5342934e7da46d9ee3b705e74736f9",
        "0x11856fa7683aa9edf44a6ab368ec0cd02b03e6a1",
        "0x45b47c9207fa8298863991f1b02a5b0e77bab7b6",
    ],
    internalName: "telos",
    nativeLogoUrl: "https://assets.oku.trade/natives/telos.png",
    contracts: {
        ...chains.telos.contracts,
        limitOrder: {
            address: "0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const tronShasta = makeConfig({
    ...chains.tronShasta,
    name: "Tron Shasta",
    blockTimeSeconds: 5,
    launchTime: 1746055290,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/tron.png",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 52878027,
        poolFactory: "0x3CF78A14F90203919B8B4D690E6540745ED8074A",
        permit2: viem.zeroAddress,
        multicall2: "0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E",
        tickLens: "0xC857346CD83BE79B78F1B10D5FCF158EDC844796",
        nonfungiblePositionManager: "0x358B41818D60CBF40C11FB728C8BC865726F423D",
        positionsNFT: "0x358B41818D60CBF40C11FB728C8BC865726F423D",
        positionsNFTDeployBlock: 52878030,
        universalRouter: viem.zeroAddress,
        wrappedNativeAddress: viem.zeroAddress,
        wrappedNativeSymbol: "WTRX",
        wrappedNativeName: "Wrapped TRX",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "TRX",
    },
    token: {},
    oku: {
        pricing: {
            nativeWrappedToken: viem.zeroAddress,
        },
    },
    defaultPool: viem.zeroAddress,
    defaultToken0: viem.zeroAddress,
    defaultToken1: viem.zeroAddress,
    tokenList: [],
    stables: [],
    watchlist: [],
    internalName: "tronshasta",
    nativeLogoUrl: "https://assets.oku.trade/natives/tron.png",
    contracts: {
        ...chains.tronShasta.contracts,
        limitOrder: {
            address: viem.zeroAddress,
        },
        nftManager: {
            address: "0x358B41818D60CBF40C11FB728C8BC865726F423D",
        },
        multicall2: {
            address: "0x8C289C0A8ADA24FC0F27FCBB1200370A52A6675E",
        },
        multicall3: {
            address: viem.zeroAddress,
        },
    },
});

const worldchain = makeConfig({
    ...chains.worldchain,
    blockTimeSeconds: 2,
    launchTime: 0,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/world-logo.png",
    safeReorgDistance: 90000,
    externalId: {
        tenderly: "true",
    },
    markets: {},
    bridges: {},
    oracles: {},
    morpho: {
        deployBlock: 9025669,
        morpho: "0xE741BC7c34758b4caE05062794E8Ae24978AF432",
        publicAllocator: "0xef9889B4e443DEd35FA0Bd060f2104Cca94e6A43",
        mmFactory11: "0xae5b0884bfff430493D6C844B9fd052Af7d79278",
        bundler3: "0x3D07BF2FFb23248034bF704F3a4786F1ffE2a448",
    },
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 1603366,
        poolFactory: "0x7a5028BDa40e7B173C278C5342087826455ea25a",
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
        multicall2: "0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9",
        tickLens: "0xE61df0CaC9d85876aCE5E3037005D80943570623",
        nonfungiblePositionManager: "0xec12a9F9a09f50550686363766Cc153D03c27b5e",
        positionsNFT: "0xec12a9F9a09f50550686363766Cc153D03c27b5e",
        positionsNFTDeployBlock: 1603405,
        universalRouter: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006",
        usdcAddress: "0x79a02482a880bce3f13e09da970dc34db4cd24d1",
        wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3",
    },
    oku: {
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0x610E319b3A3Ab56A0eD5562927D37c233774ba39",
    defaultToken0: "0x4200000000000000000000000000000000000006",
    defaultToken1: "0x79a02482a880bce3f13e09da970dc34db4cd24d1",
    tokenList: [
        { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
        { symbol: "USDC", address: "0x79a02482a880bce3f13e09da970dc34db4cd24d1" },
        { symbol: "WBTC", address: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3" },
    ],
    stables: ["0x79a02482a880bce3f13e09da970dc34db4cd24d1"],
    watchlist: [],
    internalName: "worldchain",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.worldchain.contracts,
        limitOrder: {
            address: viem.zeroAddress,
        },
        nftManager: {
            address: "0xec12a9F9a09f50550686363766Cc153D03c27b5e",
        },
        weth9: {
            address: "0x4200000000000000000000000000000000000006",
        },
        multicall2: {
            address: "0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9",
        },
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        },
    },
});

const xdc = makeConfig({
    ...chains.xdc,
    name: "XDC",
    rpcUrls: {
        default: {
            http: ["https://erpc.xinfin.network"],
        },
    },
    blockTimeSeconds: 2,
    launchTime: 1746453600,
    sortIndex: 15,
    logoUrl: "https://assets.oku.trade/chains/xdc-logo.png",
    safeReorgDistance: 90000,
    externalId: {},
    markets: {},
    bridges: {
        stargate: {
            endpointID: 30365,
            tokens: [{
                    name: "ETH",
                    type: "OFT",
                    id: 13,
                    address: "0xB0d27478A40223e427697Da523c6A3DAF29AaFfB"
                },
                {
                    name: "USDC",
                    type: "OFT",
                    id: 1,
                    address: "0x8E2E38711080bF8AAb9C74f434d2bae70e67ae44"
                },
                {
                    name: "USDT",
                    type: "OFT",
                    id: 2,
                    address: "0xA4272ad93AC5d2FF048DD6419c88Eb4C1002Ec6b"
                },
            ]
        }
    },
    oracles: {},
    morpho: {},
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    uniswap: {
        deployBlock: 87230664,
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
        permit2: "0xB952578f3520EE8Ea45b7914994dcf4702cEe578",
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641",
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        positionsNFTDeployBlock: 87230700,
        universalRouter: "0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2",
        wrappedNativeAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42",
        wrappedNativeSymbol: "WXDC",
        wrappedNativeName: "Wrapped XDC",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "XDC",
    },
    token: {
        wethAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42",
        usdcAddress: "0x2a8e898b6242355c290e1f4fc966b8788729a4du4",
    },
    oku: {
        limitOrderRegistry: "0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc",
        limitOrderRegistryDeployBlock: 87231348,
        pricing: {
            nativeWrappedToken: "0x951857744785e80e2de051c32ee7b25f9c458c42",
            nativeWrappedName: "XDC",
        },
    },
    defaultPool: "0x1e5aec37f6df6653c3342df75edd92beb3fb9846",
    defaultToken0: "0x2a8e898b6242355c290e1f4fc966b8788729a4d4",
    defaultToken1: "0x951857744785e80e2de051c32ee7b25f9c458c42",
    tokenList: [
        { symbol: "WXDC", address: "0x951857744785e80e2de051c32ee7b25f9c458c42" },
        { symbol: "USDC.e", address: "0x2a8e898b6242355c290e1f4fc966b8788729a4d4" },
    ],
    stables: [
        "0x2a8e898b6242355c290e1f4fc966b8788729a4d4",
        "0xd4b5f10d61916bd6e0860144a91ac658de8a1437",
    ],
    watchlist: [
        "0x1e5aec37f6df6653c3342df75edd92beb3fb9846",
        "0x9149b4e074f101ca0514b1d30fc78f181e21d409",
    ],
    internalName: "xdc",
    nativeLogoUrl: "https://assets.oku.trade/natives/xdc.png",
    contracts: {
        ...chains.xdc.contracts,
        limitOrder: {
            address: "0x1b35fba9357fd9bda7ed0429c8bbabe1e8cc88fc",
        },
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c",
        },
        weth9: {
            address: "0x951857744785e80e2de051c32ee7b25f9c458c42",
        },
        multicall2: {
            address: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435",
        },
        multicall3: {
            address: "0x0b1795cca8e4ec4df02346a082df54d437f8d9af",
        },
    },
});

const polygonZkEvm = makeConfig({
    ...chains.polygonZkEvm,
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    sortIndex: 6,
    launchTime: 1722520800,
    blockTimeSeconds: 7,
    logoUrl: "https://assets.oku.trade/chains/zkevm-logo.svg",
    safeReorgDistance: 90000,
    morpho: {},
    externalId: {
        zerion: "polygon-zkevm",
    },
    markets: {
        kyberswap: "polygon-zkevm",
        paraswap: {
            routerContract: "0x6A000F20005980200259B80c5102003040001068",
        },
        openocean: "polygon_zkevm",
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-polygon-zkevm-1",
            routerAddress: "0xA9999937159B293c72e2367Ce314cb3544e7C1a3",
            chainSelector: 4348158687435793198n,
        },
        rhinofi: "ZKEVM",
    },
    oracles: {
        coingecko: {
            slug: "polygon-zkevm",
            native: "ethereum",
        },
        dexscreener: "polygonzkevm",
    },
    uniswap: {
        deployBlock: 8466867,
        poolFactory: "0xff83c3c800Fec21de45C5Ec30B69ddd5Ee60DFC2",
        permit2: "0xCEc9e219281B78E1946b6b894f75ae89Bc10FEb6",
        multicall2: "0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674",
        tickLens: "0x64519b94A7248Bf17929fB03b9648ce277Fd7fDA",
        nonfungiblePositionManager: "0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f",
        positionsNFT: "0xf0D61Aeda516CCa1FF20Be65Cfb0213be688A24f",
        positionsNFTDeployBlock: 8466897,
        universalRouter: "0x32454e81d065FAA95Ec0d0Ab6Fe326599Af30fd7",
        wrappedNativeAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        wbtcAddress: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1",
        wethAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
        usdcAddress: "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5",
    },
    oku: {
        limitOrderRegistry: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723",
        limitOrderRegistryDeployBlock: 8467090,
        pricing: {
            nativeWrappedToken: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0xd6efe114c9b6058a20aab759e064f50544590914",
    defaultToken0: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",
    defaultToken1: "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5",
    tokenList: [
        { symbol: "WETH", address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9" },
        { symbol: "USDC", address: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035" },
        { symbol: "USDC.e", address: "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5" },
        { symbol: "USDT", address: "0x1e4a5963abfd975d8c9021ce480b42188849d41d" },
        { symbol: "DAI", address: "0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5" },
    ],
    stables: [
        "0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5",
        "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
        "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
        "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4",
        "0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5",
    ],
    watchlist: [
        "0xd6efe114c9b6058a20aab759e064f50544590914",
        "0x52b18c30f1d3f5c6f5fb4badff2d0ab3c68a3ff4",
        "0x90C865Da46D948EF3792fb57B0d60D14A96ecf49",
        "0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd",
        "0x539d23BE81696560C12Cf8d24AE8bb4641381E7D",
        "0x7908F0eD78de3c850A5d1DC261c39341b274D07c",
        "0x0A44b12799eBC21E1dF271284921e1e4F6f17f81",
    ],
    internalName: "polygon-zkevm",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.polygonZkEvm.contracts,
        limitOrder: {
            address: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723",
        },
        nftManager: {
            address: "0xf0d61aeda516cca1ff20be65cfb0213be688a24f",
        },
        weth9: {
            address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",
        },
        multicall2: {
            address: "0x1FaE28D9C07a8a96E2ECc53BB328E787D5B88674",
        },
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
        },
    },
});

const zkSync = makeConfig({
    ...chains.zksync,
    blockTimeSeconds: 2,
    sortIndex: 4,
    launchTime: 1696514400,
    logoUrl: "https://assets.oku.trade/chains/zksync-logo.svg",
    safeReorgDistance: 90000,
    morpho: {},
    externalId: {
        zerion: "zksync-era",
        tenderly: "true"
    },
    markets: {
        kyberswap: "zksync",
        oneinch: {
            spender: "0x6fd4383cb451173d5f9304f041c7bcbf27d561ff"
        },
        propellerswap: "zksync",
        openocean: "zksync",
    },
    bridges: {
        chainlink: {
            atlasNetworkName: "ethereum-mainnet-zksync-1",
            routerAddress: "0x748Fd769d81F5D94752bf8B0875E9301d0ba71bB",
            chainSelector: 1562403441176082196n,
            tokenAdminRegistry: "0x100a47C9DB342884E3314B91cec076BbAC8e619c"
        },
        rhinofi: "ZKSYNC",
    },
    oracles: {
        cmc: {
            slug: "zksync",
            native: "ethereum",
        },
        coingecko: {
            slug: "zksync",
            native: "ethereum",
        },
        dexscreener: "zksync",
    },
    initCodeHash: "0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed",
    blockExplorers: {
        default: {
            name: "zksync Era Explorer",
            url: "https://era.zksync.network",
            apiUrl: "https://api-era.zksync.network/api",
        },
        explorer: {
            name: "zkSync Era Block Explorer",
            url: "https://explorer.zksync.io",
            apiUrl: "https://block-explorer-api.mainnet.zksync.io/api",
        },
    },
    uniswap: {
        deployBlock: 12637075,
        poolFactory: "0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422",
        permit2: "0x0000000000225e31d15943971f47ad3022f714fa",
        multicall2: "0x8bB86A31795d3e8ef12c630C288770e13eEcF038",
        tickLens: "0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89",
        nonfungiblePositionManager: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
        positionsNFT: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
        positionsNFTDeployBlock: 12637120,
        universalRouter: "0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06",
        wrappedNativeAddress: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
        wrappedNativeSymbol: "WETH",
        wrappedNativeName: "Wrapped Ether",
        wrappedNativeDecimals: 18,
        nativeCurrencyName: "ETH",
    },
    token: {
        usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
        wethAddress: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
        wbtcAddress: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
    },
    oku: {
        limitOrderRegistry: "0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa",
        limitOrderRegistryDeployBlock: 13618344,
        pricing: {
            nativeWrappedToken: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
            nativeWrappedName: "ETH",
        },
    },
    defaultPool: "0x3e3dd517fec2e70eddba2a626422a4ba286e8c38",
    defaultToken0: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    defaultToken1: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    tokenList: [
        { symbol: "WETH", address: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91" },
        { symbol: "USDC.e", address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" },
        { symbol: "USDC", address: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4" },
    ],
    stables: [
        "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
        "0x503234F203fC7Eb888EEC8513210612a43Cf6115",
        "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
        "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
    ],
    watchlist: [
        "0xff577f0e828a878743ecc5e2632cbf65cecf17cf",
        "0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135",
        "0x3f618967492945c02d5222d333e903345fde741a",
        "0xc99bcff6564bafc70ba1b53c53a03541f780a546",
        "0x1fa900dbb20ed45d18883849c00632bca16f6610",
        "0xbEEA3B382696669e0E67C08Ea9f4aaE8d528Af0F",
        "0xf8C42655373A280e8800BEeE44fcC12ffC99E797",
        "0xa07028B453a1f6Ac277e93f3A0eA73B4bE5c7d63",
        "0x23C77A553AAc0ad009441C856c05D117c1131e3d",
    ],
    internalName: "zksync",
    nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
    contracts: {
        ...chains.zksync.contracts,
        limitOrder: {
            address: "0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa",
        },
        nftManager: {
            address: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
        },
        weth9: {
            address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
        },
        multicall2: {
            address: "0x8bB86A31795d3e8ef12c630C288770e13eEcF038",
        },
        multicall3: {
            address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
        },
    },
});

const MAINNET_CHAINS = [
    arbitrum,
    base,
    boba,
    blast,
    bsc,
    filecoin,
    mainnet,
    moonbeam,
    optimism,
    polygon,
    rootstock,
    scroll,
    polygonZkEvm,
    zkSync,
    manta,
    linea,
    taiko,
    mantle,
    sei,
    lisk,
    bob,
    gnosis,
    metal,
    corn,
    sonic,
    celo,
    hemi,
    telos,
    saga,
    goat,
    redbelly,
    lightlink,
    worldchain,
    xdc,
    tronShasta,
    lens,
    nibiru,
    etherlink,
];

exports.MAINNET_CHAINS = MAINNET_CHAINS;
exports.arbitrum = arbitrum;
exports.base = base;
exports.blast = blast;
exports.bob = bob;
exports.boba = boba;
exports.bsc = bsc;
exports.celo = celo;
exports.corn = corn;
exports.etherlink = etherlink;
exports.filecoin = filecoin;
exports.gnosis = gnosis;
exports.goat = goat;
exports.hemi = hemi;
exports.lens = lens;
exports.lightlink = lightlink;
exports.linea = linea;
exports.lisk = lisk;
exports.mainnet = mainnet;
exports.manta = manta;
exports.mantle = mantle;
exports.metal = metal;
exports.moonbeam = moonbeam;
exports.nibiru = nibiru;
exports.optimism = optimism;
exports.polygon = polygon;
exports.polygonZkEvm = polygonZkEvm;
exports.redbelly = redbelly;
exports.rootstock = rootstock;
exports.saga = saga;
exports.scroll = scroll;
exports.sei = sei;
exports.sonic = sonic;
exports.taiko = taiko;
exports.telos = telos;
exports.tronShasta = tronShasta;
exports.worldchain = worldchain;
exports.xdc = xdc;
exports.zkSync = zkSync;
