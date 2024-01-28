import React, { FC } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Talents: FC = () => {
  return (
    <div className="w-full bg-home_gradient">
      <div className="w-[90%] mx-auto flex flex-col">
        <div className=" rectangle-clip-pathflex flex-col gap-[30px] pt-[42px] pb-[129px] md:py-[100px] items-center">
          <div className="flex flex-col gap-[20px] items-center">
            <p className=" font-Jakarta text-white/70 font-normal text-[13px] md:text-base leading-6">
              Made for tech talents and sourcing
            </p>
            <div className="flex flex-col gap-[0.5px] md:hidden  ">
              <h1 className=" font-Jakarta text-white font-bold text-base">
                Shaping the future of talent sourcing
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="259"
                height="16"
                viewBox="0 0 259 16"
                fill="none"
              >
                <path
                  d="M2.14689 13.9987C46.6856 7.23155 88.3011 4.45569 133.218 3.63079C166.412 3.0212 203.253 1.64382 236.126 5.46115C242.71 5.83476 248.725 7.08991 256.089 8.53943"
                  stroke="url(#paint0_linear_2104_17274)"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2104_17274"
                    x1="19.5"
                    y1="1.33594"
                    x2="52.9592"
                    y2="91.5207"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6ED4FE" />
                    <stop offset="1" stop-color="#788DFA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="hidden md:flex flex-col items-center gap-[0.5px]   ">
              <h1 className=" font-Jakarta text-white font-bold text-base text-[42px] leading-10">
                Shaping the future of talent sourcing
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="259"
                height="16"
                viewBox="0 0 259 16"
                fill="none"
              >
                <path
                  d="M2.14689 13.9987C46.6856 7.23155 88.3011 4.45569 133.218 3.63079C166.412 3.0212 203.253 1.64382 236.126 5.46115C242.71 5.83476 248.725 7.08991 256.089 8.53943"
                  stroke="url(#paint0_linear_2104_17274)"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2104_17274"
                    x1="19.5"
                    y1="1.33594"
                    x2="52.9592"
                    y2="91.5207"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6ED4FE" />
                    <stop offset="1" stop-color="#788DFA" />
                  </linearGradient>
                </defs>
              </svg>
              <h1 className=" font-Jakarta text-white font-bold text-base text-[42px] leading-10">
                sourcing
              </h1>
            </div>
            <p className=" font-Jakarta text-white/70 text-center font-normal text-[13px] md:text-base lg:text-xl leading-6">
              Our commitment to finding the best tech talent is unwavering. We
              combine technical testing, and portfolio reviews to ensure that we
              source the most qualified professionals who align perfectly with
              your needs. Count on us to deliver the tech talent you need to
              drive your projects forward."
            </p>
          </div>
          <Button className=" font-Jakarta text-center flex gap-1 text-[16px]  font-normal text-white bg-primary_blue px-5 py-[10px] items-center rounded-[5px] hover:bg-primary_blue hover:text-white outline-none hover:outline-none ">
            Get access to 4,958 tech talents
            <ArrowRight className=" text-white text-[20px]" />
          </Button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Talents;
