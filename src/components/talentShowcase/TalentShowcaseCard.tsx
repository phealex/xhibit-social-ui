import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Dmitry } from "@/assets";
import { FaBolt } from "react-icons/fa";
import { Bookmark, MapPinIcon, Star } from "lucide-react";
import { Badge } from "../ui/badge";

const TalentShowcaseCard: FC = () => {
  return (
    <Card>
      <CardContent className=" bg-white flex flex-col justify-between p-6 rounded-[10px] min-h-[240px]">
        <div className="flex gap-10 justify-between items-center">
          <div className="flex gap-[10px] ">
            <img
              src={Dmitry}
              alt=""
              className="h-[60px] w-[60px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className=" font-Jakarta font-semibold text-base text-dark_green">
                  Keith Hammond
                </p>
                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                  Blockchain Engineer
                </p>
              </div>
              <Button className=" bg-primary_blue w-fit hover:bg-primary_blue font-Jakarta font-medium text-xs text-white flex items-center gap-2 ">
                <span className="">Looking for work</span>
                <FaBolt className="text-white h-5 w-[10px]" />
              </Button>
              <p className=" font-Jakarta font-normal text-base text-dark_green max-w-[455px]">
                Forging User-Business Synergy / Bridging the UX Divide with
                Seamless Design Solutions (USER EXPERIENCE DESIGNER)
              </p>
              <div className="flex gap-3 flex-col">
                <div className="flex gap-3 items-center">
                  <p className=" font-Jakarta text-[13px] items-center  font-normal flex gap-2 text-dark_green/50">
                    <MapPinIcon className="w-[15px] h-[15px] text-dark_green/50" />
                    Lagos, NG
                  </p>
                  <p className=" font-Jakarta text-[13px] items-center  font-normal flex gap-2 text-primary_blue">
                    <Bookmark className="w-[15px] h-[15px] text-primary_blue" />
                    20+
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={`flex gap-3 rounded-[20px] rounded-br-[0px] text-primary_blue bg-primary_blue/5 hover:bg-primary_blue/5`}
                  >
                    <span className="text-primary_blue">
                      <Star
                        fill="rgb(0,133,255)"
                        className="w-[15px] h-[15px] text-primary_blue"
                      />
                    </span>
                    Swift UI
                  </Badge>
                  <Badge
                    className={`flex gap-3 rounded-[20px] rounded-br-[0px] text-primary_blue bg-primary_blue/5 hover:bg-primary_blue/5`}
                  >
                    <span className="text-primary_blue">
                      <Star
                        fill="rgb(0,133,255)"
                        className="w-[15px] h-[15px] text-primary_blue"
                      />
                    </span>
                    JavaScript
                  </Badge>
                  <Badge
                    className={`flex gap-3 rounded-[20px] rounded-br-[0px] bg-dark_green/10 hover:bg-dark_green/10  text-dark_green`}
                  >
                    Design system
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <Button className=" bg-dark_green/5 hover:bg-dark_green/5 font-Jakarta font-semibold text-xs text-dark_green ">
            View profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentShowcaseCard;
