import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CryptoDepositFormSchema } from "@/types";
import { cryptoCurrencyOptions, cryptoNetworkOption } from "@/constants";
import { Input } from "../ui/input";

const CryptoPayment: FC = () => {
  const form = useForm<z.infer<typeof CryptoDepositFormSchema>>({
    resolver: zodResolver(CryptoDepositFormSchema),
  });

  function onSubmit(data: z.infer<typeof CryptoDepositFormSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                Select currency
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className=" ">
                  <SelectTrigger className=" h-fit w-full">
                    <SelectValue
                      className=" h-fit w-full "
                      placeholder="Select a cryptocurrency"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cryptoCurrencyOptions.map((option, index) => (
                    <SelectItem
                      key={index}
                      value={option.name}
                      className=" !flex !flex-row gap-2"
                    >
                      <img src={option.icon} alt="" className=" h-5 w-5" />
                      <div className="flex flex-col gap-1">
                        <p className=" font-Jakarta text-nowrap whitespace-nowrap text-left font-medium text-base text-dark_green">
                          {option.symbol}
                        </p>
                        <p className=" font-Jakarta text-nowrap whitespace-nowrap text-left font-normal text-xs text-dark_green">
                          {option.name}
                        </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="network"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                Select network
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=" h-fit w-full">
                    <SelectValue
                      className=" h-fit w-full"
                      placeholder="Select a network"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cryptoNetworkOption.map((option, index) => (
                    <SelectItem
                      key={index}
                      value={option.name}
                      className=" flex gap-1 items-center"
                    >
                      <div className="flex flex-col gap-1">
                        <p className=" font-Jakarta text-left font-normal text-xs text-dark_green">
                          {option.icon}
                        </p>
                        <p className=" font-Jakarta text-left font-medium text-base text-dark_green">
                          {option.name} ({option.symbol})
                        </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ngn"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex justify-between items-center pb-2 border-b  ">
                  <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                    Amount in NGN:
                  </FormLabel>
                  <Input
                    placeholder="0"
                    type="number"
                    className=" flex-1 text-right border-none outline-none focus-visible:ring-transparent"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="crypto"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex justify-between items-center pb-2 border-b  ">
                  <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                    Amount in crypto:
                  </FormLabel>
                  <Input
                    placeholder="0"
                    type="number"
                    className=" flex-1 text-right border-none outline-none focus-visible:ring-transparent"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary_blue py-3 px-5 font-Jakarta font-normal text-base text-white rounded-md hover:bg-primary_blue/90"
        >
          Pay
        </Button>
      </form>
    </Form>
  );
};

export default CryptoPayment;
