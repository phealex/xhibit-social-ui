import { ProjectGear } from "@/assets";
import { ProjectCard } from "@/components";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import { ArrowRight } from "lucide-react";
import { FC, useEffect, useState } from "react";

const Projects: FC = () => {

  const [cardToShow, setCardToShow] = useState<number>(4)

  useEffect(() => {
    if(window.innerWidth > 768){
      setCardToShow(8)
    } else if (window.innerWidth > 414){
      setCardToShow(6)
    } else {
      setCardToShow(4)
    }
  }, [])

  return (
    <div className=" bg-home_gradient w-full">
      <div className="flex flex-col gap-10 w-[90%]  mx-auto py-[80px]">
        <section className=" flex flex-col gap-10 w-full">
        <h1 className=" font-Jakarta text-[31px] md:w-3/5  font-semibold leading-[44px] text-white text-center md:text-left">
              Discover inspiring{" "}
              <span className=" text-primary_blue">projects</span> curated by
              exceptional talents
            </h1>
          <div className="flex flex-col md:flex-row-reverse gap-5 items-center md:items-start">
            <img
              src={ProjectGear}
              alt=""
              className=" w-[300px]  h-[300px]  mx-auto md:-mt-[130px]"
            />
          <div className="flex gap-5 flex-col">
            <p className=" font-Jakarta text-[20px] font-normal leading-7 text-white/80 text-center md:text-left">
              At XHIBIT, we're dedicated to showcasing a diverse array of
              captivating projects meticulously curated by exceptionally
              talented individuals. Our platform celebrates creativity and
              innovation, offering a curated collection of inspiring works that
              embody the unique expertise and vision of our talented
              contributors. Explore this curated space to discover
              groundbreaking projects and immerse yourself in the world of
              creativity and brilliance.
            </p>
            <div className="flex justify-between md:justify-start items-center gap-5">
              <div className="flex gap-2 pr-5 flex-col border-r border-r-white/30 ">
                <p className=" font-Jakarta text-[16px]  font-medium leading-4 text-white">
                  300k+
                </p>
                <p className=" font-Jakarta text-[13px]  font-normal leading-7 text-white">
                  Curated projects
                </p>
              </div>

              <div className="flex gap-2 flex-col">
                <p className=" font-Jakarta text-[16px]  font-medium leading-7 text-white">
                  40x faster
                </p>
                <p className=" font-Jakarta text-[13px]  font-normal leading-7 text-white">
                  Get your project in minutes
                </p>
              </div>
            </div>
            <Button className="  bg-primary_blue hover:bg-primary_blue hover:text-white text-white font-Jakarta font-medium text-[16px] rounded-md p-4 max-w-fit">
              Go to projects
              <ArrowRight className=" ml-2" size={20} />
            </Button>
          </div>
          </div>

        </section>
        <section className="flex gap-5 flex-col">
          <h1 className=" font-Jakarta text-[31px] leading-[44px] font-medium">
            Explore highly skilled and inspiring diverse pool of projects
          </h1>
          <div className=" border border-[#8E9FAA]/50 rounded-[25px] py-5 space-y-5  ">
            <div className="flex gap-4 justify-center items-center mx-auto ">
              <Button className="font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]">
                Design
              </Button>
              <Button className=" hidden sm:flex  font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]">
                Development
              </Button>
              <Button className=" hidden md:flex font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]">
                Customer service
              </Button>
              <Button className=" hidden lg:flex font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]">
                Marketing
              </Button>
              <Button className=" hidden lg:flex font-Jakarta font-semibold text-[16px] leading-normal text-dark_green hover:text-dark_green px-4 py-3 bg-home_grey hover:bg-home_grey rounded-[5px]">
                Finance
              </Button>
              <Button className="font-Jakarta font-semibold text-[16px] leading-normal text-white hover:text-white px-4 py-3 bg-transparent hover:bg-transparent">
                View All
              </Button>
            </div>
            <div className="flex justify-center flex-wrap gap-5 lg:gap-10  ">
              {projects.slice(0, cardToShow).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
