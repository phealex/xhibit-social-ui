import { FC } from "react";
import { Separator } from "../ui/separator";
import { headline } from "@/assets";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { headlineFormScheme } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Headline: FC = () => {
  const form = useForm<z.infer<typeof headlineFormScheme>>({
    resolver: zodResolver(headlineFormScheme),
  });

  function onSubmit(data: z.infer<typeof headlineFormScheme>) {
    console.log(data);
  }
  return (
    <div className=" bg-white h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Add your headline and bio
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img
          src={headline}
          alt=""
          className="h-[100px] w-[100px] object-cover"
        />
        <p className=" font-Jakarta text-center font-normal text-[16px] text-dark_green/70 leading-5">
          Write a few sentences about your experience and career aspirations.
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add headline
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Bio and Headline 🤗
              </DialogTitle>
              <DialogDescription className=" text-left w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                Introduce yourself by highlighting your key skills. Show how you
                can be of value to potential employers.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[20px] overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar "
              >
                <FormField
                  control={form.control}
                  name="headline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Headline
                        </p>
                        <p
                          className={` font-Jakarta font-normal text-[16px] leading-5 text-dark_green/70 ${
                            field?.value?.length > 50 ? " text-red-600" : ""
                          }`}
                        >
                          {field?.value?.length}/50
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex. Senior software Developer"
                          className="focus-visible:ring-transparent outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Your bio
                        </p>
                        <p
                          className={` font-Jakarta font-normal text-[16px] leading-5 text-dark_green/70 ${
                            field?.value?.length > 1000 ? " text-red-600" : ""
                          }`}
                        >
                          {field?.value?.length}/1000
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add a short bio to showcase yourself to your potential employers"
                          className=" focus-visible:ring-transparent min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit"
                >
                  Save
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Headline;
