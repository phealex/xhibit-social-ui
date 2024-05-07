import { FC } from "react";
import { Separator } from "../ui/separator";
import { ServiceProjectsDisplay} from "..";
import { servicesData } from "@/constants";

const ExploreServices: FC = () => {
  return (
    <div className=" bg-white w-full p-[30px] flex flex-col gap-5 rounded-md shadow-lg shadow-white">
      <p className=" font-Jakarta font-normal text-xl text-dark_green underline underline-offset-auto">
        Explore services
      </p>
      <Separator />
      <div className="flex gap-5 w-full overflow-x-auto no-scrollbar">
      {
        servicesData.map((service, i) => (
          <ServiceProjectsDisplay key={i} service={service} />
        ))
      }
      </div>
    </div>
  );
};

export default ExploreServices;
