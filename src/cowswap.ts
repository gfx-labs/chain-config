import type { CowSwapMetadata } from "./spec";

// Shared CREATE2 deployments: https://docs.cow.fi/cow-protocol/reference/contracts/core
export const COWSWAP_CREATE2_DEPLOYMENT = Object.freeze({
	settlement: "0x9008D19f58AAbD9eD0D60971565AA8510560ab41",
	vaultRelayer: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110",
} as const satisfies CowSwapMetadata);
