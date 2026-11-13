const assert = require("node:assert/strict");
const { test } = require("node:test");

for (const entry of ["../dist/index.js", "../dist/index.mjs"]) {
	test(`${entry} exposes CoW slugs and complete deployments`, async () => {
		const { ALL_NETWORKS, networkByName } = await import(entry);
		for (const chain of ALL_NETWORKS) {
			if (!chain.markets.cowswap && !chain.externalId.cowswap) continue;
			assert.equal(typeof chain.markets.cowswap, "string");
			assert.equal(
				chain.cowswap?.settlement,
				"0x9008D19f58AAbD9eD0D60971565AA8510560ab41",
				chain.internalName,
			);
			assert.equal(
				chain.cowswap?.vaultRelayer,
				"0xC92E8bdf79f0507f65a392b0ab4667716BFE0110",
				chain.internalName,
			);
		}
		for (const name of ["linea", "plasma", "base", "lens"]) {
			const chain = networkByName(name);
			assert.equal(chain.markets.cowswap, name);
			assert.equal(chain.externalId.cowswap, name);
		}
		assert.equal(ALL_NETWORKS.some((chain) => chain.id === 57073), false);
	});
}
