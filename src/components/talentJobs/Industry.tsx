import { startups } from "@/assets";
import { topStartups } from "@/constants";
import { FC } from "react";
import { EmergingStartup } from "..";

const Industry: FC = () => {
  return (
    <div className="flex flex-col gap-[50px]  ">
      <div className="flex gap-[60px] items-center justify-between ">
        <div className="flex flex-col gap-3">
          <h1 className=" font-Jakarta font-semibold text-[25px] leading-9 text-dark_green">
            Top startups within ten emerging industries in 2023.
          </h1>
          <p className="font-Jakarta font-normal text-[13px] leading-6 text-dark_green/70">
            The Hustle rounded up a list of top startups in 2023, all of which
            have made impressive strides in their business model, funding,
            market share, and technology. However, with thousands of startups
            launching and pushing forward around the globe, this list is by no
            means exhaustive. The startups below are not officially ranked or
            listed in any particular order.
          </p>
        </div>
        <img
          src={startups}
          alt=""
          className=" h-[166px] w-[345px] object-cover"
        />
      </div>
      <div className=" flex flex-col gap-11 w-full">
        {
            topStartups.map((startup, index) => (
                <EmergingStartup key={index} startup={startup} index={index} />
            ))
        }
      </div>
    </div>
  );
};

export default Industry;
