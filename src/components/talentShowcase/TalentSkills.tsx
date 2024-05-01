import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { talentSkills } from "@/constants";

const TalentSkills: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Skills
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            {talentSkills
              .map((skill, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <Checkbox id={skill} />
                  <Label htmlFor={skill} className="flex items-center gap-1 cursor-pointer">
                    {skill}
                  </Label>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentSkills;
