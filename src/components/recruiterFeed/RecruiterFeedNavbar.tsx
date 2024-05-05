import { Dmitry, Logo } from "@/assets";
import { chatData, recruiterFeedHeaders } from "@/constants";
import { ChevronDown, ListFilter, Search } from "lucide-react";
import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { HiBell, HiOutlineLogout } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaEnvelope } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "../ui/sheet";
import { Filter, MessageCard, TalentFilter } from "..";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const RecruiterFeedNavbar: FC = () => {
  const path = useLocation().pathname.split("/")[2];

//   console.log(path);

  const navigate = useNavigate();
  return (
    <div className=" bg-[#F2F9FF] lg:bg-white w-full h-[100px] sticky z-50 top-0 left-0 right-0 border-b border-home_border_gradient_color_2">
      <div className="w-[90%] md:w-[80%] flex flex-row-reverse md:flex-row  justify-between gap-5 md:gap-[50px] items-center py-5 mx-auto ">
        <HiBell className="text-dark_green/70 text-[24px] cursor-pointer flex md:hidden" />
        {
          path === "talent" && (
            <div className=" flex lg:hidden">
              <TalentFilter />
            </div>
          )
        }

        <Link to={"/"} className="hidden md:flex">
          <img src={Logo} alt="" className=" h-[50px]  w-[50px]" />
        </Link>
        <div className=" hidden lg:flex gap-10 flex-row">
          {recruiterFeedHeaders.map((header, index) => (
            <Link
              to={`/recruiter/${header.link}`}
              key={index}
              className={`font-Jakarta flex items-center gap-2 uppercase flex-col text-base ${
                header.link === path
                  ? " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
                  : "text-dark_green/70"
              } ${
                !path && index === 0 &&  " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
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
        <div className="flex gap-6 items-center relative ">
        {
              path === "messages" || path === "jobs" ? (
                <FaEnvelope className="text-dark_green/70 w-6 h-6 cursor-pointer hidden lg:flex" 
               onClick={() => {
                navigate("/recruiter/messages");
              }}
              />

              ) : (

         
          <HoverCard openDelay={0.001} >
            <HoverCardTrigger>
              <FaEnvelope className="text-dark_green/70 w-6 h-6 cursor-pointer hidden lg:flex" 
               onClick={() => {
                navigate("/recruiter/messages");
              }}
              />
            </HoverCardTrigger>
         
            <HoverCardContent
              className="flex flex-col gap-5 bg-white !z-[99]  w-fit"
              onClick={() => {
                navigate("/recruiter/messages");
              }}
            >
              <div className=" bg-primary_blue rounded-md">
                <div className="flex p-3 py-2 items-center gap-2">
                  <Avatar>
                    <AvatarImage src={Dmitry} alt="User" />
                    <AvatarFallback>DM</AvatarFallback>
                  </Avatar>
                  <p className=" font-Jakarta text-[13px]  leading-4 font-medium text-white">
                    My messages
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {chatData.map((chat, index) => (
                  <MessageCard chat={chat} key={index} />
                ))}
              </div>
            </HoverCardContent>
              
          </HoverCard>
              )}

          <HiBell className="text-dark_green/70 w-6 h-6 cursor-pointer hidden md:flex" />

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                " bgw lg:bg-[#F7F7F7] cursor-pointer flex items-center gap-2 rounded-[30px] p-3 ",
                path === "jobs" && " hidden lg:flex"
              )}
            >
              <img
                src={Dmitry}
                alt=""
                className=" rounded-[100%] object-cover w-8 h-8"
              />
              <ChevronDown className="text-dark_green/70 text-[25px]  " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[290px] bg-white rounded !p-0  flex flex-col gap-5">
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
                  </div>
                  <Link
                    to={"/recruiter/profile"}
                    className=" font-Jakarta text-base cursor-pointer hover:underline hover:underline-offset-1 font-semibold text-center text-dark_green "
                  >
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

          {path === "jobs" && (
            <Sheet>
              <SheetTrigger className=" lg:hidden">
                <ListFilter className="h-6 w-6 text-dark_green" />
              </SheetTrigger>
              <SheetOverlay>
                <SheetContent className="flex flex-col gap-5 bg-accent_blue">
                  <SheetHeader className=" w-full bg-white p-3 text-center font-Jakarta font-medium text-[25px] leading-9 text-dark_green">
                    Filter
                  </SheetHeader>
                  <Separator />
                  <Filter className="flex flex-col gap-5 justify-start items-start" />
                </SheetContent>
              </SheetOverlay>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterFeedNavbar;
