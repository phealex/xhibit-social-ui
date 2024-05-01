import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Dmitry, UserBanner } from "@/assets";
import { MapPin } from "lucide-react";

const UserCard: FC = () => {
  return (
    <Card className="max-w-[290px] flex-shrink-0">
      <CardContent className="!p-0 bg-white rounded-[10px] !pb-5 w-full">
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
        <div className="w-[90%] flex flex-col gap-[10px] items-center justify-center mx-auto">
          <p className=" font-Jakarta text-base text-dark_green text-center">
            Dmitry Petrenko
          </p>
          <p className="flex gap-2 items-center font-Jakarta text-[13px] font-normal text-dark_green/70">
            <MapPin size={16} />
            Lagos,NG
          </p>
          <p className=" font-Jakarta font-normal text-[13px] text-center text-dark_green/70 ">
            Freelance UX/UI designer, 80+ projects in web design, mobile apps
            (iOS & android) and creative projects. Open to offers.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
