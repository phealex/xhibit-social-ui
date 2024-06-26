import { FC, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { FundWallet } from "@/assets";
import { Input } from "../ui/input";
import { useWalletState } from "@/store";
import { useToast } from "@/components/ui/use-toast";

const AddMoney: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const amountToFund = useWalletState((state) => state.amountToFund);
  const { toast } = useToast();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className=" bg-primary_blue hover:bg-primary_blue text-white flex gap-2 px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
          <Plus className=" h-4 w-4 text-white" />
          Fund my wallet
        </Button>
      </DialogTrigger>
      <DialogContent className=" flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-1 items-center">
          <img src={FundWallet} alt="" className=" w-[70px] h-[70px]" />
          <p className=" font-Jakarta font-medium text-base text-dark_green">
            Add money to your wallet
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Input
            value={amountToFund}
            onChange={(e) =>
              useWalletState.setState({
                amountToFund: e.target.valueAsNumber,
              })
            }
            type="number"
            placeholder="Enter amount"
          />
          <Button
            type="submit"
            onClick={() => {
              if (amountToFund === 0 || amountToFund === null || isNaN(amountToFund) )
                return toast({
                  title: "Enter a valid amount",
                  description: "Please enter a valid amount greater then 0 to fund your wallet",
                });
              useWalletState.setState({
                isFundWallet: true,
              });
              setIsOpen(false);
            }}
            className=" bg-primary_blue hover:bg-primary_blue text-white flex gap-2 px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center "
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddMoney;
