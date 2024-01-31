import * as defs from "./definitions";
export * from "./definitions/";
export * from "./spec";

export const MAINNET_CHAINS = [
  defs.arbitrum,
  defs.base,
  defs.boba,
  defs.bsc,
  defs.filecoin,
  defs.mainnet,
  defs.moonbeam,
  defs.optimism,
  defs.polygon,
  defs.rootstock,
  defs.scroll,
  defs.polygonZkEvm,
  defs.zkSync,
  defs.manta,
] as const;
