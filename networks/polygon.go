package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Polygon Network = Network{
	LogoUrl:       "https://assets.oku.trade/polygon-logo.webp",
	SortIndex:     3,
	DefaultPool:   common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"),
	InternalName:  "polygon",
	DefaultToken0: common.HexToAddress("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"),
	DefaultToken1: common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"),
	//TokenList:        "",
	Stables:          []common.Address{common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"), common.HexToAddress("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063"), common.HexToAddress("0xc2132d05d31c914a87c6611c10748aeb04b58e8f")},
	Watchlist:        []common.Address{common.HexToAddress("0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5"), common.HexToAddress("0x0e44ceb592acfc5d3f09d996302eb4c499ff8c10"), common.HexToAddress("0x167384319b41f7094e62f7506409eb38079abff8"), common.HexToAddress("0x94ab9e4553ffb839431e37cc79ba8905f45bfbea"), common.HexToAddress("0x88f3c15523544835ff6c738ddb30995339ad57d6"), common.HexToAddress("0x45dda9cb7c25131df268515131f647d726f50608"), common.HexToAddress("0xa374094527e1673a86de625aa59517c5de346d32"), common.HexToAddress("0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7"), common.HexToAddress("0x50eaedb835021e4a108b7290636d62e9765cc6d7"), common.HexToAddress("0x86f1d8390222a3691c28938ec7404a1661e618e0"), common.HexToAddress("0xeef1a9507b3d505f0062f2be9453981255b503c8"), common.HexToAddress("0x1f6082db7c8f4b199e17090cd5c8831a1dad1997"), common.HexToAddress("0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d"), common.HexToAddress("0x3a5329ee48a06671ad1bf295b8a233ee9b9b975e"), common.HexToAddress("0x0a63d3910ffc1529190e80e10855c4216407cc45"), common.HexToAddress("0x5645dcb64c059aa11212707fbf4e7f984440a8cf"), common.HexToAddress("0x7de263d0ad6e5d208844e65118c3a02a9a5d56b6"), common.HexToAddress("0x2aceda63b5e958c45bd27d916ba701bc1dc08f7a"), common.HexToAddress("0x4d05f2a005e6f36633778416764e82d1d12e7fbb"), common.HexToAddress("0x3d0acd52ee4a9271a0ffe75f9b91049152bac64b"), common.HexToAddress("0x3e31ab7f37c048fc6574189135d108df80f0ea26"), common.HexToAddress("0xd866fac7db79994d08c0ca2221fee08935595b4b"), common.HexToAddress("0x98b9162161164de1ed182a0dfa08f5fbf0f733ca"), common.HexToAddress("0x4ccd010148379ea531d6c587cfdd60180196f9b1"), common.HexToAddress("0xfe343675878100b344802a6763fd373fdeed07a4"), common.HexToAddress("0x357faf5843c7fd7fb4e34fbeabdac16eabe8a5bc")},
	BlockTimeSeconds: 2,
	Uniswap: UniswapMetadata{
		DeployBlock:                        22757547,
		PoolFactory:                        common.HexToAddress("0x1F98431c8aD98523631AE4a59f267346ea31F984"),
		Multicall2:                         common.HexToAddress("0xca11bde05977b3631167028862be2a173976ca11"),
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
	},
	Token: TokenMetadata{
		WbtcAddress: common.HexToAddress("0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6"),
		UsdcAddress: common.HexToAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174"),
		WethAddress: common.HexToAddress("0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"),
	},
	Oku: OkuMetadata{
		//"",
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
