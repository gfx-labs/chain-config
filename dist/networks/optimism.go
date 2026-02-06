package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Optimism Network = Network{
	ChainId:           10,
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/optimism-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         8,
	LaunchTime:        1688997600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://optimistic.etherscan.io",
			ApiUrl: "https://api-optimistic.etherscan.io/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36"),
	InternalName:    "optimism",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":    "optimism",
		"debank":    "op",
		"tenderly":  "true",
		"coingecko": "optimistic-ethereum",
	},
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000042"),
	DefaultToken1: common.HexToAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85"),
	BlockAid:      "optimism",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85"), common.HexToAddress("0x7f5c764cbc14f9669b88837ca1490cca17c31607"), common.HexToAddress("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"), common.HexToAddress("0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9"), common.HexToAddress("0x8aE125E8653821E851F12A49F7765db9a9ce7384"), common.HexToAddress("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85"): {}, common.HexToAddress("0x7f5c764cbc14f9669b88837ca1490cca17c31607"): {}, common.HexToAddress("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"): {}, common.HexToAddress("0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9"): {}, common.HexToAddress("0x8aE125E8653821E851F12A49F7765db9a9ce7384"): {}, common.HexToAddress("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0xb589969d38ce76d3d7aa319de7133bc9755fd840"), common.HexToAddress("0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36"), common.HexToAddress("0xdd0c6bae8ad5998c358b823df15a2a4181da1b80"), common.HexToAddress("0x03af20bdaaffb4cc0a521796a223f7d85e2aac31"), common.HexToAddress("0x0bb50d3e479e4682558fdb86f41a205e2c035ae5"), common.HexToAddress("0x6168ec836d0b1f0c37381ec7ed1891a412872121"), common.HexToAddress("0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2"), common.HexToAddress("0xb2ac2e5a3684411254d58b1c5a542212b782114d"), common.HexToAddress("0x68f5c0a2de713a54991e01858fd27a3832401849"), common.HexToAddress("0x73b14a78a0d396c521f954532d43fd5ffe385216"), common.HexToAddress("0x85149247691df622eaf1a8bd0cafd40bc45154a9"), common.HexToAddress("0xc858a329bf053be78d6239c4a4343b8fbd21472b"), common.HexToAddress("0xf1f199342687a7d78bcc16fce79fa2665ef870e1"), common.HexToAddress("0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6"), common.HexToAddress("0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c"), common.HexToAddress("0x85c31ffa3706d1cce9d525a00f1c7d4a2911754c"), common.HexToAddress("0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05"), common.HexToAddress("0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0"), common.HexToAddress("0xaefc1edaede6adadcdf3bb344577d45a80b19582"), common.HexToAddress("0x0392B358CE4547601BEFA962680BEDE836606AE2"), common.HexToAddress("0x36E42931A765022790B797963E42C5522D6B585A"), common.HexToAddress("0x03A9DC118B231480058E7A3B051042EC83663794"), common.HexToAddress("0x95D7D146AE40D4822C2750276B54B6EED530D374"), common.HexToAddress("0x7f1c919a92bce8790a85d6360b85cf21b997a6b5"), common.HexToAddress("0x1a54ae9f662b463f8d432482975c17e51518b50d"), common.HexToAddress("0xff7fbdf7832ae524deda39ca402e03d92adff7a5"), common.HexToAddress("0x55bc964fe3b0c8cc2d4c63d65f1be7aef9bb1a3c"), common.HexToAddress("0x535541f1aa08416e69dc4d610131099fa2ae7222"), common.HexToAddress("0xadb35413ec50e0afe41039eac8b930d313e94fa4"), common.HexToAddress("0x730691cdac3cbd4d41fc5eb9d8abbb0cea795b94")},
	BlockTimeSeconds: 0.5,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0x822CFA9749d16Fb4B4F2B0515924cec69512893b"),
		LimitOrderRegistry:            common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		LimitOrderRegistryDeployBlock: 105276132,

		CustomOrderTypes: OkuCustomOrderTypesMetadata{
			FeeBips:           25,
			Master:            common.HexToAddress("0xA89A26c4d81A2cca4d0670F77f0FC88362b72248"),
			MasterDeployBlock: 139975798,

			Bracket:               common.HexToAddress("0xffC8C49C5B38BC9BaFD0bB0F5F189EEcD35e35E2"),
			BracketDeployBlock:    139975810,
			StopLimit:             common.HexToAddress("0x57d0E13F353d630ab5218aC841C88985AB31A066"),
			StopLimitDeployBlock:  139975811,
			OracleLess:            common.HexToAddress("0x25cf2128F603754179379351B805B4F8C0B8dCA4"),
			OracleLessDeployBlock: 139975814,
		},

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x4200000000000000000000000000000000000006"),
			NativeWrappedName:  "WETH",
			Pools:              []common.Address{common.HexToAddress("0x85149247691df622eaf1a8bd0cafd40bc45154a9"), common.HexToAddress("0xc858a329bf053be78d6239c4a4343b8fbd21472b"), common.HexToAddress("0x1d751bc1a723accf1942122ca9aa82d49d08d2ae"), common.HexToAddress("0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0"), common.HexToAddress("0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36"), common.HexToAddress("0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6"), common.HexToAddress("0xb589969d38ce76d3d7aa319de7133bc9755fd840"), common.HexToAddress("0x03af20bdaaffb4cc0a521796a223f7d85e2aac31"), common.HexToAddress("0x252cbdff917169775be2b552ec9f6781af95e7f6"), common.HexToAddress("0xf1f199342687a7d78bcc16fce79fa2665ef870e1"), common.HexToAddress("0xadb35413ec50e0afe41039eac8b930d313e94fa4"), common.HexToAddress("0x100bdc1431a9b09c61c0efc5776814285f8fb248"), common.HexToAddress("0x6432037739ccd0201987472604826097b55813e9"), common.HexToAddress("0x9595edbefc82535a02312a4c42cc91e6e9df8f67"), common.HexToAddress("0x9438a9d1bdeece02ed4431ac59613a128201e0b9"), common.HexToAddress("0x8323d063b1d12acce4742f1e3ed9bc46d71f4222"), common.HexToAddress("0xf3f3433c3a97f70349c138ada81da4d3554982db"), common.HexToAddress("0xb2ac2e5a3684411254d58b1c5a542212b782114d"), common.HexToAddress("0x2e80d5a7b3c613d854ee43243ff09808108561eb"), common.HexToAddress("0x8eda97883a1bc02cf68c6b9fb996e06ed8fdb3e5"), common.HexToAddress("0x98d9ae198f2018503791d1caf23c6807c135bb6b"), common.HexToAddress("0x827f0a2a4376bc26729f398b865f424dc8456841"), common.HexToAddress("0x6168ec836d0b1f0c37381ec7ed1891a412872121"), common.HexToAddress("0xdd0c6bae8ad5998c358b823df15a2a4181da1b80"), common.HexToAddress("0x6f32061f59a21086c334d0d45f804089ce374aaf"), common.HexToAddress("0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2"), common.HexToAddress("0xf74fca1611a695a81fc1f7052aa5ff2549558ab3"), common.HexToAddress("0x702b283b06fa4e49ef155597945f2ba4b717e19c"), common.HexToAddress("0x7b17fc02d85cb5589ec1d1c3db507dc557590c79"), common.HexToAddress("0x766854992bd5363ebeeff0113f5a5795796befab"), common.HexToAddress("0xae2d9288be0587c2097ec46db7686ac2481f896e"), common.HexToAddress("0x793aca81b02f9e8e073047d2347da0c16e5ecd92"), common.HexToAddress("0xa1658249bcc69b0ab491cdc0449c0b0ea796de8d"), common.HexToAddress("0xa7bb0d95c6ba0ed0aca70c503b34bc7108589a47"), common.HexToAddress("0xf44acaa38be5e965c5ddf374e7a2ba270e580684"), common.HexToAddress("0x1a172713bdf4b9c846028e43081e73ca90a399dd"), common.HexToAddress("0xc50958e82c36b8d6d0baf555f90b76b0a28ceeeb"), common.HexToAddress("0xf046d8b7365d8abe5a8f8301c669b4b5284fc21d"), common.HexToAddress("0x84eb2c5c23999b3ddc87be10f15ccec5d22c7d97"), common.HexToAddress("0x95d7d146ae40d4822c2750276b54b6eed530d374"), common.HexToAddress("0x815ae7bf44dda74ed9274377ed711efc8b567911"), common.HexToAddress("0x0843e0f56b9e7fdc4fb95fabba22a01ef4088f41"), common.HexToAddress("0x25e412992634b93a025e2a538c53222a8c62e2d6"), common.HexToAddress("0xbd93951d2e9ec615f9940887559b4317032d98d0"), common.HexToAddress("0xc62d5ff62276eeda3c2d24f6b7e384355ec52a5e"), common.HexToAddress("0xba335a3b1f2fb04e66916c664459b7f74378ec32"), common.HexToAddress("0xd9b160620447d9a9a6ca90c0450f5490e5219257"), common.HexToAddress("0x2df05e4cdbd758cb1a99a34bb0d767e040d6b078"), common.HexToAddress("0x94ad9a19126ebb02dda874237e5820fd4943f5de"), common.HexToAddress("0x64750f4098a7f98352f7cd5797f421ceb8d94f64"), common.HexToAddress("0xb11d715bd9e3fd4fd07401dc551d516780c12449"), common.HexToAddress("0xaee0a6d42d10491d36e6a1b922741933609ac1be"), common.HexToAddress("0xcf2aebb91fec906f51fc11cd57035a09d8b16965"), common.HexToAddress("0xc0f184c6c4832b3ed861bd5b05722792ffa64abd"), common.HexToAddress("0x3154dc51bd6bb55213bd0e676df44cc3327ce75c"), common.HexToAddress("0xd9660a959e00fec8b256ef6bf71c0f545585eba0"), common.HexToAddress("0xc22662b904d98e45f89e030201355c3e372cc819"), common.HexToAddress("0x652a810c603faef61ff5d873e52ad7f1d70d6014"), common.HexToAddress("0x85841dab003d284d7aac51fc77cfa0d37d912825"), common.HexToAddress("0x2024c394741a5301e89a375b7bf52f865bc166fd"), common.HexToAddress("0x4983691a26d55eb9e18d2e12e3b770cdd3f76a5f"), common.HexToAddress("0xe1a0c25464a9d3b1426b552416bf2a02865ed461"), common.HexToAddress("0xba9bbd07331f0185701b61be6379ac49d50ae327"), common.HexToAddress("0xd6101cda1a51924e249132cbcae82bfcd0a91fbc"), common.HexToAddress("0xba213008fe93b3591e439f3b2aa51b3e4a2bd7c7"), common.HexToAddress("0x6408b4846dbe71e5b4b095b4fdee5ca58447f1c8"), common.HexToAddress("0x22bbdcfc90cabc569c22bf908877b7cc3e2c4684"), common.HexToAddress("0xeb1817b708415f4f78c5f0c99cbbd6a3a899fa6d"), common.HexToAddress("0x2582886f65ea71ecd3cffd12089c55fb9c75e9db"), common.HexToAddress("0x6ecb7d18abda6ae794035490a4decc329d0f23bb"), common.HexToAddress("0x4ad43a229a55d9453ad1ddd9aea986d58faab8d4"), common.HexToAddress("0x90b9504cff7af9d787799dc93ded9aed0a1996d7"), common.HexToAddress("0x7628784d2c5d47fcd5479ba812343b1aabad6484"), common.HexToAddress("0x44b17031465c53706af85c05423d26e9cfa13a1b"), common.HexToAddress("0xc366ec578789d5a802ecb966f69bbf8441b7e112"), common.HexToAddress("0xb018e5955c561a8af0f49faf60d587b7f8f1687b"), common.HexToAddress("0x2459023a29d3b07711b8b916d86aa7e8a14747af"), common.HexToAddress("0xe7ee03b72a89f87d161425e42548bd5492d06679"), common.HexToAddress("0xe588add6432dc1a9c717d37dbce858a6ded48656"), common.HexToAddress("0xbd8ac2a59551684b801885e4ea1c746c3fa92a34"), common.HexToAddress("0x1682dcd12f6e291de6874dcb0a89ee50465f43bd"), common.HexToAddress("0xac721d2e27ca148f505b5106fc95e594c78ace5b"), common.HexToAddress("0x3d44cc727fe2f603e4929be164c70edb3b498b5f"), common.HexToAddress("0xe229ce1cdbea9983362ca29f0f0b2c70bb2dacdf"), common.HexToAddress("0xea6018f42f816201c933bbb7a6027725937a0895"), common.HexToAddress("0x26e7fed14a97e0c482a302237971cf1b04f6d3e9"), common.HexToAddress("0xd1788a1109bd36ab296ac104a67bf8dc48673948"), common.HexToAddress("0x61775175905a0f3f7705a6f010d918b6acda6e00"), common.HexToAddress("0xcc8a87a17208fe2e96168ca3fa9412a968c5b092"), common.HexToAddress("0xfe4860375d8186770224534b70241e9a197aa4c7"), common.HexToAddress("0x514810e7db31cf118e6bacb3992bbe37b8d2b9b3"), common.HexToAddress("0xca93e9077c48cc7ab817390edd32f85ec6892797"), common.HexToAddress("0xc6f5e7e95e9bd69e57bbcdc3791332de9c89c8f4"), common.HexToAddress("0x610c0e8963449d62bae223ed6af042c21241d54d"), common.HexToAddress("0x461cd8b232e24ee5acc51dc43c186ec58f86be47"), common.HexToAddress("0xd4fed0bab141441d56521271d0a5747fd42062be"), common.HexToAddress("0x0bb50d3e479e4682558fdb86f41a205e2c035ae5"), common.HexToAddress("0x83de573f16e7cf978d3f4bc61f080ac392825fb3"), common.HexToAddress("0x2b5861fd7fd65b57de0009ec0d9045ba49aa5416"), common.HexToAddress("0x40a6d70506ba0e5e361e3913ca79a3282b3031b0")},
			NativeQuotePools: []ChainContract{
				{
					BlockCreated: 0,
					Address:      common.HexToAddress("0x85149247691df622eaf1a8bd0cafd40bc45154a9"),
				},
			},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        0,
		PoolFactory:                        common.HexToAddress("0x1F98431c8aD98523631AE4a59f267346ea31F984"),
		Permit2:                            common.HexToAddress("0x000000000022D473030F116dDEE9F6B43aC78BA3"),
		Multicall2:                         common.HexToAddress("0x266557a864680a1401a3506c0eb72934bd13bf59"),
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
		PositionsNFTDeployBlock:            0,
		UniversalRouter:                    common.HexToAddress("0xb555edF5dcF85f42cEeF1f3630a52A108E55A654"),
		WrappedNativeAddress:               common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WrappedNativeSymbol:                "WETH",
		WrappedNativeName:                  "Wrapped Ether",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "ETH",
	},

	Morpho: MorphoMetadata{
		DeployBlock:     130770075,
		Morpho:          common.HexToAddress("0xce95AfbB8EA029495c66020883F87aaE8864AF92"),
		MmFactory11:     common.HexToAddress("0x3Bb6A6A0Bc85b367EFE0A5bAc81c5E52C892839a"),
		PublicAllocator: common.HexToAddress("0x0d68a97324E602E02799CD83B42D337207B40658"),
		Bundler3:        common.HexToAddress("0xFBCd3C258feB131D8E038F2A3a670A7bE0507C05"),
		UrdFactory:      common.HexToAddress("0xe41AEcB4570A7B68d15a4Fb0a03ACEe421A21498"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85"),
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WbtcAddress: common.HexToAddress("0x68f180fcce6836688e9084f035309e29bf0a2095"),
	},
	Contracts: map[string]ChainContract{
		"gasPriceOracle": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x420000000000000000000000000000000000000F"),
		},
		"l1Block": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000015"),
		},
		"l2CrossDomainMessenger": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000007"),
		},
		"l2Erc721Bridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000014"),
		},
		"l2StandardBridge": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000010"),
		},
		"l2ToL1MessagePasser": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000016"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xC36442b4a4522E871399CD717aBDD847Ab11FE88"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x4200000000000000000000000000000000000006"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x266557a864680a1401a3506c0eb72934bd13bf59"),
		},
	},
}
