import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { coinbaseProject } from "@/assets";
import { Button } from "../ui/button";

const InterviewQuestions: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col gap-3 justify-between p-6 rounded-[5px] min-h-[353px]">
        <CardTitle className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green/70">
          Dmitry Kargaev, learn what hiring managers look for in answers to top
          interview questions
        </CardTitle>
        <Separator />
        <div className="flex flex-col gap-5 w-[90%]">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <img
                src={coinbaseProject}
                alt=""
                className="w-[36px] h-[36px] rounded object-cover"
              />
              <div className="flex gap-1 flex-col ">
                <h1 className=" font-Jakarta font-medium leading-[18px] text-[13px] text-dark_green ">
                  Tell me how you would handle pressure
                </h1>
              </div>
            </div>
          ))}
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
          View all
        </Button>
      </CardContent>
    </Card>
  );
};

export default InterviewQuestions;
