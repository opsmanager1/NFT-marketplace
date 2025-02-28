import client from "@/lib/client";
/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { getContract } from "thirdweb";
//import { sepolia } from "thirdweb/chains";
//export const NETWORK = sepolia;
export const NETWORK = {
        // === Required information for connecting to the network === \\
        chainId: 10143, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://testnet-rpc.monad.xyz"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Monad Testnet",
          symbol: "MON",
        },
        shortName: "Monad Testnet", // Display value shown in the wallet UI
        slug: "Monad Testnet", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Monad Testnet", // Name of the network
        name: "Monad Testnet", // Name of the network
      }, {
    secretKey: process.env.TW_SECRET_KEY,
  };

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
const MARKETPLACE_ADDRESS = "0x38ab4489E479c9266471bbe8C3794CB30EA11F20";
export const MARKETPLACE = getContract({
	address: MARKETPLACE_ADDRESS,
	client,
	chain: NETWORK,
});

// 3. The address of your NFT collection smart contract.
const NFT_COLLECTION_ADDRESS = "0x72a6eb347D86Bb5DE9c3c6a3DFAb6f2eff80F3C9";
export const NFT_COLLECTION = getContract({
	address: NFT_COLLECTION_ADDRESS,
	client,
	chain: NETWORK,
});

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://sepolia.etherscan.io";
