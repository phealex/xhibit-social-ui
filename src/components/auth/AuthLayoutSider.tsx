import { LoginMap, Logo } from "@/assets";
import { loginQuotes } from "@/constants";
import { FC, useEffect, useState } from "react"
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const AuthLayoutSider: FC = () => {

    const [currentQuote, setCurrentQuote] = useState<number>(0);

    useEffect(() => {
        const changeQuote = setInterval(() => {
          setCurrentQuote((prevIndex) =>
            prevIndex === loginQuotes.length - 1 ? 0 : prevIndex + 1
          );
        }, 6000); // Change image every 1 minute
    
        // Cleanup interval on unmount
        return () => clearInterval(changeQuote);
      }, []);
  return (
    <div className="hidden lg:flex w-1/2 bg-[#060D11] min-h-full">
    <div className="w-[80%] mx-auto space-y-5 p-3">
      <Link to={'/'} className="flex gap-2">
        <img src={Logo} alt="" className="h-7 w-7" />
        <p className=" font-Jakarta font-normal text-[20px] leading-7 text-white">
          The Xhibit
        </p>
      </Link>
      <div className="flex flex-col gap-[20px] w-full">
        <p className=" font-Jakarta text-[31px] leading-[44px] text-white/70 text-center w-full">
          We don’t just recruit... we help build your dream team
        </p>
        <img src={LoginMap} alt="" className="" />
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[15px]">
            {loginQuotes[currentQuote] && (
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-2">
                  <FaQuoteLeft className=" text-[30px] text-white/70" />
                  <p className=" font-Jakarta text-white/90 text-[20px] font-light italic leading-7 ">
                    {loginQuotes[currentQuote].quote}
                  </p>
                </div>
                <div className="flex gap-2 items-center max-h-fit">
                  <img
                    src={loginQuotes[currentQuote].img}
                    alt=""
                    className=" h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col justify-between">
                    <h1 className=" font-Jakarta font-semibold text-[16px] text-white/90">
                      {loginQuotes[currentQuote].name}
                    </h1>
                    <p className=" font-Jakarta font-normal text-[13px] leading-6 text-white/70">
                      {loginQuotes[currentQuote].role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 w-full  justify-center items-center">
          {Array.from({ length: loginQuotes.length }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentQuote
                  ? " bg-white"
                  : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AuthLayoutSider