import { JobFormSchema, MultiStepProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Select from "react-select";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMyJobsState } from "@/store";
import { talentAvailability, talentIndustries } from "@/constants";

const AddJobStep1: FC<MultiStepProps> = ({ handleNext, handlePrev }) => {
  const schema = JobFormSchema.pick({
    title: true,
    category: true,
    contractType: true,
    openRoles: true,
  });

  const jobData = useMyJobsState((state) => state.jobData);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: jobData.title,
      category: jobData.category,
      contractType: jobData.contractType,
      openRoles: jobData.openRoles,
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useMyJobsState.setState({
      jobData: {
        ...jobData,
        title: data.title,
        category: data.category,
        contractType: data.contractType,
        openRoles: data.openRoles,
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
          name="title"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Enter your title here
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a title"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contractType"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Joy type
              </FormLabel>
              <FormControl>
                <div className="flex gap-5 items-center flex-wrap">
                  {talentAvailability.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        field.onChange(item);
                      }}
                      className={cn(
                        " bg-dark_green/10 hover:bg-dark_green/10 border border-dark_green font-Jakarta font-medium text-base",
                        field.value === item && "border-primary_blue"
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
          name="openRoles"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Open roles
              </FormLabel>
              <FormControl>
                <div className="flex gap-5 items-center flex-wrap">
                  <MinusIcon
                    className="w-5 h-5 text-dark_green"
                    onClick={() => {
                      if (field.value <= 0) return;
                      field.onChange(field.value - 1);
                    }}
                  />

                  <Button
                    className={cn(
                      " bg-dark_green/10 hover:bg-dark_green/10 border border-dark_green font-Jakarta font-medium text-base"
                    )}
                  >
                    {field.value ?? 0}
                  </Button>

                  <PlusIcon
                    className="w-5 h-5 text-dark_green"
                    onClick={() => field.onChange(field.value ?? 0 + 1)}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Job categories
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

        <div className="flex w-full justify-between gap-[100px] items-center">
          {/* <Button
            type="reset"
            onClick={handlePrev}
            className="w-[160px] font-Jakarta font-medium text-base bg-transparent hover:bg-transparent border border-dark_green/70 rounded-md text-dark_green/70"
          >
            Cancel
          </Button> */}
          <Button
            type="submit"
            className="w-[160px] font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddJobStep1;
