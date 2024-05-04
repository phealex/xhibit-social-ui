  import { Separator } from "@/components/ui/separator";
  import { FC } from "react";
  import { useMyJobsState } from "@/store";
  import { cn } from "@/lib/utils";
import {ManageJobsSider} from "..";

  
  const ManageJobs: FC = () => {
  const [isAddJob, isEditJob] = useMyJobsState((state) => [state.isAddJob, state.isEditJob]);


  
    return (
      <div
        className={cn(
          " bg-accent_blue min-h-screen w-full py-10",
        )}
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex gap-5">
          <section className="w-[20%] hidden lg:flex flex-col gap-5">
           
              <ManageJobsSider />
          </section>
          <section className="flex lg:max-w-[80%] flex-1 flex-col gap-10 w-full">
          
              <div className="  flex flex-col gap-5 py-10 p-5 h-full ">
                <div className="flex flex-col gap-2 ">
                  <div className="flex items-center gap-[50px]">
                    <p
                      className={cn(
                        " font-Jakarta font-semibold text-xl text-dark_green cursor-pointer"
                      )}
                    >
                      {
                        isAddJob ? "Let's set up your new job" : isEditJob ? "Edit Job" : null
                      }
                    </p>
                  </div>
                  <Separator className="w-full bg-dark_green/10" />
                </div>
                <div className=" bg-white w-full p-10 rounded-lg ">
                  <ManageJobsDetails />
                </div>
              </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default ManageJobs;
  