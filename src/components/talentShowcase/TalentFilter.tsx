import React, { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListFilter } from "lucide-react";
import {
  TopRated,
  TalentSkills,
  TalentCategory,
  CompletedOrder,
  TalentExperience,
  TalentAvailability,
} from "@/components";

const TalentFilter: FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ListFilter className="text-dark_green/70 cursor-pointer text-base" />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className=" h-screen max-h-screen overflow-y-auto w-fit max-w-[500px]"
      >
        <SheetHeader>
          <SheetTitle className=" text-center font-Jakarta font-medium text-base text-dark_green p-5 bg-white shadow-lg shadow-white">
            Talent Filter
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 bg-accent_blue w-[290px]">
          <TopRated />
          <TalentSkills />
          <TalentCategory />
          <CompletedOrder />
          <TalentExperience />
          <TalentAvailability />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TalentFilter;
