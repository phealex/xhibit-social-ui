import React, { FC } from "react";
import { TiTickOutline } from "react-icons/ti";
const TransactionSuccessful: FC = () => {
  return (
    <div className=" bg-white h-full w-full flex flex-col justify-center gap-5 items-center">
      <TiTickOutline className=" h-[100px] w-[100px] text-accent_green rounded-full bg-accent_green/30 p-5 " />
      <p className=" font-Jakarta font-bold text-[31px] leading-[44px] text-accent_green">
        Complete 👍
      </p>
      <div className=" flex flex-col gap-[10px] items-center">
        <p className=" font-Jakarta font-normal text-base text-dark_green/70">
          Total amount received:
        </p>
        <p className=" font-Jakarta font-semibold text-xl text-dark_green">
          NGN7,100
        </p>
      </div>
    </div>
  );
};

export default TransactionSuccessful;
