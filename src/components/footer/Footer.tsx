import { Logo } from "@/assets";
import { footerLinks, footerSocialIcons } from "@/constants";
import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  
  return (
    <div className="pt-[80px] bg-home_gradient flex flex-col gap-8 lg:justify-between w-full   ">
      <section className="flex gap-10 flex-col pt-10 lg:py-[60px] lg:flex-row  ">
        <div className="flex gap-3 flex-col items-center lg:w-1/2 ">
          <div className="flex gap-2">
            <img src={Logo} alt="" className=" w-10 h-10" />
            <p className="font-Jakarta text-[25px] text-white font-medium leading-[36px">
              The XHIBIT
            </p>
          </div>
          <p className=" font-Jakarta text-[13px] text-white w-[70%] leading-6 font-normal text-center">
            The ultimate destination for connecting creatives and business, a
            revolutionary platform that bridges the gap between innovative
            creators and forward-thinking businesses.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[80px] justify-center">
          {footerLinks.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-Jakarta text-[16px] text-center text-white font-bold leading-normal">
                {item.title}
              </p>
              <div className="flex flex-col items-center gap-2">
                {item.list.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="font-Jakarta text-[16px] text-white/70 leading-normal font-medium hover:text-white/100"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=" bg-dark_green flex flex-1 flex-col md:flex-row-reverse md:justify-around py-10 border-t border-t-white justify-center gap-5 items-center">
        <div className=" mx-auto md:mx-0 flex gap-5">
          {footerSocialIcons.map((item, index) => (
            <Link key={index} to={item.link} className="text-white">
              <item.icon className="w-[24px] h-[24px]" />
            </Link>
          ))}
        </div>

        <p className="font-Jakarta text-[13px] md:text-[16px] text-white/70 leading-6">
          Copyright © {new Date().getUTCFullYear()} XHIBIT. All rights
          reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
