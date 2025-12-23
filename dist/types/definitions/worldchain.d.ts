export declare const worldchain: Readonly<{
    blockTimeSeconds: 2;
    launchTime: 0;
    transactionType: "eip1559";
    sortIndex: 15;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/worldchain-logo.svg";
    deprecated: false;
    liteChain: true;
    safeReorgDistance: 90000;
    blockAid: "";
    externalId: {
        tenderly: string;
    };
    markets: {
        zeroex: true;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
    };
    oracles: {};
    morpho: {
        deployBlock: number;
        morpho: "0xE741BC7c34758b4caE05062794E8Ae24978AF432";
        publicAllocator: "0xef9889B4e443DEd35FA0Bd060f2104Cca94e6A43";
        mmFactory11: "0xae5b0884bfff430493D6C844B9fd052Af7d79278";
        bundler3: "0x3D07BF2FFb23248034bF704F3a4786F1ffE2a448";
    };
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0x7a5028BDa40e7B173C278C5342087826455ea25a";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9";
        tickLens: "0xE61df0CaC9d85876aCE5E3037005D80943570623";
        nonfungiblePositionManager: "0xec12a9F9a09f50550686363766Cc153D03c27b5e";
        positionsNFT: "0xec12a9F9a09f50550686363766Cc153D03c27b5e";
        positionsNFTDeployBlock: number;
        universalRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006";
        usdcAddress: "0x79a02482a880bce3f13e09da970dc34db4cd24d1";
        wbtcAddress: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3";
    };
    oku: {
        router: "0x25cf2128F603754179379351B805B4F8C0B8dCA4";
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x610E319b3A3Ab56A0eD5562927D37c233774ba39";
    defaultToken0: "0x4200000000000000000000000000000000000006";
    defaultToken1: "0x79a02482a880bce3f13e09da970dc34db4cd24d1";
    tokenList: ({
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0x79a02482a880bce3f13e09da970dc34db4cd24d1";
    } | {
        symbol: string;
        address: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3";
    })[];
    stables: "0x79a02482a880bce3f13e09da970dc34db4cd24d1"[];
    watchlist: never[];
    internalName: "worldchain";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0x0000000000000000000000000000000000000000";
        };
        nftManager: {
            address: "0xec12a9F9a09f50550686363766Cc153D03c27b5e";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        disputeGameFactory: {
            readonly 1: {
                readonly address: "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea";
            };
        };
        l2OutputOracle: {
            readonly 1: {
                readonly address: "0x19A6d1E9034596196295CF148509796978343c5D";
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C";
            };
        };
        l1StandardBridge: {
            readonly 1: {
                readonly address: "0x470458C91978D2d929704489Ad730DC3E3001113";
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
            readonly name: "Worldscan";
            readonly url: "https://worldscan.org";
            readonly apiUrl: "https://api.worldscan.org/api";
        };
        readonly blockscout: {
            readonly name: "Blockscout";
            readonly url: "https://worldchain-mainnet.explorer.alchemy.com";
            readonly apiUrl: "https://worldchain-mainnet.explorer.alchemy.com/api";
        };
    };
    blockTime: 2000;
    ensTlds?: readonly string[] | undefined;
    id: 480;
    name: "World Chain";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://worldchain-mainnet.g.alchemy.com/public"];
        };
    };
    sourceId: 1;
    testnet: false;
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
                miner: import("viem").Address;
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
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
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
                to: import("viem").Address | null;
                from: import("viem").Address;
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
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
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
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
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
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
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
                from: import("viem").Address;
                gas: bigint;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                nonce: number;
                r: import("viem").Hex;
                s: import("viem").Hex;
                to: import("viem").Address | null;
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
                contractAddress: import("viem").Address | null | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: import("viem").Address;
                gasUsed: bigint;
                logs: import("viem").Log<bigint, number, false>[];
                logsBloom: import("viem").Hex;
                root?: `0x${string}` | undefined;
                status: "success" | "reverted";
                to: import("viem").Address | null;
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
    network: "worldchain";
}>;
