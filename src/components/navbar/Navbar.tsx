import { Logo } from "@/assets";
import { Menu } from "lucide-react";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="w-[90%] ">
      <nav className="container flex justify-between items-center">
        <div className="flex items-center">
          <div className="block md:hidden">
            <Menu size={24} color="#fff" />
          </div>
          <div className="flex items-center">
            <img src={Logo} alt="" />
            <p className="font-Jakarta text-white text-base font-semibold sm:text-xl sm:font-normal sm:leading-7 ">
              The Xhibit
            </p>
          </div>
        </div>
        <div className=""></div>
      </nav>
    </div>
  );
};

export default Navbar;
