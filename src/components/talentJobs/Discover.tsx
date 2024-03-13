import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { useJobsDisplay } from "@/store";

const Discover: FC = () => {

  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);
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
          <div className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
            Startups
          </div>
          <div   onClick={() => {
            setViewToShow("industries");
          }} className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
            Top 10 trending industries
          </div>
          <div   onClick={() => {
            setViewToShow("blog");
          }} className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
            Blog
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Discover;
