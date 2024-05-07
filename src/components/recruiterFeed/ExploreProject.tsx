import { FC } from "react";
import { Separator } from "../ui/separator";
import { ProjectCard, UserCard} from "..";
import { projects } from "@/constants";

const ExploreProject: FC = () => {
  return (
    <div className=" bg-white w-full p-[30px] flex flex-col gap-5 rounded-md shadow-lg shadow-white">
      <p className=" font-Jakarta font-normal text-xl text-dark_green underline underline-offset-auto">
        Explore projects
      </p>
      <Separator />
      <div className="flex gap-5 w-full overflow-x-auto no-scrollbar">
      {
        projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
        ))
      }
      </div>
    </div>
  );
};

export default ExploreProject;
