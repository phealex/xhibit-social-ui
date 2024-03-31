import { Thunderbolt, UnderlineCurve } from "@/assets";
import { categories, findingTopTalents } from "@/constants";
import { FC } from "react";

const Categories: FC = () => {
  return (
    <div className="w-[90%] mx-auto py-10 pb-[80px] flex flex-col gap-[50px] items-center ">
      <div className="flex flex-col gap-5">
        <div className="flex gap-1 flex-col font-Jakarta text-center text-white items-center text-[16px] md:text-[42px] font-bold leading-normal">
          Find top talents to hire today
          <img src={UnderlineCurve} alt="" className="" />
        </div>
        <div className="flex gap-5 items-center flex-col md:flex-row md:flex-wrap md:mx-auto md:justify-center">
          {findingTopTalents.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 font-Jakarta text-white text-xs md:text-[16px] font-semibold leading-normal  text-center lg:w-[40%] lg:text-justify"
            >
              <img src={Thunderbolt} alt="" className="" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-y-10 items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="hexagon-clip-path group relative bg-[#323C45] rounded-[10px] w-[193px] lg:w-[210px] h-[171px] lg:h-[195px] overflow-hidden"
          >
            <img
              src={item.img}
              alt=""
              className="top-0 bottom-0 object-cover h-full w-full opacity-30 group-hover:opacity-100 transition-opacity duration-200 ease-in-out z-10"
            />
            <div className="flex gap-2 items-center justify-center cursor-pointer h-full w-full absolute top-0 left-0 z-20">
              <item.icon className="w-[20px] h-[20px] text-white" />
              <p className="font-Jakarta text-[16px] leading-normal text-white font-bold">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
