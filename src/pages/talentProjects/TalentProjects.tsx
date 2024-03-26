import { ProjectCategories, ProjectHeader, ProjectsDisplay } from "@/components"
import { FC } from "react"

const TalentProjects: FC = () => {
  return (
    <div className=" min-h-screen bg-accent_blue flex flex-col gap-[50px]">
        <ProjectHeader />
        <ProjectCategories />
        <ProjectsDisplay />

    </div>
  )
}

export default TalentProjects