import client from "@/lib/client";
import { getContract, defineChain } from "thirdweb";

// 1. Определяем сеть Monad Testnet
export const NETWORK = defineChain({
  id: 10143, 
  name: "Monad Testnet",
  rpc: "https://testnet-rpc.monad.xyz/", 
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
   icon: {
    url: "https://www.bee.com/wp-content/uploads/2024/04/13a3ad5d-7a4d-4fa5-bb36-ca295b698b1b.jpeg",
    width: 32,
    height: 32,
    format: "png",
  },
});

// 2. Адрес смарт-контракта Marketplace V3
const MARKETPLACE_ADDRESS = "0x38ab4489E479c9266471bbe8C3794CB30EA11F20";
export const MARKETPLACE = getContract({
  address: MARKETPLACE_ADDRESS,
  client,
  chain: NETWORK,
});

// 3. Адрес смарт-контракта NFT-коллекции
const NFT_COLLECTION_ADDRESS = "0x72a6eb347D86Bb5DE9c3c6a3DFAb6f2eff80F3C9";
export const NFT_COLLECTION = getContract({
  address: NFT_COLLECTION_ADDRESS,
  client,
  chain: NETWORK,
});

// (Опционально) URL для просмотра транзакций
export const ETHERSCAN_URL = "https://testnet.monadexplorer.com/";
