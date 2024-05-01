import { FC } from "react";
import { VscOrganization } from "react-icons/vsc";
import { GoOrganization } from "react-icons/go";
import { SlOrganization } from "react-icons/sl";

const RecruiterProfileDetails: FC = () => {
  return (
    <div className="flex flex-col gap-[30px] ">
      <div className="flex flex-col gap-4 ">
        <p className=" font-Jakarta font-semibold uppercase text-xl text-dark_green">
          About me
        </p>
        <p className=" font-Jakarta font-normal text-xl text-dark_green">
          Senior front-end developer with 5+ years of experience
          <br />
          Experienced back-end developer (previously worked at Google and
          Microsoft)
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className=" font-Jakarta font-semibold uppercase text-xl text-dark_green">
          Organization
        </p>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-1 items-center">
            <VscOrganization className="text-dark_green h-5 w-5" />
            <p className=" font-Jakarta font-normal text-xl text-dark_green">
              Organization size: 10
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <SlOrganization className="text-dark_green h-5 w-5" />
            <p className=" font-Jakarta font-normal text-xl text-dark_green">
              Organization name: Zeco oil
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <GoOrganization className="text-dark_green h-5 w-5" />
            <p className=" font-Jakarta font-normal text-xl text-dark_green">
              Industry: Oil and gas
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className=" font-Jakarta font-semibold uppercase text-xl text-dark_green">
          About organization
        </p>

        <p className=" font-Jakarta font-normal text-xl text-dark_green/70">
          At [Tech Organization], we believe in harnessing the power of
          technology to transform the world for the better. As a pioneering
          force in the tech industry, we are dedicated to pushing boundaries,
          driving innovation, and shaping the future of technology. Founded on a
          passion for creativity, collaboration, and cutting-edge solutions,
          [Tech Organization] is committed to delivering excellence in every
          endeavor. Our team of experts, comprising visionary thinkers, skilled
          engineers, and industry trailblazers, works tirelessly to develop
          groundbreaking technologies that address the challenges of today and
          anticipate the needs of tomorrow. With a focus on innovation and
          ingenuity, we specialize in [highlight key areas of expertise, e.g.,
          artificial intelligence, cloud computing, cybersecurity, etc.].
          Through our relentless pursuit of excellence, we strive to empower
          businesses, elevate industries, and enrich lives through
          transformative technology solutions
        </p>
      </div>
    </div>
  );
};

export default RecruiterProfileDetails;
