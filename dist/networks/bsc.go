package networks

import (
	"github.com/ethereum/go-ethereum/common"
)

var Bsc Network = Network{
	ChainId:       "56",
	LogoUrl:       "https://assets.oku.trade/bsc-logo.svg",
	SortIndex:     9,
	DefaultPool:   common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869"),
	InternalName:  "bsc",
	DefaultToken0: common.HexToAddress("0x55d398326f99059ff775485246999027b3197955"),
	DefaultToken1: common.HexToAddress("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"),
	//TODO: TokenList:        []any{},
	Stables:          []common.Address{},
	StablecoinMap:    map[common.Address]struct{}{},
	Watchlist:        []common.Address{common.HexToAddress("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869")},
	BlockTimeSeconds: 3,
	Oku: OkuMetadata{
		LimitOrderRegistry:            common.HexToAddress("undefined"),
		LimitOrderRegistryDeployBlock: undefined,
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
		DeployBlock:                        969351,
		PoolFactory:                        common.HexToAddress("0xFFCd7Aed9C627E82A765c3247d562239507f6f1B"),
		Multicall2:                         common.HexToAddress("0xd213Ff319F8d28Fe31EbDB75b23aA61a2b905320"),
		ProxyAdmin:                         common.HexToAddress("0xE8B5DaE430189ea6ccffF4eEeC58a98556525fB4"),
		TickLens:                           common.HexToAddress("0x36EBd44350E4406E67C5579026950793b8528402"),
		Quoter:                             common.HexToAddress("0x483fc90DDC7aC847D4a752055DCF73483B6d97FD"),
		SwapRouter02:                       common.HexToAddress("0x759E8B0cb9d65291e258aE3e043258ae1dD0df16"),
		NFTDescriptor:                      common.HexToAddress("0x531c3B226288854e992150FEfF4d95F7B8DEbD8c"),
		NonfungibleTokenPositionDescriptor: common.HexToAddress("0xb6751A274EDAe02A911E3bB23682FAaF380433b7"),
		TransparentUpgradeableProxy:        common.HexToAddress("0xEe6A57eC80ea46401049E92587E52f5Ec1c24785"),
		NonfungiblePositionManager:         common.HexToAddress("0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71"),
		V3Migrator:                         common.HexToAddress("0x9ab1E646877732DD76bd662DC242723D7e4B42ba"),
		UniswapV3Staker:                    common.HexToAddress("0x6a6c1198f85B084822138DFd3fA9686e4029c091"),
		PositionsNFT:                       common.HexToAddress("0x0bfc9aC7E52f38EAA6dC8d10942478f695C6Cf71"),
		PositionsNFTDeployBlock:            969359,
	},
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
