import { MessageType } from "@/types"
import { CheckIcon } from "lucide-react"
import { FC } from "react"


interface ChatCardProps {
    chat: MessageType
}
const ChatCard: FC<ChatCardProps> = ({
    chat
}) => {
  return (
    <div className=" max-w-[240px] flex flex-col gap-1 bg-primary_blue/5 p-2">
        <p className=" font-Jakarta font-medium text-xs text-dark_green text-wrap w-full">
            {chat.message}
        </p>
        <p className=" font-Jakarta font-medium w-fit ml-auto text-[10px] leading-3 text-dark_green/70 flex items-center gap-1">
            <CheckIcon size={10} />
            {chat.time} ago
        </p>

    </div>
  )
}

export default ChatCard