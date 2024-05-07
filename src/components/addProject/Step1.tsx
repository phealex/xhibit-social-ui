import { AddProjectFormSchema, MultiStepProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { DateRange } from "react-day-picker";
import { useProjectFormState } from "@/store";

const Step1: FC<MultiStepProps> = ({ handleNext, handlePrev }) => {
  const schema = AddProjectFormSchema.pick({
    title: true,
    category: true,
    duration: true,
    description: true,
  });

   const projectForm = useProjectFormState((state) => state.projectForm);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
        title: projectForm.title,
        category: projectForm.category,
        duration: projectForm.duration,
        description: projectForm.description,


    //   duration: {
    //     from: new Date(),
    //     to: addDays(new Date(), 7),
    //   },
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useProjectFormState.setState({ projectForm: {
        ...projectForm,
        title: data.title,
        category: data.category,
        duration: data.duration,
        description: data.description,
    }});
    handleNext();
  }

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  function handleSetDate(date: DateRange) {
    setDate(date);
    form.setValue("duration", {
      from: date?.from as Date,
      to: date?.to as Date,
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Project Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a title that best describe the project"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Project category
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Project category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="software">Software</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Project category
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {/* {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )} */}
                    {field.value.from ? (
                      field.value.to ? (
                        <>
                          {format(field.value.from, "LLL dd, y")} -{" "}
                          {format(field.value.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(field.value.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={(date) => handleSetDate(date as DateRange)}
                    disabled={(date) => date < new Date()}
                    numberOfMonths={1}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
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
                  Project description
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
                  placeholder="Please provide a brief project summary, outlining your goals and describing how you intend to contribute to this initiative. This information will help us understand the project's objectives and your role in its success."
                  className=" focus-visible:ring-transparent min-h-[260px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-between gap-[100px] items-center">
          <Button
            type="reset"
            onClick={handlePrev}
            className="w-[160px] font-Jakarta font-medium text-base bg-transparent hover:bg-transparent border border-dark_green/70 rounded-md text-dark_green/70"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-[160px] font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Step1;
