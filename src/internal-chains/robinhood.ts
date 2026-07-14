import { makeInternalChain } from "./util";

/**
 * Robinhood Chain Mainnet.
 *
 * Not (yet) exported by the local `viem/chains`; defined internally so we
 * can ship chain-config support ahead of upstream. Swap this import for
 * `viem/chains` once viem adds it.
 *
 * Modeled after Arbitrum (ETH-native L2).
 *
 * Refs:
 *   - https://robinhoodchain.blockscout.com
 *   - https://rpc.mainnet.chain.robinhood.com
 */
export const robinhood = makeInternalChain({
	id: 4663,
	name: "Robinhood Chain",
	nativeCurrency: {
		name: "Ether",
		symbol: "ETH",
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: ["https://rpc.mainnet.chain.robinhood.com"],
		},
	},
	blockExplorers: {
		default: {
			name: "Blockscout",
			url: "https://robinhoodchain.blockscout.com",
		},
	},
	contracts: {
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
