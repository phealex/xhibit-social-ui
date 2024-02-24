import {
  Category,
  JobProfile,
  LinkSocials,
  TalentDetails,
  Verification,
} from "@/components";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useMultiStepForm } from "@/hooks";
import { RegisterDataType } from "@/types";
import { CheckCircle2, ChevronLeftSquare } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: FC = () => {
  const pageTitles: string[] = [
    "Category",
    "Job profile",
    "Talent details",
    "Verification",
    "Link your socials",
    "Done",
  ];

  const recruiterPageTitles: string[] = [
    "Category",
    "Talents interested in",
    "Recruiter details",
    "Verification",
    "Link your socials",
    "Done",
  ];

  const navigate = useNavigate();

  const { toast } = useToast();

  const [userType, setUserType] = useState<RegisterDataType["userType"]>();
  function handleNext() {
    next();
  }

  const { step, prev, next, currentStep, isFirstStep, completed } =
    useMultiStepForm([
      <Category
        handleNext={handleNext}
        handleType={setUserType}
        type={userType}
      />,
      <JobProfile handleNext={handleNext} type={userType} />,
      <TalentDetails handleNext={handleNext} type={userType} />,
      <Verification
        handleNext={handleNext}
        type={userType}
        handleSubmit={() => {}}
      />,
      <LinkSocials handleNext={handleNext} type={userType} />,
    ]);

  useEffect(() => {
    if (completed) {
      toast({
        title: "Registration successful",
        description:
          "You have successfully registered, you will be redirected to your feeds page",
      });
      setTimeout(() => {
        navigate("/talent");
      }, 2000);
    }
  }, [completed, toast]);

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

          <div className="hidden lg:flex items-center gap-1 w-full justify-between flex-shrink">
            {userType === "recruiter"
              ? recruiterPageTitles.map((title, index) => (
                  <div className="flex gap-1 items-center" key={index}>
                    <p
                      className={` font-Jakarta text-[13px] ${
                        index === currentStep && !completed
                          ? "text-primary_blue"
                          : "text-home_grey"
                      } ${
                        index === pageTitles.length - 1 &&
                        completed &&
                        " text-light_green"
                      } `}
                    >
                      {title}
                    </p>
                    {index + 1 < pageTitles.length ? (
                      <Separator className=" text-home_grey w-[20px] h-[2px]" />
                    ) : (
                      <CheckCircle2
                        className={` ${
                          completed ? "text-light_green" : "text-home_grey"
                        }`}
                      />
                    )}
                  </div>
                ))
              : pageTitles.map((title, index) => (
                  <div className="flex gap-1 items-center" key={index}>
                    <p
                      className={` font-Jakarta text-[13px] ${
                        index === currentStep
                          ? "text-primary_blue"
                          : "text-home_grey"
                      } ${
                        index === pageTitles.length - 1 &&
                        completed &&
                        " text-primary_blue"
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
      </div>
    </div>
  );
};

export default Register;
