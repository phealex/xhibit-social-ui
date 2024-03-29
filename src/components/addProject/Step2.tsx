import { AddProjectFormSchema, MultiStepProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import Select from "react-select";
import { Label } from "../ui/label";
import { MdOutlineCloudUpload } from "react-icons/md";
import { File } from "lucide-react";
import { useProjectFormState } from "@/store";

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

const Step2: FC<MultiStepProps> = ({ handleNext, handlePrev }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const schema = AddProjectFormSchema.omit({
    title: true,
    category: true,
    duration: true,
    description: true,
  });

  
  const projectForm = useProjectFormState((state) => state.projectForm);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
        role: projectForm.role,
        image: projectForm.image,
        file: projectForm.file,
        technologies: projectForm.technologies,
        url: projectForm.url,
        skills: projectForm.skills,
        access: projectForm.access,
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    useProjectFormState.setState({ projectForm: {
        ...projectForm,
        role: data.role,
        image: data.image,
        file: data.file,
        technologies: data.technologies,
        url: data.url,
        skills: data.skills,
        access: data.access,
    }});
    handleNext();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Role
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Eg. I was the sole lead designer"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-5">
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
                      className={cn(
                        " w-[240px] h-[140px] rounded cursor-pointer flex items-center justify-center flex-col gap-2",
                        !selectedImage ? " border border-dashed" : ""
                      )}
                    >
                      {selectedImage ? (
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt=""
                          className=" w-[240px] h-[140px] rounded object-cover"
                        />
                      ) : (
                        <>
                          <MdOutlineCloudUpload className=" w-[40px] h-[40px]  bg-[#0085FF]/10 p-2 rounded-full" />
                          <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                            Drag & drop an image or browse
                          </h1>
                          <p className=" w-[90%] font-Jakarta text-center text-[13px] leading-7 font-normal text-dark_green/70">
                            Image max size 10mb
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
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" flex items-center justify-between">
                  <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                    Project file
                  </p>
                </FormLabel>
                <FormControl>
                  <>
                    <Label
                      htmlFor="file"
                      className={cn(
                        " w-[240px] h-[140px] rounded cursor-pointer flex items-center justify-center flex-col gap-2",
                        !selectedImage ? " border border-dashed" : ""
                      )}
                    >
                      {selectedFile ? (
                        <div className=" w-[240px] h-[140px] rounded flex items-center justify-center">
                          <File className=" w-[40px] h-[40px] text-primary_blue  " />
                          <p className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                            {selectedFile.name}
                          </p>
                        </div>
                      ) : (
                        <>
                          <MdOutlineCloudUpload className=" w-[40px] h-[40px]  bg-[#0085FF]/10 p-2 rounded-full" />
                          <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                            Drag & drop an file or browse
                          </h1>
                          <p className=" w-[90%] font-Jakarta text-center text-[13px] leading-7 font-normal text-dark_green/70">
                            File max size 20gb
                          </p>
                        </>
                      )}
                    </Label>
                    <Input
                      //   {...field}
                      type="file"
                      id="file"
                      accept="file/*"
                      //   value={ field?.value?.name ?? ""}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
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
        </div>

        <Controller
          control={form.control}
          name="technologies"
          // defaultValue={
          //   form.watch("technologies") || { value: "", label: "" }
          // }
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Technology used
              </FormLabel>
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
            </FormItem>
          )}
          rules={{
            required: "This field is required",
          }}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Link to project
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="https://"
                  className=" font-Jakarta font-normal text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          control={form.control}
          name="skills"
          // defaultValue={
          //   form.watch("technologies") || { value: "", label: "" }
          // }
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Relevant skills
              </FormLabel>
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
            </FormItem>
          )}
          rules={{
            required: "This field is required",
          }}
        />

        <FormField
          control={form.control}
          name="access"
          render={({ field }) => (
            <FormItem className=" w-full flex flex-col gap-[2px]">
              <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                Project access type
              </FormLabel>
              <SelectComponent
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="View only" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="view">View only</SelectItem>
                  <SelectItem value="edit">Edit only</SelectItem>
                  <SelectItem value="review">Review only</SelectItem>
                </SelectContent>
              </SelectComponent>
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

export default Step2;
