import { JobType } from "@/types";
import { FC } from "react";
import { Applied, Applying, CompanyInfo, JobDescription, JobInfo, Share } from "..";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useJobsDisplay } from "@/store";
import { useNavigate } from "react-router-dom";

interface JobDetailsProps {
  job: JobType;
}

const JobDetails: FC<JobDetailsProps> = ({ job }) => {
  const setShowJobDetails = useJobsDisplay((state) => state.setShowJobDetails);
  const setJobToShowId = useJobsDisplay((state) => state.setJobToShowId);
  const setDetailsToShow = useJobsDisplay((state) => state.setDetailsToShow);
  const detailsToShow = useJobsDisplay((state) => state.detailsToShow);
  const navigate = useNavigate();
  const isApplying = useJobsDisplay((state) => state.isApplying);
  const isApplied = useJobsDisplay((state) => state.isApplied);

  return (
    <div className="flex flex-row w-full gap-5 bg-white container py-4 ">
      <JobInfo job={job} />
      <Separator orientation="vertical" className=" hidden md:flex" />
      <div className="flex flex-col gap-3 flex-1 ">
        <div className="flex items-center justify-between">
          {!isApplying && (
            <div className="items-center gap-[50px] hidden md:flex">
              <p
                className={cn(
                  " font-Jakarta font-semibold cursor-pointer text-[13px] leading-4 text-dark_green/70",
                  detailsToShow === "details" &&
                    " text-primary_blue underline underline-offset-8"
                )}
                onClick={() => {
                  setDetailsToShow("details");
                }}
              >
                Job details
              </p>
              <p
                className={cn(
                  " font-Jakarta font-semibold cursor-pointer text-[13px] leading-4 text-dark_green/70",
                  detailsToShow === "company" &&
                    " text-primary_blue underline underline-offset-8"
                )}
                onClick={() => {
                  setDetailsToShow("company");
                }}
              >
                Company
              </p>
            </div>
          )}
          <X
            className="h-4 w-4 text-dark_green cursor-pointer ml-auto"
            onClick={() => {
              setJobToShowId(null);
              setShowJobDetails(false);
              navigate("/talent/jobs");
              useJobsDisplay.setState({isApplying: false, isApplied: false});
            }}
          />
        </div>
        <Separator orientation="horizontal" className=" hidden lg:flex" />
        {isApplying ? (
        <Applying />
        ) : (
          <div className=" w-full flex flex-col gap-5">
            <Share className=" hidden md:flex" />
            {
              {
                details: <JobDescription />,
                company: <CompanyInfo />,
              }[detailsToShow]
            }
          </div>
        )}
        {
          isApplied && (
            <Applied />
          )
        }
      </div>
    </div>
  );
};

export default JobDetails;
