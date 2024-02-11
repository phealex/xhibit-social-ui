import { FC } from "react";
import JoinBanner from "./JoinBanner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { handleNextProps, jobProfileRegisterSchema } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { disciplines, experienceLevel } from "@/constants";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const JobProfile: FC<handleNextProps> = ({ handleNext }) => {
  const form = useForm<z.infer<typeof jobProfileRegisterSchema>>({
    resolver: zodResolver(jobProfileRegisterSchema),
  });

  function onSubmit(data: z.infer<typeof jobProfileRegisterSchema>) {
    console.log(data);
    handleNext();
  }
  return (
    <div className="flex flex-col gap-[50px]">
      <JoinBanner />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[30px]"
        >
          <FormField
            control={form.control}
            name="discipline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-Jakarta font-medium text--[16px] text-dark_green ">Discipline</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-14">
                      <SelectValue className=" font-Jakarta  font-normal text-[16px] text-dark_green/50 " placeholder="Select a discipline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-[20px] flex flex-col gap-[10px]">
                    {disciplines.map((discipline, index) => (
                      <SelectItem className=" font-Jakarta font-normal text-[16px] text-dark_green" key={index} value={discipline.key}>
                        {discipline.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className=" font-Jakarta font-medium text--[16px] text-dark_green ">Experience</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col md:flex-row gap-[13px]"
                  >
                    {experienceLevel.map((experience, index) => (
                      <FormItem
                        key={index}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={experience.key} />
                        </FormControl>
                        <FormLabel className="font-normal font-Jakarta text-[16px] text-dark_green ">
                          {experience.title}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" w-full  py-4 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
          >
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default JobProfile;
