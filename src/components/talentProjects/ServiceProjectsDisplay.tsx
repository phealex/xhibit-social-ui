import { FC, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ServiceCardType } from "@/types";
import { BookmarkCheck, Clock3, MapPin, Repeat2, Star } from "lucide-react";
import { ImageSlider } from "..";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

interface ServiceProjectsDisplayProps {
  service: ServiceCardType;
}

const ServiceProjectsDisplay: FC<ServiceProjectsDisplayProps> = ({
  service,
}) => {
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  const ratingData: {
    name: string;
    value: number;
  }[] = [
    {
      name: "5 star",
      value: 10,
    },
    {
      name: "4 star",
      value: 8,
    },
    {
      name: "3 star",
      value: 5,
    },
    {
      name: "2 star",
      value: 3,
    },
    {
      name: "1 star",
      value: 2,
    },
  ];

  const totalRating = ratingData.reduce((acc, curr) => acc + curr.value, 0);
  return (
    <>
      <Card>
        <CardContent
          onClick={() => setIsShowDetails(!isShowDetails)}
          className="p-5 w-[330px] lg:w-[380px] rounded-[10px] bg-white border border-dark_green/10 flex flex-col gap-3 cursor-pointer"
        >
          <section className="flex items-center gap-[5px]">
            <img src={service.img} alt="" className=" h-9 w-9 object-cover" />
            <div className="flex flex-col gap-1 h-full">
              <p className=" font-Jakarta text-[13px] font-medium leading-4 text-dark_green">
                {service.name}
              </p>
              <p className=" font-Jakarta text-[13px] flex items-center gap-1 font-normal text-dark_green/70">
                <MapPin className=" h-4 w-4" />
                {service.location}
              </p>
            </div>
          </section>
          <ImageSlider images={service.images} className="h-[218px]" />
          <section className="flex items-center justify-between">
            <p className=" font-Jakarta font-medium text-xl text-dark_green">
              {service.title}
            </p>
            <div className="flex items-center gap-1">
              <Star fill="#FFC107" className=" h-5 w-5" />
              <p className=" font-Jakarta font-medium text-xs">
                {service.rating}
              </p>
              <p className=" font-Jakarta font-normal text-xs">
                ({service.rating})
              </p>
            </div>
          </section>
          <div className="flex items-start gap-1 text-primary_blue">
            <p className=" font-Jakarta font-medium text-base ">From</p>
            <span className=" font-Jakarta font-medium text-[8px]">NGN</span>
            <p className=" font-Jakarta font-semibold text-base">
              {service.price}
            </p>
          </div>
          <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
            {service.desc}
          </p>
          <div className="flex items-center gap-2">
            <Clock3 className=" h-4 w-4 text-primary_blue" />
            <p className=" font-Jakarta font-normal text-xs text-primary_blue">
              {service.duration}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Repeat2 className=" h-4 w-4 text-primary_blue" />
            <p className=" font-Jakarta font-normal text-xs text-primary_blue">
              {service.iterations} Iterations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BookmarkCheck className=" h-4 w-4 text-primary_blue" />
            <p className=" font-Jakarta font-normal text-xs text-primary_blue">
              {service.bookmarks} +
            </p>
          </div>
        </CardContent>
      </Card>
      <Dialog open={isShowDetails} onOpenChange={() => setIsShowDetails(false)}>
        <DialogContent className=" max-w-[1000px] flex flex-col w-full gap-10  ">
          <div className=" flex gap-10 w-full">
            <div className="grid grid-cols-2 gap-5">
              {service.images.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  className="h-[150px] object-cover"
                  key={index}
                />
              ))}
            </div>
            <div className=" flex flex-col gap-5">
              <section className="flex items-center gap-[5px]">
                <img
                  src={service.img}
                  alt=""
                  className=" h-9 w-9 object-cover"
                />
                <div className="flex flex-col gap-1 h-full">
                  <p className=" font-Jakarta text-[13px] font-medium leading-4 text-dark_green">
                    {service.name}
                  </p>
                  <p className=" font-Jakarta text-[13px] flex items-center gap-1 font-normal text-dark_green/70">
                    <MapPin className=" h-4 w-4" />
                    {service.location}
                  </p>
                </div>
              </section>
              <section className="flex items-center justify-between">
                <p className=" font-Jakarta font-medium text-xl text-dark_green">
                  {service.title}
                </p>
                <div className="flex items-center gap-1">
                  <Star fill="#FFC107" className=" h-5 w-5" />
                  <p className=" font-Jakarta font-medium text-xs">
                    {service.rating}
                  </p>
                  <p className=" font-Jakarta font-normal text-xs">
                    ({service.rating})
                  </p>
                </div>
              </section>
              <div className="flex items-start gap-1 text-primary_blue">
                <p className=" font-Jakarta font-medium text-base ">From</p>
                <span className=" font-Jakarta font-medium text-[8px]">
                  NGN
                </span>
                <p className=" font-Jakarta font-semibold text-base">
                  {service.price}
                </p>
              </div>
              <p className=" font-Jakarta font-normal text-xs text-dark_green/70">
                {service.desc}
              </p>
              <div className="flex items-center gap-2">
                <Clock3 className=" h-4 w-4 text-primary_blue" />
                <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                  {service.duration}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Repeat2 className=" h-4 w-4 text-primary_blue" />
                <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                  {service.iterations} Iterations
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BookmarkCheck className=" h-4 w-4 text-primary_blue" />
                <p className=" font-Jakarta font-normal text-xs text-primary_blue">
                  {service.bookmarks} +
                </p>
              </div>
              <div className=" flex flex-col gap-5">
                <p className=" font-Jakarta font-medium text-base text-dark_green">
                  What do other say about this talent
                </p>
                <div className=" flex flex-col gap-5">
                  {ratingData.map((rating, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                      <p className=" font-Jakarta from-muted text-xs text-dark_green">
                        {rating.name}
                      </p>
                      <div className=" bg-home_grey w-[100px] h-1 rounded-md">
                        <span
                          style={{
                            width: `${(rating.value / totalRating) * 100}%`,
                            backgroundColor: "#0085FF",
                          }}
                          className=" h-full bg-primary_blue flex rounded-md"
                        ></span>
                      </div>
                      <p className=" font-Jakarta from-muted text-xs text-dark_green">
                        ({rating.value})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className=" w-full h-[100px] shadow-lg shadow-white bg-white rounded-md">
            <Button className=" bg-primary_blue hover:bg-primary_blue text-white font-Jakarta font-medium text-base ml-auto ">
              Request service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceProjectsDisplay;