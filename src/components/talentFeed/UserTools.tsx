import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const UserTools: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px] min-h-[353px] ">
        <div className="flex flex-col gap-3">

        <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
          Tools
        </CardTitle>
        <Separator />
      
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
          Add tools
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserTools;
