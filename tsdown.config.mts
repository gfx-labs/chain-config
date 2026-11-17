import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	platform: "neutral",
	target: "es2020",
	outDir: "dist",
	dts: true,
	clean: true,
	inputOptions: { checks: { pluginTimings: false } },
	copy: [{ from: "static/networks/*", to: "dist/networks" }],
});
