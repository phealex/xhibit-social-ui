import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { talentAvailability } from "@/constants";

const TalentAvailability: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Availability
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            {talentAvailability.map((ava, i) => (
              <div className="flex items-center gap-1" key={i}>
                <Checkbox id={ava} />
                <Label
                  htmlFor={ava}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {ava}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentAvailability;
