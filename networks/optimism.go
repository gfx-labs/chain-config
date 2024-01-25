package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Optimism Network = Network{
	LogoUrl:       "https://assets.oku.trade/optimism-logo.svg",
	SortIndex:     2,
	DefaultPool:   common.HexToAddress("0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36"),
	InternalName:  "optimism",
	DefaultToken0: common.HexToAddress("0x4200000000000000000000000000000000000042"),
	DefaultToken1: common.HexToAddress("0x7f5c764cbc14f9669b88837ca1490cca17c31607"),
	//TokenList:        "",
	Stables:          []common.Address{common.HexToAddress("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"), common.HexToAddress("0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9"), common.HexToAddress("0x8aE125E8653821E851F12A49F7765db9a9ce7384"), common.HexToAddress("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"), common.HexToAddress("0x7f5c764cbc14f9669b88837ca1490cca17c31607"), common.HexToAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85")},
	Watchlist:        []common.Address{common.HexToAddress("0xb589969d38ce76d3d7aa319de7133bc9755fd840"), common.HexToAddress("0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36"), common.HexToAddress("0xdd0c6bae8ad5998c358b823df15a2a4181da1b80"), common.HexToAddress("0x03af20bdaaffb4cc0a521796a223f7d85e2aac31"), common.HexToAddress("0x0bb50d3e479e4682558fdb86f41a205e2c035ae5"), common.HexToAddress("0x6168ec836d0b1f0c37381ec7ed1891a412872121"), common.HexToAddress("0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2"), common.HexToAddress("0xb2ac2e5a3684411254d58b1c5a542212b782114d"), common.HexToAddress("0x68f5c0a2de713a54991e01858fd27a3832401849"), common.HexToAddress("0x73b14a78a0d396c521f954532d43fd5ffe385216"), common.HexToAddress("0x85149247691df622eaf1a8bd0cafd40bc45154a9"), common.HexToAddress("0xc858a329bf053be78d6239c4a4343b8fbd21472b"), common.HexToAddress("0xf1f199342687a7d78bcc16fce79fa2665ef870e1"), common.HexToAddress("0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6"), common.HexToAddress("0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c"), common.HexToAddress("0x85c31ffa3706d1cce9d525a00f1c7d4a2911754c"), common.HexToAddress("0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05"), common.HexToAddress("0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0"), common.HexToAddress("0xaefc1edaede6adadcdf3bb344577d45a80b19582"), common.HexToAddress("0x0392B358CE4547601BEFA962680BEDE836606AE2"), common.HexToAddress("0x36E42931A765022790B797963E42C5522D6B585A"), common.HexToAddress("0x03A9DC118B231480058E7A3B051042EC83663794"), common.HexToAddress("0x95D7D146AE40D4822C2750276B54B6EED530D374"), common.HexToAddress("0x7f1c919a92bce8790a85d6360b85cf21b997a6b5"), common.HexToAddress("0x1a54ae9f662b463f8d432482975c17e51518b50d"), common.HexToAddress("0xff7fbdf7832ae524deda39ca402e03d92adff7a5"), common.HexToAddress("0x55bc964fe3b0c8cc2d4c63d65f1be7aef9bb1a3c"), common.HexToAddress("0x535541f1aa08416e69dc4d610131099fa2ae7222"), common.HexToAddress("0xadb35413ec50e0afe41039eac8b930d313e94fa4"), common.HexToAddress("0x730691cdac3cbd4d41fc5eb9d8abbb0cea795b94")},
	BlockTimeSeconds: 0.5,
	Uniswap: UniswapMetadata{
		DeployBlock:                        0,
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
		PositionsNFTDeployBlock:            0,
	},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85"),
		WethAddress: common.HexToAddress("0x4200000000000000000000000000000000000006"),
		WbtcAddress: common.HexToAddress("0x68f180fcce6836688e9084f035309e29bf0a2095"),
	},
	Oku: OkuMetadata{
		//"",
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
		"l2OutputOracle": {
			BlockCreated: 0,
			Address:      common.HexToAddress("undefined"),
		},
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"portal": {
			BlockCreated: 0,
			Address:      common.HexToAddress("undefined"),
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
