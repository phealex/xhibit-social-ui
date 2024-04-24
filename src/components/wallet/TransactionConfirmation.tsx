import React, { FC, useState } from "react";
import { OTP, TransactionSuccessful } from "..";
import { useWalletState } from "@/store";
import { RiArrowLeftSFill } from "react-icons/ri";

const TransactionConfirmation: FC = () => {

const [isOtpSuccess, setIsOtpSuccess] = useState(false);

const handleOtp = () => {
    setIsOtpSuccess(true);
}
  return (
    <div className=" justify-center h-full flex flex-col gap-[50px] pt-20 ">
      {
        isOtpSuccess ? (
          <TransactionSuccessful/>
        ) : (
          <OTP handleSubmit={handleOtp} />
        )
      }
      <div
        onClick={() => {
          useWalletState.setState({
            isFundWallet: false,
            paymentOption: undefined,
            amountToFund: 0,
          });
        }}
        className="flex items-center gap-1 cursor-pointer"
      >
        <RiArrowLeftSFill className=" text-base text-primary_blue" />
        <p className=" font-Jakarta font-medium text-xs text-primary_blue">
          Return to wallet
        </p>
      </div>
    </div>
  );
};

export default TransactionConfirmation;
