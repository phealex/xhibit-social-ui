import { FC, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useWalletState } from "@/store";

const Withdraw: FC = () => {
    const [isShowVerification, setIsShowVerification] = useState<boolean>(true)
  return (
    <div className="">

        <Button className=" bg-accent_green hover:bg-accent_green text-white px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
          Withdraw
        </Button>
    <Dialog open={isShowVerification} onOpenChange={setIsShowVerification}>
      <DialogContent className="flex flex-col gap-[30px] items-center">
        <div className="flex flex-col gap-[10px]">
          <h1 className=" font-Jakarta font-medium text-center text-[28px] leading-[36px] text-dark_green">
            VERIFICATION
          </h1>
          <p className=" font-Jakarta font-normal text-center  text-base text-dark_green/70">
            To make withdrawal, help us verify and link your account, the name
            on your bank account, identity documents provided should match the
            name you provided as the owner of your XHIBIT account
          </p>
        </div>
        <Button onClick={() => {
            useWalletState.setState({
                isShowWalletVerification: true
            })
        }} className=" bg-primary_blue hover:bg-primary_blue w-fit text-white flex gap-2 px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
          Continue to verification
        </Button>
      </DialogContent>
    </Dialog>
    </div>

  );
};

export default Withdraw;
