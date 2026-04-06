import type { IChainInfo } from "../spec";

/** CAIP-2 chain identifier components */
export interface CAIP2Identifier {
	namespace: string;
	reference: string;
}

/**
 * Parse a CAIP-2 chain ID string into its namespace and reference components.
 *
 * @example
 * ```ts
 * parseCAIP2("eip155:1")
 * // => { namespace: "eip155", reference: "1" }
 * ```
 *
 * @throws {Error} If the string does not contain exactly one ':'
 */
export function parseCAIP2(caip2: string): CAIP2Identifier {
	const sep = caip2.indexOf(":");
	if (sep === -1 || sep !== caip2.lastIndexOf(":")) {
		throw new Error(`Invalid CAIP-2 identifier: "${caip2}"`);
	}
	return {
		namespace: caip2.slice(0, sep),
		reference: caip2.slice(sep + 1),
	};
}

/**
 * Format a CAIP-2 chain ID string from namespace and reference components.
 *
 * @example
 * ```ts
 * formatCAIP2({ namespace: "eip155", reference: "1" })
 * // => "eip155:1"
 * ```
 */
export function formatCAIP2(id: CAIP2Identifier): string {
	return `${id.namespace}:${id.reference}`;
}

/**
 * Convert a chain config to its CAIP-2 identifier string.
 *
 * @example
 * ```ts
 * import { mainnet } from "@gfxlabs/oku-chains";
 * toCAIP2(mainnet)
 * // => "eip155:1"
 * ```
 */
export function toCAIP2(chain: IChainInfo): string {
	return formatCAIP2({
		namespace: chain.caip2Namespace,
		reference: String(chain.id),
	});
}

/**
 * Look up a chain config by its CAIP-2 identifier string from a list of chains.
 *
 * @example
 * ```ts
 * import { MAINNET_CHAINS } from "@gfxlabs/oku-chains";
 * fromCAIP2("eip155:1", MAINNET_CHAINS)
 * // => mainnet chain config
 * ```
 *
 * @throws {Error} If the CAIP-2 string is invalid or no matching chain is found
 */
export function fromCAIP2(
	caip2: string,
	chains: readonly IChainInfo[],
): IChainInfo {
	const { namespace, reference } = parseCAIP2(caip2);
	const chain = chains.find(
		(c) => c.caip2Namespace === namespace && String(c.id) === reference,
	);
	if (!chain) {
		throw new Error(`No chain found for CAIP-2 identifier: "${caip2}"`);
	}
	return chain;
}
