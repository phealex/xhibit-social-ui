import {FC} from 'react'
import { Separator } from '../ui/separator'
import { ProfileNote } from "@/assets";
import { BiEdit } from "react-icons/bi";
import { useRecruiterState } from '@/store';
import { Button } from '../ui/button';

const RecruiterProfileSider: FC = () => {
  const setIsProfileSetup = useRecruiterState((state) => state.setIsProfileSetup);
  return (
    <div className=" bg-dark_green/5 flex flex-col gap-5 py-10 p-5 h-full min-h-screen">
    <div className="flex flex-col gap-3">
      <p className=" font-Jakarta font-semibold text-xl text-dark_green">
        My profile
      </p>
      <Separator className="w-full bg-dark_green/10" />
    </div>
    <img
      src={ProfileNote}
      alt=""
      className=" h-[200px] w-[200px] object-cover mx-auto"
    />
    <div className="flex flex-col gap-2 items-center">
      <div className=" h-[140px] w-[140px] rounded-full bg-dark_green/10 flex justify-center items-center">
        <label htmlFor="profileUpload">
          {""}
          <BiEdit className=" w-[25px] h-[25px] p-1 text-dark_green cursor-pointer m-3 rounded-full" />
        </label>
        <input id="profileUpload" type="file" className="hidden" />
      </div>
      <p className=" font-Jakarta font-semibold text-xl text-dark_green">
        Profile image
      </p>
      <Button onClick={() => {
          setIsProfileSetup(true);
         }} className=" bg-primary_blue hover:bg-primary_blue text-base text-white w-fit ">
            Edit profile
         </Button>
    </div>
  </div>
  )
}

export default RecruiterProfileSider