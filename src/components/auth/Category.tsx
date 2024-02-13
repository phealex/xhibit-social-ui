import { FC } from "react";
import JoinBanner from "./JoinBanner";
import { registrationCategories } from "@/constants";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { RegisterDataType, handleNextProps } from "@/types";
import { useToast } from "../ui/use-toast";

interface CategoryProps extends handleNextProps {
  handleType: (type: RegisterDataType["userType"]) => void;
  type: RegisterDataType["userType"] | undefined;
}

const Category: FC<CategoryProps> = ({ handleNext, handleType, type }) => {
  const { toast } = useToast();
  return (
    <div className=" w-full flex flex-col gap-[50px] ">
      <JoinBanner />
      <div className="w-full flex justify-between">
        {registrationCategories.map((category, index) => (
          <Card
            key={index}
            className={`h-[160px] !p-0  cursor-pointer w-[47%] rounded-[10px] bg-white border border-dark_green/70 ${
              category.key === type
                ? "border-primary_blue shadow-md shadow-primary_blue"
                : ""
            }`}
            onClick={() =>
              handleType(category.key as RegisterDataType["userType"])
            }
          >
            <CardContent className="flex flex-col !p-0 h-full items-center justify-center gap-2 ">
              <h1 className=" font-Jakarta font-semibold text-[18px] text-center text-dark_green">
                {category.title}
              </h1>
              <p className=" font-Jakarta text-home_grey text-[13px] leading-6">
                {category.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        onClick={() => {
          if (!type) {
            toast({
              description: "Please select a category to continue",
              variant: "destructive",
            });
            return;
          }
          handleNext();
        }}
        className=" w-full  py-4 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
      >
        Next
      </Button>
    </div>
  );
};

export default Category;
