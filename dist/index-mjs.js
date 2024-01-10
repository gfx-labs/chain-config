import { arbitrum as arbitrum$1, base as base$1, boba as boba$1, bsc as bsc$1, filecoin as filecoin$1, mainnet as mainnet$1, moonbeam as moonbeam$1, optimism as optimism$1, polygon as polygon$1, rootstock as rootstock$1, scroll as scroll$1, polygonZkEvm as polygonZkEvm$1, zkSync as zkSync$1 } from 'viem/chains';

const arbitrum = {
    ...arbitrum$1,
    sortIndex: 1,
    blockTimeSeconds: 0.25,
    logoUrl: 'https://assets.oku.trade/arbitrum-logo.svg',
    defaultPool: '0xcda53b1f66614552f834ceef361a8d12a0b8dad8',
    defaultToken0: '0x912ce59144191c1204e64559fe8253a0e49e6548',
    defaultToken1: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    tokenList: [
        { symbol: 'USDT', address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9' },
        { symbol: 'USDC.e', address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8' },
        { symbol: 'USDC', address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831' },
        { symbol: 'DAI', address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1' },
        { symbol: 'WETH', address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1' },
        { symbol: 'ARB', address: '0x912ce59144191c1204e64559fe8253a0e49e6548' },
    ],
    stables: [
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
        '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    ],
    watchlist: [
        '0x17c14d2c404d167802b16c450d3c99f88f2c4f4d',
        '0xc82819f72a9e77e2c0c3a69b3196478f44303cf4',
        '0x81c48d31365e6b526f6bbadc5c9aafd822134863',
        '0xa62ad78825e3a55a77823f00fe0050f567c1e4ee',
        '0x135e49cc315fed87f989e072ee11132686cf84f3',
        '0xa961f0473da4864c5ed28e00fcc53a3aab056c1b',
        '0x149e36e72726e0bcea5c59d40df2c43f60f5a22d',
        '0x8e295789c9465487074a65b1ae9ce0351172393f',
        '0x97bca422ec0ee4851f2110ea743c1cd0a14835a1',
        '0x92c63d0e701caae670c9415d91c474f686298f00',
        '0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71',
        '0xf0428617433652c9dc6d1093a42adfbf30d29f74',
        '0x1aeedd3727a6431b8f070c0afaa81cc74f273882',
        '0x446bf9748b4ea044dd759d9b9311c70491df8f29',
        '0x42d7c8302a746f98ec74f0dbc95fc39b46c1abb6',
        '0xc91b7b39bbb2c733f0e7459348fd0c80259c8471',
        '0xC31E54C7A869B9FCBECC14363CF510D1C41FA443',
        '0x641C00A822e8b671738d32a431a4Fb6074E5c79d',
        '0xCDA53B1F66614552F834CEEF361A8D12A0B8DAD8',
        '0xC6F780497A95E246EB9449F5E4770916DCD6396A',
        '0x2f5e87C9312fa29aed5c179E456625D79015299c',
        '0x13398E27A21BE1218B6900CBEDF677571DF42A48',
        '0x31FA55E03BAD93C7F8AFFDD2EC616EBFDE246001',
        '0x468B88941E7CC0B88C1869D68AB6B570BCEF62FF',
        '0xd37Af656Abf91c7f548FfFC0133175b5e4d3d5e6',
        '0xc6962004f452be9203591991d15f6b388e09e8d0',
        '0xdbaeb7f0dfe3a0aafd798ccecb5b22e708f7852c',
        '0xbe3ad6a5669dc0b8b12febc03608860c31e2eef6',
        '0x80a9ae39310abf666a87c743d6ebbd0e8c42158e',
        '0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61',
        '0x1862200e8e7ce1c0827b792d0f9546156f44f892',
        '0x1edd8c76f74d816f7472be69b174fe7b3084221e',
        '0x4d834a9b910e6392460ebcfb59f8eef27d5c19ff',
        '0x0632742c132413cd47438691d8064ff9214ac216',
        '0xa8328bf492ba1b77ad6381b3f7567d942b000baf',
        '0x50450351517117cb58189edba6bbad6284d45902',
    ],
    internalName: 'arbitrum',
    contracts: {
        ...arbitrum$1.contracts,
        nftManager: {
            address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        },
        limitOrder: {
            address: '0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf',
        },
        weth9: {
            address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        },
    },
};

const base = {
    ...base$1,
    sortIndex: 8,
    blockTimeSeconds: 2,
    logoUrl: 'https://assets.oku.trade/base-logo.svg',
    defaultPool: '0x9e37cb775a047ae99fc5a24dded834127c4180cd',
    defaultToken0: '0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8',
    defaultToken1: '0x4200000000000000000000000000000000000006',
    tokenList: [
        { symbol: 'USDbC', address: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca' },
        { symbol: 'cbETH', address: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22' },
        { symbol: 'WETH', address: '0x4200000000000000000000000000000000000006' },
        { symbol: 'USDC', address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913' },
    ],
    stables: [
        '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
        '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    ],
    watchlist: [
        '0x9e37cb775a047ae99fc5a24dded834127c4180cd',
        '0x4c36388be6f416a29c8d8eee81c771ce6be14b18',
        '0xd0b53d9277642d899df5c87a3966a349a798f224',
        '0x3bc5180d5439b500f381f9a46f15dd6608101671',
        '0x24e1cbd6fed006ceed9af0dce688acc7951d57a9',
        '0x10648ba41b8565907cfa1496765fa4d95390aa0d',
    ],
    internalName: 'base',
    contracts: {
        ...base$1.contracts,
        nftManager: {
            address: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
        },
        weth9: {
            address: '0x4200000000000000000000000000000000000006',
        },
        limitOrder: {
            address: '0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27',
        }
    },
};

const boba = {
    ...boba$1,
    sortIndex: 11,
    blockTimeSeconds: 300,
    logoUrl: 'https://assets.oku.trade/boba-logo.svg',
    defaultPool: '0xdF37543dae7986E48E3ce83F390A828A9F3D23BA',
    defaultToken0: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
    defaultToken1: '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7',
    tokenList: [
        { symbol: 'USDC', address: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc' },
        { symbol: 'BOBA', address: '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7' },
        { symbol: 'WETH', address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000' },
        { symbol: 'WBTC', address: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b' },
        { symbol: 'USDT', address: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d' },
    ],
    stables: [
        '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
        '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
        '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
    ],
    watchlist: [
        '0xdF37543dae7986E48E3ce83F390A828A9F3D23BA',
        '0x162b1fda171463974e5262bac5824da233f11e00',
        '0xfe1a0c58e38fa71618545df15e5479559ce51108',
        '0xb1ed67e29b2497404a2ac7f2a2989c3328ec2999',
        '0x66faef55892dae3932a043d3238ecaa271d36e0d',
    ],
    internalName: 'boba',
    contracts: {
        ...boba$1.contracts,
        limitOrder: {
            address: '0xfefb60591cffc694c0137983a9091d64af8ecbac',
        },
        nftManager: {
            address: '0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71',
        },
        weth9: {
            address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        },
    },
};

const bsc = {
    ...bsc$1,
    sortIndex: 9,
    blockTimeSeconds: 3,
    logoUrl: 'https://assets.oku.trade/bsc-logo.svg',
    defaultPool: '0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869',
    defaultToken0: '0x55d398326f99059ff775485246999027b3197955',
    defaultToken1: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    tokenList: [],
    stables: [],
    watchlist: ['0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869'],
    internalName: 'bsc',
    contracts: {
        ...bsc$1.contracts,
        nftManager: {
            address: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
        },
        weth9: {
            address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        },
    },
};

const filecoin = {
    ...filecoin$1,
    sortIndex: 10,
    name: "Filecoin",
    blockTimeSeconds: 30,
    blockExplorers: {
        ...filecoin$1.blockExplorers,
        default: {
            name: 'FVM Explorer',
            url: 'https://fvm.starboard.ventures/explorer',
        },
    },
    logoUrl: 'https://assets.oku.trade/filecoin-logo.svg',
    defaultPool: '0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05',
    defaultToken0: '0xb829b68f57cc546da7e5806a929e53be32a4625d',
    defaultToken1: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
    tokenList: [
        { symbol: 'WFIL', address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A' },
        { symbol: 'axlWETH', address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D' },
        { symbol: 'axlWBTC', address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad' },
        { symbol: 'axlUSDC', address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215' },
        { symbol: 'axlUSDT', address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6' },
    ],
    stables: [
        '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
        '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
        '0x2421db204968A367CC2C866CD057fA754Cb84EdF',
        '0x422849b355039bc58f2780cc4854919fc9cfaf94',
    ],
    watchlist: ['0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05', '0x9d8ea62e1264ab667d234b5610774a08e608e3b8'],
    internalName: 'filecoin',
    contracts: {
        ...filecoin$1.contracts,
        limitOrder: {
            address: '0xded8791056aa39581460a005a3c400a281e24bd7',
        },
        nftManager: {
            address: '0x4cd986dD509fbB6A695aE971d5C56c8795f640ee',
        },
        weth9: {
            address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
        },
    },
};

const mainnet = {
    ...mainnet$1,
    sortIndex: 0,
    blockTimeSeconds: 15,
    logoUrl: 'https://assets.oku.trade/ethereum-logo.webp',
    defaultPool: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
    defaultToken0: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    defaultToken1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenList: [
        { symbol: 'DAI', address: '0x6b175474e89094c44da98b954eedeac495271d0f' },
        { symbol: 'WBTC', address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599' },
        { symbol: 'USDT', address: '0xdac17f958d2ee523a2206206994597c13d831ec7' },
        { symbol: 'WETH', address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' },
        { symbol: 'USDC', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' },
    ],
    stables: [
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        '0x0000000000085d4780B73119b644AE5ecd22b376',
        '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
        '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
        '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
        '0x853d955acef822db058eb8505911ed77f175b99e',
        '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
        '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
        '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
        '0x1a13f4ca1d028320a707d99520abfefca3998b7f',
    ],
    watchlist: [
        '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8',
        '0x4e68ccd3e89f51c3074ca5072bbac773960dfa36',
        '0x99ac8ca7087fa4a2a1fb6357269965a2014abc35',
        '0xcbcdf9626bc03e24f779434178a73a0b4bad62ed',
        '0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8',
        '0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801',
        '0x3416cf6c708da44db2624d63ea0aaef7113527c6',
        '0x5777d92f208679db4b9778590fa3cab3ac9e2168',
        '0x290a6a7460b308ee3f19023d2d00de604bcf5b42',
        '0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf',
        '0xa3f558aebaecaf0e11ca4b2199cc5ed341edfd74',
        '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
        '0x11b815efb8f581194ae79006d24e0d814b7697f6',
        '0x4585fe77225b41b697c938b018e2ac67ac5a20c0',
        '0x4e0924d3a751be199c426d52fb1f2337fa96f736',
        '0x9a772018fbd77fcd2d25657e5c547baff3fd7d16',
        '0x11950d141ecb863f01007add7d1a342041227b58',
        '0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa',
        '0x60594a405d53811d3bc4766596efd80fd545a270',
        '0x840deeef2f115cf50da625f7368c24af6fe74410',
        '0xe8c6c9227491c0a8156a0106a0204d881bb7e531',
        '0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8',
        '0xc5af84701f98fa483ece78af83f11b6c38aca71d',
        '0x7bea39867e4169dbe237d55c8242a8f2fcdcc387',
    ],
    internalName: 'ethereum',
    contracts: {
        ...mainnet$1.contracts,
        limitOrder: {
            address: '0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf',
        },
        nftManager: {
            address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        },
        weth9: {
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        },
    },
};

const moonbeam = {
    ...moonbeam$1,
    sortIndex: 12,
    blockTimeSeconds: 30,
    logoUrl: 'https://assets.oku.trade/moonbeam-logo.svg',
    defaultPool: '0xba66370d96a9d61afa66283900b78c1f6ed02782',
    defaultToken0: '0xab3f0245b83feb11d15aaffefd7ad465a59817ed',
    defaultToken1: '0xacc15dc74880c9944775448304b263d191c6077f',
    tokenList: [
        { symbol: 'WETH', address: '0xab3f0245b83feb11d15aaffefd7ad465a59817ed' },
        { symbol: 'USDC', address: '0x931715fee2d06333043d11f658c8ce934ac61d0c' },
    ],
    stables: [
        '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        '0x931715FEE2d06333043d11F658C8CE934aC61D0c',
        '0x765277eebeca2e31912c9946eae1021199b39c61',
        '0x06e605775296e851ff43b4daa541bb0984e9d6fd',
        '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
        '0x8e70cd5b4ff3f62659049e74b6649c6603a0e594',
    ],
    watchlist: [
        '0xB64fD2Cf30588e4ACbb92e98b28d976a61914D29',
        '0xba66370d96a9d61afa66283900b78c1f6ed02782',
        '0x19156c03a6fd894beb4fa6a828e854d3a4bed372',
    ],
    internalName: 'moonbeam',
    contracts: {
        ...moonbeam$1.contracts,
        limitOrder: {
            address: '0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf',
        },
        nftManager: {
            address: '0x9036d0dcb5a059c9371b05d508f0072df773854e',
        },
        weth9: {
            address: '0xacc15dc74880c9944775448304b263d191c6077f',
        },
    },
};

const optimism = {
    ...optimism$1,
    blockTimeSeconds: 0.5,
    sortIndex: 2,
    logoUrl: 'https://assets.oku.trade/optimism-logo.svg',
    defaultPool: '0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36',
    defaultToken0: '0x4200000000000000000000000000000000000042',
    defaultToken1: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    tokenList: [
        { symbol: 'USDT', address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58' },
        { symbol: 'DAI', address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1' },
        { symbol: 'USDC', address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607' },
        { symbol: 'WETH', address: '0x4200000000000000000000000000000000000006' },
        { symbol: 'OP', address: '0x4200000000000000000000000000000000000042' },
    ],
    stables: [
        '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
        '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
        '0x8aE125E8653821E851F12A49F7765db9a9ce7384',
        '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
        '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
        '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
    ],
    watchlist: [
        '0xb589969d38ce76d3d7aa319de7133bc9755fd840',
        '0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36',
        '0xdd0c6bae8ad5998c358b823df15a2a4181da1b80',
        '0x03af20bdaaffb4cc0a521796a223f7d85e2aac31',
        '0x0bb50d3e479e4682558fdb86f41a205e2c035ae5',
        '0x6168ec836d0b1f0c37381ec7ed1891a412872121',
        '0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2',
        '0xb2ac2e5a3684411254d58b1c5a542212b782114d',
        '0x68f5c0a2de713a54991e01858fd27a3832401849',
        '0x73b14a78a0d396c521f954532d43fd5ffe385216',
        '0x85149247691df622eaf1a8bd0cafd40bc45154a9',
        '0xc858a329bf053be78d6239c4a4343b8fbd21472b',
        '0xf1f199342687a7d78bcc16fce79fa2665ef870e1',
        '0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6',
        '0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c',
        '0x85c31ffa3706d1cce9d525a00f1c7d4a2911754c',
        '0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05',
        '0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0',
        '0xaefc1edaede6adadcdf3bb344577d45a80b19582',
        '0x0392B358CE4547601BEFA962680BEDE836606AE2',
        '0x36E42931A765022790B797963E42C5522D6B585A',
        '0x03A9DC118B231480058E7A3B051042EC83663794',
        '0x95D7D146AE40D4822C2750276B54B6EED530D374',
        '0x7f1c919a92bce8790a85d6360b85cf21b997a6b5',
        '0x1a54ae9f662b463f8d432482975c17e51518b50d',
        '0xff7fbdf7832ae524deda39ca402e03d92adff7a5',
        '0x55bc964fe3b0c8cc2d4c63d65f1be7aef9bb1a3c',
        '0x535541f1aa08416e69dc4d610131099fa2ae7222',
        '0xadb35413ec50e0afe41039eac8b930d313e94fa4',
        '0x730691cdac3cbd4d41fc5eb9d8abbb0cea795b94',
    ],
    internalName: 'optimism',
    contracts: {
        ...optimism$1.contracts,
        limitOrder: {
            address: '0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf',
        },
        nftManager: {
            address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        },
        weth9: {
            address: '0x4200000000000000000000000000000000000006',
        },
    },
};

const polygon = {
    ...polygon$1,
    blockTimeSeconds: 2,
    sortIndex: 3,
    logoUrl: 'https://assets.oku.trade/polygon-logo.webp',
    defaultPool: '0xa374094527e1673a86de625aa59517c5de346d32',
    defaultToken0: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    defaultToken1: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    tokenList: [
        { symbol: 'DAI', address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063' },
        { symbol: 'USDT', address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f' },
        { symbol: 'WETH', address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619' },
        { symbol: 'USDC', address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' },
        { symbol: 'WMATIC', address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270' },
    ],
    stables: [
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    ],
    watchlist: [
        '0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5',
        '0x0e44ceb592acfc5d3f09d996302eb4c499ff8c10',
        '0x167384319b41f7094e62f7506409eb38079abff8',
        '0x94ab9e4553ffb839431e37cc79ba8905f45bfbea',
        '0x88f3c15523544835ff6c738ddb30995339ad57d6',
        '0x45dda9cb7c25131df268515131f647d726f50608',
        '0xa374094527e1673a86de625aa59517c5de346d32',
        '0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7',
        '0x50eaedb835021e4a108b7290636d62e9765cc6d7',
        '0x86f1d8390222a3691c28938ec7404a1661e618e0',
        '0xeef1a9507b3d505f0062f2be9453981255b503c8',
        '0x1f6082db7c8f4b199e17090cd5c8831a1dad1997',
        '0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d',
        '0x3a5329ee48a06671ad1bf295b8a233ee9b9b975e',
        '0x0a63d3910ffc1529190e80e10855c4216407cc45',
        '0x5645dcb64c059aa11212707fbf4e7f984440a8cf',
        '0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6',
        '0x2aceda63b5e958c45bd27d916ba701bc1dc08f7a',
        '0x4d05f2a005e6f36633778416764e82d1d12e7fbb',
        '0x3d0acd52ee4a9271a0ffe75f9b91049152bac64b',
        '0x3e31ab7f37c048fc6574189135d108df80f0ea26',
        '0xd866fac7db79994d08c0ca2221fee08935595b4b',
        '0x98b9162161164de1ed182a0dfa08f5fbf0f733ca',
        '0x4ccd010148379ea531d6c587cfdd60180196f9b1',
        '0xfe343675878100b344802a6763fd373fdeed07a4',
        '0x357faf5843c7fd7fb4e34fbeabdac16eabe8a5bc',
    ],
    internalName: 'polygon',
    contracts: {
        ...polygon$1.contracts,
        nftManager: {
            address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        },
        limitOrder: {
            address: '0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf',
        },
        weth9: {
            address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        },
    },
};

const rootstock = {
    ...rootstock$1,
    sortIndex: 7,
    name: "Rootstock",
    blockTimeSeconds: 33,
    logoUrl: 'https://assets.oku.trade/rootstock-logo.svg',
    defaultPool: '0xd2ffe51ab4e622a411abbe634832a19d919e9c55',
    defaultToken0: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
    defaultToken1: '0xef213441a85df4d7acbdae0cf78004e1e486bb96',
    tokenList: [
        { symbol: 'WRBTC', address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d' },
        { symbol: 'RIF', address: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5' },
        { symbol: 'RUSDT', address: '0xef213441a85df4d7acbdae0cf78004e1e486bb96' },
    ],
    stables: ['0xef213441a85df4d7acbdae0cf78004e1e486bb96', '0x3a15461d8ae0f0fb5fa2629e9da7d66a794a6e37'],
    watchlist: ['0xd2ffe51ab4e622a411abbe634832a19d919e9c55', '0x022650756421f2e636d4138054331cbfafb55d9e', '0x549a5d92412161a1a2828549a657a49dd9fa046c', '0xcba7abe98fd6a65259837d76a3409841c1dd4288', '0xbe092d38045ef7f9cdc5014278a4239e896bf5ca'],
    blockExplorers: {
        ...rootstock$1.blockExplorers,
        default: rootstock$1.blockExplorers.blockscout,
    },
    internalName: 'rootstock',
    contracts: {
        ...rootstock$1.contracts,
        limitOrder: {
            address: '0x83B1cF411f57F7373bBFF81dCE81437e768F4252',
        },
        nftManager: {
            address: '0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1',
        },
        weth9: {
            address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
        },
    },
};

const scroll = {
    ...scroll$1,
    sortIndex: 5,
    blockTimeSeconds: 3,
    logoUrl: 'https://assets.oku.trade/scroll-logo.png',
    defaultPool: '0x813df550a32d4a9d42010d057386429ad2328ed9',
    defaultToken0: '0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4',
    defaultToken1: '0x5300000000000000000000000000000000000004',
    tokenList: [
        { symbol: 'USDC', address: '0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4' },
        { symbol: 'WETH', address: '0x5300000000000000000000000000000000000004' },
        { symbol: 'USDT', address: '0xf55bec9cafdbe8730f096aa55dad6d22d44099df' },
        { symbol: 'WBTC', address: '0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1' },
        { symbol: 'DAI', address: '0xca77eb3fefe3725dc33bccb54edefc3d9f764f97' }
    ],
    stables: ['0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4', '0xf55bec9cafdbe8730f096aa55dad6d22d44099df', '0xca77eb3fefe3725dc33bccb54edefc3d9f764f97'],
    watchlist: [
        '0xf1783f3377b3a70465c193ef33942c0803121ba0',
        '0x813df550a32d4a9d42010d057386429ad2328ed9',
    ],
    internalName: 'scroll',
    contracts: {
        ...scroll$1.contracts,
        limitOrder: {
            address: '0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377',
        },
        nftManager: {
            address: '0xB39002E4033b162fAc607fc3471E205FA2aE5967',
        },
        weth9: {
            address: '0x5300000000000000000000000000000000000004',
        },
    },
};

const polygonZkEvm = {
    ...polygonZkEvm$1,
    sortIndex: 6,
    blockTimeSeconds: 7,
    logoUrl: 'https://assets.oku.trade/zkevm-logo.svg',
    defaultPool: '0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd',
    defaultToken0: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
    defaultToken1: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
    tokenList: [
        { symbol: 'WETH', address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9' },
        { symbol: 'USDC', address: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035' },
        { symbol: 'USDT', address: '0x1e4a5963abfd975d8c9021ce480b42188849d41d' },
        { symbol: 'DAI', address: '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4' }
    ],
    stables: ['0x1e4a5963abfd975d8c9021ce480b42188849d41d', '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035', '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4'],
    watchlist: ['0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd'],
    internalName: 'polygon-zkevm',
    contracts: {
        ...polygonZkEvm$1.contracts,
        limitOrder: {
            address: '0x5f1ef1d278013567c3c67e18d2d35bfa9954f723',
        },
        nftManager: {
            address: '0xf0d61aeda516cca1ff20be65cfb0213be688a24f',
        },
        weth9: {
            address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
        },
    },
};

const zkSync = {
    ...zkSync$1,
    blockTimeSeconds: 2,
    sortIndex: 4,
    logoUrl: 'https://assets.oku.trade/zksync-logo.svg',
    defaultPool: '0xff577f0e828a878743ecc5e2632cbf65cecf17cf',
    defaultToken0: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',
    defaultToken1: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
    tokenList: [
        { symbol: 'WETH', address: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91' },
        { symbol: 'USDC', address: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4' },
    ],
    stables: ['0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', '0x503234F203fC7Eb888EEC8513210612a43Cf6115'],
    watchlist: [
        '0xff577f0e828a878743ecc5e2632cbf65cecf17cf',
        '0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135',
        '0x3f618967492945c02d5222d333e903345fde741a',
        '0xc99bcff6564bafc70ba1b53c53a03541f780a546',
        '0x1fa900dbb20ed45d18883849c00632bca16f6610',
    ],
    internalName: 'zksync',
    blockExplorers: {
        ...zkSync$1.blockExplorers,
        default: {
            name: 'Zksync Era Explorer',
            url: 'https://era.zksync.network',
        },
    },
    contracts: {
        ...zkSync$1.contracts,
        limitOrder: {
            address: '0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa',
        },
        nftManager: {
            address: '0x0616e5762c1E7Dc3723c50663dF10a162D690a86',
        },
        weth9: {
            address: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
        },
    },
};

const MAINNET_CHAINS = [
    arbitrum,
    base,
    boba,
    bsc,
    filecoin,
    mainnet,
    moonbeam,
    optimism,
    polygon,
    rootstock,
    scroll,
    polygonZkEvm,
    zkSync
];

export { MAINNET_CHAINS, arbitrum, base, boba, bsc, filecoin, mainnet, moonbeam, optimism, polygon, polygonZkEvm, rootstock, scroll, zkSync };
