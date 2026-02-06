export declare const base: Readonly<{
    sortIndex: 2;
    launchTime: 1707321600;
    transactionType: "eip1559";
    blockTimeSeconds: 2;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/base-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    blockAid: "base";
    defaultPool: "0xd0b53d9277642d899df5c87a3966a349a798f224";
    defaultToken0: "0x4200000000000000000000000000000000000006";
    defaultToken1: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";
    morpho: {
        deployBlock: number;
        morpho: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb";
        mmFactory10: "0xa9c3d3a366466fa809d1ae982fb2c46e5fc41101";
        mmFactory11: "0xFf62A7c278C62eD665133147129245053Bbf5918";
        bundler3: "0x6BFd8137e702540E7A42B74178A4a49Ba43920C4";
        publicAllocator: "0xA090dD1a701408Df1d4d0B85b716c87565f90467";
    };
    externalId: {
        zerion: string;
        debank: string;
        cowswap: string;
        tenderly: string;
        coingecko: string;
    };
    markets: {
        kyberswap: string;
        oneinch: {
            spender: string;
        };
        paraswap: {
            routerContract: string;
        };
        openocean: string;
        zeroex: true;
        icecreamswap: true;
        cowswap: string;
    };
    bridges: {
        chainlink: {
            atlasNetworkName: string;
            routerAddress: string;
            chainSelector: bigint;
            tokenAdminRegistry: string;
        };
        rhinofi: string;
        stargate: {
            endpointID: number;
            blockConfirmations: number;
            tokens: ({
                name: string;
                id: number;
                address: string;
            } | {
                name: string;
                type: string;
                id: number;
                address: string;
            })[];
        };
        wanbridge: {
            requiredConfirmations: number;
        };
        wormhole: {
            chain: string;
            timeToFinalize: number;
        };
        layerzero: {
            eid: number;
            tokens: {
                id: number;
                symbol: string;
                project: string;
                OFTAddress: string;
            }[];
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
    safeReorgDistance: 90000;
    uniswap: {
        deployBlock: number;
        poolFactory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD";
        multicall2: "0x41A513463248971B41C0580726CF4D425c071732";
        tickLens: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d";
        nonfungiblePositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1";
        positionsNFT: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1";
        positionsNFTDeployBlock: number;
        universalRouter: "0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4";
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    token: {
        usdcAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";
    };
    oku: {
        router: "0x822CFA9749d16Fb4B4F2B0515924cec69512893b";
        limitOrderRegistry: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    tokenList: ({
        symbol: string;
        address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca";
    } | {
        symbol: string;
        address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22";
    } | {
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";
    } | {
        symbol: string;
        address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2";
    })[];
    stables: ("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" | "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca" | "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2" | "0x50c5725949a6f0c72e6c4a641f24049a917db0cb")[];
    watchlist: ("0xd0b53d9277642d899df5c87a3966a349a798f224" | "0x4c36388be6f416a29c8d8eee81c771ce6be14b18" | "0x06959273e9a65433de71f5a452d529544e07ddd0" | "0xc9034c3e7f58003e6ae0c8438e7c8f4598d5acaa" | "0x48413707b70355597404018e7c603b261fcadf3f" | "0x4b0aaf3ebb163dd45f663b38b6d93f6093ebc2d3" | "0x0d5959a52e7004b601f0be70618d01ac3cdce976" | "0x10648ba41b8565907cfa1496765fa4d95390aa0d" | "0x22f9623817f152148b4e080e98af66fbe9c5adf8" | "0xae2ce200bdb67c472030b31f602f0756c9aeb61c" | "0xd5638bf58e2762fa40bd753490f693cbb1986709" | "0x018046b1d182f7c0978c07610e1173c8e11913fd" | "0x24e1cbd6fed006ceed9af0dce688acc7951d57a9" | "0x97a25cc2793f0ffa90e1667cf7b3c1f130737189" | "0xfcc89a1f250d76de198767d33e1ca9138a7fb54b" | "0x3bc5180d5439b500f381f9a46f15dd6608101671" | "0xa555149210075702a734968f338d5e1cbd509354" | "0x5197195ac878741b192f84ff6d7da5a85b9e634b" | "0xe745a591970e0fa981204cf525e170a2b9e4fb93" | "0x7e904aaf3439402eb21958fe090bd852d5e882cf")[];
    internalName: "base";
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        nftManager: {
            address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        limitOrder: {
            address: "0xff8b754c64e9a8473bd6e1118d0eac67f0a8ae27";
        };
        multicall2: {
            address: "0x41A513463248971B41C0580726CF4D425c071732";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        metrom: {
            address: "0xD1D3Cf05Ef211C71056f0aF1a7FD1DF989E109c3";
            blockCreated: number;
        };
        disputeGameFactory: {
            readonly 1: {
                readonly address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e";
            };
        };
        l2OutputOracle: {
            readonly 1: {
                readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                readonly blockCreated: 17482143;
            };
        };
        l1StandardBridge: {
            readonly 1: {
                readonly address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35";
                readonly blockCreated: 17482143;
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
            readonly name: "Basescan";
            readonly url: "https://basescan.org";
            readonly apiUrl: "https://api.basescan.org/api";
        };
    };
    blockTime: 2000;
    ensTlds?: readonly string[] | undefined;
    id: 8453;
    name: "Base";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.base.org"];
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
