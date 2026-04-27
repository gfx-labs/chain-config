package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Bsc Network = Network{
	ChainId:           56,
	Caip2Namespace:    "eip155",
	LogoUrl:           "https://cms.oku.trade/cdn/public/chains/bsc-logo.svg",
	Deprecated:        false,
	LiteChain:         false,
	SortIndex:         6,
	LaunchTime:        1689346800,
	SafeReorgDistance: 90000,
	BlockExplorers: map[string]BlockExplorer{
		"default": {
			Url:    "https://bscscan.com",
			ApiUrl: "https://api.bscscan.com/api",
		},
	},
	DefaultPool:     common.HexToAddress("0x47a90a2d92a8367a91efa1906bfc8c1e05bf10c4"),
	InternalName:    "bsc",
	TransactionType: "eip1559",
	InitCodeHash:    common.HexToHash("0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"),
	ExternalId: map[string]string{
		"zerion":    "binance-smart-chain",
		"debank":    "bsc",
		"tenderly":  "true",
		"cowswap":   "bnb",
		"coingecko": "binance-smart-chain",
	},
	DefaultToken0: common.HexToAddress("0x55d398326f99059ff775485246999027b3197955"),
	DefaultToken1: common.HexToAddress("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),
	BlockAid:      "bsc",
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{common.HexToAddress("0x55d398326f99059ff775485246999027b3197955"), common.HexToAddress("0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"), common.HexToAddress("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"), common.HexToAddress("0xe9e7cea3dedca5984780bafc599bd69add087d56"), common.HexToAddress("0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9")},
	StablecoinMap:    map[common.Address]struct{}{common.HexToAddress("0x55d398326f99059ff775485246999027b3197955"): {}, common.HexToAddress("0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"): {}, common.HexToAddress("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"): {}, common.HexToAddress("0xe9e7cea3dedca5984780bafc599bd69add087d56"): {}, common.HexToAddress("0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9"): {}},
	Watchlist:        []common.Address{common.HexToAddress("0x47a90a2d92a8367a91efa1906bfc8c1e05bf10c4"), common.HexToAddress("0x28df0835942396b7a1b7ae1cd068728e6ddbbafd"), common.HexToAddress("0xb125aa15ad943d96e813e4a06d0c34716f897e26"), common.HexToAddress("0x0f338ec12d3f7c3d77a4b9fcc1f95f3fb6ad0ea6"), common.HexToAddress("0xf9878a5dd55edc120fde01893ea713a4f032229c"), common.HexToAddress("0x2c3c320d49019d4f9a92352e947c7e5acfe47d68"), common.HexToAddress("0xc98f01bf2141e1140ef8f8cad99d4b021d10718f"), common.HexToAddress("0x3fb2623567e21f8c50f0ae86f54ef4849b4eb47b"), common.HexToAddress("0x5289a8dbf7029ee0b0498a84777ed3941d9acfec"), common.HexToAddress("0xf2c9339945bff71dd0bffd3c142164112cd05dc6"), common.HexToAddress("0xf5c616e7b58226b8081dcc7e4a7123a63734eef6"), common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869"), common.HexToAddress("0x0525190f3532b99b32fb42b2697807bd80268565"), common.HexToAddress("0xcb99fe720124129520f7a09ca3cbef78d58ed934"), common.HexToAddress("0x06396509195eb9e07c38a016694dc9ff535b128a")},
	V4Watchlist:      []common.Hash{},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("0x19b9bd76028cab6f414ed1fc57400b75b5ca0627"),
		LimitOrderRegistryDeployBlock: 34187988,

		Pricing: OkuPricingMetadata{
			NativeWrappedToken: common.HexToAddress("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),
			NativeWrappedName:  "WBNB",
			Pools:              []common.Address{common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869"), common.HexToAddress("0x5289a8dbf7029ee0b0498a84777ed3941d9acfec"), common.HexToAddress("0xc98f01bf2141e1140ef8f8cad99d4b021d10718f"), common.HexToAddress("0x7862d9b4be2156b15d54f41ee4ede2d5b0b455e4"), common.HexToAddress("0xd0a5e2818a23e2054449982fb9ff9575867cf92b"), common.HexToAddress("0xac18e282c0b89a9981520e148ddd2bf9592e440c"), common.HexToAddress("0x6bcb0ba386e9de0c29006e46b2f01f047ca1806e"), common.HexToAddress("0x38df85c7d266deb3bf679501d8a8dcaf71c3672f"), common.HexToAddress("0x9b501a7ad3087d603ceb34424b7b2a6c348ad0b7"), common.HexToAddress("0x84e47c7f2fe86f6b5efbe14fee46b8bb871b2e05"), common.HexToAddress("0xf9878a5dd55edc120fde01893ea713a4f032229c"), common.HexToAddress("0x329eeb1a58bdb3b804d1f94623c7a29a67a9b6b7"), common.HexToAddress("0x7b9f1b263a25c68cfe942953796e414eaddde1a1"), common.HexToAddress("0x17507bef4c3abc1bc715be723ee1baf571256e05"), common.HexToAddress("0x4d170f8714367c44787ae98259ce8adb72240067"), common.HexToAddress("0xc8b4b9d7fc77000fde9a17cd1fb1e9394412ab6e"), common.HexToAddress("0x87c029bbb64c39a2a6762ac0e031757d2974e275"), common.HexToAddress("0xa47f717929b7de4d131af93c39627531fe623c9a"), common.HexToAddress("0x023b6298e2f9ae728b324757599f2a36e002a55a"), common.HexToAddress("0x06396509195eb9e07c38a016694dc9ff535b128a"), common.HexToAddress("0x4ef938b633d704f29e593a8b51148d43429d0bc4"), common.HexToAddress("0xd2f21358c1549be193537b2a4c5dc7f0228ae011"), common.HexToAddress("0xe15c03d4ce70d2102d8d7a4e42af677a5ac7ee16"), common.HexToAddress("0xf624649736a106f2aa16e8027ce9aeed1bcd22f9"), common.HexToAddress("0xb873e889f28e3d2c86f2495820dd5eca329bddf4"), common.HexToAddress("0x107c1dcb81234146400c96bc3e1252b42cde7d3e"), common.HexToAddress("0x23b6888106ea1b69d0b1b48cffa58606ce63fb17"), common.HexToAddress("0x0bfebcaa1873ff6bac70b36a54860d301d434e43"), common.HexToAddress("0xbe7cc96a863bdb43e25896664cf0e3c65f7973eb"), common.HexToAddress("0xe7df69cc69f5a9425865e30625ce516269c43ad1")},
			NativeQuotePools: []ChainContract{
				{
					BlockCreated: 26495967,
					Address:      common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869"),
				},
			},
		},
	},
	Uniswap: UniswapMetadata{
		DeployBlock:                        26324014,
		PoolFactory:                        common.HexToAddress("0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7"),
		Multicall2:                         common.HexToAddress("0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B"),
		ProxyAdmin:                         common.HexToAddress("0xC9A7f5b73E853664044ab31936D0E6583d8b1c79"),
		TickLens:                           common.HexToAddress("0xD9270014D396281579760619CCf4c3af0501A47C"),
		Quoter:                             common.HexToAddress("0x78D78E420Da98ad378D7799bE8f4AF69033EB077"),
		SwapRouter02:                       common.HexToAddress("0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2"),
		NFTDescriptor:                      common.HexToAddress("0x831d93E55AF23A2977E4DA892d5005f4F2995071"),
		NonfungibleTokenPositionDescriptor: common.HexToAddress("0x0281E98322e4e8E53491D576Ee6A2BFCE644C55C"),
		TransparentUpgradeableProxy:        common.HexToAddress("0xEe6A57eC80ea46401049E92587E52f5Ec1c24785"),
		NonfungiblePositionManager:         common.HexToAddress("0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613"),
		V3Migrator:                         common.HexToAddress("0x32681814957e0C13117ddc0c2aba232b5c9e760f"),
		UniswapV3Staker:                    common.HexToAddress("0x49B53C35AF9072fC71767577BF6380a88EE32C71"),
		PositionsNFT:                       common.HexToAddress("0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613"),
		PositionsNFTDeployBlock:            26324045,
		UniversalRouter:                    common.HexToAddress("0xeC8B0F7Ffe3ae75d7FfAb09429e3675bb63503e4"),
		WrappedNativeAddress:               common.HexToAddress("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),
		WrappedNativeSymbol:                "WBNB",
		WrappedNativeName:                  "Wrapped BNB",
		WrappedNativeDecimals:              18,
		NativeCurrencyName:                 "BNB",
	},

	Morpho: MorphoMetadata{},
	Token: TokenMetadata{
		UsdcAddress: common.HexToAddress("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"),
		WbtcAddress: common.HexToAddress("0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"),
		WethAddress: common.HexToAddress("0x2170ed0880ac9a755fd29b2688956bd959f933f8"),
	},
	Contracts: map[string]ChainContract{
		"multicall3": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xcA11bde05977b3631167028862bE2a173976CA11"),
		},
		"limitOrder": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x19b9bd76028cab6f414ed1fc57400b75b5ca0627"),
		},
		"nftManager": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613"),
		},
		"weth9": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),
		},
		"multicall2": {
			BlockCreated: 0,
			Address:      common.HexToAddress("0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B"),
		},
	},
}
