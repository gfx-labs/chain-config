import { IChainInfo } from "../defs";

export const makeConfig = <T extends IChainInfo>(
  x: Readonly<T>,
): Readonly<T> => {
  return x;
};
