package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Arbitrum Network = Network{
	LogoUrl:       "https://assets.oku.trade/arbitrum-logo.svg",
	SortIndex:     1,
	DefaultPool:   common.HexToAddress("0xcda53b1f66614552f834ceef361a8d12a0b8dad8"),
	InternalName:  "arbitrum",
	DefaultToken0: common.HexToAddress("0x912ce59144191c1204e64559fe8253a0e49e6548"),
	DefaultToken1: common.HexToAddress("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8"),
	//TokenList:        "",
	Stables:          []common.Address{common.HexToAddress("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"), common.HexToAddress("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1"), common.HexToAddress("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"), common.HexToAddress("0xaf88d065e77c8cC2239327C5EDb3A432268e5831")},
	Watchlist:        []common.Address{common.HexToAddress("0x17c14d2c404d167802b16c450d3c99f88f2c4f4d"), common.HexToAddress("0xc82819f72a9e77e2c0c3a69b3196478f44303cf4"), common.HexToAddress("0x81c48d31365e6b526f6bbadc5c9aafd822134863"), common.HexToAddress("0xa62ad78825e3a55a77823f00fe0050f567c1e4ee"), common.HexToAddress("0x135e49cc315fed87f989e072ee11132686cf84f3"), common.HexToAddress("0xa961f0473da4864c5ed28e00fcc53a3aab056c1b"), common.HexToAddress("0x149e36e72726e0bcea5c59d40df2c43f60f5a22d"), common.HexToAddress("0x8e295789c9465487074a65b1ae9ce0351172393f"), common.HexToAddress("0x97bca422ec0ee4851f2110ea743c1cd0a14835a1"), common.HexToAddress("0x92c63d0e701caae670c9415d91c474f686298f00"), common.HexToAddress("0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71"), common.HexToAddress("0xf0428617433652c9dc6d1093a42adfbf30d29f74"), common.HexToAddress("0x1aeedd3727a6431b8f070c0afaa81cc74f273882"), common.HexToAddress("0x446bf9748b4ea044dd759d9b9311c70491df8f29"), common.HexToAddress("0x42d7c8302a746f98ec74f0dbc95fc39b46c1abb6"), common.HexToAddress("0xc91b7b39bbb2c733f0e7459348fd0c80259c8471"), common.HexToAddress("0xC31E54C7A869B9FCBECC14363CF510D1C41FA443"), common.HexToAddress("0x641C00A822e8b671738d32a431a4Fb6074E5c79d"), common.HexToAddress("0xCDA53B1F66614552F834CEEF361A8D12A0B8DAD8"), common.HexToAddress("0xC6F780497A95E246EB9449F5E4770916DCD6396A"), common.HexToAddress("0x2f5e87C9312fa29aed5c179E456625D79015299c"), common.HexToAddress("0x13398E27A21BE1218B6900CBEDF677571DF42A48"), common.HexToAddress("0x31FA55E03BAD93C7F8AFFDD2EC616EBFDE246001"), common.HexToAddress("0x468B88941E7CC0B88C1869D68AB6B570BCEF62FF"), common.HexToAddress("0xd37Af656Abf91c7f548FfFC0133175b5e4d3d5e6"), common.HexToAddress("0xc6962004f452be9203591991d15f6b388e09e8d0"), common.HexToAddress("0xdbaeb7f0dfe3a0aafd798ccecb5b22e708f7852c"), common.HexToAddress("0xbe3ad6a5669dc0b8b12febc03608860c31e2eef6"), common.HexToAddress("0x80a9ae39310abf666a87c743d6ebbd0e8c42158e"), common.HexToAddress("0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61"), common.HexToAddress("0x1862200e8e7ce1c0827b792d0f9546156f44f892"), common.HexToAddress("0x1edd8c76f74d816f7472be69b174fe7b3084221e"), common.HexToAddress("0x4d834a9b910e6392460ebcfb59f8eef27d5c19ff"), common.HexToAddress("0x0632742c132413cd47438691d8064ff9214ac216"), common.HexToAddress("0xa8328bf492ba1b77ad6381b3f7567d942b000baf"), common.HexToAddress("0x50450351517117cb58189edba6bbad6284d45902")},
	BlockTimeSeconds: 0.25,
	Uniswap: UniswapMetadata{
		DeployBlock:                        165,
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
		PositionsNFTDeployBlock:            173,
	},
	Token: TokenMetadata{
		WethAddress: common.HexToAddress("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"),
		WbtcAddress: common.HexToAddress("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f"),
		UsdcAddress: common.HexToAddress("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"),
	},
	Oku: OkuMetadata{
		//"",
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 7654707,
			Address:      common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
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
	},
}
