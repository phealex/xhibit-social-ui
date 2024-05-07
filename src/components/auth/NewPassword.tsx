import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleNextProps, resetPasswordSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewPassword: FC<handleNextProps> = ({ handleNext }) => {
  const schema = resetPasswordSchema.pick({
    newPassword: true,
    confirmPassword: true,
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    handleNext();
  }

  return (
    <div className=" h-full w-[90%] mx-auto flex flex-col justify-center items-center gap-[50px]">
      <div className="flex flex-col items-center gap-[10px] ">
        <h1 className=" font-Jakarta text-[25px] leading-9 text-primary_blue font-semibold">
          Set a new password
        </h1>
        <p className=" font-Jakarta text-dark_green/70 text-[20px] font-normal leading-7 text-center ">
          Your new password must be different from your last password.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-[50px]"
          autoComplete="off"
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" font-Jakarta font-medium text-[16px] text-dark_green ">
                  New password <span className="text-[#E75F51]">*</span>
                  <span className="text-[13px] leading-3 font-light italic">
                    (Password must contain numeric and special characters)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="********"
                    className=" !bg-transparent px-3 py-5 md:py-7 font-Jakarta text-[16px] text-dark_green/50 border border-dark_green/50 outline-none active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2  rounded-[5px] "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" font-Jakarta font-medium text-[16px] text-dark_green ">
                  Confirm password <span className="text-[#E75F51]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="********"
                    className=" !bg-transparent px-3 py-5 md:py-7 font-Jakarta text-[16px] text-dark_green/50 border border-dark_green/50 outline-none active:border-home_border_gradient_color_2 hover:border-home_border_gradient_color_2  rounded-[5px] "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-[10px]">
            <Button
              type="submit"
              className=" w-full  py-6 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewPassword;
