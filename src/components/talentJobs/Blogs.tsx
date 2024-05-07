import { blog} from "@/assets";
import { blogPosts } from "@/constants";
import { FC } from "react";
import { BlogCard } from "..";
import { Sparkles } from "lucide-react";


const Blogs: FC = () => {

  return (
    <div className="flex flex-col gap-[50px]  ">
      <div className="flex gap-[60px] items-center justify-between ">
        <div className="flex flex-col gap-3">
          <h1 className=" font-Jakarta font-semibold text-[25px] leading-9 text-dark_green">
          Weekly news and articles
          </h1>
          {/* <p className="font-Jakarta font-normal text-[13px] leading-6 text-dark_green/70">
            Considering a career change? Discover the top startup companies
            worth exploring before submitting your applications. Explore the
            various benefits offered by different startups, including flexible
            schedules, health insurance, home office stipends, and more. Gain
            valuable insights into over 44,600 startup companies currently
            hiring in 2023.
          </p> */}
        </div>
        <img
          src={blog}
          alt=""
          className=" h-[166px] w-[345px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-[25px] ">
        <div className="flex gap-3 items-center">
          {/* <img src={Sparkle} alt="" /> */}
          <Sparkles size={20} color="#FFBF5F" />
          <h1 className=" font-Jakarta font-semibold text-[16px] leading-5 text-dark_green">
            All featured articles
          </h1>
        </div>
        <div className="flex gap-[34px] flex-wrap w-full ">
          {blogPosts.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Blogs;
