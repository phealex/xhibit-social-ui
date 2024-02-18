import { Kayla, Logo } from "@/assets";
import { talentFeedHeaders } from "@/constants";
import { ChevronDown, Search } from "lucide-react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { HiBell, HiOutlineLogout } from "react-icons/hi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { FaEnvelope } from "react-icons/fa";
import { Separator } from "../ui/separator";

const TalentFeedNavbar: FC = () => {
  const path = useLocation().pathname.split("/")[2];
  return (
    <div className=" bg-white w-full h-[100px] sticky top-0">
      <div className="w-[80%] flex justify-between gap-[50px] items-center mx-auto ">
        <div className="hidden md:flex">
          <img src={Logo} alt="" className=" h-[50px]  w-[50px]" />
        </div>
        <div className=" hidden lg:flex flex-row">
          {talentFeedHeaders.map((header, index) => (
            <Link
              to={`/talent/${header.link}`}
              key={index}
              className={`font-Jakarta text-base ${
                header.link === path
                  ? " text-primary_blue border-b border-b-primary_blue pb-1  "
                  : "text-dark_green/70"
              }`}
            >
              <header.icon className=" w-6 h-6" />
              {header.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 gap-2 border border-dark_green/70 rounded-[5px] px-3 py-5 ">
          <Search className=" w-5 h-5 text-dark_green/70 " />
          <Input
            placeholder="Search for jobs, topics"
            className=" border-none outline-none ring-transparent w-full"
          />
        </div>
        <div className="flex gap-6 items-center ">
          <FaEnvelope className="text-dark_green/70 w-6 h-6" />
          <HiBell className="text-dark_green/70 w-6 h-6" />
          <HoverCard>
            <HoverCardTrigger className="bg-[#F7F7F7] flex items-center gap-4 rounded-[30px] p-3 ">
              <img
                src={Kayla}
                alt=""
                className=" rounded-[100%] object-cover w-8 h-8"
              />
              <ChevronDown className="text-dark_green/70 w-[10px] h-[5px]" />
            </HoverCardTrigger>
            <HoverCardContent className=" bg-white rounded  flex flex-col gap-5">
              <div className="flex flex-col gap-5 p-5">
                <div className="flex gap-[10px] flex-col">
                  <img
                    src={Kayla}
                    alt=""
                    className=" rounded-[100%] object-cover w-[100px]  h-[100px]"
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className=" font-Jakarta text-base font-semibold text-center text-dark_green ">
                      Dmirty Kargaev
                    </h1>
                    <p className=" font-Jakarta text-sm text-center text-dark_green/70">
                      Freelance UX/UI designer, 80+ projects in web design,
                      mobile apps (iOS & android) and creative projects. Open to
                      offers.
                    </p>
                  </div>
                  <h1 className=" font-Jakarta text-base font-semibold text-center text-dark_green ">
                      View my profile
                    </h1>
                </div>
                <div className=""></div>
              </div>
              <Separator className=" text-[#F4F4F4]" />
              <div className=" flex p-5 flex-col gap-5">
                <Link to={"/work"} className=" font-Jakarta text-sm text-dark_green ">
                    My work
                </Link>
                <Link to={"/help"} className=" font-Jakarta text-sm text-dark_green ">
                    Help Center
                </Link>
                <Link to={"/settings"} className=" font-Jakarta text-sm text-dark_green ">
                    Settings
                </Link>
              </div>
              <Separator className=" text-[#F4F4F4]" />
              <div className="flex gap-2 items-center font-Jakarta text-sm text-[#E75F51] ">
                Log out 
                <HiOutlineLogout className=" w-5 h-5" />
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default TalentFeedNavbar;
