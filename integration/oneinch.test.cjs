const assert = require("node:assert/strict");
const { test } = require("node:test");

for (const entry of ["../dist/index.js", "../dist/index.mjs"]) {
	test(`${entry} exposes supported 1inch routers and excludes Sei`, async () => {
		const { networkById, routerAllowlist, routersForMarket, isAllowedRouter } =
			await import(entry);
		const router = "0x111111125421ca6dc452d289314280a0f8842a65";
		for (const chainId of [1, 100, 130]) {
			assert.deepEqual(routersForMarket(chainId, "oneinch"), [router]);
			assert.equal(routerAllowlist(chainId).has(router), true);
			assert.equal(isAllowedRouter(chainId, router), true);
		}
		const sei = networkById(1329);
		assert.equal("oneinch" in sei.markets, false);
		assert.deepEqual(routersForMarket(1329, "oneinch"), []);
	});
}
