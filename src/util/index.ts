import type { Chain, ChainFormatters } from "viem";

import type { IChainInfo } from "../spec";

/**
 * viem >= 2.58 adds `Chain.transactionReplacement`, typed with
 * `ChainTransactionReplacement`, which viem does not export publicly. Inferred
 * chain config types would then reference viem internals (TS2742), so we
 * re-declare it as a locally exported interface.
 */
// An interface (not a type alias) gives TS a local name to emit; an alias
// would resolve back to viem's unexported type and reintroduce TS2742.
/* oxlint-disable typescript/no-empty-object-type */
export interface ChainTransactionReplacement extends NonNullable<
	Chain["transactionReplacement"]
> {}
/* oxlint-enable typescript/no-empty-object-type */

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
