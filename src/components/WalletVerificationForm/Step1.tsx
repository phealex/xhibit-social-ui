import { WalletVerificationFormSchema, MultiStepProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { useWalletState } from "@/store";

const Step1: FC<MultiStepProps> = ({ handleNext, handlePrev }) => {
  const schema = WalletVerificationFormSchema.pick({
    bankName: true,
    accountNumber: true,
    bvn: true,
  });

  const verificationData = useWalletState((state) => state.verificationData);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankName: verificationData.bankName,
      accountNumber: verificationData.accountNumber,
      bvn: verificationData.bvn,
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useWalletState.setState({
      verificationData: {
        ...verificationData,
        bankName: data.bankName,
        accountNumber: data.accountNumber,
        bvn: data.bvn,
      },
    });
    handleNext();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="bankName"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Bank name
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Bank name" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="grb">GTB</SelectItem>
                  <SelectItem value="kuda">Kuda MFB</SelectItem>
                  <SelectItem value="access">Access Bank</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Bank account Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Bank account number"
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
          name="bvn"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Bank verification number (BVN)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Bank verification number (BVN)"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-between gap-[100px] items-center">
          {/* <Button
            type="reset"
            onClick={handlePrev}
            className="w-[160px] font-Jakarta font-medium text-base bg-transparent hover:bg-transparent border border-dark_green/70 rounded-md text-dark_green/70"
          >
            Cancel
          </Button> */}
          <Button
            type="submit"
            className="w-[160px] font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Step1;
