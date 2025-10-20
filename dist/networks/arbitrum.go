package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Arbitrum Network = Network{
	ChainId:           42161,
	LogoUrl:           "https://assets.oku.trade/chains/arbitrum-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         1,
	LaunchTime:        1688997600,
	SafeReorgDistance: 180000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://arbiscan.io",
			ApiUrl: "https://api.arbiscan.io/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xcda53b1f66614552f834ceef361a8d12a0b8dad8"),
	InternalName:    "arbitrum",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":   "arbitrum",
		"debank":   "arb",
		"cowswap":  "arbitrum_one",
		"tenderly": "true",
	},
	DefaultToken0: common.HexToAddress("0x912ce59144191c1204e64559fe8253a0e49e6548"),
	DefaultToken1: common.HexToAddress("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
	BlockAid:      "arbitrum",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0xaf88d065e77c8cc2239327c5edb3a432268e5831"), common.HexToAddress("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"), common.HexToAddress("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"), common.HexToAddress("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0xaf88d065e77c8cc2239327c5edb3a432268e5831"): {}, common.HexToAddress("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"): {}, common.HexToAddress("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"): {}, common.HexToAddress("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x17c14d2c404d167802b16c450d3c99f88f2c4f4d"), common.HexToAddress("0xc82819f72a9e77e2c0c3a69b3196478f44303cf4"), common.HexToAddress("0x81c48d31365e6b526f6bbadc5c9aafd822134863"), common.HexToAddress("0xa62ad78825e3a55a77823f00fe0050f567c1e4ee"), common.HexToAddress("0x135e49cc315fed87f989e072ee11132686cf84f3"), common.HexToAddress("0xa961f0473da4864c5ed28e00fcc53a3aab056c1b"), common.HexToAddress("0x149e36e72726e0bcea5c59d40df2c43f60f5a22d"), common.HexToAddress("0x8e295789c9465487074a65b1ae9ce0351172393f"), common.HexToAddress("0x97bca422ec0ee4851f2110ea743c1cd0a14835a1"), common.HexToAddress("0x92c63d0e701caae670c9415d91c474f686298f00"), common.HexToAddress("0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71"), common.HexToAddress("0xf0428617433652c9dc6d1093a42adfbf30d29f74"), common.HexToAddress("0x1aeedd3727a6431b8f070c0afaa81cc74f273882"), common.HexToAddress("0x446bf9748b4ea044dd759d9b9311c70491df8f29"), common.HexToAddress("0x42d7c8302a746f98ec74f0dbc95fc39b46c1abb6"), common.HexToAddress("0xc91b7b39bbb2c733f0e7459348fd0c80259c8471"), common.HexToAddress("0xC31E54C7A869B9FCBECC14363CF510D1C41FA443"), common.HexToAddress("0x641C00A822e8b671738d32a431a4Fb6074E5c79d"), common.HexToAddress("0xCDA53B1F66614552F834CEEF361A8D12A0B8DAD8"), common.HexToAddress("0xC6F780497A95E246EB9449F5E4770916DCD6396A"), common.HexToAddress("0x2f5e87C9312fa29aed5c179E456625D79015299c"), common.HexToAddress("0x13398E27A21BE1218B6900CBEDF677571DF42A48"), common.HexToAddress("0x31FA55E03BAD93C7F8AFFDD2EC616EBFDE246001"), common.HexToAddress("0x468B88941E7CC0B88C1869D68AB6B570BCEF62FF"), common.HexToAddress("0xd37Af656Abf91c7f548FfFC0133175b5e4d3d5e6"), common.HexToAddress("0xc6962004f452be9203591991d15f6b388e09e8d0"), common.HexToAddress("0xdbaeb7f0dfe3a0aafd798ccecb5b22e708f7852c"), common.HexToAddress("0xbe3ad6a5669dc0b8b12febc03608860c31e2eef6"), common.HexToAddress("0x80a9ae39310abf666a87c743d6ebbd0e8c42158e"), common.HexToAddress("0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61"), common.HexToAddress("0x1862200e8e7ce1c0827b792d0f9546156f44f892"), common.HexToAddress("0x1edd8c76f74d816f7472be69b174fe7b3084221e"), common.HexToAddress("0x4d834a9b910e6392460ebcfb59f8eef27d5c19ff"), common.HexToAddress("0x0632742c132413cd47438691d8064ff9214ac216"), common.HexToAddress("0xa8328bf492ba1b77ad6381b3f7567d942b000baf"), common.HexToAddress("0x50450351517117cb58189edba6bbad6284d45902")},
	BlockTimeSeconds: 0.25,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		LimitOrderRegistryDeployBlock: 98754575,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"),
			NativeWrappedName:  "WETH",
			Pools:              []common.Address{common.HexToAddress("0xc31e54c7a869b9fcbecc14363cf510d1c41fa443"), common.HexToAddress("0x641c00a822e8b671738d32a431a4fb6074e5c79d"), common.HexToAddress("0xcda53b1f66614552f834ceef361a8d12a0b8dad8"), common.HexToAddress("0x13398e27a21be1218b6900cbedf677571df42a48"), common.HexToAddress("0x17c14d2c404d167802b16c450d3c99f88f2c4f4d"), common.HexToAddress("0x31fa55e03bad93c7f8affdd2ec616ebfde246001"), common.HexToAddress("0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71"), common.HexToAddress("0x81c48d31365e6b526f6bbadc5c9aafd822134863"), common.HexToAddress("0xd37af656abf91c7f548fffc0133175b5e4d3d5e6"), common.HexToAddress("0x50450351517117cb58189edba6bbad6284d45902"), common.HexToAddress("0xbed2589fefae17d62a8a4fdac92fa5895cae90d2"), common.HexToAddress("0xe754841b77c874135caca3386676e886459c2d61"), common.HexToAddress("0xa961f0473da4864c5ed28e00fcc53a3aab056c1b"), common.HexToAddress("0xc82819f72a9e77e2c0c3a69b3196478f44303cf4"), common.HexToAddress("0x97bca422ec0ee4851f2110ea743c1cd0a14835a1"), common.HexToAddress("0x6387b0d5853184645cc9a77d6db133355d2eb4e4"), common.HexToAddress("0xf0428617433652c9dc6d1093a42adfbf30d29f74"), common.HexToAddress("0x7bb5e71fab18feba077b28355f20f5643ceece28"), common.HexToAddress("0xac70bd92f89e6739b3a08db9b6081a923912f73d"), common.HexToAddress("0xa62ad78825e3a55a77823f00fe0050f567c1e4ee"), common.HexToAddress("0xeaab66d034e9a5033888402b742c9ddfbf901676"), common.HexToAddress("0x2039f8c9cd32ba9cd2ea7e575d5b1abea93f7527"), common.HexToAddress("0x42161084d0672e1d3f26a9b53e653be2084ff19c"), common.HexToAddress("0xa74eceae9c7670b019e0890881598b4c398d1c01"), common.HexToAddress("0xa8328bf492ba1b77ad6381b3f7567d942b000baf"), common.HexToAddress("0xea3d27d0b8d525f28365957f50b8ba8da9a618b5"), common.HexToAddress("0xdd092f5dce127961af6ebe975978c084c935bcc8"), common.HexToAddress("0x88b553f99bf8cc6c18435c0c19d4d9b433d83645"), common.HexToAddress("0x7f580f8a02b759c350e6b8340e7c2d4b8162b6a9"), common.HexToAddress("0x02c79a7e3d8a9cb773cd5f69be00a64f48308508"), common.HexToAddress("0x458bcc519fa8c223e0c1aeb458bb85710f594329"), common.HexToAddress("0xb791ad21ba45c76629003b4a2f04c0d544406e37"), common.HexToAddress("0x267fcf6cb04eda3c997b7e49d8b7b95382b0ee7b"), common.HexToAddress("0x37516211fe11d49b84cb959631526e1f4e3fb86f"), common.HexToAddress("0x39007024e17fd49f11382b597867fda2f4a3ef15"), common.HexToAddress("0x53c6ca2597711ca7a73b6921faf4031eedf71339"), common.HexToAddress("0x7f9a20548d9482041dc33435a7fb25be7c4b98b9"), common.HexToAddress("0xcc33cad0bd4c957fa6c28fdcd72040d626854a4f"), common.HexToAddress("0x7e5e4a3f855f19cc1a45b9eff1c8b2419036ce85"), common.HexToAddress("0x2dfbbc8c9405c70ca0f81944332841663d2333b1"), common.HexToAddress("0x2ce827d2b5d248f6b29cfade1542421176eb1171"), common.HexToAddress("0xf8e5a77a4f187cfb455663b37619257565439f6a"), common.HexToAddress("0x626b9d80ebc0ded0e92ba4061fe70d3154ba6d2e"), common.HexToAddress("0xcc9397675bd4d373996175fcc03bff775c1440e7"), common.HexToAddress("0xe4d9faddd9bca5d8393bee915dc56e916ab94d27"), common.HexToAddress("0xc26064c6768215cd1c54b17a5525387a36176173"), common.HexToAddress("0xfea0e46a50156675432f9bc35d0d173ed30674ae"), common.HexToAddress("0xc021d8012985c2781ca25c84103a8681d4e16acb"), common.HexToAddress("0x3ab43147e282667ede827579bb7d5e8d1e814742"), common.HexToAddress("0xf96146159d191410f1ca3890af71005c468aaff6"), common.HexToAddress("0xd3eb92fb329c043b24aa24253b98ce14816fa05f"), common.HexToAddress("0xea263b98314369f2245c7b7e6a9f72e25cb8cded"), common.HexToAddress("0x903c3d8adf51e169599bb5adb0d20bb4c48cb44c"), common.HexToAddress("0x76d56579aa6356d860dcf7f8028d9ffd2e3c90f3"), common.HexToAddress("0x8278591bbbbe7d86e783507e7f6320ffc9c021e5"), common.HexToAddress("0x4d2fe06fd1c4368042b926d082484d2e3cc8f3f5"), common.HexToAddress("0x3cc98f9e2a1f92bd290bea5637a29d9647bd8698"), common.HexToAddress("0x58039203442c9f2a45d5536bd021a383c7f3035c"), common.HexToAddress("0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61"), common.HexToAddress("0x32b89d2442b4140c052bdba2ac6b03bad7243286"), common.HexToAddress("0x99c2ce89030d53556c8ee4b57a8c51fb93760237"), common.HexToAddress("0xc09254d1be9c3b7335021873546ba480383981d9"), common.HexToAddress("0xb6cca513eb79833c09c0a4c50ed2c897c5574cb3"), common.HexToAddress("0x2e630136c42bc72f1285743347ba77a75077aff4"), common.HexToAddress("0x90605ac59f1f19a7fe71f777ddbda83a3f25778e"), common.HexToAddress("0x54b7fe035ac57892d68cba53dbb5156ce79058d6"), common.HexToAddress("0x5b309eee32fada35e8fe5948a5d95dd86da0f855"), common.HexToAddress("0xf95de9ce6a3499c23b09265a9abcd862451453ba"), common.HexToAddress("0x1442097733acf0a2b5c4ab422f1c0186e95d52ba"), common.HexToAddress("0x9a4898365d9d07d5a20724361ecd6bf26d200873"), common.HexToAddress("0xfdad2678d73d71c9804930b338daaf192d6daa9e"), common.HexToAddress("0x46c47c8daabca3e15bf238cda365894046bafa23"), common.HexToAddress("0xc051405edef0e64ebfc501cfe1158eb0d74f3208"), common.HexToAddress("0x20990c6edd90339c1f1c25bc9c8ed7837ff4ec46"), common.HexToAddress("0x1557fdfda61f135baf1a1682eebaa086a0fcab6e"), common.HexToAddress("0x80151aae63b24a7e1837fe578fb6be026ae8abba"), common.HexToAddress("0x4e0a15e2cdc8fde28ee4250c3deec0996190703f"), common.HexToAddress("0x74c1f85e5429ea828bedb2bb90ddbe2cb1c0fb31"), common.HexToAddress("0xdbbc93072295362d38b63accd447d9c0b36a1678"), common.HexToAddress("0xb8271188967be1d66baa122b6b1d6205d5d0096f"), common.HexToAddress("0x260d6d6c3ea3daf5d53442fc375054a3b023d38b"), common.HexToAddress("0x9a4d078024ca4d757209e4f4459fe501558960fc"), common.HexToAddress("0x32a5746ba6826828716cc1a394bc33301ebc7656"), common.HexToAddress("0x90d2fb08af9e9323d7cbd364181bda1e7d3c2c2f"), common.HexToAddress("0x76cb8fee30422d9ccc72ba98acf5ea078ef65ecd"), common.HexToAddress("0x04a8cddbb62e3499c8e84ccf77192ed6292bf29d"), common.HexToAddress("0x8d76e9c2bd1adde00a3dcdc315fcb2774cb3d1d6"), common.HexToAddress("0x4a15e653799b02927cad5893fa03c257ca3be43c"), common.HexToAddress("0xa3c015bfc999779d55bb849f85cdff53b4b82b7d"), common.HexToAddress("0x852bec42f6078d4b1af4703d2863e839ea5452c3"), common.HexToAddress("0x29e02c9fc7f3b23c2bd1b00357e267728e30705e"), common.HexToAddress("0x87adc4a56252206008134ca6e807f474290c867d"), common.HexToAddress("0xfb24cc51c53909d093feac9f460513a1751961c2"), common.HexToAddress("0x43c24bd16bce6f7b49316067cf48d2c55898c6bf"), common.HexToAddress("0x3574f407410d472564a135edae1bed00e77cdd13"), common.HexToAddress("0x4b3d3333125593816dbfc9cc2ff047bddd0e859f"), common.HexToAddress("0xd4ea7475ced55eae6f581f112b0603f066c72c49"), common.HexToAddress("0x3f4b104801f8b979b5448c05eaa39e0b1910da4c"), common.HexToAddress("0xcb7a3a9e1a057744a60d8103ee66dd28a71c4d75"), common.HexToAddress("0xff961c81c4aab577c313309ac790dc6f5a936e5a")},
			NativeQuotePools: []ChainContract{
				{
					BlockCreated: 100909,
					Address:      common.HexToAddress("0xc31e54c7a869b9fcbecc14363cf510d1c41fa443"),
				},
			},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        165,
		PoolFactory:                        common.HexToAddress("0x1F98431c8aD98523631AE4a59f267346ea31F984"),
		Multicall2:                         common.HexToAddress("0x842eC2c7D803033Edf55E478F461FC547Bc54EB2"),
		ProxyAdmin:                         common.HexToAddress("0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2"),
		TickLens:                           common.HexToAddress("0xbfd8137f7d1516D3ea5cA83523914859ec47F573"),
		Quoter:                             common.HexToAddress("0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"),
		SwapRouter:                         common.HexToAddress("0xE592427A0AEce92De3Edee1F18E0157C05861564"),
		SwapRouter02:                       common.HexToAddress("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"),
		NFTDescriptor:                      common.HexToAddress("0x42B24A95702b9986e82d421cC3568932790A48Ec"),
		NonfungibleTokenPositionDescriptor: common.HexToAddress("0x91ae842A5Ffd8d12023116943e72A606179294f3"),
		TransparentUpgradeableProxy:        common.HexToAddress("0xEe6A57eC80ea46401049E92587E52f5Ec1c24785"),
		NonfungiblePositionManager:         common.HexToAddress("0xC36442b4a4522E871399CD717aBDD847Ab11FE88"),
		V3Migrator:                         common.HexToAddress("0xA5644E29708357803b5A882D272c41cC0dF92B34"),
		UniswapV3Staker:                    common.HexToAddress("0xe34139463bA50bD61336E0c446Bd8C0867c6fE65"),
		PositionsNFT:                       common.HexToAddress("0xC36442b4a4522E871399CD717aBDD847Ab11FE88"),
		TopNativePool:                      common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
		PositionsNFTDeployBlock:            173,
		UniversalRouter:                    common.HexToAddress("0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5"),
		WrappedNativeAddress:               common.HexToAddress("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"),
		WrappedNativeSymbol:                "WETH",
		WrappedNativeName:                  "Wrapped Ether",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "ETH",
	},
	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"),
		WbtcAddress: common.HexToAddress("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f"),
		UsdcAddress: common.HexToAddress("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xC36442b4a4522E871399CD717aBDD847Ab11FE88"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x842eC2c7D803033Edf55E478F461FC547Bc54EB2"),
		},
	},
}
