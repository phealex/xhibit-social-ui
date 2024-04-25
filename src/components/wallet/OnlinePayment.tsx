import { FC } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddCardFormSchema } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useWalletState } from '@/store';
import { RiArrowLeftSFill } from 'react-icons/ri';
import {BackToWallet} from '..';


const OnlinePayment: FC = () => {
    const form = useForm<z.infer<typeof AddCardFormSchema>>({
        resolver: zodResolver(AddCardFormSchema),
      });
    
      function onSubmit(data: z.infer<typeof AddCardFormSchema>) {
        // console.log(data);
        useWalletState.setState({
          isConfirmTransaction: true,
        });
      }
  return (
    <div className=' flex flex-col gap-[50px]'>
         <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                    CARD HOLDER NAME
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="CARD HOLDER NAME"
                      className="font-Jakarta font-normal uppercase text-base text-dark_green"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                    CARD NUMBER
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="0000 0000 0000 0000"
                      className="font-Jakarta uppercase font-normal text-base text-dark_green"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">
                    CARD EXPIRY
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="MM/YY"
                      className="font-Jakarta font-normal text-base text-dark_green"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className=" flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormLabel className=" font-Jakarta font-normal text-base text-dark_green cursor-pointer space-y-0">
                    For quick and hassle-free deposits to your wallet, Saved
                    your card details.
                  </FormLabel>

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
       <BackToWallet />

    </div>
  )
}

export default OnlinePayment