import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { isAddress } from "viem";
import { describe, expect, expectTypeOf, it } from "vitest";

import * as defs from "./definitions";
import {
	ALL_NETWORKS,
	type IChainInfo,
	type InternalName,
	MAINNET_CHAINS,
	NON_EVM_CHAIN_ID,
	networkByAny,
	networkByCAIP2,
	networkById,
	networkByName,
	parseCAIP2,
	toCAIP2,
} from "./index";

/**
 * Chains defined in src/definitions that are intentionally not part of
 * MAINNET_CHAINS (testnets or disabled chains). Add an entry here, with a
 * reason, when a definition should not ship in MAINNET_CHAINS.
 */
const EXCLUDED_DEFINITIONS: ReadonlySet<string> = new Set<string>([]);

const dupes = <T>(xs: readonly T[]): T[] =>
	xs.filter((x, i) => xs.indexOf(x) !== i);

const name = (c: IChainInfo) => c.internalName;

describe("network invariants", () => {
	it("has unique ids (excluding NON_EVM_CHAIN_ID)", () => {
		const ids = ALL_NETWORKS.map((c) => c.id).filter(
			(id) => id !== NON_EVM_CHAIN_ID,
		);
		expect(dupes(ids)).toEqual([]);
	});

	it("has unique internalNames", () => {
		expect(dupes(ALL_NETWORKS.map(name))).toEqual([]);
	});

	it("has unique CAIP-2 identifiers", () => {
		expect(dupes(ALL_NETWORKS.map(toCAIP2))).toEqual([]);
	});

	it("has a logoUrl on every chain", () => {
		const missing = ALL_NETWORKS.filter((c) => !c.logoUrl).map(name);
		expect(missing).toEqual([]);
	});

	it("has unique sortIndex among non-deprecated mainnets", () => {
		const live = MAINNET_CHAINS.filter((c) => !c.deprecated && !c.testnet);
		expect(dupes(live.map((c) => c.sortIndex))).toEqual([]);
	});

	it("includes every definition in MAINNET_CHAINS or the excluded list", () => {
		const included = new Set<unknown>(MAINNET_CHAINS);
		const orphans = Object.entries(defs)
			.filter(([, v]) => typeof v === "object" && v && "internalName" in v)
			.filter(([k, v]) => !included.has(v) && !EXCLUDED_DEFINITIONS.has(k))
			.map(([k]) => k);
		expect(orphans).toEqual([]);
	});

	it("exports every file in src/definitions from the barrel", () => {
		const dir = join(__dirname, "definitions");
		const files = readdirSync(dir).filter(
			(f) => f.endsWith(".ts") && f !== "index.ts" && !f.endsWith(".test.ts"),
		);
		const barrel = readFileSync(join(dir, "index.ts"), "utf8");
		const missing = files
			.map((f) => f.replace(/\.ts$/, ""))
			.filter((m) => !barrel.includes(`export * from "./${m}";`));
		expect(missing).toEqual([]);
	});

	it("uses only valid, EIP-55 checksummed addresses", () => {
		const bad: string[] = [];
		const walk = (v: unknown, path: string) => {
			if (typeof v === "string") {
				if (/^0x[0-9a-fA-F]{40}$/.test(v) && !isAddress(v, { strict: true })) {
					bad.push(`${path}=${v}`);
				}
				return;
			}
			if (v && typeof v === "object") {
				for (const [k, child] of Object.entries(v)) walk(child, `${path}.${k}`);
			}
		};
		for (const c of ALL_NETWORKS) walk(c, c.internalName);
		expect(bad).toEqual([]);
	});
});

describe.each(ALL_NETWORKS.map((c) => [c.internalName, c] as const))(
	"resolution: %s",
	(_, chain) => {
		it("round-trips through CAIP-2", () => {
			const caip2 = toCAIP2(chain);
			const { namespace, reference } = parseCAIP2(caip2);
			expect(namespace).toBe(chain.caip2Namespace);
			expect(`${namespace}:${reference}`).toBe(caip2);
			expect(networkByCAIP2(caip2)).toBe(chain);
			expect(networkByAny(caip2)).toBe(chain);
		});

		it("resolves by name", () => {
			expect(networkByName(chain.internalName)).toBe(chain);
			expect(networkByAny(chain.internalName)).toBe(chain);
		});

		it.skipIf(chain.id === NON_EVM_CHAIN_ID)("resolves by id", () => {
			expect(networkById(chain.id)).toBe(chain);
			expect(networkByAny(chain.id)).toBe(chain);
		});
	},
);

describe("types", () => {
	it("InternalName is a literal union", () => {
		expectTypeOf<"ethereum">().toExtend<InternalName>();
		expectTypeOf<"bitcoin">().toExtend<InternalName>();
		expectTypeOf<string>().not.toExtend<InternalName>();
	});
});
