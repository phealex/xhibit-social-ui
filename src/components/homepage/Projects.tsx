import { UnderlineCurve } from "@/assets";
import { FC } from "react";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

const Projects: FC = () => {
  return (
    <div className=" w-full bg-home_gradient py-[50px] ">
      <div className="w-[90%] mx-auto flex flex-col bg-gradient-to-b from-[rgba(142,159,170,0.20)0%] via-[rgba(142,159,170,0.20)100%] to-[rgba(6,13,170.50)] py-[35px] gap-10  rounded-[25px]">
        <div className="flex flex-col gap-[30px] items-center ">
          <h1 className="flex flex-col font-Jakarta text-[16px] font-bold text-center text-white">
            Our Projects
            <img src={UnderlineCurve} alt="" className="" />
          </h1>
          <p className=" text-white/70 font-Jakarta text-[13px] font-normal leading-6 w-[70%] mx-auto text-center">
            We are the only website that provides this information so that you
            can find the job that really suits you and the whole planet becomes
            your playground!
          </p>
          <Button className="flex gap-1 px-5 py-[10px] bg-primary_blue hover:bg-primary_blue border-none outline-none rounded-[5px] items-center" >
            <Sparkles className="text-white text-[20px]" />
            Hire talents
          </Button>
        </div>
        <div className="flex gap-4 items-center w-[90%] mx-auto ">
            <Button className="font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]" >
                Design
            </Button>
            <Button className="font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]" >
                Development
            </Button>
            <Button className="font-Jakarta font-semibold text-[16px] leading-normal text-white hover:text-white px-4 py-3 bg-transparent hover:bg-transparent" >
                View All
            </Button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Projects;
