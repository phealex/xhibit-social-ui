import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Landmark } from "lucide-react";
import { Bitcoin } from "@/assets";
import { useWalletState } from "@/store";
import { onlinePaymentOptions } from "@/constants";

const PaymentOption: FC = () => {
  const paymentOption = useWalletState((state) => state.paymentOption);
  const setPaymentOption = useWalletState((state) => state.setPaymentOption);
  return (
    <div className="flex flex-col gap-[10px] ">
      <p className=" font-Jakarta font-medium text-xs text-dark_green">
        Payment method
      </p>
      <div className="flex gap-5 flex-wrap">
        <Select value={paymentOption} onValueChange={setPaymentOption}>
          <SelectTrigger className="w-full h-fit border-primary_blue border-2">
            <SelectValue
              defaultValue="transfer"
              placeholder="Select a payment option"
              className=" h-fit"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="transfer" className="!flex !flex-row gap-2">
              <Landmark className=" h-5 w-5 text-primary_blue" />
              <div className="flex flex-col gap-1">
                <p className=" text-left font-Jakarta font-medium text-base text-dark_green">
                  Bank transfer
                </p>
                <p className=" text-left font-Jakarta font-normal text-xs text-dark_green/70">
                  Direct bank transfer to your wallet
                </p>
              </div>
            </SelectItem>
            <SelectItem value="online" className="!flex !flex-row gap-2">
              <CreditCard className=" h-5 w-5 text-primary_blue" />
              <div className="flex flex-col gap-1">
                <p className="text-left font-Jakarta font-medium text-base text-dark_green">
                  Online via card
                </p>
                <p className="text-left font-Jakarta font-normal text-xs text-dark_green/70">
                  Fund wallet with a debit card
                </p>
              </div>
            </SelectItem>
            <SelectItem value="crypto" className="!flex !flex-row gap-2">
              <img
                src={Bitcoin}
                alt=""
                className=" h-5 w-5 text-primary_blue"
              />
              <div className="flex flex-col gap-1">
                <p className="text-left font-Jakarta font-medium text-base text-dark_green">
                  Crypto
                </p>
                <p className="text-left font-Jakarta font-normal text-xs text-dark_green/70">
                  Fund wallet using stable coin
                </p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {paymentOption &&
          {
            online: (
              <div className="flex items-center gap-4">
                {onlinePaymentOptions.map((option, index) => (
                  <img
                    key={index}
                    src={option}
                    alt=""
                    className=" h-[30px] w-[46px] object-cover"
                  />
                ))}
              </div>
            ),
          }[paymentOption]}
      </div>
    </div>
  );
};

export default PaymentOption;
