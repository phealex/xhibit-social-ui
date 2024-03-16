import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Bookmark, Clock, MapPinIcon, SparkleIcon, Star } from "lucide-react";
import { RiHomeOfficeLine } from "react-icons/ri";
import { PiBagSimple } from "react-icons/pi";
import { Button } from "../ui/button";
import { JobType } from "@/types";
import { Badge } from "../ui/badge";
import { Link, useNavigate } from "react-router-dom";

interface JobCardProps {
  job: JobType;
  showSignIn?: boolean;
}

const JobCard: FC<JobCardProps> = ({ job, showSignIn }) => {

  const navigate = useNavigate();



  return (
    <Card className=" min-w-fit max-w-full bg-white border-2 hover:border-home_border_gradient_color_2">
      <CardContent className="p-2 flex gap-2 lg:p-6 ">
        <img
          src={job.logo}
          alt=""
          className=" w-[30px]  h-[30px] lg:w-[60px] lg:h-[60px]   "
        />
        <div className="flex flex-col gap-10 md:flex-row md:justify-between w-full">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className=" font-Jakarta flex flex-col gap-2 text-[16px] text-dark_green  font-semibold ">
                {job.name}
                <span className=" text-[13px]">{job.role}</span>
              </h1>
              <p className="font-Jakarta  text-[13px] text-primary_blue font-medium">
                {job.pay}
              </p>
            </div>
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
              <p className=" font-Jakarta text-[13px] items-center  font-normal flex gap-2 text-dark_green/50">
                <PiBagSimple className="w-[15px] h-[15px] text-dark_green/50" />
                {job.contractType}{" "}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {job.skills.map((skill, index) => (
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
          <div className="flex justify-between items-center md:flex-col-reverse ">
            <p className="ml-auto hidden lg:flex font-Jakarta text-[13px] font-medium text-red-400">
              1 week ago
            </p>
            <div className="flex gap-5">
              {showSignIn && (
                <Link to={"/auth/login"}>
                  <Button className="hidden lg:flex bg-transparent text-dark_green/50 border border-dark_green/50 p-4 hover:bg-transparent hover:text-dark_green/50 hover:border-dark-green/50">
                    Sign in to apply
                  </Button>
                </Link>
              )}

              <Button
                onClick={() => {
                  navigate(`/talent/jobs/${job.id}`)
                
                }}
                className=" bg-primary_blue text-white p-4 hover:bg-white hover:text-primary_blue border hover:border-primary_blue"
              >
                View job
              </Button>
            </div>

            <div className="flex gap-1 items-center">
              <Button className=" text-primary_blue bg-transparent hover:bg-transparent outline-none border-none flex gap-2 ">
                {/* <img src={Sparkle} alt="" className=" h-[18px]  w-[18px] " /> */}
                <SparkleIcon
                  fill="rgba(117,89,229,1)"
                  className="w-[18px] h-[18px] text-home_border_gradient_color_1 "
                />
                Actively hiring
              </Button>
              <Bookmark className="w-[20px] h-[20px] text-dark_green/50" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
