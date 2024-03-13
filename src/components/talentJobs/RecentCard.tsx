import { JobType } from '@/types'
import { FC } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { SparkleIcon } from 'lucide-react'

interface Props {
    job: JobType
}
const RecentCard: FC<Props> = ({
    job
}) => {
  return (
   <Card>
    <CardContent className='flex items-start justify-between cursor-pointer !p-1 bg-dark_green/10 '>
        <div className="flex gap-2 items-start">
        <img
          src={job.logo}
          alt=""
          className="  w-4 h-4 "
        />
        <div className="flex flex-col gap-1">
            <h1 className=" font-Jakarta text-[13px] text-dark_green font-semibold ">{job.name}</h1>
            <p className=" font-Jakarta text-[11px] text-dark_green/50">{job.role.split(" ").slice(0, 2).join(" ")}</p>
            </div>
        </div>
        <div className="flex gap-1 flex-col items-end justify-start ">
        <Button className=" h-auto text-primary_blue !p-0 !m-0 bg text-xs bg-transparent hover:bg-transparent outline-none border-none flex gap-2 ">
  
                <SparkleIcon
                  fill="rgba(117,89,229,1)"
                  className="w-[12px] h-[12px] text-home_border_gradient_color_1 "
                />
                Actively hiring
              </Button>
            <p className=" font-Jakarta text-[11px] text-dark_green/50">{job.location}</p>


        </div>

    </CardContent>
   </Card>
  )
}

export default RecentCard