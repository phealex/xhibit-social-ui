import { Search, Sparkles } from "lucide-react";
import React, { FC } from "react";
import { Button } from "../ui/button";

const Hero: FC = () => {
  return (
    <div className="flex flex-col">
      <main className="h-screen">
        <div className=" bg-noise-background bg-no-repeat w-full h-full">
          <div className="bg-full h-full bg-home_gradient ">
            <div className="w-[90%] gap-5 mx-auto flex flex-col md:flex-row py-[50px]">
              <div className="flex flex-col w-full gap-[30px] md:w-[60%]">
                <h1 className=" font-Jakarta font-normal text-center text-[42px] leading-[48px] text-white">
                  Recruit top tech experts <br /> Drive innovation, swiftly.
                </h1>
                <p className="text-center font-Jakarta text-[13px] font-normal leading-6 text-white/70">
                  At XHIBIT, we believe in the limitless potential of tech
                  talent. We're on a mission to empower the next generation of
                  innovators, thinkers, and creators. Join us in shaping the
                  future of technology and be part of something extraordinary.
                </p>
                <div className="flex flex-col gap-3 ">
                  <div className="relative p-0.5 rounded-[60px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-[60px]"></div>
                    <div className="flex w-full relative gap-2 justify-between p-3 bg-home_gradient items-center rounded-[60px]">
                      <Search className="w-[18px] h-[18px] flex flex-shrink-0 text-white/70" />
                      <input
                        type="text"
                        placeholder="Try Java Developer, React..."
                        className="bg-transparent text-[13px] font-medium flex-shrink flex-1 text-white/70 placeholder-white/70 outline-none"
                      />
                      <Button className=" font-Jakarta text-center gap-1 text-[13px] font-semibold text-[#323C45]  bg-white px-3 py-[6px]  ">
                        <Sparkles className="text-[#7559E5] h-[16px] w-[16px] " />
                        HIRE TALENT
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start">
                    <p className="">
                    Trusted by 50k+ users
                    </p>

                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
