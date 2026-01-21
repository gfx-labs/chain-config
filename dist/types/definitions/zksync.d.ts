export declare const zkSync: Readonly<{
    blockTimeSeconds: 2;
    sortIndex: 35;
    launchTime: 1696514400;
    transactionType: "eip1559";
    logoUrl: "https://cms.oku.trade/cdn/public/chains/zksync-logo.svg";
    deprecated: false;
    safeReorgDistance: 90000;
    blockAid: "zksync";
    morpho: {};
    externalId: {
        zerion: string;
        tenderly: string;
        coingecko: string;
    };
    markets: {
        kyberswap: string;
        oneinch: {
            spender: string;
        };
        propellerswap: string;
        openocean: string;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        rhinofi: string;
    };
    oracles: {
        cmc: {
            slug: string;
            native: string;
        };
        coingecko: {
            slug: string;
            native: string;
        };
        dexscreener: string;
    };
    initCodeHash: "0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed";
    blockExplorers: {
        default: {
            name: string;
            url: string;
            apiUrl: string;
        };
        explorer: {
            name: string;
            url: string;
            apiUrl: string;
        };
    };
    uniswap: {
        deployBlock: number;
        poolFactory: "0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422";
        permit2: "0x0000000000225e31d15943971f47ad3022f714fa";
        multicall2: "0x8bB86A31795d3e8ef12c630C288770e13eEcF038";
        tickLens: "0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89";
        nonfungiblePositionManager: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86";
        positionsNFT: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86";
        positionsNFTDeployBlock: number;
        universalRouter: "0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06";
        wrappedNativeAddress: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
        wethAddress: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
        wbtcAddress: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011";
    };
    oku: {
        limitOrderRegistry: "0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x3e3dd517fec2e70eddba2a626422a4ba286e8c38";
    defaultToken0: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
    defaultToken1: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
    tokenList: ({
        symbol: string;
        address: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
    } | {
        symbol: string;
        address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
    } | {
        symbol: string;
        address: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4";
    })[];
    stables: ("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4" | "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4" | "0x503234F203fC7Eb888EEC8513210612a43Cf6115" | "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C")[];
    watchlist: ("0xff577f0e828a878743ecc5e2632cbf65cecf17cf" | "0x50b0b9e02aa6f72a70fefbdb50bdc2f27e594135" | "0x3f618967492945c02d5222d333e903345fde741a" | "0xc99bcff6564bafc70ba1b53c53a03541f780a546" | "0x1fa900dbb20ed45d18883849c00632bca16f6610" | "0xbEEA3B382696669e0E67C08Ea9f4aaE8d528Af0F" | "0xf8C42655373A280e8800BEeE44fcC12ffC99E797" | "0xa07028B453a1f6Ac277e93f3A0eA73B4bE5c7d63" | "0x23C77A553AAc0ad009441C856c05D117c1131e3d")[];
    internalName: "zksync";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x0FD66bD1e0974e2535CB424E6675D60aC52a84Fa";
        };
        nftManager: {
            address: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86";
        };
        weth9: {
            address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91";
        };
        multicall2: {
            address: "0x8bB86A31795d3e8ef12c630C288770e13eEcF038";
        };
        multicall3: {
            address: "0xF9cda624FBC7e059355ce98a31693d299FACd963";
        };
        erc6492Verifier: {
            readonly address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C";
            readonly blockCreated: 45659388;
        };
    };
    blockTime: 200;
    ensTlds?: readonly string[] | undefined;
    id: 324;
    name: "ZKsync Era";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.era.zksync.io"];
            readonly webSocket: readonly ["wss://mainnet.era.zksync.io/ws"];
        };
    };
    sourceId?: number | undefined | undefined | undefined;
    testnet?: boolean | undefined | undefined | undefined;
    custom: {
        readonly getEip712Domain: import("viem/zksync").EIP712DomainFn<import("viem/chains").ZkSyncTransactionSerializable, import("viem/chains").ZkSyncEIP712TransactionSignable>;
    };
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").ZkSyncRpcBlock, action?: string | undefined) => {
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
                transactions: `0x${string}`[] | import("viem/chains").ZkSyncTransaction<boolean>[];
                transactionsRoot: import("viem").Hash;
                uncles: import("viem").Hash[];
                withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
                l1BatchNumber: bigint | null;
                l1BatchTimestamp: bigint | null;
            } & {};
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").ZkSyncRpcTransaction, action?: string | undefined) => ({
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                type: "priority";
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                type: "eip712" | "priority";
            }) & {};
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").ZkSyncRpcTransactionReceipt, action?: string | undefined) => {
                contractAddress: import("abitype").Address | null | undefined;
                type: import("viem/chains").ZkSyncTransactionType;
                status: "success" | "reverted";
                to: import("abitype").Address | null;
                from: import("abitype").Address;
                blockHash: import("viem").Hash;
                blockNumber: bigint;
                transactionHash: import("viem").Hash;
                transactionIndex: number;
                logsBloom: import("viem").Hex;
                blobGasUsed?: bigint | undefined;
                gasUsed: bigint;
                blobGasPrice?: bigint | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                root?: `0x${string}` | undefined;
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
                logs: import("viem/chains").ZkSyncLog[];
                l2ToL1Logs: import("viem/chains").ZkSyncL2ToL1Log[];
            } & {};
            type: "transactionReceipt";
        };
        readonly transactionRequest: {
            exclude: ("paymaster" | "gasPerPubdata" | "factoryDeps" | "paymasterInput" | "customSignature")[] | undefined;
            format: (args: import("viem/chains").ZkSyncTransactionRequest, action?: string | undefined) => ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                type?: "0x0" | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                blobs?: undefined;
                blobVersionedHashes?: undefined;
                kzg?: undefined;
                accessList?: undefined;
                sidecars?: undefined;
                authorizationList?: undefined;
                eip712Meta?: undefined | undefined;
            } | {
                data?: `0x${string}` | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                type?: "0x1" | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                blobVersionedHashes?: undefined;
                kzg?: undefined;
                sidecars?: undefined;
                authorizationList?: undefined;
                eip712Meta?: undefined | undefined;
            } | {
                data?: `0x${string}` | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                type?: "0x2" | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                blobVersionedHashes?: undefined;
                kzg?: undefined;
                sidecars?: undefined;
                authorizationList?: undefined;
                eip712Meta?: undefined | undefined;
            } | {
                type?: "0x3" | undefined;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                from?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to: `0x${string}` | null;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
                blobVersionedHashes: readonly import("viem").Hex[];
                kzg?: undefined;
                authorizationList?: undefined;
                eip712Meta?: undefined | undefined;
            } | {
                type?: "0x3" | undefined;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                from?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to: `0x${string}` | null;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                blobs: readonly import("viem").Hex[] | readonly import("viem").ByteArray[];
                blobVersionedHashes?: readonly `0x${string}`[] | undefined;
                kzg?: import("viem").Kzg | undefined;
                authorizationList?: undefined;
                eip712Meta?: undefined | undefined;
            } | {
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                type?: "0x4" | undefined;
                data?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                from?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                authorizationList?: import("viem").RpcAuthorizationList | undefined;
                blobs?: undefined;
                blobVersionedHashes?: undefined;
                kzg?: undefined;
                sidecars?: undefined;
                eip712Meta?: undefined | undefined;
            } | {
                data?: `0x${string}` | undefined;
                from?: `0x${string}` | undefined;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                type: "0xff" | "0x71";
                value?: `0x${string}` | undefined;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                eip712Meta: import("viem/chains").ZkSyncEip712Meta;
            }) & {
                paymaster: never;
                gasPerPubdata: never;
                factoryDeps: never;
                paymasterInput: never;
                customSignature: never;
            };
            type: "transactionRequest";
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
        readonly transaction: typeof import("viem/zksync").serializeTransaction;
    };
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined | undefined;
    network: "zksync-era";
}>;
