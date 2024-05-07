import { interview } from "@/assets";
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Interview: FC = () => {
  return (
    <div className="flex flex-col gap-[50px]  ">
      <div className="flex gap-[60px] items-center justify-between ">
        <div className="flex flex-col gap-3">
          <h1 className=" font-Jakarta font-semibold text-[25px] leading-9 text-dark_green">
            Interview questions, answers and tips
          </h1>
          <p className="font-Jakarta font-normal text-[13px] leading-6 text-dark_green/70">
            Recruiters seek highly skilled talents with a robust skill set
            encompassing hard skills such as planning, evaluating, creating, and
            quality testing, alongside soft skills like workflow planning,
            problem-solving, and adept collaboration within teams. Here's an
            inclusive compilation of commonly asked questions recruiters might
            pose during candidate interviews.
          </p>
        </div>
        <img
          src={interview}
          alt=""
          className=" h-[189px] w-[251px] object-cover"
        />
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        <AccordionItem
          value="Tell me about yourself"
          className=" bg-white p-4 rounded-md"
        >
          <AccordionTrigger className="  ">
            <div className="flex justify-start gap-3 flex-col">
              <h1 className=" font-Jakarta font-semibold text-base">
                1. Tell me about yourself.
              </h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green hover:no-underline">
              Hint: To answer the question
            </p>
            <p className=" font-Jakarta text-[13px] font-normal leading-6 text-dark_green">
              A lot of jobs require someone who can think on their feet or
              present ideas with crispness and clarity. This question provides
              employers with an early preview of your core skills, your
              personality and your ability to respond to an unstructured
              question.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="What is your greatest strength?"
          className=" bg-white p-4 rounded-md"
        >
          <AccordionTrigger className="  ">
            <div className="flex justify-start gap-3 flex-col">
              <h1 className=" font-Jakarta font-semibold text-base">
                2. What is your greatest strength?
              </h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green hover:no-underline">
              Hint: To answer the question
            </p>
            <p className=" font-Jakarta text-[13px] font-normal leading-6 text-dark_green">
              Employers want to see if you can strike the right balance between
              confidence and humility. Hiring managers also want to get a sense
              for how self-aware and honest you are and align your strengths to
              the role at hand.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="What is your greatest weakness?"
          className=" bg-white p-4 rounded-md"
        >
          <AccordionTrigger className="  ">
            <div className="flex justify-start gap-3 flex-col">
              <h1 className=" font-Jakarta font-semibold text-base">
                3. What is your greatest weakness?
              </h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green hover:no-underline">
              Hint: To answer the question
            </p>
            <p className=" font-Jakarta text-[13px] font-normal leading-6 text-dark_green">
              The interviewer is assessing whether your weaknesses will get in
              the way of doing the job. Employers are looking for humility and
              whether you’re committed to learning and growing. This is a place
              you can showcase what you’re doing to improve.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="Why should we hire you?"
          className=" bg-white p-4 rounded-md"
        >
          <AccordionTrigger className="  ">
            <div className="flex justify-start gap-3 flex-col">
              <h1 className=" font-Jakarta font-semibold text-base">
                4. Why should we hire you?
              </h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" font-Jakarta text-[13px] font-medium leading-6 text-dark_green hover:no-underline">
              Hint: To answer the question
            </p>
            <p className=" font-Jakarta text-[13px] font-normal leading-6 text-dark_green">
              This question tests how persuasive you are. Interviewers want to
              see if you can make a calm, confident case for yourself, even if
              they’re acting skeptical. They’re looking for factual and
              compelling answers.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Interview;
