import { FC } from "react";
import { Separator } from "../ui/separator";
import { UserCard} from "..";

const ExploreTalentPool: FC = () => {
  return (
    <div className=" bg-white w-full p-[30px] flex flex-col gap-5 rounded-md shadow-lg shadow-white">
      <p className=" font-Jakarta font-normal text-xl text-dark_green underline underline-offset-auto">
        Explore our pool of Talent
      </p>
      <Separator />
      <div className="flex gap-5 w-full overflow-x-auto no-scrollbar">
        {Array(7)
          .fill(0)
          .map((_, i) => (
            <UserCard  key={i} />

          ))}
      </div>
    </div>
  );
};

export default ExploreTalentPool;
