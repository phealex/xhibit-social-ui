import { FC } from "react";
import { Separator } from "../ui/separator";
import { EditJob, Hiring, ProfileNote } from "@/assets";
import { BiEdit } from "react-icons/bi";
import { useMyJobsState } from "@/store";
import { Button } from "../ui/button";
import { ChevronLeftSquare } from "lucide-react";

const ManageJobsSider: FC = () => {
  const [isAddJob, isEditJob] = useMyJobsState((state) => [
    state.isAddJob,
    state.isEditJob,
  ]);

  return (
    <div className=" bg-dark_green/5 flex flex-col gap-5 py-10 p-5 h-full min-h-screen items-start justify-between ">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className=" font-Jakarta font-semibold text-xl text-dark_green">
            {isAddJob ? "My Jobs" : isEditJob ? "Edit Job" : null}
          </p>
          <Separator className="w-full bg-dark_green/10" />
        </div>
        <img
          src={isAddJob ? Hiring : isEditJob ? EditJob : ""}
          alt=""
          className=" h-[200px] w-[200px] object-cover mx-auto"
        />
      </div>

      <Button onClick={() => useMyJobsState.setState({
        isAddJob: false,
        isEditJob: false
      })} className=" bg-transparent hover:bg-transparent flex items-center gap-2 font-Jakarta text-base font-semibold text-dark_green ">
        <ChevronLeftSquare size={24} />
        Back
      </Button>
    </div>
  );
};

export default ManageJobsSider;
