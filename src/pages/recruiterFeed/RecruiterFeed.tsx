import {
  Links,
  NewPost,
  RecruiterCard,
  PostedJobs,
  RequestedServices,
  ViewedTalent,
  ExploreTalentPool,
  ExploreProject,
  ExploreServices,
  OrganizationInfo,
  PersonalInfo
} from "@/components";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { talentFeedPosts } from "@/constants";
import Feed from "@/components/talentFeed/Feed";
import { Button } from "@/components/ui/button";
import { useRecruiterState } from "@/store";
import { cn } from "@/lib/utils";
import { Organization } from "@/assets";
import { BiEdit } from "react-icons/bi";

const RecruiterFeed: FC = () => {
  const isProfileSetup = useRecruiterState((state) => state.isProfileSetup);
  const profileSetupTab = useRecruiterState((state) => state.profileSetupTab);
  return (
    <div
      className={cn(
        " bg-accent_blue min-h-screen w-full py-10",
        isProfileSetup && "py-0"
      )}
    >
      <div className="w-[90%] lg:w-[80%] mx-auto flex gap-5">
        <section className="w-[20%] hidden lg:flex flex-col gap-5">
          {isProfileSetup ? (
            <div className=" bg-dark_green/5 flex flex-col gap-5 py-10 p-5 h-full min-h-screen">
              <div className="flex flex-col gap-3">
                <p className=" font-Jakarta font-semibold text-xl text-dark_green">
                  {profileSetupTab === "organization"
                    ? "Organizational Info"
                    : "Personal Info"}
                </p>
                <Separator className="w-full bg-dark_green/10" />
              </div>
              <img
                src={Organization}
                alt=""
                className=" h-[200px] w-[200px] object-cover mx-auto"
              />
              {profileSetupTab === "personal" && (
                <div className="flex flex-col gap-2 items-center">
                  <div className=" h-[140px] w-[140px] rounded-full bg-dark_green/10 flex justify-center items-center">
                    <label htmlFor="profileUpload">
                      {""}
                      <BiEdit className=" w-[25px] h-[25px] p-1 text-dark_green cursor-pointer m-3 rounded-full" />
                    </label>
                    <input id="profileUpload" type="file" className="hidden" />
                  </div>
                  <p className=" font-Jakarta font-semibold text-xl text-dark_green">
                    Profile image
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              <RecruiterCard />
              <PostedJobs />
              <RequestedServices />
              <ViewedTalent />
              <Links />
            </>
          )}
        </section>
        <section className="flex lg:max-w-[80%] flex-1 flex-col gap-10 w-full">
          {isProfileSetup ? (
            <div className="  flex flex-col gap-5 py-10 p-5 h-full ">
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-[50px]">
                  <p
                    className={cn(
                      " font-Jakarta font-semibold text-xl text-dark_green cursor-pointer",
                      profileSetupTab === "organization" &&
                        " text-primary_blue underline underline-offset-auto"
                    )}
                    onClick={() => {
                      useRecruiterState.setState({ profileSetupTab: "organization" });
                    }}
                  >
                    Organizational Info
                  </p>
                  <p
                    className={cn(
                      " font-Jakarta font-semibold text-xl text-dark_green cursor-pointer",
                      profileSetupTab === "personal" &&
                        " text-primary_blue underline underline-offset-auto"
                    )}
                    onClick={() => {
                      useRecruiterState.setState({ profileSetupTab: "personal" });
                    }}
                  >
                    Personal Info
                  </p>
                </div>
                <Separator className="w-full bg-dark_green/10" />
              </div>
              <div className=" bg-white w-full p-10 rounded-lg ">
                <div className=" w-full max-w-[500px]">
                  {
                    {
                      organization: <OrganizationInfo />,
                      personal: <PersonalInfo />,
                    }[profileSetupTab]
                  }
                </div>
              </div>
            </div>
          ) : (
            <>
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
                {talentFeedPosts.map((feed, index) => (
                  <Feed key={index} feed={feed} />
                ))}
                <div className="w-full flex flex-col gap-10">
                  <ExploreTalentPool />
                  <ExploreProject />
                  <ExploreServices />
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default RecruiterFeed;
