import { NewPost } from "@/components";
import { FC } from "react";

const TalentFeed: FC = () => {
  return (
    <div className=" bg-accent_blue min-h-screen w-full py-10">
      <div className="w-[80%] mx-auto flex gap-5">
        <section className="w-[20%] hidden lg:flex flex-col gap-5">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </section>
        <section className="flex flex-1 flex-col gap-10 w-full">
          <NewPost />
          <div className=""></div>
        </section>
      </div>
    </div>
  );
};

export default TalentFeed;
