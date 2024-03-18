import React, { FC } from 'react'
import { Dialog, DialogContent } from "../ui/dialog";
import { foundJobs } from "@/constants";
import { Check } from "lucide-react";
import { useJobsDisplay } from '@/store';
import { Button } from '../ui/button';

const Applied: FC = () => {
  const isApplied = useJobsDisplay((state) => state.isApplied);

  return (
    <Dialog
    open={isApplied}
    modal={ true}
    onOpenChange={() => useJobsDisplay.setState({ isApplied: false })}
    defaultOpen={false}
  >
    <DialogContent className="flex flex-col bg-white items-center">
      <Check className=" h-[90px] w-[90px] p-2 bg-light_green text-white rounded-full" />
      <p className=" font-Jakarta text-[13px] leading-4 text-dark_green/70 ">
        Your application was sent to{" "}
        {
          foundJobs.find(
            (job) => job.id === useJobsDisplay.getState().jobToShowId
          )?.name
        }
      </p>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => {
            useJobsDisplay.setState({
              isApplying: false,
              isApplied: false,
              showJobDetails: false,
            });
          }}
          className=" bg-primary_blue text-white p-4 hover:bg-white hover:text-primary_blue border hover:border-primary_blue px-[30px] md:px-[60px]"
        >
          Back to jobs
        </Button>
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default Applied