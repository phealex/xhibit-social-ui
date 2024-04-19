import { FC, useState } from "react";
import { Button } from "../ui/button";
import { Eye, EyeOff, Plus } from "lucide-react";
import { CryptoBalance } from "@/constants";

const WalletDetails: FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  return (
    <div className=" flex flex-col gap-10">
      <h1 className=" font-Jakarta font-medium text-[31px] leading-[44px] text-dark_green">
        My wallet
      </h1>
      <div className=" bg-primary_blue/10 w-full rounded-[10px] min-h-[180px] px-5 pt-[42px] flex justify-between  ">
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
        <div className="flex flex-col gap-[32px] ">
            <div className="flex items-center gap-6">
                <Button className=" bg-primary_blue hover:bg-primary_blue text-white flex gap-2 px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
                    <Plus className=" h-4 w-4 text-white" />
                    Fund my wallet
                </Button>
                <Button className=" bg-accent_green hover:bg-accent_green text-white px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
                    Withdraw
                </Button>
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
