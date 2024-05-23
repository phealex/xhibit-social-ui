import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { AddServiceFormSchema } from "@/types";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { useProjectDisplay } from "@/store";
import { ImagePlus } from "lucide-react";

const AddService: FC = () => {
  
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 6);
      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  const form = useForm<z.infer<typeof AddServiceFormSchema>>({
    resolver: zodResolver(AddServiceFormSchema),
  });

  function onSubmit(data: z.infer<typeof AddServiceFormSchema>) {
    console.log(data);
  }

  return (
    <div className=" container flex gap-10 mb-20">
      <div className="hidden  md:flex flex-col gap-5 items-start md:w-[261px] lg:w-[350px] bg-dark_green/5 justify-center  rounded-md h-[350px] ">
      <div className="grid grid-cols-3 gap-2 mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border border-gray-300 p-1 h-[60px] w-[60px] rounded-md">
              {images[index] ? (
                <img src={String(images[index])} alt={`Selected ${index + 1}`} className="w-full h-full object-cover rounded-md" />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <input id="image-upload" aria-label="image" type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" />
                 <ImagePlus size={24} className=" text-dark_green/70" />
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className=" font-Jakarta font-medium text-base w-full text-center">
            Upload service image
          </h1>
          <p className=" font-Jakarta font-normal text-[13px] leading-6 text-dark_green/70 container text-center">
            Add upto 6 images for potential clients to see what you're offering
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className=" font-Jakarta font-semibold text-xl text-dark_green">
            Add service
          </h1>
          <p className=" font-Jakarta font-normal text-[13px]  leading-6">
            Add a service to let potential clients know what you're available
            for, and help them easily book you.
          </p>
        </div>

        <div className="flex flex-1 flex-col w-full gap-[30px] max-w-[500px] ">
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
                      Service name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a title that best describe the service"
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" flex items-center justify-between">
                      <p className=" font-Jakarta text-[16px] leading-5 text-dark_green font-medium">
                        Service description
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
                        placeholder="Describe your service in detail: Explain what you offer, your unique approach, and the benefits clients can expect. Be specific and highlight what sets your service apart."
                        className=" focus-visible:ring-transparent min-h-[260px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="delivery"
                render={({ field }) => (
                  <FormItem className=" w-full flex flex-col gap-[2px]">
                    <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                      Delivery time
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E.g 2 weeks"
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
                name="iterations"
                render={({ field }) => (
                  <FormItem className=" w-full flex flex-col gap-[2px]">
                    <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                      Iteration
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Number of iterations"
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                    <FormDescription className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70">
                      Select service category to help clients find your service.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className=" w-full flex flex-col gap-[2px]">
                    <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                      Service price
                    </FormLabel>
                    <div className="flex justify-between h-[54px]  items-center border border-dark_green/50 rounded-[9px] ">
                      <FormControl>
                        <Input
                          className="outline-none h-full w-[80%] border-none active:outline-none rounded-[9px]"
                          autoComplete="false"
                          placeholder="0"
                          type="number"
                          {...field}
                        />
                      </FormControl>

                      <div className="font-Jakarta font-medium text-[16px] text-white h-full bg-primary_blue flex px-4 items-center rounded-r-[9px]">
                        NGN
                      </div>
                    </div>
                    <FormDescription className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70">
                      Your fees will be deducted from this amount.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex w-full justify-between gap-[150px] items-center">
                <Button
                  type="reset"
                  onClick={() => {
                    useProjectDisplay.setState({ addNew: null });
                  }}
                  className="w-[160px] font-Jakarta font-medium text-base bg-transparent hover:bg-transparent border border-dark_green/70 rounded-md text-dark_green/70"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-[160px] font-Jakarta font-medium text-base bg-primary_blue hover:bg-primary_blue border-none rounded-md text-white"
                >
                  Publish service
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
