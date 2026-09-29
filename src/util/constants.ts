import type { Address, Hash } from "viem";

// Defined here instead of imported from "viem": importing anything from viem's root makes bundlers load its whole
// client (~130 KB gzip) just to read chain definitions.
export const zeroAddress: Address =
	"0x0000000000000000000000000000000000000000";
export const zeroHash: Hash =
	"0x0000000000000000000000000000000000000000000000000000000000000000";
