import { Logo, OverviewNote, OverviewSearch } from "@/assets";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselData } from "@/constants";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { IoMdQuote } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay"

const Overview: FC = () => {
  return (
    <div className="w-full bg-home_gradient py-[50px]">
      <div className="w-[90%] mx-auto flex flex-col gap-[100px]">
        <section className="flex flex-col gap-[30px] items-center">
          <h1 className=" font-Jakarta text-[31px] text-center text-white">
            Discover the perfect job for you
          </h1>
          <p className=" font-Jakarta text-[20px] md:text-[25px]  leading-7 md:leading-8 text-center text-white/80">
            Navigating the next steps is made simple with us. <br />
            Explore a diverse range of over 100,000 jobs, spanning top-tier
            companies to rapidly growing startups.
          </p>
          <div className=" hidden md:flex justify-center items-center mx-auto gap-[30px] ">
            <Button className=" bg-primary_blue hover:bg-primary_blue border-none hover:border-none rounded-[5px] px-5 py-4 font-Jakarta text-[16px] text-white font-medium ">
                Sign up
            </Button>
            <Button className=" bg-transparent hover:bg-transparent border border-white hover:border-white rounded-[5px] px-5 py-4 font-Jakarta text-[16px] text-white font-medium ">
                Browse jobs
            </Button>
          </div>
        </section>
        <section className=" bg-primary_blue py-[50px] flex gap-[60px] flex-col items-center">
          <div className=" flex gap-2 items-center">
            <img src={Logo} alt="" className="" />
            <p className=" font-Jakarta text-[25px] text-white ">The Xhibit</p>
          </div>
          <div className="flex flex-col md:flex-row gap-[30px]  md:gap-0 md:w-full md:justify-around">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-[100px] font-bold font-Jakarta text-center text-white">
              120k+
            </h1>
            <p className="text-[20px]  font-Jakarta text-white leading-7">
              Jobs on XHIBIT
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-[100px] font-bold font-Jakarta text-center text-white">
              180k+
            </h1>
            <p className="text-[20px]  font-Jakarta text-white leading-7">
              Talents on XHIBIT
            </p>
          </div>
          </div>

        </section>
        <section className="flex flex-col gap-[100px]">
          <div className="flex flex-col lg:flex-row">
            <img src={OverviewNote} alt="" className="lg:w-1/2" />
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[16px] md:text-[31px] md:leading-[44px] text-white font-Jakarta font-semibold ">
                  On XHIBIT a new opportunity awaits you
                </h1>
                <p className=" font-Jakarta text-[13px] md:text-[20px] md:leading-8  text-white/80">
                  Craft a profile showcasing your distinctive skills and
                  preferences, then effortlessly apply to jobs with just a
                  single click.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[16px] text-white font-Jakarta font-semibold md:text-[25px] md:font-bold md:leading-8 ">
                    Apply with a single click
                  </h1>
                  <p className=" font-Jakarta text-[13px] md:text-[20px] md:leading-8 text-white/80">
                    Bid farewell to cover letters – your profile is your key.
                    Apply with just one click and you're all set.
                  </p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[16px] text-white font-Jakarta font-semibold md:text-[25px] md:font-bold md:leading-8 ">
                    Customize your preferences
                  </h1>
                  <p className=" font-Jakarta text-[13px] md:text-[20px] md:leading-8 text-white/80">
                    Simplify the interview process by establishing your
                    expectations upfront, including factors like salary,
                    industry, and company culture.
                  </p>
                </div>
                <Button className="flex gap-2 items-center max-w-fit font-Jakarta font-medium text-[16px] py-4 px-5 bg-primary_blue border-none hover:bg-primary_blue text-white hover:text-white">
                  Sign up for free
                  <ArrowRight className="text-white font-[16px]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse">
            <img src={OverviewSearch} alt="" className="lg:w-1/2" />
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[16px] md:text-[31px] md:leading-[44px] text-white font-Jakarta font-semibold ">
                  On XHIBIT Discover jobs that aligns with your needs and
                  preferences you
                </h1>
                <p className=" font-Jakarta text-[13px] md:text-[20px] md:leading-8 text-white/80">
                  Tailored and confidential job search, presenting all the
                  information that matters to you right from the start.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[16px] text-white font-Jakarta font-semibold md:text-[25px] md:font-bold md:leading-8 ">
                    Stay updated
                  </h1>
                  <p className=" font-Jakarta text-[13px] md:text-[20px] md:leading-8 text-white/80">
                    No more guessing games. Preview salary and job options
                    before submitting your application.
                  </p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[16px] text-white font-Jakarta font-semibold md:text-[25px] md:font-bold md:leading-8">
                    Personalized job search
                  </h1>
                  <p className=" font-Jakarta text-[13px] md:text-[20px] md:leading-8 text-white/80">
                    Effortlessly find the jobs that matter to you with
                    personalized filters.
                  </p>
                </div>
                <Button className="flex gap-2 items-center  max-w-fit font-Jakarta font-medium text-[16px] py-4 px-5 bg-primary_blue border-none hover:bg-primary_blue text-white hover:text-white">
                  Browse jobs
                  <ArrowRight className="text-white font-[16px]" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-[30px]  items-center">
          <div className="flex gap-[10px] items-center flex-col">
            <h1 className=" font-Jakarta  text-[16px] md:text-[20px] md:leading-7 font-bold text-white text-center">
              Quoutes
            </h1>
            <p className="text-[20px] md:text-[31px]   font-Jakarta text-white text-center leading-8 md:leading-[44px]">
              From our users
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <div className="flex w-[70%] md:w-[90%] mx-auto justify-between mb-5 ">
              <CarouselPrevious className=" relative bg-[#8E9FAA]/10 text-white rounded-md border-none " />
              <CarouselNext className="relative bg-[#8E9FAA]/10 text-white rounded-md border-none " />
            </div>
            <CarouselContent>
              {carouselData.map((data, index) => (
                <CarouselItem  key={index} className=" basis-5/6 h-[300px] md:basis-2/5 lg:basis-[22%]">
                  <Card
                    className=" bg-[#8E9FAA]/10 border-none h-full "
                   
                  >
                    <CardContent className="flex flex-col h-full justify-between w-full !p-4 ">
                      <IoMdQuote className=" text-white/20 h-[50px] w-[50px] ml-auto " />

                      <p className=" font-Jakarta text-[20px] font-light leading-7 text-white/80">
                        {data}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default Overview;
