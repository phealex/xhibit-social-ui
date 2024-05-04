import { useMultiStepForm } from '@/hooks';
import {FC} from 'react'

const AddJob: FC = () => {
    const { step, isLastStep, isFirstStep, currentStep, prev, next } =
    useMultsiStepForm([
   
    ]);
  return (
    <div className=' w-full max-w-[500px]'>

    </div>
  )
}

export default AddJob