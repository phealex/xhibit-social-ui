import { FC, useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";
import { foundJobs } from "@/constants";
import {
  Discover,
  Interview,
  JobCard,
  JobDetails,
  RecentlyViewed,
  Records,
  Resources,
  TalentJobsNav,
} from "@/components";
import { Button } from "@/components/ui/button";
import { useJobsDisplay } from "@/store";
import { useNavigate, useParams } from "react-router-dom";
import { JobType } from "@/types";
import { useToast } from "@/components/ui/use-toast";

const TalentJobs: FC = () => {
  const viewToShow = useJobsDisplay((state) => state.viewToShow);

  const showJobDetails = useJobsDisplay((state) => state.showJobDetails);

  const { id } = useParams<{ id?: string }>();
  const [job, setJob] = useState<JobType>();
  const navigate = useNavigate();

  const {toast} = useToast()

  
  const setDetailsToShow = useJobsDisplay((state) => state.setDetailsToShow);

  useEffect(() => {
    if(id) {

      const job = foundJobs.find((job) => job.id === id);
      if(job) {
        useJobsDisplay.setState({ showJobDetails: true, jobToShowId: id });
          
        if(window.innerWidth <= 768) {
          setDetailsToShow("info")
        }
        setJob(job)
        return
      } else {
        toast({
          title: "Job not found"
        })
        setTimeout(() => {

          navigate("/talent/jobs")
        }, 2000)

      }
    }
  }, [id])

  return (
    <div className="flex flex-col w-full gap-[30px] bg-accent_blue min-h-screen">
      <TalentJobsNav />
      {showJobDetails && id && job ? (
        <div className=" w-full">
              <JobDetails job={job} key={job.id} />
        </div>
      ) : (
        <div className=" container  mx-auto flex gap-5">
          <section className="w-[20%] hidden lg:flex flex-col gap-5">
            <Resources />
            <RecentlyViewed />
            <Discover />
          </section>
          <section className="flex flex-1 flex-col gap-5 w-full">
            {
              {
                browse:  <>
                <div className="flex w-full items-center">
                  <Separator className=" flex flex-1 flex-shrink w-full bg-dark_green/10" />
                  <div className="flex gap-1 items-center">
                    <p className=" font-Jakarta text-nowrap text-[13px] text-dark_green font-medium  ">
                      Sort by:
                    </p>
                    <Select>
                      <SelectTrigger className="!p-0 !h-fit bg-transparent border-none outline-none ring-transparent font-Jakarta text-[13px] placeholder:text-primary_blue text-primary_blue font-medium  ">
                        <SelectValue placeholder="Best Match" />
                      </SelectTrigger>
                      <SelectContent className=" bg-transparent">
                        <SelectItem value="best">Best Match</SelectItem>
                        <SelectItem value="popular">Popular</SelectItem>
                        <SelectItem value="latest">Latest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator className="flex flex-1 flex-shrink w-full bg-dark_green/10" />
                </div>
                <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green ">
                  <span className="font-medium text-dark_green ">170{""}</span>
                  {""} jobs found
                </h1>
                <div className="flex gap-5 flex-col ">
                  {foundJobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
                </div>
                <Button className=" bg-transparent hover:bg-transparent text-dark_green hover:text-dark_green mx-auto w-fit p-3 rounded-3xl border border-dark_green">
                  Load More
                </Button>
              </>,
              saved: <Records title="Saved" />,
              applied: <Records title="Applied" jobs={foundJobs.slice(0, 2)} />,
              interview: <Interview />

              }[viewToShow]
            }
           
            
          </section>
        </div>
      )}
      <div className=""></div>
    </div>
  );
};

export default TalentJobs;
