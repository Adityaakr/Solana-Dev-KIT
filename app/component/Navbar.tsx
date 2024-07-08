"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const NavBar = () => {
  const wallet = useWallet();

  return (
    <>
      <div className="m-10 text-3xl font-bold text-indigo-500 ]">Solana KIT</div>
      <button className="absolute top-5 right-5 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-white hover:shadow-lg hover:bg-indigo-200">
          <WalletMultiButtonDynamic>
            {wallet.publicKey
              ? `${wallet.publicKey.toBase58().substring(0, 7)}...`
              : "Connect Wallet"}
          </WalletMultiButtonDynamic>
        </div>
      </button>
    </>
  );
};

export default NavBar;
