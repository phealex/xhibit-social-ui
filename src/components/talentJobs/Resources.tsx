import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { VscBriefcase } from "react-icons/vsc";
import { Bookmark } from "lucide-react";
import { FaRegStickyNote } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { useJobsDisplay } from "@/store";
import { cn } from "@/lib/utils";

const Resources: FC = () => {

  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);     
  const viewToShow = useJobsDisplay((state) => state.viewToShow);  
  return (
    <Card>
      <CardContent className=" flex flex-col gap-5 !p-6">
        <CardHeader className=" font-Jakarta !p-0 font-semibold text-[20px] leading-7 text-dark_green">
          Resources
        </CardHeader>
        <Separator />
        <div className="flex flex-col gap-5">
          <div 
          onClick={() => {
            setViewToShow("applied");
          }}
          className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer", viewToShow === "applied" && " text-primary_blue" )}>
            <VscBriefcase className={cn("w-4 h-4 text-dark_green/70", viewToShow === "applied" && " text-primary_blue")} />
            Applied jobs
          </div>
          <div   onClick={() => {
            setViewToShow("saved");
          }}
          className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer", viewToShow === "saved" && " text-primary_blue")}>
            <Bookmark className={cn("w-4 h-4 text-dark_green/70", viewToShow === "saved" && " text-primary_blue")} />
            Saved jobs
          </div>
          <div   onClick={() => {
            setViewToShow("resume");
          }} className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer", viewToShow === "resume" && " text-primary_blue")}>
            <FaRegStickyNote className={cn("w-4 h-4 text-dark_green/70", viewToShow === "resume" && " text-primary_blue")} />
            Resume templates & tips
          </div>
          <div   onClick={() => {
            setViewToShow("interview");
          }} className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer",viewToShow === "interview" && " text-primary_blue" )}>
            <PiNotepad className={cn("w-4 h-4 text-dark_green/70", viewToShow === "interview" && " text-primary_blue")} />
            Interview Q&As
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resources;
