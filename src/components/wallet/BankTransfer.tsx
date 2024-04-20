import { bankTransferData } from "@/constants";
import { Copy } from "lucide-react";
import { FC } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { useWalletState } from "@/store";
import { RiArrowLeftSFill } from "react-icons/ri";

const BankTransfer: FC = () => {
  const { toast } = useToast();
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col w-full gap-[30px] ">
        <p className=" font-Jakarta font-normal text-xs text-dark_green/70 text-center">
          This is your XHIBIT account number. Please refresh this page after
          making a transfer to this account number either via your bank app or
          bank USSD code
        </p>

        <div className="flex flex-col gap-5">
          {bankTransferData.map((data, index) => (
            <div
              key={index}
              className=" h-14 px-2 w-full bg-dark_green/5 rounded-md flex items-center justify-between"
            >
              <p className=" font-Jakarta font-normal text-base text-dark_green">
                {data.title}
              </p>
              <div className="flex gap-1">
                <p className=" font-Jakarta font-normal text-base text-primary_blue">
                  {data.value}
                </p>
                {data.isCopy && (
                  <CopyToClipboard
                    text={data.value}
                    onCopy={() => {
                      toast({
                        title: "Copied successfully",
                        description: `The ${data.title} has been copied to your clipboard`,
                      });
                    }}
                  >
                    <div className="flex gap-2 w-fit cursor-pointer group">
                      <Copy className=" h-5 w-5 text-primary_blue/70 group-hover:text-primary_blue" />
                    </div>
                  </CopyToClipboard>
                )}
              </div>
            </div>
          ))}
          <Button
            onClick={() => {
              useWalletState.setState({
                isFundWallet: false,
                paymentOption: undefined,
                amountToFund: 0,
              });
            }}
            className=" w-full bg-primary_blue  hover:bg-primary_blue text-white font-Jakarta font-medium text-base "
          >
            Back to wallet
          </Button>
        </div>
      </div>

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

export default BankTransfer;
