import { JobCard, Links, NewPost, RecruiterCard, PostedJobs, RequestedServices, ViewedTalent, ExploreTalentPool } from "@/components";
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

const RecruiterFeed: FC = () => {
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
      <div className="w-[90%] lg:w-[80%] mx-auto flex gap-5">
        <section className="w-[20%] hidden lg:flex flex-col gap-5">
          <RecruiterCard />
          <PostedJobs />
          <RequestedServices />
          <ViewedTalent />
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
            <div className="w-full">
          <ExploreTalentPool />
            </div>
      
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecruiterFeed;
