import { topOffers } from "@/constants";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { HiSparkles } from "react-icons/hi";
import { Star } from "lucide-react";

const TopOffers: FC = () => {
  return (
    <div className="flex gap-[88px] py-[60px] flex-col  ">
      <h1 className=" font-Jakarta text-[16px] font-bold w-[90%] mx-auto text-center leading-normal text-white">
        Empowering you to discover the perfect job fit and turn the world into
        your playground. A market place for{" "}
        <span className=" bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2 bg-clip-text text-transparent">
          {" "}
          tech talents
        </span>
      </h1>
      <div className="flex gap-5 overflow-x-scroll">
        {topOffers.map((offer, index) => (
          <div
            className="relative p-0.5   mt-10 shrink-0 w-[361px] h-[383px] "
            key={index}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r  h-full !border-none ${
                index % 2 === 0
                  ? "from-[#323C45B2] to-home_border_gradient_color_2 "
                  : " from-[#323C45B2] to-home_border_gradient_color_1"
              }   rounded-[27px]`}
            ></div>
            <Card className="relative bg-[#323C45]/95 w-full h-full rounded-[27px] !border-none  ">
              <CardContent className="flex flex-col gap-[50px] justify-between h-full  w-full  relative  ">
                <div className="flex justify-between w-full">
                  <div className=" flex gap-2 items-center">
                    <Avatar className=" -mt-8 h-[100px] w-[100px] ">
                      <AvatarImage src={offer.img} className=" " />
                      <AvatarFallback>Logo</AvatarFallback>
                    </Avatar>
                    {offer?.companyName && (
                      <p className=" font-Jakarta text-[18px] flex gap-2 font-semibold text-white leading-normal">
                        {offer.companyName}
                        <span className="flex gap-1 items-center text-white/70">
                          {offer.rating.toFixed(1)}
                          <Star
                            size={15}
                            fill="#FFC107"
                            className=" text-[#FFC107] text-[12px]"
                          />{" "}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2 ">
                    {offer.category === "Talent" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H11.8L15 2.5H9.5L6.5 13H10.8L8.5 22.5L16.5 11Z"
                          fill="url(#paint0_linear_2104_17644)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2104_17644"
                            x1="11"
                            y1="6.5"
                            x2="11"
                            y2="18"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#7559E5" />
                            <stop offset="1" stop-color="white" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <HiSparkles className="text-[20px] text-white" />
                    )}
                    <p className=" font-Jakarta text-white font-medium leading-6 text-[13px] ">
                      {offer.category}
                    </p>
                  </div>
                </div>

                <div className="flex relative flex-col gap-[81px]">
                  <div className="flex gap-5 flex-col ">
                    <div className="flex gap-2 flex-col">
                      <h1 className=" font-Jakarta text-white text-[16px] md:text-[20px] font-medium leading-normal">
                        {offer.title}
                      </h1>
                      {offer.category === "Talent" ? (
                        <div className="flex gap-1 font-Jakarta text-white/70 text-[13px] font-medium leading-6">
                          Rating:
                          <div className="flex gap-1 items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, index) => {
                                return index < offer.rating ? (
                                  <Star
                                    size={15}
                                    fill="#FFC107"
                                    className="text-[#FFC107] text-[12px]"
                                  />
                                ) : (
                                  <Star
                                    size={15}
                                    fill="#FFFFFF33"
                                    className="text-[#FFFFFF33] text-[12px]"
                                  />
                                );
                              })}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <p className=" font-Jakarta text-white/70 font-medium text-[16px]  leading-normal">
                            {offer.jobType}
                          </p>
                          <p className=" font-Jakarta text-white font-medium text-[16px]  leading-normal">
                            {offer.pay}
                          </p>
                        </div>
                      )}
                   
                    </div>
                    <div className=" flex flex-col gap-2">
                      <p className=" font-Jakarta text-[16px] md:text-[20px] font-semibold leading-7 text-white">
                        {offer.category === "Talent"
                          ? "Skills"
                          : "Skills needed"}
                      </p>
                      <div className="flex gap-2">
                        {offer.skills.map((skill, index) => (
                          <p
                            className="p-[6px] font-Jakarta bg-[#323C45]/70  rounded-[5px] text-[20px] text-white font-medium leading-7"
                            key={index}
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOffers;
