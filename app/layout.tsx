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
      <body className="relative overflow-x-hidden max-w-screen flex flex-col min-h-screen">
        {/* Ambient background with moving particles */}
        <div className="h-full w-full absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1.7}
            maxSize={2.8}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10 flex-grow">
          <Toaster />
          <ThirdwebProvider>
            <Navbar />
            <div className="w-screen">
              <div className="px-8 mx-auto mt-32 max-w-7xl">{children}</div>
            </div>
          </ThirdwebProvider>
        </div>

        {/* Footer */}
        <footer className="relative z-10 w-full bg-gray-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <p>&copy; 2025 BITNODES Marketplace. All rights reserved.</p>
            <div className="space-x-4">
              <a href="https://bitnodes.xyz/" className="hover:text-gray-300">Privacy</a>
              <a href="https://bitnodes.xyz/contact" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
