import React, { FC } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '../ui/button'


interface ProjectCardProps {
    project: {
        username: string
        userImage: string
        projectImage: string
        rating: string
        projectCategory: string
        projectTitle: string
        projectDescription: string
    }

}
const ProjectCard: FC<ProjectCardProps> = ({
    project
}) => {
  return (
    <Card
    className="w-[280px] mx-auto bg-dark_green/70 rounded-[17px] flex flex-col shrink-0 grow-0   gap-[10px] border-none p-4"
  >
    <CardHeader className="flex flex-row gap-2 items-center !p-0">
      <Avatar>
        <AvatarImage src={project.userImage} alt="" />
        <AvatarFallback>
          {project.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <h1 className=" font-Jakarta text-white flex gap-1 font-medium text-[13px] leading-6">
        {project.username}
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <g clip-path="url(#clip0_2104_18937)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.21966 0.612036C5.09761 0.489998 4.89978 0.489998 4.77774 0.612036L3.61926 1.77051H2.08203C1.90944 1.77051 1.76953 1.91042 1.76953 2.08301V3.62023L0.611059 4.77872C0.489022 4.90076 0.489022 5.09859 0.611059 5.22063L1.76953 6.37913V7.91634C1.76953 8.08892 1.90944 8.22884 2.08203 8.22884H3.61926L4.77774 9.3873C4.89978 9.50934 5.09761 9.50934 5.21966 9.3873L6.37816 8.22884H7.91536C8.08795 8.22884 8.22786 8.08892 8.22786 7.91634V6.37913L9.38632 5.22063C9.50836 5.09859 9.50836 4.90076 9.38632 4.77872L8.22786 3.62023V2.08301C8.22786 1.91042 8.08795 1.77051 7.91536 1.77051H6.37816L5.21966 0.612036ZM6.00941 3.757L4.46386 5.59692L3.7454 4.97217L3.33528 5.4438L4.53349 6.48571L6.48795 4.15899L6.00941 3.757Z"
                fill="#0085FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2104_18937">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </h1>
    </CardHeader>
    <div className=" relative">
      <img
        src={project.projectImage}
        alt=""
        className="rounded-[5px] w-full h-[140px] object-cover"
      />
      <div className="absolute bottom-0 left-0 flex flex-row text-white items-center gap-2 p-3 font-Jakarta text-[13px] font-medium">
        <Star fill='#FFC107' className="text-[#FFC107] text-[20px]" />
        {project.rating}
      </div>
      <div className="absolute top-0 right-0 flex flex-row text-black bg-[#F0DB4F]/50 border border-[#F0DB4F] rounded-[5px] items-center  p-3 m-2 font-Jakarta text-[13px] font-medium">
        {project.projectCategory}
      </div>
    </div>
    <CardContent className="flex flex-col gap-2 !p-0">
      <CardTitle className="font-Jakarta text-white text-[20px] font-semibold leading-7">
        {project.projectTitle}
      </CardTitle>
      <CardDescription className="font-Jakarta text-white/70 text-[13px] font-normal leading-normal">
        {project.projectDescription}
      </CardDescription>
    </CardContent>
    <CardFooter className=" border-t-[2px] border-dark_green/70 !p-0">
      <Button className="font-Jakarta font-semibold flex flex-row gap-2 text-[16px] leading-normal mx-auto border-none outline-none  text-white hover:text-white px-4 pt-3 bg-transparent hover:bg-transparent border border-white rounded-[5px]">
        View more
        <ArrowRight className="text-white text-[20px]" />
      </Button>
    </CardFooter>
  </Card>
  )
}

export default ProjectCard