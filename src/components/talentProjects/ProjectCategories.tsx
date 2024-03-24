import { projectCategory } from "@/constants";
import { Plus } from "lucide-react";
import { FC } from "react";

const ProjectCategories: FC = () => {
  return (
    <div className=" container flex gap-7 items-center w-full">
      <div className="flex flex-col gap-2 items-center">
        <Plus className=" h-10 w-10 text-white p-2 bg-primary_blue rounded-full" />
        <p className=" font-Jakarta font-normal text-base text-dark_green whitespace-nowrap">
          Add new
        </p>
      </div>
      {projectCategory.map((category, index) => (
        <div className="flex gap-1 items-start " key={index}>
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
    </div>
  );
};

export default ProjectCategories;
