import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Dmitry } from "@/assets";

const ViewedTalent: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Viewed talent profile
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            <div className="flex gap-3 items-center">
              <img
                src={Dmitry}
                alt=""
                className=" w-10 h-10 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className=" font-Jakarta font-semibold text-base text-dark_green">
                  Keith Hammond
                </p>
                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                  Blockchain Engineer
                </p>
              </div>
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

export default ViewedTalent;
