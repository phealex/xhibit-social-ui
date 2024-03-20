import { MessageCard } from "@/components";
import { Separator } from "@/components/ui/separator";
import { chatData } from "@/constants";
import { cn } from "@/lib/utils";
import { useMessagesDisplay } from "@/store";
import { ChevronLeftSquare } from "lucide-react";
import { FC } from "react";

const Messages: FC = () => {
  const chatToShow = useMessagesDisplay((state) => state.chatToShow);
  const chatCategoryToShow = useMessagesDisplay(
    (state) => state.chatCategoryToShow
  );
  return (
    <div className=" w-full bg-accent_blue min-h-screen ">
      <div className="flex container w-full md:gap-4 lg:gap-10 bg-white h-full  lg:py-10 ">
        <div
          className={cn(
            " w-full md:w-full lg:w-[20%] flex gap-10 flex-col h-full  ",
            chatToShow && " hidden md:flex"
          )}
        >
          <div className="flex gap-4 flex-col items-center pt-5">
            <p className="flex items-start gap-1 font-Jakarta font-semibold text-[20px] leading-7 text-center text-dark_green">
              Messages
              <span className=" font-medium text-[10px] leading-3 text-white bg-accent_red p-1 rounded-full">
                {chatData.length}
              </span>
            </p>
            <Separator className="w-full bg-dark_green/10" />
          </div>
          <div className="pt-[50px] flex flex-col gap-10 w-full">
            {chatData.map((chat, index) => (
              <MessageCard key={index} chat={chat} showMore={true} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[50px] pt-5 w-full">
          <div className="hidden md:flex flex-col gap-5 w-full">
            <div className="items-center gap-[50px] flex ">
              <p
                className={cn(
                  " font-Jakarta font-semibold cursor-pointer text-[13px] leading-4 text-dark_green/70",
                  chatCategoryToShow === "message" &&
                    " text-primary_blue underline underline-offset-8"
                )}
                onClick={() => {
                  useMessagesDisplay.setState({
                    chatCategoryToShow: "message",
                  });
                }}
              >
                Message
              </p>
              <p
                className={cn(
                  " font-Jakarta font-semibold cursor-pointer text-[13px] leading-4 text-dark_green/70",
                  chatCategoryToShow === "archived" &&
                    " text-primary_blue underline underline-offset-8"
                )}
                onClick={() => {
                  useMessagesDisplay.setState({
                    chatCategoryToShow: "archived",
                  });
                }}
              >
                Archived
              </p>
            </div>
            <Separator orientation="horizontal" className=" flex" />
          </div>

          {chatToShow && chatCategoryToShow === "message" && (
            <div className="flex flex-1 flex-col bg-white">
              <div
                className={cn(
                  "flex gap-4 flex-col items-center w-full justify-center",
                  chatToShow && "flex md:hidden"
                )}
              >
                <div className="flex items-center gap-8 font-Jakarta font-semibold text-[20px] leading-7 mr-auto text-dark_green">
                    <ChevronLeftSquare className="h-6 w-6 text-dark_green cursor-pointer" onClick={() => {
                        useMessagesDisplay.setState({
                            chatToShow: null,
                        });
                        }} />
                  Message
                </div>
                <Separator className="w-full bg-dark_green/10" />
              </div>
              message
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
