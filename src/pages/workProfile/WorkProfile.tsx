import { UserBanner } from "@/assets";
import { FC } from "react";
import {
  Certification,
  Education,
  Experience,
  Headline,
  HireTalent,
  Links,
  ProfileBanner,
  ProjectCard,
  Projects,
  Role,
  ServiceCard,
  ServiceProjectsDisplay,
  Skills,
  Socials,
  Tools,
  UserCard,
  UserExperience,
  UserPosts,
  UserProjects,
  UserSkills,
  UserTools,
} from "@/components";
import { Separator } from "@/components/ui/separator";
import { useWorkProfileState } from "@/store";
import { cn } from "@/lib/utils";
import { projects, servicesData } from "@/constants";

const WorkProfile: FC = () => {
  const activeTab = useWorkProfileState((state) => state.activeTab);
  return (
    <div className="bg-accent_blue min-h-screen w-full ">
      <img src={UserBanner} alt="" className=" w-full h-[180px] object-cover" />

      <div className="container mx-auto flex gap-5">
        <section className="w-[20%] hidden lg:flex flex-col gap-5 -mt-28">
          <UserCard />
          {/* <HireTalent /> */}
          <UserTools />
        </section>
        <section className="flex flex-1 flex-col gap-10 w-full mt-10">
          <div className="flex md:hidden -mt-28">
          <UserCard />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-10 items-center">
              <p
                onClick={() => {
                  useWorkProfileState.setState({ activeTab: "about" });
                }}
                className={cn(
                  " font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                  activeTab === "about" &&
                    "text-primary_blue underline underline-offset-2"
                )}
              >
                About
              </p>
              <p
                onClick={() => {
                  useWorkProfileState.setState({ activeTab: "service" });
                }}
                className={cn(
                  " font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                  activeTab === "service" &&
                    "text-primary_blue underline underline-offset-2"
                )}
              >
                Service
              </p>
              <p
                onClick={() => {
                  useWorkProfileState.setState({ activeTab: "project" });
                }}
                className={cn(
                  " font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                  activeTab === "project" &&
                    "text-primary_blue underline underline-offset-2"
                )}
              >
                Project
              </p>
            </div>
            <Separator orientation="horizontal" className="w-full" />
          </div>
          {
            {
              about: (
                <div className=" flex flex-col gap-10">
                  <Headline />
                  <Role />
                  <Experience />
                  <Skills />
                  <Projects />
                  <Certification />
                  <Education />
                  <Socials />
                  <Tools />
                </div>
              ),
              service: (
                <div className="flex items-center gap-10 flex-wrap">
                  {servicesData.map((service, index) => (
                    <ServiceProjectsDisplay service={service} key={index} />
                  ))}
                </div>
              ),
              project: (
                <div className="flex items-center gap-10 flex-wrap">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              ),
            }[activeTab]
          }
        </section>
      </div>
    </div>
  );
};

export default WorkProfile;
