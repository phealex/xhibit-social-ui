import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Logo } from "@/assets";
import { cryptoPaymentDetailsData, paymentDetailsData } from "@/constants";
import CopyToClipboard from "react-copy-to-clipboard";
import { useToast } from "../ui/use-toast";
import { Copy } from "lucide-react";
import { useWalletState } from "@/store";

const WithdrawalDetails: FC = () => {

    const { toast } = useToast();
  return (
    <Card className=" border-dashed outline-none bg-white rounded-lg !m-0">
      <CardContent className=" flex flex-col gap-[30px] p-4">
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center justify-center gap-2">
            <img src={Logo} alt="" className=" h-10 w-10 " />
            <p className=" font-Philosopher font-normal text-[31px] leading-[44px] text-primary_blue">
              XHIBIT
            </p>
          </div>
          <p className=" font-Jakarta font-semibold text-xs text-dark_green">
            Payment details
          </p>

          <div className=" flex flex-col gap-4">
            {
              
                paymentDetailsData.slice(0, 4).map((data, index) => (
                  <div className="flex items-center justify-between" key={index}>
                    <p className=" font-Jakarta font-medium text-xs text-dark_green/70">
                      {data.title}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
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
                            <Copy className=" h-5 w-5 text-dark_green/70 group-hover:text-primary_blue" />
                          </div>
                        </CopyToClipboard>
                      )}
                    </div>
                  </div>
                ))
            }
            
          </div>
        </div>
        <Separator />
        <div className=" flex flex-col gap-4">
        {
            
                paymentDetailsData.slice(paymentDetailsData.length - 2).map((data, index) => (
                  <div className="flex items-center justify-between" key={index}>
                    <p className=" font-Jakarta font-medium text-xs text-dark_green/70">
                      {data.title}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
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
                            <Copy className=" h-5 w-5 text-dark_green/70 group-hover:text-primary_blue" />
                          </div>
                        </CopyToClipboard>
                      )}
                    </div>
                  </div>
                ))
            }
        </div>
      </CardContent>
    </Card>
  )
}

export default WithdrawalDetails