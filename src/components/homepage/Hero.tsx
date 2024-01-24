import { Search, Sparkles, Star } from "lucide-react";
import React, { FC } from "react";
import { Button } from "../ui/button";

const Hero: FC = () => {
  return (
    <div className="flex flex-col">
      <main className="h-screen">
        <div className=" bg-noise-background bg-no-repeat w-full h-full">
          <div className="bg-full h-full bg-home_gradient ">
            <div className="w-[90%] gap-5 mx-auto flex items-center flex-col md:flex-row py-[50px] sm:py-[30px] h-full lg:my-auto">
              <div className="flex flex-col w-full gap-[30px] lg:gap-[40px] md:w-[65%] lg:w-[60%] ">
                <h1 className=" font-Jakarta font-normal text-center sm:text-left text-[42px] leading-[48px] md:text-[58px] lg:text-[70px] md:leading-[70px] lg:leading-[98px] text-white">
                  Recruit top tech experts <br /> Drive innovation, swiftly.
                </h1>
                <p className="text-center font-Jakarta text-[13px] sm:text-base   sm:text-left lg:text-xl font-normal leading-6 text-white/70">
                  At XHIBIT, we believe in the limitless potential of tech
                  talent. We're on a mission to empower the next generation of
                  innovators, thinkers, and creators. Join us in shaping the
                  future of technology and be part of something extraordinary.
                </p>
                <div className="flex flex-col gap-3 lg:gap-6 ">
                  <div className="relative p-0.5 rounded-[60px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-[60px]"></div>
                    <div className="flex w-full relative gap-2 justify-between p-3 md:p-5 bg-home_gradient items-center rounded-[60px]">
                      <Search className="w-[18px] h-[18px] flex flex-shrink-0 text-white/70" />
                      <input
                        type="text"
                        placeholder="Try Java Developer, React..."
                        className="bg-transparent text-[13px] lg:text-[18px] font-medium flex-shrink flex-1 text-white/70 placeholder-white/70 outline-none"
                      />
                      <Button className=" font-Jakarta text-center gap-1 text-[13px] lg:text-[15px] font-semibold text-[#323C45]  bg-white px-3 py-[6px] rounded-[60px] ">
                        <Sparkles className="text-[#7559E5] h-[16px] w-[16px] " />
                        HIRE TALENT
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start">
                    <p className=" font-Jakarta text-[13px] sm:text-xl font-medium leading-6 text-white ">
                      Trusted by 50k+ users
                    </p>
                    <div className="flex gap-2">
                      <div className="flex gap-0.5">
                        <Star fill="#FFC107" className=" h-[24px] w-[24px] " />
                        <Star fill="#FFC107" className="h-[24px] w-[24px] " />
                        <Star fill="#FFC107" className="h-[24px] w-[24px] " />
                        <Star fill="#FFC107" className="h-[24px] w-[24px] " />
                        <Star fill="#FFC107" className="h-[24px] w-[24px] " />
                      </div>
                      <p className=" font-Jakarta text-[13px] sm:text-[16px]  font-medium sm:font-normal text-white leading-6">
                        4.1/5
                      </p>
                      <span className=" font-Jakarta text-[13px] font-medium sm:text-[16px] sm:font-normal leading-6 text-white/50">
                        (14k Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-hero-glow  flex-1 w-full h-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
