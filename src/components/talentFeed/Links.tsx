import { FC } from "react";
import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";

const UserProjects: FC = () => {
  return (
    <div className=" !visiblebg-transparent flex flex-col gap-5 justify-center items-center p-6 rounded-[5px] min-h-[353px]">
      <Link
        to={"/about"}
        className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green/70"
      >
        About us
      </Link>
      <Link
        to={"/contact"}
        className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green/70"
      >
        Contact us
      </Link>{" "}
      <Link
        to={"/faq"}
        className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green/70"
      >
        FAQ
      </Link>
      <div className="flex gap-1 items-center font-Jakarta text-primary_blue font-medium text-[13px] leading-6">
        <p className="">The Xhibit</p>
        <Copyright className="h-6 w-6" />
        <p>{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default UserProjects;
