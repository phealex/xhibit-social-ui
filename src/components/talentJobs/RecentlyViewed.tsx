import {FC} from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'
import { foundJobs } from '@/constants'
import RecentCard from './RecentCard'


const RecentlyViewed: FC = () => {
  return (
   <Card>
    <CardContent className=' flex flex-col gap-5 !p-6'>
        <CardHeader className=' font-Jakarta !p-0 font-semibold text-[20px] leading-7 text-dark_green' >Recently viewed jobs</CardHeader> 
        <Separator />
        <div className="flex flex-col gap-5">
       {
        foundJobs.map((job, index) => (
            <RecentCard job={job} key={index} />
        ))
       }     

        </div>
    </CardContent>
   </Card>
  )
}

export default RecentlyViewed