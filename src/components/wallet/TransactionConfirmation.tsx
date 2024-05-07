import React, { FC, useState } from "react";
import { OTP, TransactionSuccessful, CryptoTransfer } from "..";
import { useWalletState } from "@/store";
import { RiArrowLeftSFill } from "react-icons/ri";
import {BackToWallet} from '..';


const TransactionConfirmation: FC = () => {

const [isOtpSuccess, setIsOtpSuccess] = useState(false);
const paymentOption = useWalletState((state) => state.paymentOption);


const handleOtp = () => {
    setIsOtpSuccess(true);
}
  return (
    <div className=" h-full flex flex-col gap-[50px] pt-20 ">
      {
        isOtpSuccess ? (
          <TransactionSuccessful/>
        ) : paymentOption ?  (
          
            {
              online: <OTP handleSubmit={handleOtp} />,
              crypto: <CryptoTransfer />

            }[paymentOption]
        ) : null
      }
   <BackToWallet />
    </div>
  );
};

export default TransactionConfirmation;
