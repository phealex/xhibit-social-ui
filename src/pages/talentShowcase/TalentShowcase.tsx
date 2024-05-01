import {
  TalentShowcaseHeader,
  TopRated,
  TalentSkills,
  TalentCategory,
  CompletedOrder,
  TalentExperience,
  TalentAvailability,
  Links,
  TalentShowcaseCard
} from "@/components";
import { FC } from "react";

const TalentShowcase: FC = () => {
  return (
    <div className="flex flex-col w-full gap-10 min-h-screen bg-accent_blue pb-20">
      <TalentShowcaseHeader />
      <div className=" container flex gap-10">
        <div className="w-[290px] hidden lg:flex flex-col gap-5">
          <TopRated />
          <TalentSkills />
          <TalentCategory />
          <CompletedOrder />
          <TalentExperience />
          <TalentAvailability />
          <Links />
        </div>
        <div className=" w-full flex-1 flex flex-col gap-5 ">
          {
            Array(10).fill(0).map((_, i) => (
              <TalentShowcaseCard key={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TalentShowcase;
