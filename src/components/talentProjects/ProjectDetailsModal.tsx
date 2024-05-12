import { FC, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useProjectDisplay } from "@/store";
import { ReviewData, projects } from "@/constants";
import { Check, Mail, MapPin, Newspaper, Star, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { ProjectCard, ReviewCard } from "..";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HireTalentFormSchema, BuyProjectFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { Dmitry } from "@/assets";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const ProjectDetailsModal: FC = () => {
  const showProjectDetails = useProjectDisplay(
    (state) => state.showProjectDetails
  );
  const projectToShowId = useProjectDisplay((state) => state.projectToShowId);
  const project = projects.find((project) => project.id === projectToShowId);
  const projectModalActive = useProjectDisplay(
    (state) => state.projectModalActive
  );

  const [isHire, setIsHire] = useState<boolean>(false);
  const [isBuy, setIsBuy] = useState<boolean>(false);
  const [isHireSent, setIsHireSent] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof HireTalentFormSchema>>({
    resolver: zodResolver(HireTalentFormSchema),
  });

  function onSubmit(data: z.infer<typeof HireTalentFormSchema>) {
    console.log(data);
    setIsHireSent(true);
  }

  const buyForm = useForm<z.infer<typeof BuyProjectFormSchema>>({
    resolver: zodResolver(BuyProjectFormSchema),
  })
 
  function onBuySubmit(data: z.infer<typeof BuyProjectFormSchema>) {
    console.log(data)
  }
  return (
    <div className="">
      {project?.id ? (
        <Dialog
          open={showProjectDetails}
          onOpenChange={() => {
            useProjectDisplay.setState({ showProjectDetails: false });
            setIsHire(false);
            setIsBuy(false)
          }}
        >
          {isHireSent ? (
            <DialogContent className="p-10 flex flex-col gap-[10px] items-center max-h-[80%] max-w-[700px] overflow-y-auto">
              <div className="flex items-center flex-col gap-[10px]">
                <Check className="h-10 w-10 bg-primary_blue text-white p-2 rounded-full" />
                <h1 className=" font-Jakarta font-semibold text-[31px]  leading-10 text-dark_green text-center">
                  Hire request sent
                </h1>
                <span className=" font-Jakarta font-normal text-base text-center">
                  To
                </span>
              </div>
              <div className=" flex flex-col items-center justify-center gap-2">
                <img src={project.userImage} alt="" className=" h-8 w-8" />
                <div className="flex flex-col gap-[10px]">
                  <p className=" font-Jakarta font-medium text-xs text-dark_green">
                    {project.username}
                  </p>
                  <p className="flex gap-2 items-center font-Jakarta font-normal text-xs text-dark_green/70">
                    <MapPin className="h-4 w-4 text-home_grey " />
                    Lagos, NG
                  </p>
                </div>
              </div>
            </DialogContent>
          ) : (
            <DialogContent className="p-10 flex flex-col gap-[30px] items-center max-h-[80%] max-w-[1000px] !w-fit overflow-y-auto">
              {isHire ? (
                <div className="">
                  <div className="flex gap-5 flex-col items-center">
                    <div className="flex flex-col gap-5 items-center">
                      <div className="flex items-center flex-col gap-5">
                        <img
                          src={project.userImage}
                          alt=""
                          className=" h-20 w-20"
                        />
                        <div className="flex flex-col items-center gap-2">
                          <h1 className=" font-Jakarta font-semibold text-2xl text-dark_green">
                            {project?.username}
                          </h1>
                          <p className="flex gap-2 items-center font-Jakarta font-medium text-base text-home_grey">
                            <MapPin className="h-5 w-5 text-home_grey " />
                            Lagos, NG
                          </p>
                        </div>
                      </div>
                      <p className=" bg-primary_blue/5 px-[10px] py-[5px] font-Jakarta font-medium text-xs text-dark_green/70  ">
                        3 Projects completed on XHIBIT
                      </p>
                    </div>
                    <div className="flex items-center gap-[30px] ">
                      <Button
                        onClick={() => setIsHire(!isHire)}
                        className={cn(
                          " bg-dark_green/5 py-1 h-7 px-5 flex items-center gap-1 rounded-md hover:bg-dark_green/5 font-Jakarta font-medium text-xs text-dark_green/70 ",
                          isHire && "text-primary_blue"
                        )}
                      >
                        <Mail
                          className={cn(
                            "h-4 w-4 text-dark_green/70",
                            isHire && "text-primary_blue"
                          )}
                        />
                        Hire talent
                      </Button>

                      <Button
                        onClick={() => {
                          navigate("/public-profile/2");
                        }}
                        className=" bg-dark_green/5 py-1 h-7 px-5 flex items-center gap-1 rounded-md hover:bg-dark_green/5 font-Jakarta font-medium text-xs text-dark_green/70 "
                      >
                        <Newspaper className="h-4 w-4 text-dark_green/70" />
                        View work profile
                      </Button>
                    </div>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex flex-col gap-5 w-full"
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                              Your message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Type your message here"
                                className="font-Jakarta font-normal text-base text-dark_green"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                              Hiring duration
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Hiring duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="3days">3 days</SelectItem>
                                <SelectItem value="1week">1 week</SelectItem>
                                <SelectItem value="1month">1 month</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                              Your budget
                            </FormLabel>
                            <FormControl>
                              <div className="flex w-full justify-between items-center border border-home_grey rounded px-3">
                                <Input
                                  {...field}
                                  placeholder="0"
                                  className="font-Jakarta font-normal text-base text-dark_green border-none outline-none focus-visible:ring-transparent flex-1"
                                />
                                <p className=" font-Jakarta font-semibold text-base text-dark_green/70">
                                  NGN
                                </p>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className=" flex items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>

                            <FormLabel className=" font-Jakarta font-medium text-base text-dark_green cursor-pointer space-y-0">
                              Allow XHIBIT to provide you a support and project
                              manager. Learn More
                            </FormLabel>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base text-white rounded-md hover:bg-primary_blue/90"
                      >
                        Send inquiry
                      </Button>
                    </form>
                  </Form>
                </div>
              ) : // <div className="flex gap-10 flex-col w-full">
              //   <div className="flex flex-col gap-1 w-full">
              //     <div className="flex w-full gap-5 items-center justify-center ">
              //       <p
              //         onClick={() => {
              //           useProjectDisplay.setState({
              //             projectModalActive: "projects",
              //           });
              //         }}
              //         className={cn(
              //           "font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
              //           projectModalActive === "projects" &&
              //             "text-primary_blue underline underline-offset-4"
              //         )}
              //       >
              //         Projects
              //       </p>
              //       <p
              //         onClick={() => {
              //           useProjectDisplay.setState({
              //             projectModalActive: "reviews",
              //           });
              //         }}
              //         className={cn(
              //           "font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
              //           projectModalActive === "reviews" &&
              //             "text-primary_blue underline underline-offset-4"
              //         )}
              //       >
              //         Reviews ({ReviewData.length})
              //       </p>
              //     </div>
              //     <Separator />
              //   </div>
              //   <div className=" w-full flex justify-center ">
              //     {
              //       {
              //         projects: (
              //           <div className="flex gap-5 flex-wrap items-center mx-auto">
              //             {projects.slice(0, 3).map((project, index) => (
              //               <ProjectCard
              //                 key={index}
              //                 project={project}
              //                 showMore={false}
              //               />
              //             ))}
              //           </div>
              //         ),
              //         reviews: (
              //           <div className="flex gap-5 flex-wrap items-center mx-auto">
              //             {ReviewData.map((review, index) => (
              //               <ReviewCard key={index} review={review} />
              //             ))}
              //           </div>
              //         ),
              //       }[projectModalActive]
              //     }
              //   </div>
              // </div>

              project.action === "buy" ? (
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col lg:flex-row gap-[30px]">
                    <div className=" max-w-[400px] w-full flex flex-col gap-5">
                      <img
                        src={project.projectImage}
                        alt=""
                        className="  w-full h-full"
                      />
                      {isBuy && (
                        <div className="flex flex-col gap-[10px]">
                          <p className=" text-dark_green font-Jakarta font-semibold text-xl">
                            {project.projectTitle}
                          </p>
                          <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                            File type:{" "}
                            <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                              zip
                            </span>
                          </p>
                          <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                            File size:{" "}
                            <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                              400 mb
                            </span>
                          </p>
                          <Button className=" bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base flex gap-2 items-start text-white rounded-md hover:bg-primary_blue/90 w-fit">
                            <span className=" text-xs ">NGN</span>
                            10,000
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className=" w-full">
                      {isBuy ? (
                        <div className="flex flex-col gap-[30px]">
                          <p className=" font-Jakarta font-semibold text-xl text-dark_green">
                            Download file
                          </p>
                          <div className="flex flex-col gap-5">
                          <Form {...buyForm}>
      <form onSubmit={buyForm.handleSubmit(onBuySubmit)} className="flex flex-col gap-5">
        <FormField
          control={buyForm.control}
          name="account"
          render={({ field }) => (
            <FormItem>
             <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                              Buy with
                            </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="xhibit">Pay with XHIBIT wallet</SelectItem>
                  <SelectItem value="crypto">Pay with CRYPTO wallet</SelectItem>
                </SelectContent>
              </Select>
           
              <FormMessage />

            </FormItem>
          )}
        />
        <div className="min-h-10 p-4 border-primary_blue bg-primary_blue/10 w-full flex  justify-between  ">
          <div className="flex gap-1 items-center">
            <Wallet className="h-6 w-6 text-primary_blue" />
            <p className=" font-Jakarta text-primary_blue font-medium text-base">
              My {
                buyForm.getValues().account === "xhibit" ? "XHIBIT" : "CRYPTO"
              } wallet
            </p>

          </div>
          <p className=" font-Jakarta text-primary_blue font-medium text-xs">
            Wallet bal: NGN 10,000
          </p>
        </div>
        <Separator />
                  <Button
                    className=" bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base text-white rounded-md hover:bg-primary_blue/90 w-fit ml-auto"
                  >
                    Buy - NGN 10,000
                  </Button>
      </form>
    </Form>
                          </div>
                        </div>
                      ) : (
                        <div className=" flex flex-col gap-5 ">
                          <div className="flex flex-col gap-[10px]">
                            <p className=" text-dark_green font-Jakarta font-semibold text-xl">
                              {project.projectTitle}
                            </p>
                            <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                              File type:{" "}
                              <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                                zip
                              </span>
                            </p>
                            <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                              File size:{" "}
                              <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                                400 mb
                              </span>
                            </p>
                            <Button className=" bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base flex gap-2 items-start text-white rounded-md hover:bg-primary_blue/90 w-fit">
                              <span className=" text-xs ">NGN</span>
                              10,000
                            </Button>
                          </div>

                          <p className=" font-Jakarta font-medium text-xs text-dark_green">
                            {project.projectDescription}
                          </p>
                          <div className="flex flex-col gap-5">
                            <p className=" font-Jakarta font-medium text-base text-dark_green">
                              What do people say about this project
                            </p>
                            {ReviewData.slice(0, 1).map((review, index) => (
                              <ReviewCard key={index} review={review} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {
                    !isBuy && (
                      <>
                  <Separator />
                  <Button
                    onClick={() => setIsBuy(!isBuy)}
                    className=" bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base text-white rounded-md hover:bg-primary_blue/90 w-full"
                  >
                    Buy now
                  </Button>
                      </>
                    )
                  }
                </div>
              ) : (
                <div className="flex gap-[20px] flex-col ">
                  <div className="flex gap-[10px] h-fit">
                    <img
                      src={project.userImage}
                      alt=""
                      className=" h-[54px] w-[54px] object-cover"
                    />
                    <div className="flex flex-col h-full justify-between">
                      <p className=" text-dark_green font-Jakarta font-semibold text-xl">
                        {project.projectTitle}
                      </p>
                      <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                        {project.username}
                      </span>
                    </div>
                  </div>
                  <div className=" flex gap-[20px] lg:gap-[60px] flex-col lg:flex-row items-start ">
                    <div className="flex flex-col gap-[20px] max-w-[400px]">
                      <img
                        src={project.projectImage}
                        alt=""
                        className=" w-full h-[200px] object-cover"
                      />
                      <div className="flex flex-col gap-[10px]">
                        <p className=" text-dark_green font-Jakarta font-semibold text-xl">
                          {project.projectTitle}
                        </p>
                        <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                          Project:{" "}
                          <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                            JavaScript project
                          </span>
                        </p>
                        <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                          Project duration:{" "}
                          <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                            12/10/2022 - 12/10/2023
                          </span>
                        </p>
                      </div>
                      <Separator />
                      <p className=" font-Jakarta font-medium text-xs text-dark_green">
                        {project.projectDescription}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[30px] ">
                      <div className="flex flex-col gap-[10px]">
                        <p className=" text-dark_green font-Jakarta font-semibold text-xl">
                          {project.projectTitle}
                        </p>
                        <p className=" text-dark_green font-Jakarta font-semibold text-xl flex gap-2">
                          Published:
                          <span className=" font-Jakarta font-normal text-base text-dark_green/70 ">
                            January 12, 2022
                          </span>
                        </p>
                      </div>
                      <Button
                        onClick={() => setIsHire(!isHire)}
                        className=" bg-primary_blue py-3 px-5 font-Jakarta font-medium text-base text-white rounded-md hover:bg-primary_blue/90"
                      >
                        Hire talent
                      </Button>
                      <div className="flex gap-2">
                        <img
                          src={Dmitry}
                          alt=""
                          className=" h-8 w-8 object-cover"
                        />
                        <Textarea
                          placeholder="What are your thoughts on this project?"
                          className=" font-Jakarta font-normal text-base text-dark_green"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className=" font-Jakarta font-normal text-base text-[#3A3A3A] ">
                          Tap the start to choose
                        </p>
                        <div className="flex gap-1 item-center">
                          {Array(5)
                            .fill(0)
                            .map((_, index) => (
                              <Star
                                key={index}
                                className={` h-6 w-6  border-none ${
                                  index < (userRating ?? 0)
                                    ? "text-[#FFC107]"
                                    : "text-dark_green"
                                } `}
                                fill={
                                  index < (userRating ?? 0)
                                    ? "#FFC107"
                                    : "#3A3A3A"
                                }
                                onClick={() => {
                                  setUserRating(index + 1);
                                }}
                              />
                            ))}
                        </div>
                      </div>
                      {ReviewData.slice(0, 1).map((review, index) => (
                        <ReviewCard key={index} review={review} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          )}
        </Dialog>
      ) : null}
    </div>
  );
};

export default ProjectDetailsModal;
