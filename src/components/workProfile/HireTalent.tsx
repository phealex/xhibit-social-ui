import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const HireTalent: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[5px]">
        <Button className=" bg-primary_blue hover:bg-primary_blue text-base font-normal text-white w-full rounded-md">
          Hire talent
        </Button>
      </CardContent>
    </Card>
  );
};

export default HireTalent;
