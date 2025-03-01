import { ThirdwebStorage } from "@thirdweb-dev/storage";

const storage = new ThirdwebStorage();

export const resolveIPFS = (uri?: string): string | null => {
  // Если URI отсутствует или пустое, возвращаем null
  if (!uri || uri.trim() === "") {
    console.log("No image URI provided in metadata");
    return null;
  }

  try {
    // Используем resolveScheme для преобразования IPFS-URI в HTTP-URL
    const resolvedUrl = storage.resolveScheme(uri);
    console.log("Resolved IPFS URL:", resolvedUrl);
    return resolvedUrl;
  } catch (error) {
    // Логируем ошибку, если resolveScheme не сработал
    console.error("Error resolving IPFS URI:", uri, error);
    return null;
  }
};

export const uploadFile = async (file: File): Promise<string> => {
  const uri = await storage.upload(file);
  return resolveIPFS(uri) || ""; // Возвращаем пустую строку, если null
};

export default storage;
