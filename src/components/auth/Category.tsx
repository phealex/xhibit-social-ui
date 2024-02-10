import { FC } from "react";
import JoinBanner from "./JoinBanner";
import { registrationCategories } from "@/constants";
import { Card, CardContent } from "../ui/card";

const Category: FC = () => {
  return (
    <div className=" w-full flex flex-col gap-[50px] ">
      <JoinBanner />
      <div className="w-full flex justify-between">
        {registrationCategories.map((category, index) => (
          <Card
            key={index}
            className=" h-[160px] !p-0 w-[47%] rounded-[10px] bg-white border border-dark_green/70"
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
    </div>
  );
};

export default Category;