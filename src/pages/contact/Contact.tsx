import { Support } from "@/assets";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Contact: FC = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full bg-home_gradient py-[50px]">
      <div className="w-[90%] mx-auto flex flex-col gap-[100px] lg:flex-row ">
        <section className="flex flex-col gap-[50px] w-full">
          <div className="flex flex-col gap-5 items-center w-full">
            <h1 className="text-[31px] font-Jakarta font-semibold w-full leading-[44px] text-center text-white">
              Get in touch
            </h1>
            <p className="text-[20px] font-Jakarta font-normal leading-7 text-white text-center">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-5 md:flex-row md:gap-[80px]">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel className=" font-Jakarta text-white font-normal text-[16px]" htmlFor="firstName">First Name</FormLabel>
                        <FormControl>
                          <Input className="px-[10px]  py-4 text-dark_green/70 outline-none border-none active:outline-none active:border-none text-[16px]" placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel className=" font-Jakarta text-white font-normal text-[16px]" htmlFor="lastName">Last Name</FormLabel>
                        <FormControl>
                          <Input className="px-[10px]  py-4 text-dark_green/70 outline-none border-none active:outline-none active:border-none text-[16px]" placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" font-Jakarta text-white font-normal text-[16px]" htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                        className="px-[10px]  py-4 text-dark_green/70 outline-none border-none active:outline-none active:border-none text-[16px]"
                          type="email"
                          placeholder="You@company.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className=" font-Jakarta text-[13px] font-thin text-white text-center md:pt-2">
                        Please, enter the email address where you wish to
                        receive our answer. If you are a registered user of
                        xhibit, please include the email address you used when
                        you registered if possible to help us locate your
                        account as soon as possible.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" font-Jakarta text-white font-normal text-[16px]" htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                        className="text-dark_green/70 outline-none border-none active:outline-none active:border-none text-[16px]"
                          placeholder="Include a message..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className=" font-Jakarta text-[13px] font-thin text-white text-center md:pt-2">
                        Please enter the details of your request and, if you
                        have any questions regarding our Terms of use, please
                        include specific samples of the usage you wish to give
                        our resources. If you’re reporting a problem, make sure
                        to include as much information as possible. Please
                        include any screenshots or videos of issues since this
                        will also help us resolve problems much sooner. Once
                        your request is submitted, a member of our support staff
                        will respond as soon as possible.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                        className=" bg-white border border-[#8E9FAA] w-5 h-5 mr-2 data-[state=checked]:bg-white data-[state=checked]:text-primary_blue"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className=" font-Jakarta text-white font-normal text-[16px]" htmlFor="terms">
                        You agree to our friendly privacy policy.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="py-4 w-full text-center bg-primary_blue hover:bg-primary_blue border-none hover:border-none font-Jakarta text-[16px] font-medium "
                >
                  Send message
                </Button>
              </form>
            </Form>
          </div>
        </section>
        <section className="w-full rounded-md">
          <img src={Support} alt="" className="rounded-md  w-full object-cover lg:h-[700px]" />
        </section>
      </div>
    </div>
  );
};

export default Contact;
