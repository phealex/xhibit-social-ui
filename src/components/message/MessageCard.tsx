import { ChatType, ReportMessageSchema } from "@/types";
import { FC } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMessagesDisplay } from "@/store";

interface Props {
  chat: ChatType;
  showMore?: boolean;
}
const MessageCard: FC<Props> = ({ chat, showMore = false }) => {
  const reportForm = useForm<z.infer<typeof ReportMessageSchema>>({
    resolver: zodResolver(ReportMessageSchema),
  });

  function onSubmit(data: z.infer<typeof ReportMessageSchema>) {
    console.log(data);
  }
  return (
    <div className="w-[322px] p-2 flex flex-col gap-1 bg-white cursor-pointer hover:bg-accent_blue" onClick={() => {
      useMessagesDisplay.setState({chatToShow: chat.id})  
    }}>
      <p className=" font-Jakarta font-normal text-[10px] leading-4 text-dark_green/70  ml-auto">
        {chat.lastMessageTime}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <img src={chat.userImage} alt="" className=" h-[30px] w-[30px]" />
          <div className="flex flex-col gap-2">
            <p className=" font-Jakarta flex items-center gap-2 font-medium text-[13px] leading-4 text-dark_green">
              {chat.user}
              {chat?.type && (
                <span className=" text-[#E75F51]">{chat.type}</span>
              )}
            </p>
            <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70">
              {chat.lastMessage.slice(0, 30) + "..."}
            </p>
          </div>
        </div>
        {showMore && (
          <HoverCard openDelay={0.000001}>
            <HoverCardTrigger asChild>
              <MoreHorizontal size={24} />
            </HoverCardTrigger>
            <HoverCardContent className="p-4 bg-white flex flex-col items-center gap-5 justify-center w-20">
                  <Dialog>
                    <DialogTrigger className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green">
                      Archive
                    </DialogTrigger>
                    <DialogContent className="flex flex-col justify-center items-center p-6 gap-10">
                      <div className="flex flex-col gap-5 items-center justify-center">
                        <p className=" font-Jakarta font-semibold text-[13px] lg:text-[25px] leading-9 text-dark_green">
                          Archive Conversation
                        </p>
                        <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70 text-center">
                          Are you sure to want to archive this conversation?
                          Note that any files that you've sent in this thread
                          will be archived.{" "}
                        </p>
                      </div>
                      <div className="flex items-center gap-[50px]">
                        <Button
                          type="submit"
                          className=" w-[77px] h-10 bg-accent_red hover:bg-accent_red font-Jakarta text-base text-white font-medium "
                        >
                          Confirm
                        </Button>
                        <DialogClose>
                          <Button
                            type="submit"
                            className=" w-[77px] h-10 bg-transparent hover:bg-transparent font-Jakarta text-base text-dark_green/70 font-medium "
                          >
                            Cancel
                          </Button>
                        </DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger className=" font-Jakarta font-medium text-[13px] leading-4 text-dark_green">
                      Report
                    </DialogTrigger>
                    <DialogContent className="flex flex-col justify-center items-center p-6 gap-10">
                      <div className="flex flex-col gap-5 items-center justify-center">
                        <p className=" font-Jakarta font-semibold text-[13px] lg:text-[25px] leading-9 text-dark_green">
                          Report message
                        </p>
                        <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70 text-center">
                          Please review our Community Guidelines for additional
                          information about what is and isn't permitted on
                          XHIBIT.
                        </p>
                      </div>
                      <Form {...reportForm}>
                        <form
                          onSubmit={reportForm.handleSubmit(onSubmit)}
                          className="w-2/3 space-y-6"
                        >
                          <FormField
                            control={reportForm.control}
                            name="reason"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="spam" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Spam
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="adult content" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Adult Content
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="misinformation/disinformation" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Misinformation / Disinformation
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="fraud/scam" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Fraud / Scam
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="others" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Others
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex items-center gap-[50px]">
                            <Button
                              type="submit"
                              className=" w-[77px] h-10 bg-accent_red hover:bg-accent_red font-Jakarta text-base text-white font-medium "
                            >
                              Confirm
                            </Button>
                            <DialogClose>
                              <Button
                                type="submit"
                                className=" w-[77px] h-10 bg-transparent hover:bg-transparent font-Jakarta text-base text-dark_green/70 font-medium "
                              >
                                Cancel
                              </Button>
                            </DialogClose>
                          </div>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger className=" font-Jakarta font-medium text-[13px] leading-4 text-accent_red">
                      Delete
                    </DialogTrigger>
                    <DialogContent className="flex flex-col justify-center items-center p-6 gap-10">
                      <div className="flex flex-col gap-5 items-center justify-center">
                        <p className=" font-Jakarta font-semibold text-[13px] lg:text-[25px] leading-9 text-dark_green">
                          Delete conversation
                        </p>
                        <p className=" font-Jakarta font-normal text-[13px] leading-4 text-dark_green/70 text-center">
                          Are you sure to want to permanently delete this
                          conversation? Note that any files that you've sent in
                          this thread will be permanently deleted.{" "}
                        </p>
                      </div>
                      <div className="flex items-center gap-[50px]">
                        <Button
                          type="submit"
                          className=" w-[77px] h-10  bg-accent_red hover:bg-accent_red font-Jakarta text-base text-white font-medium "
                        >
                          Confirm
                        </Button>
                        <DialogClose>
                          <Button
                            type="submit"
                            className=" w-[77px] h-10 bg-transparent hover:bg-transparent font-Jakarta text-base text-dark_green/70 font-medium "
                          >
                            Cancel
                          </Button>
                        </DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>
            </HoverCardContent>
          </HoverCard>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
