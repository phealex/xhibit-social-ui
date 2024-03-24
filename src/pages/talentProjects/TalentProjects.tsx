import { ProjectCategories, ProjectHeader } from "@/components"
import { FC } from "react"

const TalentProjects: FC = () => {
  return (
    <div className=" min-h-screen bg-accent_blue flex flex-col gap-[50px]">
        <ProjectHeader />
        <ProjectCategories />

    </div>
  )
}

export default TalentProjects