import { projectCategory, serviceCategory } from "@/constants";
import { useProjectDisplay } from "@/store";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { FC, useRef } from "react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BiSolidBriefcase } from "react-icons/bi";
import { Separator } from "../ui/separator";

const ProjectCategories: FC = () => {
  const view = useProjectDisplay((state) => state.view);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += direction === "right" ? 100 : -100;
    }
  };

  return (
    <div className="   relative">
      <Button
        className=" hidden md:flex lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white rounded-full p-2 ml-5"
        onClick={() => handleScroll("left")}
      >
        <ArrowLeft className=" h-6 w-6 text-dark_green" />
      </Button>
      <Button
        className=" hidden md:flex lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white rounded-full p-2 mr-5"
        onClick={() => handleScroll("right")}
      >
        <ArrowRight className=" h-6 w-6 text-dark_green" />
      </Button>

      <div
        className="flex gap-5 items-center max-w-[80%] mx-auto overflow-x-auto hide-scrollbar hide-scrollbar::-webkit-scrollbar "
        ref={containerRef}
      >
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Plus className=" h-10 w-10 text-white p-2 bg-primary_blue rounded-full" />
          <p className=" font-Jakarta font-normal text-base text-dark_green whitespace-nowrap">
            Add new
          </p>
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" max-w-[344px] rounded-[10px] bg-white py-[27px] px-[10px] flex  flex-col gap-5 ">
          <div onClick={() => useProjectDisplay.setState({
            addNew: "projects"
          })} className=" w-full justify-between gap-5 items-center flex px-4 py-2 bg-dark_green/10 border border-dark_green/10 rounded-md cursor-pointer">
            <div className="flex gap-[10px] items-center h-fit">
              <BiSolidBriefcase className=" h-6 w-6 text-dark_green/70" />
              <Separator orientation="vertical" className="h-[30px] bg-dark_green/70" />
              <div className="flex flex-col gap-1">
                <p className=" font-Jakarta font-semibold text-xs text-dark_green/70">
                  Project
                </p>
                <span className=" font-Jakarta font-normal text-xs text-dark_green/70">
                  Showcase your personal projects
                </span>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-dark_green/70 "/>
          </div>

          <div onClick={() => useProjectDisplay.setState({
            addNew: "services"
          })} className=" w-full justify-between items-center flex px-4 py-2  bg-dark_green/10 border border-dark_green/10 rounded-md cursor-pointer">
            <div className="flex gap-[10px] items-center h-full">
              <BiSolidBriefcase className=" h-6 w-6 text-dark_green/70" />
              <Separator orientation="vertical" className="h-[30px] bg-dark_green/70" />
              <div className="flex flex-col gap-1">
                <p className=" font-Jakarta font-semibold text-xs text-dark_green/70">
                  Services
                </p>
                <span className=" font-Jakarta font-normal text-xs text-dark_green/70">
                  Showcase your services and 
                </span>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-dark_green/70 "/>
          </div>

        </DropdownMenuContent>
        </DropdownMenu>
        {
          {
            projects: 
           ( <div className=" flex gap-5">
            {projectCategory.map((category, index) => (
              <div className="flex w-[150px] gap-2 items-start " key={index}>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex items-center ">
                    <img src={category.icon} alt="" className="h-10 w-10" />
                    {category.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="h-[40px] w-[40px] rounded"
                      />
                    ))}
                  </div>
                  <p className=" font-Jakarta font-normal text-base text-dark_green">
                    {category.name}
                  </p>
                </div>
              </div>
            ))}
            </div>),

            services: (
              <div className=" flex gap-5">
                {serviceCategory.map((category, index) => (
                  <div
                    key={index}
                    className="w-[140px]  h-[55px]  relative group cursor-pointer rounded-[10px]"
                  >
                    <img
                      src={category.image}
                      alt=""
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                    <div className=" absolute top-0 right-0 left-0 h-full rounded-[10px] w-full bg-dark_green/70 group-hover:bg-dark_green/50 flex justify-center items-center ">
                      <p className=" font-Jakarta text-white font-medium text-xs uppercase">
                        {category.name}
                      </p>
                    </div>
                  </div>
                ))}
                ,
              </div>
            ),
          }[view]
        }
      </div>
    </div>
  );
};

export default ProjectCategories;
