import { Logo } from "@/assets";
import { Menu } from "lucide-react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

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

  const { pathname } = useLocation();
  return (
    <div className=" bg-home_gradient w-full  ">
      <nav className="flex justify-between w-[90%] mx-auto py-5  items-center">
        <div className="flex items-center gap-[15px] sm:gap-[30px]">
          <div className="block md:hidden">
            <Menu size={24} color="#fff" />
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
          <Button className="text-white font-Jakarta bg-primary_blue hover:bg-primary_blue rounded-[5px] font-medium text-base px-5 py-[10px]">
            Log In
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
