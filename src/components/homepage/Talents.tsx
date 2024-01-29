import React, { FC } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { features } from "@/constants";
import { Card } from "../ui/card";
import { UnderlineCurve } from "@/assets";

const Talents: FC = () => {
  return (
    <div className="w-full bg-home_gradient">
      <div className="w-[90%] mx-auto flex flex-col">
        <div className="  flex flex-col gap-[30px] pt-[42px] items-center z-20">
          <div className="flex flex-col gap-[20px] items-center">
            <p className=" font-Jakarta text-white/70 font-normal text-[13px] md:text-base leading-6">
              Made for tech talents and sourcing
            </p>
            <div className="flex flex-col items-center gap-[0.5px]   ">
              <h1 className=" font-Jakarta text-white font-bold text-[16px] md:text-[42px] leading-10">
                Shaping the future of talent
                <span className=" md:hidden">{""} sourcing</span>
              </h1>
              <img src={UnderlineCurve} alt="" className="" />

              <h1 className=" hidden md:flex font-Jakarta text-white font-bold  text-[42px] leading-10">
                sourcing
              </h1>
            </div>
            <p className=" font-Jakarta text-white/70 text-center font-normal text-[13px] md:text-base lg:text-xl leading-6 ">
              Our commitment to finding the best tech talent is unwavering. We
              combine technical testing, and portfolio reviews to ensure that we
              source the most qualified professionals who align perfectly with
              your needs. Count on us to deliver the tech talent you need to
              drive your projects forward."
            </p>
          </div>
          <Button className=" font-Jakarta text-center flex gap-1 text-[16px]  font-normal text-white bg-primary_blue px-5 py-[10px] md:py-[14px] items-center rounded-[5px] hover:bg-primary_blue hover:text-white outline-none hover:outline-none ">
            Get access to 4,958 tech talents
            <ArrowRight className=" text-white text-[20px]" />
          </Button>
        </div>
        <div className="rectangle-lower-clip-path bg-[#8E9FAA] rounded-sm pt-[170px] pb-10 px-3 flex flex-col gap-[30px] md:flex-row md:flex-wrap md:justify-around -mt-24 lg:-mt-16 z-10 ">
          {features.map((feature, index) => (
            <Card
              key={index}
              className=" bg-[#060D1180] flex flex-col justify-center border-none shrink-0 grow-0 md:w-[310px] lg:w-[384px] items-center gap-5  px-[22px] py-[102px] rounded-[10px] backdrop-blur-xl"
            >
              <img src={feature.img} alt="" className=" text-[41px]" />
              <h1 className=" font-Jakarta text-white font-medium text-center text-[16px]">
                {feature.title}
              </h1>
              <p className=" font-Jakarta text-white/70 text-[13px] font-normal leading-6 text-center">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talents;
