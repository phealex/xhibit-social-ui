import {
    AddProject,
  ProjectCategories,
  ProjectHeader,
  ProjectsDisplay,
} from "@/components";
import { useProjectDisplay } from "@/store";
import { ProjectView } from "@/types";
import { FC } from "react";

const TalentProjects: FC = () => {
  const addNew = useProjectDisplay((state) => state.addNew);
  return (
    <div className=" min-h-screen bg-accent_blue flex flex-col gap-[50px]">
      <ProjectHeader />
      {!addNew && (
        <>
          <ProjectCategories />
          <ProjectsDisplay />
        </>
      )}
      {
        {
          projects: <AddProject />,
          services: <div className="">Services</div>,
        }[addNew as ProjectView]
      }
    </div>
  );
};

export default TalentProjects;
