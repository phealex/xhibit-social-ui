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
import { ArrowLeft, MapPinIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VscOrganization } from "react-icons/vsc";
import { MdOutlineVerified } from "react-icons/md";
import { PiBagSimple } from "react-icons/pi";
import { jobSearchFormSchema } from "@/types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useJobsDisplay } from "@/store";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const TalentJobsNav: FC = () => {
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

  const viewToShow = useJobsDisplay((state) => state.viewToShow);

  const setViewToShow = useJobsDisplay((state) => state.setViewToShow);
  return (
    <div className="w-full bg-white sticky z-50 top-[100px] left-0 right-0 h-20">
      <div className="container h-full hidden lg:flex  ">
        {viewToShow === "browse" ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onJobSearch)}
              className="flex flex-row gap-[30px] items-center justify-center w-full h-full"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
                    <SearchIcon className="w-[25px] h-[25px] text-dark_green" />
                    <FormControl className="">
                      <Input
                        {...field}
                        placeholder="Job title"
                        className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className=" hidden md:flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
                    <MapPinIcon className="w-[25px] h-[25px] text-dark_green" />
                    <FormControl className="">
                      <Input
                        {...field}
                        placeholder="City, state"
                        className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem className=" hidden md:flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
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
                        <SelectItem value="senior level">
                          Senior Level
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem className=" hidden lg:flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
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
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rate"
                render={({ field }) => (
                  <FormItem className=" hidden md:flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
                    {/* <MapPinIcon className="w-[25px] h-[25px] text-dark_green" /> */}
                    <FormControl className="">
                      <Input
                        {...field}
                        placeholder="NGN Rate"
                        className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className=" hidden md:flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
                    <MdOutlineVerified className="w-[25px] h-[25px] text-dark_green" />
                    <FormControl className="">
                      <Input
                        {...field}
                        placeholder="Skills"
                        className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className=" hidden md:flex items-center gap-1 border border-dark_green active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 ">
                    <PiBagSimple className="w-[25px] h-[25px] text-dark_green" />
                    <FormControl className="">
                      <Input
                        {...field}
                        placeholder="Job Type"
                        className="bg-transparent border-none outline-none font-Jakarta text-[14px] font-normal text-dark_green !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        ) : (
          <div className=" w-full h-full items-center justify-start flex gap-5">
            <Button onClick={() => setViewToShow("browse")} className=" bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal">
              <ArrowLeft className=" h-5 w-5" />
              Back to job feeds
            </Button>
          </div>
        )}
      </div>
      <div className="flex w-[90%] mx-auto lg:hidden h-full justify-between items-center">
      <Button onClick={() => setViewToShow("browse")} className={cn("bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal", viewToShow === "browse" && "text-primary_blue underline underline-offset-[10px]"  )}>
              Browse jobs
            </Button>
            <Button onClick={() => setViewToShow("saved")} className={cn("bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal", viewToShow === "saved" && "text-primary_blue underline underline-offset-[10px]"  )} >
              Saved jobs
            </Button>
            <Button onClick={() => setViewToShow("applied")} className={cn("bg-transparent hover:bg-transparent flex gap-2 items-center text-dark_green text-[13px] leading-6 font-medium md:text-base font-Jakarta md:font-normal", viewToShow === "applied" && "text-primary_blue underline underline-offset-[10px]"  )}>
              Applied jobs
            </Button>

      </div>
    </div>
  );
};

export default TalentJobsNav;
