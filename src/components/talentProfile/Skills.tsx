import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { role } from "@/assets";
import { Plus, Star, X } from "lucide-react";
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
import { skillFormSchema } from "@/types";
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
import Select from "react-select";

const Skill: FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [highlightedSkills, setHighlightedSkills] = useState<string[]>([]);
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
  

  const handleSkillClick = (skill: string) => {

    const newSkills = selectedSkills.includes(skill) ? selectedSkills.filter((s) => s !== skill) : [...selectedSkills, skill];
    setSelectedSkills(newSkills);
    const findSkill = options.filter((s) => newSkills.includes(s.value));
    form.setValue("skills", findSkill);
  };

  const handleHighlightedSkillClick = (skill: string) => {
    const newSkills = highlightedSkills.includes(skill) ? highlightedSkills.filter((s) => s !== skill) : [...highlightedSkills, skill];
    setHighlightedSkills(newSkills);
    const findSkill = options.filter((s) => newSkills.includes(s.value));
    form.setValue("highlighted", findSkill);
  }
  const form = useForm<z.infer<typeof skillFormSchema>>({
    resolver: zodResolver(skillFormSchema),
  });

  function onSubmit(data: z.infer<typeof skillFormSchema>) {
    console.log(data);
  }

  return (
    <div className=" bg-white h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Skills
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img src={role} alt="" className="h-[100px] w-[100px] object-cover" />
        <p className=" font-Jakarta text-center font-normal text-[10px] md:text-[16px] text-dark_green/70 leading-3 md:leading-5">
          This skills will be highlighted on your profile to match you with
          relevant jobs.
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add skill
            </p>
          </DialogTrigger>
          <DialogContent className="  overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar">
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Skill 🪄
              </DialogTitle>
              <DialogDescription className=" text-left w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                Include a minimum of five skills and highlight three to four as your top skills.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[20px] overflow-y-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar "
              >
                <Controller
                  name="skills"
                  control={form.control}
                  // defaultValue={form.watch("title") || { value: "", label: "" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={options}
                      isMulti
                      // isClearable
                      isSearchable
                      placeholder="Search for a role"
                      className="focus-visible:ring-transparent outline-none"
                    />
                  )}
                  rules={{
                    required: "This field is required",
                  }}
                />

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[12px] md:text-[16px] leading-5 text-dark_green font-medium">
                          Popular skills
                        </p>
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {options.map((skill, index) => (
                            <Button
                              key={index}
                              type="button"
                              onClick={() => handleSkillClick(skill.value)}
                              className={` font-Jakarta text-[10px] md:text-[16px] font-medium text-dark_green bg-dark_green/10 hover:bg-dark_green/10 border rounded-[20px] px-[10px] py-[5px] w-fit ${
                                selectedSkills.includes(skill.value)
                                  ? " text-primary_blue bg-primary_blue/10 border-primary_blue"
                                  : ""
                              }`}
                            >
                              {selectedSkills.includes(skill.value) ? (
                                <X className="text-[12px] md:text-[16px] text-primary_blue" />
                              ) : (
                                <Plus className="text-[12px] md:text-[16px]" />
                              )}
                              {skill.value}
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
                  name="highlighted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[12px] md:text-[16px] leading-5 text-dark_green font-medium">
                          Highlighted skills
                        </p>
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-col gap-1">
                          {form.watch("skills") && form.watch("skills")?.map((skill, index) => (
                            <Button
                              key={index}
                              type="button"
                              onClick={() => handleHighlightedSkillClick(skill.value)}
                              className={` font-Jakarta flex items-center gap-2 text-[10px] h-5 md:text-[16px] font-medium text-dark_green bg-transparent hover:bg-transparent !p-0 !m-0 w-fit 
                                `}
                            >
                              {highlightedSkills.includes(skill.value) ? (
                                <Star size={12} className="text-[8px] md:text-[16px] text-primary_blue " />
                              ) : (
                                <Star size={12} className="text-[8px] md:text-[16px] text-dark_green" />
                              )}
                            {""}  {skill.value}
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

export default Skill;
