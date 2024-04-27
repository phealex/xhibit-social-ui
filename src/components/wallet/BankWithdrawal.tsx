import React, { FC, useState } from "react";
import { BackToWallet, OTP, TransactionSuccessful } from "..";
import { useWalletState } from "@/store";
import { Logo } from "@/assets";
import { Copy, RefreshCcwDot } from "lucide-react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useToast } from "../ui/use-toast";
import { CryptoDepositFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const BankWithdrawal: FC = () => {
  const { toast } = useToast();

  const [showOTP, setShowOTP] = useState(false);
  const [transactionSuccessful, setTransactionSuccessful] = useState(false);

  const schema = CryptoDepositFormSchema.pick({
    ngn: true,
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    setShowOTP(true);
  }

  return (
    <div className="flex flex-col h-full container p-10 bg-white w-full justify-between">
      {showOTP ? (
        <OTP
          handleSubmit={() => {
            setTransactionSuccessful(true)
             setShowOTP(false);
          }}
        />
      ) : transactionSuccessful ? (
        <TransactionSuccessful />
      ) : (
        <div className=" flex-1 flex flex-col gap-[60px] ">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-[10px]">
              <p className=" font-Jakarta font-medium text-xs text-dark_green">
                My XHIBIT Wallet
              </p>
              <div className=" flex gap-[10px] bg-primary_blue/10 border-2 rounded-lg  border-primary_blue p-5">
                <img src={Logo} alt="" className=" h-10 w-10" />
                <div className="flex flex-col gap-2">
                  <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                    My XHIBIT Wallet
                    <span className=" text-dark_green/70">(NGN 14,700.00)</span>
                  </h1>
                  <p className=" font-Jakarta text-xs font-normal text-dark_green/70">
                    Sonja Koszhenikova
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className=" font-Jakarta text-xs font-normal text-dark_green/70">
                      Wallet ID:
                    </p>
                    <div className="flex items-center gap-1">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        23910327341
                      </p>

                      <CopyToClipboard
                        text={"23910327341"}
                        onCopy={() => {
                          toast({
                            title: "Copied successfully",
                            description: `The wallet ID has been copied to your clipboard`,
                          });
                        }}
                      >
                        <div className="flex gap-2 w-fit cursor-pointer group">
                          <Copy className=" h-5 w-5 text-dark_green/70 group-hover:text-primary_blue" />
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RefreshCcwDot className=" h-8 w-8 text-primary_blue" />
            <div className="flex flex-col gap-[10px]">
              <p className=" font-Jakarta font-medium text-xs text-dark_green">
                Verified bank account
              </p>
              <div className=" flex gap-[10px] bg-[#DE4A09]/10 border-2 rounded-lg  border-[#DE4A09] p-5">
                <img src={""} alt="Logo" className=" h-10 w-10" />
                <div className="flex flex-col gap-2">
                  <h1 className=" font-Jakarta font-medium text-base text-dark_green">
                    Guarantee Trust Bank
                    <span className=" text-dark_green/70">(NGN 14,700.00)</span>
                  </h1>
                  <p className=" font-Jakarta text-xs font-normal text-dark_green/70">
                    Sonja Koszhenikova
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className=" font-Jakarta text-xs font-normal text-dark_green/70">
                      Wallet ID:
                    </p>
                    <div className="flex items-center gap-1">
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        23910327341
                      </p>

                      <CopyToClipboard
                        text={"23910327341"}
                        onCopy={() => {
                          toast({
                            title: "Copied successfully",
                            description: `The wallet ID has been copied to your clipboard`,
                          });
                        }}
                      >
                        <div className="flex gap-2 w-fit cursor-pointer group">
                          <Copy className=" h-5 w-5 text-dark_green/70 group-hover:text-primary_blue" />
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-[400px] flex flex-col gap-5"
            >
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

export default BankWithdrawal;
