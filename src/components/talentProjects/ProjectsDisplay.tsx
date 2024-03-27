import { useProjectDisplay } from "@/store";
import { FC } from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projects, servicesData } from "@/constants";
import { ProjectCard } from "..";
import { Button } from "../ui/button";
import ServiceProjectsDisplay from "./ServiceProjectsDisplay";

const ProjectsDisplay: FC = () => {
  const view = useProjectDisplay((state) => state.view);
  return (
    <div className=" w-full container flex flex-col gap-[50px] mb-20">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row gap-5 justify-between w-full items-center">
          <div className=" flex w-full gap-10">
            <p
              className={cn(
                " font-Jakarta font-semibold text-base cursor-pointer text-dark_green/70",
                view === "projects" &&
                  "text-primary_blue underline underline-offset-4"
              )}
              onClick={() => {
                if (view === "projects") return;
                useProjectDisplay.setState({ view: "projects" });
                window.scrollTo(0, 0);
              }}
            >
              Trending projects
            </p>
            <p
              className={cn(
                " font-Jakarta font-semibold text-base cursor-pointer text-dark_green/70",
                view === "services" &&
                  "text-primary_blue underline underline-offset-4"
              )}
              onClick={() => {
                if (view === "services") return;
                useProjectDisplay.setState({ view: "services" });
                window.scrollTo(0, 0);
              }}
            >
              Services
            </p>
          </div>
        <Separator className=" flex md:hidden w-full bg-dark_green/10" />
          <Select>
            <SelectTrigger className="!p-0 !h-fit  justify-end bg-transparent border-none outline-none ring-transparent font-Jakarta text-[13px] placeholder:text-primary_blue text-primary_blue font-medium  ">
              <SelectValue
                placeholder="All projects"
                className=" whitespace-nowrap"
              />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              <SelectItem value="sale">Projects for sale</SelectItem>
              <SelectItem value="downloadable">
                Downloadable projects
              </SelectItem>
              <SelectItem value="view">View only projects </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className=" hidden md:flex w-full bg-dark_green/10" />
      </div>
      <div className={cn("flex flex-wrap gap-10 justify-center items-center  ", view === "services" && "gap-4 lg:gap-10")}>
        {
          {
            projects: projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            )),
            services: servicesData.map((service, index) => (
                <ServiceProjectsDisplay key={index} service={service} />
            )),
          }[view]
        }
      </div>
      <Button className=" bg-transparent hover:bg-transparent text-dark_green hover:text-dark_green mx-auto w-fit p-3 rounded-3xl border border-dark_green">
        Load More
      </Button>
    </div>
  );
};

export default ProjectsDisplay;
