import { FC } from "react";
import { Separator } from "../ui/separator";
import { search } from "@/assets";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { experienceFormSchema } from "@/types";
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
import Select from "react-select";
import { Checkbox } from "../ui/checkbox";

import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const techUsed: string[] = [
  "React.js",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "C#",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
];

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const options: {
  label: string;
  value: string;
}[] = techUsed.map((tech) => ({ label: tech, value: tech }));

const Experience: FC = () => {
  const form = useForm<z.infer<typeof experienceFormSchema>>({
    resolver: zodResolver(experienceFormSchema),
  });

  function onSubmit(data: z.infer<typeof experienceFormSchema>) {
    console.log(data);
  }
  return (
    <div className=" bg-white min-h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Work experience
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img src={search} alt="" className="h-[100px] w-[100px] object-cover" />
        <p className=" font-Jakarta text-center font-normal text-[16px] text-dark_green/70 leading-5">
          Showcase your skills and knowledge through professional experience.{" "}
          <br />
          Insight: Our data suggests that having three or more experiences
          increases interview opportunities.
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add work experience
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Add your work history 💼
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
                <div className="flex gap-10 items-center w-full ">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className=" w-1/2">
                        <FormLabel className=" flex items-center justify-between">
                          <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                            Company
                          </p>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Company"
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
                    name="title"
                    render={({ field }) => (
                      <FormItem className=" w-1/2">
                        <FormLabel className=" flex items-center justify-between">
                          <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                            Job title
                          </p>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Job title"
                            className="focus-visible:ring-transparent outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Controller
                  control={form.control}
                  name="technologies"
                  // defaultValue={
                  //   form.watch("technologies") || { value: "", label: "" }
                  // }
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={options}
                      // isClearable
                      isSearchable
                      isMulti
                      placeholder="Technologies"
                      className="focus-visible:ring-transparent outline-none"
                      // value={ options.find((o) => o.value === field.value?.value)}
                      // onChange={(value) => {
                      //   field.onChange(...field.value, value);
                      //   form.setValue("technologies", value);
                      // }
                      
                    />
                    
                  )}
                  rules={{
                    required: "This field is required",
                  }}
                />

                <div className="flex flex-col w-full gap-10 md:flex-row items-center">
                <div className=" w-full md:w-1/2 flex flex-col gap-2 ">
                  <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                              Start date
                            </p>
                            <div className="flex gap-5 items-center">
                    <FormField
                      control={form.control}
                      name="startMonth"
                      render={({ field }) => (
                        <FormItem className=" w-1/2">
                        
                          <SelectComponent
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="April" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {months.map((month) => (
                                <SelectItem key={month} value={month}>
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </SelectComponent>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startYear"
                      render={({ field }) => (
                        <FormItem className=" w-1/2">
                          <FormControl>
                            <Input
                              placeholder="2020"
                              className="focus-visible:ring-transparent outline-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    </div>
                  </div>

                  <div className=" w-full md:w-1/2 flex flex-col gap-2 ">
                  <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                              End date
                            </p>
                            <div className="flex gap-5 items-center">

                    <FormField
                      control={form.control}
                      name="endMonth"
                      render={({ field }) => (
                        <FormItem className=" w-1/2">
                         
                          <SelectComponent
                            onValueChange={field.onChange}
                            defaultValue={field.value ?? ""}
                            disabled={form.watch("current")}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="June" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {months.map((month) => (
                                <SelectItem key={month} value={month}>
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </SelectComponent>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endYear"
                      render={({ field }) => (
                        <FormItem className=" w-1/2">
                        
                          <FormControl>
                            <Input
                              placeholder="2023"
                              className="focus-visible:ring-transparent outline-none"
                              {...field}
                              disabled={form.watch("current")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                            </div>

                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="current"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className=" text-primary_blue focus:ring-primary_blue bg-white "
                        />
                      </FormControl>
                      <div className="space-y-1 font-Jakarta font-medium text-[16px] leading-5">
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Description
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
                  type="button"
                  onClick={() => {
                    form.handleSubmit(onSubmit)();
                  }}
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

export default Experience;
