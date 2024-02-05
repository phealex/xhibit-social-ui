import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PricingData } from '@/constants'
import { CheckIcon } from 'lucide-react'
import { FC } from 'react'

const Pricing: FC = () => {
  return (
    <div className=" bg-home_gradient w-full py-[50px]">
        <div className="w-[90%] mx-auto flex flex-col gap-[100px]">
            <div className="flex flex-col gap-5 ">
                <h1 className=" font-Jakarta text-[31px] font-semibold leading-[44px] text-center text-white">
                    Simple, easy pricing
                </h1>
                <p className="font-Jakarta text-[12px] font-normal text-center text-white/80">
                    We have options to fit your need
                </p>
            </div>
            <div className="flex flex-col gap-[30px]">
                {
                    PricingData.map((data, index) => (
                        <div key={index} className="relative p-0.5">
              <div className="absolute inset-0 bg-gradient-to-r from-home_border_gradient_color_1 to-home_border_gradient_color_2  rounded-lg"></div>


                        <Card className={`bg-${data.bgColor} relative`} >
                            <CardContent className={`flex flex-col gap-[30px] `}>
                                <div className="flex flex-col gap-4">
                                    <p className="text-[18px] font-Jakarta font-normal text-white leading-7 ">
                                        {data.title}
                                    </p>
                                    <p className=" font-Jakarta text-[60px] leading-[66px] text-white font-normal">
                                        ${data.price}
                                        <span className=" text-[#8E9FAA] text-[16px] leading-6">
                                            {""} /month
                                        </span>
                                    </p>
                                    <p className="text-[#8E9FAA] text-[16px] leading-6 font-normal font-Jakarta">
                                        {data.desc}
                                    </p>
                                </div>
                                <div className=""></div>
                                <div className="flex flex-col gap-9">
                                    <div className="flex flex-col gap-5">
                                        {
                                            data.features.map((feature, index) => (
                                                <div key={index} className="flex gap-2 items-center">
                                                  <CheckIcon size={20} className=' text-home_gradient p-3 bg-[#8E9FAA] rounded-full' />
                                                    <p className="text-white font-Jakarta text-[16px] leading-6 font-medium">
                                                        {feature}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                  <Button className={` ${
                                    data.hasBorder ? " bg-primary_blue hover:bg-primary_blue" : " bg-transparent hover:bg-transparent"
                                  } border border-white hover:border-white text-white font-Jakarta text-[16px] font-medium text-center`}>
                                    Get started now
                                  </Button>
                                </div>

                            </CardContent>
                        </Card>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Pricing