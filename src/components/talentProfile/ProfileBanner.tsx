import { ChangeEvent, FC, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCloudUpload } from "react-icons/md";
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
import { SetAvailabilitySchema, bioFormSchema } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Globe, MapPin } from "lucide-react";

const ProfileBanner: FC = () => {
  const [image, setImage] = useState<File>();
  const [userImage, setUserImage] = useState<File>();
  const [resume, setResume] = useState<File>();

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files?.length) {
      setImage(event.target.files[0]);
    }
  };

  const handleUserImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files?.length) {
      setUserImage(event.target.files[0]);
    }
  };

  const handleResumeSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files?.length) {
      setResume(event.target.files[0]);
    }
  };

  const availabilityForm = useForm<z.infer<typeof SetAvailabilitySchema>>({
    resolver: zodResolver(SetAvailabilitySchema),
  });

  function onAvailabilityFormSubmit(
    data: z.infer<typeof SetAvailabilitySchema>
  ) {
    console.log(data);
  }

  const bioForm = useForm<z.infer<typeof bioFormSchema>>({
    resolver: zodResolver(bioFormSchema),
  });

  function onBioFormSubmit(data: z.infer<typeof bioFormSchema>) {
    console.log(data);
  }

  return (
    <div className="flex flex-col w-full h-[360px] ">
      <div className="group relative bg-home_grey w-full h-1/2 flex flex-col  rounded-[8px] ">
        {image && (
          <img
            src={image ? URL.createObjectURL(image) : ""}
            alt=""
            className=" w-full h-full object-cover rounded-[5px]"
          />
        )}
        <div
          className={` flex-col p-4 ${
            image
              ? " absolute top-0 bottom-0 left-0  right-0 hidden group-hover:flex "
              : "flex"
          }`}
        >
          <BiEdit className=" w-[25px] h-[25px] p-1 ml-auto text-dark_green bg-white rounded-full" />
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <MdOutlineCloudUpload className=" w-[32px] h-[32px]  text-white" />
            <label
              htmlFor="banner"
              className="cursor-pointer flex flex-col w-full gap-2 items-center justify-center"
            >
              <p className=" font-Jakarta text-white font-medium text-[13px] leading-6">
                Drag and drop an image or browse your files
              </p>
              <p className=" font-Jakarta text-white/70 font-normal text-[13px]">
                Recommended image size: 850x180 px
              </p>
            </label>
            <input
              id="banner"
              type="file"
              accept="image/*"
              className=" hidden"
              onChange={handleImageSelect}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] items-center bg-white px-4">
        <div className="flex gap-4 items-center">
          <div className="-mt-10 bg-white rounded-full p-4 z-10 flex shrink-0 h-[100px] w-[100px] md:h-[180px] md:w-[180px]">
            <div className="relative rounded-full w-full bg-dark_green/70 h-full">
              {userImage ? (
                <img
                  src={userImage ? URL.createObjectURL(userImage) : ""}
                  alt=""
                  className=" w-full h-full object-cover rounded-full"
                />
              ) : (
                <p className=" w-full h-full m-auto flex items-center justify-center font-Jakarta font-semibold text-[20px] leading-8 text-white ">
                  DK
                </p>
              )}
              <label
                htmlFor="userImage"
                className="absolute cursor-pointer top-0 right-[15%] "
              >
                {""}
                <BiEdit className=" w-[25px] h-[25px] p-1  text-dark_green bg-white rounded-full" />
              </label>
              <input
                id="userImage"
                type="file"
                accept="image/*"
                className=" hidden"
                onChange={handleUserImageSelect}
              />
              <Dialog>
                <DialogTrigger className=" px-3 py-1 mx-auto bg-white w-fit absolute top-[90%] md:bottom-0 left-0 right-0 font-Jakarta font-medium text-[9px] md:text-[13px]  text-dark_green shadow-xl ">
                  Set work availability
                </DialogTrigger>
                <DialogContent className="flex flex-col gap-[50px]">
                  <DialogHeader>
                    <DialogTitle className=" font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                      Set your work availability
                    </DialogTitle>
                    <DialogDescription className=" w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                      If you're seeking employment, specify the type of work
                      you're interested in, and it will be displayed on your
                      profile.
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...availabilityForm}>
                    <form
                      onSubmit={availabilityForm.handleSubmit(
                        onAvailabilityFormSubmit
                      )}
                      className="flex flex-col gap-[50px]"
                    >
                      <FormField
                        control={availabilityForm.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Job search status
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="open" />
                                  </FormControl>
                                  <FormLabel className="font-normal font-Jakarta text-dark_green/70 text-[16px]">
                                    I'm looking for work
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="not open" />
                                  </FormControl>
                                  <FormLabel className="font-normal font-Jakarta text-dark_green/70 text-[16px]">
                                    I'm not looking for work
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={availabilityForm.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              I am open to:
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="full-time" />
                                  </FormControl>
                                  <FormLabel className="font-normal font-Jakarta text-dark_green/70 text-[16px]">
                                    Full-time positions
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="part-time" />
                                  </FormControl>
                                  <FormLabel className="font-normal font-Jakarta text-dark_green/70 text-[16px]">
                                    Part-time roles
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="contract" />
                                  </FormControl>
                                  <FormLabel className="font-normal font-Jakarta text-dark_green/70 text-[16px]">
                                    Contract-based jobs
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="internship" />
                                  </FormControl>
                                  <FormLabel className="font-normal font-Jakarta text-dark_green/70 text-[16px]">
                                    Internships
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit">
                        Save
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex md:hidden items-center md:items-start gap-2 ">
            <p className=" font-Jakarta text-[13px] lg:text-[16px] font-semibold  text-dark_green">
              Dmirty Kargaev
            </p>
            <Dialog>
              <DialogTrigger>
                <BiEdit className=" w-[25px] h-[25px] p-1 text-dark_green bg-white rounded-full" />
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className=" font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                    Bio 🤗
                  </DialogTitle>
                  <DialogDescription className=" w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                    To begin, we'll need a few of your personal particulars.
                  </DialogDescription>
                </DialogHeader>

                <Form {...bioForm}>
                  <form
                    onSubmit={bioForm.handleSubmit(onBioFormSubmit)}
                    className="flex flex-col gap-4 lg:gap-10 "
                  >
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              First name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Dmitry"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Last name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Kargaev"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Enter your city
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your city"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Website
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit">
                      Save
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col gap-[25px] ">
          <div className="hidden md:flex items-start gap-2  ">
            <p className=" font-Jakarta text-[31px] font-semibold leading-[44px] text-dark_green">
              Dmirty Kargaev
            </p>
            <Dialog>
              <DialogTrigger>
                <BiEdit className=" w-[25px] h-[25px] p-1 text-dark_green bg-white rounded-full" />
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className=" font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                    Bio 🤗
                  </DialogTitle>
                  <DialogDescription className=" w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                    To begin, we'll need a few of your personal particulars.
                  </DialogDescription>
                </DialogHeader>

                <Form {...bioForm}>
                  <form
                    onSubmit={bioForm.handleSubmit(onBioFormSubmit)}
                    className="flex flex-col gap-4 lg:gap-10 "
                  >
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              First name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Dmitry"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Last name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Kargaev"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Enter your city
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your city"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Website
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit">
                      Save
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex gap-2 md:gap-4 overflow-x-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar">
            <Dialog>
              <DialogTrigger>
                <Button className="p-1 md:p-2 flex gap-2 items-center bg-transparent hover:bg-transparent md:border border-dark_green rounded-[5px] ">
                  <MapPin className=" w-[20px] h-[20px] text-dark_green" />
                  <p className=" font-Jakarta text-[10px]  md:text-[13px] lg:text-[16px] font-normal  text-dark_green">
                    Add Location
                  </p>
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className=" font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                    Bio 🤗
                  </DialogTitle>
                  <DialogDescription className=" w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                    To begin, we'll need a few of your personal particulars.
                  </DialogDescription>
                </DialogHeader>

                <Form {...bioForm}>
                  <form
                    onSubmit={bioForm.handleSubmit(onBioFormSubmit)}
                    className="flex flex-col gap-4 lg:gap-10 "
                  >
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              First name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Dmitry"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Last name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Kargaev"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Enter your city
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your city"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Website
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit">
                      Save
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <Button className="p-2 flex gap-2 items-center bg-transparent hover:bg-transparent md:border border-dark_green rounded-[5px] ">
                  <Globe className=" w-[20px] h-[20px] text-dark_green" />
                  <p className=" font-Jakarta text-[10px]  md:text-[13px] lg:text-[16px] font-normal  text-dark_green">
                    Add Website
                  </p>
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className=" font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                    Bio 🤗
                  </DialogTitle>
                  <DialogDescription className=" w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                    To begin, we'll need a few of your personal particulars.
                  </DialogDescription>
                </DialogHeader>

                <Form {...bioForm}>
                  <form
                    onSubmit={bioForm.handleSubmit(onBioFormSubmit)}
                    className="flex flex-col gap-4 lg:gap-10 "
                  >
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              First name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Dmitry"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Last name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Kargaev"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <FormField
                        control={bioForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Enter your city
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your city"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bioForm.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className=" font-Jakarta font-medium leading-8 text-[20px] text-dark_green">
                              Website
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://"
                                {...field}
                                className=" outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button className=" font-Jakarta text-[16px] ml-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit">
                      Save
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className=" hidden md:flex">
                <Button className="p-2 flex gap-2 items-center bg-transparent hover:bg-transparent md:border border-dark_green rounded-[5px] ">
                  <MdOutlineCloudUpload className=" w-[20px] h-[20px] text-dark_green" />
                  <p className=" font-Jakarta text-[10px]  md:text-[13px] lg:text-[16px] font-normal  text-dark_green">
                    Upload Resume
                  </p>
                </Button>
              </DialogTrigger>
              <DialogContent className=" min-h-[450px]">
                <DialogHeader>
                  <DialogTitle className=" font-Jakarta text-[20px] font-medium leading-8 text-dark_green">
                    Add a resume to your profile
                  </DialogTitle>
                  {/* <DialogDescription className=" w-[90%] font-Jakarta text-[16px] font-normal text-dark_green/70">
                  To begin, we'll need a few of your personal particulars.
                  </DialogDescription> */}
                </DialogHeader>
                <label
                  htmlFor="resume"
                  className="flex flex-col cursor-pointer justify-center items-center m-auto p-6 border rounded-[5px] border-dark_green/70"
                >
                  {resume ? (
                    <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green">
                      {resume.name}
                    </h1>
                  ) : (
                    <>
                      <MdOutlineCloudUpload className=" w-[40px] h-[40px] text-primary_blue bg-[#0085FF]/10 p-2 rounded-full" />
                      <h1 className=" font-Jakarta text-[16px] font-normal text-dark_green">
                        Drag & drop a file or browse
                      </h1>
                      <p className=" w-[90%] font-Jakarta text-center text-[13px] leading-7 font-normal text-dark_green/70">
                        PDF, max size 10mb
                      </p>
                    </>
                  )}
                </label>
                <input
                  id="resume"
                  type="file"
                  accept="application/pdf"
                  className=" hidden"
                  onChange={handleResumeSelect}
                />

                <Button className=" font-Jakarta text-[16px] ml-auto mt-auto font-medium text-white bg-primary_blue hover:bg-primary_blue p-3 w-fit">
                  Save
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
