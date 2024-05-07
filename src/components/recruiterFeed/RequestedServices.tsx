import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const RequestedServices: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px]">
        <div className="flex flex-col gap-3">
          <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            Requested Services
          </CardTitle>
          <Separator />
          <div className="flex flex-col gap-6 w-[90%]">
            <div className="flex gap-3 flex-col">
              <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                Brand indentity design
              </h1>
              <div className="flex gap-1 items-start">
                <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                  From
                </p>
                <p className=" font-Jakarta font-normal text-[9px] text-primary_blue">
                  NGN
                </p>
                <p className=" font-Jakarta font-medium text-xs text-primary_blue">
                  4000
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

export default RequestedServices;
