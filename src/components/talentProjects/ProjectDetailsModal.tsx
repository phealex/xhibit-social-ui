import { FC, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useProjectDisplay } from "@/store";
import { ReviewData, projects } from "@/constants";
import { Mail, MapPin, Newspaper } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { ProjectCard, ReviewCard } from "..";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HireTalentFormSchema } from "@/types";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

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

  const form = useForm<z.infer<typeof HireTalentFormSchema>>({
    resolver: zodResolver(HireTalentFormSchema),
  });

  function onSubmit(data: z.infer<typeof HireTalentFormSchema>) {
    console.log(data);
  }
  return (
    <div className="">
      {project?.id ? (
        <Dialog
          open={showProjectDetails}
          onOpenChange={() => {
            useProjectDisplay.setState({ showProjectDetails: false });
          }}
        >
          <DialogContent className="p-10 flex flex-col gap-[30px] items-center max-h-[80%] max-w-[700px] overflow-y-auto">
            <div className="flex gap-5 flex-col items-center">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex items-center flex-col gap-5">
                  <img src={project.userImage} alt="" className=" h-20 w-20" />
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

                <Button className=" bg-dark_green/5 py-1 h-7 px-5 flex items-center gap-1 rounded-md hover:bg-dark_green/5 font-Jakarta font-medium text-xs text-dark_green/70 ">
                  <Newspaper className="h-4 w-4 text-dark_green/70" />
                  View work profile
                </Button>
              </div>
            </div>
            {isHire ? (
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
                          <div className="flex w-full justify-between items-center border border-home_grey rounded">
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
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>

                        <FormLabel className=" font-Jakarta font-medium text-base text-dark_green">
                          Your budget
                        </FormLabel>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            ) : (
              <div className="flex gap-10 flex-col w-full">
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex w-full gap-5 items-center justify-center ">
                    <p
                      onClick={() => {
                        useProjectDisplay.setState({
                          projectModalActive: "projects",
                        });
                      }}
                      className={cn(
                        "font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                        projectModalActive === "projects" &&
                          "text-primary_blue underline underline-offset-4"
                      )}
                    >
                      Projects
                    </p>
                    <p
                      onClick={() => {
                        useProjectDisplay.setState({
                          projectModalActive: "reviews",
                        });
                      }}
                      className={cn(
                        "font-Jakarta font-semibold text-base text-dark_green/70 cursor-pointer",
                        projectModalActive === "reviews" &&
                          "text-primary_blue underline underline-offset-4"
                      )}
                    >
                      Reviews ({ReviewData.length})
                    </p>
                  </div>
                  <Separator />
                </div>
                <div className=" w-full flex justify-center ">
                  {
                    {
                      projects: (
                        <div className="flex gap-5 flex-wrap items-center mx-auto">
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                              key={index}
                              project={project}
                              showMore={false}
                            />
                          ))}
                        </div>
                      ),
                      reviews: (
                        <div className="flex gap-5 flex-wrap items-center mx-auto">
                          {ReviewData.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                          ))}
                        </div>
                      ),
                    }[projectModalActive]
                  }
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};

export default ProjectDetailsModal;
