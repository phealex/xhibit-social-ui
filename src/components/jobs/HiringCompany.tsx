import { FC } from 'react'
import { Card, CardContent } from '../ui/card'
import { HiringCompanyType } from '@/types'
import { RiHomeOfficeLine } from 'react-icons/ri'
import { FaPeopleGroup } from 'react-icons/fa6'
import { PiBagSimple } from 'react-icons/pi'
import { ChevronRightIcon } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useJobsDisplay } from '@/store'

interface Props {
    company: HiringCompanyType

}

const HiringCompany: FC<Props> = ({company}) => {

    const path = useLocation().pathname.split("/")[2]
    console.log(path)

    const navigate = useNavigate()
  return (
    <Card
onClick={() => {
    useJobsDisplay.setState({showStartupProfile: true, startupProfileId: company.id})
    if(path !== "jobs"){
        useJobsDisplay.setState({viewToShow: "startup"})
        navigate("/talent/jobs")

    }
}}
    className="w-[270px] cursor-pointer border-2 hover:shadow-md hover:shadow-home_border_gradient_color_2  hover:border-home_border_gradient_color_2 "
  >
    <CardContent className="flex flex-col gap-5 !p-6  ">
      <div className="flex gap-[10px]  flex-col">
        <div className="flex gap-2 items-center">
          <img
            src={company.img}
            alt=""
            className=" w-[60px] h-[60px]"
          />
          <p className=" font-Jakarta text-[16px] font-normal leading-normal text-dark_green">
            {company.companyName}
          </p>
        </div>
        <p className=" font-Jakarta text-[13px] items-center font-normal text-left text-dark_green ">
          {company.desc}
        </p>
      </div>
      <div className="flex gap-[14px] flex-col">
        <div className="flex gap-1 flex-row">
          <p className="flex gap-1">
            <RiHomeOfficeLine className="w-[15px] h-[15px] text-dark_green" />
            <span className=" font-Jakarta text-[13px] items-center font-normal text-dark_green ">
              Industry:
            </span>
          </p>
          <p className=" font-Jakarta text-[13px] items-center  font-medium text-dark_green">
            {company.industry}
          </p>
        </div>
        <div className="flex gap-1 flex-row">
          <p className="flex gap-1">
            <FaPeopleGroup className="w-[15px] h-[15px] text-dark_green" />
            <span className=" font-Jakarta text-[13px] items-center font-normal text-dark_green ">
              Company size:
            </span>
          </p>
          <p className=" font-Jakarta text-[13px] items-center  font-medium text-dark_green">
            {company.companySize}
          </p>
        </div>
        <div className="flex gap-1 flex-row">
          <p className="flex gap-1">
            <PiBagSimple className="w-[15px] h-[15px] text-dark_green" />
            <span className=" font-Jakarta text-[13px] items-center font-normal text-dark_green ">
              Open jobs:
            </span>
          </p>
          <p className=" font-Jakarta text-[13px] items-center  font-medium text-dark_green">
            {company.openJobs}
          </p>
        </div>
        <ChevronRightIcon className="w-[15px] h-[15px] text-dark_green flex ml-auto justify-end" />
      </div>
    </CardContent>
  </Card>
  )
}

export default HiringCompany