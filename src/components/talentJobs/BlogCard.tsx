import { BlogType } from "@/types";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { ChevronRight, Link } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { facebook, instagram, twitter } from "@/assets";

interface Props {
  blog: BlogType;
}

const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Card className="w-[270px] border-2 bg-white hover:shadow-md hover:shadow-home_border_gradient_color_2  hover:border-home_border_gradient_color_2">
          <CardContent className="flex flex-col gap-9 !p-4">
            <div className="flex flex-col gap-3 w-full">
              <img
                src={blog.img}
                alt=""
                className="w-full h-[131px] object-cover"
              />
              <div className=" flex gap-2 flex-col">
                <h1 className="text-base font-medium font-Jakarta text-black text-left">
                  {blog.title}
                </h1>
                <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70 text-left">
                  <span className=" font-medium">Article by:</span>
                  {blog.author}
                </p>
              </div>
            </div>
            <p className="font-Jakarta font-normal ml-auto text-[13px] leading-4 text-dark_green/70 flex gap-2 items-center">
              Read full article
              <ChevronRight size={20} />
            </p>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent className=" max-h-[80%] overflow-y-scroll ">
        <div className="flex flex-col gap-5 p-6 w-[80%] mx-auto ">

        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            <p className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green/70">
              {blog.date}
            </p>
            <h1 className=" font-Jakarta font-semibold leading-9 text-[25px] text-dark_green">
              {blog.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <p className=" font-Jakarta font-light text-[13px] leading-4 text-dark_green">
              Share on
            </p>
            <img src={facebook} alt="" className=" h-[35px] w-[35px]" />
            <img src={twitter} alt="" className=" h-[35px] w-[35px]" />
            <img src={instagram} alt="" className=" h-[35px] w-[35px]" />
            <Link className=" h-[35px] w-[35px]" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className=" font-Jakarta font-medium text-[13px] leading-4 text-primary_blue underline">
            {blog.author}
          </p>
          <p className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green">
            Contributor
          </p>
        </div>
        <img src={blog.img} alt="" className="h-[300px] w-[400px] object-cover" />
        <p className=" font-Jakarta font-normal text-base text-dark_green w-[70%]">
            {blog.content}
            {blog.content}
            {blog.content}
            {blog.content}
            {blog.content}
            {blog.content}

        </p>
        </div>

      </DrawerContent>
    </Drawer>
  );
};

export default BlogCard;
