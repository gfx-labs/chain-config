export declare const blast: Readonly<{
    blockTimeSeconds: 2;
    launchTime: 1719410400;
    transactionType: "eip1559";
    sortIndex: 14;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/blast-logo.svg";
    deprecated: true;
    safeReorgDistance: 90000;
    blockAid: "blast";
    externalId: {
        zerion: string;
        tenderly: string;
    };
    morpho: {};
    markets: {
        kyberswap: string;
        openocean: string;
        zeroex: true;
        icecreamswap: true;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        rhinofi: string;
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
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
    uniswap: {
        deployBlock: number;
        poolFactory: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd";
        multicall2: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833";
        tickLens: "0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274";
        nonfungiblePositionManager: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28";
        positionsNFT: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28";
        positionsNFTDeployBlock: number;
        universalRouter: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4";
        wrappedNativeAddress: "0x4300000000000000000000000000000000000004";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x4300000000000000000000000000000000000003";
        wethAddress: "0x4300000000000000000000000000000000000004";
    };
    oku: {
        limitOrderRegistry: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4300000000000000000000000000000000000004";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F";
    defaultToken0: "0x4300000000000000000000000000000000000003";
    defaultToken1: "0x4300000000000000000000000000000000000004";
    tokenList: ({
        symbol: string;
        address: "0x4300000000000000000000000000000000000004";
    } | {
        symbol: string;
        address: "0x4300000000000000000000000000000000000003";
    })[];
    stables: "0x4300000000000000000000000000000000000003"[];
    watchlist: ("0xf5A23bDD36a56EDe75D503F6f643d5eaF25B1a8F" | "0xf52b4b69123cbcf07798ae8265642793b2e8990c" | "0x310a0a4bc2edd2f29321356d880e0906d7700c14" | "0xbb60bb410182d8e96c41dfc92e017dd79f5100bf" | "0xf52df2cde73228cc058abfe88f3801dcddf885eb" | "0x99f8a29a332eb9004f83abb1b4690de8b00dfccf")[];
    internalName: "blast";
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x0337d36A3dF76d882369E3cBF984a2EA40f6636F";
        };
        nftManager: {
            address: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28";
        };
        weth9: {
            address: "0x4300000000000000000000000000000000000004";
        };
        multicall2: {
            address: "0xc228c0343Ee4D4B3EAdF701154f1f1bD9E29d833";
        };
        multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 212929;
        };
        l2OutputOracle: {
            readonly 1: {
                readonly address: "0x826D1B0D4111Ad9146Eb8941D7Ca2B6a44215c76";
                readonly blockCreated: 19300358;
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0x0Ec68c5B10F21EFFb74f2A5C61DFe6b08C0Db6Cb";
                readonly blockCreated: 19300357;
            };
        };
        l1StandardBridge: {
            readonly 1: {
                readonly address: "0x697402166Fbf2F22E970df8a6486Ef171dbfc524";
                readonly blockCreated: 19300360;
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
            readonly name: "Blastscan";
            readonly url: "https://blastscan.io";
            readonly apiUrl: "https://api.blastscan.io/api";
        };
    };
    blockTime: 2000;
    ensTlds?: readonly string[] | undefined;
    id: 81457;
    name: "Blast";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.blast.io"];
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
