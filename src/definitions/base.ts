import {} from "viem";
import { base as chain } from "viem/chains";
import { makeConfig } from "../util";

export const base = makeConfig({
	...chain,
	sortIndex: 8,
	launchTime: 1707321600,
	blockTimeSeconds: 2,
	logoUrl: "https://assets.oku.trade/chains/base-logo.svg",
	defaultPool: "0xd0b53d9277642d899df5c87a3966a349a798f224",
	defaultToken0: "0x4200000000000000000000000000000000000006",
	defaultToken1: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
	morpho: {
		deployBlock: 13977148,
		morpho: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
		mmFactory10: "0xa9c3d3a366466fa809d1ae982fb2c46e5fc41101",
		mmFactory11: "0xFf62A7c278C62eD665133147129245053Bbf5918",
	},
	externalId: {
		zerion: "base",
		debank: "base",
	},
	markets: {
		kyberswap: "base",
		oneinch: true,
		paraswap: {
			routerContract: "0x6A000F20005980200259B80c5102003040001068",
		},
		openocean: "base",
		zeroex: true,
	},
	bridges: {
		chainlink: {
			atlasNetworkName: "ethereum-mainnet-base-1",
			routerAddress: "0x881e3A65B4d4a04dD529061dd0071cf975F58bCD",
			chainSelector: 15971525489660198786n,
		},
		rhinofi: "BASE",
		stargate: {
			endpointID: 30184,
			blockConfirmations: 20,
			pools: [
				{
					id: 13,
					address: "0xdc181Bd607330aeeBEF6ea62e03e5e1Fb4B6F7C7",
				},
				{
					id: 1,
					address: "0x27a16dc786820B16E5c9028b75B99F6f604b5d26",
				},
			],
		},
		wanbridge: {
			requiredConfirmations: 200,
		},
		wormhole: {
			chain: "Base",
			timeToFinalize: 1800,
		},
	},
	oracles: {
		cmc: {
			slug: "base",
			native: "ethereum",
		},
		coingecko: {
			slug: "base",
			native: "ethereum",
		},
		dexscreener: "base",
	},
	safeReorgDistance: 90000,
	uniswap: {
		deployBlock: 1371680,
		poolFactory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
		multicall2: "0x41A513463248971B41C0580726CF4D425c071732",
		tickLens: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
		nonfungiblePositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
		positionsNFT: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
		positionsNFTDeployBlock: 1371714,
		universalRouter: "0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4",
		wrappedNativeAddress: "0x4200000000000000000000000000000000000006",
		wrappedNativeSymbol: "WETH",
		wrappedNativeName: "Wrapped Ether",
		wrappedNativeDecimals: 18,
		nativeCurrencyName: "ETH",
	},
	token: {
		usdcAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
	},
	oku: {
		limitOrderRegistry: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27",
		limitOrderRegistryDeployBlock: 7644835,
		pricing: {
			nativeWrappedToken: "0x4200000000000000000000000000000000000006",
			nativeWrappedName: "WETH",
		},
	},
	tokenList: [
		{ symbol: "USDbC", address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca" },
		{ symbol: "cbETH", address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22" },
		{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
		{ symbol: "USDC", address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" },
		{ symbol: "USDT", address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2" },
	],
	stables: [
		"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
		"0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
		"0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
		"0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
	],
	watchlist: [
		"0x4c36388be6f416a29c8d8eee81c771ce6be14b18",
		"0x06959273e9a65433de71f5a452d529544e07ddd0",
		"0xc9034c3e7f58003e6ae0c8438e7c8f4598d5acaa",
		"0xd0b53d9277642d899df5c87a3966a349a798f224",
		"0x48413707b70355597404018e7c603b261fcadf3f",
		"0x4b0aaf3ebb163dd45f663b38b6d93f6093ebc2d3",
		"0x0d5959a52e7004b601f0be70618d01ac3cdce976",
		"0x10648ba41b8565907cfa1496765fa4d95390aa0d",
		"0x22f9623817f152148b4e080e98af66fbe9c5adf8",
		"0xae2ce200bdb67c472030b31f602f0756c9aeb61c",
		"0xd5638bf58e2762fa40bd753490f693cbb1986709",
		"0x018046b1d182f7c0978c07610e1173c8e11913fd",
		"0x24e1cbd6fed006ceed9af0dce688acc7951d57a9",
		"0x97a25cc2793f0ffa90e1667cf7b3c1f130737189",
		"0xfcc89a1f250d76de198767d33e1ca9138a7fb54b",
		"0x3bc5180d5439b500f381f9a46f15dd6608101671",
		"0xa555149210075702a734968f338d5e1cbd509354",
		"0x5197195ac878741b192f84ff6d7da5a85b9e634b",
		"0xe745a591970e0fa981204cf525e170a2b9e4fb93",
		"0x7e904aaf3439402eb21958fe090bd852d5e882cf",
	],
	internalName: "base",
	initCodeHash:
	"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	nativeLogoUrl: "https://assets.oku.trade/natives/eth.png",
	contracts: {
		...chain.contracts,
		nftManager: {
			address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
		},
		weth9: {
			address: "0x4200000000000000000000000000000000000006",
		},
		limitOrder: {
			address: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27",
		},
		multicall2: {
			address: "0x41A513463248971B41C0580726CF4D425c071732",
		},
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
