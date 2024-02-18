import { Check } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const ResetDone: FC = () => {
  return (
    <div className=' h-full w-[90%] mx-auto flex flex-col justify-center items-center gap-[50px] my-auto'>
        <div className="flex gap-5 flex-col justify-center items-center">
            <Check className="text-[50px] text-white bg-light_green rounded-[100%] h-[100px] w-[100px] p-3 " />
            <div className="flex flex-col gap-[10px]">
            <h1 className=" font-Jakarta text-[25px] text-center leading-9 text-dark_green font-medium">
                Your password is set
            </h1>
            <p className=" font-Jakarta text-dark_green/70 text-[16px] font-normal text-center ">
            You can now sign in or out of your account with your password.
            </p>
            </div>
        </div>
        <Link to={"/auth/login"}>
        <Button
              className=" w-full  py-6 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
              >
              Back to Login 
            </Button>
                </Link>
    </div>
  )
}

export default ResetDone