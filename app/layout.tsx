import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import { SparklesCore } from "@/components/sparkles"
import "@/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BITNODES Marketplace",
  description: "monad Memes NFT marketplace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden max-w-screen">
        {/* Ambient background with moving particles */}
        <div className="h-full w-full absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10">
          <Toaster />
          <ThirdwebProvider>
            <Navbar />
            <div className="w-screen min-h-screen">
              <div className="px-8 mx-auto mt-32 max-w-7xl">{children}</div>
            </div>
          </ThirdwebProvider>
        </div>
      </body>
    </html>
  );
}
