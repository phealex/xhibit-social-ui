import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TopRated: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Top rated talent
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <Checkbox id={`${i}star`} />
                  <Label htmlFor={`${i}star`} className="flex items-center gap-1 cursor-pointer">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <StarIcon
                          key={starIndex}
                          fill={
                            starIndex < 5 - i
                              ? "#FFC107"
                              : "rgba(50, 60, 69, 0.05)"
                          }
                          className={cn(
                            "h-5 w-5",
                            starIndex < 5 - i
                              ? "text-accent_yellow"
                              : "text-dark_green/5"
                          )}
                        />
                      ))}
                  </Label>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopRated;
