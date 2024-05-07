import { cn } from "@/lib/utils";
import { FC } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TalentShowcaseHeader: FC = () => {
  return (
    <div
      className={cn(
        "h-[350px] w-full bg-cover bg-center bg-no-repeat flex flex-col gap-5 lg:gap-10 justify-center items-center bg-[url('./assets/ShowcaseBanner.svg')]"
      )}
    >
      <div className="flex flex-col justify-center items-center gap-[10px] container w-full lg:w-[60%]">
        <h1 className=" text-xl md:text-[31px] md:leading-[44px] font-medium text-center text-white">
          Welcome to our talent showcase
        </h1>
        <p className="text-white text-center font-normal text-xs md:text-base lg:text-xl">
          Explore a diverse range of talent that exemplify our commitment to
          excellence and innovation. Whether you're interested in our latest
          achievements, ongoing initiatives, or past successes, you'll find a
          snapshot of our work below.
        </p>
      </div>
      <div className=" w-[90%] md:w-4/5  bg-white rounded-[10px] h-[50px] flex items-center justify-between p-2 lg:w-[60%]">
        <div className="flex gap-1 items-center w-full">
          <Search className=" h-6 w-6  text-home_grey" />
          <Input
            placeholder={`Search talent`}
            className=" border-none outline-none focus-visible:ring-transparent w-full font-Jakarta font-normal text-sm text-home_grey placeholder:text-home_grey placeholder:text-sm"
          />
        </div>
        <div className="flex gap-1 items-center w-full">
          <MapPin className=" h-6 w-6  text-home_grey" />
          <Input
            placeholder={`Location`}
            className=" border-none outline-none focus-visible:ring-transparent w-full font-Jakarta font-normal text-sm text-home_grey placeholder:text-home_grey placeholder:text-sm"
          />
        </div>
        <Button className=" bg-primary_blue hover:bg-primary_blue text-white hover:text-white px-5 rounded-[5px]">
          Search
        </Button>
      </div>
    </div>
  );
};

export default TalentShowcaseHeader;
