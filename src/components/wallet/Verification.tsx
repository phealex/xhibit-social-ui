import { FC, useState } from "react";
import { BackToWallet } from "..";
import { useMultiStepForm } from "@/hooks";
import { verifyWalletHeaders } from "@/constants";
import { useWalletState } from "@/store";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Check } from "lucide-react";
import { VerificationStep1, VerificationStep2, VerificationStep3 } from "@/components";

const Verification: FC = () => {
  const [activeHeader, setActiveHeader] = useState<string[]>([
    verifyWalletHeaders[0].title,
  ]);
  const [completedHeader, setCompletedHeader] = useState<string[]>([]);

  function handlePrev() {
    if (isFirstStep) {
      useWalletState.setState({
        isShowWalletVerification: false,
      });
      return;
    }
    prev();
    setActiveHeader((prev) => prev.slice(0, prev.length - 1));
  }

  function handleNext() {
    if (isLastStep) return;
    next();
    setActiveHeader((prev) => [
      ...prev,
      verifyWalletHeaders[currentStep + 1].title,
    ]);
    setCompletedHeader((prev) => [
      ...prev,
      verifyWalletHeaders[currentStep === 0 ? currentStep : currentStep - 1]
        .title,
    ]);
  }

  const { step, isLastStep, isFirstStep, currentStep, prev, next } =
    useMultiStepForm([
        <VerificationStep1 handlePrev={handlePrev} handleNext={handleNext} />,
        <VerificationStep2 handlePrev={handlePrev} handleNext={handleNext} />,
        <VerificationStep3 handlePrev={handlePrev} handleNext={handleNext} />,
    ]);

  return (
    <div className="bg-white p-4 pt-10 rounded-lg w-full container mx-auto">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="hidden  md:flex flex-row lg:flex-col lg:gap-5 items-start md:w-full lg:w-[342px] p-2 lg:pl-5   ">
            {verifyWalletHeaders.map((header, index) => (
              <div className="flex w-1/3 flex-col lg:flex-row gap-2 items-start" key={index}>
                <div className="flex w-full flex-row lg:flex-col gap-1  items-center">
                  <div
                    className={cn(
                      " h-10 w-10 flex items-center justify-center rounded-full  ",
                      activeHeader.includes(header.title) &&
                        "bg-primary_blue/40",
                      completedHeader.includes(header.title) &&
                        "bg-primary_blue"
                    )}
                  >
                    {completedHeader.includes(header.title) ? (
                      <Check className="text-primary_blue h-4 w-4 p-[2px] font-bold bg-white rounded-full" />
                    ) : (
                      <div
                        className={cn(
                          " h-4  w-4 bg-home_grey rounded-full",
                          activeHeader.includes(header.title) &&
                            "bg-primary_blue"
                        )}
                      ></div>
                    )}
                  </div>
                  {index != verifyWalletHeaders.length - 1 && (
                    <Separator
                    orientation={window.innerWidth > 1024 ? "vertical" : "horizontal"}
                      className={cn(
                        " bg-home_grey ",
                        activeHeader.includes(header.title) && "bg-primary_blue", window.innerWidth > 1024 ? "h-[120px] w-1" : "w-full flex flex-1 h-1"
                      )}
                    />
                  )}
                </div>
                <div className=" flex flex-col gap-5">
                  <h1 className=" font-Jakarta font-semibold text-xs lg:text-xl text-dark_green">
                    {header.title}
                  </h1>
                  <div className="hidden lg:flex flex-col gap-1">
                    {header.desc.length > 0 &&
                      header.desc.map((desc, index) => (
                        <p
                          key={index}
                          className=" font-Jakarta font-normal  text-base text-dark_green/70"
                        >
                          {desc}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full max-w-[430px] p-5">
            {step}
          </div>
        </div>
        <BackToWallet title={"Back"} handleBack={() => {
          if(!isFirstStep) return prev()
            useWalletState.setState({
                isShowWalletVerification: false,
            })
        }} />
      </div>
    </div>
  );
};

export default Verification;
