import { FC } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useProjectDisplay } from "@/store";
import { projects } from "@/constants";
import { Mail, MapPin, Newspaper } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { ProjectCard } from "..";

const ProjectDetailsModal: FC = () => {
  const showProjectDetails = useProjectDisplay(
    (state) => state.showProjectDetails
  );
  const projectToShowId = useProjectDisplay((state) => state.projectToShowId);
  const project = projects.find((project) => project.id === projectToShowId);
  const projectModalActive = useProjectDisplay(
    (state) => state.projectModalActive
  );
  return (
    <div className="">
      {project?.id ? (
        <Dialog
          open={showProjectDetails}
          onOpenChange={() => {
            useProjectDisplay.setState({ showProjectDetails: false });
          }}
        >
          <DialogContent className="p-10 flex flex-col gap-[30px] items-center max-h-[80%] max-w-[700px] overflow-y-auto">
            <div className="flex gap-5 flex-col items-center">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex items-center flex-col gap-5">
                  <img src={project.userImage} alt="" className=" h-20 w-20" />
                  <div className="flex flex-col items-center gap-2">
                    <h1 className=" font-Jakarta font-semibold text-2xl text-dark_green">
                      {project?.username}
                    </h1>
                    <p className="flex gap-2 items-center font-Jakarta font-medium text-base text-home_grey">
                      <MapPin className="h-5 w-5 text-home_grey " />
                      Lagos, NG
                    </p>
                  </div>
                </div>
                <p className=" bg-primary_blue/5 px-[10px] py-[5px] font-Jakarta font-medium text-xs text-dark_green/70  ">
                  3 Projects completed on XHIBIT
                </p>
              </div>
              <div className="flex items-center gap-[30px] ">
                <Button className=" bg-dark_green/5 py-1 h-7 px-5 flex items-center gap-1 rounded-md hover:bg-dark_green/5 font-Jakarta font-medium text-xs text-dark_green/70 ">
                  <Mail className="h-4 w-4 text-dark_green/70" />
                  Hire talent
                </Button>

                <Button className=" bg-dark_green/5 py-1 h-7 px-5 flex items-center gap-1 rounded-md hover:bg-dark_green/5 font-Jakarta font-medium text-xs text-dark_green/70 ">
                  <Newspaper className="h-4 w-4 text-dark_green/70" />
                  View work profile
                </Button>
              </div>
            </div>
            <div className="flex gap-10 flex-col w-full">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex w-full gap-5 items-center justify-center ">
                  <p
                    onClick={() => {
                      useProjectDisplay.setState({
                        projectModalActive: "projects",
                      });
                    }}
                    className={cn(
                      "font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                      projectModalActive === "projects" &&
                        "text-primary_blue underline underline-offset-4"
                    )}
                  >
                    Projects
                  </p>
                  <p
                    onClick={() => {
                      useProjectDisplay.setState({
                        projectModalActive: "reviews",
                      });
                    }}
                    className={cn(
                      "font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                      projectModalActive === "reviews" &&
                        "text-primary_blue underline underline-offset-4"
                    )}
                  >
                    Reviews (2)
                  </p>
                </div>
                <Separator />
              </div>
              <div className=" w-full flex justify-center ">
                {
                  {
                    projects: (
                      <div className="flex gap-5 flex-wrap items-center mx-auto">
                        {
                          projects.slice(0,3).map((project, index) => (
                            <ProjectCard key={index} project={project} showMore={false} />
                          ))
                        }
                      </div>
                    ),
                    reviews: <div className=""></div>,
                  }[projectModalActive]
                }
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};

export default ProjectDetailsModal;
