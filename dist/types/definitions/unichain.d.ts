export declare const unichain: Readonly<{
    name: "Unichain";
    blockTimeSeconds: 1;
    launchTime: 1750384728;
    transactionType: "eip1559";
    sortIndex: 20;
    logoUrl: "https://cms.oku.trade/cdn/public/chains/unichain-logo.svg";
    deprecated: false;
    estimatedSwapGas: 300000;
    estimatedBridgeGas: 200000;
    estimatedWrapGas: 60000;
    safeReorgDistance: 90000;
    blockAid: "unichain";
    externalId: {
        tenderly: string;
        coingecko: string;
    };
    markets: {
        icecreamswap: true;
        zeroex: true;
        kyberswap: string;
        openocean: string;
        paraswap: {
            routerContract: string;
        };
        oneinch: {
            spender: string;
        };
    };
    marketRouters: {
        enso: "0xF75584eF6673aD213a685a1B58Cc0330B8eA22Cf"[];
        fynd: ("0xa0498D0Fa4081c9a735b137a2E6A1910FaA0E0bC" | "0xCba5574597Ad00EA250Fd106DAB4Fc7461949635")[];
        icecreamswap: "0x3FFc2315A992b01dc4B3f79C8EEa1921091Ee24f"[];
        kyberswap: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"[];
        odos: "0x6409722F3a1C4486A3b1FE566cBDd5e9D946A1f3"[];
        okx: ("0x6733Eb2E75B1625F1Fe5f18aD2cB2BaBDA510d19" | "0x2e28281Cf3D58f475cebE27bec4B8a23dFC7782c" | "0xe3dAb8Bf5187F9B4E8E89FF5414D7CF71E2C82e1")[];
        openocean: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"[];
        paraswap: "0x6A000F20005980200259B80c5102003040001068"[];
        propellerswap: "0xFfA5ec2e444e4285108e4a17b82dA495c178427B"[];
        uniswap: ("0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7" | "0x73855d06DE49d0fe4A9c42636Ba96c62da12FF9C" | "0xEf740bf23aCaE26f6492B10de645D6B98dC8Eaf3")[];
        zeroex: ("0x0000000000001fF3684f28c67538d4D072C22734" | "0x972655fACb8Df3CdF40395E4262f874f81674D46")[];
    };
    bridges: {
        cctp: {
            domain: number;
            messageTransmitterV2: "0x81D40F21F12A8F0E3252Bccb954D722d4c464B64";
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
    morpho: {};
    initCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54";
    uniswap: {
        deployBlock: number;
        poolFactory: "0x1f98400000000000000000000000000000000003";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        multicall2: "0xb7610f9b733e7d45184be3a1bc966960ccc54f0b";
        tickLens: "0xd5d76fa166ab8d8ad4c9f61aaa81457b66cbe443";
        nonfungiblePositionManager: "0x943e6e07a7e8e791dafc44083e54041d743c46e9";
        positionsNFT: "0x943e6e07a7e8e791dafc44083e54041d743c46e9";
        positionsNFTDeployBlock: number;
        universalRouter: "0xFdf682F51FE81Aa4898F0AE2163d8A55c127fbC7";
        wrappedNativeAddress: "0x4200000000000000000000000000000000000006";
        wrappedNativeSymbol: string;
        wrappedNativeName: string;
        wrappedNativeDecimals: number;
        nativeCurrencyName: string;
    };
    uniswapv4: {
        deployBlock: number;
        poolManager: "0x1f98400000000000000000000000000000000004";
        positionManager: "0x4529a01c7a0410167c5740c487a8de60232617bf";
        universalRouter: "0xef740bf23acae26f6492b10de645d6b98dc8eaf3";
        permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3";
        defaultPool: "0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9";
        stateView: "0x86e8631a016f9068c3f085faf484ee3f5fdee8f2";
    };
    token: {
        wethAddress: "0x4200000000000000000000000000000000000006";
    };
    oku: {
        router: "0xb1f3a7B816B0681188F54dFa400991B93ADf00ed";
        limitOrderRegistry: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeWrappedName: string;
        };
    };
    defaultPool: "0x8927058918e3CFf6F55EfE45A58db1be1F069E49";
    defaultToken0: "0x078d782b760474a361dda0af3839290b0ef57ad6";
    defaultToken1: "0x4200000000000000000000000000000000000006";
    tokenList: ({
        symbol: string;
        address: "0x078d782b760474a361dda0af3839290b0ef57ad6";
    } | {
        symbol: string;
        address: "0x4200000000000000000000000000000000000006";
    } | {
        symbol: string;
        address: "0x8f187aa05619a017077f5308904739877ce9ea21";
    })[];
    stables: ("0x9151434b16b9763660705744891fa906f660ecc5" | "0x078d782b760474a361dda0af3839290b0ef57ad6" | "0x20cab320a855b39f724131c69424240519573f81")[];
    watchlist: ("0x8927058918e3CFf6F55EfE45A58db1be1F069E49" | "0x501174E799c8E8FC889Aeb79426d556b1916462d" | "0x1D6ae37DB0e36305019fB3d4bad2750B8784aDF9" | "0xe92c7cc875245A86fAf088fEbE4614E1E318BeF5" | "0x65081CB48d74A32e9CCfED75164b8c09972DBcF1")[];
    v4Watchlist: ("0x3258f413c7a88cda2fa8709a589d221a80f6574f63df5a5b6774485d8acc39d9" | "0x04b7dd024db64cfbe325191c818266e4776918cd9eaf021c26949a859e654b16" | "0xbd0f3a7cf4cf5f48ebe850474c8c0012fa5fe893ab811a8b8743a52b83aa8939" | "0x51f9d63dda41107d6513047f7ed18133346ce4f3f4c4faf899151d8939b3496e" | "0x05dbb214bd7b9461f9c2f6690b612629b65b9f81d7312fdd3e552d2dda85f771" | "0xb2f3bbaf23e0197ec2e6f9ab730d00aaf26a9119ecd583bbb9ef3146b4afa248")[];
    internalName: "unichain";
    nativeLogoUrl: "https://cms.oku.trade/cdn/public/natives/eth.png";
    contracts: {
        limitOrder: {
            address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        };
        nftManager: {
            address: "0x943e6e07a7e8e791dafc44083e54041d743c46e9";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0xb7610f9b733e7d45184be3a1bc966960ccc54f0b";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        disputeGameFactory: {
            readonly 1: {
                readonly address: "0x2F12d621a16e2d3285929C9996f478508951dFe4";
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0x0bd48f6B86a26D3a217d0Fa6FfE2B491B956A7a2";
            };
        };
        l1StandardBridge: {
            readonly 1: {
                readonly address: "0x81014F44b0a345033bB2b3B21C7a1A308B35fEeA";
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
            readonly name: "Uniscan";
            readonly url: "https://uniscan.xyz";
            readonly apiUrl: "https://api.uniscan.xyz/api";
        };
    };
    blockTime: 1000;
    ensTlds?: readonly string[] | undefined;
    id: 130;
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.unichain.org/"];
        };
    };
    sourceId: 1;
    supportsTransactionReplacementDetection?: boolean | undefined | undefined | undefined;
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
                blockTimestamp?: bigint | undefined;
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
                to: import("abitype").Address | null;
                from: import("abitype").Address;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                blockTimestamp?: bigint | undefined;
                hash: import("viem").Hash;
                input: import("viem").Hex;
                transactionIndex: number | null;
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
                blockTimestamp?: bigint | undefined;
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
                blockTimestamp?: bigint | undefined;
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
                blockTimestamp?: bigint | undefined;
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
                blockTimestamp?: bigint | undefined;
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
                blockTimestamp?: bigint | undefined;
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
                depositNonce?: bigint | undefined | undefined;
                depositReceiptVersion?: number | undefined | undefined;
                l1GasPrice: bigint | null;
                l1GasUsed: bigint | null;
                l1Fee: bigint | null;
                l1FeeScalar: number | null;
            } & {};
            type: "transactionReceipt";
        };
    };
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        client: import("viem").Client;
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined | undefined;
    serializers: {
        readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
    };
    verifyHash?: ((client: import("viem").Client, parameters: import("viem").VerifyHashActionParameters) => Promise<import("viem").VerifyHashActionReturnType>) | undefined | undefined;
} & {
    caip2Namespace: string;
}>;
