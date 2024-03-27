import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { ServiceCardType } from "@/types";
import { BookmarkCheck, Clock3, MapPin, Repeat2, Star } from "lucide-react";
import { ImageSlider } from "..";

interface ServiceProjectsDisplayProps {
  service: ServiceCardType;
}

const ServiceProjectsDisplay: FC<ServiceProjectsDisplayProps> = ({
  service,
}) => {
  return (
    <Card>
      <CardContent className="p-5 w-[330px] lg:w-[380px] rounded-[10px] bg-white border border-dark_green/10 flex flex-col gap-3">
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
  );
};

export default ServiceProjectsDisplay;
