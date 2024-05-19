import {
    AddProject,
  ManageJobs,
  ProjectCategories,
  ProjectHeader,
  ProjectsDisplay,
} from "@/components";
import { useMyJobsState, useProjectDisplay } from "@/store";
import { ProjectView } from "@/types";
import { FC } from "react";

const TalentProjects: FC = () => {
  const addNew = useProjectDisplay((state) => state.addNew);
  const [isAddJob, isEditJob] = useMyJobsState((state) => [state.isAddJob, state.isEditJob]);
  return (
    <div className=" min-h-screen bg-accent_blue flex flex-col gap-[50px]">
      {
        (isAddJob || isEditJob ) ? (
          <div className="">
            <ManageJobs />
          </div>
        ) : (
          <>     
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
          </>
        )
      }
    </div>
  );
};

export default TalentProjects;
