import { FC, useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";
import { profileStatus } from "@/constants";
import { Check } from "lucide-react";
import { AdvanceProfile, BeginnerProfile, MidProfile } from "@/assets";

const ProfileStrength: FC = () => {
  const [strength, setStrength] = useState<number>(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setStrength((prev) => (prev < 100 ? prev + 1 : 0));
    }, 100);
    return () => clearInterval(interval);
  }, [strength]);
  return (
    <Card>
      <CardContent
        className={cn(
          "  flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]",
          strength <= 50
            ? "bg-[#FFF9F9]"
            : strength <= 70
            ? "bg-[#FFFEFA]"
            : strength > 70
            ? "bg-[#F7FFFD]"
            : null
        )}
      >
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Profile strength:{" "}
            {strength <= 50
              ? "Beginner"
              : strength <= 70
              ? "Mid-level"
              : strength > 70
              ? "Advance"
              : null}
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            <div className="flex flex-col gap-3 w-full ">
              <div className=" flex items-center gap-[10px] justify-between">
                <p className="h-[30px] w-[30px] ">
                  {strength <= 50 ? (
                    <img
                      src={BeginnerProfile}
                      alt="beginner"
                      className="h-[30px] w-[30px] object-contain"
                    />
                  ) : strength <= 70 ? (
                    <img
                      src={MidProfile}
                      alt="beginner"
                      className="h-[30px] w-[30px] object-contain"
                    />
                  ) : strength > 70 ? (
                    <img
                      src={AdvanceProfile}
                      alt="beginner"
                      className="h-[30px] w-[30px] object-contain"
                    />
                  ) : null}
                </p>
                <Progress
                  value={strength}
                  className={cn("h-3 bg-dark_green/10 ")}
                  bgColor={
                    strength <= 50
                      ? " bg-accent_red"
                      : strength <= 70
                      ? " bg-accent_yellow"
                      : strength > 70
                      ? " bg-accent_green"
                      : ""
                  }
                />
                <p className=" font-Jakarta font-medium text-[13px] leading-6 text-dark_green">
                  {strength}%
                </p>
              </div>
              <div className={cn("min-h-[65px] w-full flex justify-center p-4 rounded-[10px]",  strength <= 50
                      ? " bg-accent_red/10"
                      : strength <= 70
                      ? " bg-accent_yellow/10"
                      : strength > 70
                      ? " bg-accent_green/10"
                      : "")}>
                <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green">
                    {
                         strength <= 50
                         ? "Add more information to your profile to get 10x more profile views."
                         : strength <= 70
                         ? "Talents with complete profiles land 3x more interviews!"
                         : strength > 70
                         ? "Explore job opportunities and start applying to open roles."
                         : ""
                    }
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {profileStatus.map((status, index) => (
                <div className="flex items-center gap-[5px]" key={index}>
                  <Check
                    className={cn(
                      " h-[14px] w-[14px] rounded-full p-[2px] text-white",
                      status.done ? "bg-accent_green" : " bg-dark_green/10"
                    )}
                  />
                  <p className=" font-Jakarta font-normal text-xs text-dark_green">
                    {status.title}
                  </p>
                </div>
              ))}
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

export default ProfileStrength;
