import { Separator } from "@/components/ui/separator";
import { FC } from "react";

const Career: FC = () => {
  return (
    <div className=" bg-home_gradient w-full py-[50px]">
      <div className="flex flex-col gap-[100px] w-[90%]  mx-auto">
        <div className="flex justify-between md:justify-center md:gap-5">
          <h1 className="text-[31px] font-Jakarta text-white leading-[44px] lg:text-[64px] lg:leading-[90px] font-semibold">
            XHIBIT
          </h1>
          <Separator orientation="vertical" className=" text-white " />
          <div className="flex flex-col gap-1 lg:my-auto">
            <p className=" text-white/70 font-Jakarta text-[16px] lg:text-[25px] leading-9 font-normal">
              We're actively searching.
            </p>
            <p className=" text-white/70 font-Jakarta text-[16px] lg:text-[25px] leading-9 font-normal">
              Go ahead and apply.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-center text-white font-Jakarta font-semibold text-[20px] md:text-[31px] leading-7 ">
            Welcome to our career page
          </h1>
          <p className=" font-Jakarta text-white/80 text-[20px] leading-7 font-normal text-center">
            At XHIBIT, we believe in fostering a work environment where passion
            meets purpose. Join our dynamic team and embark on a journey where
            innovation, collaboration, and individual growth are not just
            encouraged but celebrated. <br/> Explore the opportunities that align with
            your skills and aspirations. We're committed to empowering our
            employees, nurturing their talents, and creating a workplace that
            inspires excellence. <br /> Ready to make a difference? Browse our current
            openings and discover how you can contribute to the exciting
            chapters of our company's success story. <br/> Your career path awaits –
            let's shape the future together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
