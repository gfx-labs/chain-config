import type { ChainFormatters } from "viem";
import type { IChainInfo } from "../spec";
export declare const makeConfig: <T extends IChainInfo<ChainFormatters>>(x: Readonly<T>) => Readonly<T>;
