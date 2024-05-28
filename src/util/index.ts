import { ChainFormatters } from "viem";
import { IChainInfo } from "../spec";

export const makeConfig = <T extends IChainInfo<ChainFormatters>>(
  x: Readonly<T>,
): Readonly<T> => {
  return x;
};
