import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { FigmaProject } from "@/assets";
import { Button } from "../ui/button";

const TopCourses: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col gap-3 justify-between p-6 rounded-[5px] min-h-[353px]">
        <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
          Courses you may like
        </CardTitle>
        <Separator />
        <div className="flex flex-col gap-5 w-[90%]">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <img
                src={FigmaProject}
                alt=""
                className="w-[80px] h-[52px] object-cover"
              />
              <div className="flex gap-1 flex-col ">
                <h1 className=" font-Jakarta font-semibold leading-[15px] text-[13px] text-dark_green ">
                  How i make figma component's
                </h1>
                <div className="flex gap-1 items-center">
                  <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                    2300 Views
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
          See all recommendations
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopCourses;
