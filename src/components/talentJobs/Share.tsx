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
        <DialogContent>

        </DialogContent>
    </Dialog>
</div>
  )
}

export default Share