
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-jama-teal flex items-center justify-center text-white mr-2 flex-shrink-0">
          <span className="text-xs font-bold">J</span>
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
        isUser ? "bg-jama-teal text-white rounded-tr-none" : "bg-gray-100 text-gray-800 rounded-tl-none"
      )}>
        {message.content}
      </div>
      
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white ml-2 flex-shrink-0">
          <span className="text-xs font-bold">U</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
