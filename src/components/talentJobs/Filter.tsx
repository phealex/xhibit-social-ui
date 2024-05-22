import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPinIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VscOrganization } from "react-icons/vsc";
import { MdOutlineVerified } from "react-icons/md";
import { PiBagSimple } from "react-icons/pi";
import { jobSearchFormSchema } from "@/types";
import { FieldErrors, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";

interface FilterProps {
  className?: string;
}
const Filter: FC<FilterProps> = ({ className }) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof jobSearchFormSchema>>({
    resolver: zodResolver(jobSearchFormSchema),
    defaultValues: {
      title: "",
      location: "",
      type: "",
      level: "",
      jobType: "",
      rate: "",
      skills: [],
    },
  });

  function onJobSearch(values: z.infer<typeof jobSearchFormSchema>) {
    console.log(values);
  }

  function onJobSearchError(errors: FieldErrors<z.infer<typeof jobSearchFormSchema>>) {
    // console.log(errors);
    toast({
      title: "Form error",
      description: errors.title?.message || errors.location?.message || errors.level?.message || errors.rate?.message || errors.skills?.message || errors.type?.message || errors.jobType?.message,
    });
  }
  return (
    <div className="flex flex-col gap-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onJobSearch, onJobSearchError)}
          className={cn(
            "flex flex-row gap-[30px] items-center justify-center w-full my-auto",
            className
          )}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className=" ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  <SearchIcon className="w-[25px] h-[25px] text-dark_green" />
                  <FormControl className="">
                    <Input
                      {...field}
                      placeholder="Job title"
                      className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="  ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  <MapPinIcon className="w-[25px] h-[25px] text-dark_green" />
                  <FormControl className="">
                    <Input
                      {...field}
                      placeholder="City, state"
                      className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem className="  ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  <VscOrganization className="w-[25px] h-[25px] text-dark_green" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" bg-transparent border-none text-dark_green !p-0 !m-0">
                        <SelectValue className=" " placeholder="Job level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=" bg-transparent text-dark_green">
                      <SelectItem value="entry level">Entry Level</SelectItem>
                      <SelectItem value="mid level">Mid Level</SelectItem>
                      <SelectItem value="senior level">Senior Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem className=" hidden lg: ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  <VscOrganization className="w-[25px] h-[25px] text-dark_green" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" bg-transparent border-none text-dark_green !p-0 !m-0">
                        <SelectValue className="" placeholder="Remote" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=" bg-transparent text-dark_green">
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">Onsite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => (
              <FormItem className="  ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  {/* <MapPinIcon className="w-[25px] h-[25px] text-dark_green" /> */}
                  <FormControl className="">
                    <Input
                      {...field}
                      placeholder="NGN Rate"
                      className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="  ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  <MdOutlineVerified className="w-[25px] h-[25px] text-dark_green" />
                  <FormControl className="">
                    <Input
                      {...field}
                      placeholder="Skills"
                      className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="  ">
                <div className=" flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2">
                  <PiBagSimple className="w-[25px] h-[25px] text-dark_green" />
                  <FormControl className="">
                    <Input
                      {...field}
                      placeholder="Job Type"
                      className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" font-Jakarta text-[16px] font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit"
          >
            Search
          </Button>
        </form>
      </Form>
      {/* <p className=" font-Jakarta font-normal text-xs text-red-600">
      {form.formState.errors.title?.message || form.formState.errors.location?.message || form.formState.errors.level?.message || form.formState.errors.rate?.message || form.formState.errors.skills?.message || form.formState.errors.type?.message || form.formState.errors.jobType?.message}
    </p> */}
    </div>
  );
};

export default Filter;
