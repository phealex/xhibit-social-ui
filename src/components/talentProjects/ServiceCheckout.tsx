import React, { FC, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useProjectDisplay } from "@/store";
import { FaLaptopHouse } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cryptoCurrencyOptions } from "@/constants";
import { Logo } from "@/assets";
import { Button } from "../ui/button";

const ServiceCheckout: FC = () => {
  const isServiceCheckout = useProjectDisplay(
    (state) => state.isServiceCheckout
  );

  const [display, setDisplay] = useState<"payment" | "details" | "sent">(
    "payment"
  );
  return (
    <Dialog
      open={isServiceCheckout}
      onOpenChange={() =>
        useProjectDisplay.setState({ isServiceCheckout: false })
      }
    >
      <DialogContent className="w-full max-w-[708px] bg-white rounded-lg">
        {
          {
            payment: (
              <div className=" flex flex-col justify-center items-center gap-[50px] container">
                <p className=" font-Jakarta  font-normal text-base text-center">
                  Choose the payment method you wish to use to pay for this
                  service
                </p>
                <Select>
                  <SelectTrigger className=" h-fit w-full">
                    <SelectValue
                      className=" h-fit w-full "
                      placeholder="Select a cryptocurrency"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoCurrencyOptions.map((option, index) => (
                      <SelectItem
                        key={index}
                        value={option.name}
                        className=" !flex !flex-row gap-2"
                      >
                        <img src={option.icon} alt="" className=" h-5 w-5" />
                        <div className="flex flex-col gap-1">
                          <p className=" font-Jakarta text-nowrap whitespace-nowrap text-left font-medium text-base text-dark_green">
                            {option.symbol}
                          </p>
                          <p className=" font-Jakarta text-nowrap whitespace-nowrap text-left font-normal text-xs text-dark_green">
                            {option.name}
                          </p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className=" font-Jakarta font-medium text-base text-dark_green/70 uppercase">
                  OR
                </p>
                <div className=" h-[54px] flex items-center gap-2 bg-dark_green/5">
                  <img src={Logo} alt="" className="h-full w-10" />
                  <div className="flex flex-col h-full justify-between">
                    <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                      XHIBIT Wallet
                    </h1>
                    <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                      Pay, Using myXHIBIT wallet
                    </p>
                  </div>
                </div>
                <Button
                  className=" bg-primary_blue hover:bg-primary_blue text-white font-Jakarta font-medium text-base"
                  onClick={() => setDisplay("details")}
                >
                  Pay
                </Button>
              </div>
            ),
            details: <div>Details</div>,
            sent: <div>Sent</div>,
          }[display]
        }
      </DialogContent>
    </Dialog>
  );
};

export default ServiceCheckout;
