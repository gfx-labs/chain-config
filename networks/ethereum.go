package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Ethereum Network = Network{
	LogoUrl:       "https://assets.oku.trade/ethereum-logo.webp",
	SortIndex:     0,
	DefaultPool:   common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
	InternalName:  "ethereum",
	DefaultToken0: common.HexToAddress("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
	DefaultToken1: common.HexToAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
	//TokenList:        "",
	Stables:          []common.Address{common.HexToAddress("0x6B175474E89094C44Da98b954EedeAC495271d0F"), common.HexToAddress("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"), common.HexToAddress("0xdAC17F958D2ee523a2206206994597C13D831ec7"), common.HexToAddress("0x0000000000085d4780B73119b644AE5ecd22b376"), common.HexToAddress("0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"), common.HexToAddress("0x956f47f50a910163d8bf957cf5846d573e7f87ca"), common.HexToAddress("0x4Fabb145d64652a948d72533023f6E7A623C7C53"), common.HexToAddress("0x853d955acef822db058eb8505911ed77f175b99e"), common.HexToAddress("0x8E870D67F660D95d5be530380D0eC0bd388289E1"), common.HexToAddress("0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"), common.HexToAddress("0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3"), common.HexToAddress("0x1a13f4ca1d028320a707d99520abfefca3998b7f")},
	Watchlist:        []common.Address{common.HexToAddress("0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8"), common.HexToAddress("0x4e68ccd3e89f51c3074ca5072bbac773960dfa36"), common.HexToAddress("0x99ac8ca7087fa4a2a1fb6357269965a2014abc35"), common.HexToAddress("0xcbcdf9626bc03e24f779434178a73a0b4bad62ed"), common.HexToAddress("0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8"), common.HexToAddress("0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801"), common.HexToAddress("0x3416cf6c708da44db2624d63ea0aaef7113527c6"), common.HexToAddress("0x5777d92f208679db4b9778590fa3cab3ac9e2168"), common.HexToAddress("0x290a6a7460b308ee3f19023d2d00de604bcf5b42"), common.HexToAddress("0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf"), common.HexToAddress("0xa3f558aebaecaf0e11ca4b2199cc5ed341edfd74"), common.HexToAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"), common.HexToAddress("0x11b815efb8f581194ae79006d24e0d814b7697f6"), common.HexToAddress("0x4585fe77225b41b697c938b018e2ac67ac5a20c0"), common.HexToAddress("0x4e0924d3a751be199c426d52fb1f2337fa96f736"), common.HexToAddress("0x9a772018fbd77fcd2d25657e5c547baff3fd7d16"), common.HexToAddress("0x11950d141ecb863f01007add7d1a342041227b58"), common.HexToAddress("0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa"), common.HexToAddress("0x60594a405d53811d3bc4766596efd80fd545a270"), common.HexToAddress("0x840deeef2f115cf50da625f7368c24af6fe74410"), common.HexToAddress("0xe8c6c9227491c0a8156a0106a0204d881bb7e531"), common.HexToAddress("0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8"), common.HexToAddress("0xc5af84701f98fa483ece78af83f11b6c38aca71d"), common.HexToAddress("0x7bea39867e4169dbe237d55c8242a8f2fcdcc387")},
	BlockTimeSeconds: 15,
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
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
		WethAddress: common.HexToAddress("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
		WbtcAddress: common.HexToAddress("0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"),
	},
	Oku: OkuMetadata{
		//"",
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
