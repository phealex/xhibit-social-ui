import { FC } from "react"
import { Card, CardContent, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { FigmaProject } from "@/assets"
import { FaFigma } from "react-icons/fa"
import { Button } from "../ui/button"

const UserProjects: FC = () => {
  return (
    <Card>
        <CardContent className=" bg-white flex flex-col gap-3 justify-between p-6 rounded-[5px] min-h-[353px]">

        <CardTitle className=" font-Jakarta font-semibold text-[20px] leading-7 text-dark_green">
            My Projects
        </CardTitle>
        <Separator  />
        <div className="flex flex-col gap-5 w-[90%]">
            <div className="flex gap-2 items-center">
                <img src={FigmaProject} alt="" className="w-[80px] h-[52px] object-cover" />
                <div className="flex gap-1 flex-col ">
                    <h1 className=" font-Jakarta font-semibold leading-[15px] text-[13px] text-dark_green ">
                    How i make figma component's
                    </h1>
                    <div className="flex gap-1 items-center">
                        <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                        Figma project
                        </p>
                        <FaFigma />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <img src={FigmaProject} alt="" className="w-[80px] h-[52px] object-cover" />
                <div className="flex gap-1 flex-col ">
                    <h1 className=" font-Jakarta font-semibold leading-[15px] text-[13px] text-dark_green ">
                    How i make figma component's
                    </h1>
                    <div className="flex gap-1 items-center">
                        <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                        Figma project
                        </p>
                        <FaFigma />
                    </div>
                </div>
            </div> <div className="flex gap-2 items-center">
                <img src={FigmaProject} alt="" className="w-[80px] h-[52px] object-cover" />
                <div className="flex gap-1 flex-col ">
                    <h1 className=" font-Jakarta font-semibold leading-[15px] text-[13px] text-dark_green ">
                    How i make figma component's
                    </h1>
                    <div className="flex gap-1 items-center">
                        <p className=" font-Jakarta font-normal text-[13px] text-dark_green/70">
                        Figma project
                        </p>
                        <FaFigma />
                    </div>
                </div>
            </div>
        </div>
        <Button className=" bg-transparent hover:bg-transparent font-medium text-base text-dark_green/70 mx-auto">
            View all
        </Button>
        </CardContent>
    </Card>
        )
}

export default UserProjects