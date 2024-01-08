export declare const optimism: {
    readonly blockTimeSeconds: 0.5;
    readonly sortIndex: 2;
    readonly logoUrl: "https://assets.oku.trade/optimism-logo.svg";
    readonly defaultPool: "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36";
    readonly defaultToken0: "0x4200000000000000000000000000000000000042";
    readonly defaultToken1: "0x7f5c764cbc14f9669b88837ca1490cca17c31607";
    readonly tokenList: readonly [{
        readonly symbol: "USDT";
        readonly address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58";
    }, {
        readonly symbol: "DAI";
        readonly address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1";
    }, {
        readonly symbol: "USDC";
        readonly address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607";
    }, {
        readonly symbol: "WETH";
        readonly address: "0x4200000000000000000000000000000000000006";
    }, {
        readonly symbol: "OP";
        readonly address: "0x4200000000000000000000000000000000000042";
    }];
    readonly stables: readonly ["0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9", "0x8aE125E8653821E851F12A49F7765db9a9ce7384", "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "0x7f5c764cbc14f9669b88837ca1490cca17c31607", "0x0b2c639c533813f4aa9d7837caf62653d097ff85"];
    readonly watchlist: readonly ["0xb589969d38ce76d3d7aa319de7133bc9755fd840", "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36", "0xdd0c6bae8ad5998c358b823df15a2a4181da1b80", "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31", "0x0bb50d3e479e4682558fdb86f41a205e2c035ae5", "0x6168ec836d0b1f0c37381ec7ed1891a412872121", "0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2", "0xb2ac2e5a3684411254d58b1c5a542212b782114d", "0x68f5c0a2de713a54991e01858fd27a3832401849", "0x73b14a78a0d396c521f954532d43fd5ffe385216", "0x85149247691df622eaf1a8bd0cafd40bc45154a9", "0xc858a329bf053be78d6239c4a4343b8fbd21472b", "0xf1f199342687a7d78bcc16fce79fa2665ef870e1", "0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6", "0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c", "0x85c31ffa3706d1cce9d525a00f1c7d4a2911754c", "0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05", "0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0", "0xaefc1edaede6adadcdf3bb344577d45a80b19582", "0x0392B358CE4547601BEFA962680BEDE836606AE2", "0x36E42931A765022790B797963E42C5522D6B585A", "0x03A9DC118B231480058E7A3B051042EC83663794", "0x95D7D146AE40D4822C2750276B54B6EED530D374", "0x7f1c919a92bce8790a85d6360b85cf21b997a6b5", "0x1a54ae9f662b463f8d432482975c17e51518b50d", "0xff7fbdf7832ae524deda39ca402e03d92adff7a5", "0x55bc964fe3b0c8cc2d4c63d65f1be7aef9bb1a3c", "0x535541f1aa08416e69dc4d610131099fa2ae7222", "0xadb35413ec50e0afe41039eac8b930d313e94fa4", "0x730691cdac3cbd4d41fc5eb9d8abbb0cea795b94"];
    readonly internalName: "optimism";
    readonly contracts: {
        readonly limitOrder: {
            readonly address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        readonly nftManager: {
            readonly address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        readonly weth9: {
            readonly address: "0x4200000000000000000000000000000000000006";
        };
        readonly l2OutputOracle: {
            readonly 1: {
                readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
            };
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 4286263;
        };
        readonly portal: {
            readonly 1: {
                readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
            };
        };
        readonly gasPriceOracle: {
            readonly address: "0x420000000000000000000000000000000000000F";
        };
        readonly l1Block: {
            readonly address: "0x4200000000000000000000000000000000000015";
        };
        readonly l2CrossDomainMessenger: {
            readonly address: "0x4200000000000000000000000000000000000007";
        };
        readonly l2Erc721Bridge: {
            readonly address: "0x4200000000000000000000000000000000000014";
        };
        readonly l2StandardBridge: {
            readonly address: "0x4200000000000000000000000000000000000010";
        };
        readonly l2ToL1MessagePasser: {
            readonly address: "0x4200000000000000000000000000000000000016";
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Optimism Explorer";
            readonly url: "https://explorer.optimism.io";
        };
    };
    readonly id: 10;
    readonly name: "OP Mainnet";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.optimism.io"];
        };
    };
    readonly sourceId: 1;
    readonly testnet?: boolean | undefined;
    readonly formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").OpStackRpcBlockOverrides & {
                transactions: `0x${string}`[] | import("viem/chains").OpStackRpcTransaction<boolean>[];
            }>) => {
                baseFeePerGas: bigint | null;
                difficulty: bigint;
                extraData: `0x${string}`;
                gasLimit: bigint;
                gasUsed: bigint;
                hash: `0x${string}` | null;
                logsBloom: `0x${string}` | null;
                miner: `0x${string}`;
                mixHash: `0x${string}`;
                nonce: `0x${string}` | null;
                number: bigint | null;
                parentHash: `0x${string}`;
                receiptsRoot: `0x${string}`;
                sealFields: `0x${string}`[];
                sha3Uncles: `0x${string}`;
                size: bigint;
                stateRoot: `0x${string}`;
                timestamp: bigint;
                totalDifficulty: bigint | null;
                transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                transactionsRoot: `0x${string}`;
                uncles: `0x${string}`[];
                withdrawals?: import("viem").Withdrawal[] | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
            };
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionLegacy<`0x${string}`, `0x${string}`, boolean, "0x0">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionLegacy<`0x${string}`, `0x${string}`, boolean, "0x0">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionEIP2930<`0x${string}`, `0x${string}`, boolean, "0x1">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionEIP1559<`0x${string}`, `0x${string}`, boolean, "0x2">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionLegacy<`0x${string}`, `0x${string}`, boolean, "0x0">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionEIP2930<`0x${string}`, `0x${string}`, boolean, "0x1">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<import("viem").TransactionEIP1559<`0x${string}`, `0x${string}`, boolean, "0x2">, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                yParity?: `0x${string}` | undefined;
                blockHash?: `0x${string}` | null | undefined;
                blockNumber?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                hash?: `0x${string}` | undefined;
                input?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                r?: `0x${string}` | undefined;
                s?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                transactionIndex?: `0x${string}` | null | undefined;
                v?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                type?: "0x0" | "0x1" | "0x2" | "0x7e" | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            })) => {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                gasPrice: bigint;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                chainId?: number | undefined;
                yParity?: undefined;
                type: "legacy";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                gasPrice: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList?: undefined;
                chainId?: number | undefined;
                yParity: number;
                type: "deposit";
                isSystemTx?: boolean | undefined;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                chainId: number;
                type: "eip2930";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                chainId: number;
                type: "eip1559";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean | undefined;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerGas: undefined;
                maxPriorityFeePerGas: undefined;
                accessList: import("viem").AccessList;
                chainId: number;
                type: "eip2930";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                chainId: number;
                type: "eip1559";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean | undefined;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            };
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcTransactionReceipt>, import("viem/chains").OpStackRpcTransactionReceiptOverrides>) => {
                blockHash: `0x${string}`;
                blockNumber: bigint;
                contractAddress: `0x${string}` | null;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: `0x${string}`;
                gasUsed: bigint;
                logs: import("viem").Log<bigint, number, false, undefined, undefined, undefined, undefined>[];
                logsBloom: `0x${string}`;
                status: "success" | "reverted";
                to: `0x${string}` | null;
                transactionHash: `0x${string}`;
                transactionIndex: number;
                type: import("viem").TransactionType;
                l1GasPrice: bigint | null;
                l1GasUsed: bigint | null;
                l1Fee: bigint | null;
                l1FeeScalar: number | null;
            };
            type: "transactionReceipt";
        };
    };
    readonly serializers: {
        readonly transaction: (transaction: import("viem/chains").OpStackTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
