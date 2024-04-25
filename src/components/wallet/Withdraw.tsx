import { FC } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const Withdraw: FC = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" bg-accent_green hover:bg-accent_green text-white px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
          Withdraw
        </Button>
      </DialogTrigger>
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
        <Button className=" bg-primary_blue hover:bg-primary_blue w-fit text-white flex gap-2 px-[10px] py-5 rounded-[5px] font-Jakarta font-medium text-xs text-center ">
          Continue to verification
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Withdraw;
