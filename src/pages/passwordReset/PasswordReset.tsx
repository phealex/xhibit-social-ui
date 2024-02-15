import { ResetForm } from "@/components";
import { useMultiStepForm } from "@/hooks";
import { ChevronLeftSquare } from "lucide-react";
import { FC } from "react";

const PasswordReset: FC = () => {
  function handleNext() {
    next();
  }

  const { step, prev, next, isFirstStep, completed } =
    useMultiStepForm([
      <ResetForm handleNext={handleNext} />,
    ]);
      
  return (
    <div className="py-[50px] md:py-[100px] w-[90%] md:w-[75%] lg:w-1/2 mx-auto min-h-screen">
      <div className=" h-full flex flex-col  gap-[50px] w-full lg:w-[80%] mx-auto ">
        <div className="flex flex-col gap-[25px] w-full ">
          <ChevronLeftSquare
            className={`text-[24px] text-dark_green rounded-md ${
              isFirstStep || completed ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              !isFirstStep && !completed && prev();
            }}
          />
        </div>
        <div className="w-full">{step}</div>
      </div>
    </div>
  );
};

export default PasswordReset;
