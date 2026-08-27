package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Polygon Network = Network{
	ChainId: 137,
	NativeCurrency: NativeCurrency{
		Name:     "POL",
		Symbol:   "POL",
		Decimals: 18,
	},
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/polygon-logo.svg",
	NativeLogoUrl:     "https://cms.oku.trade/cdn/public/natives/matic.png",
	Deprecated:        false,
	LiteChain:         true,
	SortIndex:         5,
	LaunchTime:        1688997600,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://polygonscan.com",
			ApiUrl: "https://api.etherscan.io/v2/api",
		},
	},
	DefaultPool:     common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"),
	InternalName:    "polygon",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":    "polygon",
		"debank":    "matic",
		"tenderly":  "true",
		"coingecko": "polygon-pos",
	},
	DefaultToken0: common.HexToAddress("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"),
	DefaultToken1: common.HexToAddress("0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"),
	BlockAid:      "polygon",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"), common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"), common.HexToAddress("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063"), common.HexToAddress("0xc2132d05d31c914a87c6611c10748aeb04b58e8f")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"): {}, common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"): {}, common.HexToAddress("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063"): {}, common.HexToAddress("0xc2132d05d31c914a87c6611c10748aeb04b58e8f"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5"), common.HexToAddress("0x0e44ceb592acfc5d3f09d996302eb4c499ff8c10"), common.HexToAddress("0x167384319b41f7094e62f7506409eb38079abff8"), common.HexToAddress("0x94ab9e4553ffb839431e37cc79ba8905f45bfbea"), common.HexToAddress("0x88f3c15523544835ff6c738ddb30995339ad57d6"), common.HexToAddress("0x45dda9cb7c25131df268515131f647d726f50608"), common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"), common.HexToAddress("0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7"), common.HexToAddress("0x50eaedb835021e4a108b7290636d62e9765cc6d7"), common.HexToAddress("0x86f1d8390222a3691c28938ec7404a1661e618e0"), common.HexToAddress("0xeef1a9507b3d505f0062f2be9453981255b503c8"), common.HexToAddress("0x1f6082db7c8f4b199e17090cd5c8831a1dad1997"), common.HexToAddress("0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d"), common.HexToAddress("0x3a5329ee48a06671ad1bf295b8a233ee9b9b975e"), common.HexToAddress("0x0a63d3910ffc1529190e80e10855c4216407cc45"), common.HexToAddress("0x5645dcb64c059aa11212707fbf4e7f984440a8cf"), common.HexToAddress("0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6"), common.HexToAddress("0x2aceda63b5e958c45bd27d916ba701bc1dc08f7a"), common.HexToAddress("0x4d05f2a005e6f36633778416764e82d1d12e7fbb"), common.HexToAddress("0x3d0acd52ee4a9271a0ffe75f9b91049152bac64b"), common.HexToAddress("0x3e31ab7f37c048fc6574189135d108df80f0ea26"), common.HexToAddress("0xd866fac7db79994d08c0ca2221fee08935595b4b"), common.HexToAddress("0x98b9162161164de1ed182a0dfa08f5fbf0f733ca"), common.HexToAddress("0x4ccd010148379ea531d6c587cfdd60180196f9b1"), common.HexToAddress("0xfe343675878100b344802a6763fd373fdeed07a4"), common.HexToAddress("0x357faf5843c7fd7fb4e34fbeabdac16eabe8a5bc")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 2,
	Oku: OkuMetadata{
		Router:                        common.HexToAddress("0xb1f3a7B816B0681188F54dFa400991B93ADf00ed"),
		LimitOrderRegistry:            common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		LimitOrderRegistryDeployBlock: 43640541,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"),
			NativeWrappedName:  "WPOL",
			Pools:              []common.Address{common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"), common.HexToAddress("0x45dda9cb7c25131df268515131f647d726f50608"), common.HexToAddress("0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7"), common.HexToAddress("0xeef1a9507b3d505f0062f2be9453981255b503c8"), common.HexToAddress("0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d"), common.HexToAddress("0x5645dcb64c059aa11212707fbf4e7f984440a8cf"), common.HexToAddress("0x0a6c4588b7d8bd22cf120283b1fff953420c45f3"), common.HexToAddress("0x88f3c15523544835ff6c738ddb30995339ad57d6"), common.HexToAddress("0xbb98b3d2b18aef63a3178023a920971cf5f29be4"), common.HexToAddress("0x5f69c2ec01c22843f8273838d570243fd1963014"), common.HexToAddress("0x0e44ceb592acfc5d3f09d996302eb4c499ff8c10"), common.HexToAddress("0x67a9fe12fa6082d9d0203c84c6c56d3c4b269f28"), common.HexToAddress("0x04537f43f6add7b1b60cab199c7a910024ee0594"), common.HexToAddress("0x3f5228d0e7d75467366be7de2c31d0d098ba2c23"), common.HexToAddress("0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6"), common.HexToAddress("0x254aa3a898071d6a2da0db11da73b02b4646078f"), common.HexToAddress("0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5"), common.HexToAddress("0x0f663c16dd7c65cf87edb9229464ca77aeea536b"), common.HexToAddress("0x781067ef296e5c4a4203f81c593274824b7c185d"), common.HexToAddress("0x0a63d3910ffc1529190e80e10855c4216407cc45"), common.HexToAddress("0x4ccd010148379ea531d6c587cfdd60180196f9b1"), common.HexToAddress("0x94ab9e4553ffb839431e37cc79ba8905f45bfbea"), common.HexToAddress("0xfe530931da161232ec76a7c3bea7d36cf3811a0d"), common.HexToAddress("0x6488adfdbb85ce0302faa6ac72c8693eba81df83"), common.HexToAddress("0xdb11b39d8acdc877c58392e996a4a88424483705"), common.HexToAddress("0x16e7ca3eaaf7703b9724301e6fd3d4e2918fec59"), common.HexToAddress("0x3d0acd52ee4a9271a0ffe75f9b91049152bac64b"), common.HexToAddress("0x3165241b09823256465699625637d535d634cc8c"), common.HexToAddress("0x3bfcb475e528f54246f1847ec0e7b53dd88bda4e"), common.HexToAddress("0x4c0bc5d34369d5f89e7f3aa551150dc7d281b4c7"), common.HexToAddress("0x1cf0a4717f15ac0265d26986af8ac4ce25fd9a3f"), common.HexToAddress("0x3fa147d6309abeb5c1316f7d8a7d8bd023e0cd80"), common.HexToAddress("0x6bad0f9a89ca403bb91d253d385cec1a2b6eca97"), common.HexToAddress("0xb493e5aee0e0325632f4ed63cc889a23b8c77969"), common.HexToAddress("0x613e24ec04fa61a5967cccc90cdc1d9513f73d5a"), common.HexToAddress("0xb2f8ba544e4874d4e0f817359d0f4bcff209b87e"), common.HexToAddress("0x1edbf151b7a4bfb611030efcb460ae0d3516aee7"), common.HexToAddress("0x74d3c85df4dbd03c7c12f7649faa6457610e7604"), common.HexToAddress("0xbeaf7156ba07c3df8fac42e90188c5a752470db7"), common.HexToAddress("0xab4b63bd6c214ce8409fa1b31afa50d4e17597f9"), common.HexToAddress("0x26770cc2c612e5c97eb70a6531fa9d5098ef74ab"), common.HexToAddress("0x22177148e681a6ca5242c9888ace170ee7ec47bd"), common.HexToAddress("0xa1cfb393607d1a6888d273b762832ed14c8b56b1"), common.HexToAddress("0xa236278bec0e0677a48527340cfb567b4e6e9adc"), common.HexToAddress("0x156917664027312906a3e977e7f316a29934a37d"), common.HexToAddress("0x6cd22380745d4e4a5b674f692a1e84281e5e0896"), common.HexToAddress("0x286af3968aec55ec3acd463bf59edc7cbc04102e"), common.HexToAddress("0x42f0530351471dab7ec968476d19bd36af9ec52d"), common.HexToAddress("0x67e708986a809acefde16f2417fa5701241e3935"), common.HexToAddress("0x3e4bebfd2e3f6672640c83fc4888620741169825"), common.HexToAddress("0x33016df701b323c33cc027146c6a9e0997b2a923"), common.HexToAddress("0x30f5c777ab316e6878d2b71a32274e4c2842327a"), common.HexToAddress("0x78a750ca5f8dd1ef1c87e29e8a267ff4c8d12b38"), common.HexToAddress("0xfa22d298e3b0bc1752e5ef2849cec1149d596674"), common.HexToAddress("0x5884ddb0bb109c02150242edf00d0737d78ed61d"), common.HexToAddress("0x67b6ee9feab5fe2affed6a386950576d43f238dd"), common.HexToAddress("0x9159a880b930aced1080ed4742818362663c8d46"), common.HexToAddress("0xa90c1c009dc8292bd04ced30f9b53a5ff7a806a0"), common.HexToAddress("0x1f6082db7c8f4b199e17090cd5c8831a1dad1997"), common.HexToAddress("0xbd934a7778771a7e2d9bf80596002a214d8c9304"), common.HexToAddress("0xfc704de88db4858419d5d0af080486a95343ba15"), common.HexToAddress("0x32a222f69d00e717845a3d857d0392d6a25a2acd"), common.HexToAddress("0x7f567ce133b0b69458fc318af06eee27642865be"), common.HexToAddress("0x98349e1689538fd878646b77b3dcd89040a35eb6"), common.HexToAddress("0x6feae21e16097faa70afbb12872bdba3c85f4d9f"), common.HexToAddress("0xd0beb9570bc3d2af7fa461dfd3c75cc3a34f95e2"), common.HexToAddress("0x56fcb902bee19a645f9607cd1e1c0737b6358feb"), common.HexToAddress("0xe6617e2fb578e1df127f59fafeaa1122e543278f"), common.HexToAddress("0x08b446353ddb5a1695774bd547703879ff253aea"), common.HexToAddress("0xd67d3f77ad7acab1a75863b094176015df30cd8c"), common.HexToAddress("0xaa40be3a775451ddccf3aabf36bdea550391341f"), common.HexToAddress("0x0d1375f18e23099ae6a151e818cfe491b4feff31"), common.HexToAddress("0xf9e9526e55a0e1fac1813b2fe88bc9b30eea04f9"), common.HexToAddress("0xb69d18170a7d949777ead872cc6ba7cabb78fcfc"), common.HexToAddress("0xa708d430656aa379b6b0b1d570be8ae1095530e5"), common.HexToAddress("0xe93fde3c231c48db0a78e3d802afc55d845102c9"), common.HexToAddress("0x046bbdd927fc635dd6de7cf4efdad3e767274074"), common.HexToAddress("0xd06a93253d719ed8f28489ae9838d3d0f9eaba42"), common.HexToAddress("0xae732bd3d6becb4f0f458f54a6daad1fb1e9222c"), common.HexToAddress("0x039de30e4901793293a155dc3bcddc1b66fb5707"), common.HexToAddress("0x635fd65c546e66f73b7a760307ad884916f4c204"), common.HexToAddress("0x362d0401ed74db25219b6d02ac1791cfe3542d68"), common.HexToAddress("0x0581ef32b9393c5c282517282853267eed69621e"), common.HexToAddress("0x802c9f216f812b1a4b24636bec4f261b316797cb"), common.HexToAddress("0xc1dc5605b242a658adfc7d6e693a50aefb49bbae"), common.HexToAddress("0xba0216254163b57af68b7161cf824dbadcad61df"), common.HexToAddress("0x90e883972ebcbebc871f3f0658bab1821b8e8705"), common.HexToAddress("0xba91ae7312ace1137c15786177cbe687fd2d73d0"), common.HexToAddress("0x140ae14be4b5e86aa149f76e84953746e0bc04f1"), common.HexToAddress("0x2b5c2a5558bcc428ca97c6a6cd0eac8c1d180d65"), common.HexToAddress("0x6c8408f735c2f73b8f9271f663b1540bb8c2acce"), common.HexToAddress("0xa846934be7302304f2a8e5b92b576a3cfe655002"), common.HexToAddress("0xc21b964af2b0254580d44981d624335f2b7c6fb6"), common.HexToAddress("0x0dab5aedaf25201cce638b9d617d4b8c23d29b8d"), common.HexToAddress("0x30fe5e402139925634430eb88e9c209e4a2d6dec"), common.HexToAddress("0x9a72fc3fb9e99087d2eae500355e7902c763f9b3"), common.HexToAddress("0x02d07784818ada64827fce9f5c1309af688a5681"), common.HexToAddress("0x5e575a7050ca806248e8f4341601847fde52d9ba"), common.HexToAddress("0x80c5c7d7e94158fd2daac56734889a7cdf8dadfe"), common.HexToAddress("0xd48cb7ad6a0e2137ea81803c63d2863206ce4700")},
			NativeQuotePools: []ChainContract{
				{
					BlockCreated: 22802494,
					Address:      common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"),
				},
			},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        22757547,
		PoolFactory:                        common.HexToAddress("0x1F98431c8aD98523631AE4a59f267346ea31F984"),
		Multicall2:                         common.HexToAddress("0x275617327c958bD06b5D6b871E7f491D76113dd8"),
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
		PositionsNFTDeployBlock:            22760586,
		TopNativePool:                      common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"),
		UniversalRouter:                    common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"),
		WrappedNativeAddress:               common.HexToAddress("0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"),
		WrappedNativeSymbol:                "WPOL",
		WrappedNativeName:                  "Wrapped Polygon",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "WPOL",
	},

	Morpho: MorphoMetadata{},
	MarketRouters: MarketRouters{
		Binance:      []common.Address{common.HexToAddress("0xB44446b0c8E56988c34f7Ff73Ae904982b5FdDA5")},
		Enso:         []common.Address{common.HexToAddress("0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf")},
		Icecreamswap: []common.Address{common.HexToAddress("0x99bA7d569EA69671B399A7cC488b687515F7EC23")},
		Kyberswap:    []common.Address{common.HexToAddress("0x6131B5fae19EA4f9D964eAc0408E4408b66337b5")},
		Odos:         []common.Address{common.HexToAddress("0x4E3288c9ca110bCC82bf38F09A7b425c095d92Bf")},
		Okx:          []common.Address{common.HexToAddress("0xF6E1B4b201e220FC3741bd7a75675ffEA25c02AD"), common.HexToAddress("0x3B86917369B83a6892f553609F3c2F439C184e31"), common.HexToAddress("0x3C4829196BFadFF4394726b45159aeaAC6FCd41c")},
		Oneinch:      []common.Address{common.HexToAddress("0x111111125421ca6dc452d289314280a0f8842a65")},
		Openocean:    []common.Address{common.HexToAddress("0x6352a56caadC4F1E25CD6c75970Fa768A3304e64")},
		Paraswap:     []common.Address{common.HexToAddress("0x6A000F20005980200259B80c5102003040001068")},
		Uniswap:      []common.Address{common.HexToAddress("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"), common.HexToAddress("0x8B844f885672f333Bc0042cB669255f93a4C1E6b"), common.HexToAddress("0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2")},
		Zeroex:       []common.Address{common.HexToAddress("0x0000000000001fF3684f28c67538d4D072C22734"), common.HexToAddress("0x7150ea07D00d8E5a46bcC809f1c9FDf5cb5f8E81")},
	},
	Token: TokenMetadata{
		WbtcAddress: common.HexToAddress("0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6"),
		UsdcAddress: common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"),
		WethAddress: common.HexToAddress("0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"),
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
			Address:      common.HexToAddress("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x275617327c958bD06b5D6b871E7f491D76113dd8"),
		},
	},
}
