import { addProjectHeader } from "@/constants";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { Check } from "lucide-react";
import { useMultiStepForm } from "@/hooks";
import { Step1 } from "..";
import { useProjectDisplay } from "@/store";

const AddProject: FC = () => {
  const [activeHeader, setActiveHeader] = useState<string[]>(
   [ addProjectHeader[0].title]
  );
  const [completedHeader, setCompletedHeader] = useState<string[]>([addProjectHeader[0].title]);

  function handlePrev() {
    if (isFirstStep) {
        useProjectDisplay.setState({ addNew: null });
        return;
    }

    prev();
    setActiveHeader((prev) => prev.slice(0, prev.length - 1));
  } 

    function handleNext() {
        if (isLastStep) return;
        next();
        setActiveHeader((prev) => [...prev, addProjectHeader[currentStep].title]);
        setCompletedHeader((prev) => [...prev, addProjectHeader[currentStep -1].title]);
    }

  const { step, isLastStep, isFirstStep, currentStep, prev, next} = useMultiStepForm([
    <Step1 handlePrev={handlePrev} handleNext={handleNext} />,
  ])
  return (
    <div className=" container flex gap-10 mb-20">
      <div className="hidden  md:flex flex-col gap-5 items-start md:w-[261px] lg:w-[342px] h-[678px] bg-dark_green/5 p-2 lg:pl-5 border border-dark_green/5 justify-center  rounded-[2px] rounded-tr-[82px]  ">
        {addProjectHeader.map((header, index) => (
          <div className="flex gap-2 items-start" key={index}>
            <div className="flex flex-col gap-1  items-center">
              <div
                className={cn(
                  " h-10 w-10 bg-home_grey/30 flex items-center justify-center rounded-full  ",
                  activeHeader.includes(header.title) && "bg-primary_blue/40", completedHeader.includes(header.title) && "bg-primary_blue"
                )}
              >
                {
                    completedHeader.includes(header.title) ? (
                       <Check className="text-primary_blue h-4 w-4 p-[2px] font-bold bg-white rounded-full"  />
                    ) : (
                        <div
                        className={cn(
                            " h-4  w-4 bg-home_grey rounded-full",
                            activeHeader.includes(header.title) && "bg-primary_blue"
                        )}
                        ></div>
                    )
                }
               
              </div>
             { 
              <Separator
                className={cn(
                  "h-[120px] w-1 bg-home_grey ",
                  activeHeader.includes(header.title) && "bg-primary_blue"
                )}
              />}
            </div>
            <div className=" flex flex-col gap-5">
              <h1 className=" font-Jakarta font-semibold text-xl text-dark_green">
                {header.title}
              </h1>
              <p className=" font-Jakarta font-normal  text-base text-dark_green/70">
                {header.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col w-full gap-[30px] max-w-[500px] ">
        <h1 className=" font-Jakarta font-semibold text-xl text-dark_green">
            {
                activeHeader.length === 1 ? "Add project" : activeHeader.length === 2 ? "Add project details" : activeHeader.length === 3 ? "Preview project" : "Add project"
            }
        </h1>
        {step}

      </div>
    </div>
  );
};

export default AddProject;
