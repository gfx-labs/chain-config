export declare const bob: Readonly<{
    blockTimeSeconds: 2;
    launchTime: 1727359200;
    transactionType: "eip1559";
    sortIndex: 20;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/bob-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {
        icecreamswap: true;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        deswap: {
            chainId: number;
        };
    };
    morpho: {};
    oracles: {
        coingecko: {
            slug: string;
            native: string;
        };
    };
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        permit2: "0xCbe9Be2C87b24b063A21369b6AB0Aa9f149c598F";
        multicall2: "0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435";
        tickLens: "0xB3309C48F8407651D918ca3Da4C45DE40109E641";
        nonfungiblePositionManager: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFT: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        positionsNFTDeployBlock: number;
        universalRouter: "0x346239972d1fa486FC4a521031BC81bFB7D6e8a4";
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006";
        wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3";
    };
    oku: {
        limitOrderRegistry: "0x447b8e40b0cda8e55f405c86bc635d02d0540ab8";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de";
    defaultToken0: "0x05D032ac25d322df992303dCa074EE7392C117b9";
    defaultToken1: "0x4200000000000000000000000000000000000006";
    tokenList: ({
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0x05D032ac25d322df992303dCa074EE7392C117b9";
    } | {
        symbol: string;
        address: "0xe75d0fb2c24a55ca1e3f96781a2bcc7bdba058f0";
    } | {
        symbol: string;
        address: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3";
    } | {
        symbol: string;
        address: "0xcc0966d8418d412c599a6421b760a847eb169a8c";
    } | {
        symbol: string;
        address: "0x541fd749419ca806a8bc7da8ac23d346f2df8b77";
    } | {
        symbol: string;
        address: "0x236f8c0a61da474db21b693fb2ea7aab0c803894";
    })[];
    stables: ("0x05D032ac25d322df992303dCa074EE7392C117b9" | "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0" | "0x6c851f501a3f24e29a8e39a29591cddf09369080" | "0x1217BfE6c773EEC6cc4A38b5Dc45B92292B6E189")[];
    watchlist: ("0x9a3b17a2e2daf54ce80f2f4b2c8440902be715de" | "0x6407fec527abad1aafdb9a3b5a2171800c21a2fe" | "0xe112389471d577f7bc45c03c7c37f70abca1cc93" | "0x566b9414c8733c14a96b8a21ca47711972f99d1a" | "0x4a1df9716147b785f3f82019f36f248ac15dc308" | "0xb091ed2491a179a9f14a34f88587cd08195e592c" | "0x508a838922a93096c1eb23fe21d8938bbd653db6" | "0x41a98efc1742a60aba6afbcb2073e64477b5333a" | "0x45bfa70e8f387da47ffe3dec447bc16f0b9a6261")[];
    internalName: "bob";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8";
        };
        nftManager: {
            address: "0x743E03cceB4af2efA3CC76838f6E8B50B63F184c";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        l2OutputOracle: {
            readonly 1: {
                readonly address: "0xdDa53E23f8a32640b04D7256e651C1db98dB11C1";
                readonly blockCreated: 4462615;
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E";
                readonly blockCreated: 4462615;
            };
        };
        gasPriceOracle: {
            readonly address: "0x420000000000000000000000000000000000000F";
        };
        l1Block: {
            readonly address: "0x4200000000000000000000000000000000000015";
        };
        l2CrossDomainMessenger: {
            readonly address: "0x4200000000000000000000000000000000000007";
        };
        l2Erc721Bridge: {
            readonly address: "0x4200000000000000000000000000000000000014";
        };
        l2StandardBridge: {
            readonly address: "0x4200000000000000000000000000000000000010";
        };
        l2ToL1MessagePasser: {
            readonly address: "0x4200000000000000000000000000000000000016";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "BOB Explorer";
            readonly url: "https://explorer.gobob.xyz";
        };
    };
    blockTime: 2000;
    ensTlds?: readonly string[] | undefined;
    id: 60808;
    name: "BOB";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "ETH";
        readonly symbol: "ETH";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.gobob.xyz"];
            readonly webSocket: readonly ["wss://rpc.gobob.xyz"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").OpStackRpcBlock, action?: string | undefined) => {
                baseFeePerGas: bigint | null;
                blobGasUsed: bigint;
                difficulty: bigint;
                excessBlobGas: bigint;
                extraData: import("viem").Hex;
                gasLimit: bigint;
                gasUsed: bigint;
                hash: `0x${string}` | null;
                logsBloom: `0x${string}` | null;
                miner: import("abitype").Address;
                mixHash: import("viem").Hash;
                nonce: `0x${string}` | null;
                number: bigint | null;
                parentBeaconBlockRoot?: `0x${string}` | undefined;
                parentHash: import("viem").Hash;
                receiptsRoot: import("viem").Hex;
                sealFields: import("viem").Hex[];
                sha3Uncles: import("viem").Hash;
                size: bigint;
                stateRoot: import("viem").Hash;
                timestamp: bigint;
                totalDifficulty: bigint | null;
                transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                transactionsRoot: import("viem").Hash;
                uncles: import("viem").Hash[];
                withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
            } & {};
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").OpStackRpcTransaction, action?: string | undefined) => ({
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("abitype").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("abitype").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: boolean;
                mint?: bigint | undefined | undefined;
                sourceHash: import("viem").Hex;
                type: "deposit";
            } | {
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                value: bigint;
                gas: bigint;
                to: import("abitype").Address | null;
                from: import("abitype").Address;
                nonce: number;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                transactionIndex: number | null;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                typeHex: import("viem").Hex | null;
                accessList?: undefined | undefined;
                authorizationList?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                chainId?: number | undefined;
                yParity?: undefined | undefined;
                type: "legacy";
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("abitype").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("abitype").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                chainId: number;
                type: "eip2930";
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("abitype").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("abitype").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                chainId: number;
                type: "eip1559";
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("abitype").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("abitype").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                blobVersionedHashes: readonly import("viem").Hex[];
                chainId: number;
                type: "eip4844";
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas: bigint;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: import("abitype").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("abitype").Address | null;
                transactionIndex: number | null;
                typeHex: import("viem").Hex | null;
                v: bigint;
                value: bigint;
                yParity: number;
                accessList: import("viem").AccessList;
                authorizationList: import("viem").SignedAuthorizationList;
                blobVersionedHashes?: undefined | undefined;
                chainId: number;
                type: "eip7702";
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                isSystemTx?: undefined | undefined;
                mint?: undefined | undefined;
                sourceHash?: undefined | undefined;
            }) & {};
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").OpStackRpcTransactionReceipt, action?: string | undefined) => {
                blobGasPrice?: bigint | undefined;
                blobGasUsed?: bigint | undefined;
                blockHash: import("viem").Hash;
                blockNumber: bigint;
                contractAddress: import("abitype").Address | null | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: import("abitype").Address;
                gasUsed: bigint;
                logs: import("viem").Log<bigint, number, false>[];
                logsBloom: import("viem").Hex;
                root?: `0x${string}` | undefined;
                status: "success" | "reverted";
                to: import("abitype").Address | null;
                transactionHash: import("viem").Hash;
                transactionIndex: number;
                type: import("viem").TransactionType;
                l1GasPrice: bigint | null;
                l1GasUsed: bigint | null;
                l1Fee: bigint | null;
                l1FeeScalar: number | null;
            } & {};
            type: "transactionReceipt";
        };
    };
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined | undefined;
    serializers: {
        readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
    };
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined | undefined;
}>;
