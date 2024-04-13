import { UserBanner } from '@/assets'
import {FC} from 'react'
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
    UserCard,
    UserExperience,
    UserPosts,
    UserProjects,
    UserSkills,
    UserTools,
  } from "@/components";
import { Separator } from '@/components/ui/separator';

const WorkProfile: FC = () => {
  return (
    <div className="bg-accent_blue min-h-screen w-full ">
        <img src={UserBanner} alt="" className=" w-full h-[180px] object-cover" />

        <div className="container mx-auto flex gap-5">
        <section className="w-[20%] hidden lg:flex flex-col gap-5 -mt-28">
          <UserCard />
          <UserTools />
        </section>
        <section className="flex flex-1 flex-col gap-10 w-full mt-10">
            <div className="flex flex-col gap-1">
                <div className="flex gap-10 items-center">
                    <p className=" font-Jakarta font-semibold text-base text-dark_green/70">
                        
                    </p>
                </div>
                <Separator orientation="horizontal" className="w-full" />
            </div>
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
  )
}

export default WorkProfile