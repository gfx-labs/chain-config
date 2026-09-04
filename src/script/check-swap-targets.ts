import { type Address, type Chain, createPublicClient, http } from "viem";
import { MAINNET_CHAINS } from "../index";
import type { IChainInfo, MarketRouters } from "../spec";

const SWAP_TARGETS_ABI = [
	{
		type: "function",
		name: "swapTargets",
		stateMutability: "view",
		inputs: [{ name: "", type: "address" }],
		outputs: [{ name: "", type: "bool" }],
	},
] as const;

const CHAIN_CONCURRENCY = 6;
const ROUTER_CONCURRENCY = 6;

interface ConfiguredRouter {
	address: Address;
	markets: string[];
}

interface RouterFailure extends ConfiguredRouter {
	error?: string;
}

interface ChainFailures {
	chainId: number;
	chainName: string;
	failures: RouterFailure[];
}

function configuredRouters(marketRouters: MarketRouters): ConfiguredRouter[] {
	const routers = new Map<string, ConfiguredRouter>();

	for (const [market, addresses] of Object.entries(marketRouters)) {
		for (const address of addresses ?? []) {
			const key = address.toLowerCase();
			const router = routers.get(key);

			if (router) {
				router.markets.push(market);
			} else {
				routers.set(key, { address, markets: [market] });
			}
		}
	}

	return [...routers.values()];
}

function shortError(error: unknown): string {
	if (typeof error === "object" && error !== null && "shortMessage" in error) {
		return String(error.shortMessage).split("\n", 1)[0];
	}

	if (error instanceof Error) return error.message.split("\n", 1)[0];
	return String(error).split("\n", 1)[0];
}

async function mapWithConcurrency<T, R>(
	items: readonly T[],
	concurrency: number,
	fn: (item: T) => Promise<R>,
): Promise<R[]> {
	const results = new Array<R>(items.length);
	let nextIndex = 0;

	await Promise.all(
		Array.from({ length: Math.min(concurrency, items.length) }, async () => {
			while (nextIndex < items.length) {
				const index = nextIndex++;
				results[index] = await fn(items[index]);
			}
		}),
	);

	return results;
}

async function checkChain(
	chain: IChainInfo,
): Promise<ChainFailures | undefined> {
	const marketRouters = chain.marketRouters;
	if (!marketRouters) return undefined;

	const routers = configuredRouters(marketRouters);
	const okuRouter = chain.oku.router;

	if (!okuRouter) {
		return {
			chainId: chain.id,
			chainName: chain.internalName,
			failures: routers.map((router) => ({
				...router,
				error: "oku.router is not configured",
			})),
		} satisfies ChainFailures;
	}

	const client = createPublicClient({
		chain: chain as Chain,
		transport: http(`https://venn.lat.gfx.town/${chain.internalName}`, {
			retryCount: 2,
			timeout: 20_000,
		}),
	});

	const checks = await mapWithConcurrency(
		routers,
		ROUTER_CONCURRENCY,
		async (router): Promise<RouterFailure | undefined> => {
			try {
				const allowed = await client.readContract({
					address: okuRouter.toLowerCase() as Address,
					abi: SWAP_TARGETS_ABI,
					functionName: "swapTargets",
					args: [router.address.toLowerCase() as Address],
				});

				return allowed ? undefined : router;
			} catch (error) {
				return { ...router, error: shortError(error) };
			}
		},
	);

	return {
		chainId: chain.id,
		chainName: chain.internalName,
		failures: checks.filter((failure) => failure !== undefined),
	} satisfies ChainFailures;
}

async function main() {
	const results = await mapWithConcurrency(
		MAINNET_CHAINS as readonly IChainInfo[],
		CHAIN_CONCURRENCY,
		checkChain,
	);
	const failedChains = results.filter(
		(result): result is ChainFailures =>
			result !== undefined && result.failures.length > 0,
	);

	if (failedChains.length === 0) {
		console.log("all good");
		return;
	}

	for (const { chainId, chainName, failures } of failedChains) {
		console.log(`${chainName} (${chainId}):`);
		for (const { address, error, markets } of failures) {
			const marketList = markets.join(", ");
			const errorSuffix = error ? `; check failed: ${error}` : "";
			console.log(`  - ${address} (${marketList}${errorSuffix})`);
		}
	}

	process.exitCode = 1;
}

main().catch((error) => {
	console.error(shortError(error));
	process.exitCode = 1;
});
