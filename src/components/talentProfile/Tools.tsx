import { FC } from "react";
import { Separator } from "../ui/separator";
import { tools } from "@/assets";
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
import { toolsFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Select from "react-select";

const Tools: FC = () => {
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

  const options: {
    label: string;
    value: string;
  }[] = techUsed.map((tech) => ({ label: tech, value: tech }));

  const form = useForm<z.infer<typeof toolsFormSchema>>({
    resolver: zodResolver(toolsFormSchema),
  });

  function onSubmit(data: z.infer<typeof toolsFormSchema>) {
    console.log(data);
  }

  return (
    <div className=" bg-white h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Professional tools
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img src={tools} alt="" className="h-[100px] w-[100px] object-cover" />
        <p className=" font-Jakarta text-center font-normal text-[10px] md:text-[16px] text-dark_green/70 leading-3 md:leading-5">
          Add tools you are proficient in
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add tools
            </p>
          </DialogTrigger>
          <DialogContent className="  overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar">
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Tools 🎯
              </DialogTitle>
              <DialogDescription className=" text-left w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                Tools you are proficient in
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[20px] overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar "
              >
                <div className="flex justify-between w-full gap-10"></div>
                <FormField
                  name="tool"
                  control={form.control}
                  // defaultValue={form.watch("title") || { value: "", label: "" }}
                  render={({ field }) => (
                    <FormItem>
                    <Select
                      {...field}
                      options={options}
                      //   isMulti
                      // isClearable
                      isSearchable
                      placeholder="Tools name"
                      className="focus-visible:ring-transparent outline-none w-full"
                      />
                      <FormMessage />

                    </FormItem>
                    )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[12px] md:text-[16px] leading-5 text-dark_green font-medium">
                          Proficiency level
                        </p>
                      </FormLabel>
                      <SelectComponent
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a proficiency level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="master">Master</SelectItem>
                        </SelectContent>
                      </SelectComponent>
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

export default Tools;
