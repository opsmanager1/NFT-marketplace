import { ConnectButton } from "thirdweb/react";
import Image from "next/image";
import Link from "next/link";
import client from "@/lib/client";
import { NETWORK } from "@/const/contracts";

export function Navbar() {
  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-full bg-transparent text-white/60 backdrop-blur-md">
      <nav className="flex items-center justify-between w-full px-8 py-5 mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="mr-4 transition-transform duration-300 transform hover:scale-110"
          >
            <div className="relative w-12 h-12 rounded-full bg-white/10 p-1 hover:bg-white/20 transition-colors">
              <Image
                src="/logo.png"
                width={48}
                height={48}
                alt="NFT marketplace sample logo"
                className="rounded-full"
              />
            </div>
          </Link>

          <div className="flex items-center gap-6 font-medium">
            <Link
              href="/buy"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white 
                        hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform 
                        hover:scale-105 shadow-md hover:shadow-lg"
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white 
                        hover:from-red-600 hover:to-rose-600 transition-all duration-300 transform 
                        hover:scale-105 shadow-md hover:shadow-lg"
            >
              Sell
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="">
            <ConnectButton
              theme="dark"
              client={client}
              chain={NETWORK}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
