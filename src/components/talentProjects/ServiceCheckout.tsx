import React, { FC, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useProjectDisplay } from "@/store";
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
import { ServiceCardType } from "@/types";
import {
  BookmarkCheck,
  Clock3,
  MapPin,
  Repeat2,
  Check,
  Star,
} from "lucide-react";

interface ServiceCheckoutProps {
  service: ServiceCardType;
}

const ServiceCheckout: FC<ServiceCheckoutProps> = ({ service }) => {
  const isServiceCheckout = useProjectDisplay(
    (state) => state.isServiceCheckout
  );

  type Tabs = "payment" | "details" | "sent";
  const [display, setDisplay] = useState<Tabs>("payment");
  return (
    <Dialog
      open={isServiceCheckout}
      onOpenChange={() => {
        useProjectDisplay.setState({ isServiceCheckout: false });
        setDisplay("payment");
      }}
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
                  className=" bg-primary_blue hover:bg-primary_blue h-[50px] text-white font-Jakarta font-medium text-base"
                  onClick={() => setDisplay("details")}
                >
                  Pay
                </Button>
              </div>
            ),
            details: (
              <div className=" flex flex-col gap-30 w-full">
                <div className=" flex flex-col gap-[10px] ">
                  <h1 className=" font-Jakarta font-semibold text-2xl text-dark_green">
                    New service request
                  </h1>
                  <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                    Payment description
                  </p>
                </div>
                <div className=" flex flex-col gap-5 max-w-[316px]">
                  <section className="flex items-center gap-[5px]">
                    <img
                      src={service.img}
                      alt=""
                      className=" h-9 w-9 object-cover"
                    />
                    <div className="flex flex-col gap-1 h-full">
                      <p className=" font-Jakarta text-[13px] font-medium leading-4 text-dark_green">
                        {service.name}
                      </p>
                      <p className=" font-Jakarta text-[13px] flex items-center gap-1 font-normal text-dark_green/70">
                        <MapPin className=" h-4 w-4" />
                        {service.location}
                      </p>
                    </div>
                  </section>
                  <section className="flex items-center justify-between">
                    <p className=" font-Jakarta font-medium text-xl text-dark_green">
                      {service.title}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star fill="#FFC107" className=" h-5 w-5" />
                      <p className=" font-Jakarta font-medium text-xs">
                        {service.rating}
                      </p>
                      <p className=" font-Jakarta font-normal text-xs">
                        ({service.rating})
                      </p>
                    </div>
                  </section>
                  <div className="flex items-start gap-1 text-primary_blue">
                    <p className=" font-Jakarta font-medium text-base ">From</p>
                    <span className=" font-Jakarta font-medium text-[8px]">
                      NGN
                    </span>
                    <p className=" font-Jakarta font-semibold text-base">
                      {service.price}
                    </p>
                  </div>
                  <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock3 className=" h-4 w-4 text-primary_blue" />
                    <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                      {service.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat2 className=" h-4 w-4 text-primary_blue" />
                    <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                      {service.iterations} Iterations
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookmarkCheck className=" h-4 w-4 text-primary_blue" />
                    <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                      {service.bookmarks} +
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                    Payment breakdown:
                  </h1>
                  <div className="flex flex-col gap-[10px] w-full">
                    <div className=" flex justify-between items-center">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        Service cost:
                      </p>
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        <span className=" text-[8px]">NGN</span>
                        {service.price}
                      </p>
                    </div>
                    <div className=" flex justify-between items-center">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        Platform fees:
                      </p>
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        <span className=" text-[8px]">NGN</span>
                        {service.price}
                      </p>
                    </div>
                    <div className=" flex justify-between items-center">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        You pay:
                      </p>
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        <span className=" text-[8px]">NGN</span>
                        {service.price}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  className=" bg-primary_blue hover:bg-primary_blue ml-auto text-white font-Jakarta font-medium text-base"
                  onClick={() => setDisplay("sent")}
                >
                  Send request
                </Button>
              </div>
            ),
            sent: (
              <div className=" flex flex-col gap-[10px] items-center">
                <div className="flex items-center flex-col gap-[10px]">
                  <Check className="h-10 w-10 bg-primary_blue text-white p-2 rounded-full" />
                  <h1 className=" font-Jakarta font-semibold text-[31px]  leading-10 text-dark_green text-center">
                    Service request sent
                  </h1>
                  <span className=" font-Jakarta font-normal text-base text-center">
                    To
                  </span>
                </div>
                <div className=" flex flex-col items-center justify-center gap-2">
                  <img src={service.img} alt="" className=" h-8 w-8" />
                  <div className="flex flex-col gap-[10px]">
                    <p className=" font-Jakarta font-medium text-xs text-dark_green">
                      {service.name}
                    </p>
                    <p className="flex gap-2 items-center font-Jakarta font-normal text-xs text-dark_green/70">
                      <MapPin className="h-4 w-4 text-home_grey " />
                      Lagos, NG
                    </p>
                  </div>
                </div>
              </div>
            ),
          }[display]
        }
      </DialogContent>
    </Dialog>
  );
};

export default ServiceCheckout;
