import { recruiterFeedHeaders } from "@/constants";
import { cn } from "@/lib/utils";
import { useMessagesDisplay } from "@/store";
import { FC } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const RecruiterFeedFooter: FC = () => {
  const path = useLocation().pathname.split("/")[2];

  const chatToShow = useMessagesDisplay((state) => state.chatToShow);
  return (
    <div className={cn(" bg-white p-5 md:px-10 z-[99]  flex justify-between items-center lg:hidden sticky bottom-0 left-0 right-0 ", chatToShow && "hidden")}>
      {recruiterFeedHeaders.map((header, index) => (
        <Link
          to={`/recruiter/${header.link}`}
          key={index}
          className={`font-Jakarta flex items-center gap-2 uppercase flex-col text-[13px] ${
            header.link === path
              ? " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
              : "text-dark_green/70"
          }
          ${
            !path && index === 0 &&  " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
          }`}
        >
          <header.icon className=" w-6 h-6" />
          {header.title}
        </Link>
      ))}
      <Link
          to={`/recruiter/messages`}
        className={`font-Jakarta flex items-center gap-2 uppercase flex-col text-[13px] ${
          "messages" === path
            ? " text-primary_blue border-b-2 border-b-primary_blue pb-1  "
            : "text-dark_green/70"
        }`}
      >
        <FaEnvelope className=" w-6 h-6" />
        Message
      </Link>
    </div>
  );
};

export default RecruiterFeedFooter;
