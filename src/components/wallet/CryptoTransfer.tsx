import { AlertCircle } from "lucide-react";
import { FC } from "react";
import { Qrcode } from "@/assets";
import CopyToClipboard from "react-copy-to-clipboard";
import { useToast } from "../ui/use-toast";
import { Copy } from "lucide-react";

const CryptoTransfer: FC = () => {
  const { toast } = useToast();

  return (
      <div className="flex flex-col gap-[30px] container ">
        <div className="flex flex-col gap-[10px] ">
          <p className=" font-Jakarta font-semibold text-base text-dark_green">
            Payment details
          </p>
          <span className=" font-Jakarta font-normal text-xs text-dark_green/70">
            Use the crypto wallet details to fund your USDT Wallet.
          </span>
        </div>
        <div className="flex flex-col gap-[50px] ">
          <div className="flex flex-col gap-[10px] items-center">
            <div className=" bg-primary_blue/10 w-full min-h-[278px] p-4 flex flex-col items-center gap-[10px] ">
              <div className=" bg-white p-5 flex gap-5 items-center">
                <img src={Qrcode} alt="" className=" h-[170px] w-[170px]" />
                <div className="flex gap-5 flex-col flex-1 ">
                  <div className="flex items-center gap-10 justify-between">
                    <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                      Wallet address
                    </p>
                    <div className="flex gap-1">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        1DPD8yam1a9amb...RydTXVwhxXwwS
                      </p>

                      <CopyToClipboard
                        text={"1DPD8yam1a9amb...RydTXVwhxXwwS"}
                        onCopy={() => {
                          toast({
                            title: "Copied successfully",
                            description: `The wallet address has been copied to your clipboard`,
                          });
                        }}
                      >
                        <div className="flex gap-2 w-fit cursor-pointer group">
                          <Copy className=" h-5 w-5 text-dark_green/70 group-hover:text-primary_blue" />
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 justify-between">
                    <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                      Network
                    </p>
                    <div className="flex gap-1">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        TRC20
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className=" font-Jakarta font-normal text-xs  text-primary_blue flex gap-1">
                <AlertCircle className=" h-5 w-5 text-primary_blue" />
                Min deposit amount: 4 USDT. Consider the network fee of 2 USDT
              </p>
            </div>
            <span className=" font-Jakarta font-normal text-xs text-dark_green/70">
              All transactions are verified by XHIBIT pay
            </span>
          </div>
          <div className="flex items-center gap-[10px] justify-center">
            <div className=" bg-dark_green/5 p-3 rounded-md flex flex-col gap-1">
              <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                Amount to pay
              </p>
              <p className=" font-Jakarta font-semibold text-base text-dark_green">
                0.000125USDT
              </p>
            </div>
            <div className=" bg-dark_green/5 p-3 rounded-md flex flex-col gap-1">
              <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                Total amount received
              </p>
              <p className=" font-Jakarta font-semibold text-base text-dark_green">
                NGN 0
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CryptoTransfer;
