import type { ChainFormatters } from "viem";
import type { IChainInfo } from "../spec";

export const makeConfig = <
	T extends Omit<IChainInfo<ChainFormatters>, "caip2Namespace"> & {
		caip2Namespace?: string;
	},
>(
	x: Readonly<T>,
): Readonly<T & { caip2Namespace: string }> => {
	return { caip2Namespace: "eip155", ...x } as Readonly<
		T & { caip2Namespace: string }
	>;
};
