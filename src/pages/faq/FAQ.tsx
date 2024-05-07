import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqData, faqHeaders } from "@/constants";
import { FC, useState } from "react";

const FAQ: FC = () => {
  const [activeHeader, setActiveHeader] = useState(faqHeaders[0]);
  return (
    <div className=" bg-home_gradient w-full py-[50px]">
      <div className="w-[90%] mx-auto flex flex-col gap-[100px]">
        <div className="flex flex-col gap-5 ">
          <h1 className=" font-Jakarta text-[31px] font-semibold leading-[44px] text-center text-white">
            Frequently Asked Questions
          </h1>
          <p className="font-Jakarta text-[12px] font-normal text-center text-white/70">
            We understand that you will have many questions related to how
            XHIBIT works. We have tried to document it in as detailed a fashion
            as possible.
          </p>
        </div>
        <div className="flex flex-col gap-[55px] ">
          <div className="flex gap-5 items-center overflow-x-scroll ">
            {faqHeaders.map((header, index) => (
              <Button
                key={index}
                className={`font-Jakarta text-[16px] font-medium text-white py-2 px-3 border-none outline-none hover:border-none hover:outline-none ${
                  activeHeader === header
                    ? " bg-primary_blue rounded-[23px] hover:bg-primary_blue "
                    : " bg-transparent hover:bg-transparent"
                }`}
                onClick={() => setActiveHeader(header)}
              >
                {header}
              </Button>
            ))}
          </div>
          <Accordion type="single" collapsible>
            {faqData.map((data, index) => (
              <AccordionItem
                key={index}
                title={data.question}
                value={data.question}
              >
                <AccordionTrigger className="font-Jakarta text-left text-[20px] font-medium leading-7 text-white hover:no-underline">
                  {/* <p > */}
                  {data.question}
                  {/* </p> */}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-Jakarta text-[16px] font-light leading-7 text-white/80">
                    {data.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
