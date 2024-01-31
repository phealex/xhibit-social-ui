import { Thunderbolt, UnderlineCurve } from "@/assets";
import { findingTopTalents } from "@/constants";
import { FC } from "react";

const Categories: FC = () => {
  return (
    <div className="W-[90%] mx-auto py-10 flex flex-col gap-[50px] items-center ">
      <div className="flex flex-col gap-5">
        <div className="flex gap-1 flex-col font-Jakarta text-center text-white items-center text-[16px] font-bold leading-normal">
          Find top talents to hire today
          <img src={UnderlineCurve} alt="" className="" />
        </div>
        <div className="flex gap-5 items-center flex-col">
          {findingTopTalents.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 font-Jakarta text-white text-[16px] font-semibold leading-normal"
            >
              <img src={Thunderbolt} alt="" className="" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Categories;
