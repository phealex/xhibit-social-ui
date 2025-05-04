import { handleNextProps, verifyEmailSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useMutation } from "@apollo/client";
import ClipLoader from "react-spinners/ClipLoader";
import { CheckCircle2 } from "lucide-react";
import { toast } from "../ui/use-toast";
import { useAuthState } from "@/store";
import {
  useTriggerEmailVerificationMutation,
  useTriggerPhoneVerificationMutation,
  useVerifyEmailMutation,
  useVerifyPhoneMutation,
} from "@/__generated__/graphql";

const Verification: FC<handleNextProps> = ({ handleNext }) => {
  const authData = useAuthState((state) => state.authData);

  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    resolver: zodResolver(verifyEmailSchema),
  });

  const [
    triggerEmailVerificationMutation,
    { loading: triggerEmailVerificationLoading },
  ] = useTriggerEmailVerificationMutation({
    onCompleted: (data) => {
      console.log(data.triggerEmailVerification, "email");
      if (data.triggerEmailVerification) {
        toast({
          title: "Email verification code sent successfully",
          description: "Please check your email for the verification code",
        });
      }
    },
    onError: (error) => {
      toast({
        title: error.message,
        description: error.graphQLErrors[0].message,
      });
    },
  });
  const [
    triggerPhoneVerificationMutation,
    { loading: triggerPhoneVerificationLoading },
  ] = useTriggerPhoneVerificationMutation({
    onCompleted: (data) => {
      console.log(data.triggerPhoneVerification, "phone");
      if (data.triggerPhoneVerification) {
        toast({
          title: "Phone verification code sent successfully",
          description: "Please check your phone for the verification code",
        });
      }
    },
    onError: (error) => {
      toast({
        title: error.message,
        description: error.graphQLErrors[0].message,
      });
    },
  });
  const [
    verifyEmailMutation,
    {
      data: verifyEmailData,
      error: verifyEmailError,
      loading: verifyEmailLoading,
    },
  ] = useVerifyEmailMutation({
    onCompleted: (data) => {
      if (data.verifyEmail) {
        toast({
          title: "Email verification completed successfully",
          description: "You have successfully verified your email",
        });
      }
    },
    onError: (error) => {
      toast({
        title: error.message,
        description: error.graphQLErrors[0].message,
      });
    },
  });

  const [
    verifyPhoneMutation,
    {
      data: verifyPhoneData,
      error: verifyPhoneError,
      loading: verifyPhoneLoading,
    },
  ] = useVerifyPhoneMutation({
    onCompleted: (data) => {
      if (data.verifyPhone) {
        toast({
          title: "Phone verification completed successfully",
          description: "You have successfully verified your phone",
        });
      }
    },
    onError: (error) => {
      toast({
        title: error.message,
        description: error.graphQLErrors[0].message,
      });
    },
  });

  function onSubmit(data: z.infer<typeof verifyEmailSchema>) {
    // console.log(data);

    if (!verifyEmailData?.verifyEmail) {
      verifyEmailMutation({
        variables: {
          otp: data.emailOtp,
        },
      });
    }

    if (!verifyPhoneData?.verifyPhone) {
      verifyPhoneMutation({
        variables: {
          otp: data.phoneOtp,
        },
      });
    }

    if (verifyEmailData?.verifyEmail && verifyPhoneData?.verifyPhone)
      return handleNext();
  }

  return (
    <div className="flex flex-col gap-[50px]">
      <div className=" flex flex-col gap-[10px]">
        <h1 className=" text-[25px]  font-Jakarta leading-9 text-primary_blue text-center">
          Verify email address
        </h1>
        <p className="text-[20px] font-Jakarta leading-7 text-center text-dark_green/70 ">
          Please type in the one time password (OTP) sent to your email address{" "}
          {authData?.email} and phone number.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[30px]"
        >
          <FormField
            control={form.control}
            name="emailOtp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" flex justify-between items-center ">
                  <p className="font-Jakarta font-medium text--[16px] text-dark_green ">
                    Enter the code sent to your Email
                    <span className=" text-[#E75F51]">*</span>
                  </p>
                  <p
                    onClick={() => {
                      if (triggerEmailVerificationLoading) return;
                      if (verifyEmailData?.verifyEmail)
                        return toast({
                          title: "Email already verified",
                          description: "You have already verified your email",
                        });
                      triggerEmailVerificationMutation();
                    }}
                    className="font-Jakarta font-medium text--[16px] text-primary_blue cursor-pointer"
                  >
                    {triggerEmailVerificationLoading ? (
                      <ClipLoader
                        color="#0085ff"
                        loading={triggerEmailVerificationLoading}
                        size={20}
                      />
                    ) : (
                      "Resend code"
                    )}
                  </p>
                </FormLabel>

                <FormControl>
                  <div className=" relative">
                    <Input
                      className="h-[54px] outline-none border border-dark_green/50 active:outline-none"
                      autoComplete="false"
                      placeholder="0-0-0-0"
                      {...field}
                    />
                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                      {verifyEmailData?.verifyEmail ? (
                        <CheckCircle2 className=" text-accent_green" />
                      ) : (
                        <ClipLoader
                          color="#E75F51"
                          loading={verifyEmailLoading}
                          size={20}
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light" />
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light">
                  {verifyEmailError?.graphQLErrors[0].message ||
                    verifyEmailError?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneOtp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" flex justify-between items-center ">
                  <p className="font-Jakarta font-medium text--[16px] text-dark_green ">
                    Enter the code sent to your WhatsApp
                    <span className=" text-[#E75F51]">*</span>
                  </p>
                  <p
                    onClick={() => {
                      if (triggerPhoneVerificationLoading) return;
                      if (verifyPhoneData?.verifyPhone)
                        return toast({
                          title: "Phone already verified",
                          description: "You have already verified your phone",
                        });
                      triggerPhoneVerificationMutation();
                    }}
                    className="font-Jakarta font-medium text--[16px] text-primary_blue cursor-pointer"
                  >
                    {triggerPhoneVerificationLoading ? (
                      <ClipLoader
                        color="#0085ff"
                        loading={triggerPhoneVerificationLoading}
                        size={20}
                      />
                    ) : (
                      "Resend code"
                    )}
                  </p>
                </FormLabel>

                <FormControl>
                  <div className=" relative">
                    <Input
                      className="h-[54px] outline-none border border-dark_green/50 active:outline-none"
                      autoComplete="false"
                      placeholder="0-0-0-0"
                      {...field}
                    />
                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                      {verifyPhoneData?.verifyPhone ? (
                        <CheckCircle2 className=" text-accent_green" />
                      ) : (
                        <ClipLoader
                          color="#E75F51"
                          loading={verifyPhoneLoading}
                          size={20}
                        />
                      )}
                    </div>
                  </div>
                </FormControl>

                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light" />
                <FormMessage className="text-[#E75F51] font-Jakarta text-[13px] font-light">
                  {verifyPhoneError?.graphQLErrors[0].message ||
                    verifyPhoneError?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" w-full  py-4 bg-primary_blue text-white hover:bg-primary_blue hover:text-white font-Jakarta text-[16px] font-medium rounded-md"
          >
            {verifyEmailData?.verifyEmail && verifyPhoneData?.verifyPhone
              ? "Continue"
              : "Verify"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Verification;
