import { TalentShowcaseHeader, TopRated } from '@/components'
import {FC} from 'react'

const TalentShowcase:FC = () => {
  return (
    <div className='flex flex-col w-full gap-10'>
        <TalentShowcaseHeader />
        <div className=" container flex gap-10">
            <div className="w-[290px] flex flex-col gap-5">
                <TopRated />
            </div>
            <div className=""></div>
        </div>

    </div>
  )
}

export default TalentShowcase