import { ChainFormatters, getAddress, isAddress } from "viem";
import { IChainInfo } from "../spec";

export const makeConfig = <T extends IChainInfo<ChainFormatters>>(
  x: T,
): Readonly<T> => {
  const checksumAddresses = (input: any): any => {
    if (Array.isArray(input)) {
      return input.map(checksumAddresses);
    }

    if (typeof input === "object" && input !== null) {
      return Object.keys(input).reduce((result, key) => {
        const value = input[key];
        result[key] = isStringAndAddress(value)
          ? getAddress(value)
          : checksumAddresses(value);
        return result;
      }, {} as any);
    }
    return input;
  };

  const isStringAndAddress = (value: any): boolean => {
    return typeof value === "string" && isAddress(value, { strict: false });
  };

  const checksummedConfig = checksumAddresses(x);

  return Object.freeze(checksummedConfig);
};
