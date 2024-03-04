import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Coinbase } from "@/assets";

const UserExperience: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Experience
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            <div className="flex gap-1 items-center">
              <img src={Coinbase} alt="" className=" h-10 w-10 object-cover" />
              <div className=" flex flex-col gap-1">
                <p className=" font-Jakarta font-medium leading-[28px] text-[20px] text-dark_green ">
                  Software Dev
                </p>
                <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                  Coinbase
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <img src={Coinbase} alt="" className=" h-10 w-10 object-cover" />
              <div className=" flex flex-col gap-1">
                <p className=" font-Jakarta font-medium leading-[28px] text-[20px] text-dark_green ">
                  Software Dev
                </p>
                <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                  Coinbase
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <img src={Coinbase} alt="" className=" h-10 w-10 object-cover" />
              <div className=" flex flex-col gap-1">
                <p className=" font-Jakarta font-medium leading-[28px] text-[20px] text-dark_green ">
                  Software Dev
                </p>
                <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                  Coinbase
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
          View all
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserExperience;
