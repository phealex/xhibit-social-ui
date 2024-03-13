import { empty } from "@/assets";
import { useJobsDisplay } from "@/store";
import { JobType } from "@/types";
import { X } from "lucide-react";
import { FC } from "react";
import { JobCard } from "..";

interface RecordsProps {
  title: string;
  jobs?: JobType[];
}

const Records: FC<RecordsProps> = ({ title, jobs }) => {
  const viewToShow = useJobsDisplay((state) => state.viewToShow);
  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);
  return (
    <div className=" bg-white p-5 flex flex-col gap-5 w-full h-full">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 flex-col">
          <h1 className=" font-Jakarta text-[16px] lg:text-[20px] leading-7 font-semibold text-dark_green capitalize ">
            {title} jobs 👇
          </h1>
          <p className=" font-Jakarta text-[13px] lg:text-[16px] font-normal leading-5 text-dark_green/50">
            Start applying for jobs and move closer to discovering a career you
            truly enjoy.
          </p>
        </div>
        <X
          onClick={() => {
            setViewToShow("browse");
          }}
          className=" h-6 w-6 text-dark_green hidden lg:flex"
        />
      </div>
      <div className=" w-full h-full">
        {jobs && jobs?.length > 1 ? (
          <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
            {
                jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))
            }

          </div>
        ) : (
          <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
            <img src={empty} alt="" className=" h-[150px] w-[260px]" />
            {viewToShow === "saved" ? (
              <div className="flex flex-col gap-1">
                <h1 className=" font-Jakarta text-[16px] lg:text-[20px] leading-7 font-semibold text-dark_green capitalize ">
                  There are currently no saved jobs in your list.
                </h1>
                <p className=" font-Jakarta text-[13px] lg:text-[16px] font-normal leading-5 text-dark_green/50">
                  Bookmark a search for convenient access in the future.
                </p>
              </div>
            ) : viewToShow === "applied" ? (
              <div className="flex flex-col gap-1">
                <h1 className=" font-Jakarta text-[16px] lg:text-[20px] leading-7 font-semibold text-dark_green capitalize ">
                  You haven't applied for any jobs yet.
                </h1>
                <p className=" font-Jakarta text-[13px] lg:text-[16px] font-normal leading-5 text-dark_green/50">
                  Jobs applied for will show here.
                </p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Records;
