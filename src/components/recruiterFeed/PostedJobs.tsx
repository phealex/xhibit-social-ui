import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const PastedJobs: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Pasted jobs
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            <div className="flex gap-3 flex-col">
              <h1 className=" font-Jakarta font-medium text-xl text-dark_green">
                Product designer
              </h1>
              <div className="flex gap-3 items-center">
                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                  4 Applicants
                </p>
                <Separator orientation="vertical" className="h-[26px]" />
                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                  3 yr
                </p>
                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                  Remote
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

export default PastedJobs;
