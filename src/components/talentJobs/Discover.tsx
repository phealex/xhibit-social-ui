import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { useJobsDisplay } from "@/store";
import { cn } from "@/lib/utils";

const Discover: FC = () => {

  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);
  const viewToShow = useJobsDisplay((state) => state.viewToShow);
  return (
    <Card>
      <CardContent className=" flex flex-col gap-5 !p-6">
        <CardHeader className=" font-Jakarta !p-0 font-semibold text-[20px] leading-7 text-dark_green">
          Discover
        </CardHeader>
        <Separator />
        <div   onClick={() => {
            setViewToShow("startup");
          }} className="flex flex-col gap-5">
          <div className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer", viewToShow === "startup" && "text-primary_blue")}>
            Startups
          </div>
          <div   onClick={() => {
            setViewToShow("industries");
          }} className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer", viewToShow === "industries" && "text-primary_blue")}>
            Top 10 trending industries
          </div>
          <div   onClick={() => {
            setViewToShow("blog");
          }} className={cn("flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer", viewToShow === "blog" && "text-primary_blue")}>
            Blog
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Discover;
