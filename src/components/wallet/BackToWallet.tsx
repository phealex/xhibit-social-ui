import React, { FC } from 'react'
import { useWalletState } from "@/store";
import { RiArrowLeftSFill } from "react-icons/ri";
const BackToWallet: FC = () => {
  return (
    <div
        onClick={() => {
          useWalletState.setState({
            isFundWallet: false,
            paymentOption: undefined,
            amountToFund: 0,
            isConfirmTransaction: false,
          });
        }}
        className="flex items-center gap-1 cursor-pointer"
      >
        <RiArrowLeftSFill className=" text-base text-primary_blue" />
        <p className=" font-Jakarta font-medium text-xs text-primary_blue">
            Return to wallet
        </p>
      </div>
  )
}

export default BackToWallet