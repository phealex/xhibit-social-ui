import { UnderlineCurve } from '@/assets'
import { reviews } from '@/constants'
import { FC } from 'react'
import { HiSparkles } from 'react-icons/hi'
import { Avatar, AvatarImage } from '../ui/avatar'

const Reviews: FC = () => {
  return (
   <div className="flex flex-col gap-[50px] py-10 w-[90%] mx-auto ">
    <div className="flex flex-col gap-5 items-center w-full">
        <h1 className=" font-Jakarta text-[13px] font-medium leading-6 text-center bg-gradient-to-r from-[#9bddf9] to-[#5f66ec] bg-clip-text text-transparent ">
        47K+ HAPPY CUSTOMERS
        </h1>
        <p className="flex gap-1 font-Jakarta font-bold text-[16px] leading-normal text-white">
        Hear from our clients 
        <HiSparkles className="text-[20px] text-white" />
        </p>
    </div>
    <div className=" flex flex-col gap-7 ">
        {
            reviews.map((review,index)=>(
                <div key={index} className={`${
                index !== 0 ? ' hidden md:flex gap-2' : 'flex gap-2'
                } items-center p-5 bg-[#323C454D]/30 rounded-[50px] backdrop-blur-lg md:w-5/6 lg:max-w-fit ${
                    index%2 ? " ml-auto " : ""
                } `} >
                    <Avatar>
                        <AvatarImage src={review.img} alt="" />
                    </Avatar>
                    <div className="flex-col gap-1 items-center font-Jakarta text-[13px] lg:text-[16px] font-normal leading-normal ">
                        <p className=" text-white">
                        {review.text}
                        </p>
                        <span className=" bg-gradient-to-r  from-home_border_gradient_color_1 to-home_border_gradient_color_2 bg-clip-text text-transparent ">
                           {""} {review.highlightText}
                        </span>
                        <br/>
                        <span className=" text-white/70">
                            {review.user}
                        </span>


                    </div>
                </div>
            ))
        }
    </div>
    <div className="flex gap-1 flex-col items-center w-full font-Jakarta text-white text-[13px] font-normal leading-normal">
    Read all 324 reviews
    <img src={UnderlineCurve} alt="" />

    </div>
   </div>
  )
}

export default Reviews