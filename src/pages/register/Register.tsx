import { Category } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMultiStepForm } from "@/hooks";
import { RegisterDataType } from "@/types";
import { CheckCircle2, ChevronLeftSquare } from "lucide-react";
import { FC, useState } from "react";

const Register: FC = () => {
  const pageTitles: string[] = [
    "Category",
    "Job profile",
    "Talent details",
    "Verification",
    "Link your socials",
    "Done",
  ];

  const [registerData, setRegisterData] = useState<RegisterDataType>()

  const { step, prev, next, currentStep, isFirstStep, isLastStep } =
    useMultiStepForm([<Category  />]);

  function handleNext() {
    if (isLastStep) {
      return;
    }

    next();
  }
  return (
    <div className="py-[50px] md:py-[100px] w-[90%] md:w-[75%] lg:w-1/2 mx-auto min-h-screen">
      <div className=" h-full flex flex-col  gap-[50px] w-full lg:w-[80%] mx-auto ">
        <div className="flex flex-col gap-[25px] w-full ">
          <ChevronLeftSquare
            className={`text-[24px] text-dark_green rounded-md ${
              isFirstStep ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              !isFirstStep && prev();
            }}
          />

          <div className="hidden lg:flex items-center gap-1 w-[90%] mx-auto justify-center flex-shrink">
            {pageTitles.map((title, index) => (
              <div className="flex gap-1 items-center" key={index}>
                <p
                  className={` font-Jakarta text-[13px] ${
                    index === currentStep
                      ? "text-primary_blue"
                      : "text-home_grey"
                  } `}
                >
                  {title}
                </p>
                {index + 1 < pageTitles.length ? (
                  <Separator className=" text-home_grey w-[20px] h-[2px]" />
                ) : (
                  <CheckCircle2 className=" text-home_grey" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">{step}</div>
        <Button
          onClick={handleNext}
          className=" w-full  py-4 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Register;
