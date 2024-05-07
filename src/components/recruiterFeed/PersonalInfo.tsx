import { RecruiterProfileSetupSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useRecruiterState } from "@/store";
import { BiEdit } from "react-icons/bi";


const OrganizationInfo: FC = () => {
  

   const schema = RecruiterProfileSetupSchema.pick({
    personal: true,
   })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),

  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useRecruiterState.setState({
        isProfileSetup: false
    })
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
           <div className=" flex lg:hidden h-[80px] w-[80px] md:h-[140px] md:w-[140px] rounded-full bg-dark_green/10  justify-center items-center">
        <label htmlFor="profileUpload">
          {""}
          <BiEdit className=" w-[25px] h-[25px] p-1 text-dark_green cursor-pointer m-3 rounded-full" />
        </label>
        <input id="profileUpload" type="file" className="hidden" />
      </div>

        <FormField
          control={form.control}
          name="personal.firstName"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                First name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="First name"
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
          name="personal.lastName"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Last name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="First name"
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
          name="personal.bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" flex items-center justify-between">
                <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                Tell us a bit about yourself
                </p>
                <p
                  className={` font-Jakarta font-normal text-[16px] leading-5 text-dark_green/70 ${
                    field?.value?.length > 1000 ? " text-red-600" : ""
                  }`}
                >
                  {field?.value?.length}/1000
                </p>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a bit about yourself"
                  className=" focus-visible:ring-transparent min-h-[260px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     
          <Button
            type="submit"
            className="w-full font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
          >
            Save
          </Button>
      </form>
    </Form>
  );
};

export default OrganizationInfo;
