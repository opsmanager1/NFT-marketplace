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
const MARKETPLACE_ADDRESS = "0xAafEC4F19dCdeBF038d1CD6C581e2047CcAC93cF";
export const MARKETPLACE = getContract({
  address: MARKETPLACE_ADDRESS,
  client,
  chain: NETWORK,
});

// 3. Адрес смарт-контракта NFT-коллекции
const NFT_COLLECTION_ADDRESS = "0x2E5dA5Fa444d5417423AF3593186AC0D9aa334bC";
export const NFT_COLLECTION = getContract({
  address: NFT_COLLECTION_ADDRESS,
  client,
  chain: NETWORK,
});

// (Опционально) URL для просмотра транзакций
export const ETHERSCAN_URL = "https://testnet.monadexplorer.com/";
