import { FC, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitServiceSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MdOutlineCloudUpload } from "react-icons/md";
import { cn } from "@/lib/utils";
import { FileCheck } from "lucide-react";


const SubmitService: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof SubmitServiceSchema>>({
    resolver: zodResolver(SubmitServiceSchema),
  });

  function onSubmit(data: z.infer<typeof SubmitServiceSchema>) {
    console.log(data);
  }
  return (
    <div className=" w-full py-5 flex justify-center items-center">
      <Dialog>
        <DialogTrigger>
          <Button className=" bg-primary_blue hover:bg-primary_blue text-white hover:text-white p-3 w-fit mx-auto font-Jakarta font-medium text-base">
            Submit Service
          </Button>
        </DialogTrigger>
        <DialogContent className=" flex flex-col gap-[30px]">
          <p className=" font-Jakarta font-semibold text-xl">Submit service</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel className=" flex items-center justify-between">
                        <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                          Project Image
                        </p>
                      </FormLabel> */}
                    <FormControl>
                      <>
                        <Label
                          htmlFor="image"
                          className={cn(
                            " max-w-[400px] h-[120px] rounded cursor-pointer flex items-center justify-center flex-col gap-2",
                            !selectedFile ? " border border-dashed" : ""
                          )}
                        >
                          {selectedFile ? (
                            <div className=" w-full h-full flex justify-center items-center">
                              <FileCheck className=" w-[40px] h-[40px]  bg-[#0085FF]/10 p-2 rounded-full" />
                              <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                                {selectedFile.name}
                              </h1>
                            </div>
                          ) : (
                            <>
                              <MdOutlineCloudUpload className=" w-[40px] h-[40px]  bg-[#0085FF]/10 p-2 rounded-full" />
                              <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green text-center">
                                Upload file
                              </h1>
                            </>
                          )}
                        </Label>
                        <Input
                          //   {...field}
                          type="file"
                          id="image"
                          accept=".zip,.pdf,.doc,.ppt,.xls,.png,.jpg,.mp3,.mp4"
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
                    <FormDescription  className=" font-Jakarta text-xs text-dark_green font-medium">
                      Maximum combined file size 50 MB • Only zip, pdf, doc,
                      ppt, xls, png, jpg, mp3, mp4 allowed
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className=" flex items-center justify-between">
                      <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                        Link to file
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://"
                        className="focus-visible:ring-transparent outline-none w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" flex items-center justify-between">
                      <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                        Add note
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
                        placeholder="Add note here"
                        className=" focus-visible:ring-transparent min-h-[100px]"
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
  );
};

export default SubmitService;
