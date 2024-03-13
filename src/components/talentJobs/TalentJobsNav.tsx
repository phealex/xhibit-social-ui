import { FC } from "react";


import { useJobsDisplay } from "@/store";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Filter } from "..";
import { ArrowLeft } from "lucide-react";

const TalentJobsNav: FC = () => {


  const viewToShow = useJobsDisplay((state) => state.viewToShow);

  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);
  return (
    <div className="w-full bg-white sticky z-50 top-[100px] left-0 right-0 h-20">
      <div className="container h-full hidden lg:flex  ">
        {viewToShow === "browse" ? (
          <Filter />
        ) : (
          <div className=" w-full h-full items-center justify-start flex gap-5">
            <Button onClick={() => setViewToShow("browse")} className=" bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal">
              <ArrowLeft className=" h-5 w-5" />
              Back to job feeds
            </Button>
          </div>
        )}
      </div>
      <div className="flex w-[90%] mx-auto lg:hidden h-full justify-between items-center">
      <Button onClick={() => setViewToShow("browse")} className={cn("bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal", viewToShow === "browse" && "text-primary_blue underline underline-offset-[10px]"  )}>
              Browse jobs
            </Button>
            <Button onClick={() => setViewToShow("saved")} className={cn("bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal", viewToShow === "saved" && "text-primary_blue underline underline-offset-[10px]"  )} >
              Saved jobs
            </Button>
            <Button onClick={() => setViewToShow("applied")} className={cn("bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal", viewToShow === "applied" && "text-primary_blue underline underline-offset-[10px]"  )}>
              Applied jobs
            </Button>

      </div>
    </div>
  );
};

export default TalentJobsNav;
