import { howToUse } from "@/constants";
import { HiSparkles } from "react-icons/hi";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FC } from "react";

const HowToUse: FC = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-[50px]">
      <div className="flex gap-1 mx-auto items-start font-Jakarta text-[16px] font-bold leading-normal text-center text-white md:text-[42px] md:font-bold md:leading-[48px]">
        How to use Xhibit
        <HiSparkles className="text-[20px text-white" />
      </div>
      <div className="flex flex-col md:flex-row gap-[50px] items-center max-h-fit">
        {howToUse.map((item, index) => (
          <div className="relative p-0.5 w-full h-full lg:w-[40%] lg:mx-auto " key={index}>
            <div
              className={`absolute inset-0 bg-gradient-to-r !border-none ${
                index === 1
                  ? "from-[#323C45B2] to-home_border_gradient_color_1 "
                  : "from-home_border_gradient_color_2"
              }   rounded-[27px]`}
            ></div>
            <Card className="relative bg-[#323C45] w-full rounded-[27px] !border-none h-full   ">
              <CardContent className="flex flex-col gap-[50px] !px-10 !py-[70px] w-full max-w-fit  ">
                <div className="flex flex-col gap-5">
                  <h1 className=" font-Jakarta text-[16px] font-semibold leading-normal text-white">
                    {item.title}
                  </h1>
                  <ul className="  list-disc list-outside font-Jakarta text-white/70 font-normal leading-6 text-[13px]">
                    {item.list.map((opt, index) => (
                      <li className="" key={index}>
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="font gap-2 bg-primary_blue outline-none max-w-fit hover:bg-primary_blue hover:outline-none">
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
