import React, { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TalentShowcaseCard } from "..";

const ViewApplicants: FC = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" bg-primary_blue w-fit hover:bg-primary_blue font-Jakarta font-medium text-xs text-white flex items-center gap-2 ">
          View Applicants
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[800px] flex flex-col gap-10 max-h-[80%] align-top overflow-hidden ">
        <div className=" flex flex-col gap-6 ">
          <div className="flex flex-col gap-[10px]">
            <h1 className=" font-Jakarta font-semibold text-xl text-dark_green">
              Applicants 👇
            </h1>
            <p className=" font-Jakarta font-normal text-base text-dark_green/70">
              List of applicants who have applied for the job position
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Button className=" bg-primary_blue w-fit hover:bg-primary_blue font-Jakarta font-medium text-xs text-white flex items-center gap-2 ">
              All participants
            </Button>
            <Select>
              <SelectTrigger className=" w-fit  bg-transparent outline-none ring-transparent font-Jakarta text-[13px] placeholder:text-dark_green text-dark_green font-medium  ">
                <SelectValue
                  placeholder="Filter by profile match"
                  className=" whitespace-nowrap"
                />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                <SelectItem value="100">Profile match by 100%</SelectItem>
                <SelectItem value="50">Profile match by 50%</SelectItem>
                <SelectItem value="20">Profile match by 20% </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 overflow-y-auto no-scrollbar">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <TalentShowcaseCard key={i} />
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewApplicants;
