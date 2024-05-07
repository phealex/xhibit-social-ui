import { CreditCard, EmptyRecord } from "@/assets";
import { TransactionRecords } from "@/constants";
import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { CreditCardIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TransactionRecord: FC = () => {
  const [hasTransaction, setHasTransaction] = useState(true);
  return (
    <div className="flex flex-col gap-[30px] ">
      <div className="flex items-center justify-between">
        <p className=" font-Jakarta font-medium text-xs text-dark_green">
          Transactions
        </p>
        <p className=" font-Jakarta font-medium cursor-pointer text-xs text-dark_green">
          See all
        </p>
      </div>
      <div className=" w-full rounded-md">
        {!hasTransaction ? (
          <div className=" w-full h-full flex flex-col gap-4 justify-center items-center bg-white/30  rounded-md">
            <img
              src={EmptyRecord}
              alt=""
              className=" W-[80px] h-[90px] object-cover"
            />
            <p className="container flex  text-center font-Jakarta font-normal text-xs  text-dark_green/70">
              For quick and hassle-free deposits to your wallet, your saved card
              will appear here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5 w-full">
            {TransactionRecords.map((tx, index) => (
              <div className="flex flex-col gap-5 w-full" key={index}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CreditCardIcon className=" h-4 w-4 text-dark_green/15" />
                    <p className=" font-Jakarta font-medium text-xs text-dark_green">
                      {tx.type}
                    </p>
                  </div>
                  <p
                    className={cn(
                      " font-Jakarta font-medium text-xs",
                      tx.type === "Withdrawal" || tx.type === "Transfer"
                        ? " text-accent_red"
                        : " text-accent_green"
                    )}
                  >
                    {tx.type === "Withdrawal" || tx.type === "Transfer"
                      ? "-"
                      : "+"}{" "}
                    {tx.amount}
                  </p>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionRecord;
