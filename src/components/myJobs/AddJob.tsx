import { useMultiStepForm } from '@/hooks';
import {FC} from 'react'
import {AddJobStep1, AddJobStep2} from '..';

const AddJob: FC = () => {

  function handlePrev() {
    if (isFirstStep) {
      return;
    }
    prev();
  }

  function handleNext() {
    if (isLastStep) return;
    next();
  }
    const { step, isLastStep, isFirstStep, currentStep, prev, next } =
    useMultiStepForm([
   <AddJobStep1 handlePrev={handlePrev} handleNext={handleNext} />,
    <AddJobStep2 handlePrev={handlePrev} handleNext={handleNext} />,
    ]);
  return (
    <div className=' w-full max-w-[500px]'>
      {step}
    </div>
  )
}

export default AddJob