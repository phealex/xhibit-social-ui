import { howToUse } from "@/constants";
import React from "react";
import { HiSparkles } from "react-icons/hi";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const HowToUse = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-[50px]">
      <div className="flex gap-1 items-start font-Jakarta text-[16px] font-bold leading-normal text-center text-white">
        How to use Xhibit
        <HiSparkles className="text-[20px text-white" />
      </div>
      <div className="flex flex-col gap-[50px] items-center">
        {howToUse.map((item, index) => (
          <div className="relative p-0.5 w-full " key={index}>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                index % 2
                  ? "from-home_border_gradient_color_2"
                  : "to-home_border_gradient_color_1 "
              }   rounded-[27px]`}
            ></div>
            <Card className="relative bg-[#323C45B2] w-full ">
              <CardContent className="flex flex-col gap-[50px] !px-6 !py-[70px] w-full md:mx-auto md:items-center md:w-3/5 md:justify-center ">
                <div className="flex flex-col gap-5">
                  <h1 className=" font-Jakarta text-[16px] font-semibold leading-normal text-white">
                    {item.title}
                  </h1>
                  <ul className=" list-item list-decimal list-inside">
                    {item.list.map((opt) => (
                      <li className="">{opt}</li>
                    ))}
                  </ul>
                </div>
                <Button className="font gap-2 bg-primary_blue outline-none hover:bg-primary_blue hover:outline-none">
                  {item.buttonIcon && <item.buttonIcon />}
                  {item.buttonText}
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
