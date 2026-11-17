import type { Chain, ChainFormatters } from "viem";
import type { IChainInfo } from "../spec";

/**
 * viem >= 2.58 adds `Chain.transactionReplacement`, typed with
 * `ChainTransactionReplacement`, which viem does not export publicly. Inferred
 * chain config types would then reference viem internals (TS2742), so we
 * re-declare it as a locally exported interface.
 */
export interface ChainTransactionReplacement
	extends NonNullable<Chain["transactionReplacement"]> {}

type ChainConfigOutput<T> = {
	[K in keyof T]: K extends "transactionReplacement"
		? ChainTransactionReplacement | undefined
		: T[K];
} & { caip2Namespace: string };

export const makeConfig = <
	T extends Omit<IChainInfo<ChainFormatters>, "caip2Namespace"> & {
		caip2Namespace?: string;
	},
>(
	x: Readonly<T>,
): Readonly<ChainConfigOutput<T>> => {
	return { caip2Namespace: "eip155", ...x } as unknown as Readonly<
		ChainConfigOutput<T>
	>;
};
