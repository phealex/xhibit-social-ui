import { Dmitry, Logo } from "@/assets";
import { talentFeedHeaders } from "@/constants";
import { ChevronDown, Search } from "lucide-react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { HiBell, HiOutlineLogout } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaEnvelope } from "react-icons/fa";
import { Separator } from "../ui/separator";

const TalentFeedNavbar: FC = () => {
  const path = useLocation().pathname.split("/")[2]
  // console.log(path)

  
  return (
    <div className=" bg-[#F2F9FF] lg:bg-white w-full h-[100px] sticky z-50 top-0 left-0 right-0 border-b border-home_border_gradient_color_2">
      <div className="w-[90%] md:w-[80%] flex flex-row-reverse md:flex-row  justify-between gap-5 md:gap-[50px] items-center py-5 mx-auto ">
        <HiBell className="text-dark_green/70 text-[24px] cursor-pointer flex md:hidden" />

        <Link to={'/'} className="hidden md:flex">
          <img src={Logo} alt="" className=" h-[50px]  w-[50px]" />
        </Link>
        <div className=" hidden lg:flex gap-10 flex-row">
          {talentFeedHeaders.map((header, index) => (
            <Link
              to={`/talent/${header.link}`}
              key={index}
              className={`font-Jakarta flex items-center gap-2 uppercase flex-col text-base ${
                header.link === path
                  ? " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
                  : "text-dark_green/70"
              }`}
            >
              <header.icon className=" w-6 h-6" />
              {header.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 border border-dark_green/70 rounded-[5px] px-3  ">
          <Search className=" w-5 h-5 text-dark_green/70 " />
          <Input
            placeholder="Search for jobs, topics"
            className=" border-none outline-none bg-transparent ring-transparent w-full"
          />
        </div>
        <div className="flex gap-6 items-center ">
          <FaEnvelope className="text-dark_green/70 w-6 h-6 cursor-pointer hidden lg:flex" />
          <HiBell className="text-dark_green/70 w-6 h-6 cursor-pointer hidden md:flex" />
          <DropdownMenu>
            <DropdownMenuTrigger className=" bgw lg:bg-[#F7F7F7] cursor-pointer flex items-center gap-2 rounded-[30px] p-3 ">
              <img
                src={Dmitry}
                alt=""
                className=" rounded-[100%] object-cover w-8 h-8"
              />
              <ChevronDown className="text-dark_green/70 text-[25px]  " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-[290px] bg-white rounded !p-0  flex flex-col gap-5">
              <DropdownMenuItem className="  !focus:bg-transparent flex flex-col gap-5 p-5">
                <div className="flex items-center gap-[10px] flex-col">
                  <img
                    src={Dmitry}
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
                  <Link to={"/talent/profile"} className=" font-Jakarta text-base cursor-pointer hover:underline hover:underline-offset-1 font-semibold text-center text-dark_green ">
                    View my profile
                  </Link>
                </div>
                <div className=""></div>
              </DropdownMenuItem>
              <Separator className=" text-[#F4F4F4]" />
              <DropdownMenuItem className=" flex p-5 flex-col gap-5">
                <Link
                  to={"/work"}
                  className=" font-Jakarta text-sm text-dark_green "
                >
                  My work
                </Link>
                <Link
                  to={"/help"}
                  className=" font-Jakarta text-sm text-dark_green "
                >
                  Help Center
                </Link>
                <Link
                  to={"/settings"}
                  className=" font-Jakarta text-sm text-dark_green "
                >
                  Settings
                </Link>
              </DropdownMenuItem>
              <Separator className=" text-[#F4F4F4]" />
              <DropdownMenuItem className="flex gap-2 p-5 w-fit mx-auto cursor-pointer items-center font-Jakarta text-sm text-[#E75F51] ">
                Log out
                <HiOutlineLogout className=" w-5 h-5" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TalentFeedNavbar;
