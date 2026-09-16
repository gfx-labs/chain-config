# chain configs

`yarn add @gfxlabs/oku-chains`

`go get github.com/gfx-labs/chain-config/dist/networks`

## Checking market routers

Run `yarn check:swap-targets` to verify that every address under each chain's
`marketRouters` configuration is allowed by `swapTargets` on its configured
`oku.router`, using `https://venn.lat.gfx.town/{internalName}` as the RPC. The
command prints `all good` when every router is allowed. Otherwise, it prints the
routers that are not allowed or could not be checked, grouped by chain, and
exits with a non-zero status.

## Adding a chain viem doesn't ship yet

When a chain is not exported from `viem/chains`, define it under
`src/internal-chains/` using `makeInternalChain` and then consume it
from `src/definitions/` just like any `viem/chains` import.

1. Create `src/internal-chains/<chain>.ts`:

   ```ts
   import { makeInternalChain } from "./util";

   export const mychain = makeInternalChain({
     id: 1234,
     name: "My Chain",
     nativeCurrency: { name: "Token", symbol: "TKN", decimals: 18 },
     rpcUrls: { default: { http: ["https://rpc.mychain.example"] } },
     blockExplorers: {
       default: { name: "Explorer", url: "https://explorer.example" },
     },
   });
   ```

2. Re-export it from `src/internal-chains/index.ts` (this barrel is
   maintained by hand; `barrelsby` only regenerates
   `src/definitions/`).

3. Create `src/definitions/<chain>.ts` and import from
   `../internal-chains` instead of `viem/chains`:

   ```ts
   import { mychain as chain } from "../internal-chains";
   import { makeConfig } from "../util";

   export const mychain = makeConfig({ ...chain /* oku fields */ });
   ```

4. Register it in the `MAINNET_CHAINS` array in `src/index.ts`.

When viem upstream merges the chain, swap the import in step 3 back to
`viem/chains` and delete the internal definition. No other consumer
changes are required — `makeInternalChain` returns a full viem `Chain`.
