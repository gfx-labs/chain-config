import { IChainInfo } from "../spec";

export const makeConfig = <T extends IChainInfo>(
  x: Readonly<T>,
): Readonly<T> => {
  return x;
};
