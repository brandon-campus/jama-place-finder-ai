
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage, { Message } from "./ChatMessage";
import { nanoid } from "@/lib/utils";

const initialMessages: Message[] = [
  {
    id: "1",
    content: "¡Hola! Soy Jamito, tu asistente de Jama. ¿Qué tipo de lugar estás buscando hoy?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: nanoid(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: nanoid(),
        content: getRandomResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getRandomResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("café") || lowerInput.includes("cafe")) {
      return "Tengo excelentes cafeterías para recomendarte. ¿Prefieres un lugar tranquilo para trabajar o más animado para socializar?";
    } else if (lowerInput.includes("restaurante") || lowerInput.includes("comer")) {
      return "¿Qué tipo de comida te apetece? ¿Tienes alguna preferencia de precio o ubicación?";
    } else if (lowerInput.includes("bar") || lowerInput.includes("tomar")) {
      return "¿Buscas un bar tranquilo o un lugar más animado? ¿Prefieres terraza o interior?";
    } else if (lowerInput.includes("tranquilo") || lowerInput.includes("silencio")) {
      return "Entiendo que buscas un lugar tranquilo. ¿Es para trabajar, leer o simplemente relajarte?";
    } else {
      return "Cuéntame más sobre lo que estás buscando. ¿Es para una ocasión especial? ¿Solo, en pareja o con amigos?";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="border-gray-300 focus:border-jama-teal focus:ring-jama-teal"
          />
          <Button 
            onClick={handleSend} 
            className="bg-jama-teal hover:bg-jama-teal/90"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
