import {FC} from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'
import { VscBriefcase } from 'react-icons/vsc'
import { Bookmark } from 'lucide-react'
import { FaRegStickyNote } from 'react-icons/fa'
import { PiNotepad } from 'react-icons/pi'

const Resources: FC = () => {
  return (
   <Card>
    <CardContent className=' flex flex-col gap-5 !p-6'>
        <CardHeader className=' font-Jakarta !p-0 font-semibold text-[20px] leading-7 text-dark_green' >Resources</CardHeader> 
        <Separator />
        <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
                <VscBriefcase className="w-4 h-4 text-dark_green/70" />
                Applied jobs
            </div>
            <div className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
                <Bookmark className="w-4 h-4 text-dark_green/70" />
                Saved jobs
                </div>
            <div className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
                <FaRegStickyNote className="w-4 h-4 text-dark_green/70" />
                Resume templates & tips
                </div>
            <div className="flex gap-2 items-center font-Jakarta font-normal text-base cursor-pointer">
                <PiNotepad className="w-4 h-4 text-dark_green/70" />
                Interview Q&As
                </div>

        </div>
    </CardContent>
   </Card>
  )
}

export default Resources