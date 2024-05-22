import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Dmitry } from "@/assets";

const TobRecruiters: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Top recruiters
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="flex gap-1 items-center h-fit" key={index}>
                <img
                  src={Dmitry}
                  alt=""
                  className=" h-[45px] w-[45px] object-cover"
                />
                <div className=" flex flex-col gap-1 h-full justify-between">
                  <p className=" font-Jakarta font-medium leading-[24px] text-[13px] text-dark_green ">
                    Lottie Austin
                  </p>
                  <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70">
                    {"Hr-Manager, Platinum Headhunters Inc".substring(0, 18)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
          View all
        </Button>
      </CardContent>
    </Card>
  );
};

export default TobRecruiters;
