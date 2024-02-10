import { user1, user2, user3, user4 } from '@/assets'
import { FC } from 'react'
import { Button } from '../ui/button'

const JoinBanner: FC = () => {

    const images: string[] =[
        user1,
        user2, user3, user4
    ]
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-[10px]">
<h1 className=" font-Jakarta tex-[25px] leading-9 font-bold text-dark_green text-center">
    Join XHIBIT
</h1>
<p className=" font-Jakarta text-[16px] font-normal text-center text-dark_green/70">
Tell us why you are here to help us give you a tailored experience.
</p>
        <div className="flex mx-auto ">
            {
                images.map((image, index) => (
                    <img src={image} key={index} alt="" className=" w-10 h-10 -ml-2" />
                ))
            }
            <Button className='p-[10px] font-Jakarta text-[16px] text-white font-medium bg-[#0085FF]/70 hover:bg-[#0085FF]/70 hover:text-white rounded-[25px] -ml-3 '>
                Join 3.4k members
            </Button>
        </div>
    </div>
  )
}

export default JoinBanner