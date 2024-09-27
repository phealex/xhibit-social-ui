import { JobFormSchema, MultiStepProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Select from "react-select";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMyJobsState } from "@/store";
import {
  quillModules,
  rateTypes,
  talentExperience,
  talentIndustries,
  talentSkills,
} from "@/constants";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddJobStep2: FC<MultiStepProps> = ({ handleNext, handlePrev }) => {
  const schema = JobFormSchema.omit({
    title: true,
    category: true,
    contractType: true,
    openRoles: true,
  });

  const jobData = useMyJobsState((state) => state.jobData);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: jobData.description,
      hours: jobData.hours,
      location: jobData.location,
      jobType: jobData.jobType,
      experience: jobData.experience,
      skills: jobData.skills,
      rateType: jobData.rateType,
      rate: jobData.rate,
      questions: jobData.questions,
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useMyJobsState.setState({
      jobData: {
        ...jobData,
        description: data.description,
        hours: data.hours,
        location: data.location,
        jobType: data.jobType,
        experience: data.experience,
        skills: data.skills,
        rateType: data.rateType,
        rate: data.rate,
        questions: data.questions,
      },
    });
    handleNext();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Job description
              </FormLabel>
              <FormControl className="">
                <ReactQuill
                  {...field}
                  modules={quillModules}
                  theme="snow"
                  className=""
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hours"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                How many hours per week will Talent work?
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  placeholder="Enter hours"
                  className=" font-Jakarta font-normal text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Talent location
              </FormLabel>
              <FormControl>
                <Select
                  isMulti
                  value={field.value.map((value) => ({
                    label: value,
                    value,
                  }))}
                  options={talentIndustries.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  onChange={(selected) => {
                    field.onChange(selected.map((item) => item.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="on-site" />
                    </FormControl>
                    <FormLabel className="font-normal">On-site</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="hybrid" />
                    </FormControl>
                    <FormLabel className="font-normal">Hybrid</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="remote" />
                    </FormControl>
                    <FormLabel className="font-normal">Remote</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Joy type
              </FormLabel>
              <FormControl>
                <div className="flex gap-5 items-center flex-wrap">
                  {talentExperience.map((item, index) => (
                    <Button
                      type="button"
                      key={index}
                      onClick={() => {
                        field.onChange(item);
                      }}
                      className={cn(
                        " bg-dark_green/10 hover:bg-dark_green/10 border border-dark_green text-dark_green font-Jakarta font-medium text-base",
                        field.value === item &&
                          "bg-primary_blue hover:bg-primary_blue text-white border-none"
                      )}
                    >
                      {item} yrs
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Skills
              </FormLabel>
              <FormDescription className=" font-Jakarta font-normal text-base text-dark_green/70">
                Target the right Talent with skills you need
              </FormDescription>
              <FormControl>
                <Select
                  isMulti
                  value={field.value.map((value) => ({
                    label: value,
                    value,
                  }))}
                  options={talentSkills.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  onChange={(selected) => {
                    field.onChange(selected.map((item) => item.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rateType"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                How talent will be paid
              </FormLabel>
              <FormControl>
                <div className="flex gap-5 items-center flex-wrap">
                  {rateTypes.map((item, index) => (
                    <Button
                      type="button"
                      key={index}
                      onClick={() => {
                        field.onChange(item);
                      }}
                      className={cn(
                        " bg-dark_green/10 hover:bg-dark_green/10 border text-dark_green !h-fit w-fit border-dark_green font-Jakarta font-medium text-base",
                        field.value === item &&
                          "bg-primary_blue hover:bg-primary_blue text-white border-none"
                      )}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Rate
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  placeholder="Enter a rate"
                  className=" font-Jakarta font-normal text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Application questions (optional)
              </FormLabel>
              <FormDescription className=" font-Jakarta font-normal text-base text-dark_green/70">
                Talent is prompted to answer these when submitting an
                application
              </FormDescription>
              <FormControl>
                <ReactQuill {...field} modules={quillModules} theme="snow" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-between gap-[100px] items-center">
          <Button
            type="reset"
            onClick={() => useMyJobsState.setState({ isAddJob: false })}
            className="w-[160px] flex lg:hidden font-Jakarta font-medium text-base bg-transparent hover:bg-transparent border border-dark_green/70 rounded-md text-dark_green/70"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-[160px] font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
          >
            Save and post
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddJobStep2;
