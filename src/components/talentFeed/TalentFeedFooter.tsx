import { talentFeedHeaders } from "@/constants";
import { FC } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const TalentFeedFooter: FC = () => {
  const path = useLocation().pathname.split("/")[0];

  return (
    <div className=" bg-white p-5 md:px-10 z-[99]  flex justify-between items-center lg:hidden sticky bottom-0 left-0 right-0 ">
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
      <div
        className={`font-Jakarta flex items-center gap-2 uppercase flex-col text-base ${
          "message" === path
            ? " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
            : "text-dark_green/70"
        }`}
      >
        <FaEnvelope className=" w-6 h-6" />
        Message
      </div>
    </div>
  );
};

export default TalentFeedFooter;
