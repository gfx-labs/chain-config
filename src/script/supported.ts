import { createPublicClient, http } from "viem";
import * as allChains from "../definitions/";

const chains = Object.values(allChains);

async function checkEIP1559(chain: string): Promise<boolean> {
	try {
		const client = createPublicClient({
			transport: http(`https://venn.staging.gfx.town/${chain}`),
		});

		const block = await client.getBlock();
		return block.baseFeePerGas !== undefined && block.baseFeePerGas !== null;
	} catch (err) {
		console.error(`Error checking ${chain}:`, err);
		return false;
	}
}

async function main() {
	const unsupported: string[] = [];

	await Promise.all(
		chains.map(async (chain) => {
			const supported = await checkEIP1559(chain.internalName);
			if (!supported) unsupported.push(chain.internalName);
		}),
	);

	console.log("Chains that do NOT support EIP-1559:");
	unsupported.forEach((c) => console.log(`- ${c}`));
}

main().catch(console.error);
