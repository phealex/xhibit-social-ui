import { FC } from "react";
import { Card, CardContent } from "../ui/card";
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

const AddCard: FC = () => {
  const form = useForm<z.infer<typeof AddCardFormSchema>>({
    resolver: zodResolver(AddCardFormSchema),
  });

  function onSubmit(data: z.infer<typeof AddCardFormSchema>) {
    console.log(data);
  }
  return (
    <Card className=" border-none outline-none">
      <CardContent className=" flex flex-col gap-[30px] p-6">
        <p className=" font-Jakarta font-medium text-[31px] leading-[44px] text-dark_green uppercase">
          add new card
        </p>
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
                  <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
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
                  <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
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
                  <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
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

                  <FormLabel className=" font-Jakarta font-medium text-base text-dark_green cursor-pointer space-y-0">
                    For quick and hassle-free deposits to your wallet, Saved
                    your card details.
                  </FormLabel>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base text-white rounded-md hover:bg-primary_blue/90"
            >
              Save card
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddCard;
