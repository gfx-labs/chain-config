// Packs the package, installs the tarball into a temp dir and loads it via
// both ESM and CJS. Catches files missing from the "files" field (e.g. shared
// chunks emitted by the bundler) before they are published.
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dir = mkdtempSync(join(tmpdir(), "oku-chains-pack-"));
const run = (cmd, args, cwd) =>
	execFileSync(cmd, args, { cwd, stdio: ["ignore", "pipe", "inherit"] })
		.toString()
		.trim();

try {
	const out = run(
		"npm",
		["pack", "--ignore-scripts", "--json", "--pack-destination", dir],
		root,
	);
	const tarball = join(dir, JSON.parse(out)[0].filename);
	writeFileSync(
		join(dir, "package.json"),
		JSON.stringify({ name: "pack-test", private: true }),
	);
	run(
		"npm",
		["install", "--no-save", "--no-audit", "--no-fund", tarball, "viem"],
		dir,
	);

	const check =
		"if (!(m.MAINNET_CHAINS.length > 0) || !m.networkByName('ethereum')) throw new Error('bad exports');";
	run(
		"node",
		[
			"--input-type=module",
			"-e",
			`const m = await import('@gfxlabs/oku-chains'); ${check}`,
		],
		dir,
	);
	run(
		"node",
		[
			"--input-type=commonjs",
			"-e",
			`const m = require('@gfxlabs/oku-chains'); ${check}`,
		],
		dir,
	);
	console.log("packed tarball loads via ESM and CJS");
} finally {
	rmSync(dir, { recursive: true, force: true });
}
