import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Jerome, JeromeSingature } from "@/assets";

const Testimonial: FC = () => {
  return (
    <div className="py-[60px] md:py-[90px] w-[90%] mx-auto flex gap-[50px] md:gap-[60px] flex-col lg:flex-row-reverse ">
      <div className="flex gap-5 flex-col bg-hero-glow bg-contain bg-no-repeat bg-center ">
        <div className="flex flex-col gap-3 w-5/6 mx-auto">
          <h1 className=" font-Jakarta text-white font-bold text-[16px] md:text-[42px] md:uppercase leading-normal  text-center">
            We’D Like & Love to Help
          </h1>
          <p className="flex flex-col items-center font-Jakarta text-white text-center font-medium text-[13px] md:text-[20px] leading-6">
            Get to know our hiring process before you apply or find answers to
            any lingering questions, right here, right now.
            <span className="flex  cursor-pointer gap items-start text-white/70">
              Learn More
              <ArrowUpRight className=" text-white/70 text-[13px]" />
            </span>
          </p>
        </div>
        <div className="  w-full">
          <div className="relative p-0.5  ">
            <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-[10px]"></div>
            <div className=" relative bg-home_gradient/95 backdrop-blur rounded-[10px]  px-5 py-[84px] md:py-[70px]  ">
              <div className="flex gap-2 items-center border border-white p-2 rounded-[60px]">
                <Search className="w-[18px] h-[18px] flex flex-shrink-0 text-white/70" />
                <input
                  type="text"
                  placeholder="Try Java Developer, React..."
                  className="bg-transparent text-[13px] lg:text-[18px] font-medium flex-shrink flex-1 text-white/70 placeholder-white/70 outline-none"
                />
                <Button className=" font-Jakarta text-center gap-1 text-[13px] lg:text-[15px] font-semibold text-[#323C45]  bg-white px-3 py-[6px] rounded-[60px] ">
                  <Sparkles className="text-[#7559E5] h-[16px] w-[16px] " />
                  HIRE TALENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className=" bg-[#DEE3E8] rounded-[14px] flex flex-col gap-10 relative md:w-[70%] md:mx-auto md:transform md:rotate-[-20deg] md:my-10 lg:w-[60%] ">
        <div className="absolute top-0 right-0 p-2 w-[50px]  h-[50px]  shrink-0 transform rotate-[10deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="34"
            viewBox="0 0 59 34"
            fill="none"
          >
            <g clip-path="url(#clip0_2104_17727)">
              <path
                d="M44.1932 27.7496C50.1867 24.1497 51.7585 17.2832 48.0169 11.0584L35.1097 -10.4233C34.8833 -10.8043 32.1326 -9.1514 32.3628 -8.7697L45.2701 12.712C47.6097 16.6072 47.6761 21.9221 42.5435 25.0034C39.1185 27.0611 34.2222 27.2052 30.7539 21.4332L14.1417 -6.21129C12.1821 -9.47221 11.0049 -14.8085 15.2114 -17.3391C19.7679 -20.0778 23.3731 -15.194 24.7098 -12.9671L34.6722 3.62033C35.9571 5.75876 36.8252 9.94578 35.255 11.0453C33.6847 12.1448 30.7457 12.8641 27.3863 8.07121L21.2684 -1.97581C21.0654 -2.3091 18.2756 -0.726542 18.5311 -0.308633L24.6489 9.73839C26.5572 12.8633 30.5578 17.6185 35.9126 14.4019C39.9808 11.9579 40.5592 7.19298 37.4222 1.97125L27.4598 -14.6162C23.6929 -20.8771 18.3668 -22.9745 13.5578 -20.086C8.58475 -17.0995 7.53633 -10.9736 11.011 -5.19258L28.0032 23.0861C31.8022 29.4122 38.3101 31.2856 44.1932 27.7496Z"
                fill="#82AEC0"
              />
              <path
                d="M36.8419 8.22327C37.1933 6.23057 36.2947 4.12853 35.5188 2.83747L25.5519 -13.7468C24.456 -15.5623 22.8052 -17.5828 20.3343 -18.1692C17.056 -18.9456 15.0304 -17.2878 15.4447 -17.5003C20.0347 -19.8443 23.3755 -15.1936 24.7123 -12.9667L34.6746 3.62075C36.2325 6.50541 36.4343 9.36515 35.5165 10.8137C35.5172 10.8099 36.4723 10.3198 36.8419 8.22327ZM44.92 23.0346C48.3288 19.8992 48.1609 15.3399 46.109 11.9278C46.109 11.9278 33.1467 -9.57948 33.1529 -9.6141C32.7512 -9.31603 32.2648 -8.94169 32.3451 -8.8125L45.2648 12.7111C46.9981 15.591 47.6739 19.9464 44.92 23.0346ZM10.9402 -5.31616L28.0056 23.0865C32.2442 29.867 38.5434 31.1245 44.4265 27.5884C45.5709 26.9017 44.4946 27.5171 44.143 27.6892C38.5487 30.4194 32.4211 28.256 28.8459 22.3026L11.8538 -5.97613C8.99246 -10.7367 9.20311 -15.7331 12.1502 -19.0173C8.48056 -15.9319 7.88847 -10.3919 10.9402 -5.31616Z"
                fill="#2F7889"
              />
              <path
                d="M36.1445 14.2407C36.8803 13.7794 37.4285 13.2573 37.9375 12.6648C37.5599 13.0068 37.2248 13.3325 36.754 13.6183C31.3985 16.8389 27.3986 12.0798 25.4903 8.95485L19.296 -1.15325C19.296 -1.15325 18.34 -0.568179 18.5467 -0.277887L25.413 10.9007C27.5138 13.9009 31.238 17.3222 36.1445 14.2407Z"
                fill="#2F7889"
              />
              <path
                d="M10.7917 -11.4108C10.2645 -12.785 10.5442 -14.5285 10.9609 -15.6093C11.6295 -17.3319 12.6682 -18.7234 14.2808 -19.6132C16.3142 -20.7302 19.1683 -21.0123 21.5243 -19.9543C21.5243 -19.9543 22.4243 -19.5695 22.1675 -18.9682C21.9108 -18.367 20.4686 -18.8712 20.4686 -18.8712C19.081 -19.4371 16.5776 -19.5017 14.8643 -18.5583C13.7398 -17.9395 12.7834 -16.9698 12.2138 -15.8088C10.664 -12.6432 11.4731 -9.62873 10.7917 -11.4108ZM45.1721 25.9392C44.2012 26.6089 43.1782 27.0116 42.7113 26.6C42.4775 26.3962 42.6386 25.9327 43.1291 25.6027C44.3066 24.8187 45.2879 23.9327 45.5324 23.6704C48.1447 20.8904 48.4359 18.8791 48.2646 15.9137C48.2202 15.1086 48.5978 15.1038 48.8162 15.5072C49.1395 16.1037 49.1636 17.3614 49.1551 17.9271C49.0522 23.4144 45.6142 25.6363 45.1721 25.9392ZM36.1404 12.8239C34.5339 13.7465 33.883 12.4893 34.7651 11.8278C35.9028 10.9773 37.9442 10.0402 37.3849 6.19322C37.2914 5.55398 37.6633 4.99682 38.0409 6.09469C39.2912 9.73428 37.7469 11.9014 36.1404 12.8239Z"
                fill="#B9E4EA"
              />
            </g>
            <defs>
              <clipPath id="clip0_2104_17727">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(8.99609 -24.6425) rotate(10)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <CardContent className="p-6 flex flex-col gap-10">
          <div className="flex items-center justify-start gap-2 font-Jakarta text-dark_green font-normal text-[20px] leading-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="31"
              viewBox="0 0 25 31"
              fill="none"
            >
              <path
                d="M0.169742 12.2289C0.169742 5.56505 5.57183 0.162964 12.2356 0.162964C18.8994 0.162964 24.3015 5.56505 24.3015 12.2289V16.6467C24.3015 23.3105 18.8994 28.7126 12.2356 28.7126C5.57183 28.7126 0.169742 23.3105 0.169742 16.6467V12.2289Z"
                fill="#060D11"
              />
              <path
                d="M6.60151 19.5171C9.29457 15.6744 14.9867 15.6744 17.6797 19.5171C20.8213 23.9997 17.6145 30.163 12.1406 30.163C6.66672 30.163 3.45996 23.9997 6.60151 19.5171Z"
                fill="#DEE3E8"
              />
            </svg>
            The Xhibit
          </div>
          <div className=" font-Jakarta text-dark_green/70 italic font-normal leading-6 text-[13px] md:text-[20px] w-[90%] lg:mx-auto">
            “We understand that every breakthrough, every milestone, and every
            success story is a result of your collective effort. Together, we
            are transforming the way we approach talent recruitment, and we're
            reshaping industries with the power of human potential.”
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <img src={Jerome} alt="" />
              <div className="flex gap-1 flex-col">
                <h1 className="text-[25px] font-semibold leading-8 font-Jakarta text-dark_green ">
                  Jerome Larh
                </h1>
                <span className=" text-dark_green/70 font-Jakarta text-[20px] leading-7 font-light">
                  CEO XHIBIT
                </span>
              </div>
            </div>
            <div className="">
              <img src={JeromeSingature} alt="" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Testimonial;
