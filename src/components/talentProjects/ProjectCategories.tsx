import { projectCategory, serviceCategory } from "@/constants";
import { useProjectDisplay } from "@/store";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { FC, useRef } from "react";
import { Button } from "../ui/button";

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
        <div className="flex flex-col gap-2 items-center">
          <Plus className=" h-10 w-10 text-white p-2 bg-primary_blue rounded-full" />
          <p className=" font-Jakarta font-normal text-base text-dark_green whitespace-nowrap">
            Add new
          </p>
        </div>
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
