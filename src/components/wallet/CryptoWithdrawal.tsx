import { FC, useState } from "react";
import { BackToWallet, OTP, TransactionSuccessful } from "..";
import { useWalletState } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CryptoWithdrawFormSchema } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cryptoCurrencyOptions, cryptoNetworkOption } from "@/constants";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

const CryptoWithdrawal: FC = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [transactionSuccessful, setTransactionSuccessful] = useState(false);

  const form = useForm<z.infer<typeof CryptoWithdrawFormSchema>>({
    resolver: zodResolver(CryptoWithdrawFormSchema),
    defaultValues: {
        currency: "BTC",
    },
  });

  function onSubmit(data: z.infer<typeof CryptoWithdrawFormSchema>) {
    console.log(data);
    setShowOTP(true);
  }
  return (
    <div className="flex flex-col h-full container p-10 bg-white w-full gap-5 justify-between ">
      {showOTP ? (
        <OTP
          handleSubmit={() => {
            setTransactionSuccessful(true);
            setShowOTP(false);
          }}
        />
      ) : transactionSuccessful ? (
        <TransactionSuccessful />
      ) : (
        <div className=" flex-1 flex flex-col gap-[60px] w-full max-w-[360px] ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-[400px] flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                      Chose wallet to withdraw from
                    </FormLabel>
                    <div className="flex gap-3 items-center flex-wrap">
                      {cryptoCurrencyOptions.map((option, index) => (
                        <FormControl key={index}>
                          <Button
                          type="button"
                            onClick={() => {
                              field.onChange(option.symbol);
                            }}
                            className={cn(
                              "flex items-center gap-2 bg-dark_green/10 p-2 rounded-md hover:bg-primary_blue",
                              field.value === option.symbol && "bg-primary_blue"
                            )}
                          >
                            <img
                              src={option.icon}
                              alt=""
                              className="h-5 w-5 bg-white rounded-full p-[1px] object-contain"
                            />
                            <p className=" uppercase font-Jakarta font-medium text-xs text-dark_green">
                              {option.symbol}
                            </p>
                          </Button>
                        </FormControl>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=" bg-primary_blue p-5 w-full flex flex-col gap-2 rounded-lg ">
                <p className=" font-Jakarta font-normal text-xs text-white/70">
                  My {form.getValues("crypto")} Wallet
                </p>
                <h1 className=" font-Jakarta font-medium text-[31px] leading-[44px] text-white ">
                  $0.00
                </h1>
                <p className=" font-Jakarta font-normal text-xs text-white flex items-center gap-1">
                  <TrendingUp className=" h-2 w-4 text-accent_green " />
                  5,432.42 (12.32%)
                </p>
              </div>

              <FormField
                control={form.control}
                name="network"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                      Select network
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                name="wallet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                      Enter receiving crypto wallet ID
                    </FormLabel>
                    <FormControl>
                      <div className="flex justify-between items-center pb-2 border-b  ">
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
                          Amount in Crypto:
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
        </div>
      )}
      <BackToWallet
        handleBack={() => {
          useWalletState.setState({
            isShowWithdrawal: false,
          });
        }}
      />
    </div>
  );
};

export default CryptoWithdrawal;
