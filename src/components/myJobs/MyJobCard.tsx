import React, { FC } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Separator } from "../ui/separator";
import { Dmitry } from "@/assets";
import { ViewApplicants } from "..";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMyJobsState } from "@/store";


const MyJobCard: FC = () => {
  return (
    <div className=" bg-dark_green/5 min-h-[200px] w-full flex p-5 rounded-lg flex-col gap-[30px]">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-1">
          <span className="bg-accent_green w-[10px] h-[10px] inline-block rounded-full ">
            {""}
          </span>
          <p className=" font-Jakarta font-normal text-xs text-dark_green">
            Active
          </p>
        </div>

        <HoverCard>
          <HoverCardTrigger>
            <BsThreeDots className="text-xl cursor-pointer" />
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex flex-col gap-2 bg-white p-3 w-fit">
              <button onClick={() => useMyJobsState.setState({
                isEditJob: true
              })} className="font-Jakarta font-normal text-left w-fit text-xs text-dark_green">
                Edit
              </button>
              <button className="font-Jakarta font-normal text-left w-fit text-xs text-dark_green">
                Delete
              </button>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 flex-col">
          <h1 className=" font-Jakarta font-medium text-[31px] leading-[44px] text-dark_green">
            Product designer
          </h1>
          <div className="flex gap-3 items-center">
            <p className=" font-Jakarta font-normal text-xs text-dark_green">
              4 Applicants
            </p>
            <Separator orientation="vertical" className="h-[26px]" />
            <p className=" font-Jakarta font-normal text-xs text-dark_green">
              3 yr
            </p>
            <p className=" font-Jakarta font-normal text-xs text-dark_green">
              Remote
            </p>
            <p className=" font-Jakarta font-normal text-xs text-dark_green">
              $40/hr
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={Dmitry} alt="" className="h-[70px] w-[70px] rounded-full" />
          <div className="flex h-full justify-between flex-col">
            <h1 className=" font-Jakarta font-medium text-[31px] leading-[44px] text-dark_green">
              Madge Montgomery
            </h1>
            <p className=" font-Jakarta font-normal text-xs text-dark_green">
              Owner
            </p>
          </div>
        </div>
        <ViewApplicants />
      </div>
    </div>
  );
};

export default MyJobCard;
