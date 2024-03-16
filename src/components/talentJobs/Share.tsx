import { Sparkle } from '@/assets'
import { Share2 } from 'lucide-react'
import React, { FC } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { cn } from '@/lib/utils';

interface Props {
    className : string;
}
const Share: FC<Props> = ({className}) => {
  return (
    <div className={cn(" flex ml-auto gap-5 items-center", className)}>
    <div className="flex gap-[10px] items-center w-fit">
        <img src={Sparkle} alt="" className=" h-3 " />
        <p className=" font-Jakarta font-medium text-[13px] leading-4 text-primary_blue">
            Actively hiring
        </p>
    </div>
    <Dialog>
        <DialogTrigger className='flex gap-[10px] items-center w-fit'>
        <Share2 className="h-3 w-3 text-dark_green/70"  />
        <p className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green/70">
            Share
        </p>
        </DialogTrigger>
        <DialogContent className=' max-h-[400px] max-w-[500px] flex justify-center p-6 flex-col'>
            <h1 className=" font-Jakarta font-medium text-[25px] leading-9">
                Share this job
            </h1>
            <div className="h-[54px] p-3 flex items-center border border-[#8e9faa] ">
                <p className=" font-Jakarta font-normal text-base text-dark_green">
                    {
                        window.location.href
                    }
                </p>
            </div>

        </DialogContent>
    </Dialog>
</div>
  )
}

export default Share