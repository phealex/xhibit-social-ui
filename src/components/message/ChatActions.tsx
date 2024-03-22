import { MessageType } from "@/types";
import { FC } from "react"
import { NewMessage, SubmitService } from "..";


interface ChatActionsProps {
    onSend: (message: MessageType) => void;
    showServiceButton: boolean;
}
const ChatActions: FC<ChatActionsProps> = ({
    onSend,
    showServiceButton
}) => {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex flex-col gap-5 w-full items-center p-4 bg-white container'>
        {showServiceButton && (
            <SubmitService />
        )}
        <NewMessage onSend={onSend} />

    </div>
  )
}

export default ChatActions