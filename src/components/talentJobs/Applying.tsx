import { FC } from "react";
import { Button } from "../ui/button";
import { useJobsDisplay } from "@/store";
import { Dialog, DialogContent } from "../ui/dialog";


const Applying: FC = () => {
  const { isApplying } = useJobsDisplay();
  return (
    <div className="flex ">
      <div className=" w-full flex-col gap-5 hidden md:flex">
        <p className=" font-Jakarta font-semibold text-[13px] leading-6">
          Apply to this job
        </p>
        <p className=" font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
          Your profile and resume will undergo a thorough assessment by the
          company. If you meet the qualifications, your potential employer will
          notify you about the next steps in the application process. Thank you
          for applying, and we wish you the best in your job search
        </p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              useJobsDisplay.setState({ isApplied: true, isApplying: false });
            }}
            className=" bg-primary_blue text-white p-4 hover:bg-white hover:text-primary_blue border hover:border-primary_blue px-[30px] md:px-[60px]"
          >
            Send application
          </Button>
          <Button
            onClick={() => {
              useJobsDisplay.setState({ isApplying: false });
            }}
            className="flex bg-transparent text-dark_green/50 border border-dark_green/50 p-4 hover:bg-transparent hover:text-dark_green/50 hover:border-dark-green/50 px-[30px] md:px-[60px]"
          >
            Cancel
          </Button>
        </div>
      </div>
      {
        window.innerWidth < 768 && (
            <Dialog
                open={isApplying}
                // modal={window.innerWidth > 768 ? false : true}
                onOpenChange={() => useJobsDisplay.setState({ isApplying: false })}
                // defaultOpen={false}
            >
                {/* <DialogOverlay  /> */}
                <DialogContent className="flex md:hidden flex-col">
                <p className=" font-Jakarta font-semibold text-[13px] leading-6">
                    Apply to this job
                </p>
                <p className=" font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
                    Your profile and resume will undergo a thorough assessment by the
                    company. If you meet the qualifications, your potential employer
                    will notify you about the next steps in the application process.
                    Thank you for applying, and we wish you the best in your job search
                </p>
                <div className="flex items-center gap-4">
                    <Button
                    onClick={() => {
                        useJobsDisplay.setState({ isApplied: true, isApplying: false });
                    }}
                    className=" bg-primary_blue text-white p-4 hover:bg-white hover:text-primary_blue border hover:border-primary_blue px-[30px] md:px-[60px]"
                    >
                    Send application
                    </Button>
                    <Button
                    onClick={() => {
                        useJobsDisplay.setState({ isApplying: false });
                    }}
                    className="flex bg-transparent text-dark_green/50 border border-dark_green/50 p-4 hover:bg-transparent hover:text-dark_green/50 hover:border-dark-green/50 px-[30px] md:px-[60px]"
                    >
                    Cancel
                    </Button>
                </div>
                </DialogContent>
            </Dialog>
        )
      }
    </div>
  );
};

export default Applying;
