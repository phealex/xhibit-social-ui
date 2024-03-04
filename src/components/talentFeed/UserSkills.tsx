import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

const UserSkills: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">

        <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
          Skills
        </CardTitle>
        <Separator />
        <div className="flex flex-col gap-6 w-[90%]">
          <div className="flex gap-1 items-center">
            <Star fill="#0085FF" className=" h-6 w-6 text-primary_blue" />
            <p className=" font-Jakarta font-medium leading-7 text-[20px] text-primary_blue ">
              Communication
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Star fill="#0085FF" className=" h-6 w-6 text-primary_blue" />
            <p className=" font-Jakarta font-medium leading-7 text-[20px] text-primary_blue ">
              User Experience
            </p>
          </div>{" "}
          <div className="flex gap-1 items-center">
            <Star fill="#0085FF" className=" h-6 w-6 text-primary_blue" />
            <p className=" font-Jakarta font-medium leading-7 text-[20px] text-primary_blue ">
              Visual Design
            </p>
          </div>
        </div>
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
          View all
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserSkills;
