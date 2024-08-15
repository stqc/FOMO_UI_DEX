import Image from "next/image";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWalletHeader = () => {
  const isConnected = false;

  return (
    <>
      {isConnected ? (
        <div className="hidden lg:flex items-center gap-[15px] cursor-pointer z-30">
          <Image
            src="/icons/eth-logo.svg"
            width="32"
            height="32"
            alt="Eth Logo"
            className="z-30"
          />

          <p className="text-[#B2B2B2] z-30 text-[16px]">0X57db....A17B</p>
          <Image
            src="/icons/logout.svg"
            width="18"
            height="19"
            alt="Eth Logo"
          />
        </div>
      ) : (
        <ConnectButton />
        // <button
        //   type="button"
        //   className="z-30 rounded-[4px] btn-variant-two py-[10px] px-[30px]"
        // >
        //   Connect wallet
        // </button>
      )}
    </>
  );
};

export default ConnectWalletHeader;
