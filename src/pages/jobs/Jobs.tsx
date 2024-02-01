import { Airbnb, Binance, Flutterwave, Google, JobsHero1, JobsHero2, Tesla } from '@/assets'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { whosHiring } from '@/constants'
import { jobSearchFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, ChevronRightIcon, MapPinIcon, SearchIcon } from 'lucide-react'
import {FC} from 'react'
import { useForm } from 'react-hook-form'
import { FaPeopleGroup } from 'react-icons/fa6'
import { PiBagSimple } from 'react-icons/pi'
import { RiHomeOfficeLine } from 'react-icons/ri'
import { z } from 'zod'
import { VscOrganization } from 'react-icons/vsc'

const Jobs: FC = () => {

    const form =  useForm<z.infer<typeof jobSearchFormSchema>>({
        resolver: zodResolver(jobSearchFormSchema), 
        defaultValues: {
            title: '',
            location: '',
            type: '',
            level: "",
            jobType: '',
            rate: '',
            skills: []
        }
    })


    function onJobSearch (values: z.infer<typeof jobSearchFormSchema>) {
        console.log(values)
    }
  return (
    <div className=" bg-home_gradient w-full">
      <div className="flex flex-col gap-10 w-[90%]  mx-auto py-[80px]">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-[60px]  items-center">
            <img src={JobsHero1} alt="" className="h-[300px]" />
            <div className=" flex flex-col gap-[30px] justify-center items-center">
                <div className="flex gap-[15px] flex-col">
                    <p className=" font-Jakarta text-white text-[16px] leading-normal font-normal text-center uppercase">
                    OVER 100K REMOTE & LOCAL STARTUP JOBS
                    </p>
                    <h1 className=" font-Jakarta text-white font-medium text-[31px] leading-[44px] text-center">
                    Discover Your Next Opportunity: Explore Our Job Section
                    </h1>
                </div>
                <Button className="flex gap-1 px-5 py-[10px] bg-primary_blue hover:bg-primary_blue border-none outline-none rounded-[5px] items-center">
                unlock access to job opportunities
                <ArrowRightIcon className="w-[20px] h-[20px] text-white" />
                </Button>

            </div>
            <img src={JobsHero2} alt="" className="h-[300px]" />
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex gap-5 items-center">
          <div className=" bg-home_border_gradient_color_1 h-[2px] w-full shrink"></div>
          <h1 className="flex shrink-0 font-Jakarta text-[13px] md:text-[25px] font-medium text-white leading-9">
            Trusted by foremost global corporations
          </h1>
          <div className=" bg-home_border_gradient_color_2 h-[2px] w-full shrink"></div>

        </div>
        <div className="flex items-center justify-between ">
          <img src={Airbnb} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Google} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Flutterwave} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Binance} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
          <img src={Tesla} alt="icon" className=" h-[15px] md:h-[30px] w-[18%]" />
        </div>
        </div>
      </section>
      <section className="flex flex-col gap-[30px]">
        <h1 className=" font-Jakarta text-[31px] font-semibold leading-[44px] text-white ">
            Who's hiring 
        </h1>
        <div className="flex p-[45px] border border-[#8E9FAA]/50 flex-col rounded-[25px] gap-[34px] ">
            {
                whosHiring.map((item, index) => (
                    <Card key={index} className=' max-w-fit hover:border-2 hover:border-home_border_gradient_color_2'> 
                    <CardContent className='flex flex-col gap-5 !p-6 ' >
                        <div className="flex gap-[10px]  flex-col">
                            <div className="flex gap-2 items-center">
                                <img src={item.img} alt="" className=" w-[60px] h-[60px]" />
                                <p className=" font-Jakarta text-[16px] font-normal leading-normal text-dark_green">
                                    {item.companyName}
                                </p>
                            </div>
                            <p className=" font-Jakarta text-[13px] font-normal text-justify text-dark_green ">
                                {item.desc}
                            </p>
                        </div>
                        <div className="flex gap-[14px] flex-col">
                            <div className="flex gap-1 flex-row">
                                <p className="flex gap-1">
                                 <RiHomeOfficeLine className="w-[15px] h-[15px] text-dark_green" />
                                    <span className=" font-Jakarta text-[13px] font-normal text-dark_green ">
                                        Industry:
                                        </span>   
                                </p>
                                <p className=" font-Jakarta text-[13px]  font-medium text-dark_green">
                                    {item.industry}
                                </p>
                            </div>
                            <div className="flex gap-1 flex-row">
                                <p className="flex gap-1">
                                 <FaPeopleGroup className="w-[15px] h-[15px] text-dark_green" />
                                    <span className=" font-Jakarta text-[13px] font-normal text-dark_green ">
                                        Company size:
                                        </span>   
                                </p>
                                <p className=" font-Jakarta text-[13px]  font-medium text-dark_green">
                                    {item.companySize}
                                </p>
                            </div>
                            <div className="flex gap-1 flex-row">
                                <p className="flex gap-1">
                                 <PiBagSimple className="w-[15px] h-[15px] text-dark_green" />
                                    <span className=" font-Jakarta text-[13px] font-normal text-dark_green ">
                                        Open jobs:
                                        </span>   
                                </p>
                                <p className=" font-Jakarta text-[13px]  font-medium text-dark_green">
                                    {item.openJobs}
                                </p>
                            </div>
                            <ChevronRightIcon className="w-[15px] h-[15px] text-dark_green flex ml-auto justify-end" />
                            </div> 
                        
                        </CardContent>

                    </Card>
                ))
            }
        </div>
      </section>
      <section className="flex flex-col gap-[50px] ">
        <div className="flex flex-col gap-[30px]">
            <h1 className=" font-Jakarta text-[16px] font-normal text-white">
                <span className="font-medium ">170{""}</span>
                jobs found 
            </h1>
            <div className="flex rounded-[8px] border-[0.5px] border-[#8e9faa]/50">
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onJobSearch)} className="flex flex-row gap-[30px] p-[30px]"> 
                    <FormField 
                    control={form.control}
                    name='title'
                    render={({field}) => (
                        <FormItem className='flex items-center gap-1 border border-white active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 '>
                                <SearchIcon className="w-[25px] h-[25px] text-white" />
                            <FormControl className=''> 
                                <Input {...field} placeholder="Job title" className="bg-transparent border-none outline-none font-Jakarta text-[20px] font-normal text-white !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0" />
                                </FormControl> 
                                <FormMessage className="text-red-500"  />
                        </FormItem>
                    )}
                     />
                      <FormField 
                    control={form.control}
                    name='location'
                    render={({field}) => (
                        <FormItem className=' hidden md:flex items-center gap-1 border border-white active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 '>
                                <MapPinIcon className="w-[25px] h-[25px] text-white" />
                            <FormControl className=''> 
                                <Input {...field} placeholder="City, state" className="bg-transparent border-none outline-none font-Jakarta text-[20px] font-normal text-white !p-0 !m-0 focus-visible:outline-none focus-visible:ring-0" />
                                </FormControl> 
                                <FormMessage className="text-red-500"  />
                        </FormItem>
                    )}
                     />
                      <FormField 
                    control={form.control}
                    name='level'
                    render={({field}) => (
                        <FormItem className=' hidden md:flex items-center gap-1 border border-white active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2 rounded-lg px-2 '>
                                <VscOrganization className="w-[25px] h-[25px] text-white" />
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Job level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="entry level">Entry Level</SelectItem>
                  <SelectItem value="mid level">Mid Level</SelectItem>
                  <SelectItem value="senior level">Senior Level</SelectItem>
                </SelectContent>
              </Select> 
                                <FormMessage className="text-red-500"  />
                        </FormItem>
                    )}
                     />
                    </form>
                </Form>

            </div>
        </div>
        <div className=""></div>
      </section>
      <section className=""></section>
      </div>
    </div>
  )
}

export default Jobs