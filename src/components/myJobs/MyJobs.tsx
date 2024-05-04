import React, { FC } from 'react'
import { Button } from '../ui/button'
import {MyJobCard} from '..'
import { useMyJobsState } from '@/store'

const MyJobs: FC = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-5">
                <p className=" font-Jakarta font-semibold text-base text-dark_green">
                    Active jobs (1)
                </p>
                <p className=" font-Jakarta font-semibold text-base text-dark_green">
                    Paused jobs (0)
                </p>
            </div>
            <Button onClick={() => useMyJobsState.setState({
                isAddJob: true
            })} className=" bg-primary_blue w-fit hover:bg-primary_blue font-Jakarta font-medium text-xs text-white flex items-center gap-2 ">
               Create a job
            </Button>
        </div>
        <div className=" bg-white p-10 min-h-[500px] w-full flex flex-col gap-5 ">
        <MyJobCard />
        </div>

    </div>
  )
}

export default MyJobs