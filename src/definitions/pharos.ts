import { zeroAddress } from "viem";
import { pharos as chain } from "../internal-chains";
import { makeConfig } from "../util";

export const pharos = makeConfig({
	...chain,
	name: "Pharos",
	blockTimeSeconds: 2,
	launchTime: 1777014000,
	transactionType: "eip1559",
	sortIndex: 46,
	logoUrl: "https://cms.oku.trade/cdn/public/chains/pharos-logo.svg",
	deprecated: false,
	liteChain: true,
	estimatedSwapGas: 300_000,
	estimatedBridgeGas: 200_000,
	estimatedWrapGas: 60_000,
	safeReorgDistance: 90_000,
	blockAid: "",
	externalId: {},
	markets: {},
	bridges: {
		cctp: {
			domain: 31,
			messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64",
		},
	},
	oracles: {},
	morpho: {
		deployBlock: 4202147,
		morpho: "0x18573fA18fd17dDfD790B4a5B5b2977aad3b4Efb",
		bundler3: "0x3c90c09F8c5d927a117F681fB924952DbbD99120",
		vaultV2Factory: "0x8E01ed1E1A41029b3137FcE9Aa880c0A54827498",
		morphoMarketV1AdapterV2Factory:
			"0xe510e1fcC429943cA3455A7bfBD79f0307Cd8403",
	},
	initCodeHash:
		"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
	uniswap: {},
	token: {
		usdcAddress: "0xc879c018db60520f4355c26ed1a6d572cdac1815",
		wethAddress: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0",
	},
	oku: {
		limitOrderRegistry: zeroAddress,
		limitOrderRegistryDeployBlock: 0,
		pricing: {
			nativeWrappedToken: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0",
			nativeWrappedName: "PROS",
		},
	},
	defaultPool: zeroAddress,
	defaultToken0: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0",
	defaultToken1: "0xc879c018db60520f4355c26ed1a6d572cdac1815",
	tokenList: [
		{ symbol: "WPROS", address: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0" },
		{
			symbol: "USDC",
			address: "0xc879c018db60520f4355c26ed1a6d572cdac1815",
		},
	],
	stables: ["0xc879c018db60520f4355c26ed1a6d572cdac1815"],
	watchlist: [],
	v4Watchlist: [],
	internalName: "pharos",
	nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/pros.png",
	contracts: {
		...chain.contracts,
		limitOrder: {
			address: zeroAddress,
			blockCreated: 0,
		},
		nftManager: {
			address: zeroAddress,
		},
		weth9: {
			address: "0x52c48d4213107b20bc583832b0d951fb9ca8f0b0",
		},
	},
});
