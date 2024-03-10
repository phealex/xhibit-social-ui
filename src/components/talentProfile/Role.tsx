import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { role } from "@/assets";
import { Check, Plus, Search, X } from "lucide-react";
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
import { roleFormSchema } from "@/types";
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const roleTitle: {
  label: string;
  value: string;
}[] = [
  {
    label: "Business Analyst",
    value: "Business Analyst",
  },
  {
    label: "Recruitment & HR",
    value: "Recruitment & HR",
  },
  {
    label: "Product Design",
    value: "Product Design",
  },
  {
    label: "Software Engineer",
    value: "Software Engineer",
  },
  {
    label: "Data Analyst",
    value: "Data Analyst",
  },
  {
    label: "Marketing",
    value: "Marketing",
  },
  {
    label: "Sales",
    value: "Sales",
  },
] as const;

const Role: FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const roleList: string[] = [
    "Business Analyst",
    "Recruitment & HR",
    "Product Design",
    "Software Engineer",
    "Data Analyst",
    "Marketing",
    "Sales",
  ];

  const handleSkillClick = (skill: string) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
    // form.setValue("roles", selectedSkills);
  };
  const form = useForm<z.infer<typeof roleFormSchema>>({
    resolver: zodResolver(roleFormSchema),
  });

  function onSubmit(data: z.infer<typeof roleFormSchema>) {
    console.log(data);
  }

  return (
    <div className=" bg-white h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Role
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img src={role} alt="" className="h-[100px] w-[100px] object-cover" />
        <p className=" font-Jakarta text-center font-normal text-[10px] md:text-[16px] text-dark_green/70 leading-3 md:leading-5">
          This role will be highlighted on your profile to match you with
          relevant jobs.
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add Role
            </p>
          </DialogTrigger>
          <DialogContent className="  overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar">
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Role 🤗
              </DialogTitle>
              <DialogDescription className=" text-left w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                This will be your primary role, it will be highlighted on your
                profile and use to match you to relevant jobs.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[20px] overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar "
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Select your role
                        </p>
                      </FormLabel> */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              {field.value
                                ? roleTitle.find(
                                    (role) => role.value === field.value
                                  )?.label
                                : "Search for a role"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search for a role..." />
                            <CommandList>
                              <CommandEmpty>No role found.</CommandEmpty>
                              <CommandGroup>
                                {roleTitle?.map((role) => (
                                  <CommandItem
                                    value={role.label}
                                    key={role.value}
                                    onSelect={() => {
                                      form.setValue("title", role.value);
                                    }}
                                    className=" cursor-pointer"
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        role.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {role.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
<FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Select your role
                        </p>
                      </FormLabel> 

                      <FormControl>
                        <Command>
                          <CommandInput
                            placeholder="Search for a role..."
                            onClick={() => setOpen(!open)}
                            onScroll={() => setOpen(!open)}
                          />
                          {open && (
                            <CommandList>
                              <CommandEmpty>No role found.</CommandEmpty>
                              <CommandGroup>
                                {roleTitle?.map((role) => (
                                  <CommandItem
                                    value={role.label}
                                    key={role.value}
                                    onSelect={() => {
                                      form.setValue("title", role.value);
                                      setOpen(false);
                                    }}
                                    onClick={() => {
                                      form.setValue("title", role.value);
                                    }}
                                    className=" cursor-pointer"
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        role.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {role.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          )}
                        </Command>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="roles"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[12px] md:text-[16px] leading-5 text-dark_green font-medium">
                          Select your role
                        </p>
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {roleList.map((skill, index) => (
                            <Button
                              key={index}
                              type="button"
                              onClick={() => handleSkillClick(skill)}
                              className={` font-Jakarta text-[10px] md:text-[16px] font-medium text-dark_green bg-dark_green/10 hover:bg-dark_green/10 border rounded-[20px] px-[10px] py-[5px] w-fit ${
                                selectedSkills.includes(skill)
                                  ? " text-primary_blue bg-primary_blue/10 border-primary_blue"
                                  : ""
                              }`}
                            >
                              {selectedSkills.includes(skill) ? (
                                <X className="text-[12px] md:text-[16px] text-primary_blue" />
                              ) : (
                                <Plus className="text-[12px] md:text-[16px]" />
                              )}
                              {skill}
                            </Button>
                          ))}
                          <Input
                            // placeholder="Software Engineer"
                            // className="focus-visible:ring-transparent outline-none"
                            type="hidden"
                            {...field}
                            value={selectedSkills}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Years of experience in this role
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0"
                          // type="number"
                          className="focus-visible:ring-transparent outline-none"
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

export default Role;
