import { FC } from "react";

import { useJobsDisplay } from "@/store";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Filter } from "..";
import { ArrowLeft } from "lucide-react";

const TalentJobsNav: FC = () => {
  const viewToShow = useJobsDisplay((state) => state.viewToShow);

  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);
  const setShowJobDetails = useJobsDisplay((state) => state.setShowJobDetails);
  const setJobToShowId = useJobsDisplay((state) => state.setJobToShowId);
  const showJobDetails = useJobsDisplay((state) => state.showJobDetails);
  const setDetailsToShow = useJobsDisplay((state) => state.setDetailsToShow);
  const detailsToShow = useJobsDisplay((state) => state.detailsToShow);
  return (
    <div className="w-full bg-white sticky z-50 top-[100px] left-0 right-0 h-20">
      <div className="container h-full hidden lg:flex  ">
        {viewToShow === "browse" ? (
          <Filter />
        ) : (
          <div className=" w-full h-full items-center justify-start flex gap-5">
            <Button
              onClick={() => setViewToShow("browse")}
              className=" bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal"
            >
              <ArrowLeft className=" h-5 w-5" />
              Back to job feeds
            </Button>
          </div>
        )}
      </div>
      
        {
         showJobDetails && window.innerWidth <= 768 ? (
          <div className="flex w-[90%] mx-auto lg:hidden h-full justify-between items-center">

          <Button
            onClick={() => {
              setDetailsToShow("info")
            }}
            className={cn(
              "bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal",
              detailsToShow === "info" &&
                "text-primary_blue underline underline-offset-[10px]"
            )}
          >
            Browse jobs
          </Button>
          <Button
           onClick={() => {
           setDetailsToShow("details")
          }}
            className={cn(
              "bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal",
              detailsToShow === "details" &&
                "text-primary_blue underline underline-offset-[10px]"
            )}
          >
            Job details
          </Button>
          <Button
          onClick={() => {
           setDetailsToShow("company")
            }}
            className={cn(
              "bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal",
              detailsToShow === "company" &&
                "text-primary_blue underline underline-offset-[10px]"
            )}
          >
            Company
          </Button>
          </div>
         ) : (
          <div className="flex w-[90%] mx-auto lg:hidden h-full justify-between items-center">
        <Button
          onClick={() => {
            setJobToShowId(null);
            setShowJobDetails(false);
            setViewToShow("browse");
          }}
          className={cn(
            "bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal",
            viewToShow === "browse" &&
              "text-primary_blue underline underline-offset-[10px]"
          )}
        >
          Browse jobs
        </Button>
        <Button
         onClick={() => {
          setJobToShowId(null);
          setShowJobDetails(false);
          setViewToShow("saved");
        }}
          className={cn(
            "bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal",
            viewToShow === "saved" &&
              "text-primary_blue underline underline-offset-[10px]"
          )}
        >
          Saved jobs
        </Button>
        <Button
        onClick={() => {
            setJobToShowId(null);
            setShowJobDetails(false);
            setViewToShow('applied');
          }}
          className={cn(
            "bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal",
            viewToShow === "applied" &&
              "text-primary_blue underline underline-offset-[10px]"
          )}
        >
          Applied jobs
        </Button>
          </div>
         )
        }
      {}
    </div>
  );
};

export default TalentJobsNav;
