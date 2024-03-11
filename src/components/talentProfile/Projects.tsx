import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { projects } from "@/assets";
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
import { projectFormSchema } from "@/types";
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
import { Label } from "../ui/label";
import { MdOutlineCloudUpload } from "react-icons/md";
import { cn } from "@/lib/utils";

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

const Projects: FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
  });

  function onSubmit(data: z.infer<typeof projectFormSchema>) {
    console.log(data);
  }
  return (
    <div className=" bg-white min-h-[300px] p-5 flex flex-col gap-3">
      <h1 className=" font-Jakarta font-normal text-[20px] leading-7 text-dark_green">
        Projects
      </h1>
      <Separator />
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <img
          src={projects}
          alt=""
          className="h-[100px] w-[100px] object-cover"
        />
        <p className=" font-Jakarta text-center font-normal text-[16px] text-dark_green/70 leading-5">
          Add your best projects and portfolio pieces to showcase your strengths
          and impact.
        </p>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center ">
            <Plus className=" text-[24px] text-primary_blue" />
            <p className=" font-Jakarta font-semibold text-primary_blue text-[20px] leading-7">
              Add Project
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className=" text-left font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                Add project ✍️
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
                    name="name"
                    render={({ field }) => (
                      <FormItem className=" w-1/2">
                        <FormLabel className=" flex items-center justify-between">
                          <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                            Project name
                          </p>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project name"
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
                    name="url"
                    render={({ field }) => (
                      <FormItem className=" w-1/2">
                        <FormLabel className=" flex items-center justify-between">
                          <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                            Project URL
                          </p>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://"
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

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Project Image
                        </p>
                      </FormLabel>
                      <FormControl>
                        <>
                        <Label
                          htmlFor="image"
                          className={cn( " w-[300px] h-[140px] rounded cursor-pointer flex items-center justify-center flex-col gap-2", !selectedImage ? " border border-dashed" : "" )}
                        >
                          {selectedImage ? (
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt=""
                              className=" w-[300px] h-[140px] rounded object-cover"
                            />
                          ) : (
                            <>
                              <MdOutlineCloudUpload className=" w-[40px] h-[40px]  bg-[#0085FF]/10 p-2 rounded-full" />
                              <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                                Drag & drop an image or browse your files
                              </h1>
                              <p className=" w-[90%] font-Jakarta text-center text-[13px] leading-7 font-normal text-dark_green/70">
                                Recommended image size 240 x 140
                              </p>
                            </>
                          )}
                        </Label>
                        <Input
                        //   {...field}
                          type="file"
                          id="image"
                          accept="image/*"
                        //   value={ field?.value?.name ?? ""}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setSelectedImage(file);
                              field.onChange({
                                name: file.name,
                                type: file.type,
                                size: file.size,
                              });
                            //   form.setValue("image", file);
                            }
                          }}
                          ref={field.ref}
                          className=" hidden focus-visible:ring-transparent outline-none"
                        />
                        </>
                      </FormControl>
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
                          className=" focus-visible:ring-transparent min-h-[100px]"
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

export default Projects;
