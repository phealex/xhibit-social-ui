import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Dmitry, UserBanner } from "@/assets";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { useRecruiterState } from "@/store";

const RecruiterCard: FC = () => {

  const setIsProfileSetup = useRecruiterState((state) => state.setIsProfileSetup);
  return (
    <Card>
      <CardContent className="!p-0 bg-white rounded-[10px] !pb-5">
        <img
          src={UserBanner}
          className="w-full h-[120px] object-cover"
          alt=""
        />
        <div className=" bg-white p-1 rounded-full w-[100px] h-[100px] -mt-[20%] mx-auto">
          <img
            src={Dmitry}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[30px] items-center ">
        <div className="w-[90%] flex flex-col gap-[10px] items-center justify-center mx-auto ">
          <p className=" font-Jakarta text-base text-dark_green text-center">
            Dmitry Petrenko
          </p>
          <p className="flex gap-2 items-center font-Jakarta text-[13px] font-normal text-dark_green/70">
            <MapPin size={16} />
            Lagos,NG
          </p>
          </div>
         <Button onClick={() => {
          setIsProfileSetup(true);
         }} className=" bg-primary_blue hover:bg-primary_blue text-base text-white w-fit ">
            Set up my profile
         </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecruiterCard;
