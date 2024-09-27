import {
  Certification,
  Education,
  Experience,
  Headline,
  Links,
  ProfileBanner,
  Projects,
  Role,
  Skills,
  Socials,
  Tools,
  ProfileStrength,
  InterviewQuestions,
  TopJobs,
  TopRecruiters,
  TopCourses,
} from "@/components";
import { FC } from "react";

const TalentProfile: FC = () => {
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
      <div className="container mx-auto flex gap-5">
        <section className="w-[290px] flex-shrink-0 hidden lg:flex flex-col gap-5">
          <ProfileStrength />
          <TopJobs />
          <TopRecruiters />
          <TopCourses />
          <InterviewQuestions />
          <Links />
        </section>
        <section className="flex flex-1 flex-col gap-10 w-full">
          <ProfileBanner />
          <Headline />
          <Role />
          <Experience />
          <Skills />
          <Projects />
          <Certification />
          <Education />
          <Socials />
          <Tools />
        </section>
      </div>
    </div>
  );
};

export default TalentProfile;
