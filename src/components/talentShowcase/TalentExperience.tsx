import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { talentExperience } from "@/constants";

const TalentExperience: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Years of experience
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            {talentExperience
              .map((exp, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <Checkbox id={`${i}`} />
                  <Label htmlFor={`${i}`} className="flex items-center gap-1 cursor-pointer">
                    {exp} {""} yrs
                  </Label>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentExperience;
