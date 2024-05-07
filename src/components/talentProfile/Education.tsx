import { FC } from "react";
import { Separator } from "../ui/separator";
import { certification } from "@/assets";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { educationFormSchema } from "@/types";
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
import { Button } from "../ui/button";

const Certification: FC = () => {
  const form = useForm<z.infer<typeof educationFormSchema>>({
    resolver: zodResolver(educationFormSchema),
  });

  function onSubmit(data: z.infer<typeof educationFormSchema>) {
    console.log(data);
  }
  return (
    <div className=" bg-white h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Education
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img
          src={certification}
          alt=""
          className="h-[100px] w-[100px] object-cover"
        />
        <p className=" font-Jakarta text-center font-normal text-[16px] text-dark_green/70 leading-5">
        Add your education and degrees.
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add education
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Education 🎖️
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[20px] overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar "
              >
                <FormField
                  control={form.control}
                  name="school"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          School
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="School"
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
                  name="degree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Degree
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Degree"
                          className=" focus-visible:ring-transparent outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="field"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Field of study
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Field of study"
                          className=" focus-visible:ring-transparent outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-end justify-between">
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" flex items-center justify-between">
                          <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                            Graduation year
                          </p>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="2022"
                            className=" focus-visible:ring-transparent outline-none"
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
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Certification;
