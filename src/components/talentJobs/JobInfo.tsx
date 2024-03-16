import { FC } from "react";
import { Separator } from "../ui/separator";
import { Dmitry } from "@/assets";
import { Clock, MapPinIcon, Sparkles, Star } from "lucide-react";
import { RiHomeOfficeLine } from "react-icons/ri";
import { PiBagSimple } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { JobType } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useJobsDisplay } from "@/store";
import { Share } from "..";

interface Props {
  job: JobType;
}

const JobInfo: FC<Props> = ({ job }) => {
    const detailsToShow = useJobsDisplay((store) => store.detailsToShow)
  return (
    <div className={cn(" w-full md:w-[45%] lg:w-[30%] flex gap-5 flex-col ", detailsToShow !== "info" && window.innerWidth <= 768 ? " hidden" : "flex"  )}>
         <Share className=" flex md:hidden" />
      <div className="flex flex-col gap-3">
        <div className="w-full flex justify-between items-start">
          <div className="flex items-center gap-2">
            <img
              src={job.logo}
              alt=""
              className=" h-[60px] w-[60px] object-cover"
            />
            <p className=" font-Jakarta font-semibold text-base">{job.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className=" font-Jakarta font-medium text-[13px] leading-4  text-[#4DBB9B]">
              Good match!
            </p>
            <img src={Dmitry} alt="" className=" h-[30px] w-[30px]" />
          </div>
        </div>
        <p className=" font-Jakarta font-medium text-[20px] leading-7">
          {job.role}
        </p>
        <div className="flex md:justify-between gap-2 md:gap-5 items-center flex-wrap">
          <p className=" font-Jakarta text-[13px] items-center  font-normal flex gap-2 text-dark_green/50">
            <MapPinIcon className="w-[15px] h-[15px] text-dark_green/50" />
            {job.location}{" "}
          </p>
          <p className=" font-Jakarta text-[13px] items-center  font-normal flex gap-2 text-dark_green/50">
            <RiHomeOfficeLine className="w-[15px] h-[15px] text-dark_green/50" />
            {job.jobType}{" "}
          </p>
          <p className=" font-Jakarta text-[13px] items-center  font-normal flex gap-2 text-dark_green/50">
            <Clock className="w-[15px] h-[15px] text-dark_green/50" />
            {job.minDuration}{" "}
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between w-full">
        <div className=" flex flex-col gap-[10px] ">
          <p className=" font-Jakarta font-medium text-[13px] leading-4  text-dark_green">
            Rate
          </p>
          <p className=" font-Jakarta font-medium text-base  text-primary_blue">
            {job.pay}
          </p>
        </div>

        <div className=" flex flex-col gap-[10px] ">
          <p className=" font-Jakarta font-medium text-[13px] leading-4  text-dark_green">
            Min Experience
          </p>
          <p className=" font-Jakarta font-medium text-base  text-dark_green">
            2+ years
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between">
        <div className=" flex flex-col gap-[10px]">
          <p className=" font-Jakarta font-medium text-[13px] leading-4  text-dark_green">
            Rate
          </p>
          <p className=" font-Jakarta font-medium flex items-center gap-2 text-base  text-dark_green/70">
            <PiBagSimple className="w-[15px] h-[15px] text-dark_green/70" />
            Design
          </p>
        </div>

        <div className=" flex flex-col gap-[10px]">
          <p className=" font-Jakarta font-medium text-[13px] leading-4  text-dark_green">
            Job type
          </p>
          <p className=" font-Jakarta font-medium flex items-center gap-2 text-base  text-dark_green/70">
            <PiBagSimple className="w-[15px] h-[15px] text-dark_green/70" />
            {job.contractType}
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex justify-start flex-col gap-4">
        <p className=" font-Jakarta font-medium text-[13px] leading-4  text-dark_green">
          Rate
        </p>

        <div className="flex gap-2 flex-col">
          <p className=" font-Jakarta font-normal text-[13px] leading-4  text-dark_green">
            Top skills
          </p>
          <div className="flex gap-2 flex-wrap">
            {job.skills
              .filter((skill) => skill.stared)
              .map((skill, index) => (
                <Badge
                  key={index}
                  className={`flex gap-3 rounded-[20px] rounded-br-[0px] ${
                    skill.stared
                      ? "text-primary_blue bg-primary_blue/5 hover:bg-primary_blue/5 "
                      : " bg-dark_green/10 hover:bg-dark_green/1`0  text-dark_green"
                  }`}
                >
                  {skill.stared && (
                    <span className="text-primary_blue">
                      <Star
                        fill="rgb(0,133,255)"
                        className="w-[15px] h-[15px] text-primary_blue"
                      />
                    </span>
                  )}
                  {skill.skill}
                </Badge>
              ))}
          </div>
        </div>

        <div className="flex gap-2 flex-col">
          <p className=" font-Jakarta font-normal text-[13px] leading-4  text-dark_green">
            Other skills
          </p>
          <div className="flex gap-2 flex-wrap">
            {job.skills
              .filter((skill) => !skill.stared)
              .map((skill, index) => (
                <Badge
                  key={index}
                  className={`flex gap-3 rounded-[20px] rounded-br-[0px] ${
                    skill.stared
                      ? "text-primary_blue bg-primary_blue/5 hover:bg-primary_blue/5 "
                      : " bg-dark_green/10 hover:bg-dark_green/1`0  text-dark_green"
                  }`}
                >
                  {skill.stared && (
                    <span className="text-primary_blue">
                      <Star
                        fill="rgb(0,133,255)"
                        className="w-[15px] h-[15px] text-primary_blue"
                      />
                    </span>
                  )}
                  {skill.skill}
                </Badge>
              ))}
          </div>
        </div>

        <div className="flex gap-5 items-center mx-auto">
          <Button className=" bg-primary_blue flex gap-2 items-center text-white p-4 hover:bg-white hover:text-primary_blue border hover:border-primary_blue">
            Apply
            <Sparkles />
          </Button>

          <Button className="bg-transparent text-dark_green/50 border border-dark_green/50 p-4 hover:bg-transparent hover:text-dark_green/50 hover:border-dark-green/50">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
