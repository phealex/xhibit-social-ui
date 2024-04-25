import  { FC } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CryptoDepositFormSchema } from '@/types'
import { cryptoCurrencyOptions } from '@/constants'

const CryptoPayment: FC = () => {
    const form = useForm<z.infer<typeof CryptoDepositFormSchema>>({
        resolver: zodResolver(CryptoDepositFormSchema),
      })

      function onSubmit(data: z.infer<typeof CryptoDepositFormSchema>) {
        console.log(data)
      }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-Jakarta font-normal text-base text-dark_green">Select currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a cryptocurrency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {
                        cryptoCurrencyOptions.map((option, index) => (
                            <SelectItem key={index} value={option.name} className=" flex gap-1 items-center">
                                <img src={option.icon} alt="" className=" h-2 w-2" />
                                <p className=" font-Jakarta font-medium text-base text-dark_green">
                                    {option.symbol}
                                </p>
                                <p className=" font-Jakarta font-normal text-xs text-dark_green">
                                    {option.name}
                                </p>
                                
                            </SelectItem>
                        ))
                    }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CryptoPayment