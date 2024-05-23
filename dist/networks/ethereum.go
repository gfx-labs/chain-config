package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Ethereum Network = Network{
	ChainId:           1,
	LogoUrl:           "https://assets.oku.trade/ethereum-logo.webp",
	SortIndex:         0,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]string{
		"default": "https://etherscan.io",
	},
	DefaultPool:  common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
	InternalName: "ethereum",
	ExternalId: map[string]string{
		"zerion": "ethereum",
		"debank": "eth",
	},
	DefaultToken0: common.HexToAddress("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
	DefaultToken1: common.HexToAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x6B175474E89094C44Da98b954EedeAC495271d0F"), common.HexToAddress("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"), common.HexToAddress("0xdAC17F958D2ee523a2206206994597C13D831ec7"), common.HexToAddress("0x0000000000085d4780B73119b644AE5ecd22b376"), common.HexToAddress("0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"), common.HexToAddress("0x956f47f50a910163d8bf957cf5846d573e7f87ca"), common.HexToAddress("0x4Fabb145d64652a948d72533023f6E7A623C7C53"), common.HexToAddress("0x853d955acef822db058eb8505911ed77f175b99e"), common.HexToAddress("0x8E870D67F660D95d5be530380D0eC0bd388289E1"), common.HexToAddress("0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"), common.HexToAddress("0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3"), common.HexToAddress("0x1a13f4ca1d028320a707d99520abfefca3998b7f")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x6B175474E89094C44Da98b954EedeAC495271d0F"): {}, common.HexToAddress("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"): {}, common.HexToAddress("0xdAC17F958D2ee523a2206206994597C13D831ec7"): {}, common.HexToAddress("0x0000000000085d4780B73119b644AE5ecd22b376"): {}, common.HexToAddress("0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"): {}, common.HexToAddress("0x956f47f50a910163d8bf957cf5846d573e7f87ca"): {}, common.HexToAddress("0x4Fabb145d64652a948d72533023f6E7A623C7C53"): {}, common.HexToAddress("0x853d955acef822db058eb8505911ed77f175b99e"): {}, common.HexToAddress("0x8E870D67F660D95d5be530380D0eC0bd388289E1"): {}, common.HexToAddress("0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"): {}, common.HexToAddress("0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3"): {}, common.HexToAddress("0x1a13f4ca1d028320a707d99520abfefca3998b7f"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8"), common.HexToAddress("0x4e68ccd3e89f51c3074ca5072bbac773960dfa36"), common.HexToAddress("0x99ac8ca7087fa4a2a1fb6357269965a2014abc35"), common.HexToAddress("0xcbcdf9626bc03e24f779434178a73a0b4bad62ed"), common.HexToAddress("0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8"), common.HexToAddress("0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801"), common.HexToAddress("0x3416cf6c708da44db2624d63ea0aaef7113527c6"), common.HexToAddress("0x5777d92f208679db4b9778590fa3cab3ac9e2168"), common.HexToAddress("0x290a6a7460b308ee3f19023d2d00de604bcf5b42"), common.HexToAddress("0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf"), common.HexToAddress("0xa3f558aebaecaf0e11ca4b2199cc5ed341edfd74"), common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"), common.HexToAddress("0x11b815efb8f581194ae79006d24e0d814b7697f6"), common.HexToAddress("0x4585fe77225b41b697c938b018e2ac67ac5a20c0"), common.HexToAddress("0x4e0924d3a751be199c426d52fb1f2337fa96f736"), common.HexToAddress("0x9a772018fbd77fcd2d25657e5c547baff3fd7d16"), common.HexToAddress("0x11950d141ecb863f01007add7d1a342041227b58"), common.HexToAddress("0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa"), common.HexToAddress("0x60594a405d53811d3bc4766596efd80fd545a270"), common.HexToAddress("0x840deeef2f115cf50da625f7368c24af6fe74410"), common.HexToAddress("0xe8c6c9227491c0a8156a0106a0204d881bb7e531"), common.HexToAddress("0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8"), common.HexToAddress("0xc5af84701f98fa483ece78af83f11b6c38aca71d"), common.HexToAddress("0x7bea39867e4169dbe237d55c8242a8f2fcdcc387")},
	BlockTimeSeconds: 15,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf"),
		LimitOrderRegistryDeployBlock: 17429412,
		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
			NativeWrappedName:  "WETH",
			Pools:              []common.Address{common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"), common.HexToAddress("0x11b815efb8f581194ae79006d24e0d814b7697f6"), common.HexToAddress("0x60594a405d53811d3bc4766596efd80fd545a270"), common.HexToAddress("0x3416cf6c708da44db2624d63ea0aaef7113527c6"), common.HexToAddress("0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8"), common.HexToAddress("0x4e68ccd3e89f51c3074ca5072bbac773960dfa36"), common.HexToAddress("0x69d91b94f0aaf8e8a2586909fa77a5c2c89818d5"), common.HexToAddress("0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf"), common.HexToAddress("0xe0554a476a092703abdb3ef35c80e0d76d32939f"), common.HexToAddress("0x5777d92f208679db4b9778590fa3cab3ac9e2168"), common.HexToAddress("0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8"), common.HexToAddress("0x99ac8ca7087fa4a2a1fb6357269965a2014abc35"), common.HexToAddress("0x6c6bc977e13df9b0de53b251522280bb72383700"), common.HexToAddress("0x9a772018fbd77fcd2d25657e5c547baff3fd7d16"), common.HexToAddress("0x6f48eca74b38d2936b02ab603ff4e36a6c0e3a77"), common.HexToAddress("0xe859041c9c6d70177f83de991b9d757e13cea26e"), common.HexToAddress("0x3328ca5b535d537f88715b305375c591cf52d541"), common.HexToAddress("0x353bb62ed786cdf7624bd4049859182f3c1e9e5d"), common.HexToAddress("0x9a834b70c07c81a9fcd6f22e842bf002fbffbe4d"), common.HexToAddress("0x9db9e0e53058c89e5b94e29621a205198648425b"), common.HexToAddress("0xb07fe2f407f971125d4eb1977f8acee8846c7324"), common.HexToAddress("0x84383fb05f610222430f69727aa638f8fdbf5cc1"), common.HexToAddress("0xb0f4a77bde7fee134265307c5cc19abff0ba409b"), common.HexToAddress("0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52"), common.HexToAddress("0x92ab871abb9d567aa276b2ce58d0203d84e0181e"), common.HexToAddress("0x735a26a57a0a0069dfabd41595a970faf5e1ee8b"), common.HexToAddress("0x7bea39867e4169dbe237d55c8242a8f2fcdcc387"), common.HexToAddress("0x5e35c4eba72470ee1177dcb14dddf4d9e6d915f4"), common.HexToAddress("0x07a6e955ba4345bae83ac2a6faa771fddd8a2011"), common.HexToAddress("0xfad57d2039c21811c8f2b5d5b65308aa99d31559"), common.HexToAddress("0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78"), common.HexToAddress("0x8c54aa2a32a779e6f6fbea568ad85a19e0109c26"), common.HexToAddress("0xe05e653453f733786f2dabae0ffa1e96cfcc4b25"), common.HexToAddress("0x094a28b22e1b4218d590ea6fa916b3c5e670ba55"), common.HexToAddress("0xdd005650ac6805457f4fa6ee1816813ce815e914"), common.HexToAddress("0x015769601d8d4879c0e193eeab31f10cf03c9ea9"), common.HexToAddress("0xc5af84701f98fa483ece78af83f11b6c38aca71d"), common.HexToAddress("0x48da0965ab2d2cbf1c17c09cfb5cbe67ad5b1406"), common.HexToAddress("0x4e0924d3a751be199c426d52fb1f2337fa96f736"), common.HexToAddress("0x94b4ba66da4faa4fe09e17c0a8810d2afee70163"), common.HexToAddress("0x92995d179a5528334356cb4dc5c6cbb1c068696c"), common.HexToAddress("0x18d96b617a3e5c42a2ada4bc5d1b48e223f17d0d"), common.HexToAddress("0x9febc984504356225405e26833608b17719c82ae"), common.HexToAddress("0x2cb162433e0cabac4825e6d198a125829156cc92"), common.HexToAddress("0xc2a856c3aff2110c1171b8f942256d40e980c726"), common.HexToAddress("0x6279653c28f138c8b31b8a0f6f8cd2c58e8c1705"), common.HexToAddress("0x97e7d56a0408570ba1a7852de36350f7713906ec"), common.HexToAddress("0x216fb666dd61600e74f7b2ca25a38aa99db1a4e9"), common.HexToAddress("0x7270233ccae676e776a659affc35219e6fcfbb10"), common.HexToAddress("0xff29d3e552155180809ea3a877408a4620058086"), common.HexToAddress("0xcb0c5d9d92f4f2f80cce7aa271a1e148c226e19d"), common.HexToAddress("0x486263aa56d1b49d78dea765754164b880c99954"), common.HexToAddress("0x25c0edc51909fc20429c6ece9b8f4fbb5af13878"), common.HexToAddress("0x14036bbda496e39dc3db6025fe858431c1ddadb1"), common.HexToAddress("0x16980c16811bde2b3358c1ce4341541a4c772ec9"), common.HexToAddress("0xdf50fbde8180c8785842c8e316ebe06f542d3443"), common.HexToAddress("0x298b7c5e0770d151e4c5cf6cca4dae3a3ffc8e27"), common.HexToAddress("0x3aaf77ba7da262e34dffb9b10fc6777bfda79ab7"), common.HexToAddress("0xd6a309f49cf79542cea91df7b334eb4bd29aa0d7"), common.HexToAddress("0xdb02d6827220475ece91893255fdf57bed51aee3"), common.HexToAddress("0xa19f4ebe4cbb3c9b57c16eb4dfc7a52d46a5e891"), common.HexToAddress("0x6c4ab1907805adcb0b7ae911a5d1b0b99d608b3c"), common.HexToAddress("0x19f83460e387f1b01f94b85c2532ebc15b0b712e"), common.HexToAddress("0xaae63df9a86f9a682507c922db38fae5e777a606"), common.HexToAddress("0x7ec0b75a98997c927ace6d87958147a105147ea0"), common.HexToAddress("0x868b7bbbfe148516e5397f23982923686182c2d2"), common.HexToAddress("0xd73ea444eef6faf5423b49be3448e94ed214f1ec"), common.HexToAddress("0xbb2e5c2ff298fd96e166f90c8abacaf714df14f8"), common.HexToAddress("0x1a349a3397a8431eed8d94a05f88f9001117fcaa"), common.HexToAddress("0x85b5a7dc1630f9465d8409e2ac53313b70a71b9c"), common.HexToAddress("0x3067c3054b4a605f9e327bad82d9ba6049fe76a0"), common.HexToAddress("0x00cef0386ed94d738c8f8a74e8bfd0376926d24c"), common.HexToAddress("0x75bff91af9878f5ec3fede9b52d51159afc2430a"), common.HexToAddress("0xa5ef2a6bbe8852bd6fd2ef6ab9bb45081a6f531c"), common.HexToAddress("0xb06e7ed37cfa8f0f2888355dd1913e45412798c5"), common.HexToAddress("0xfe0df74636bc25c7f2400f22fe7dae32d39443d2"), common.HexToAddress("0x07f3d316630719f4fc69c152f397c150f0831071"), common.HexToAddress("0x38b6e47a97f4680a983eadc8e510c37d73967c29"), common.HexToAddress("0xd3ca35355106cb8bc5fd7c534275509673319d83"), common.HexToAddress("0x020c349a0541d76c16f501abc6b2e9c98adae892"), common.HexToAddress("0x9275e26bfb23b18bebb07bff45e85110f60963e9"), common.HexToAddress("0xd5ad5ec825cac700d7deafe3102dc2b6da6d195d"), common.HexToAddress("0x537a0a5654045c52ec45c4c86ed0c1ffe893809d"), common.HexToAddress("0xc4d9c69962ddb2388e1532279704fc6eb199c963"), common.HexToAddress("0x813b22032e94667cc0f854cc7241fc5a309c45bc"), common.HexToAddress("0xe081eeab0adde30588ba8d5b3f6ae5284790f54a"), common.HexToAddress("0x5c28b5f471d97f53fcf132f16f9f3c0c888c1a01"), common.HexToAddress("0x9445bd19767f73dcae6f2de90e6cd31192f62589"), common.HexToAddress("0xa80964c5bbd1a0e95777094420555fead1a26c1e"), common.HexToAddress("0xb8c05b7ca698f7cfd9b8a08f177e0ac5f2696bf9"), common.HexToAddress("0xd0af1981f52146a6939385451daea0726e13a484"), common.HexToAddress("0xa109209a2380fd4454b0364c4689f6de18ad18cc"), common.HexToAddress("0x5f3c621d810c7c929fb440e03dadf8621fe61ab5"), common.HexToAddress("0x141df9a608856d1651c9a3c27b39960ff0418a12"), common.HexToAddress("0x08f68110f1e0ca67c80a24b4bd206675610f445d"), common.HexToAddress("0x39529e96c28807655b5856b3d342c6225111770e"), common.HexToAddress("0x391e8501b626c623d39474afca6f9e46c2686649"), common.HexToAddress("0xbe3cd9b751360a8030770425acf947c8cb4cab38"), common.HexToAddress("0xbd5fdda17bc27bb90e37df7a838b1bfc0dc997f5"), common.HexToAddress("0x3470447f3cecffac709d3e783a307790b0208d60")},
			NativeQuotePools: []ChainContract{
				{
					BlockCreated: 12369621,
					Address:      common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
				},
			},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        12369621,
		PoolFactory:                        common.HexToAddress("0x1F98431c8aD98523631AE4a59f267346ea31F984"),
		Multicall2:                         common.HexToAddress("0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"),
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
		PositionsNFTDeployBlock:            12369651,
		UniversalRouter:                    common.HexToAddress("0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B"),
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
		WethAddress: common.HexToAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
		WbtcAddress: common.HexToAddress("0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"),
	},
	Contracts: map[string]ChainContract{
		"ensRegistry": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"),
		},
		"ensUniversalResolver": {
			BlockCreated: 18958930,
			Address:      common.HexToAddress("0x8cab227b1162f03b8338331adaad7aadc83b895e"),
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
			Address:      common.HexToAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"),
		},
	},
}
