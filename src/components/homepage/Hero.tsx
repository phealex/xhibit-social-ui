import { Search, Sparkles, Star } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  Airbnb,
  Alexander,
  Binance,
  Flutterwave,
  Google,
  Hawkins,
  Tesla,
} from "@/assets";

const Hero: FC = () => {
  return (
    <div className="flex flex-col ">
      <main className="">
        <div className=" bg-noise-background bg-no-repeat w-full h-full">
          <div className="bg-full h-full bg-home_gradient pb-10 ">
            <div className="w-[90%] gap-2 lg:gap-5 mx-auto flex items-center md:items-start flex-col md:flex-row py-[50px] sm:py-[30px] h-full lg:my-auto">
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
              <div className="relative bg-hero-glow bg-no-repeat bg-contain bg-center flex-1 py-10 md:py-5  w-full sm:w-4/6 md:w-[80%] ">
                <div className="relative ">
                  <div className="flex w-full  justify-start">
                    <div className="flex flex-col gap-1 items-center">
                      <p className=" font-Jakarta text-[16px] font-medium flex flex-col gap-0.5  text-white/90">
                        Guy Hawkins
                        <span className="text-[13px] font-light text-white/70">
                          Software Engineer
                        </span>
                      </p>
                      <img src={Hawkins} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex w-full gap-2 justify-end">
                    <div className="flex flex-col gap-1 items-center">
                      <img src={Alexander} alt="" className="" />
                      <p className=" font-Jakarta text-[16px] font-medium flex flex-col gap-0.5  text-white/90">
                        Leslie Alexander
                        <span className="text-[13px] font-light text-white/70">
                          Talent Manager, IBM
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className=" bg-sub-hero  bg-cover lg:bg-cover bg-no-repeat flex flex-col gap-1 md:gap-7 py-[7px] md:py-[40px] lg:py-[80px] justify-center items-center w-full mx-auto -mt-10 ">
        <div className="flex w-[90%] gap-5 items-center">
          <div className=" bg-home_border_gradient_color_1 h-[2px] w-full shrink"></div>
          <h1 className="flex shrink-0 font-Jakarta text-[13px] md:text-[25px] font-medium text-white leading-9">
            Trusted by foremost global corporations
          </h1>
          <div className=" bg-home_border_gradient_color_2 h-[2px] w-full shrink"></div>

        </div>
        <div className="flex items-center w-[90%] justify-between ">
          <img src={Airbnb} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Google} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Flutterwave} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Binance} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Tesla} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
