import { Link } from "lucide-react";
import React, { FC, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MessageType } from "@/types";

interface NewMessageProps {
 onSend: (message: MessageType) => void;
}

const NewMessage: FC<NewMessageProps> = ({
    onSend
   
}) => {
  const [message, setMessage] = useState<string>("");
 
  return (
    // <div className="bg-white p-5 z-[99]  flex items-center gap-2 md:gap-5 sticky bottom-0 left-0 right-0 ">
    <div className="fixed bottom-0 left-0 right-0 flex gap-1 items-center p-4 bg-white container">
      <Link className=" h-4 w-4 md:h-6 md:w-6 text-dark_green/70" />
      <Input
        placeholder="Write a message..."
        className="w-full flex-1 "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        onClick={() => {
            onSend({
                message,
                time: "now",
                userType: "sender",
            
            })
      

       
            setMessage("");
            }
        }

                


        className=" bg-primary_blue hover:bg-primary_blue text-white hover:text-white p-3 w-fit font-Jakarta font-medium text-base"
      >
        Send
      </Button>
    </div>
  );
};

export default NewMessage;
