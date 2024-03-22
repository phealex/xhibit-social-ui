import { ServiceType } from "@/types";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Dmitry } from "@/assets";
import { CheckCircle, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceType;
}
const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const declineReasons: string[] = [
    "Budget is too low",
    "Spam / Fraud / Scam",
    "I'm currently unavailable",
    "I'm retired",
    "Others",
  ];

  const [serviceState, setServiceState] = useState<ServiceType>(service)

  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  return (
    <div className=" bg-dark_green/5 flex flex-col gap-[10px] w-[260px] ">
      <div className=" bg-primary_blue h-11 rounded-t-md flex items-center justify-center text-white font-Jakarta font-medium text-base text-center w-full">
        serviceState request
      </div>
      <div className="flex flex-col p-3 gap-4">
        <p className=" font-Jakarta font-normal text-[10px] leading-3 text-center">
          {serviceState.time}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {serviceState.images.map((image, index) => (
              <img
                src={image}
                alt=""
                className="w-[50px] h-[50px] object-cover"
                key={index}
              />
            ))}
          </div>
          <p className=" font-Jakarta font-medium text-xl text-dark_green">
            {serviceState.title}
          </p>

          <div className="flex items-start gap-1 text-primary_blue">
            <p className=" font-Jakarta font-medium text-base ">From</p>
            <span className=" font-Jakarta font-medium text-[8px]">NGN</span>
            <p className=" font-Jakarta font-semibold text-base">
              {serviceState.price}
            </p>
          </div>
          <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
            {serviceState.desc}
          </p>
          <p className=" font-Jakarta font-normal text-xs text-dark_green">
            Delivery timeline: {""}{" "}
            <span className=" font-medium">{serviceState.duration}</span>
          </p>
          <div className=" flex justify-between items-center">
            {
                serviceState.accepted === null ? (
                    <>
            <Dialog>
              <DialogTrigger>
                <Button
                //   onClick={() => {
                //     window.innerWidth <= 768 && setShowAccept(true)
                //   }}
                  className=" bg-primary_blue hover:bg-primary_blue text-white hover:text-white px-[10px] rounded-md outline-none"
                >
                  Accept request
                </Button>
              </DialogTrigger>
              <DialogContent className=" flex flex-col gap-10 max-h-[80%] lg:max-h-full top-[45%]  overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar h-fit">
                <div className=" flex flex-col gap-[10px]">
                  <p className=" font-Jakarta font-semibold text-2xl text-dark_green">
                    New serviceState request
                  </p>
                  <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                    Payment description
                  </p>
                </div>
                <div className=" flex flex-col gap-5 w-full">
                  <div className="flex flex-col gap-[10px] ">
                    <p className=" font-Jakarta font-medium text-base text-dark_green">
                      serviceState title
                    </p>
                    <Input
                      value={serviceState.title}
                      disabled
                      className=" bg-dark_green/5 w-full font-Jakarta text-base font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] ">
                    <p className=" font-Jakarta font-medium text-base text-dark_green">
                      serviceState description
                    </p>
                    <Textarea
                      value={serviceState.desc}
                      disabled
                      className=" bg-dark_green/5 w-full font-Jakarta text-base font-normal min-h-[100px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] ">
                    <p className=" font-Jakarta font-medium text-base text-dark_green">
                      Project price
                    </p>
                    <div className="flex flex-col gap-1">
                      <Input
                        value={`NGN ${serviceState.price}`}
                        disabled
                        className=" bg-dark_green/5 w-full font-Jakarta text-base font-normal"
                      />
                      <p className="font-Jakarta text-base font-normal">
                        Note your fee will be deducted from this amount, and
                        payment will be sent to your wallet on completing
                        serviceState.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] ">
                    <p className=" font-Jakarta font-medium text-base text-dark_green">
                      Payment breakdown
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green/70">
                        Client pays
                      </p>
                      <div className="flex items-start gap-1">
                        <span className=" font-Jakarta font-medium text-[8px] text-dark_green/70">
                          NGN
                        </span>
                        <p className=" font-Jakarta font-semibold text-base text-dark_green/70">
                          {serviceState.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green/70">
                        Platform fees
                      </p>
                      <div className="flex items-start gap-1">
                        <span className=" font-Jakarta font-medium text-[8px] text-dark_green/70">
                          NGN
                        </span>
                        <p className=" font-Jakarta font-semibold text-base text-dark_green/70">
                          {Number(serviceState.price) * 0.1}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green/70">
                        At serviceState completion, you get{" "}
                      </p>
                      <div className="flex items-start gap-1">
                        <span className=" font-Jakarta font-medium text-[8px] text-dark_green/70">
                          NGN
                        </span>
                        <p className=" font-Jakarta font-semibold text-base text-dark_green/70">
                          {Number(serviceState.price) - Number(serviceState.price) * 0.1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button onClick={() => {
                    setServiceState(prevState => ({
                        ...prevState,
                        accepted: true
                    }))


                }} className=" bg-primary_blue hover:bg-primary_blue text-white hover:text-white px-[10px] rounded-md outline-none">
                  Accept request
                </Button>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button className=" bg-transparent hover:bg-transparent text-dark_green/70 hover:text-dark_green/70 border border-dark_green/70  px-[10px] rounded-md outline-none">
                  Decline
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col gap-[35px] items-center justify-center max-h-[80%] lg:max-h-full top-[45%]  overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar h-fit">
                <div className="flex items-center justify-center gap-[10px] ">
                  <Avatar>
                    <AvatarImage src={Dmitry} alt="avatar" />
                  </Avatar>
                  <div className="fle items-center gap-1">
                    <p className=" font-Jakarta font-semibold text-base text-dark_green">
                      Taylor Kingston
                    </p>
                    <p className=" font-Jakarta font-normal text-xs text-dark_green/70 flex items-center gap-2">
                      <MapPin size={12} />
                      Lagos, NG
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <h1 className=" font-Jakarta font-bold text-xl text-center text-dark_green">
                    Decline serviceState request
                  </h1>
                  <p className=" font-Jakarta font-normal text-xs text-center text-dark_green/70">
                    To enhance user experience on XHIBIT, could you kindly share
                    the reason for your decline? Your feedback helps us improve
                  </p>
                </div>
                <div className=" w-[330px] h-[300px] flex flex-col rounded-md justify-evenly items-center bg-dark_green/10">
                  {declineReasons.map((reason, index) => (
                    <div
                      key={index}
                      className={cn(
                        " p-3 font-Jakarta text-center font-medium cursor-pointer text-base text-dark_green/70 border rounded-md bg-transparent ",
                        selectedReasons.includes(reason) &&
                          "border-primary_blue text-primary_blue"
                      )}
                      onClick={() => {
                        if (selectedReasons.includes(reason)) {
                          setSelectedReasons(
                            selectedReasons.filter((r) => r !== reason)
                          );
                        } else {
                          setSelectedReasons([...selectedReasons, reason]);
                        }
                      }}
                    >
                      {reason}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-[50px]">
                  <Button
                    type="submit"
                    onClick={() => {
                        setServiceState(prevState => ({
                            ...prevState,
                            accepted: false
                          }));
                        }}
                    className=" w-fit h-10 bg-accent_red hover:bg-accent_red font-Jakarta text-base text-white font-medium "
                  >
                    Decline request
                  </Button>
                  <DialogClose>
                    <Button
                      type="submit"
                      className=" w-[77px] h-10 bg-transparent hover:bg-transparent font-Jakarta text-base text-dark_green/70 font-medium "
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
                    </>

                ) : (
                    serviceState.accepted ? (
                        <Button className=" bg-primary_blue flex items-center gap-2 hover:bg-primary_blue text-white hover:text-white px-[10px] rounded-md outline-none">
                        Request Accepted 
                        <CheckCircle className=" h-3 w-3 " />
                      </Button>
                    ) : (
                        <Button
                        type="submit"
                        className=" w-fit h-10 bg-accent_red hover:bg-accent_red font-Jakarta text-base text-white font-medium "
                      >
                        Declined
                      </Button>

                    )

                )
            }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;
