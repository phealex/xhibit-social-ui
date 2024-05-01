import { RecruiterProfileSetupSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useRecruiterState } from "@/store";

const OrganizationInfo: FC = () => {
  const schema = RecruiterProfileSetupSchema.pick({
    organization: true,
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useRecruiterState.setState({
        isProfileSetup: false
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="organization.size"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Organization size
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Organization size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organization.name"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Organization name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Organization name"
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
          name="organization.industry"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Industry
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
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
          name="organization.bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" flex items-center justify-between">
                <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                  Tell us a bit about the organization
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
                  placeholder="Tell us a bit about the organization"
                  className=" focus-visible:ring-transparent min-h-[260px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default OrganizationInfo;
