import { ThirdwebStorage } from "@thirdweb-dev/storage";

const storage = new ThirdwebStorage();

export const resolveIPFS = (uri?: string): string | null => {

  if (!uri || uri.trim() === "") {
    console.log("No image URI provided in metadata");
    return null;
  }


  if (uri.startsWith("ipfs://")) {
    const cidAndPath = uri.replace("ipfs://", "");
    const resolvedUrl = `https://ipfs.io/ipfs/${cidAndPath}`;
    console.log("Resolved IPFS URL:", resolvedUrl);
    return resolvedUrl;
  }


  if (uri.match(/^https?:\/\//)) {
    console.log("Using existing HTTP URL:", uri);
    return uri;
  }

  console.log("Unrecognized image URL format:", uri);
  return null;
};

export const uploadFile = async (file: File): Promise<string> => {
  const uri = await storage.upload(file);
  return resolveIPFS(uri) || "";
};

export default storage;
