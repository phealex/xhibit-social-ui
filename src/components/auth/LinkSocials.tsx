import { handleNextProps, linkSocialAccountSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LinkSocials: FC<handleNextProps> = ({ handleNext }) => {
  const form = useForm<z.infer<typeof linkSocialAccountSchema>>({
    resolver: zodResolver(linkSocialAccountSchema),
  });

  function onSubmit(data: z.infer<typeof linkSocialAccountSchema>) {
    console.log(data);
    handleNext();
  }
  return (
    <div className="flex flex-col gap-[20px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[30px]"
        >
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-Jakarta font-medium text-[16px] text-dark_green ">
                  Twitter
                </FormLabel>
                <div className="flex justify-between h-[54px]  items-center border border-dark_green/50 rounded-[9px] ">
                  <FormControl>
                    <Input
                      className="outline-none h-full w-[80%] border-none active:outline-none rounded-[9px]"
                      autoComplete="false"
                      placeholder="@Dreal_sabali"
                      {...field}
                    />
                  </FormControl>

                  <div className="font-Jakarta font-medium text-[16px] text-white h-full bg-primary_blue flex px-4 items-center rounded-r-[9px]">
                    Link
                  </div>
                </div>
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-Jakarta font-medium text-[16px] text-dark_green ">
                  LinkedIn
                </FormLabel>
                <div className="flex justify-between h-[54px]  items-center border border-dark_green/50 rounded-[9px] ">
                  <FormControl>
                    <Input
                      className="outline-none h-full w-[80%] border-none active:outline-none rounded-[9px]"
                      autoComplete="false"
                      placeholder="Link here or username here"
                      {...field}
                    />
                  </FormControl>

                  <div className="font-Jakarta font-medium text-[16px] text-white h-full bg-primary_blue flex px-4 items-center rounded-r-[9px]">
                    Link
                  </div>
                </div>
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="behance"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-Jakarta font-medium text-[16px] text-dark_green ">
                  Behance
                </FormLabel>
                <div className="flex justify-between h-[54px]  items-center border border-dark_green/50 rounded-[9px] ">
                  <FormControl>
                    <Input
                      className="outline-none h-full w-[80%] border-none active:outline-none rounded-[9px]"
                      autoComplete="false"
                      placeholder="Link here or username here"
                      {...field}
                    />
                  </FormControl>

                  <div className="font-Jakarta font-medium text-[16px] text-white h-full bg-primary_blue flex px-4 items-center rounded-r-[9px]">
                    Link
                  </div>
                </div>
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="others"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-Jakarta font-medium text-[16px] text-dark_green ">
                  Add preferred socials
                </FormLabel>
                <div className="flex justify-between h-[54px]  items-center border border-dark_green/50 rounded-[9px] ">
                  <FormControl>
                    <Input
                      className="outline-none h-full w-[80%] border-none active:outline-none rounded-[9px]"
                      autoComplete="false"
                      placeholder="Link here or username here"
                      {...field}
                    />
                  </FormControl>

                  <div className="font-Jakarta font-medium text-[16px] text-white h-full bg-primary_blue flex px-4 items-center rounded-r-[9px]">
                    Add
                  </div>
                </div>
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className=" w-full  py-4 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LinkSocials;
