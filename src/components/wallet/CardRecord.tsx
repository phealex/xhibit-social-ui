import { CreditCard } from "@/assets";
import { Plus } from "lucide-react";
import { FC, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { AddCard } from "..";

const CardRecord: FC = () => {
  const [hasCard, setHasCard] = useState(true);
  return (
    <div className="flex flex-col gap-[30px] ">
      <div className="flex items-center justify-between">
        <p className=" font-Jakarta font-medium text-xs text-dark_green">
          My cards
        </p>
        <Dialog>
          <DialogTrigger>
            <Plus className=" h-5 w-5 p-[2px] text-primary_blue  text-base cursor-pointer bg-primary_blue/50 rounded-md " />
          </DialogTrigger>
          <DialogContent>
            <AddCard />
          </DialogContent>
        </Dialog>
      </div>
      <div className=" w-full rounded-md h-[162px]">
        {!hasCard ? (
          <div className=" w-full h-full flex justify-center items-center bg-home_grey/10 rounded-md">
            <p className="container flex  text-center font-Jakarta font-normal text-xs  text-dark_green/70">
              For quick and hassle-free deposits to your wallet, your saved card
              will appear here.
            </p>
          </div>
        ) : (
          <img
            src={CreditCard}
            alt=""
            className=" w-full h-full object-cover rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default CardRecord;
