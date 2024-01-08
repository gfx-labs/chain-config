export declare const base: {
    readonly sortIndex: 8;
    readonly blockTimeSeconds: 2;
    readonly logoUrl: "https://assets.oku.trade/base-logo.svg";
    readonly defaultPool: "0x9e37cb775a047ae99fc5a24dded834127c4180cd";
    readonly defaultToken0: "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8";
    readonly defaultToken1: "0x4200000000000000000000000000000000000006";
    readonly tokenList: readonly [{
        readonly symbol: "USDbC";
        readonly address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca";
    }, {
        readonly symbol: "cbETH";
        readonly address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22";
    }, {
        readonly symbol: "WETH";
        readonly address: "0x4200000000000000000000000000000000000006";
    }, {
        readonly symbol: "USDC";
        readonly address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";
    }];
    readonly stables: readonly ["0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"];
    readonly watchlist: readonly ["0x9e37cb775a047ae99fc5a24dded834127c4180cd", "0x4c36388be6f416a29c8d8eee81c771ce6be14b18", "0xd0b53d9277642d899df5c87a3966a349a798f224", "0x3bc5180d5439b500f381f9a46f15dd6608101671", "0x24e1cbd6fed006ceed9af0dce688acc7951d57a9", "0x10648ba41b8565907cfa1496765fa4d95390aa0d"];
    readonly internalName: "base";
    readonly contracts: {
        readonly nftManager: {
            readonly address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1";
        };
        readonly weth9: {
            readonly address: "0x4200000000000000000000000000000000000006";
        };
        readonly limitOrder: {
            readonly address: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27";
        };
        readonly l2OutputOracle: {
            readonly 1: {
                readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
            };
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 5022;
        };
        readonly portal: {
            readonly 1: {
                readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                readonly blockCreated: 17482143;
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
            readonly name: "Basescan";
            readonly url: "https://basescan.org";
        };
    };
    readonly id: 8453;
    readonly name: "Base";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.base.org"];
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
