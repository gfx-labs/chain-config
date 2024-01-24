import { Address, Chain, ChainContract } from "viem";
declare const arbitrum: Readonly<{
    sortIndex: 1;
    blockTimeSeconds: 0.25;
    logoUrl: "https://assets.oku.trade/arbitrum-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        topNativePool: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wethAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
        wbtcAddress: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f";
        usdcAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
    };
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
            nativeQuotePools: readonly [
                {
                    readonly deployBlock: 100909;
                    readonly pool: `0x${string}`;
                }
            ];
            stablecoinList: string[];
            pools: ("0xc31e54c7a869b9fcbecc14363cf510d1c41fa443" | "0x641c00a822e8b671738d32a431a4fb6074e5c79d" | "0xcda53b1f66614552f834ceef361a8d12a0b8dad8" | "0x13398e27a21be1218b6900cbedf677571df42a48" | "0x17c14d2c404d167802b16c450d3c99f88f2c4f4d" | "0x31fa55e03bad93c7f8affdd2ec616ebfde246001" | "0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71" | "0x81c48d31365e6b526f6bbadc5c9aafd822134863" | "0xd37af656abf91c7f548fffc0133175b5e4d3d5e6" | "0x50450351517117cb58189edba6bbad6284d45902" | "0xbed2589fefae17d62a8a4fdac92fa5895cae90d2" | "0xe754841b77c874135caca3386676e886459c2d61" | "0xa961f0473da4864c5ed28e00fcc53a3aab056c1b" | "0xc82819f72a9e77e2c0c3a69b3196478f44303cf4" | "0x97bca422ec0ee4851f2110ea743c1cd0a14835a1" | "0x6387b0d5853184645cc9a77d6db133355d2eb4e4" | "0xf0428617433652c9dc6d1093a42adfbf30d29f74" | "0x7bb5e71fab18feba077b28355f20f5643ceece28" | "0xac70bd92f89e6739b3a08db9b6081a923912f73d" | "0xa62ad78825e3a55a77823f00fe0050f567c1e4ee" | "0xeaab66d034e9a5033888402b742c9ddfbf901676" | "0x2039f8c9cd32ba9cd2ea7e575d5b1abea93f7527" | "0x42161084d0672e1d3f26a9b53e653be2084ff19c" | "0xa74eceae9c7670b019e0890881598b4c398d1c01" | "0xa8328bf492ba1b77ad6381b3f7567d942b000baf" | "0xea3d27d0b8d525f28365957f50b8ba8da9a618b5" | "0xdd092f5dce127961af6ebe975978c084c935bcc8" | "0x88b553f99bf8cc6c18435c0c19d4d9b433d83645" | "0x7f580f8a02b759c350e6b8340e7c2d4b8162b6a9" | "0x02c79a7e3d8a9cb773cd5f69be00a64f48308508" | "0x458bcc519fa8c223e0c1aeb458bb85710f594329" | "0xb791ad21ba45c76629003b4a2f04c0d544406e37" | "0x267fcf6cb04eda3c997b7e49d8b7b95382b0ee7b" | "0x37516211fe11d49b84cb959631526e1f4e3fb86f" | "0x39007024e17fd49f11382b597867fda2f4a3ef15" | "0x53c6ca2597711ca7a73b6921faf4031eedf71339" | "0x7f9a20548d9482041dc33435a7fb25be7c4b98b9" | "0xcc33cad0bd4c957fa6c28fdcd72040d626854a4f" | "0x7e5e4a3f855f19cc1a45b9eff1c8b2419036ce85" | "0x2dfbbc8c9405c70ca0f81944332841663d2333b1" | "0x2ce827d2b5d248f6b29cfade1542421176eb1171" | "0xf8e5a77a4f187cfb455663b37619257565439f6a" | "0x626b9d80ebc0ded0e92ba4061fe70d3154ba6d2e" | "0xcc9397675bd4d373996175fcc03bff775c1440e7" | "0xe4d9faddd9bca5d8393bee915dc56e916ab94d27" | "0xc26064c6768215cd1c54b17a5525387a36176173" | "0xfea0e46a50156675432f9bc35d0d173ed30674ae" | "0xc021d8012985c2781ca25c84103a8681d4e16acb" | "0x3ab43147e282667ede827579bb7d5e8d1e814742" | "0xf96146159d191410f1ca3890af71005c468aaff6" | "0xd3eb92fb329c043b24aa24253b98ce14816fa05f" | "0xea263b98314369f2245c7b7e6a9f72e25cb8cded" | "0x903c3d8adf51e169599bb5adb0d20bb4c48cb44c" | "0x76d56579aa6356d860dcf7f8028d9ffd2e3c90f3" | "0x8278591bbbbe7d86e783507e7f6320ffc9c021e5" | "0x4d2fe06fd1c4368042b926d082484d2e3cc8f3f5" | "0x3cc98f9e2a1f92bd290bea5637a29d9647bd8698" | "0x58039203442c9f2a45d5536bd021a383c7f3035c" | "0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61" | "0x32b89d2442b4140c052bdba2ac6b03bad7243286" | "0x99c2ce89030d53556c8ee4b57a8c51fb93760237" | "0xc09254d1be9c3b7335021873546ba480383981d9" | "0xb6cca513eb79833c09c0a4c50ed2c897c5574cb3" | "0x2e630136c42bc72f1285743347ba77a75077aff4" | "0x90605ac59f1f19a7fe71f777ddbda83a3f25778e" | "0x54b7fe035ac57892d68cba53dbb5156ce79058d6" | "0x5b309eee32fada35e8fe5948a5d95dd86da0f855" | "0xf95de9ce6a3499c23b09265a9abcd862451453ba" | "0x1442097733acf0a2b5c4ab422f1c0186e95d52ba" | "0x9a4898365d9d07d5a20724361ecd6bf26d200873" | "0xfdad2678d73d71c9804930b338daaf192d6daa9e" | "0x46c47c8daabca3e15bf238cda365894046bafa23" | "0xc051405edef0e64ebfc501cfe1158eb0d74f3208" | "0x20990c6edd90339c1f1c25bc9c8ed7837ff4ec46" | "0x1557fdfda61f135baf1a1682eebaa086a0fcab6e" | "0x80151aae63b24a7e1837fe578fb6be026ae8abba" | "0x4e0a15e2cdc8fde28ee4250c3deec0996190703f" | "0x74c1f85e5429ea828bedb2bb90ddbe2cb1c0fb31" | "0xdbbc93072295362d38b63accd447d9c0b36a1678" | "0xb8271188967be1d66baa122b6b1d6205d5d0096f" | "0x260d6d6c3ea3daf5d53442fc375054a3b023d38b" | "0x9a4d078024ca4d757209e4f4459fe501558960fc" | "0x32a5746ba6826828716cc1a394bc33301ebc7656" | "0x90d2fb08af9e9323d7cbd364181bda1e7d3c2c2f" | "0x76cb8fee30422d9ccc72ba98acf5ea078ef65ecd" | "0x04a8cddbb62e3499c8e84ccf77192ed6292bf29d" | "0x8d76e9c2bd1adde00a3dcdc315fcb2774cb3d1d6" | "0x4a15e653799b02927cad5893fa03c257ca3be43c" | "0xa3c015bfc999779d55bb849f85cdff53b4b82b7d" | "0x852bec42f6078d4b1af4703d2863e839ea5452c3" | "0x29e02c9fc7f3b23c2bd1b00357e267728e30705e" | "0x87adc4a56252206008134ca6e807f474290c867d" | "0xfb24cc51c53909d093feac9f460513a1751961c2" | "0x43c24bd16bce6f7b49316067cf48d2c55898c6bf" | "0x3574f407410d472564a135edae1bed00e77cdd13" | "0x4b3d3333125593816dbfc9cc2ff047bddd0e859f" | "0xd4ea7475ced55eae6f581f112b0603f066c72c49" | "0x3f4b104801f8b979b5448c05eaa39e0b1910da4c" | "0xcb7a3a9e1a057744a60d8103ee66dd28a71c4d75" | "0xff961c81c4aab577c313309ac790dc6f5a936e5a")[];
        };
    };
    defaultPool: "0xcda53b1f66614552f834ceef361a8d12a0b8dad8";
    defaultToken0: "0x912ce59144191c1204e64559fe8253a0e49e6548";
    defaultToken1: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "arbitrum";
    contracts: {
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        weth9: {
            address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
        };
        multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7654707;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
        };
    };
    id: 42161;
    name: "Arbitrum One";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://arb1.arbitrum.io/rpc"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const base: Readonly<{
    sortIndex: 8;
    blockTimeSeconds: 2;
    logoUrl: "https://assets.oku.trade/base-logo.svg";
    defaultPool: "0x9e37cb775a047ae99fc5a24dded834127c4180cd";
    defaultToken0: "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8";
    defaultToken1: "0x4200000000000000000000000000000000000006";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: `0x${string}`;
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            stablecoinList: string[];
        };
    };
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "base";
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
        };
    };
    id: 8453;
    name: "Base";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://mainnet.base.org"
            ];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    formatters: {
        readonly block: {
            exclude: [
            ] | undefined;
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
            exclude: [
            ] | undefined;
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
            exclude: [
            ] | undefined;
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
    serializers: {
        readonly transaction: (transaction: import("viem/chains").OpStackTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const boba: Readonly<{
    sortIndex: 11;
    blockTimeSeconds: 300;
    logoUrl: "https://assets.oku.trade/boba-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wethAddress: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        usdcAddress: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc";
    };
    oku: {
        limitOrderRegistry: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xdF37543dae7986E48E3ce83F390A828A9F3D23BA";
    defaultToken0: "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc";
    defaultToken1: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "boba";
    contracts: {
        limitOrder: {
            address: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        };
        nftManager: {
            address: "0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71";
        };
        weth9: {
            address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        };
        multicall2: {
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "BOBAScan";
            readonly url: "https://bobascan.com";
        };
    };
    id: 288;
    name: "Boba Network";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Boba";
        readonly symbol: "BOBA";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://mainnet.boba.network"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const bsc: Readonly<{
    sortIndex: 9;
    blockTimeSeconds: 3;
    logoUrl: "https://assets.oku.trade/bsc-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";
        wbtcAddress: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c";
        wethAddress: "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    };
    oku: {
        pricing: {
            stablecoinList: string[];
            nativeQuotePools: {
                deployBlock: number;
                pool: "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869";
            }[];
            nativeWrappedToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
            pools: ("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869" | "0x5289a8dbf7029ee0b0498a84777ed3941d9acfec" | "0xc98f01bf2141e1140ef8f8cad99d4b021d10718f" | "0x7862d9b4be2156b15d54f41ee4ede2d5b0b455e4" | "0xd0a5e2818a23e2054449982fb9ff9575867cf92b" | "0xac18e282c0b89a9981520e148ddd2bf9592e440c" | "0x6bcb0ba386e9de0c29006e46b2f01f047ca1806e" | "0x38df85c7d266deb3bf679501d8a8dcaf71c3672f" | "0x9b501a7ad3087d603ceb34424b7b2a6c348ad0b7" | "0x84e47c7f2fe86f6b5efbe14fee46b8bb871b2e05" | "0xf9878a5dd55edc120fde01893ea713a4f032229c" | "0x329eeb1a58bdb3b804d1f94623c7a29a67a9b6b7" | "0x7b9f1b263a25c68cfe942953796e414eaddde1a1" | "0x17507bef4c3abc1bc715be723ee1baf571256e05" | "0x4d170f8714367c44787ae98259ce8adb72240067" | "0xc8b4b9d7fc77000fde9a17cd1fb1e9394412ab6e" | "0x87c029bbb64c39a2a6762ac0e031757d2974e275" | "0xa47f717929b7de4d131af93c39627531fe623c9a" | "0x023b6298e2f9ae728b324757599f2a36e002a55a" | "0x06396509195eb9e07c38a016694dc9ff535b128a" | "0x4ef938b633d704f29e593a8b51148d43429d0bc4" | "0xd2f21358c1549be193537b2a4c5dc7f0228ae011" | "0xe15c03d4ce70d2102d8d7a4e42af677a5ac7ee16" | "0xf624649736a106f2aa16e8027ce9aeed1bcd22f9" | "0xb873e889f28e3d2c86f2495820dd5eca329bddf4" | "0x107c1dcb81234146400c96bc3e1252b42cde7d3e" | "0x23b6888106ea1b69d0b1b48cffa58606ce63fb17" | "0x0bfebcaa1873ff6bac70b36a54860d301d434e43" | "0xbe7cc96a863bdb43e25896664cf0e3c65f7973eb" | "0xe7df69cc69f5a9425865e30625ce516269c43ad1")[];
        };
    };
    defaultPool: "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869";
    defaultToken0: "0x55d398326f99059ff775485246999027b3197955";
    defaultToken1: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
    tokenList: never[];
    stables: never[];
    watchlist: string[];
    internalName: "bsc";
    contracts: {
        nftManager: {
            address: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613";
        };
        weth9: {
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
        };
        multicall2: {
            address: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
    };
    id: 56;
    name: "BNB Smart Chain";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://rpc.ankr.com/bsc"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const filecoin: Readonly<{
    sortIndex: 10;
    name: "Filecoin";
    blockTimeSeconds: 30;
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
    logoUrl: "https://assets.oku.trade/filecoin-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0xEB466342C4d449BC9f53A865D5Cb90586f405215";
        wbtcAddress: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad";
        wethAddress: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D";
    };
    oku: {
        pricing: {
            stablecoinList: string[];
            pools: never[];
            nativeWrappedToken: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
            nativeQuotePools: undefined;
        };
        limitOrderRegistry: "0xded8791056aa39581460a005a3c400a281e24bd7";
        limitOrderRegistryDeployBlock: number;
    };
    defaultPool: "0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05";
    defaultToken0: "0xb829b68f57cc546da7e5806a929e53be32a4625d";
    defaultToken1: "0xeb466342c4d449bc9f53a865d5cb90586f405215";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "filecoin";
    contracts: {
        limitOrder: {
            address: "0xded8791056aa39581460a005a3c400a281e24bd7";
        };
        nftManager: {
            address: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee";
        };
        weth9: {
            address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
        };
        multicall2: {
            address: "0x732f5baac411e427d130fed03c2e82a3e0d64d35";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    id: 314;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "filecoin";
        readonly symbol: "FIL";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://api.node.glif.io/rpc/v1"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const mainnet: Readonly<{
    sortIndex: 0;
    blockTimeSeconds: 15;
    logoUrl: "https://assets.oku.trade/ethereum-logo.webp";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        topNativePool: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        wbtcAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    };
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
            nativeQuotePools: {
                pool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
                deployBlock: number;
            }[];
            stablecoinList: `0x${string}`[];
            pools: `0x${string}`[];
        };
    };
    defaultPool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
    defaultToken0: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    defaultToken1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "ethereum";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        weth9: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
        };
        multicall2: {
            address: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        ensUniversalResolver: {
            readonly address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62";
            readonly blockCreated: 16966585;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
        };
    };
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://cloudflare-eth.com"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const moonbeam: Readonly<{
    sortIndex: 12;
    blockTimeSeconds: 30;
    logoUrl: "https://assets.oku.trade/moonbeam-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wethAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
        usdcAddress: "0x931715FEE2d06333043d11F658C8CE934aC61D0c";
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0xacc15dc74880c9944775448304b263d191c6077f";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xba66370d96a9d61afa66283900b78c1f6ed02782";
    defaultToken0: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
    defaultToken1: "0xacc15dc74880c9944775448304b263d191c6077f";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "moonbeam";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0x9036d0dcb5a059c9371b05d508f0072df773854e";
        };
        weth9: {
            address: "0xacc15dc74880c9944775448304b263d191c6077f";
        };
        multicall2: {
            address: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Moonscan";
            readonly url: "https://moonscan.io";
        };
    };
    id: 1284;
    name: "Moonbeam";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "GLMR";
        readonly symbol: "GLMR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://moonbeam.public.blastapi.io"
            ];
            readonly webSocket: readonly [
                "wss://moonbeam.public.blastapi.io"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const optimism: Readonly<{
    blockTimeSeconds: 0.5;
    sortIndex: 2;
    logoUrl: "https://assets.oku.trade/optimism-logo.svg";
    oku: {
        limitOrderRegistryDeployBlock: number;
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeQuotePools: {
                deployBlock: number;
                pool: "0x85149247691df622eaf1a8bd0cafd40bc45154a9";
            }[];
            stablecoinList: string[];
            pools: ("0x85149247691df622eaf1a8bd0cafd40bc45154a9" | "0xc858a329bf053be78d6239c4a4343b8fbd21472b" | "0x1d751bc1a723accf1942122ca9aa82d49d08d2ae" | "0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0" | "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36" | "0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6" | "0xb589969d38ce76d3d7aa319de7133bc9755fd840" | "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31" | "0x252cbdff917169775be2b552ec9f6781af95e7f6" | "0xf1f199342687a7d78bcc16fce79fa2665ef870e1" | "0xadb35413ec50e0afe41039eac8b930d313e94fa4" | "0x100bdc1431a9b09c61c0efc5776814285f8fb248" | "0x6432037739ccd0201987472604826097b55813e9" | "0x9595edbefc82535a02312a4c42cc91e6e9df8f67" | "0x9438a9d1bdeece02ed4431ac59613a128201e0b9" | "0x8323d063b1d12acce4742f1e3ed9bc46d71f4222" | "0xf3f3433c3a97f70349c138ada81da4d3554982db" | "0xb2ac2e5a3684411254d58b1c5a542212b782114d" | "0x2e80d5a7b3c613d854ee43243ff09808108561eb" | "0x8eda97883a1bc02cf68c6b9fb996e06ed8fdb3e5" | "0x98d9ae198f2018503791d1caf23c6807c135bb6b" | "0x827f0a2a4376bc26729f398b865f424dc8456841" | "0x6168ec836d0b1f0c37381ec7ed1891a412872121" | "0xdd0c6bae8ad5998c358b823df15a2a4181da1b80" | "0x6f32061f59a21086c334d0d45f804089ce374aaf" | "0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2" | "0xf74fca1611a695a81fc1f7052aa5ff2549558ab3" | "0x702b283b06fa4e49ef155597945f2ba4b717e19c" | "0x7b17fc02d85cb5589ec1d1c3db507dc557590c79" | "0x766854992bd5363ebeeff0113f5a5795796befab" | "0xae2d9288be0587c2097ec46db7686ac2481f896e" | "0x793aca81b02f9e8e073047d2347da0c16e5ecd92" | "0xa1658249bcc69b0ab491cdc0449c0b0ea796de8d" | "0xa7bb0d95c6ba0ed0aca70c503b34bc7108589a47" | "0xf44acaa38be5e965c5ddf374e7a2ba270e580684" | "0x1a172713bdf4b9c846028e43081e73ca90a399dd" | "0xc50958e82c36b8d6d0baf555f90b76b0a28ceeeb" | "0xf046d8b7365d8abe5a8f8301c669b4b5284fc21d" | "0x84eb2c5c23999b3ddc87be10f15ccec5d22c7d97" | "0x95d7d146ae40d4822c2750276b54b6eed530d374" | "0x815ae7bf44dda74ed9274377ed711efc8b567911" | "0x0843e0f56b9e7fdc4fb95fabba22a01ef4088f41" | "0x25e412992634b93a025e2a538c53222a8c62e2d6" | "0xbd93951d2e9ec615f9940887559b4317032d98d0" | "0xc62d5ff62276eeda3c2d24f6b7e384355ec52a5e" | "0xba335a3b1f2fb04e66916c664459b7f74378ec32" | "0xd9b160620447d9a9a6ca90c0450f5490e5219257" | "0x2df05e4cdbd758cb1a99a34bb0d767e040d6b078" | "0x94ad9a19126ebb02dda874237e5820fd4943f5de" | "0x64750f4098a7f98352f7cd5797f421ceb8d94f64" | "0xb11d715bd9e3fd4fd07401dc551d516780c12449" | "0xaee0a6d42d10491d36e6a1b922741933609ac1be" | "0xcf2aebb91fec906f51fc11cd57035a09d8b16965" | "0xc0f184c6c4832b3ed861bd5b05722792ffa64abd" | "0x3154dc51bd6bb55213bd0e676df44cc3327ce75c" | "0xd9660a959e00fec8b256ef6bf71c0f545585eba0" | "0xc22662b904d98e45f89e030201355c3e372cc819" | "0x652a810c603faef61ff5d873e52ad7f1d70d6014" | "0x85841dab003d284d7aac51fc77cfa0d37d912825" | "0x2024c394741a5301e89a375b7bf52f865bc166fd" | "0x4983691a26d55eb9e18d2e12e3b770cdd3f76a5f" | "0xe1a0c25464a9d3b1426b552416bf2a02865ed461" | "0xba9bbd07331f0185701b61be6379ac49d50ae327" | "0xd6101cda1a51924e249132cbcae82bfcd0a91fbc" | "0xba213008fe93b3591e439f3b2aa51b3e4a2bd7c7" | "0x6408b4846dbe71e5b4b095b4fdee5ca58447f1c8" | "0x22bbdcfc90cabc569c22bf908877b7cc3e2c4684" | "0xeb1817b708415f4f78c5f0c99cbbd6a3a899fa6d" | "0x2582886f65ea71ecd3cffd12089c55fb9c75e9db" | "0x6ecb7d18abda6ae794035490a4decc329d0f23bb" | "0x4ad43a229a55d9453ad1ddd9aea986d58faab8d4" | "0x90b9504cff7af9d787799dc93ded9aed0a1996d7" | "0x7628784d2c5d47fcd5479ba812343b1aabad6484" | "0x44b17031465c53706af85c05423d26e9cfa13a1b" | "0xc366ec578789d5a802ecb966f69bbf8441b7e112" | "0xb018e5955c561a8af0f49faf60d587b7f8f1687b" | "0x2459023a29d3b07711b8b916d86aa7e8a14747af" | "0xe7ee03b72a89f87d161425e42548bd5492d06679" | "0xe588add6432dc1a9c717d37dbce858a6ded48656" | "0xbd8ac2a59551684b801885e4ea1c746c3fa92a34" | "0x1682dcd12f6e291de6874dcb0a89ee50465f43bd" | "0xac721d2e27ca148f505b5106fc95e594c78ace5b" | "0x3d44cc727fe2f603e4929be164c70edb3b498b5f" | "0xe229ce1cdbea9983362ca29f0f0b2c70bb2dacdf" | "0xea6018f42f816201c933bbb7a6027725937a0895" | "0x26e7fed14a97e0c482a302237971cf1b04f6d3e9" | "0xd1788a1109bd36ab296ac104a67bf8dc48673948" | "0x61775175905a0f3f7705a6f010d918b6acda6e00" | "0xcc8a87a17208fe2e96168ca3fa9412a968c5b092" | "0xfe4860375d8186770224534b70241e9a197aa4c7" | "0x514810e7db31cf118e6bacb3992bbe37b8d2b9b3" | "0xca93e9077c48cc7ab817390edd32f85ec6892797" | "0xc6f5e7e95e9bd69e57bbcdc3791332de9c89c8f4" | "0x610c0e8963449d62bae223ed6af042c21241d54d" | "0x461cd8b232e24ee5acc51dc43c186ec58f86be47" | "0xd4fed0bab141441d56521271d0a5747fd42062be" | "0x0bb50d3e479e4682558fdb86f41a205e2c035ae5" | "0x83de573f16e7cf978d3f4bc61f080ac392825fb3" | "0x2b5861fd7fd65b57de0009ec0d9045ba49aa5416" | "0x40a6d70506ba0e5e361e3913ca79a3282b3031b0")[];
        };
    };
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        topNativePool: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0x0b2c639c533813f4aa9d7837caf62653d097ff85";
        wethAddress: "0x4200000000000000000000000000000000000006";
        wbtcAddress: "0x68f180fcce6836688e9084f035309e29bf0a2095";
    };
    defaultPool: "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36";
    defaultToken0: "0x4200000000000000000000000000000000000042";
    defaultToken1: "0x7f5c764cbc14f9669b88837ca1490cca17c31607";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "optimism";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0x266557a864680a1401a3506c0eb72934bd13bf59";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        l2OutputOracle: {
            readonly 1: {
                readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
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
            readonly name: "Optimism Explorer";
            readonly url: "https://explorer.optimism.io";
        };
    };
    id: 10;
    name: "OP Mainnet";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://mainnet.optimism.io"
            ];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    formatters: {
        readonly block: {
            exclude: [
            ] | undefined;
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
            exclude: [
            ] | undefined;
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
            exclude: [
            ] | undefined;
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
    serializers: {
        readonly transaction: (transaction: import("viem/chains").OpStackTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const polygon: Readonly<{
    blockTimeSeconds: 2;
    sortIndex: 3;
    logoUrl: "https://assets.oku.trade/polygon-logo.webp";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
        topNativePool: "0xa374094527e1673a86de625aa59517c5de346d32";
    };
    token: {
        wbtcAddress: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6";
        usdcAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
        wethAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
    };
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
            nativeQuotePools: {
                deployBlock: number;
                pool: "0xa374094527e1673a86de625aa59517c5de346d32";
            }[];
            stablecoinList: string[];
            pools: `0x${string}`[];
        };
    };
    defaultPool: "0xa374094527e1673a86de625aa59517c5de346d32";
    defaultToken0: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
    defaultToken1: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "polygon";
    contracts: {
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        weth9: {
            address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
        };
        multicall2: {
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://polygonscan.com";
        };
    };
    id: 137;
    name: "Polygon";
    nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://polygon-rpc.com"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const rootstock: Readonly<{
    sortIndex: 7;
    name: "Rootstock";
    blockTimeSeconds: 33;
    logoUrl: "https://assets.oku.trade/rootstock-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0x3A15461d8AE0f0Fb5fA2629e9dA7D66A794a6E37";
    };
    oku: {
        limitOrderRegistry: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xd2ffe51ab4e622a411abbe634832a19d919e9c55";
    defaultToken0: "0x542fda317318ebf1d3deaf76e0b632741a7e677d";
    defaultToken1: "0xef213441a85df4d7acbdae0cf78004e1e486bb96";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    blockExplorers: {
        default: {
            readonly name: "Blockscout";
            readonly url: "https://rootstock.blockscout.com";
        };
        blockscout: {
            readonly name: "Blockscout";
            readonly url: "https://rootstock.blockscout.com";
        };
    };
    internalName: "rootstock";
    contracts: {
        limitOrder: {
            address: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        };
        nftManager: {
            address: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1";
        };
        weth9: {
            address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
        };
        Multicall2: {
            address: `0x${string}`;
        };
        Multicall3: {
            address: `0x${string}`;
        };
        multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 4249540;
        };
    };
    id: 30;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Rootstock Bitcoin";
        readonly symbol: "RBTC";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://public-node.rsk.co"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    network: "rootstock";
}>;
declare const scroll: Readonly<{
    sortIndex: 5;
    blockTimeSeconds: 3;
    logoUrl: "https://assets.oku.trade/scroll-logo.png";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        positionsNFT: `0x${string}`;
    };
    token: {
        usdcAddress: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
        wethAddress: "0x5300000000000000000000000000000000000004";
        wbtcAddress: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1";
    };
    oku: {
        limitOrderRegistry: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x5300000000000000000000000000000000000004";
            stablecoinList: string[];
        };
    };
    defaultPool: "0x813df550a32d4a9d42010d057386429ad2328ed9";
    defaultToken0: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    defaultToken1: "0x5300000000000000000000000000000000000004";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "scroll";
    contracts: {
        limitOrder: {
            address: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        };
        nftManager: {
            address: "0xB39002E4033b162fAc607fc3471E205FA2aE5967";
        };
        weth9: {
            address: "0x5300000000000000000000000000000000000004";
        };
        Multicall2: {
            address: `0x${string}`;
        };
        Multicall3: {
            address: `0x${string}`;
        };
        multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Scrollscan";
            readonly url: "https://scrollscan.com";
        };
    };
    id: 534352;
    name: "Scroll";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://rpc.scroll.io"
            ];
            readonly webSocket: readonly [
                "wss://wss-rpc.scroll.io/ws"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const polygonZkEvm: Readonly<{
    sortIndex: 6;
    blockTimeSeconds: 7;
    logoUrl: "https://assets.oku.trade/zkevm-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wbtcAddress: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1";
        wethAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
        usdcAddress: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    };
    oku: {
        limitOrderRegistry: `0x${string}`;
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd";
    defaultToken0: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    defaultToken1: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "polygon-zkevm";
    contracts: {
        limitOrder: {
            address: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723";
        };
        nftManager: {
            address: "0xf0d61aeda516cca1ff20be65cfb0213be688a24f";
        };
        weth9: {
            address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
        };
        multicall2: {
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://zkevm.polygonscan.com";
        };
    };
    id: 1101;
    name: "Polygon zkEVM";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://zkevm-rpc.com"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>;
declare const zkSync: Readonly<{
    blockTimeSeconds: 2;
    sortIndex: 4;
    logoUrl: "https://assets.oku.trade/zksync-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
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
            stablecoinList: string[];
        };
    };
    defaultPool: "0xff577f0e828a878743ecc5e2632cbf65cecf17cf";
    defaultToken0: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
    defaultToken1: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "zksync";
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
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
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    id: 324;
    name: "zkSync Era";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly [
                "https://mainnet.era.zksync.io"
            ];
            readonly webSocket: readonly [
                "wss://mainnet.era.zksync.io/ws"
            ];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters: {
        readonly block: {
            exclude: [
            ] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/_types/chains/zksync/types").ZkSyncRpcBlockOverrides & {
                transactions: `0x${string}`[] | import("viem/_types/chains/zksync/types").ZkSyncRpcTransaction<boolean>[];
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
                transactions: `0x${string}`[] | import("viem/_types/chains/zksync/types").ZkSyncTransaction<boolean>[];
                transactionsRoot: `0x${string}`;
                uncles: `0x${string}`[];
                withdrawals?: import("viem").Withdrawal[] | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
                l1BatchNumber: bigint | null;
                l1BatchTimestamp: bigint | null;
            };
            type: "block";
        };
        readonly transaction: {
            exclude: [
            ] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcTransaction<boolean>>, import("viem/_types/chains/zksync/types").ZkSyncRpcTransaction<boolean>>) => {
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "eip712" | "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "eip712" | "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "eip712" | "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            };
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [
            ] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcTransactionReceipt>, import("viem/_types/chains/zksync/types").ZkSyncRpcTransactionReceiptOverrides>) => {
                blockHash: `0x${string}`;
                blockNumber: bigint;
                contractAddress: `0x${string}` | null;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: `0x${string}`;
                gasUsed: bigint;
                logs: import("viem/_types/chains/zksync/types").ZkSyncLog<bigint, number, boolean, undefined, undefined, undefined, undefined>[];
                logsBloom: `0x${string}`;
                status: "success" | "reverted";
                to: `0x${string}` | null;
                transactionHash: `0x${string}`;
                transactionIndex: number;
                type: import("viem/_types/chains/zksync/types").ZkSyncTransactionType;
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
                l2ToL1Logs: import("viem/_types/chains/zksync/types").ZkSyncL2ToL1Log[];
            };
            type: "transactionReceipt";
        };
        readonly transactionRequest: {
            exclude: ("gasPerPubdata" | "customSignature" | "paymaster" | "paymasterInput" | "factoryDeps")[] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").TransactionRequest<bigint, number>>, import("viem/_types/chains/zksync/types").ZkSyncTransactionRequest>) => ({
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/_types/chains/zksync/types").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/_types/chains/zksync/types").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/_types/chains/zksync/types").ZkSyncEip712Meta;
            }) & {
                customSignature: never;
                factoryDeps: never;
                gasPerPubdata: never;
                paymaster: never;
                paymasterInput: never;
            };
            type: "transactionRequest";
        };
    };
    serializers: {
        readonly transaction: (transaction: import("viem/_types/chains/zksync/types").ZkSyncTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
    network: "zksync-era";
}>;
interface UniswapMetadata {
    deployBlock?: number;
    poolFactory?: Address;
    multicall2?: Address;
    proxyAdmin?: Address;
    tickLens?: Address;
    quoter?: Address;
    swapRouter?: Address;
    swapRouter02?: Address;
    NFTDescriptor?: Address;
    nonfungibleTokenPositionDescriptor?: Address;
    transparentUpgradeableProxy?: Address;
    nonfungiblePositionManager?: Address;
    v3Migrator?: Address;
    uniswapV3Staker?: Address;
    positionsNFT?: Address;
    topNativePool?: Address;
    positionsNFTDeployBlock?: number;
}
interface OkuPricingMetadata {
    nativeWrappedToken?: Address;
    nativeQuotePools?: ReadonlyArray<{
        deployBlock: number;
        pool: Address;
    }>;
    pools?: ReadonlyArray<Address>;
    stablecoinList?: ReadonlyArray<string>;
}
interface OkuMetadata {
    limitOrderRegistry?: Address;
    limitOrderRegistryDeployBlock?: number;
    pricing?: OkuPricingMetadata;
}
interface TokenMetadata {
    wethAddress?: Address;
    wbtcAddress?: Address;
    usdcAddress?: Address;
}
interface IChainInfo extends Chain {
    logoUrl: string;
    sortIndex: number;
    defaultPool: string;
    internalName: string;
    defaultToken0: string;
    defaultToken1: string;
    tokenList: ReadonlyArray<{
        symbol: string;
        address: string;
    }>;
    stables: ReadonlyArray<string>;
    watchlist: ReadonlyArray<string>;
    blockTimeSeconds: number;
    uniswap: UniswapMetadata;
    token: TokenMetadata;
    oku: OkuMetadata;
    contracts: {
        [key: string]: ChainContract | {
            [chainId: number]: ChainContract;
        };
    } & {
        ensRegistry?: ChainContract;
        ensUniversalResolver?: ChainContract;
        multicall2?: ChainContract;
        multicall3?: ChainContract;
        nftManager: ChainContract;
        limitOrder?: ChainContract;
        weth9: ChainContract;
    };
}
declare const MAINNET_CHAINS: readonly [Readonly<{
    sortIndex: 1;
    blockTimeSeconds: 0.25;
    logoUrl: "https://assets.oku.trade/arbitrum-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        topNativePool: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wethAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
        wbtcAddress: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f";
        usdcAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
    };
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
            nativeQuotePools: readonly [{
                readonly deployBlock: 100909;
                readonly pool: `0x${string}`;
            }];
            stablecoinList: string[];
            pools: ("0xc31e54c7a869b9fcbecc14363cf510d1c41fa443" | "0x641c00a822e8b671738d32a431a4fb6074e5c79d" | "0xcda53b1f66614552f834ceef361a8d12a0b8dad8" | "0x13398e27a21be1218b6900cbedf677571df42a48" | "0x17c14d2c404d167802b16c450d3c99f88f2c4f4d" | "0x31fa55e03bad93c7f8affdd2ec616ebfde246001" | "0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71" | "0x81c48d31365e6b526f6bbadc5c9aafd822134863" | "0xd37af656abf91c7f548fffc0133175b5e4d3d5e6" | "0x50450351517117cb58189edba6bbad6284d45902" | "0xbed2589fefae17d62a8a4fdac92fa5895cae90d2" | "0xe754841b77c874135caca3386676e886459c2d61" | "0xa961f0473da4864c5ed28e00fcc53a3aab056c1b" | "0xc82819f72a9e77e2c0c3a69b3196478f44303cf4" | "0x97bca422ec0ee4851f2110ea743c1cd0a14835a1" | "0x6387b0d5853184645cc9a77d6db133355d2eb4e4" | "0xf0428617433652c9dc6d1093a42adfbf30d29f74" | "0x7bb5e71fab18feba077b28355f20f5643ceece28" | "0xac70bd92f89e6739b3a08db9b6081a923912f73d" | "0xa62ad78825e3a55a77823f00fe0050f567c1e4ee" | "0xeaab66d034e9a5033888402b742c9ddfbf901676" | "0x2039f8c9cd32ba9cd2ea7e575d5b1abea93f7527" | "0x42161084d0672e1d3f26a9b53e653be2084ff19c" | "0xa74eceae9c7670b019e0890881598b4c398d1c01" | "0xa8328bf492ba1b77ad6381b3f7567d942b000baf" | "0xea3d27d0b8d525f28365957f50b8ba8da9a618b5" | "0xdd092f5dce127961af6ebe975978c084c935bcc8" | "0x88b553f99bf8cc6c18435c0c19d4d9b433d83645" | "0x7f580f8a02b759c350e6b8340e7c2d4b8162b6a9" | "0x02c79a7e3d8a9cb773cd5f69be00a64f48308508" | "0x458bcc519fa8c223e0c1aeb458bb85710f594329" | "0xb791ad21ba45c76629003b4a2f04c0d544406e37" | "0x267fcf6cb04eda3c997b7e49d8b7b95382b0ee7b" | "0x37516211fe11d49b84cb959631526e1f4e3fb86f" | "0x39007024e17fd49f11382b597867fda2f4a3ef15" | "0x53c6ca2597711ca7a73b6921faf4031eedf71339" | "0x7f9a20548d9482041dc33435a7fb25be7c4b98b9" | "0xcc33cad0bd4c957fa6c28fdcd72040d626854a4f" | "0x7e5e4a3f855f19cc1a45b9eff1c8b2419036ce85" | "0x2dfbbc8c9405c70ca0f81944332841663d2333b1" | "0x2ce827d2b5d248f6b29cfade1542421176eb1171" | "0xf8e5a77a4f187cfb455663b37619257565439f6a" | "0x626b9d80ebc0ded0e92ba4061fe70d3154ba6d2e" | "0xcc9397675bd4d373996175fcc03bff775c1440e7" | "0xe4d9faddd9bca5d8393bee915dc56e916ab94d27" | "0xc26064c6768215cd1c54b17a5525387a36176173" | "0xfea0e46a50156675432f9bc35d0d173ed30674ae" | "0xc021d8012985c2781ca25c84103a8681d4e16acb" | "0x3ab43147e282667ede827579bb7d5e8d1e814742" | "0xf96146159d191410f1ca3890af71005c468aaff6" | "0xd3eb92fb329c043b24aa24253b98ce14816fa05f" | "0xea263b98314369f2245c7b7e6a9f72e25cb8cded" | "0x903c3d8adf51e169599bb5adb0d20bb4c48cb44c" | "0x76d56579aa6356d860dcf7f8028d9ffd2e3c90f3" | "0x8278591bbbbe7d86e783507e7f6320ffc9c021e5" | "0x4d2fe06fd1c4368042b926d082484d2e3cc8f3f5" | "0x3cc98f9e2a1f92bd290bea5637a29d9647bd8698" | "0x58039203442c9f2a45d5536bd021a383c7f3035c" | "0x99db8dba7b30ab3c6447c4388d81dcc27c5a8b61" | "0x32b89d2442b4140c052bdba2ac6b03bad7243286" | "0x99c2ce89030d53556c8ee4b57a8c51fb93760237" | "0xc09254d1be9c3b7335021873546ba480383981d9" | "0xb6cca513eb79833c09c0a4c50ed2c897c5574cb3" | "0x2e630136c42bc72f1285743347ba77a75077aff4" | "0x90605ac59f1f19a7fe71f777ddbda83a3f25778e" | "0x54b7fe035ac57892d68cba53dbb5156ce79058d6" | "0x5b309eee32fada35e8fe5948a5d95dd86da0f855" | "0xf95de9ce6a3499c23b09265a9abcd862451453ba" | "0x1442097733acf0a2b5c4ab422f1c0186e95d52ba" | "0x9a4898365d9d07d5a20724361ecd6bf26d200873" | "0xfdad2678d73d71c9804930b338daaf192d6daa9e" | "0x46c47c8daabca3e15bf238cda365894046bafa23" | "0xc051405edef0e64ebfc501cfe1158eb0d74f3208" | "0x20990c6edd90339c1f1c25bc9c8ed7837ff4ec46" | "0x1557fdfda61f135baf1a1682eebaa086a0fcab6e" | "0x80151aae63b24a7e1837fe578fb6be026ae8abba" | "0x4e0a15e2cdc8fde28ee4250c3deec0996190703f" | "0x74c1f85e5429ea828bedb2bb90ddbe2cb1c0fb31" | "0xdbbc93072295362d38b63accd447d9c0b36a1678" | "0xb8271188967be1d66baa122b6b1d6205d5d0096f" | "0x260d6d6c3ea3daf5d53442fc375054a3b023d38b" | "0x9a4d078024ca4d757209e4f4459fe501558960fc" | "0x32a5746ba6826828716cc1a394bc33301ebc7656" | "0x90d2fb08af9e9323d7cbd364181bda1e7d3c2c2f" | "0x76cb8fee30422d9ccc72ba98acf5ea078ef65ecd" | "0x04a8cddbb62e3499c8e84ccf77192ed6292bf29d" | "0x8d76e9c2bd1adde00a3dcdc315fcb2774cb3d1d6" | "0x4a15e653799b02927cad5893fa03c257ca3be43c" | "0xa3c015bfc999779d55bb849f85cdff53b4b82b7d" | "0x852bec42f6078d4b1af4703d2863e839ea5452c3" | "0x29e02c9fc7f3b23c2bd1b00357e267728e30705e" | "0x87adc4a56252206008134ca6e807f474290c867d" | "0xfb24cc51c53909d093feac9f460513a1751961c2" | "0x43c24bd16bce6f7b49316067cf48d2c55898c6bf" | "0x3574f407410d472564a135edae1bed00e77cdd13" | "0x4b3d3333125593816dbfc9cc2ff047bddd0e859f" | "0xd4ea7475ced55eae6f581f112b0603f066c72c49" | "0x3f4b104801f8b979b5448c05eaa39e0b1910da4c" | "0xcb7a3a9e1a057744a60d8103ee66dd28a71c4d75" | "0xff961c81c4aab577c313309ac790dc6f5a936e5a")[];
        };
    };
    defaultPool: "0xcda53b1f66614552f834ceef361a8d12a0b8dad8";
    defaultToken0: "0x912ce59144191c1204e64559fe8253a0e49e6548";
    defaultToken1: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "arbitrum";
    contracts: {
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        weth9: {
            address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
        };
        multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7654707;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
        };
    };
    id: 42161;
    name: "Arbitrum One";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 8;
    blockTimeSeconds: 2;
    logoUrl: "https://assets.oku.trade/base-logo.svg";
    defaultPool: "0x9e37cb775a047ae99fc5a24dded834127c4180cd";
    defaultToken0: "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8";
    defaultToken1: "0x4200000000000000000000000000000000000006";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: `0x${string}`;
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            stablecoinList: string[];
        };
    };
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "base";
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
        };
    };
    id: 8453;
    name: "Base";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.base.org"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    formatters: {
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
    serializers: {
        readonly transaction: (transaction: import("viem/chains").OpStackTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 11;
    blockTimeSeconds: 300;
    logoUrl: "https://assets.oku.trade/boba-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wethAddress: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        usdcAddress: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc";
    };
    oku: {
        limitOrderRegistry: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xdF37543dae7986E48E3ce83F390A828A9F3D23BA";
    defaultToken0: "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc";
    defaultToken1: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "boba";
    contracts: {
        limitOrder: {
            address: "0xfefb60591cffc694c0137983a9091d64af8ecbac";
        };
        nftManager: {
            address: "0x0bfc9ac7e52f38eaa6dc8d10942478f695c6cf71";
        };
        weth9: {
            address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000";
        };
        multicall2: {
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "BOBAScan";
            readonly url: "https://bobascan.com";
        };
    };
    id: 288;
    name: "Boba Network";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Boba";
        readonly symbol: "BOBA";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.boba.network"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 9;
    blockTimeSeconds: 3;
    logoUrl: "https://assets.oku.trade/bsc-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";
        wbtcAddress: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c";
        wethAddress: "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    };
    oku: {
        pricing: {
            stablecoinList: string[];
            nativeQuotePools: {
                deployBlock: number;
                pool: "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869";
            }[];
            nativeWrappedToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
            pools: ("0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869" | "0x5289a8dbf7029ee0b0498a84777ed3941d9acfec" | "0xc98f01bf2141e1140ef8f8cad99d4b021d10718f" | "0x7862d9b4be2156b15d54f41ee4ede2d5b0b455e4" | "0xd0a5e2818a23e2054449982fb9ff9575867cf92b" | "0xac18e282c0b89a9981520e148ddd2bf9592e440c" | "0x6bcb0ba386e9de0c29006e46b2f01f047ca1806e" | "0x38df85c7d266deb3bf679501d8a8dcaf71c3672f" | "0x9b501a7ad3087d603ceb34424b7b2a6c348ad0b7" | "0x84e47c7f2fe86f6b5efbe14fee46b8bb871b2e05" | "0xf9878a5dd55edc120fde01893ea713a4f032229c" | "0x329eeb1a58bdb3b804d1f94623c7a29a67a9b6b7" | "0x7b9f1b263a25c68cfe942953796e414eaddde1a1" | "0x17507bef4c3abc1bc715be723ee1baf571256e05" | "0x4d170f8714367c44787ae98259ce8adb72240067" | "0xc8b4b9d7fc77000fde9a17cd1fb1e9394412ab6e" | "0x87c029bbb64c39a2a6762ac0e031757d2974e275" | "0xa47f717929b7de4d131af93c39627531fe623c9a" | "0x023b6298e2f9ae728b324757599f2a36e002a55a" | "0x06396509195eb9e07c38a016694dc9ff535b128a" | "0x4ef938b633d704f29e593a8b51148d43429d0bc4" | "0xd2f21358c1549be193537b2a4c5dc7f0228ae011" | "0xe15c03d4ce70d2102d8d7a4e42af677a5ac7ee16" | "0xf624649736a106f2aa16e8027ce9aeed1bcd22f9" | "0xb873e889f28e3d2c86f2495820dd5eca329bddf4" | "0x107c1dcb81234146400c96bc3e1252b42cde7d3e" | "0x23b6888106ea1b69d0b1b48cffa58606ce63fb17" | "0x0bfebcaa1873ff6bac70b36a54860d301d434e43" | "0xbe7cc96a863bdb43e25896664cf0e3c65f7973eb" | "0xe7df69cc69f5a9425865e30625ce516269c43ad1")[];
        };
    };
    defaultPool: "0x6fe9e9de56356f7edbfcbb29fab7cd69471a4869";
    defaultToken0: "0x55d398326f99059ff775485246999027b3197955";
    defaultToken1: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
    tokenList: never[];
    stables: never[];
    watchlist: string[];
    internalName: "bsc";
    contracts: {
        nftManager: {
            address: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613";
        };
        weth9: {
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
        };
        multicall2: {
            address: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
    };
    id: 56;
    name: "BNB Smart Chain";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/bsc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 10;
    name: "Filecoin";
    blockTimeSeconds: 30;
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
    logoUrl: "https://assets.oku.trade/filecoin-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0xEB466342C4d449BC9f53A865D5Cb90586f405215";
        wbtcAddress: "0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad";
        wethAddress: "0xb829b68f57CC546dA7E5806A929e53bE32a4625D";
    };
    oku: {
        pricing: {
            stablecoinList: string[];
            pools: never[];
            nativeWrappedToken: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
            nativeQuotePools: undefined;
        };
        limitOrderRegistry: "0xded8791056aa39581460a005a3c400a281e24bd7";
        limitOrderRegistryDeployBlock: number;
    };
    defaultPool: "0x14d44c7ef81f6c18f5d22e0962f0279d83e80b05";
    defaultToken0: "0xb829b68f57cc546da7e5806a929e53be32a4625d";
    defaultToken1: "0xeb466342c4d449bc9f53a865d5cb90586f405215";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "filecoin";
    contracts: {
        limitOrder: {
            address: "0xded8791056aa39581460a005a3c400a281e24bd7";
        };
        nftManager: {
            address: "0x4cd986dD509fbB6A695aE971d5C56c8795f640ee";
        };
        weth9: {
            address: "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A";
        };
        multicall2: {
            address: "0x732f5baac411e427d130fed03c2e82a3e0d64d35";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    id: 314;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "filecoin";
        readonly symbol: "FIL";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.node.glif.io/rpc/v1"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 0;
    blockTimeSeconds: 15;
    logoUrl: "https://assets.oku.trade/ethereum-logo.webp";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        topNativePool: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        wbtcAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    };
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
            nativeQuotePools: {
                pool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
                deployBlock: number;
            }[];
            stablecoinList: `0x${string}`[];
            pools: `0x${string}`[];
        };
    };
    defaultPool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";
    defaultToken0: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    defaultToken1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "ethereum";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        weth9: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
        };
        multicall2: {
            address: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        ensUniversalResolver: {
            readonly address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62";
            readonly blockCreated: 16966585;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
        };
    };
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://cloudflare-eth.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 12;
    blockTimeSeconds: 30;
    logoUrl: "https://assets.oku.trade/moonbeam-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wethAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
        usdcAddress: "0x931715FEE2d06333043d11F658C8CE934aC61D0c";
    };
    oku: {
        pricing: {
            nativeWrappedToken: "0xacc15dc74880c9944775448304b263d191c6077f";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xba66370d96a9d61afa66283900b78c1f6ed02782";
    defaultToken0: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed";
    defaultToken1: "0xacc15dc74880c9944775448304b263d191c6077f";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "moonbeam";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0x9036d0dcb5a059c9371b05d508f0072df773854e";
        };
        weth9: {
            address: "0xacc15dc74880c9944775448304b263d191c6077f";
        };
        multicall2: {
            address: "0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Moonscan";
            readonly url: "https://moonscan.io";
        };
    };
    id: 1284;
    name: "Moonbeam";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "GLMR";
        readonly symbol: "GLMR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://moonbeam.public.blastapi.io"];
            readonly webSocket: readonly ["wss://moonbeam.public.blastapi.io"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    blockTimeSeconds: 0.5;
    sortIndex: 2;
    logoUrl: "https://assets.oku.trade/optimism-logo.svg";
    oku: {
        limitOrderRegistryDeployBlock: number;
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        pricing: {
            nativeWrappedToken: "0x4200000000000000000000000000000000000006";
            nativeQuotePools: {
                deployBlock: number;
                pool: "0x85149247691df622eaf1a8bd0cafd40bc45154a9";
            }[];
            stablecoinList: string[];
            pools: ("0x85149247691df622eaf1a8bd0cafd40bc45154a9" | "0xc858a329bf053be78d6239c4a4343b8fbd21472b" | "0x1d751bc1a723accf1942122ca9aa82d49d08d2ae" | "0x95d9d28606ee55de7667f0f176ebfc3215cfd9c0" | "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36" | "0xbf16ef186e715668aa29cef57e2fd7f9d48adfe6" | "0xb589969d38ce76d3d7aa319de7133bc9755fd840" | "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31" | "0x252cbdff917169775be2b552ec9f6781af95e7f6" | "0xf1f199342687a7d78bcc16fce79fa2665ef870e1" | "0xadb35413ec50e0afe41039eac8b930d313e94fa4" | "0x100bdc1431a9b09c61c0efc5776814285f8fb248" | "0x6432037739ccd0201987472604826097b55813e9" | "0x9595edbefc82535a02312a4c42cc91e6e9df8f67" | "0x9438a9d1bdeece02ed4431ac59613a128201e0b9" | "0x8323d063b1d12acce4742f1e3ed9bc46d71f4222" | "0xf3f3433c3a97f70349c138ada81da4d3554982db" | "0xb2ac2e5a3684411254d58b1c5a542212b782114d" | "0x2e80d5a7b3c613d854ee43243ff09808108561eb" | "0x8eda97883a1bc02cf68c6b9fb996e06ed8fdb3e5" | "0x98d9ae198f2018503791d1caf23c6807c135bb6b" | "0x827f0a2a4376bc26729f398b865f424dc8456841" | "0x6168ec836d0b1f0c37381ec7ed1891a412872121" | "0xdd0c6bae8ad5998c358b823df15a2a4181da1b80" | "0x6f32061f59a21086c334d0d45f804089ce374aaf" | "0x320616dbe138aa2f3db7a5a46ba79a13032cc5f2" | "0xf74fca1611a695a81fc1f7052aa5ff2549558ab3" | "0x702b283b06fa4e49ef155597945f2ba4b717e19c" | "0x7b17fc02d85cb5589ec1d1c3db507dc557590c79" | "0x766854992bd5363ebeeff0113f5a5795796befab" | "0xae2d9288be0587c2097ec46db7686ac2481f896e" | "0x793aca81b02f9e8e073047d2347da0c16e5ecd92" | "0xa1658249bcc69b0ab491cdc0449c0b0ea796de8d" | "0xa7bb0d95c6ba0ed0aca70c503b34bc7108589a47" | "0xf44acaa38be5e965c5ddf374e7a2ba270e580684" | "0x1a172713bdf4b9c846028e43081e73ca90a399dd" | "0xc50958e82c36b8d6d0baf555f90b76b0a28ceeeb" | "0xf046d8b7365d8abe5a8f8301c669b4b5284fc21d" | "0x84eb2c5c23999b3ddc87be10f15ccec5d22c7d97" | "0x95d7d146ae40d4822c2750276b54b6eed530d374" | "0x815ae7bf44dda74ed9274377ed711efc8b567911" | "0x0843e0f56b9e7fdc4fb95fabba22a01ef4088f41" | "0x25e412992634b93a025e2a538c53222a8c62e2d6" | "0xbd93951d2e9ec615f9940887559b4317032d98d0" | "0xc62d5ff62276eeda3c2d24f6b7e384355ec52a5e" | "0xba335a3b1f2fb04e66916c664459b7f74378ec32" | "0xd9b160620447d9a9a6ca90c0450f5490e5219257" | "0x2df05e4cdbd758cb1a99a34bb0d767e040d6b078" | "0x94ad9a19126ebb02dda874237e5820fd4943f5de" | "0x64750f4098a7f98352f7cd5797f421ceb8d94f64" | "0xb11d715bd9e3fd4fd07401dc551d516780c12449" | "0xaee0a6d42d10491d36e6a1b922741933609ac1be" | "0xcf2aebb91fec906f51fc11cd57035a09d8b16965" | "0xc0f184c6c4832b3ed861bd5b05722792ffa64abd" | "0x3154dc51bd6bb55213bd0e676df44cc3327ce75c" | "0xd9660a959e00fec8b256ef6bf71c0f545585eba0" | "0xc22662b904d98e45f89e030201355c3e372cc819" | "0x652a810c603faef61ff5d873e52ad7f1d70d6014" | "0x85841dab003d284d7aac51fc77cfa0d37d912825" | "0x2024c394741a5301e89a375b7bf52f865bc166fd" | "0x4983691a26d55eb9e18d2e12e3b770cdd3f76a5f" | "0xe1a0c25464a9d3b1426b552416bf2a02865ed461" | "0xba9bbd07331f0185701b61be6379ac49d50ae327" | "0xd6101cda1a51924e249132cbcae82bfcd0a91fbc" | "0xba213008fe93b3591e439f3b2aa51b3e4a2bd7c7" | "0x6408b4846dbe71e5b4b095b4fdee5ca58447f1c8" | "0x22bbdcfc90cabc569c22bf908877b7cc3e2c4684" | "0xeb1817b708415f4f78c5f0c99cbbd6a3a899fa6d" | "0x2582886f65ea71ecd3cffd12089c55fb9c75e9db" | "0x6ecb7d18abda6ae794035490a4decc329d0f23bb" | "0x4ad43a229a55d9453ad1ddd9aea986d58faab8d4" | "0x90b9504cff7af9d787799dc93ded9aed0a1996d7" | "0x7628784d2c5d47fcd5479ba812343b1aabad6484" | "0x44b17031465c53706af85c05423d26e9cfa13a1b" | "0xc366ec578789d5a802ecb966f69bbf8441b7e112" | "0xb018e5955c561a8af0f49faf60d587b7f8f1687b" | "0x2459023a29d3b07711b8b916d86aa7e8a14747af" | "0xe7ee03b72a89f87d161425e42548bd5492d06679" | "0xe588add6432dc1a9c717d37dbce858a6ded48656" | "0xbd8ac2a59551684b801885e4ea1c746c3fa92a34" | "0x1682dcd12f6e291de6874dcb0a89ee50465f43bd" | "0xac721d2e27ca148f505b5106fc95e594c78ace5b" | "0x3d44cc727fe2f603e4929be164c70edb3b498b5f" | "0xe229ce1cdbea9983362ca29f0f0b2c70bb2dacdf" | "0xea6018f42f816201c933bbb7a6027725937a0895" | "0x26e7fed14a97e0c482a302237971cf1b04f6d3e9" | "0xd1788a1109bd36ab296ac104a67bf8dc48673948" | "0x61775175905a0f3f7705a6f010d918b6acda6e00" | "0xcc8a87a17208fe2e96168ca3fa9412a968c5b092" | "0xfe4860375d8186770224534b70241e9a197aa4c7" | "0x514810e7db31cf118e6bacb3992bbe37b8d2b9b3" | "0xca93e9077c48cc7ab817390edd32f85ec6892797" | "0xc6f5e7e95e9bd69e57bbcdc3791332de9c89c8f4" | "0x610c0e8963449d62bae223ed6af042c21241d54d" | "0x461cd8b232e24ee5acc51dc43c186ec58f86be47" | "0xd4fed0bab141441d56521271d0a5747fd42062be" | "0x0bb50d3e479e4682558fdb86f41a205e2c035ae5" | "0x83de573f16e7cf978d3f4bc61f080ac392825fb3" | "0x2b5861fd7fd65b57de0009ec0d9045ba49aa5416" | "0x40a6d70506ba0e5e361e3913ca79a3282b3031b0")[];
        };
    };
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        topNativePool: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0x0b2c639c533813f4aa9d7837caf62653d097ff85";
        wethAddress: "0x4200000000000000000000000000000000000006";
        wbtcAddress: "0x68f180fcce6836688e9084f035309e29bf0a2095";
    };
    defaultPool: "0x1c3140ab59d6caf9fa7459c6f83d4b52ba881d36";
    defaultToken0: "0x4200000000000000000000000000000000000042";
    defaultToken1: "0x7f5c764cbc14f9669b88837ca1490cca17c31607";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "optimism";
    contracts: {
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        weth9: {
            address: "0x4200000000000000000000000000000000000006";
        };
        multicall2: {
            address: "0x266557a864680a1401a3506c0eb72934bd13bf59";
        };
        multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11";
        };
        l2OutputOracle: {
            readonly 1: {
                readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
            };
        };
        portal: {
            readonly 1: {
                readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
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
            readonly name: "Optimism Explorer";
            readonly url: "https://explorer.optimism.io";
        };
    };
    id: 10;
    name: "OP Mainnet";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.optimism.io"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    formatters: {
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
    serializers: {
        readonly transaction: (transaction: import("viem/chains").OpStackTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    blockTimeSeconds: 2;
    sortIndex: 3;
    logoUrl: "https://assets.oku.trade/polygon-logo.webp";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        proxyAdmin: `0x${string}`;
        tickLens: `0x${string}`;
        quoter: `0x${string}`;
        swapRouter: `0x${string}`;
        swapRouter02: `0x${string}`;
        NFTDescriptor: `0x${string}`;
        nonfungibleTokenPositionDescriptor: `0x${string}`;
        transparentUpgradeableProxy: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        v3Migrator: `0x${string}`;
        uniswapV3Staker: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
        topNativePool: "0xa374094527e1673a86de625aa59517c5de346d32";
    };
    token: {
        wbtcAddress: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6";
        usdcAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
        wethAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
    };
    oku: {
        limitOrderRegistry: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
            nativeQuotePools: {
                deployBlock: number;
                pool: "0xa374094527e1673a86de625aa59517c5de346d32";
            }[];
            stablecoinList: string[];
            pools: `0x${string}`[];
        };
    };
    defaultPool: "0xa374094527e1673a86de625aa59517c5de346d32";
    defaultToken0: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
    defaultToken1: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "polygon";
    contracts: {
        nftManager: {
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
        };
        limitOrder: {
            address: "0x54dF9e11c7933a9cA3BD1E540B63dA15edAe40bf";
        };
        weth9: {
            address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
        };
        multicall2: {
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://polygonscan.com";
        };
    };
    id: 137;
    name: "Polygon";
    nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://polygon-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 7;
    name: "Rootstock";
    blockTimeSeconds: 33;
    logoUrl: "https://assets.oku.trade/rootstock-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        usdcAddress: "0x3A15461d8AE0f0Fb5fA2629e9dA7D66A794a6E37";
    };
    oku: {
        limitOrderRegistry: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xd2ffe51ab4e622a411abbe634832a19d919e9c55";
    defaultToken0: "0x542fda317318ebf1d3deaf76e0b632741a7e677d";
    defaultToken1: "0xef213441a85df4d7acbdae0cf78004e1e486bb96";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    blockExplorers: {
        default: {
            readonly name: "Blockscout";
            readonly url: "https://rootstock.blockscout.com";
        };
        blockscout: {
            readonly name: "Blockscout";
            readonly url: "https://rootstock.blockscout.com";
        };
    };
    internalName: "rootstock";
    contracts: {
        limitOrder: {
            address: "0x83B1cF411f57F7373bBFF81dCE81437e768F4252";
        };
        nftManager: {
            address: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1";
        };
        weth9: {
            address: "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d";
        };
        Multicall2: {
            address: `0x${string}`;
        };
        Multicall3: {
            address: `0x${string}`;
        };
        multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 4249540;
        };
    };
    id: 30;
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Rootstock Bitcoin";
        readonly symbol: "RBTC";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://public-node.rsk.co"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    network: "rootstock";
}>, Readonly<{
    sortIndex: 5;
    blockTimeSeconds: 3;
    logoUrl: "https://assets.oku.trade/scroll-logo.png";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        positionsNFT: `0x${string}`;
    };
    token: {
        usdcAddress: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
        wethAddress: "0x5300000000000000000000000000000000000004";
        wbtcAddress: "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1";
    };
    oku: {
        limitOrderRegistry: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x5300000000000000000000000000000000000004";
            stablecoinList: string[];
        };
    };
    defaultPool: "0x813df550a32d4a9d42010d057386429ad2328ed9";
    defaultToken0: "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
    defaultToken1: "0x5300000000000000000000000000000000000004";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "scroll";
    contracts: {
        limitOrder: {
            address: "0xeC3E5eeC51D8C3D4f03DABB84B4Db313a739f377";
        };
        nftManager: {
            address: "0xB39002E4033b162fAc607fc3471E205FA2aE5967";
        };
        weth9: {
            address: "0x5300000000000000000000000000000000000004";
        };
        Multicall2: {
            address: `0x${string}`;
        };
        Multicall3: {
            address: `0x${string}`;
        };
        multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "Scrollscan";
            readonly url: "https://scrollscan.com";
        };
    };
    id: 534352;
    name: "Scroll";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.scroll.io"];
            readonly webSocket: readonly ["wss://wss-rpc.scroll.io/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    sortIndex: 6;
    blockTimeSeconds: 7;
    logoUrl: "https://assets.oku.trade/zkevm-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
    };
    token: {
        wbtcAddress: "0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1";
        wethAddress: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
        usdcAddress: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    };
    oku: {
        limitOrderRegistry: `0x${string}`;
        limitOrderRegistryDeployBlock: number;
        pricing: {
            nativeWrappedToken: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9";
            stablecoinList: string[];
        };
    };
    defaultPool: "0xd2c7e323c6f5415dc0ee4e3811901b3380d316fd";
    defaultToken0: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
    defaultToken1: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "polygon-zkevm";
    contracts: {
        limitOrder: {
            address: "0x5f1ef1d278013567c3c67e18d2d35bfa9954f723";
        };
        nftManager: {
            address: "0xf0d61aeda516cca1ff20be65cfb0213be688a24f";
        };
        weth9: {
            address: "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9";
        };
        multicall2: {
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://zkevm.polygonscan.com";
        };
    };
    id: 1101;
    name: "Polygon zkEVM";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zkevm-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}>, Readonly<{
    blockTimeSeconds: 2;
    sortIndex: 4;
    logoUrl: "https://assets.oku.trade/zksync-logo.svg";
    uniswap: {
        deployBlock: number;
        poolFactory: `0x${string}`;
        multicall2: `0x${string}`;
        tickLens: `0x${string}`;
        nonfungiblePositionManager: `0x${string}`;
        positionsNFT: `0x${string}`;
        positionsNFTDeployBlock: number;
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
            stablecoinList: string[];
        };
    };
    defaultPool: "0xff577f0e828a878743ecc5e2632cbf65cecf17cf";
    defaultToken0: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4";
    defaultToken1: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
    tokenList: {
        symbol: string;
        address: string;
    }[];
    stables: string[];
    watchlist: string[];
    internalName: "zksync";
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
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
            address: `0x${string}`;
        };
        multicall3: {
            address: `0x${string}`;
        };
    };
    id: 324;
    name: "zkSync Era";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.era.zksync.io"];
            readonly webSocket: readonly ["wss://mainnet.era.zksync.io/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/_types/chains/zksync/types").ZkSyncRpcBlockOverrides & {
                transactions: `0x${string}`[] | import("viem/_types/chains/zksync/types").ZkSyncRpcTransaction<boolean>[];
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
                transactions: `0x${string}`[] | import("viem/_types/chains/zksync/types").ZkSyncTransaction<boolean>[];
                transactionsRoot: `0x${string}`;
                uncles: `0x${string}`[];
                withdrawals?: import("viem").Withdrawal[] | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
                l1BatchNumber: bigint | null;
                l1BatchTimestamp: bigint | null;
            };
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcTransaction<boolean>>, import("viem/_types/chains/zksync/types").ZkSyncRpcTransaction<boolean>>) => {
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "eip712" | "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "eip712" | "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
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
                type: "eip712" | "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            };
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").RpcTransactionReceipt>, import("viem/_types/chains/zksync/types").ZkSyncRpcTransactionReceiptOverrides>) => {
                blockHash: `0x${string}`;
                blockNumber: bigint;
                contractAddress: `0x${string}` | null;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: `0x${string}`;
                gasUsed: bigint;
                logs: import("viem/_types/chains/zksync/types").ZkSyncLog<bigint, number, boolean, undefined, undefined, undefined, undefined>[];
                logsBloom: `0x${string}`;
                status: "success" | "reverted";
                to: `0x${string}` | null;
                transactionHash: `0x${string}`;
                transactionIndex: number;
                type: import("viem/_types/chains/zksync/types").ZkSyncTransactionType;
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
                l2ToL1Logs: import("viem/_types/chains/zksync/types").ZkSyncL2ToL1Log[];
            };
            type: "transactionReceipt";
        };
        readonly transactionRequest: {
            exclude: ("gasPerPubdata" | "customSignature" | "paymaster" | "paymasterInput" | "factoryDeps")[] | undefined;
            format: (args: import("viem/chains").Assign<Partial<import("viem").TransactionRequest<bigint, number>>, import("viem/_types/chains/zksync/types").ZkSyncTransactionRequest>) => ({
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/_types/chains/zksync/types").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/_types/chains/zksync/types").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/_types/chains/zksync/types").ZkSyncEip712Meta;
            }) & {
                customSignature: never;
                factoryDeps: never;
                gasPerPubdata: never;
                paymaster: never;
                paymasterInput: never;
            };
            type: "transactionRequest";
        };
    };
    serializers: {
        readonly transaction: (transaction: import("viem/_types/chains/zksync/types").ZkSyncTransactionSerializable, signature?: import("viem").Signature | undefined) => `0x${string}` | `0x02${string}` | `0x01${string}`;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
    network: "zksync-era";
}>];
export { arbitrum, base, boba, bsc, filecoin, mainnet, moonbeam, optimism, polygon, rootstock, scroll, polygonZkEvm, zkSync, UniswapMetadata, OkuPricingMetadata, OkuMetadata, TokenMetadata, IChainInfo, MAINNET_CHAINS };
