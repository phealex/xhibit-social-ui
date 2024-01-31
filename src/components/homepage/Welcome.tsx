import { UnderlineCurve } from "@/assets";
import React, { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { welcome } from "@/constants";

const Welcome: FC = () => {
  return (
    <div className="flex flex-col gap-[50px] items-center w-[90%] mx-auto justify-center py-[50px]">
      <div className=" flex flex-col gap-6 items-center">
        <div className=" flex flex-col gap-1 items-center ">
          <h1 className=" font-Jakarta text-[16px] text-white font-bold leading-normal ">
            Welcome to XHIBIT
          </h1>
          <img src={UnderlineCurve} alt="" />
        </div>
        <p className=" font-Jakarta text-[13px]  font-normal text-white/70 leading-6">
          Every part of your hiring process is now supercharged
        </p>
      </div>
      <div className=" bg-hero-glow bg-center bg-contain flex flex-col gap-6 lg:flex-row ">
        {welcome.map((item, index) => (
          <div className="relative p-0.5 w-full " key={index}>
            <div className="absolute inset-0 bg-gradient-to-r max-h-fit from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-lg"></div>
            <Card className="relative bg-home_gradient w-full  ">
              <CardContent className="flex flex-col gap-5 !p-6 w-full md:mx-auto md:items-center md:w-3/5 md:justify-center ">
                <img src={item.img} alt="" className=" h-[60px] w-[60px]" />

                <div className="flex gap-1 flex-col">
                  <h1 className=" text-white font-Jakarta text-[16px] font-semibold leading-normal md:text-center">
                    {item.title}
                  </h1>
                  <p className=" font-Jakarta font-normal text-[13px] text-white/70 md:text-center ">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
