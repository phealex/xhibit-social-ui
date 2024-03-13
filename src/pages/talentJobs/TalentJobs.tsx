import { FC } from 'react'
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
import { jobSearchFormSchema } from '@/types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPinIcon, SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { VscOrganization } from 'react-icons/vsc';
import { MdOutlineVerified } from 'react-icons/md';
import { PiBagSimple } from 'react-icons/pi';
import { Separator } from '@/components/ui/separator';
import { foundJobs } from '@/constants';
import { JobCard, Resources } from '@/components';
import { Button } from '@/components/ui/button';

const TalentJobs: FC = () => {
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
  return (
    <div className='flex flex-col w-full gap-[30px] bg-accent_blue min-h-screen'>
        <div className="w-full bg-white sticky z-50 top-[100px] left-0 right-0">
            <div className="container ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onJobSearch)}
                  className="flex flex-row gap-[30px] p-[30px]"
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
                              <SelectValue
                                className=" "
                                placeholder="Job level"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className=" bg-transparent text-dark_green">
                            <SelectItem value="entry level">
                              Entry Level
                            </SelectItem>
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
            </div>
        </div>
        <div className=" container  mx-auto flex gap-5">
        <section className="w-[20%] hidden lg:flex flex-col gap-5">
            <Resources />
          
        </section>
        <section className="flex flex-1 flex-col gap-5 w-full">
        <div className="flex w-full items-center">
              <Separator className=" flex flex-1 flex-shrink w-full bg-dark_green/10" />
              <div className="flex gap-1 items-center">
                <p className=" font-Jakarta text-nowrap text-[13px] text-dark_green font-medium  ">
                  Sort by:
                </p>
                <Select>
                  <SelectTrigger className="!p-0 !h-fit bg-transparent border-none outline-none ring-transparent font-Jakarta text-[13px] placeholder:text-primary_blue text-primary_blue font-medium  ">
                    <SelectValue placeholder="Best Match" />
                  </SelectTrigger>
                  <SelectContent className=" bg-transparent">
                    <SelectItem value="best">Best Match</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="flex flex-1 flex-shrink w-full bg-dark_green/10" />
            </div>
            <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green ">
              <span className="font-medium text-dark_green ">170{""}</span>
            {""}  jobs found
            </h1>
            <div className="flex gap-5 flex-col ">
            {foundJobs.map((job, index) => (
              <JobCard key={index} job={job} />
           
            ))}
          </div>
          <Button className=' bg-transparent hover:bg-transparent text-dark_green hover:text-dark_green mx-auto w-fit p-3 rounded-3xl border border-dark_green'>
            Load More
          </Button>
        </section>

        </div>
        <div className=""></div>
    </div>
  )
}

export default TalentJobs