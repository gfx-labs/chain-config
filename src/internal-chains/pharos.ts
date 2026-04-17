import { makeInternalChain } from "./util";

/**
 * Pharos Mainnet.
 *
 * Not (yet) exported by `viem/chains`; defined internally so we can ship
 * chain-config support ahead of upstream. Swap this import for
 * `viem/chains` once viem adds it.
 *
 * Refs:
 *   - https://rpc.pharos.xyz
 *   - https://pharos.socialscan.io
 *   - https://linear.app/gfx-labs/project/pharos-morpho-985c928b0010
 */
export const pharos = makeInternalChain({
	id: 1672,
	name: "Pharos Mainnet",
	nativeCurrency: {
		name: "Pharos",
		symbol: "PROS",
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: ["https://rpc.pharos.xyz"],
		},
	},
	blockExplorers: {
		default: {
			name: "SocialScan",
			url: "https://pharos.socialscan.io",
		},
	},
	contracts: {
		// No canonical multicall3 deployment confirmed yet; add when known.
	},
});
