import { StartupProfile } from '@/types'
import { FC } from 'react'
interface Props {
    startup: StartupProfile,
    index: number
}
const EmergingStartup: FC<Props> = ({
    startup,
    index
}) => {
  return (
    <div className='flex flex-col gap-5 w-full '>
        <h1 className=" font-Jakarta font-medium text-base text-primary_blue">
            <span className=" text-dark_green">
                {index + 1}.
            </span>
            {startup.name}
        </h1>
        <div className="flex  w-full gap-5">
            <div className="flex  flex-col gap-5">
                <ul className="flex list-disc pl-7 flex-col gap-3">
                    <li className=" font-Jakarta font-normal text-[13px]  leading-4">
                        Industry: {startup.industry}
                    </li>
                    <li className=" font-Jakarta font-normal text-[13px]  leading-4">
                        Investor: {startup.investor}
                    </li>
                    <li className=" font-Jakarta font-normal text-[13px]  leading-4">
                        Funding: {startup.funding}
                    </li>
                </ul>
                <p className="font-Jakarta font-normal text-[13px]  leading-4">
                    {startup.description}
                </p>
            </div>
            <img src={startup.image} alt="" className="w-[400px] h-[222px]" />
        </div>

    </div>
  )
}

export default EmergingStartup