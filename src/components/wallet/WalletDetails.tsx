import { FC, useState } from "react";
import { Eye, EyeOff, Plus } from "lucide-react";
import { CryptoBalance } from "@/constants";
import { AddMoney,  Withdraw } from "..";

const WalletDetails: FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  return (
    <div className=" flex flex-col gap-10 w-full">
      <h1 className=" font-Jakarta font-medium text-[31px] leading-[44px] text-dark_green">
        My wallet
      </h1>
      <div className=" bg-primary_blue/10 w-full rounded-[10px] min-h-[180px] px-5 py-5 md:pt-[42px] flex flex-col gap-4 md:flex-row justify-between ">
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-5">
            <div className="flex items-start gap-1">
              <p className=" font-Jakarta font-bold text-primary_blue">NGN</p>
              <p className=" font-Jakarta font-bold text-[42px] leading-[48px] text-primary_blue">
                {showBalance ? "10,000" : "****"}
              </p>
            </div>
            <div className="">
              {showBalance ? (
               <Eye onClick={() => setShowBalance(!showBalance)} className=" h-6 w-6 cursor-pointer text-primary_blue" />
              ) : (
                <EyeOff onClick={() => setShowBalance(!showBalance)} className=" h-6 w-6 cursor-pointer text-primary_blue" />
              )}
            </div>
          </div>
          <p className=" font-Jakarta font-medium text-xs text-primary_blue">
            XHIBIT wallet balance
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-col gap-[32px] ">
            <div className="flex items-center gap-6">
                <AddMoney />
               <Withdraw />
            </div>
            <div className="flex items-center gap-6">
                {
                    CryptoBalance.map((crypto, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <p className=" font-Jakarta font-normal text-[10px] leading-3 text-dark_green/70">{crypto.name}</p>
                            <p className=" font-Jakarta font-medium text-xs text-dark_green">${crypto.balance}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
