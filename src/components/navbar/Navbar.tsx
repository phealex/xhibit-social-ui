import { Logo } from "@/assets";
import { Menu, X } from "lucide-react";
import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "../ui/sheet";

const Navbar: FC = () => {
  const MenuItems: {
    name: string;
    link: string;
  }[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "View Jobs",
      link: "/jobs",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  const [showSmSidebar, setShowSmSidebar] = useState(false);
  const [showMdSidebar, setShowMdSidebar] = useState(false);

  const handleShowNavbar = () => {
    if (window.innerWidth <= 638) {
      setShowMdSidebar(false);
      setShowSmSidebar(true);
      return;
    } else {
      setShowSmSidebar(false);
      setShowMdSidebar(true);
      return;
    }
  };

  const { pathname } = useLocation();
  return (
    <div className=" bg-home_gradient w-full  ">
      <Sheet>
        <nav className="flex justify-between w-[90%] mx-auto py-5  items-center">
          <div className="flex items-center gap-[15px] sm:gap-[30px]">
            <div className="block lg:hidden">
              <SheetTrigger>
                <Menu
                  size={24}
                  color="#fff"
                  className="cursor-pointer"
                  onClick={handleShowNavbar}
                />
              </SheetTrigger>
            </div>
            <div className="flex items-center gap-20 xl:gap-[108px]">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="" className="h-10 w-7" />
                <p className="font-Jakarta text-white text-base font-semibold sm:text-xl sm:font-normal sm:leading-7 ">
                  The Xhibit
                </p>
              </div>
              <div className="hidden lg:flex gap-[60px] items-center">
                {MenuItems.map((item, index) => (
                  <div
                    className="flex flex-col min-w-fit gap-1 items-center"
                    key={index}
                  >
                    <Link
                      to={item.link}
                      className={`font-Jakarta    text-base pb-[5px]  font-medium ${
                        pathname === item.link ? "text-white" : "text-white/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {pathname === item.link && (
                      <div className="  bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2 tr w-full h-1 rounded-t-md"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[49px]">
            <div className="relative p-0.5 hidden sm:flex">
              <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-lg"></div>
              <Button className="text-white relative bg-home_gradient hover:bg-transparent font-Jakarta font-medium text-base  rounded-[5px] px-5 py-[10px]  shadow-xl shadow-home_border_gradient">
                Hire Talent
              </Button>
            </div>
            <Button className="text-white font-Jakarta bg-primary_blue hover:text-primary_blue hover:bg-white border-primary_blue border  rounded-[5px] font-medium text-base px-5 py-[10px]">
              Log In
            </Button>
          </div>
        </nav>
        <div className="  bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2 tr w-full h-[1px]"></div>
        {/* {showSmSidebar && ( */}
        <SheetOverlay className="fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500">
          <SheetContent
            side={showSmSidebar ? "left" : "top"}
            className={` lg:hidden flex flex-col gap-5 ${
              showSmSidebar && "bg-home_gradient"
            } ${showMdSidebar && "bg-[rgba(6,13,17,0.5)]"} `}
          >
            <SheetHeader className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center ">
                  <SheetClose>
                    <X className="h-6 w-6 text-white" />
                  </SheetClose>
                  <div className="flex items-center gap-3">
                    <img src={Logo} alt="" className="h-10 w-7" />
                    <p className="font-Jakarta text-white text-base font-semibold sm:text-xl sm:font-normal sm:leading-7 ">
                      The Xhibit
                    </p>
                  </div>
                </div>
                {showMdSidebar && (
                  <div className="flex items-center gap-5">
                  
                    <div className="relative p-0.5">
                      <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-lg"></div>
                      <Button className="text-white relative bg-home_gradient hover:bg-transparent font-Jakarta font-medium text-base  rounded-[5px] px-5 py-[10px]  shadow-xl shadow-home_border_gradient">
                        Hire Talent
                      </Button>
                    </div>
                    <Button className="text-white font-Jakarta bg-primary_blue hover:text-primary_blue hover:bg-white border-primary_blue border  rounded-[5px] font-medium text-base px-8 py-[10px]">
                      Log In
                    </Button>
                  </div>
                )}
              </div>
              <div className="  bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2 tr w-full h-[1px]"></div>
            </SheetHeader>
            <div
              className={`flex flex-col gap-5 mt-10 ${
                showMdSidebar && " w-full text-center justify-center"
              }`}
            >
              {MenuItems.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className={`font-Jakarta max-w-fit text-white text-base font-medium sm:text-xl sm:font-normal sm:leading-7 ${
                    pathname === item.link ? "text-white" : "text-white/70"
                  } ${showMdSidebar && " w-full text-center max-w-full"} `}
                >
                  <SheetClose>{item.name}</SheetClose>
                </Link>
              ))}
            </div>
            {showSmSidebar && (
              <div className="flex items-center gap-4">
                <div className="relative p-0.5 w-1/2">
                  <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-lg"></div>
                  <Button className="text-white w-full relative bg-home_gradient hover:bg-transparent font-Jakarta font-medium text-base  rounded-[5px] px-5 py-[10px]  shadow-xl shadow-home_border_gradient">
                    <SheetClose>Hire Talent</SheetClose>
                  </Button>
                </div>
                <Button className="text-white w-1/2 font-Jakarta bg-primary_blue hover:text-primary_blue hover:bg-white border-primary_blue border  rounded-[5px] font-medium text-base px-5 py-[10px]">
                  <SheetClose>Log In</SheetClose>
                </Button>
              </div>
            )}
          </SheetContent>
        </SheetOverlay>
      </Sheet>
      {/* )} */}
    </div>
  );
};

export default Navbar;
