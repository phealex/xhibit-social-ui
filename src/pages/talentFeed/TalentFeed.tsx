import { JobCard, Links, NewPost, UserCard, UserExperience, UserPosts, UserProjects, UserSkills, UserTools } from "@/components";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { foundJobs, talentFeedPosts } from "@/constants";
import Feed from "@/components/talentFeed/Feed";
import { Button } from "@/components/ui/button";

const TalentFeed: FC = () => {
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
      <div className="w-[90%] lg:w-[80%] mx-auto flex gap-5">
        <section className="w-[290px] flex-shrink-0 hidden lg:flex flex-col gap-5">
          <UserCard />
          <div className=" bg-white p-6 w-full rounded-[5px]">
            <Button className=" bg-primary_blue hover:bg-primary_blue text-white w-full h-8 text-center font-Jakarta font-medium text-[13px] leading-6 uppercase ">
              Add new project
            </Button>
          </div>
          <UserProjects />
          <UserSkills />
          <UserTools />
          <UserExperience />
          <UserPosts />
          <Links />
        </section>
        <section className="flex flex-1 flex-col gap-10 w-full">
          <NewPost />
          <div className=" w-full flex gap-5 flex-col ">
            <div className="flex w-full items-center">
              <Separator className=" flex flex-1 flex-shrink w-full bg-dark_green/10" />
              <div className="flex gap-1 items-center">
                <p className=" font-Jakarta text-nowrap text-[13px] text-dark_green font-medium  ">
                  Sort by:
                </p>
                <Select>
                  <SelectTrigger className="!p-0 !h-fit bg-transparent border-none outline-none ring-transparent font-Jakarta text-[13px] placeholder:text-primary_blue text-primary_blue font-medium  ">
                    <SelectValue placeholder="Trending" />
                  </SelectTrigger>
                  <SelectContent className=" bg-transparent">
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="flex flex-1 flex-shrink w-full bg-dark_green/10" />
            </div>
            {
              talentFeedPosts.map((feed, index) => (
                <Feed key={index} feed={feed} />
              ))
            }
          </div>
          <div className="bg-white  flex flex-col gap-5 py-[30px]">
            <div className="flex flex-col md:flex-row gap-5 items-start md:items-center  px-[30px]">
              <p className=" font-Jakarta font-medium text-[16px] text-dark_green">
                Find your next gig
              </p>
              <button type="button" className=" w-[230px] h-[32px] bg-primary_blue uppercase rounded-[5px] text-white font-Jakarta text-[13px] font-medium leading-6">
                browse all jobs
              </button>
            </div>
            <div className="flex gap-2 items-center ">
              <Separator className="flex flex-1 flex-shrink w-full bg-dark_green/10" />
              <p className=" font-Jakarta text-[13px] text-dark_green font-medium  ">
                Jobs for you
                </p>
              <Separator className="flex flex-1 flex-shrink w-full bg-dark_green/10" />
            </div>
            <div className="flex gap-5 flex-col p-6 ">
            {foundJobs.map((job, index) => (
              <JobCard key={index} job={job} showSignIn={false} />
           
            ))}
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TalentFeed;
