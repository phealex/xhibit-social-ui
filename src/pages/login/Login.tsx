import { LoginMap, Logo, WavingHand } from "@/assets";
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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginQuotes } from "@/constants";
import { loginFromSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [currentQuote, setCurrentQuote] = useState<number>(0);

  const form = useForm<z.infer<typeof loginFromSchema>>({
    resolver: zodResolver(loginFromSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFromSchema>) {
    console.log(values);
  }

  useEffect(() => {
    const changeQuote = setInterval(() => {
      setCurrentQuote((prevIndex) =>
        prevIndex === loginQuotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 1 minute

    // Cleanup interval on unmount
    return () => clearInterval(changeQuote);
  }, []);
  return (
    <div className="w-full flex  bg-white lg:h-screen">
      <div className="hidden lg:flex w-1/2 bg-[#060D11] h-full">
        <div className="w-[80%] mx-auto space-y-5 p-3">
          <div className="flex gap-2">
            <img src={Logo} alt="" className="h-7 w-7" />
            <p className=" font-Jakarta font-normal text-[20px] leading-7 text-white">
              The Xhibit
            </p>
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <p className=" font-Jakarta text-[31px] leading-[44px] text-white/70 text-center w-full">
              We don’t just recruit... we help build your dream team
            </p>
            <img src={LoginMap} alt="" className="" />
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[15px]">
                {loginQuotes[currentQuote] && (
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex gap-2">
                      <FaQuoteLeft className=" text-[30px] text-white/70" />
                      <p className=" font-Jakarta text-white/90 text-[20px] font-light italic leading-7 ">
                        {loginQuotes[currentQuote].quote}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center max-h-fit">
                      <img
                        src={loginQuotes[currentQuote].img}
                        alt=""
                        className=" h-[50px] w-[50px]"
                      />
                      <div className="flex flex-col justify-between">
                        <h1 className=" font-Jakarta font-semibold text-[16px] text-white/90">
                          {loginQuotes[currentQuote].name}
                        </h1>
                        <p className=" font-Jakarta font-normal text-[13px] leading-6 text-white/70">
                          {loginQuotes[currentQuote].role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 w-full  justify-center items-center">
              {Array.from({ length: loginQuotes.length }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentQuote
                      ? " bg-white"
                      : "bg-white/50"
                  }`}
                ></div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[50px] md:py-[100px] w-[90%] md:w-[75%] lg:w-1/2 mx-auto">
        <div className=" h-full flex flex-col  gap-[50px] w-full lg:w-[80%] mx-auto ">
          <div className="flex items-center flex-col gap-[10px] w-full">
            <h1 className=" text-dark_green font-Jakarta font-bold text-[25px] md:text-[42px] leading-9 md:leading-[48px] text-center flex items-center gap-3">
              Welcome back
              <img src={WavingHand} alt="" className="w-6 h-6" />
            </h1>
            <p className=" font-Jakarta text-[16px] font-normal text-dark_green/70 text-center">
              We've missed you! Please sign in to catch up on what you've missed
            </p>
          </div>
          <div className="flex gap-[30px] md:gap[50px] flex-col">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" font-Jakarta text-[16px] font-medium text-dark_green">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className=" !bg-transparent px-3 py-5 md:py-7 font-Jakarta text-[16px] text-dark_green/50 border border-dark_green/50 outline-none active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2  rounded-[5px] "
                            type="email"
                            placeholder="email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" font-Jakarta text-[16px] font-medium text-dark_green">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="border border-dark_green/50 active:border-home_border_gradient_colo hover:border-home_border_gradient_color_2 r_1 flex items-center rounded-[5px] ">
                            <Input
                              className=" !bg-transparent px-3 py-5 md:py-7 font-Jakarta text-[16px] text-dark_green/50 outline-none border-none active:bg-transparent "
                              type={showPassword ? "text" : "password"}
                              placeholder="********"
                              {...field}
                            />
                            <div
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                              className="mr-2"
                            >
                              {!showPassword ? (
                                <EyeOffIcon
                                  size={15}
                                  className=" text-dark_green/50 "
                                />
                              ) : (
                                <EyeIcon
                                  size={15}
                                  className=" text-dark_green/50 "
                                />
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                        <FormDescription className=" font-Jakarta cursor-pointer text-[16px] w-full text-dark_green text-right">
                          Forget password?
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <Button className=" bg-primary_blue hover:bg-primary_blue py-3 md:py-6 w-full font-Jakarta text-[16px] text-center ">
                    Log In
                  </Button>
                  <div className="flex gap-1 mx-auto items-center">
                    <p className="text-[16px] from-dark_green font-normal ">
                      New to XHIBIT?
                    </p>
                    <p className="text-[16px] text-primary_blue underline font-normal ">
                      Create an account
                    </p>
                  </div>
                </div>
              </form>
            </Form>

            <div className="flex flex-col gap-5 w-full">
              <div className="flex w-full items-center justify-between">
                <Separator className="flex flex-shrink w-[45%]" />
                <p className=" font-Jakarta font-medium text-[13px] leading-6 text-dark_green/70">
                  OR
                </p>
                <Separator className="flex flex-shrink w-[45%]" />
              </div>
              <div className="flex gap-10 mx-auto">
                <FaGithub className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]" />
                <FcGoogle className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]" />
                <FaLinkedinIn className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] text-white bg-[#0A66C2] p-[6px] rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
