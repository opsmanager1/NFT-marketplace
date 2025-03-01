import { ThirdwebStorage } from "@thirdweb-dev/storage";

const storage = new ThirdwebStorage();

export const resolveIPFS = (uri: string): string => {
  return storage.resolveScheme(uri);
};

export const uploadFile = async (file: File): Promise<string> => {
  const uri = await storage.upload(file);
  return resolveIPFS(uri);
};

export default storage;
