import { makeInternalChain } from "./util";

/**
 * Elysium Mainnet (Kinetiq).
 *
 * Arbitrum Orbit (AnyTrust) chain settling to HyperEVM (999), HYPE gas.
 * Not to be confused with viem's `elysiumTestnet` (Vulcan Forged, 1338).
 * Not (yet) exported by `viem/chains`; swap this import once upstream adds it.
 *
 * Refs:
 *   - https://hub.conduit.xyz/share/a7aoOpgVtE54dcAoYb2MQ/run-node
 *   - https://kinetiq.xyz/docs/elysium-technical-overview
 */
export const elysium = makeInternalChain({
	id: 99901,
	name: "Elysium",
	nativeCurrency: {
		name: "HYPE",
		symbol: "HYPE",
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: ["https://rpc-elysium-mainnet.t.conduit.xyz"],
		},
	},
	blockExplorers: {
		default: {
			name: "Elysium Explorer",
			url: "https://elysium.kinetiq.xyz/explorer",
		},
	},
	sourceId: 999,
	blockTime: 100,
	contracts: {
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
		},
	},
});
